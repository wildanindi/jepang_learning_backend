require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const publicWebDir = path.join(__dirname, 'public');

// Middleware
app.use(cors());
app.use(express.json());
if (fs.existsSync(publicWebDir)) {
  app.use(express.static(publicWebDir));
}

// Database Kosakata (N5 & N4)
function getVocabularies() {
  try {
    delete require.cache[require.resolve("./data/vocab_data")];
    return require("./data/vocab_data").vocabularies;
  } catch (e) {
    return require("./data/vocab_data").vocabularies;
  }
}

// Import Data Ujian (Exam Data)
function getExamData() {
  try {
    delete require.cache[require.resolve('./data/exam_data')];
    return require('./data/exam_data');
  } catch (e) {
    return require('./data/exam_data');
  }
}

// Healthcheck / Web App Entrypoint
app.get('/', (req, res) => {
  const indexHtmlPath = path.join(publicWebDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    return res.sendFile(indexHtmlPath);
  }
  res.json({
    message: 'API Belajar Bahasa Jepang Active!',
    status: 'online',
    updatedAt: '2026-11-10',
  });
});

// GET /api/sync/meta - Informasi ringkas jumlah data untuk sinkronisasi online
app.get('/api/sync/meta', (req, res) => {
  const vocabs = getVocabularies();
  const examData = getExamData();
  const modulesData = getModulesData();
  res.json({
    status: 'online',
    totalVocabs: vocabs.length,
    totalExamQuestions: examData.examQuestions.length,
    totalModuleGroups: modulesData.getModuleGroups().length,
  });
});

// GET /api/vocabs - Mengambil kosakata dengan filter ?level=N5 atau ?level=N4
app.get('/api/vocabs', (req, res) => {
  const { level } = req.query;
  const vocabs = getVocabularies();

  if (level) {
    const filteredVocabs = vocabs.filter(
      (item) => item.level.toUpperCase() === level.toUpperCase()
    );
    return res.json(filteredVocabs);
  }

  // Jika tidak ada parameter level, kirim semua kosakata
  res.json(vocabs);
});

// GET /api/vocabs/:id - Mengambil detail 1 kosakata berdasarkan ID
app.get('/api/vocabs/:id', (req, res) => {
  const vocabId = parseInt(req.params.id);
  const vocabs = getVocabularies();
  const vocab = vocabs.find((item) => item.id === vocabId);

  if (!vocab) {
    return res.status(404).json({ message: 'Kosakata tidak ditemukan' });
  }

  res.json(vocab);
});

// ===========================================================================
// EXAM ENDPOINTS (UJIAN JLPT N5 & N4)
// ===========================================================================

// GET /api/exam/categories?level=N5 - Mengambil daftar kategori ujian beserta jumlah soal
app.get('/api/exam/categories', (req, res) => {
  const { level = 'N5' } = req.query;
  const categories = getExamData().getCategories(level);
  res.json(categories);
});

// GET /api/exam/questions?level=N5&category=kanji_vocab&limit=20 - Mengambil bank soal ujian
app.get('/api/exam/questions', (req, res) => {
  const { level = 'N5', category, limit } = req.query;
  const questions = getExamData().getQuestions(level, category, limit);
  res.json(questions);
});

// GET /api/exam/questions/:id - Mengambil detail 1 soal ujian
app.get('/api/exam/questions/:id', (req, res) => {
  const questionId = parseInt(req.params.id);
  const question = getExamData().examQuestions.find((item) => item.id === questionId);

  if (!question) {
    return res.status(404).json({ message: 'Soal ujian tidak ditemukan' });
  }

  res.json(question);
});

// ===========================================================================
// LEARNING MODULES ENDPOINTS (MATERI JUMBY MATERIALS)
// ===========================================================================
function getModulesData() {
  try {
    delete require.cache[require.resolve('./data/modules_data')];
    return require('./data/modules_data');
  } catch (e) {
    return require('./data/modules_data');
  }
}

// GET /api/modules/groups - Mengambil daftar 3 kelompok modul besar (Irodori, Kanji, Kaigo)
app.get('/api/modules/groups', (req, res) => {
  const groups = getModulesData().getModuleGroups();
  res.json(groups);
});

// GET /api/modules?group=irodori_a1 - Mengambil daftar modul dalam kelompok tertentu
app.get('/api/modules', (req, res) => {
  const { group } = req.query;
  const modules = getModulesData().getModulesByGroup(group);
  res.json(modules);
});

// GET /api/modules/:id - Mengambil detail isi modul tertentu
app.get('/api/modules/:id', (req, res) => {
  const moduleId = req.params.id;
  const moduleData = getModulesData().getModuleDetail(moduleId);

  if (!moduleData) {
    return res.status(404).json({ message: 'Modul tidak ditemukan' });
  }

  res.json(moduleData);
});

// ===========================================================================
// AI KAIWA ENDPOINTS (SAKURA SENSEI - GEMINI & SMART FALLBACK)
// ===========================================================================
const { generateAiKaiwaResponse } = require('./services/ai_kaiwa_service');

// POST /api/ai/chat - Mengirim pesan obrolan ke AI Kaiwa
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history, level = 'N5' } = req.body;

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ error: 'Parameter message wajib diisi.' });
    }

    const aiResponse = await generateAiKaiwaResponse({
      message: message.trim(),
      history: Array.isArray(history) ? history : [],
      level
    });

    res.json(aiResponse);
  } catch (error) {
    console.error('❌ Error pada endpoint /api/ai/chat:', error);
    res.status(500).json({
      text: 'すみません、エラーが発生しました。もう一度お願いします。',
      romaji: 'Sumimasen, eraa ga hassei shimashita. Mou ichido onegaishimasu.',
      meaning: 'Maaf, terjadi kendala teknis. Silakan coba kirim pesan sekali lagi ya.',
      suggestions: ['Konnichiwa', 'Genki desu ka?', 'Nihongo o benkyou shite imasu']
    });
  }
});

// Jalankan Server saat dijalankan secara lokal / hosting standar (Render/Railway).
// Pada Vercel Serverless Function, Express diekspor langsung melalui module.exports = app.
if (!process.env.VERCEL && require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} sudah digunakan oleh proses lain!`);
      console.error(`Gunakan perintah berikut di PowerShell jika ingin menghentikan proses sebelumnya:`);
      console.error(`Get-Process -Id (Get-NetTCPConnection -LocalPort ${PORT}).OwningProcess | Stop-Process -Force`);
    } else {
      console.error('❌ Server error:', err);
    }
  });
}

module.exports = app;
