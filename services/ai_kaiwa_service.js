// AI Kaiwa Service - Sakura Sensei (さくら先生)
// Mendukung Google Gemini API (Gemini 3.5 Flash, 3.1 Flash Lite, 2.5 Flash) dengan Smart Fallback Offline

// Daftar model Gemini yang dicoba berurutan untuk menjamin ketersediaan tinggi
const CANDIDATE_MODELS = [
  'gemini-3.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-flash-latest',
  'gemini-2.5-flash'
];

/**
 * Menghasilkan respons percakapan Jepang (AI Kaiwa)
 * @param {string} message - Pesan dari user
 * @param {Array} history - Riwayat percakapan [{ role: 'user'|'model', text: '...' }]
 * @param {string} level - Level JLPT ('N5' atau 'N4')
 */
async function generateAiKaiwaResponse({ message, history = [], level = 'N5' }) {
  const apiKey = (process.env.GEMINI_API_KEY || '').trim();

  if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE') {
    try {
      return await callGeminiApi(apiKey, message, history, level);
    } catch (err) {
      console.warn('⚠️ Gagal memanggil Gemini API (mengalihkan ke Fallback Cerdas):', err.message);
      return getSmartFallbackResponse(message, level);
    }
  }

  // Jika belum memasang API key, gunakan Smart Conversational Engine
  return getSmartFallbackResponse(message, level);
}

/**
 * Panggilan ke Gemini API dengan fallback berantai antar model
 */
async function callGeminiApi(apiKey, message, history, level) {
  const systemInstruction = `Kamu adalah Sakura Sensei (さくら先生), seorang guru bahasa Jepang wanita yang sangat ramah, hangat, dan suportif.
Kamu sedang bercakap-cakap santai dalam bahasa Jepang dengan murid tingkat JLPT ${level}.
Tugasmu adalah membalas pesan murid secara alami, kontekstual, dan mengasyikkan.

WAJIB membalas HANYA dalam format JSON murni (tanpa teks pengantar atau markdown wrapper) dengan struktur:
{
  "text": "Kalimat balasan dalam bahasa Jepang (campuran Kanji dan Kana yang sesuai tingkat ${level})",
  "romaji": "Cara baca kalimat balasan dalam ejaan Romaji",
  "meaning": "Terjemahan kalimat balasan dalam bahasa Indonesia yang luwes dan ramah",
  "suggestions": ["2 atau 3 saran kalimat pendek balasan berikutnya dalam Romaji/Kana yang bisa diucapkan murid"]
}

Aturan:
1. Jika murid menyapa, balas sapaan dan tanyakan kabar atau hal menarik.
2. Jika murid bertanya sesuatu, jawab dengan ramah lalu tanyakan balik.
3. Jika kalimat murid ada partikel yang keliru, beri masukan lembut di bagian meaning atau tetap pahami maksudnya.
4. Jangan gunakan markdown backtick jika memungkinkan, kirim string JSON valid.`;

  const contents = [];

  // Masukkan riwayat percakapan sebelumnya
  if (Array.isArray(history)) {
    for (const h of history.slice(-6)) {
      contents.push({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      });
    }
  }

  // Tambahkan pesan terbaru user
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  let lastError = null;

  for (const model of CANDIDATE_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 600
          }
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        lastError = new Error(`Model ${model} returned HTTP ${response.status}: ${errorBody}`);
        continue;
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) continue;

      // Bersihkan format codeblock json jika ada
      let cleaned = rawText.trim();
      if (cleaned.startsWith('```json')) {
        cleaned = cleaned.replace(/^```json/, '').replace(/```$/, '').trim();
      } else if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```/, '').replace(/```$/, '').trim();
      }

      const parsed = JSON.parse(cleaned);
      return {
        text: parsed.text || 'はい、分かりました！😊',
        romaji: parsed.romaji || 'Hai, wakarimashita!',
        meaning: parsed.meaning || 'Baik, saya mengerti!',
        suggestions: Array.isArray(parsed.suggestions) && parsed.suggestions.length > 0
          ? parsed.suggestions
          : ['Hai!', 'Iie', 'Arigatou gozaimasu']
      };
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error('Semua model Gemini tidak dapat dijangkau');
}

/**
 * Smart Conversational Engine (Fallback cerdas berbasis pola percakapan nyata)
 */
function getSmartFallbackResponse(rawInput, level) {
  const input = (rawInput || '').toLowerCase().trim();

  // 1. Salam Pertemuan (Aisatsu)
  if (input.includes('ohayou') || input.includes('おはよう')) {
    return {
      text: 'おはようございます！今日も元気に日本語を勉強しましょうね。☀️',
      romaji: 'Ohayou gozaimasu! Kyou mo genki ni nihongo o benkyou shimashou ne.',
      meaning: 'Selamat pagi! Hari ini mari kita belajar bahasa Jepang dengan semangat ya.',
      suggestions: ['Kyou mo ganbarimasu!', 'Sensei wa genki desu ka?', 'Asagohan o tabemashita']
    };
  }

  if (input.includes('konbanwa') || input.includes('こんばんは')) {
    return {
      text: 'こんばんは！今日も一日お疲れ様でした。夜の勉強ですか？🌙',
      romaji: 'Konbanwa! Kyou mo ichinichi otsukaresama deshita. Yoru no benkyou desu ka?',
      meaning: 'Selamat malam! Terima kasih atas kerja kerasnya hari ini. Apakah kamu sedang belajar di malam hari?',
      suggestions: ['Hai, yoru benkyou shimasu', 'Otsukaresama deshita', 'Mousugu nemasu']
    };
  }

  if (input.includes('konnichiwa') || input.includes('こんにちは') || input.includes('halo') || input.includes('halo')) {
    return {
      text: 'こんにちは！お元気ですか？何か楽しいことがありましたか？🌸',
      romaji: 'Konnichiwa! O-genki desu ka? Nanika tanoshii koto ga arimashita ka?',
      meaning: 'Halo! Apa kabarmu? Apakah ada hal yang menyenangkan hari ini?',
      suggestions: ['Hai, genki desu!', 'Chotto tsukaremashita', 'Nihongo o benkyou shite imasu']
    };
  }

  // 2. Kabar / Keadaan
  if (input.includes('genki') || input.includes('げんき') || input.includes('kabar')) {
    return {
      text: '元気そうで何よりです！私もとても元気ですよ。今日はどんな練習をしたいですか？😊',
      romaji: 'Genkisou de nani yori desu! Watashi mo totemo genki desu yo. Kyou wa donna renshuu o shitai desu ka?',
      meaning: 'Senang sekali mendengarmu sehat! Saya juga sangat sehat. Hari ini kamu ingin latihan apa?',
      suggestions: ['Kaiwa no renshuu o shitai', 'Kotoba o oshiete kudasai', 'Nihon no bunka ni tsuite']
    };
  }

  // 3. Perkenalan Diri / Asal Negara
  if (input.includes('indonesia') || input.includes('インドネシア')) {
    return {
      text: 'インドネシアから来たんですね！ナシゴレンやバリ島が有名ですね。いつか行ってみたいです。🌴',
      romaji: 'Indonesia kara kita n desu ne! Nasi goren ya Bari-tou ga yuumei desu ne. Itsuka itte mitai desu.',
      meaning: 'Wah kamu dari Indonesia ya! Nasi goreng dan Pulau Bali sangat terkenal ya. Suatu saat saya ingin berkunjung ke sana.',
      suggestions: ['Zehi kite kudasai!', 'Kirei na basho desu', 'Nasi goren ga oishii desu']
    };
  }

  if (input.includes('watashi wa') || input.includes('わたしは') || input.includes('nama saya') || input.includes('namae')) {
    return {
      text: '素敵な名前ですね！出会えて嬉しいです。日本へ旅行に行ったことがありますか？✈️',
      romaji: 'Suteki na namae desu ne! Deaete ureshii desu. Nihon e ryokou ni itta koto ga arimasu ka?',
      meaning: 'Nama yang indah! Senang bisa bertemu denganmu. Apakah kamu pernah berlibur ke Jepang?',
      suggestions: ['Mada arimasen', 'Itta koto ga arimasu', 'Itsuka ikitai desu']
    };
  }

  // 4. Makanan & Minuman
  if (input.includes('tabe') || input.includes('makan') || input.includes('sushi') || input.includes('ramen')) {
    return {
      text: 'おいしそうですね！日本料理では、ラーメンと寿司のどちらが好きですか？🍜🍣',
      romaji: 'Oishisou desu ne! Nihon ryouri de wa, raamen to sushi no dochira ga suki desu ka?',
      meaning: 'Kelihatannya enak ya! Dari masakan Jepang, kamu lebih suka ramen atau sushi?',
      suggestions: ['Raamen ga suki desu', 'Sushi ga daisuki desu', 'Docchi mo suki!']
    };
  }

  // 5. Hobi & Anime
  if (input.includes('anime') || input.includes('manga') || input.includes('アニメ') || input.includes('suki')) {
    return {
      text: 'いいですね！日本のアニメやマンガは世界中で大人気ですね。何のアニメをよく見ますか？🎬',
      romaji: 'Ii desu ne! Nihon no anime ya manga wa sekaijuu de daininki desu ne. Nan no anime o yoku mimasu ka?',
      meaning: 'Bagus sekali! Anime dan manga Jepang sangat populer di seluruh dunia. Anime apa yang sering kamu tonton?',
      suggestions: ['Naruto o yoku mimasu', 'One Piece ga suki desu', 'Shingeki no Kyojin']
    };
  }

  // 6. Pekerjaan & Sekolah
  if (input.includes('gakusei') || input.includes('daigaku') || input.includes('shigoto') || input.includes('bekerja') || input.includes('sekolah')) {
    return {
      text: 'そうなんですね！毎日お忙しい中、日本語の勉強を続けていて本当に偉いですね。応援しています！💪',
      romaji: 'Sou nan desu ne! Mainichi o-isogashii naka, nihongo no benkyou o tsuzukete ite hontou ni erai desu ne. Ouen shite imasu!',
      meaning: 'Begitu ya! Di tengah kesibukan sehari-hari, kamu tetap rajin belajar bahasa Jepang, hebat sekali. Saya selalu mendukungmu!',
      suggestions: ['Arigatou gozaimasu!', 'Ganbarimasu!', 'Sensei mo ganbatte!']
    };
  }

  // 7. Ungkapan Terima Kasih
  if (input.includes('arigatou') || input.includes('ありがとう') || input.includes('terima kasih')) {
    return {
      text: 'どういたしまして！お役に立てて嬉しいです。また何でも日本語で話しかけてくださいね。🌸',
      romaji: 'Douitashimashite! O-yaku ni tatete ureshii desu. Mata nan demo nihongo de hanashikakete kudasai ne.',
      meaning: 'Sama-sama! Senang bisa membantumu. Silakan ajak saya ngobrol apa saja lagi dalam bahasa Jepang ya.',
      suggestions: ['Mata hanashimashou', 'O-yasuminasai', 'Sayounara']
    };
  }

  // 8. Pamitan
  if (input.includes('sayounara') || input.includes('mata') || input.includes('dada') || input.includes('bye')) {
    return {
      text: 'さようなら！また次回お話しできるのを楽しみにしています。良い一日を！👋',
      romaji: 'Sayounara! Mata jikai o-hanashi dekiru no o tanoshimi ni shite imasu. Yoi ichinichi o!',
      meaning: 'Sampai jumpa! Saya menantikan percakapan kita berikutnya. Semoga harimu menyenangkan!',
      suggestions: ['Mata aimashou!', 'Sayounara, sensei!', 'Yoi tsuitachi o!']
    };
  }

  // Default Fallback respons dinamis
  return {
    text: 'なるほど、よく分かりました！もっと詳しく教えてもらえますか？日本語の練習になりますよ。✨',
    romaji: 'Naruhodo, yoku wakarimashita! Motto kuwashiku oshiete moraemasu ka? Nihongo no renshuu ni narimasu yo.',
    meaning: 'Begitu ya, saya paham! Bisakah kamu ceritakan lebih banyak? Ini akan jadi latihan bahasa Jepang yang bagus lho.',
    suggestions: ['Hai, mochiron desu!', 'Motto renshuu shitai', 'Watashi wa nihongo ga suki desu']
  };
}

module.exports = {
  generateAiKaiwaResponse
};
