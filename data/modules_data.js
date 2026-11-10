// Bank Modul Pembelajaran Lengkap dari Jumby Materials (38 Modul)
// 1. irodori_a1 : Bahasa Jepang Sehari-hari (Buku Utama Irodori Tingkat Pemula A1 - 18 Bab, Can-do 01-79 & Bahasa Jepang di Kelas)
// 2. basic_kanji: Basic Kanji Book Vol. 1 (10 Unit mencakup Pelajaran 1-22 / 251 Kanji & Video Kanji Basic 1-5.mp4)
// 3. kaigo      : Bahasa Jepang Perawatan Lansia (10 Modul mencakup Kaigo no Nihongo, Buku Kosakata & Buku Teks Ujian Perawatan Lansia)

const moduleGroups = [
  {
    "id": "irodori_a1",
    "title": "Bahasa Jepang Sehari-hari (Irodori A1)",
    "subtitle": "18 Bab Lengkap (Topik 1–9), Can-do 01–79, Kanji, Tata Bahasa & Kelas",
    "description": "Materi resmi dari Buku Utama Tingkat Pemula A1 (4.2 Daftar Isi, 5. Bahasa Jepang dalam Kelas & 7. Daftar Pengecekan Can-do).",
    "iconEmoji": "🌸",
    "colorHex": "#E74C3C",
    "totalModules": 18,
    "level": "N5 / A1 (18 Bab)",
    "source": "Buku Utama Jumby Materials (Irodori A1)"
  },
  {
    "id": "basic_kanji",
    "title": "Basic Kanji Book Vol. 1 & Video",
    "subtitle": "10 Unit Lengkap (Pelajaran 1–22 / 251 Kanji) & Video Kanji Basic 1-5",
    "description": "Mencakup seluruh 22 Pelajaran (251 Kanji) dari Basic Kanji Book Vol. 1: piktograf, urutan guratan, radikal, komponen bunyi, dan bacaan budaya Jepang.",
    "iconEmoji": "🈶",
    "colorHex": "#3498DB",
    "totalModules": 10,
    "level": "N5 – N4 (251 Kanji)",
    "source": "Basic Kanji Book 1.pdf & Video/Kanji Basic 1-5.mp4"
  },
  {
    "id": "kaigo",
    "title": "Kaigo no Nihongo (Perawatan Lansia)",
    "subtitle": "10 Modul Lengkap dari 3 Buku Kaigo (Komunikasi, Kosakata & Ujian SSW)",
    "description": "Materi komprehensif dari Kaigo no Nihongo, Buku Kosakata Perawatan Lansia (1.197 istilah), dan Buku Teks Ujian SSW Perawatan Lansia Edisi Revisi.",
    "iconEmoji": "🏥",
    "colorHex": "#27AE60",
    "totalModules": 10,
    "level": "Tokutei Ginou Kaigo (10 Modul)",
    "source": "3 Buku Resmi Kaigo Jumby Materials"
  }
];

const learningModules = [
  {
    "id": "irodori_bab_1",
    "groupId": "irodori_a1",
    "chapterNumber": 1,
    "topic": "Topik 1: Mulai Berbicara Bahasa Jepang (はじめての日本語)",
    "title": "Bab 1: Ohayou Gozaimasu (おはようございます)",
    "subtitle": "Selamat pagi! • Salam Harian, Ungkapan Kelas & Aksara Hiragana",
    "canDo": "Can-do 01–04: Mampu bertukar salam pembuka & perpisahan, mengucapkan terima kasih, membaca stiker pesan (SNS), serta memahami instruksi bahasa Jepang di dalam kelas.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1, 5. Bahasa Jepang dalam Kelas & 7. Daftar Pengecekan Can-do",
    "sections": [
      {
        "title": "Target Can-do Bab 1 (Can-do 01 – 04)",
        "content": "Sesuai Daftar Pengecekan Can-do Tingkat Pemula (Buku Utama Jumby Materials):",
        "points": [
          {
            "title": "Can-do 01 (1. こんにちは)",
            "desc": "Dapat bertukar salam ketika bertemu dengan rekan kerja atau kenalan sesuai waktu (pagi, siang, malam)."
          },
          {
            "title": "Can-do 02 (2. お先に失礼します)",
            "desc": "Dapat mengucapkan salam perpisahan saat berpisah atau ketika pulang mendahului rekan kerja."
          },
          {
            "title": "Can-do 03 (3. ありがとうございます)",
            "desc": "Dapat mengucapkan ungkapan terima kasih ketika dibantu atau menerima sesuatu."
          },
          {
            "title": "Can-do 04 (4. メッセージスタンプ)",
            "desc": "Dapat memahami arti kata singkat seperti ucapan terima kasih atau salam pada stiker aplikasi pesan (LINE/SNS)."
          }
        ]
      },
      {
        "title": "1. Salam Pertemuan, Perpisahan & Terima Kasih (あいさつ)",
        "vocabulary": [
          {
            "japanese": "おはようございます / おはよう",
            "romaji": "Ohayou gozaimasu / Ohayou",
            "meaning": "Selamat pagi (sopan / akrab)"
          },
          {
            "japanese": "こんにちは",
            "romaji": "Konnichiwa",
            "meaning": "Selamat siang / Halo"
          },
          {
            "japanese": "こんばんは",
            "romaji": "Konbanwa",
            "meaning": "Selamat malam (saat bertemu)"
          },
          {
            "japanese": "お先に失礼します (おさきにしつれいします)",
            "romaji": "Osaki ni shitsurei shimasu",
            "meaning": "Saya permisi pulang duluan"
          },
          {
            "japanese": "お疲れ様でした (おつかれさまでした)",
            "romaji": "Otsukaresama deshita",
            "meaning": "Terima kasih atas kerja kerasnya hari ini"
          },
          {
            "japanese": "さようなら / じゃあね / またね",
            "romaji": "Sayounara / Jaa ne / Mata ne",
            "meaning": "Selamat tinggal / Sampai jumpa lagi"
          },
          {
            "japanese": "おやすみなさい",
            "romaji": "Oyasuminasai",
            "meaning": "Selamat tidur / Selamat istirahat malam"
          },
          {
            "japanese": "ありがとうございます / ありがとう",
            "romaji": "Arigatou gozaimasu / Arigatou",
            "meaning": "Terima kasih (sopan / akrab)"
          },
          {
            "japanese": "すみません",
            "romaji": "Sumimasen",
            "meaning": "Maaf / Permisi / Terima kasih (saat direpotkan)"
          },
          {
            "japanese": "いいえ",
            "romaji": "Iie",
            "meaning": "Sama-sama / Tidak apa-apa"
          }
        ]
      },
      {
        "title": "2. Bahasa Jepang di dalam Kelas (教室の日本語)",
        "content": "Ungkapan penting dari modul \"5. Bahasa Jepang dalam Kelas.pdf\" yang digunakan oleh guru dan siswa selama pelajaran berlangsung:",
        "vocabulary": [
          {
            "japanese": "出席をとります (しゅっせきをとります)",
            "romaji": "Shusseki o torimasu",
            "meaning": "(Guru) Saya akan mengabsen kehadiran"
          },
          {
            "japanese": "はい (Hai)",
            "romaji": "Hai",
            "meaning": "(Siswa) Hadir / Ya"
          },
          {
            "japanese": "始めましょう (はじめましょう)",
            "romaji": "Hajimemashou",
            "meaning": "Mari kita mulai pelajaran"
          },
          {
            "japanese": "休みましょう (やすみましょう)",
            "romaji": "Yasumimashou",
            "meaning": "Mari kita beristirahat"
          },
          {
            "japanese": "終わりましょう (おわりましょう)",
            "romaji": "Owarimashou",
            "meaning": "Mari kita akhiri pelajaran"
          },
          {
            "japanese": "できましたか？ — はい、できました / いいえ、まだです",
            "romaji": "Dekimashita ka? — Hai, dekimashita / Iie, mada desu",
            "meaning": "Apakah sudah selesai? — Ya, sudah / Belum"
          },
          {
            "japanese": "聞いてください (きいてください)",
            "romaji": "Kiite kudasai",
            "meaning": "Tolong dengarkan"
          },
          {
            "japanese": "言ってください (いってください)",
            "romaji": "Itte kudasai",
            "meaning": "Tolong ucapkan"
          },
          {
            "japanese": "見てください (みてください)",
            "romaji": "Mite kudasai",
            "meaning": "Tolong lihat"
          },
          {
            "japanese": "読んでください (よんでください)",
            "romaji": "Yonde kudasai",
            "meaning": "Tolong baca"
          },
          {
            "japanese": "書いてください (かいてください)",
            "romaji": "Kaite kudasai",
            "meaning": "Tolong tulis"
          },
          {
            "japanese": "先生、質問があります (せんせい、しつもんがあります)",
            "romaji": "Sensei, shitsumon ga arimasu",
            "meaning": "Sensei, saya ada pertanyaan"
          },
          {
            "japanese": "トイレに行ってもいいですか？",
            "romaji": "Toire ni ittemo ii desu ka?",
            "meaning": "Bolehkah saya pergi ke toilet?"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Tempat Kerja & Kelas",
        "dialogues": [
          {
            "speaker": "Sato",
            "text": "おはようございます、ブディさん。",
            "translation": "Selamat pagi, Budi-san."
          },
          {
            "speaker": "Budi",
            "text": "おはようございます。今日もよろしくお願いします。",
            "translation": "Selamat pagi. Hari ini pun mohon kerja samanya."
          },
          {
            "speaker": "Budi",
            "text": "佐藤さん、お先に失礼します。",
            "translation": "Sato-san, saya permisi pulang duluan."
          },
          {
            "speaker": "Sato",
            "text": "お疲れ様でした。また明日！",
            "translation": "Terima kasih atas kerja kerasnya. Sampai besok!"
          }
        ],
        "culturalTips": "Gestur saat bersalaman di Jepang adalah membungkuk (Ojigi / おじぎ). Selain itu, kata \"Sayounara\" jarang dipakai antar rekan kerja setiap hari (lebih umum menggunakan \"Osaki ni shitsurei shimasu\" dan \"Otsukaresama deshita\"). Kata \"Sumimasen\" juga dipakai untuk berterima kasih ketika seseorang melakukan sesuatu yang merepotkan untuk kita."
      }
    ]
  },
  {
    "id": "irodori_bab_2",
    "groupId": "irodori_a1",
    "chapterNumber": 2,
    "topic": "Topik 1: Mulai Berbicara Bahasa Jepang (はじめての日本語)",
    "title": "Bab 2: Sumimasen, Yoku Wakarimasen (すみません、よくわかりません)",
    "subtitle": "Maaf, saya tidak begitu paham • Klarifikasi, Kemampuan Bahasa & Katakana",
    "canDo": "Can-do 05–07: Mampu meminta lawan bicara mengulangi ucapan dengan pelan, menyatakan bahasa yang dikuasai, dan menanyakan sebutan benda dalam bahasa Jepang.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "sections": [
      {
        "title": "Target Can-do Bab 2 (Can-do 05 – 07)",
        "points": [
          {
            "title": "Can-do 05 (1. もういちど、お願いします)",
            "desc": "Dapat meminta lawan bicara untuk mengulangi perkataan atau berbicara lebih pelan ketika kita tidak begitu paham."
          },
          {
            "title": "Can-do 06 (2. 日本語、できますか？)",
            "desc": "Dapat berbincang singkat mengenai bahasa apa saja yang dikuasai."
          },
          {
            "title": "Can-do 07 (3. これは日本語で何と言いますか？)",
            "desc": "Dapat bertanya kepada orang di sekitar tentang bagaimana menyebut suatu benda dalam bahasa Jepang."
          }
        ]
      },
      {
        "title": "1. Kosakata Klarifikasi, Bahasa & Singkatan Katakana",
        "vocabulary": [
          {
            "japanese": "よくわかりません",
            "romaji": "Yoku wakarimasen",
            "meaning": "Saya tidak begitu paham"
          },
          {
            "japanese": "ゆっくり言ってください",
            "romaji": "Yukkuri itte kudasai",
            "meaning": "Tolong ucapkan dengan pelan-pelan"
          },
          {
            "japanese": "もういちど、お願いします",
            "romaji": "Mou ichido, onegaishimasu",
            "meaning": "Tolong ulangi sekali lagi"
          },
          {
            "japanese": "すこし (少し)",
            "romaji": "Sukoshi",
            "meaning": "Sedikit"
          },
          {
            "japanese": "日本語 (にほんご) / インドネシア語 / 英語",
            "romaji": "Nihongo / Indonesiago / Eigo",
            "meaning": "Bahasa Jepang / Bahasa Indonesia / Bahasa Inggris"
          },
          {
            "japanese": "在留カード (ざいりゅうカード)",
            "romaji": "Zairyuu kaado",
            "meaning": "Kartu Izin Tinggal (Residence Card)"
          },
          {
            "japanese": "コンビニ / スマホ / パソコン / エアコン",
            "romaji": "Konbini / Sumaho / Pasokon / Eakon",
            "meaning": "Minimarket / Smartphone / PC / AC (Singkatan Katakana)"
          },
          {
            "japanese": "おでん / 蚊 (か)",
            "romaji": "Oden / Ka",
            "meaning": "Oden (makanan rebusan Jepang) / Nyamuk"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 2",
        "grammarNotes": [
          {
            "pattern": "➊ 【bahasa】、できますか？ — はい、（すこし）できます / いいえ、あんまり…",
            "explanation": "Digunakan untuk menanyakan dan menjawab apakah seseorang menguasai bahasa tertentu.",
            "example": "A: 日本語、できますか？ (Bisa bahasa Jepang?) B: はい、すこしできます。 (Ya, bisa sedikit.)"
          },
          {
            "pattern": "➋ これ／それ／あれ は 【bahasa】で 何と言いますか？",
            "explanation": "Digunakan untuk menanyakan nama suatu benda dalam bahasa Jepang atau bahasa lain.",
            "example": "これは 日本語で 何と言いますか？ (Ini dalam bahasa Jepang disebut apa?)"
          },
          {
            "pattern": "➌ 「…」は 何ですか？",
            "explanation": "Digunakan untuk menanyakan arti dari suatu kata yang baru didengar.",
            "example": "すみません、「ざいりゅうカード」は何ですか？ (Permisi, \"Zairyuu Card\" itu apa?)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis (Kaiwa)",
        "dialogues": [
          {
            "speaker": "Staf",
            "text": "在留カードを 見せてください。",
            "translation": "Tolong perlihatkan Zairyuu Card (Kartu Izin Tinggal) Anda."
          },
          {
            "speaker": "Rina",
            "text": "すみません、よくわかりません。もういちど、ゆっくり お願いします。",
            "translation": "Maaf, saya kurang paham. Tolong ulangi sekali lagi dengan pelan."
          },
          {
            "speaker": "Rina",
            "text": "あのう、これは 日本語で 何と言いますか？",
            "translation": "Permisi, benda ini dalam bahasa Jepang disebut apa?"
          },
          {
            "speaker": "Staf",
            "text": "それは「おでん」ですよ。",
            "translation": "Itu disebut \"Oden\"."
          }
        ],
        "culturalTips": "Penduduk asing yang tinggal di Jepang lebih dari 3 bulan wajib selalu membawa \"Zairyuu Card\" (在留カード / Kartu Izin Tinggal). Selain itu, orang Jepang suka menyingkat kata serapan Katakana menjadi 4 ketukan, seperti Konbini (Convenience store), Sumaho (Smartphone), dan Pasokon (Personal computer)."
      }
    ]
  },
  {
    "id": "irodori_bab_3",
    "groupId": "irodori_a1",
    "chapterNumber": 3,
    "topic": "Topik 2: Tentang Diri Saya (私のこと)",
    "title": "Bab 3: Yoroshiku Onegaishimasu (よろしくお願いします)",
    "subtitle": "Senang berkenalan dengan Anda • Perkenalan Diri, Asal & Formulir",
    "canDo": "Can-do 08–11: Mampu memperkenalkan diri secara utuh, membaca tanda nama (name tag), bertanya asal negara/pekerjaan, dan mengisi formulir pendaftaran.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "私",
        "onyomi": "シ (shi)",
        "kunyomi": "わたし (watashi)",
        "meaning": "Saya",
        "compounds": [
          "私 (わたし / watashi = saya)"
        ]
      },
      {
        "kanji": "名前",
        "onyomi": "メイ・ゼン (mei / zen)",
        "kunyomi": "なまえ (namae)",
        "meaning": "Nama",
        "compounds": [
          "名前 (なまえ / namae = nama)",
          "名札 (なふだ / nafuda = tanda nama)"
        ]
      },
      {
        "kanji": "国",
        "onyomi": "コク (koku)",
        "kunyomi": "くに (kuni)",
        "meaning": "Negara",
        "compounds": [
          "国 (くに / kuni = negara)",
          "外国 (がいこく / gaikoku = luar negeri)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 3 (Can-do 08 – 11)",
        "points": [
          {
            "title": "Can-do 08 (1. はじめまして)",
            "desc": "Dapat melakukan perkenalan diri sederhana saat pertama kali bertemu."
          },
          {
            "title": "Can-do 09 (2. 名札 / Tanda Nama)",
            "desc": "Dapat membaca nama dan afiliasi pada tanda pengenal (nafuda)."
          },
          {
            "title": "Can-do 10 (3. ご出身は？)",
            "desc": "Dapat bertukar pertanyaan sederhana mengenai asal daerah/negara dan pekerjaan."
          },
          {
            "title": "Can-do 11 (4. 申込書 / Formulir Pendaftaran)",
            "desc": "Dapat menuliskan nama, kewarganegaraan, tanggal lahir, dan alamat pada formulir pendaftaran."
          }
        ]
      },
      {
        "title": "1. Kosakata Perkenalan & Formulir Pendaftaran",
        "vocabulary": [
          {
            "japanese": "はじめまして",
            "romaji": "Hajimemashite",
            "meaning": "Perkenalkan (ucapan saat pertama kali bertemu)"
          },
          {
            "japanese": "どうぞよろしくお願いします",
            "romaji": "Douzo yoroshiku onegaishimasu",
            "meaning": "Senang berkenalan / Mohon bimbingannya"
          },
          {
            "japanese": "ご出身 (ごしゅっしん)",
            "romaji": "Goshusshin",
            "meaning": "Asal daerah / negara (sopan)"
          },
          {
            "japanese": "名札 (なふだ) / 申込書 (もうしこみしょ)",
            "romaji": "Nafuda / Moushikomisho",
            "meaning": "Tanda nama / Formulir pendaftaran"
          },
          {
            "japanese": "氏名 (しめい) / 生年月日 (せいねんがっぴ)",
            "romaji": "Shimei / Seinengappi",
            "meaning": "Nama lengkap / Tanggal lahir"
          },
          {
            "japanese": "国籍 (こくせき) / 住所 (じゅうしょ)",
            "romaji": "Kokuseki / Juusho",
            "meaning": "Kewarganegaraan / Alamat"
          },
          {
            "japanese": "電話番号 (でんわばんごう)",
            "romaji": "Denwa bangou",
            "meaning": "Nomor telepon"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 3 (➊ – ➏)",
        "grammarNotes": [
          {
            "pattern": "➊ N です / N1 は N2 です",
            "explanation": "Menyatakan identitas nama, kewarganegaraan, atau profesi.",
            "example": "私は アディです。インドネシア人です。(Saya Adi. Orang Indonesia.)"
          },
          {
            "pattern": "➋ 【tempat】から 来ました (きました)",
            "explanation": "Menyatakan negara atau kota asal kedatangan.",
            "example": "ジャカルタから 来ました。(Saya datang dari Jakarta.)"
          },
          {
            "pattern": "➌ N は？ / ➍ S か？",
            "explanation": "Menanyakan balik kepada lawan bicara dengan sopan.",
            "example": "ご出身は？ / インドネシアの どこですか？ (Asalnya dari mana? / Di bagian mana di Indonesia?)"
          },
          {
            "pattern": "➎ N も (Juga)",
            "explanation": "Menyatakan kesamaan dengan lawan bicara.",
            "example": "私も インドネシアから 来ました。(Saya juga datang dari Indonesia.)"
          },
          {
            "pattern": "➏ N じゃないです",
            "explanation": "Bentuk negatif kata benda untuk menyangkal secara sopan.",
            "example": "私は 学生じゃないです。会社員です。(Saya bukan pelajar. Saya karyawan perusahaan.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis (Kaiwa)",
        "dialogues": [
          {
            "speaker": "Adi",
            "text": "はじめまして。アディと申します。インドネシアから来ました。よろしくお願いします。",
            "translation": "Perkenalkan. Nama saya Adi. Saya datang dari Indonesia. Senang berkenalan dengan Anda."
          },
          {
            "speaker": "Yamamoto",
            "text": "山本です。こちらこそ、よろしくお願いします。アディさん、ご出身はインドネシアのどこですか？",
            "translation": "Saya Yamamoto. Sama-sama, senang berkenalan. Adi-san, asalnya dari Indonesia bagian mana?"
          },
          {
            "speaker": "Adi",
            "text": "バンドンです。山本さんは東京ですか？",
            "translation": "Dari Bandung. Kalau Yamamoto-san apakah dari Tokyo?"
          },
          {
            "speaker": "Yamamoto",
            "text": "いいえ、東京じゃないです。大阪です。",
            "translation": "Bukan, bukan dari Tokyo. Saya dari Osaka."
          }
        ],
        "culturalTips": "Dalam bahasa Jepang terdapat 3 jenis huruf (Hiragana, Katakana, Kanji). Saat memanggil orang lain, tambahkan akhiran \"～さん (-san)\" di belakang namanya (jangan pernah memakai -san untuk nama sendiri). Pada formulir resmi Jepang, tanggal lahir sering ditulis dengan kalender Masehi (西暦) atau kalender Era Jepang (昭和 Showa, 平成 Heisei, 令和 Reiwa)."
      }
    ]
  },
  {
    "id": "irodori_bab_4",
    "groupId": "irodori_a1",
    "chapterNumber": 4,
    "topic": "Topik 2: Tentang Diri Saya (私のこと)",
    "title": "Bab 4: Toukyou ni Sunde Imasu (東京に住んでいます)",
    "subtitle": "Saya tinggal di Tokyo • Keluarga, Usia, Tempat Tinggal & Media Sosial",
    "canDo": "Can-do 12–15: Mampu memperkenalkan anggota keluarga sambil menunjukkan foto, menceritakan tempat tinggal dan usia, membicarakan hewan peliharaan, serta memahami unggahan singkat di media sosial.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "父",
        "onyomi": "フ (fu)",
        "kunyomi": "ちち / おとうさん (chichi / otousan)",
        "meaning": "Ayah",
        "compounds": [
          "父 (ちち / chichi = ayah sendiri)",
          "お父さん (おとうさん / otousan = ayah orang lain)"
        ]
      },
      {
        "kanji": "母",
        "onyomi": "ボ (bo)",
        "kunyomi": "はは / おかあさん (haha / okaasan)",
        "meaning": "Ibu",
        "compounds": [
          "母 (はは / haha = ibu sendiri)",
          "お母さん (おかあさん / okaasan = ibu orang lain)"
        ]
      },
      {
        "kanji": "子ども",
        "onyomi": "シ (shi)",
        "kunyomi": "こども (kodomo)",
        "meaning": "Anak",
        "compounds": [
          "子ども (こども / kodomo = anak-anak)"
        ]
      },
      {
        "kanji": "日本",
        "onyomi": "ニホン / ニッポン (nihon / nippon)",
        "kunyomi": "-",
        "meaning": "Jepang",
        "compounds": [
          "日本 (にほん / nihon = Jepang)",
          "日本語 (にほんご = bahasa Jepang)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 4 (Can-do 12 – 15)",
        "points": [
          {
            "title": "Can-do 12 (1. 夫と子どもです)",
            "desc": "Dapat memperkenalkan anggota keluarga dengan memperlihatkan foto."
          },
          {
            "title": "Can-do 13 (2. 25歳です)",
            "desc": "Dapat menjawab pertanyaan tentang tempat tinggal keluarga dan usia."
          },
          {
            "title": "Can-do 14 (3. ペットのジョンです)",
            "desc": "Dapat berbincang singkat mengenai hewan peliharaan."
          },
          {
            "title": "Can-do 15 (4. 友だちと海！)",
            "desc": "Dapat membaca dan memahami komentar singkat teman pada unggahan foto di media sosial (SNS)."
          }
        ]
      },
      {
        "title": "1. Kosakata Keluarga, Usia & Hewan Peliharaan",
        "vocabulary": [
          {
            "japanese": "家族 (かぞく)",
            "romaji": "Kazoku",
            "meaning": "Keluarga"
          },
          {
            "japanese": "父 (ちち) / 母 (はは)",
            "romaji": "Chichi / Haha",
            "meaning": "Ayah saya / Ibu saya"
          },
          {
            "japanese": "兄 (あに) / 姉 (あね)",
            "romaji": "Ani / Ane",
            "meaning": "Kakak laki-laki / Kakak perempuan saya"
          },
          {
            "japanese": "弟 (おとうと) / 妹 (いもうと)",
            "romaji": "Otouto / Imouto",
            "meaning": "Adik laki-laki / Adik perempuan saya"
          },
          {
            "japanese": "夫 (おっと) / 妻 (つま)",
            "romaji": "Otto / Tsuma",
            "meaning": "Suami saya / Istri saya"
          },
          {
            "japanese": "両親 (りょうしん) / 子ども (こども)",
            "romaji": "Ryoushin / Kodomo",
            "meaning": "Kedua orang tua / Anak"
          },
          {
            "japanese": "ペット / 犬 (いぬ) / 猫 (ねこ)",
            "romaji": "Petto / Inu / Neko",
            "meaning": "Hewan peliharaan / Anjing / Kucing"
          },
          {
            "japanese": "～歳 (～さい) / 何歳 (なんさい)",
            "romaji": "~sai / Nansai",
            "meaning": "Berusia ... tahun / Umur berapa"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 4 (➊ – ➍)",
        "grammarNotes": [
          {
            "pattern": "➊ N1 と N2 (Dan)",
            "explanation": "Partikel と digunakan untuk menghubungkan dua kata benda secara setara.",
            "example": "これは 夫と 子どもです。(Ini adalah suami dan anak saya.)"
          },
          {
            "pattern": "➋ 【kata tanya】ですか？ (だれ / どこ / なんさい)",
            "explanation": "Kalimat tanya menggunakan kata tanya seperti だれ (siapa), どこ (di mana), 何歳 (berapa umurnya).",
            "example": "おいくつですか？ / 何歳ですか？ — 23歳です。(Umurnya berapa? — 23 tahun.)"
          },
          {
            "pattern": "➌ 【tempat】に 住んでいます (すんでいます)",
            "explanation": "Menyatakan tempat tinggal saat ini.",
            "example": "両親は インドネシアに 住んでいます。私は 東京に 住んでいます。(Orang tua tinggal di Indonesia. Saya tinggal di Tokyo.)"
          },
          {
            "pattern": "➍ N1 の N2",
            "explanation": "Partikel の menghubungkan kepemilikan atau keterangan kata benda.",
            "example": "ペットの ジョンです。(Ini hewan peliharaan saya, John.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis (Kaiwa)",
        "dialogues": [
          {
            "speaker": "Sato",
            "text": "わあ、かわいい写真ですね。これ、だれですか？",
            "translation": "Wah, foto yang lucu ya. Ini siapa?"
          },
          {
            "speaker": "Dewi",
            "text": "私の 夫と 子どもです。今、スラバヤに 住んでいます。",
            "translation": "Ini suami dan anak saya. Sekarang mereka tinggal di Surabaya."
          },
          {
            "speaker": "Sato",
            "text": "そうですか。お子さんは 何歳ですか？",
            "translation": "Begitu ya. Anaknya umur berapa?"
          },
          {
            "speaker": "Dewi",
            "text": "5歳です。とても 元気ですよ。",
            "translation": "5 tahun. Sangat aktif dan sehat lho."
          }
        ],
        "culturalTips": "Kota-kota besar di Jepang meliputi Tokyo, Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kyoto, dan Kobe. Dalam budaya Jepang, menanyakan usia kepada orang yang baru dikenal atau yang lebih tua terkadang dianggap kurang sopan, kecuali dalam konteks akrab atau administrasi (gunakan bentuk sopan \"Oikutsu desu ka?\")."
      }
    ]
  },
  {
    "id": "irodori_bab_5",
    "groupId": "irodori_a1",
    "chapterNumber": 5,
    "topic": "Topik 3: Makanan Favorit (好きな食べ物)",
    "title": "Bab 5: Udon ga Suki Desu (うどんが好きです)",
    "subtitle": "Saya suka udon • Makanan Kesukaan, Kebiasaan Sarapan & Frekuensi",
    "canDo": "Can-do 16–20: Mampu membicarakan makanan yang disukai/tidak disukai, menawarkan dan menolak minuman dengan sopan, serta menceritakan kebiasaan sarapan pagi.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "水",
        "onyomi": "スイ (sui)",
        "kunyomi": "みず (mizu)",
        "meaning": "Air",
        "compounds": [
          "水 (みず / mizu = air putih)",
          "お水 (おみず / omizu = air minum)"
        ]
      },
      {
        "kanji": "食べます",
        "onyomi": "ショク (shoku)",
        "kunyomi": "たべます (tabemasu)",
        "meaning": "Makan",
        "compounds": [
          "食べます (たべます = makan)",
          "食べ物 (たべもの = makanan)"
        ]
      },
      {
        "kanji": "飲みます",
        "onyomi": "イン (in)",
        "kunyomi": "のみます (nomimasu)",
        "meaning": "Minum",
        "compounds": [
          "飲みます (のみます = minum)",
          "飲み物 (のみもの = minuman)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 5 (Can-do 16 – 20)",
        "points": [
          {
            "title": "Can-do 16 (1. 魚、好きですか？)",
            "desc": "Dapat bertanya dan menjawab mengenai makanan yang disukai maupun yang tidak disukai."
          },
          {
            "title": "Can-do 17 (2. わさびは、ちょっと…)",
            "desc": "Dapat menolak secara halus makanan/bahan makanan yang tidak bisa dimakan."
          },
          {
            "title": "Can-do 18 (3. お茶、飲みますか？)",
            "desc": "Dapat menjawab tawaran minuman saat bertamu atau di tempat kerja."
          },
          {
            "title": "Can-do 19 (4. 朝ご飯は、あまり食べません)",
            "desc": "Dapat berbincang tentang kebiasaan makan sarapan pagi."
          },
          {
            "title": "Can-do 20 (5. 今日の朝ご飯)",
            "desc": "Dapat membaca unggahan singkat di media sosial mengenai menu sarapan pagi."
          }
        ]
      },
      {
        "title": "1. Kosakata Makanan, Minuman & Frekuensi",
        "vocabulary": [
          {
            "japanese": "うどん / そば / ラーメン",
            "romaji": "Udon / Soba / Raamen",
            "meaning": "Mi Udon / Mi Soba / Ramen"
          },
          {
            "japanese": "すし / 刺身 (さしみ) / 天ぷら",
            "romaji": "Sushi / Sashimi / Tempura",
            "meaning": "Sushi / Sashimi (ikan mentah) / Tempura"
          },
          {
            "japanese": "牛丼 (ぎゅうどん) / 親子丼 (おやこどん)",
            "romaji": "Gyuudon / Oyakodon",
            "meaning": "Nasi mangkuk daging sapi / Nasi mangkuk ayam & telur"
          },
          {
            "japanese": "納豆 (なっとう) / わさび / 生魚 (なまざかな)",
            "romaji": "Nattou / Wasabi / Namazakana",
            "meaning": "Kedelai fermentasi / Wasabi / Ikan mentah"
          },
          {
            "japanese": "朝ご飯 (あさごはん)",
            "romaji": "Asagohan",
            "meaning": "Sarapan pagi"
          },
          {
            "japanese": "いつも / よく / あまり",
            "romaji": "Itsumo / Yoku / Amari",
            "meaning": "Selalu / Sering / Jarang (diikuti bentuk negatif)"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 5 (➊ – ➏)",
        "grammarNotes": [
          {
            "pattern": "➊ N が 好きです (すきです) / N は 好きじゃないです",
            "explanation": "Menyatakan kesukaan atau ketidaksukaan terhadap makanan/minuman.",
            "example": "私は うどんが 好きです。納豆は 好きじゃないです。(Saya suka udon. Saya tidak suka natto.)"
          },
          {
            "pattern": "➋ N は ちょっと…",
            "explanation": "Ungkapan sopan untuk menolak atau menyatakan kurang suka/tidak bisa makan sesuatu tanpa terdengar kasar.",
            "example": "すみません、わさびは ちょっと… / 豚肉は ちょっと… (Maaf, kalau wasabi/daging babi saya kurang bisa...)"
          },
          {
            "pattern": "➌ V-ますか？ / V-る？",
            "explanation": "Menawarkan sesuatu atau menanyakan kebiasaan.",
            "example": "コーヒー、飲みますか？ — はい、いただきます。(Mau minum kopi? — Ya, terima kasih.)"
          },
          {
            "pattern": "➍ N を V-ます / ➎（N は）V-ません・V-ないです",
            "explanation": "Menyatakan tindakan makan/minum positif dan negatif.",
            "example": "毎朝 パンを 食べます。ご飯は 食べません。(Setiap pagi makan roti. Tidak makan nasi.)"
          },
          {
            "pattern": "➏ 【いつも／よく】V-ます / あまり V-ません",
            "explanation": "Keterangan frekuensi kegiatan sehari-hari.",
            "example": "朝ご飯は あまり 食べません。いつも コーヒーを 飲みます。(Saya jarang sarapan. Selalu minum kopi.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis (Kaiwa)",
        "dialogues": [
          {
            "speaker": "Tanaka",
            "text": "リナさん、日本料理で 何が 好きですか？",
            "translation": "Rina-san, dari masakan Jepang suka apa?"
          },
          {
            "speaker": "Rina",
            "text": "うどんと 天ぷらが 好きです。",
            "translation": "Saya suka udon dan tempura."
          },
          {
            "speaker": "Tanaka",
            "text": "お刺身は 食べますか？",
            "translation": "Apakah makan sashimi (ikan mentah)?"
          },
          {
            "speaker": "Rina",
            "text": "生魚は ちょっと…。でも、焼き魚は よく 食べますよ。",
            "translation": "Kalau ikan mentah agak kurang bisa... Tapi kalau ikan bakar saya sering makan."
          }
        ],
        "culturalTips": "Donburi-mono (丼物) seperti Gyudon, Katsudon, dan Oyakodon adalah hidangan praktis berupa semangkuk nasi hangat dengan lauk di atasnya. Banyak orang asing kurang terbiasa dengan Natto, Wasabi, atau ikan mentah; gunakan ungkapan halus \"～はちょっと…\" saat menolak."
      }
    ]
  },
  {
    "id": "irodori_bab_6",
    "groupId": "irodori_a1",
    "chapterNumber": 6,
    "topic": "Topik 3: Makanan Favorit (好きな食べ物)",
    "title": "Bab 6: Chiizubaagaa Kudasai (チーズバーガーください)",
    "subtitle": "Saya pesan cheese burger • Memesan Makanan, Kupon Makan & Izakaya",
    "canDo": "Can-do 21–25: Mampu membaca menu restoran cepat saji, menjawab pertanyaan kasir (makan di sini/bawa pulang), memesan menu bersama teman, dan membaca papan nama tempat makan.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "魚",
        "onyomi": "ギョ (gyo)",
        "kunyomi": "さかな (sakana)",
        "meaning": "Ikan",
        "compounds": [
          "魚 (さかな / sakana = ikan)",
          "焼き魚 (やきざかな = ikan bakar)"
        ]
      },
      {
        "kanji": "肉",
        "onyomi": "ニク (niku)",
        "kunyomi": "-",
        "meaning": "Daging",
        "compounds": [
          "肉 (にく / niku = daging)",
          "牛肉 (ぎゅうにく = daging sapi)",
          "鶏肉 (とりにく = daging ayam)"
        ]
      },
      {
        "kanji": "好き（な）",
        "onyomi": "コウ (kou)",
        "kunyomi": "すき（な） (suki na)",
        "meaning": "Suka / Favorit",
        "compounds": [
          "好きな食べ物 (すきなたべもの = makanan favorit)",
          "大好き (だいすき = sangat suka)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 6 (Can-do 21 – 25)",
        "points": [
          {
            "title": "Can-do 21 (1. ハンバーガー店のメニュー)",
            "desc": "Dapat membaca dan memahami daftar menu di restoran cepat saji."
          },
          {
            "title": "Can-do 22 (2. こちらでおめしあがりですか？)",
            "desc": "Dapat memesan makanan di kasir dan menjawab apakah makan di tempat atau dibawa pulang."
          },
          {
            "title": "Can-do 23 (3. 私はカレーにします)",
            "desc": "Dapat mendiskusikan dan memutuskan menu yang akan dipesan bersama teman."
          },
          {
            "title": "Can-do 24 (4. 枝豆2つください)",
            "desc": "Dapat memesan makanan/minuman beserta jumlah porsinya kepada pelayan di Izakaya/restoran."
          },
          {
            "title": "Can-do 25 (5. 飲食店の看板)",
            "desc": "Dapat mengenali jenis restoran dari papan nama toko (kanban)."
          }
        ]
      },
      {
        "title": "1. Kosakata Memesan Makanan & Izakaya",
        "vocabulary": [
          {
            "japanese": "チーズバーガー / ポテト / セット",
            "romaji": "Chiizubaagaa / Poteto / Setto",
            "meaning": "Cheese burger / Kentang goreng / Paket set"
          },
          {
            "japanese": "サイズ（S・M・L）",
            "romaji": "Saizu (Esu / Emu / Eru)",
            "meaning": "Ukuran (S / M / L)"
          },
          {
            "japanese": "こちらでお召し上がりですか？",
            "romaji": "Kochira de omeshiagari desu ka?",
            "meaning": "Apakah dimakan di sini? (pertanyaan kasir)"
          },
          {
            "japanese": "お持ち帰り (おもちかえり) / テイクアウト",
            "romaji": "Omochikaeri / Teikuauto",
            "meaning": "Dibawa pulang (Take-out)"
          },
          {
            "japanese": "食券 (しょっけん) / おしぼり",
            "romaji": "Shokken / Oshibori",
            "meaning": "Kupon tiket makan / Handuk basah pembersih tangan"
          },
          {
            "japanese": "から揚げ (からあげ) / 枝豆 (えだまめ)",
            "romaji": "Karaage / Edamame",
            "meaning": "Ayam goreng tepung Jepang / Kedelai edamame rebus"
          },
          {
            "japanese": "ひとつ (1つ) / ふたつ (2つ) / みっつ (3つ) / よっつ (4つ)",
            "romaji": "Hitotsu / Futatsu / Mittsu / Yottsu",
            "meaning": "1 buah / 2 buah / 3 buah / 4 buah"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 6 (➊ – ➍)",
        "grammarNotes": [
          {
            "pattern": "➊ N、お願いします / N、ください",
            "explanation": "Pola dasar untuk memesan makanan atau minuman di kasir/restoran.",
            "example": "チーズバーガーの セット、お願いします。(Tolong paket set cheese burger.)"
          },
          {
            "pattern": "➋ N に します",
            "explanation": "Menyatakan pilihan yang telah diputuskan dari daftar menu.",
            "example": "私は カレーに します。(Saya pilih kari saja.)"
          },
          {
            "pattern": "➌ N、【bilangan】 お願いします / ください",
            "explanation": "Memesan makanan/minuman dengan menyebutkan jumlah porsinya.",
            "example": "枝豆 ふたつと、ウーロン茶 みっつ ください。(Tolong edamame 2 dan teh oolong 3.)"
          },
          {
            "pattern": "➍ N（は）ありますか？",
            "explanation": "Menanyakan ketersediaan menu, piring kecil, atau menu bahasa Inggris.",
            "example": "すみません、お水 ありますか？ / 取り皿 ありますか？ (Permisi, apakah ada air putih / piring kecil?)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Restoran Cepat Saji",
        "dialogues": [
          {
            "speaker": "Kasir",
            "text": "いらっしゃいませ。ご注文を どうぞ。",
            "translation": "Selamat datang. Silakan sebutkan pesanan Anda."
          },
          {
            "speaker": "Budi",
            "text": "チーズバーガーの セットを ひとつ ください。飲み物は コーラに します。",
            "translation": "Tolong paket cheese burger satu. Minumannya saya pilih cola."
          },
          {
            "speaker": "Kasir",
            "text": "かしこまりました。こちらで お召し上がりですか？",
            "translation": "Baik, dimengerti. Apakah dimakan di sini?"
          },
          {
            "speaker": "Budi",
            "text": "いいえ、持ち帰りで お願いします。",
            "translation": "Tidak, tolong dibungkus bawa pulang."
          }
        ],
        "culturalTips": "Banyak restoran ramen, udon, dan gyudon di Jepang menggunakan mesin tiket makanan (Shokken / 食券機) di dekat pintu masuk: masukkan uang, pilih tombol menu, lalu serahkan tiketnya ke staf. Di restoran, Anda juga akan diberikan Oshibori (handuk basah hangat/dingin) untuk mengelap tangan sebelum makan."
      }
    ]
  },
  {
    "id": "irodori_bab_7",
    "groupId": "irodori_a1",
    "chapterNumber": 7,
    "topic": "Topik 4: Rumah dan Tempat Kerja (家と職場)",
    "title": "Bab 7: Heya ga Yottsu Arimasu (部屋が4つあります)",
    "subtitle": "Ada empat kamar • Tempat Tinggal, Perabotan & Tombol Elektronik",
    "canDo": "Can-do 26–30: Mampu menjelaskan ruangan di dalam rumah, menanyakan fasilitas kamar/asrama, mendeskripsikan kondisi tempat tinggal, dan membaca tombol kanji pada AC/mesin cuci.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "家",
        "onyomi": "カ・ケ (ka / ke)",
        "kunyomi": "いえ・うち (ie / uchi)",
        "meaning": "Rumah",
        "compounds": [
          "家 (いえ / ie = rumah)",
          "家賃 (やちん = sewa kamar)"
        ]
      },
      {
        "kanji": "新しい",
        "onyomi": "シン (shin)",
        "kunyomi": "あたらしい (atarashii)",
        "meaning": "Baru",
        "compounds": [
          "新しい (あたらしい = baru)"
        ]
      },
      {
        "kanji": "広い",
        "onyomi": "コウ (kou)",
        "kunyomi": "ひろい (hiroi)",
        "meaning": "Luas",
        "compounds": [
          "広い (ひろい = luas)"
        ]
      },
      {
        "kanji": "古い",
        "onyomi": "コ (ko)",
        "kunyomi": "ふるい (furui)",
        "meaning": "Tua / Lama / Kuno",
        "compounds": [
          "古い (ふるい = lama/tua)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 7 (Can-do 26 – 30)",
        "points": [
          {
            "title": "Can-do 26 (1. ここは台所です)",
            "desc": "Dapat memandu dan menjelaskan ruangan-ruangan di dalam rumah kepada tamu."
          },
          {
            "title": "Can-do 27 (2. 電子レンジはありますか？)",
            "desc": "Dapat menanyakan perabot dan peralatan yang tersedia di kamar/asrama baru."
          },
          {
            "title": "Can-do 28 (3. ちょっとせまいです)",
            "desc": "Dapat menceritakan kondisi kamar dan tempat tinggal saat ini."
          },
          {
            "title": "Can-do 29 (4. アパートに住んでいます)",
            "desc": "Dapat berbincang mengenai jenis tempat tinggal dan jaraknya."
          },
          {
            "title": "Can-do 30 (5. 洗濯機・エアコンのボタン)",
            "desc": "Dapat memahami arti tulisan pada tombol mesin cuci dan remot AC."
          }
        ]
      },
      {
        "title": "1. Kosakata Rumah, Perabotan & Tombol Elektronik",
        "vocabulary": [
          {
            "japanese": "アパート / マンション / 寮 (りょう) / 一戸建て (いっこだて)",
            "romaji": "Apaato / Manshon / Ryou / Ikkodate",
            "meaning": "Apartemen kayu/ringan / Apartemen beton / Asrama / Rumah tapak"
          },
          {
            "japanese": "玄関 (げんかん) / 台所 (だいどころ) / お風呂 (おふろ)",
            "romaji": "Genkan / Daidokoro / Ofuro",
            "meaning": "Area pintu masuk (lepas sepatu) / Dapur / Kamar mandi rendam"
          },
          {
            "japanese": "電子レンジ / 冷蔵庫 (れいぞうこ) / 洗濯機 (せんたくき)",
            "romaji": "Denshi renji / Reizouko / Sentakuki",
            "meaning": "Microwave / Kulkas / Mesin cuci"
          },
          {
            "japanese": "布団 (ふとん) / 押し入れ (おしいれ)",
            "romaji": "Futon / Oshiire",
            "meaning": "Kasur lipat tradisional Jepang / Lemari penyimpanan futon"
          },
          {
            "japanese": "広い (ひろい) ↔ 狭い (せまい)",
            "romaji": "Hiroi ↔ Semai",
            "meaning": "Luas ↔ Sempit"
          },
          {
            "japanese": "明るい (あかるい) / きれい（な） / 静か（な）",
            "romaji": "Akarui / Kirei (na) / Shizuka (na)",
            "meaning": "Terang / Bersih & Indah / Tenang"
          },
          {
            "japanese": "冷房 (れいぼう) / 暖房 (だんぼう) / 電源 (でんげん)",
            "romaji": "Reibou / Danbou / Dengen",
            "meaning": "Pendingin AC / Pemanas AC / Tombol Power"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 7 (➊ – ➎)",
        "grammarNotes": [
          {
            "pattern": "➊ ここは 【tempat】です",
            "explanation": "Menunjukkan nama ruangan tempat pembicara berada.",
            "example": "ここは 台所です。あそこは トイレです。(Di sini dapur. Di sebelah sana toilet.)"
          },
          {
            "pattern": "➋ 【tempat】に N が あります / N が 【bilangan】 あります",
            "explanation": "Menyatakan keberadaan benda mati atau jumlah ruangan.",
            "example": "私の家に 部屋が 4つ あります。(Di rumah saya ada 4 kamar.)"
          },
          {
            "pattern": "➌（N は）ありません / ないです",
            "explanation": "Menyatakan bahwa suatu benda/fasilitas tidak tersedia.",
            "example": "部屋に テレビは ありません。(Di kamar tidak ada TV.)"
          },
          {
            "pattern": "➍ ナA-です / イA-いです",
            "explanation": "Mendeskripsikan sifat benda atau ruangan (Kata Sifat-Na & Kata Sifat-I).",
            "example": "私の 部屋は 明るいです。とても 静かです。(Kamar saya terang. Sangat tenang.)"
          },
          {
            "pattern": "➎ ナA-じゃないです / イA-くないです",
            "explanation": "Bentuk negatif Kata Sifat-Na (～じゃないです) dan Kata Sifat-I (buang い ganti ～くないです).",
            "example": "あまり 広くないです。静かじゃないです。(Tidak terlalu luas. Tidak tenang.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Asrama",
        "dialogues": [
          {
            "speaker": "Pengurus Asrama",
            "text": "ここが リナさんの 部屋です。エアコンと 冷蔵庫が ありますよ。",
            "translation": "Di sini kamar Rina-san. Ada AC dan kulkas lho."
          },
          {
            "speaker": "Rina",
            "text": "わあ、きれいで 明るいですね。すみません、電子レンジは ありますか？",
            "translation": "Wah, bersih dan terang ya. Permisi, apakah ada microwave?"
          },
          {
            "speaker": "Pengurus Asrama",
            "text": "部屋には ありませんが、1階の 台所に ありますよ。",
            "translation": "Di dalam kamar tidak ada, tetapi ada di dapur lantai 1."
          }
        ],
        "culturalTips": "Saat masuk ke rumah/apartemen Jepang, wajib melepas sepatu di Genkan (玄関). Futon dijemur secara berkala dan dilipat ke dalam Oshiire agar ruangan tatami tetap lega. Sistem penulisan alamat di Jepang dimulai dari unit terbesar ke terkecil: Kode Pos (〒) → Prefektur → Kota/Distrik → Blok/Nomor → Nama Gedung & Nomor Kamar."
      }
    ]
  },
  {
    "id": "irodori_bab_8",
    "groupId": "irodori_a1",
    "chapterNumber": 8,
    "topic": "Topik 4: Rumah dan Tempat Kerja (家と職場)",
    "title": "Bab 8: Yamada-san wa Doko ni Imasu ka? (山田さんはどこにいますか？)",
    "subtitle": "Yamada-san ada di mana, ya? • Ruangan Kantor, Letak Benda & Keberadaan Orang",
    "canDo": "Can-do 31–34: Mampu menjelaskan fungsi ruangan di tempat kerja, menanyakan keberadaan rekan kerja, menanyakan letak alat tulis/peralatan, dan membaca papan nama ruangan.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "上",
        "onyomi": "ジョウ (jou)",
        "kunyomi": "うえ (ue)",
        "meaning": "Atas",
        "compounds": [
          "上 (うえ = atas)",
          "机の上 (つくえのうえ = di atas meja)"
        ]
      },
      {
        "kanji": "下",
        "onyomi": "カ・ゲ (ka / ge)",
        "kunyomi": "した (shita)",
        "meaning": "Bawah",
        "compounds": [
          "下 (した = bawah)",
          "棚の下 (たなのした = di bawah rak)"
        ]
      },
      {
        "kanji": "中",
        "onyomi": "チュウ (chuu)",
        "kunyomi": "なか (naka)",
        "meaning": "Dalam / Tengah",
        "compounds": [
          "中 (なか = dalam)",
          "引き出しの中 (ひきだしのなか = di dalam laci)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 8 (Can-do 31 – 34)",
        "points": [
          {
            "title": "Can-do 31 (1. ここで打ち合わせをします)",
            "desc": "Dapat memahami penjelasan fungsi tiap ruangan di tempat kerja."
          },
          {
            "title": "Can-do 32 (2. 食堂にいます)",
            "desc": "Dapat menanyakan dan memberitahukan keberadaan seseorang di tempat kerja."
          },
          {
            "title": "Can-do 33 (3. はさみは、そこにあります)",
            "desc": "Dapat menanyakan tempat penyimpanan peralatan kerja dan memahami petunjuk letaknya."
          },
          {
            "title": "Can-do 34 (4. 部屋の表示)",
            "desc": "Dapat membaca tulisan pada papan petunjuk ruangan di gedung/kantor."
          }
        ]
      },
      {
        "title": "1. Kosakata Ruangan Tempat Kerja & Posisi",
        "vocabulary": [
          {
            "japanese": "事務所 (じむしょ) / 会議室 (かいぎしつ)",
            "romaji": "Jimusho / Kaigishitsu",
            "meaning": "Ruang kantor / Ruang rapat"
          },
          {
            "japanese": "食堂 (しょくどう) / 更衣室 (こういしつ)",
            "romaji": "Shokudou / Kouishitsu",
            "meaning": "Kantin / Ruang ganti pakaian (loker)"
          },
          {
            "japanese": "喫煙所 (きつえんじょ) / 休憩室 (きゅうけいしつ)",
            "romaji": "Kitsuenjo / Kyuukeishitsu",
            "meaning": "Tempat merokok / Ruang istirahat"
          },
          {
            "japanese": "打ち合わせ (うちあわせ)",
            "romaji": "Uchiawase",
            "meaning": "Rapat koordinasi singkat / Briefing"
          },
          {
            "japanese": "はさみ / 引き出し (ひきだし) / 棚 (たな)",
            "romaji": "Hasami / Hikidashi / Tana",
            "meaning": "Gunting / Laci / Rak"
          },
          {
            "japanese": "上 (うえ) / 下 (した) / 中 (なか) / 横 (よこ) / 隣 (となり)",
            "romaji": "Ue / Shita / Naka / Yoko / Tonari",
            "meaning": "Atas / Bawah / Dalam / Samping / Sebelah"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 8 (➊ – ➎)",
        "grammarNotes": [
          {
            "pattern": "➊ 【tempat】で V-ます",
            "explanation": "Partikel で menunjukkan tempat berlangsungnya suatu aktivitas.",
            "example": "ここで 打ち合わせを します。食堂で 昼ご飯を 食べます。(Di sini mengadakan rapat. Makan siang di kantin.)"
          },
          {
            "pattern": "➋ 【orang】は 【tempat】に います / ➌ いません・いないです",
            "explanation": "Menyatakan keberadaan makhluk hidup (orang/hewan) menggunakan います (ada) dan いません (tidak ada).",
            "example": "山田さんは 会議室に います。ここには いません。(Yamada-san ada di ruang rapat. Tidak ada di sini.)"
          },
          {
            "pattern": "➍ 【benda】は 【ここ／そこ／あそこ】に あります",
            "explanation": "Menunjukkan letak benda mati.",
            "example": "コピー機は あそこに あります。(Mesin fotokopi ada di sebelah sana.)"
          },
          {
            "pattern": "➎ N の 【posisi（上・下・中・横）】に あります",
            "explanation": "Menjelaskan posisi spesifik suatu benda terhadap benda lain.",
            "example": "はさみは 一番上の 引き出しの 中に あります。(Gunting ada di dalam laci paling atas.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Kantor",
        "dialogues": [
          {
            "speaker": "Adi",
            "text": "すみません、山田さんは どこに いますか？",
            "translation": "Permisi, Yamada-san ada di mana ya?"
          },
          {
            "speaker": "Suzuki",
            "text": "山田さんは 今、2階の 会議室に いますよ。",
            "translation": "Yamada-san sekarang ada di ruang rapat lantai 2."
          },
          {
            "speaker": "Adi",
            "text": "ありがとうございます。あ、すみません、ガムテープは どこですか？",
            "translation": "Terima kasih. Oh, maaf, lakban ada di mana ya?"
          },
          {
            "speaker": "Suzuki",
            "text": "その棚の 一番下に ありますよ。",
            "translation": "Ada di bagian paling bawah rak itu lho."
          }
        ],
        "culturalTips": "Di banyak tempat kerja Jepang (pabrik, panti lansia, toko), karyawan berganti ke seragam kerja (作業着 / ユニフォーム) di ruang ganti (更衣室) sebelum jam kerja dimulai. Mesin Fax juga masih cukup sering digunakan di perkantoran Jepang."
      }
    ]
  },
  {
    "id": "irodori_bab_9",
    "groupId": "irodori_a1",
    "chapterNumber": 9,
    "topic": "Topik 5: Kehidupan Keseharian (毎日の生活)",
    "title": "Bab 9: Juuniji kara Ichiji made Hiruyasumi Desu (12時から1時まで昼休みです)",
    "subtitle": "Istirahat siang dari pukul 12:00 hingga 13:00 • Jam, Hari & Jadwal Harian",
    "canDo": "Can-do 35–38: Mampu membicarakan jam rutinitas harian, menjelaskan jadwal kegiatan seharian, membaca papan jadwal rekan kerja, dan menentukan hari/waktu yang cocok.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "月・火・水・木",
        "onyomi": "ゲツ・カ・スイ・モク",
        "kunyomi": "つき・ひ・みず・き",
        "meaning": "Senin (月), Selasa (火), Rabu (水), Kamis (木)",
        "compounds": [
          "月曜日 (げつようび = Senin)",
          "火曜日 (かようび = Selasa)",
          "水曜日 (すいようび = Rabu)",
          "木曜日 (もくようび = Kamis)"
        ]
      },
      {
        "kanji": "金・土・日・～曜日",
        "onyomi": "キン・ド・ニチ・ヨウビ",
        "kunyomi": "かね・つち・ひ",
        "meaning": "Jumat (金), Sabtu (土), Minggu (日), Hari (～曜日)",
        "compounds": [
          "金曜日 (きんようび = Jumat)",
          "土曜日 (どようび = Sabtu)",
          "日曜日 (にちようび = Minggu)",
          "何曜日 (なんようび = hari apa)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 9 (Can-do 35 – 38)",
        "points": [
          {
            "title": "Can-do 35 (1. 何時に起きますか？)",
            "desc": "Dapat berbincang mengenai jam bangun tidur dan rutinitas keseharian."
          },
          {
            "title": "Can-do 36 (2. 1日のスケジュールを説明します)",
            "desc": "Dapat menjelaskan jadwal kegiatan dalam satu hari."
          },
          {
            "title": "Can-do 37 (3. スケジュールボード)",
            "desc": "Dapat membaca jadwal dan tujuan rekan kerja pada papan jadwal kantor (Schedule Board)."
          },
          {
            "title": "Can-do 38 (4. 私は日曜日がいいです)",
            "desc": "Dapat mendiskusikan dan menyepakati hari serta jam untuk suatu acara bersama teman."
          }
        ]
      },
      {
        "title": "1. Kosakata Rutinitas, Jam & Hari",
        "vocabulary": [
          {
            "japanese": "起きます (おきます) / 寝ます (ねます)",
            "romaji": "Okimasu / Nemasu",
            "meaning": "Bangun tidur / Tidur"
          },
          {
            "japanese": "働きます (はたらきます) / 休みます (やすみます)",
            "romaji": "Hatarakimasu / Yasumimasu",
            "meaning": "Bekerja / Beristirahat (libur)"
          },
          {
            "japanese": "朝礼 (ちょうれい) / 昼休み (ひるやすみ)",
            "romaji": "Chourei / Hiruyasumi",
            "meaning": "Apel pagi / Istirahat siang"
          },
          {
            "japanese": "何時 (なんじ) / ～時 (～じ) / ～時半 (～じはん)",
            "romaji": "Nanji / ~ji / ~jihan",
            "meaning": "Jam berapa / Jam ... / Jam ... lewat 30 menit"
          },
          {
            "japanese": "～ごろ (頃)",
            "romaji": "~goro",
            "meaning": "Kira-kira sekitar pukul ..."
          },
          {
            "japanese": "午前 (ごぜん) / 午後 (ごご)",
            "romaji": "Gozen / Gogo",
            "meaning": "A.M. (pagi) / P.M. (siang-malam)"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 9 (➊ – ➌)",
        "grammarNotes": [
          {
            "pattern": "➊ 【waktu】に V-ます / 【waktu】ごろ V-ます",
            "explanation": "Partikel に diletakkan setelah angka waktu spesifik; gunakan ごろ untuk perkiraan waktu.",
            "example": "毎朝 6時に 起きます。夜 11時ごろ 寝ます。(Setiap pagi bangun jam 6. Malam tidur sekitar jam 11.)"
          },
          {
            "pattern": "➋ 【waktu】から 【waktu】まで",
            "explanation": "Menyatakan rentang waktu dari jam/hari awal (から) sampai jam/hari akhir (まで).",
            "example": "12時から 1時まで 昼休みです。仕事は 月曜日から 金曜日までです。(Istirahat siang dari jam 12 sampai jam 1.)"
          },
          {
            "pattern": "➌ 【hari dan waktu】が いいです",
            "explanation": "Menyatakan hari atau waktu yang paling cocok/diinginkan.",
            "example": "私は 日曜日が いいです。午前10時が いいです。(Saya cocoknya hari Minggu. Jam 10 pagi bagus.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis: Jadwal Kerja",
        "dialogues": [
          {
            "speaker": "Budi",
            "text": "すみません、仕事の 時間を 教えてください。",
            "translation": "Permisi, tolong beritahu jam kerjanya."
          },
          {
            "speaker": "Senpai",
            "text": "朝 8時半から 朝礼が あります。仕事は 9時から 5時までです。",
            "translation": "Mulai jam 08:30 pagi ada apel pagi. Kerja dari jam 9 sampai jam 5 sore."
          },
          {
            "speaker": "Budi",
            "text": "昼休みは 何時からですか？",
            "translation": "Istirahat siangnya mulai jam berapa?"
          },
          {
            "speaker": "Senpai",
            "text": "12時から 1時まで 昼休みですよ。",
            "translation": "Dari jam 12 sampai jam 1 adalah istirahat siang."
          }
        ],
        "culturalTips": "Di tempat kerja Jepang, apel pagi (Chourei / 朝礼) sangat umum dilakukan beberapa menit sebelum jam kerja resmi dimulai untuk mengecek keselamatan dan target hari itu. Disarankan sudah siap di tempat kerja 10–15 menit sebelum Chourei."
      }
    ]
  },
  {
    "id": "irodori_bab_10",
    "groupId": "irodori_a1",
    "chapterNumber": 10,
    "topic": "Topik 5: Kehidupan Keseharian (毎日の生活)",
    "title": "Bab 10: Hochikisu Kashite Kudasai (ホチキス貸してください)",
    "subtitle": "Tolong pinjamkan stapler • Instruksi Kerja, Meminjam Barang & Ceklis",
    "canDo": "Can-do 39–43: Mampu meminta bantuan rekan kerja, mengonfirmasi jumlah barang dalam tugas, membaca memo kerja, meminjam barang (charger/alat tulis), dan membaca daftar ceklis.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "朝・昼・夜",
        "onyomi": "チョウ・チュウ・ヤ",
        "kunyomi": "あさ・ひる・よる",
        "meaning": "Pagi (朝), Siang (昼), Malam (夜)",
        "compounds": [
          "朝 (あさ = pagi)",
          "昼 (ひる = siang)",
          "夜 (よる = malam)"
        ]
      },
      {
        "kanji": "～時・～分・～半",
        "onyomi": "ジ・フン／プン・ハン",
        "kunyomi": "とき・わ(ける)・なか(ば)",
        "meaning": "Jam (～時), Menit (～分), Setengah (～半)",
        "compounds": [
          "9時15分 (くじじゅうごふん = 09:15)",
          "8時半 (はちじはん = 08:30)"
        ]
      },
      {
        "kanji": "～枚",
        "onyomi": "マイ (mai)",
        "kunyomi": "-",
        "meaning": "Lembar (satuan benda tipis seperti kertas/piring/baju)",
        "compounds": [
          "5枚 (ごまい = 5 lembar)",
          "何枚 (なんまい = berapa lembar)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 10 (Can-do 39 – 43)",
        "points": [
          {
            "title": "Can-do 39 (1. ちょっと手伝ってください)",
            "desc": "Dapat meminta bantuan kepada rekan kerja dan merespons permintaan tolong."
          },
          {
            "title": "Can-do 40 (2. すみません、いくつですか？)",
            "desc": "Dapat menanyakan dan mengonfirmasi jumlah barang saat menerima instruksi kerja."
          },
          {
            "title": "Can-do 41 (3. 仕事のメモ)",
            "desc": "Dapat memahami memo instruksi pekerjaan yang ditinggalkan oleh rekan kerja."
          },
          {
            "title": "Can-do 42 (4. スマホの充電器、ありますか？)",
            "desc": "Dapat meminjam alat tulis atau pengisi daya ponsel kepada teman/rekan kerja."
          },
          {
            "title": "Can-do 43 (5. チェックリスト)",
            "desc": "Dapat memeriksa daftar periksa (checklist) persiapan penutupan ruangan/kantor."
          }
        ]
      },
      {
        "title": "1. Kosakata Alat Kantor (Wasei-Eigo) & Pekerjaan",
        "vocabulary": [
          {
            "japanese": "ホチキス / セロテープ / ハサミ",
            "romaji": "Hochikisu / Seroteepu / Hasami",
            "meaning": "Stapler / Selotip bening / Gunting"
          },
          {
            "japanese": "ドライバー / カッター",
            "romaji": "Doraibaa / Kattaa",
            "meaning": "Obeng / Pisau cutter"
          },
          {
            "japanese": "充電器 (じゅうでんき)",
            "romaji": "Juudenki",
            "meaning": "Charger (pengisi daya baterai)"
          },
          {
            "japanese": "手伝います (てつだいます)",
            "romaji": "Tetsudaimasu",
            "meaning": "Membantu"
          },
          {
            "japanese": "貸します (かします) / 借ります (かります)",
            "romaji": "Kashimasu / Karimasu",
            "meaning": "Meminjamkan / Meminjam"
          },
          {
            "japanese": "コピーします / 並べます (ならべます)",
            "romaji": "Kopii shimasu / Narabemasu",
            "meaning": "Memfotokopi / Menyusun berjajar"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 10 (➊ – ➌)",
        "grammarNotes": [
          {
            "pattern": "➊ V-て ください / V-て / V-て くれる？",
            "explanation": "Digunakan untuk meminta tolong atau memberi instruksi sopan (V-てください) maupun akrab (V-て).",
            "example": "すみません、ちょっと 手伝って ください。この資料を 20部 コピーして ください。(Tolong bantu sebentar. Tolong fotokopi dokumen ini 20 rangkap.)"
          },
          {
            "pattern": "➋ N ですね ＜Konfirmasi＞",
            "explanation": "Digunakan untuk memastikan kembali jumlah atau instruksi agar tidak salah.",
            "example": "いすは 10個ですね。かしこまりました。(Kursinya 10 buah ya. Baik, saya mengerti.)"
          },
          {
            "pattern": "➌ N、貸して ください / N、借りても いいですか？",
            "explanation": "Digunakan saat ingin meminjam barang milik orang lain.",
            "example": "ホチキス、貸して ください。/ 充電器、借りても いいですか？ (Tolong pinjamkan stapler. / Bolehkah saya pinjam charger?)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Kantor",
        "dialogues": [
          {
            "speaker": "Sato",
            "text": "アディさん、すみませんが、ちょっと 手伝って ください。会議室に いすを 並べて ください。",
            "translation": "Adi-san, maaf, tolong bantu sebentar. Tolong susun kursi di ruang rapat."
          },
          {
            "speaker": "Adi",
            "text": "はい。すみません、いすは いくつですか？",
            "translation": "Baik. Permisi, kursinya berapa buah?"
          },
          {
            "speaker": "Sato",
            "text": "8つ お願いします。",
            "translation": "Tolong 8 buah ya."
          },
          {
            "speaker": "Adi",
            "text": "8つですね。わかりました！",
            "translation": "8 buah ya. Baik, saya mengerti!"
          }
        ],
        "culturalTips": "Beberapa istilah alat di Jepang berasal dari merek atau bahasa Inggris buatan Jepang (Wasei-eigo), seperti \"Hochikisu\" (dari merek E.H. Hotchkiss = stapler) dan \"Doraibaa\" (screwdriver = obeng). Jangan mengisi daya ponsel di stopkontak toko/kantor tanpa izin karena dapat dianggap mencuri listrik."
      }
    ]
  },
  {
    "id": "irodori_bab_11",
    "groupId": "irodori_a1",
    "chapterNumber": 11,
    "topic": "Topik 6: Hal yang Saya Sukai (私の好きなこと)",
    "title": "Bab 11: Donna Manga ga Suki Desu ka? (どんなマンガが好きですか？)",
    "subtitle": "Komik apakah yang Anda sukai? • Hobi, Hari Libur & Profil SNS",
    "canDo": "Can-do 44–47: Mampu membicarakan hobi, mendiskusikan komik/film/olahraga favorit, menceritakan kegiatan di hari libur, dan membaca profil media sosial.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "読みます・聞きます・見ます",
        "onyomi": "ドク・ブン・ケン",
        "kunyomi": "よみます・ききます・みます",
        "meaning": "Membaca (読みます), Mendengarkan (聞きます), Menonton/Melihat (見ます)",
        "compounds": [
          "本を読みます (membaca buku)",
          "音楽を聞きます (mendengar musik)",
          "映画を見ます (menonton film)"
        ]
      },
      {
        "kanji": "本・友だち・何",
        "onyomi": "ホン・ユウ・カ",
        "kunyomi": "もと・とも・なに／なん",
        "meaning": "Buku (本), Teman (友だち), Apa (何)",
        "compounds": [
          "本 (ほん = buku)",
          "友だち (ともだち = teman)",
          "何 (なに = apa)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 11 (Can-do 44 – 47)",
        "points": [
          {
            "title": "Can-do 44 (1. 趣味は何ですか？)",
            "desc": "Dapat bertanya dan menjawab mengenai hobi masing-masing."
          },
          {
            "title": "Can-do 45 (2. 「ドラゴンボール」が大好きです)",
            "desc": "Dapat berbincang seru mengenai hal yang disukai (manga, anime, musik, olahraga)."
          },
          {
            "title": "Can-do 46 (3. うちでゆっくりします)",
            "desc": "Dapat menceritakan apa yang biasa dilakukan pada hari libur."
          },
          {
            "title": "Can-do 47 (4. SNSのプロフィール)",
            "desc": "Dapat memahami informasi perkenalan dan minat pada profil media sosial."
          }
        ]
      },
      {
        "title": "1. Kosakata Hobi & Aktivitas Hari Libur",
        "vocabulary": [
          {
            "japanese": "趣味 (しゅみ)",
            "romaji": "Shumi",
            "meaning": "Hobi"
          },
          {
            "japanese": "マンガ / アニメ / ゲーム / 小説 (しょうせつ)",
            "romaji": "Manga / Anime / Geemu / Shousetsu",
            "meaning": "Komik / Anime / Gim / Novel"
          },
          {
            "japanese": "音楽 (おんがく) / 映画 (えいが) / スポーツ",
            "romaji": "Ongaku / Eiga / Supootsu",
            "meaning": "Musik / Film / Olahraga"
          },
          {
            "japanese": "サッカー / バドミントン / ラグビー",
            "romaji": "Sakkaa / Badominton / Ragubii",
            "meaning": "Sepak bola / Bulu tangkis / Rugbi"
          },
          {
            "japanese": "写真を撮ります (しゃしんをとります)",
            "romaji": "Shashin o torimasu",
            "meaning": "Memotret foto"
          },
          {
            "japanese": "うちで ゆっくりします",
            "romaji": "Uchi de yukkuri shimasu",
            "meaning": "Bersantai di rumah"
          },
          {
            "japanese": "たいてい / ときどき / ぜんぜん",
            "romaji": "Taitei / Tokidoki / Zenzen",
            "meaning": "Biasanya / Kadang-kadang / Sama sekali tidak (+ negatif)"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 11 (➊ – ➎)",
        "grammarNotes": [
          {
            "pattern": "➊ N は 何ですか？ (趣味は 何ですか？)",
            "explanation": "Menanyakan hobi atau hal spesifik mengenai lawan bicara.",
            "example": "趣味は 何ですか？ — 写真を 撮ることです / 映画です。(Hobinya apa? — Memotret / Film.)"
          },
          {
            "pattern": "➋ どんな N (Jenis N yang bagaimana?)",
            "explanation": "Menanyakan kategori atau genre spesifik dari sesuatu.",
            "example": "どんな マンガが 好きですか？ — スポーツの マンガが 大好きです。(Suka komik yang seperti apa? — Sangat suka komik olahraga.)"
          },
          {
            "pattern": "➌ あまり ナA-じゃないです / イA-くないです",
            "explanation": "Menyatakan tingkat sifat yang \"tidak begitu ...\".",
            "example": "サッカーは あまり 上手じゃないです。(Saya tidak begitu mahir bermain sepak bola.)"
          },
          {
            "pattern": "➍ 【いつも／たいてい／よく／ときどき】V-ます / 【あまり／ぜんぜん】V-ません",
            "explanation": "Skala frekuensi kegiatan dari 100% (いつも) hingga 0% (ぜんぜん～ません).",
            "example": "休みの日は たいてい うちで 映画を 見ます。パチンコは ぜんぜん しません。(Hari libur biasanya menonton film di rumah. Sama sekali tidak main pachinko.)"
          },
          {
            "pattern": "➎ 【orang】と 【tempat】で V-ます",
            "explanation": "Menjelaskan dengan siapa (と) dan di mana (で) melakukan kegiatan.",
            "example": "ときどき 友だちと 公園で サッカーを します。(Kadang-kadang bermain sepak bola di taman bersama teman.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis (Kaiwa)",
        "dialogues": [
          {
            "speaker": "Yamada",
            "text": "ブディさんは 休みの日、何を しますか？",
            "translation": "Budi-san pada hari libur biasa melakukan apa?"
          },
          {
            "speaker": "Budi",
            "text": "たいてい うちで マンガを 読みます。日本の マンガが 大好きです。",
            "translation": "Biasanya saya membaca komik di rumah. Saya sangat suka komik Jepang."
          },
          {
            "speaker": "Yamada",
            "text": "へえ、いいですね！どんな マンガが 好きですか？",
            "translation": "Wah, bagus ya! Komik seperti apa yang Anda sukai?"
          },
          {
            "speaker": "Budi",
            "text": "「ワンピース」や「ドラゴンボール」が 好きです。",
            "translation": "Saya suka \"One Piece\" dan \"Dragon Ball\"."
          }
        ],
        "culturalTips": "Manga dan gim Jepang dinikmati oleh segala usia, bukan hanya anak-anak. Novelis Jepang seperti Haruki Murakami juga populer di seluruh dunia. Membicarakan manga, anime, atau olahraga seperti sepak bola dan bulu tangkis adalah cara terbaik untuk cepat akrab dengan rekan kerja Jepang."
      }
    ]
  },
  {
    "id": "irodori_bab_12",
    "groupId": "irodori_a1",
    "chapterNumber": 12,
    "topic": "Topik 6: Hal yang Saya Sukai (私の好きなこと)",
    "title": "Bab 12: Issho ni Nomi ni Ikimasen ka? (いっしょに飲みに行きませんか？)",
    "subtitle": "Bagaimana kalau pergi minum bersama? • Poster Acara & Mengajak Teman",
    "canDo": "Can-do 48–51: Mampu membaca poster acara lokal, mengobrol tentang acara festival, mengajak teman pergi bersama, dan membalas pesan ajakan.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "～年・～月・～日",
        "onyomi": "ネン・ガツ・ニチ",
        "kunyomi": "とし・つき・ひ／か",
        "meaning": "Tahun (～年), Bulan (～月), Tanggal/Hari (～日)",
        "compounds": [
          "2025年8月10日 (10 Agustus 2025)",
          "何月何日 (なんがつなんにち = bulan apa tanggal berapa)"
        ]
      },
      {
        "kanji": "今日・今週・今度",
        "onyomi": "コン・シュウ・ド",
        "kunyomi": "きょう・こんしゅう・こんど",
        "meaning": "Hari ini (今日), Minggu ini (今週), Kali ini / Lain kali (今度)",
        "compounds": [
          "今日 (きょう = hari ini)",
          "今週 (こんしゅう = minggu ini)",
          "今度の日曜日 (こんどのにちようび = hari Minggu besok)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 12 (Can-do 48 – 51)",
        "points": [
          {
            "title": "Can-do 48 (1. イベントの案内)",
            "desc": "Dapat membaca tanggal, waktu, tempat, dan harga tiket pada poster pengumuman acara."
          },
          {
            "title": "Can-do 49 (2. 来週、夏祭りがありますね)",
            "desc": "Dapat berbincang mengenai acara yang akan diadakan di sekitar kota."
          },
          {
            "title": "Can-do 50 (3. いっしょに行きましょう)",
            "desc": "Dapat mengajak teman pergi ke suatu acara atau makan bersama, serta merespons ajakan."
          },
          {
            "title": "Can-do 51 (4. 誘いの返事)",
            "desc": "Dapat membaca dan membalas pesan singkat berisi ajakan dari teman."
          }
        ]
      },
      {
        "title": "1. Kosakata Acara, Festival & Penanggalan",
        "vocabulary": [
          {
            "japanese": "夏祭り (なつまつり) / 花火大会 (はなびたいかい)",
            "romaji": "Natsumatsuri / Hanabi taikai",
            "meaning": "Festival musim panas / Festival kembang api"
          },
          {
            "japanese": "コンサート / イベント / 展覧会 (てんらんかい)",
            "romaji": "Konsaato / Ibento / Tenrankai",
            "meaning": "Konser / Acara (Event) / Pameran"
          },
          {
            "japanese": "入場料 (にゅうじょうりょう) / 無料 (むりょう)",
            "romaji": "Nyuujouryou / Muryou",
            "meaning": "Biaya tiket masuk / Gratis"
          },
          {
            "japanese": "明日 (あした) / 来週 (らいしゅう) / 来月 (らいげつ)",
            "romaji": "Ashita / Raishuu / Raigetsu",
            "meaning": "Besok / Minggu depan / Bulan depan"
          },
          {
            "japanese": "いっしょに / ぜひ",
            "romaji": "Issho ni / Zehi",
            "meaning": "Bersama-sama / Pasti (dengan senang hati)"
          },
          {
            "japanese": "残念ですが (ざんねんですが)… / また今度",
            "romaji": "Zannen desu ga... / Mata kondo",
            "meaning": "Sayang sekali... / Lain kali ya (saat menolak halus)"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 12 (➊ – ➎)",
        "grammarNotes": [
          {
            "pattern": "➊ 【tanggal/waktu】に 【tempat】で 【acara】が あります",
            "explanation": "Menyatakan bahwa suatu acara/event diadakan di suatu tempat (で, bukan に!).",
            "example": "来週の日曜日に 公園で 夏祭りが あります。(Hari Minggu depan ada festival musim panas di taman.)"
          },
          {
            "pattern": "➋ 【tempat/acara】に 行きます (いきます)",
            "explanation": "Menyatakan pergi menuju suatu tempat atau acara.",
            "example": "いっしょに 夏祭りに 行きます。(Pergi ke festival musim panas bersama-sama.)"
          },
          {
            "pattern": "➌ V-ませんか？ (Bagaimana kalau kita ...?)",
            "explanation": "Pola sopan untuk mengajak lawan bicara melakukan sesuatu bersama.",
            "example": "今度の土曜日、いっしょに 食事に 行きませんか？ (Sabtu besok, bagaimana kalau kita pergi makan bersama?)"
          },
          {
            "pattern": "➍ V-ましょう (Mari kita ...!)",
            "explanation": "Menyetujui ajakan dengan antusias atau mengajak secara langsung.",
            "example": "いいですね。行きましょう！(Bagus ya. Ayo kita pergi!)"
          },
          {
            "pattern": "➎ V(masu) に 行きます",
            "explanation": "Menyatakan tujuan kepergian (pergi untuk melakukan V).",
            "example": "映画を 見に 行きます。/ ご飯を 食べに 行きませんか？ (Pergi untuk menonton film. / Bagaimana kalau pergi makan?)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis: Mengajak ke Festival",
        "dialogues": [
          {
            "speaker": "Sato",
            "text": "リナさん、今度の日曜日に 市民公園で インドネシアフェスティバルが ありますよ。",
            "translation": "Rina-san, hari Minggu besok di Taman Kota ada Festival Indonesia lho."
          },
          {
            "speaker": "Rina",
            "text": "本当ですか！いっしょに 見に 行きませんか？",
            "translation": "Benarkah! Bagaimana kalau kita pergi melihatnya bersama-sama?"
          },
          {
            "speaker": "Sato",
            "text": "いいですね、ぜひ 行きましょう！",
            "translation": "Wah bagus, ayo pasti kita pergi!"
          }
        ],
        "culturalTips": "Pada musim panas di Jepang, banyak diadakan Natsumatsuri (夏祭り) lengkap dengan stan makanan Yatai (Takoyaki, Yakisoba, Kakigori), tarian Bon-odori, dan kembang api. Jika terpaksa menolak ajakan teman Jepang, ucapkan alasan singkat dan tambahkan \"Zannen desu ga... Mata kondo onegaishimasu\" agar hubungan tetap hangat."
      }
    ]
  },
  {
    "id": "irodori_bab_13",
    "groupId": "irodori_a1",
    "chapterNumber": 13,
    "topic": "Topik 7: Berkeliling Kota (街を歩く)",
    "title": "Bab 13: Kono Basu wa Kuukou ni Ikimasu ka? (このバスは空港に行きますか？)",
    "subtitle": "Apakah bus ini menuju ke bandara? • Transportasi, Peron & Rute",
    "canDo": "Can-do 52–56: Mampu menanyakan peron kereta/bus ke tujuan, mengabarkan posisi saat ini lewat telepon, menceritakan transportasi ke kantor, bertanya cara menuju suatu tempat, dan membaca papan petunjuk stasiun.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "東・西・南・北",
        "onyomi": "トウ・セイ・ナン・ホク",
        "kunyomi": "ひがし・にし・みなみ・きた",
        "meaning": "Timur (東), Barat (西), Selatan (南), Utara (北)",
        "compounds": [
          "東口 (ひがしぐち = pintu timur)",
          "西口 (にしぐち = pintu barat)",
          "南口 (みなみぐち = pintu selatan)",
          "北口 (きたぐち = pintu utara)"
        ]
      },
      {
        "kanji": "会社・来ます・行きます・乗ります",
        "onyomi": "カイシャ・ライ・コウ・ジョウ",
        "kunyomi": "きます・いきます・のります",
        "meaning": "Perusahaan (会社), Datang (来ます), Pergi (行きます), Naik kendaraan (乗ります)",
        "compounds": [
          "会社 (かいしゃ = perusahaan)",
          "電車に乗ります (naik kereta)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 13 (Can-do 52 – 56)",
        "points": [
          {
            "title": "Can-do 52 (1. 何番線ですか？)",
            "desc": "Dapat bertanya kepada petugas atau orang sekitar mengenai peron kereta atau bus yang menuju ke tempat tujuan."
          },
          {
            "title": "Can-do 53 (2. すみません、今どこですか？)",
            "desc": "Dapat memberitahukan posisi keberadaan saat ini melalui telepon saat janjian."
          },
          {
            "title": "Can-do 54 (3. 1時間ぐらいかかります)",
            "desc": "Dapat berbincang mengenai cara pergi ke tempat kerja dan lama waktu perjalanannya."
          },
          {
            "title": "Can-do 55 (4. 市役所まで、どうやって行きますか？)",
            "desc": "Dapat menanyakan rute dan cara menuju ke suatu tempat."
          },
          {
            "title": "Can-do 56 (5. 駅の中の表示)",
            "desc": "Dapat memahami papan petunjuk jalur dan pintu keluar di dalam stasiun."
          }
        ]
      },
      {
        "title": "1. Kosakata Transportasi & Stasiun",
        "vocabulary": [
          {
            "japanese": "電車 (でんしゃ) / 地下鉄 (ちかてつ) / 新幹線 (しんかんせん)",
            "romaji": "Densha / Chikatetsu / Shinkansen",
            "meaning": "Kereta listrik / Kereta bawah tanah (Subway) / Kereta cepat Shinkansen"
          },
          {
            "japanese": "バス / タクシー / 自転車 (じてんしゃ) / 歩いて (あるいて)",
            "romaji": "Basu / Takushii / Jitensha / Aruite",
            "meaning": "Bus / Taksi / Sepeda / Dengan berjalan kaki"
          },
          {
            "japanese": "空港 (くうこう) / 市役所 (しやくしょ) / 駅 (えき)",
            "romaji": "Kuukou / Shiyakusho / Eki",
            "meaning": "Bandara / Balai Kota / Stasiun"
          },
          {
            "japanese": "～番線 (～ばんせん) / 乗り場 (のりば)",
            "romaji": "~bansen / Noriba",
            "meaning": "Jalur peron nomor ... / Tempat naik kendaraan"
          },
          {
            "japanese": "乗ります (のります) ↔ 降ります (おります)",
            "romaji": "Norimasu ↔ Orimasu",
            "meaning": "Naik kendaraan ↔ Turun kendaraan"
          },
          {
            "japanese": "かかります / どうやって",
            "romaji": "Kakarimasu / Douyatte",
            "meaning": "Memakan waktu/biaya / Dengan cara bagaimana"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 13 (➊ – ➏)",
        "grammarNotes": [
          {
            "pattern": "➊ この【kendaraan】は 【tempat】に 行きますか？",
            "explanation": "Memastikan apakah kereta atau bus tersebut menuju ke tempat tujuan kita.",
            "example": "すみません、このバスは 空港に 行きますか？ (Permisi, apakah bus ini pergi ke bandara?)"
          },
          {
            "pattern": "➋ ここは 【tempat】ですか？",
            "explanation": "Memastikan nama stasiun atau pemberhentian saat ini.",
            "example": "すみません、ここは 新宿駅ですか？ (Permisi, apakah di sini Stasiun Shinjuku?)"
          },
          {
            "pattern": "➌ 【kendaraan】で 来ます／行きます（歩いて 来ます）",
            "explanation": "Partikel で menunjukkan alat transportasi yang digunakan. Khusus jalan kaki menggunakan 歩いて (tanpa で).",
            "example": "毎日 自転車で 会社に 来ます。(Setiap hari datang ke kantor naik sepeda.)"
          },
          {
            "pattern": "➍ 【waktu】ぐらい かかります",
            "explanation": "Menyatakan durasi waktu perjalanan yang dibutuhkan.",
            "example": "うちから 会社まで 30分ぐらい かかります。(Dari rumah sampai kantor memakan waktu sekitar 30 menit.)"
          },
          {
            "pattern": "➎ 【tempat】で 【kendaraan】に 乗ります / を 降ります",
            "explanation": "Perhatikan partikelnya: naik kendaraan menggunakan に乗ります, sedangkan turun dari kendaraan menggunakan を降ります.",
            "example": "東京駅で 電車に 乗ります。品川駅で 電車を 降ります。(Naik kereta di Stasiun Tokyo. Turun kereta di Stasiun Shinagawa.)"
          },
          {
            "pattern": "➏ 【tempat】から 【tempat】まで",
            "explanation": "Menyatakan titik keberangkatan dan titik tujuan.",
            "example": "駅から 市役所まで バスで 10分です。(Dari stasiun sampai balai kota 10 menit naik bus.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Stasiun",
        "dialogues": [
          {
            "speaker": "Adi",
            "text": "すみません、市役所まで どうやって 行きますか？",
            "translation": "Permisi, sampai ke Balai Kota perginya bagaimana ya?"
          },
          {
            "speaker": "Petugas Stasiun",
            "text": "東口から 3番の バスに 乗ってください。市役所前で 降ります。",
            "translation": "Dari Pintu Timur silakan naik bus nomor 3. Turun di halte Shiyakusho-mae."
          },
          {
            "speaker": "Adi",
            "text": "どのぐらい かかりますか？",
            "translation": "Kira-kira memakan waktu berapa lama?"
          },
          {
            "speaker": "Petugas Stasiun",
            "text": "15分ぐらいです。",
            "translation": "Sekitar 15 menit."
          }
        ],
        "culturalTips": "Saat bepergian komuter (Tsuukin / 通勤) di Jepang, kartu IC prabayar seperti Suica, PASMO, atau ICOCA sangat praktis karena cukup ditempelkan (tap) pada gerbang tiket kereta, bus, maupun saat membayar di minimarket dan mesin penjual otomatis."
      }
    ]
  },
  {
    "id": "irodori_bab_14",
    "groupId": "irodori_a1",
    "chapterNumber": 14,
    "topic": "Topik 7: Berkeliling Kota (街を歩く)",
    "title": "Bab 14: Ookina Tatemono Desu ne (大きな建物ですね)",
    "subtitle": "Bangunan yang besar, ya • Fasilitas Stasiun, Titik Temu & Kesan Kota",
    "canDo": "Can-do 57–60: Mampu menanyakan letak fasilitas di stasiun (toilet/loker/ATM), menjelaskan posisi diri saat janjian bertemu, memberikan kesan saat jalan-jalan, dan membaca rambu kota.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "大きい・小さい",
        "onyomi": "ダイ・ショウ",
        "kunyomi": "おおきい・ちいさい",
        "meaning": "Besar (大きい), Kecil (小さい)",
        "compounds": [
          "大きい (おおきい = besar)",
          "小さい (ちいさい = kecil)"
        ]
      },
      {
        "kanji": "高い・低い",
        "onyomi": "コウ・テイ",
        "kunyomi": "たかい・ひくい",
        "meaning": "Tinggi/Mahal (高い), Rendah (低い)",
        "compounds": [
          "高いビル (gedung tinggi)",
          "低い (ひくい = rendah)"
        ]
      },
      {
        "kanji": "前・後ろ・横",
        "onyomi": "ゼン・ゴ・オウ",
        "kunyomi": "まえ・うしろ・よこ",
        "meaning": "Depan (前), Belakang (後ろ), Samping (横)",
        "compounds": [
          "改札の前 (di depan gerbang tiket)",
          "後ろ (うしろ = belakang)",
          "横 (よこ = samping)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 14 (Can-do 57 – 60)",
        "points": [
          {
            "title": "Can-do 57 (1. トイレはどこですか？)",
            "desc": "Dapat bertanya letak toilet, loker koin, atau ATM di stasiun/gedung."
          },
          {
            "title": "Can-do 58 (2. 今、改札の前にいます)",
            "desc": "Dapat memberitahukan posisi spesifik (di depan gerbang tiket, di dekat minimarket) kepada teman melalui telepon."
          },
          {
            "title": "Can-do 59 (3. ここは十条商店街です)",
            "desc": "Dapat mengomentari bangunan atau suasana kota saat berjalan-jalan bersama teman."
          },
          {
            "title": "Can-do 60 (4. 街にある看板)",
            "desc": "Dapat memahami arti papan tanda fasilitas di jalanan kota."
          }
        ]
      },
      {
        "title": "1. Kosakata Fasilitas Kota & Stasiun",
        "vocabulary": [
          {
            "japanese": "改札 (かいさつ) / みどりの窓口 (まどぐち)",
            "romaji": "Kaisatsu / Midori no madoguchi",
            "meaning": "Gerbang pemeriksaan tiket kereta / Loket layanan tiket JR"
          },
          {
            "japanese": "コインロッカー / 自動販売機 (じどうはんばいき)",
            "romaji": "Koin rokkaa / Jidouhanbaiki",
            "meaning": "Loker koin / Mesin penjual minuman otomatis (Vending machine)"
          },
          {
            "japanese": "ATM (エーティーエム) / 交番 (こうばん)",
            "romaji": "Ee-tii-emu / Kouban",
            "meaning": "Mesin ATM / Pos polisi"
          },
          {
            "japanese": "商店街 (しょうてんがい) / 建物 (たてもの)",
            "romaji": "Shoutengai / Tatemono",
            "meaning": "Jalan perbelanjaan tradisional / Bangunan"
          },
          {
            "japanese": "お寺 (おてら) / 神社 (じんじゃ)",
            "romaji": "Otera / Jinja",
            "meaning": "Kuil Buddha / Kuil Shinto"
          },
          {
            "japanese": "にぎやか（な） / 有名（な）",
            "romaji": "Nigiyaka (na) / Yuumei (na)",
            "meaning": "Ramai & semarak / Terkenal"
          },
          {
            "japanese": "近く (ちかく) / 隣 (となり)",
            "romaji": "Chikaku / Tonari",
            "meaning": "Di dekat / Di sebelah"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 14 (➊ – ➌)",
        "grammarNotes": [
          {
            "pattern": "➊ 【tempat】に N（は）ありますか？",
            "explanation": "Menanyakan apakah di sekitar tempat tersebut terdapat fasilitas seperti ATM atau loker koin.",
            "example": "この近くに ATMは ありますか？ — あのコンビニの中に ありますよ。(Apakah di dekat sini ada ATM? — Ada di dalam minimarket itu.)"
          },
          {
            "pattern": "➋ N の 【lokasi（前・後ろ・横・近く・中）】に います／あります",
            "explanation": "Menjelaskan posisi keberadaan orang atau tempat menggunakan kata posisi.",
            "example": "今、北口の 改札の 前に います。(Sekarang saya ada di depan gerbang tiket Pintu Utara.)"
          },
          {
            "pattern": "➌ ナA-な N ですね / イA-い N ですね（大きな N / 小さな N）",
            "explanation": "Menggabungkan kata sifat dengan kata benda untuk mengomentari pemandangan.",
            "example": "にぎやかな 商店街ですね。大きな 建物ですね。(Jalan perbelanjaan yang ramai ya. Bangunan yang besar ya.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis: Janjian di Stasiun",
        "dialogues": [
          {
            "speaker": "Rina (Telepon)",
            "text": "もしもし、佐藤さん？今、駅に 着きました。どこに いますか？",
            "translation": "Halo, Sato-san? Saya baru tiba di stasiun. Anda ada di mana?"
          },
          {
            "speaker": "Sato (Telepon)",
            "text": "私は 東口の 改札の 前に います。近くに 花屋が ありますよ。",
            "translation": "Saya ada di depan gerbang tiket Pintu Timur. Di dekatnya ada toko bunga."
          },
          {
            "speaker": "Rina (Telepon)",
            "text": "あ、花屋の 前ですね！わかりました。今、行きます。",
            "translation": "Oh, di depan toko bunga ya! Baik, saya ke sana sekarang."
          }
        ],
        "culturalTips": "Di stasiun Jepang tersedia Koin Rokkaa (コインロッカー) untuk menitipkan koper dan Jidouhanbaiki (自動販売機 / mesin penjual minuman otomatis) di hampir setiap sudut jalan. ATM di dalam minimarket (seperti Seven Bank di 7-Eleven) sangat mudah ditemukan dan beroperasi 24 jam."
      }
    ]
  },
  {
    "id": "irodori_bab_15",
    "groupId": "irodori_a1",
    "chapterNumber": 15,
    "topic": "Topik 8: Di Toko (店で)",
    "title": "Bab 15: Denchi ga Hoshii n Desu ga... (電池がほしいんですが…)",
    "subtitle": "Saya perlu baterai • Mencari Barang, Panduan Lantai & Pusat Perbelanjaan",
    "canDo": "Can-do 61–65: Mampu menanyakan tempat membeli suatu barang, membaca papan panduan lantai (floor guide), bertanya letak konter kepada staf toko, mengomentari barang saat berbelanja, dan membaca tanda di mal.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "入口・出口・～階",
        "onyomi": "ニュウ・シュツ・カイ／ガイ",
        "kunyomi": "いりぐち・でぐち",
        "meaning": "Pintu Masuk (入口), Pintu Keluar (出口), Lantai (～階)",
        "compounds": [
          "入口 (いりぐち = pintu masuk)",
          "出口 (でぐち = pintu keluar)",
          "1階 (いっかい = lantai 1)",
          "3階 (さんがい = lantai 3)"
        ]
      },
      {
        "kanji": "押す・引く・安い",
        "onyomi": "オウ・イン・アン",
        "kunyomi": "おす・ひく・やすい",
        "meaning": "Dorong/Tekan (押す), Tarik (引く), Murah (安い)",
        "compounds": [
          "押す (おす = dorong/tekan)",
          "引く (ひく = tarik)",
          "安い (やすい = murah)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 15 (Can-do 61 – 65)",
        "points": [
          {
            "title": "Can-do 61 (1. どこで買えますか？)",
            "desc": "Dapat bertanya kepada teman di mana bisa membeli barang yang sedang dibutuhkan."
          },
          {
            "title": "Can-do 62 (2. フロアガイド)",
            "desc": "Dapat membaca direktori panduan lantai (Floor Guide) di pusat perbelanjaan."
          },
          {
            "title": "Can-do 63 (3. カメラは何階ですか？)",
            "desc": "Dapat bertanya kepada petugas informasi di lantai berapa suatu barang dijual."
          },
          {
            "title": "Can-do 64 (4. わあ、かっこいいですね)",
            "desc": "Dapat mengomentari desain atau kualitas barang bersama teman saat berbelanja."
          },
          {
            "title": "Can-do 65 (5. ショッピングセンターの表示)",
            "desc": "Dapat memahami simbol dan tulisan pintu masuk/keluar, tombol lift, dan toilet di mal."
          }
        ]
      },
      {
        "title": "1. Kosakata Toko, Barang & Lantai Gedung",
        "vocabulary": [
          {
            "japanese": "100円ショップ (ひゃくえんショップ) / ドラッグストア",
            "romaji": "Hyakuen shoppu / Doraggusutoa",
            "meaning": "Toko serba 100 yen / Toko obat & kosmetik (Drugstore)"
          },
          {
            "japanese": "デパート / 家電量販店 (かでんりょうはんてん)",
            "romaji": "Depaato / Kaden ryouhanten",
            "meaning": "Department store / Toko elektronik besar"
          },
          {
            "japanese": "電池 (でんち) / 傘 (かさ) / かばん / 靴 (くつ)",
            "romaji": "Denchi / Kasa / Kaban / Kutsu",
            "meaning": "Baterai / Payung / Tas / Sepatu"
          },
          {
            "japanese": "1階 (いっかい) / 2階 (にかい) / 3階 (さんがい) / 地下1階 (ちかいっかい)",
            "romaji": "Ikkai / Nikai / Sangai / Chika ikkai",
            "meaning": "Lantai 1 / Lantai 2 / Lantai 3 / Basement 1 (B1)"
          },
          {
            "japanese": "お手洗い (おてあらい) / 化粧室 (けしょうしつ)",
            "romaji": "Otearai / Keshoushitsu",
            "meaning": "Toilet / Restroom (istilah halus di mal)"
          },
          {
            "japanese": "かっこいい / かわいい / 丈夫（な）(じょうぶな)",
            "romaji": "Kakkoii / Kawaii / Joubu (na)",
            "meaning": "Keren / Lucu & Manis / Kuat & Awet"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 15 (➊ – ➋)",
        "grammarNotes": [
          {
            "pattern": "➊ N が ほしいんですが… (どこで 買えますか？)",
            "explanation": "Digunakan untuk mengutarakan barang yang sedang diinginkan/dicari sebagai pembuka sebelum bertanya tempat membelinya.",
            "example": "自転車が ほしいんですが、どこで 買えますか？ (Saya ingin membeli sepeda, bisa beli di mana ya?)"
          },
          {
            "pattern": "➋ ナA-ですね / イA-いですね / ナA！ / イA-い！",
            "explanation": "Mengungkapkan kesan spontan saat melihat barang di toko.",
            "example": "この時計、かっこいいですね！しかも 安いですね。(Jam tangan ini keren ya! Apalagi murah ya.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Pusat Perbelanjaan",
        "dialogues": [
          {
            "speaker": "Adi",
            "text": "すみません、電池が ほしいんですが、どこで 買えますか？",
            "translation": "Permisi, saya sedang butuh baterai, bisa dibeli di mana ya?"
          },
          {
            "speaker": "Rekan Kerja",
            "text": "電池なら、駅前の 100円ショップに ありますよ。",
            "translation": "Kalau baterai, ada di toko 100 yen di depan stasiun."
          },
          {
            "speaker": "Adi (Di Mal)",
            "text": "すみません、スーツケース売り場は 何階ですか？",
            "translation": "Permisi, konter penjualan koper ada di lantai berapa?"
          },
          {
            "speaker": "Staf Informasi",
            "text": "かばん・スーツケースは 4階でございます。エスカレーターの 横です。",
            "translation": "Tas dan koper ada di lantai 4. Di samping eskalator."
          }
        ],
        "culturalTips": "Perhatikan cara baca lantai: 1階 dibaca \"ikkai\", 3階 dibaca \"sangai\", 6階 dibaca \"rokkai\", dan 何階 dibaca \"nangai\". Di pintu toko sering tertulis 押す (Osu = Dorong) dan 引く (Hiku = Tarik), sedangkan pada tombol lift tertulis 開 (Hiraku = Buka) dan 閉 (Shimaru = Tutup)."
      }
    ]
  },
  {
    "id": "irodori_bab_16",
    "groupId": "irodori_a1",
    "chapterNumber": 16,
    "topic": "Topik 8: Di Toko (店で)",
    "title": "Bab 16: Kore, Ikura Desu ka? (これ、いくらですか？)",
    "subtitle": "Ini berapa harganya? • Menanyakan Harga, Kasir Minimarket & Diskon",
    "canDo": "Can-do 66–70: Mampu membaca label harga, menanyakan harga barang kepada pelayan toko, berbelanja daging/lauk per gram, merespons pertanyaan kasir minimarket, dan memahami label diskon.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "一・二・三・四・五",
        "onyomi": "イチ・ニ・サン・シ・ゴ",
        "kunyomi": "ひと(つ)・ふた(つ)・みっ(つ)・よっ(つ)・いつ(つ)",
        "meaning": "Angka 1 (一), 2 (二), 3 (三), 4 (四), 5 (五)",
        "compounds": [
          "百円 (100 yen)",
          "二百円 (200 yen)",
          "三百円 (さんびゃくえん = 300 yen)"
        ]
      },
      {
        "kanji": "六・七・八・九・十",
        "onyomi": "ロク・シチ・ハチ・キュウ・ジュウ",
        "kunyomi": "むっ(つ)・なな(つ)・やっ(つ)・ここの(つ)・とお",
        "meaning": "Angka 6 (六), 7 (七), 8 (八), 9 (九), 10 (十)",
        "compounds": [
          "六百円 (ろっぴゃくえん = 600 yen)",
          "八百円 (はっぴゃくえん = 800 yen)",
          "千円 (1.000 yen)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 16 (Can-do 66 – 70)",
        "points": [
          {
            "title": "Can-do 66 (1. 1,980円です)",
            "desc": "Dapat membaca harga barang dan mengonfirmasi harga kepada staf toko."
          },
          {
            "title": "Can-do 67 (2. あのTシャツ、いくらですか？)",
            "desc": "Dapat menunjuk barang dan menanyakan harganya."
          },
          {
            "title": "Can-do 68 (3. ひき肉200gください)",
            "desc": "Dapat membeli daging atau lauk dengan menyebutkan berat (gram) atau jumlah masing-masing."
          },
          {
            "title": "Can-do 69 (4. こちら、温めますか？)",
            "desc": "Dapat memahami dan menjawab pertanyaan kasir minimarket (menghangatkan bento, kantong plastik, cara bayar)."
          },
          {
            "title": "Can-do 70 (5. 割引表示)",
            "desc": "Dapat membaca tulisan diskon (半額 / 20%引き / 税別 / 税込) di toko dan supermarket."
          }
        ]
      },
      {
        "title": "1. Kosakata Harga, Kasir Minimarket & Diskon",
        "vocabulary": [
          {
            "japanese": "いくら / ～円 (～えん)",
            "romaji": "Ikura / ~en",
            "meaning": "Berapa harganya / ... Yen"
          },
          {
            "japanese": "税込 (ぜいこみ) / 税別 (ぜいべつ)",
            "romaji": "Zeikomi / Zeibetsu",
            "meaning": "Sudah termasuk pajak / Belum termasuk pajak"
          },
          {
            "japanese": "半額 (はんがく) / ～割引き (～わりびき) / セール",
            "romaji": "Hangaku / ~waribiki / Seeru",
            "meaning": "Diskon setengah harga (50%) / Diskon ...0% / Sale"
          },
          {
            "japanese": "ひき肉 (ひきにく) / コロッケ / たい焼き / おにぎり",
            "romaji": "Hikiniku / Korokke / Taiyaki / Onigiri",
            "meaning": "Daging cincang / Kroket kentang / Kue ikan Taiyaki / Nasi kepal"
          },
          {
            "japanese": "お弁当、温めますか？ (あたためますか)",
            "romaji": "Obentou, atatamemasu ka?",
            "meaning": "Apakah nasi kotaknya mau dihangatkan?"
          },
          {
            "japanese": "レジ袋 (ぶくろ)、ご利用ですか？",
            "romaji": "Rejibukuro, goriyou desu ka?",
            "meaning": "Apakah perlu kantong plastik belanja?"
          },
          {
            "japanese": "ポイントカード / 電子マネー / 現金 (げんきん)",
            "romaji": "Pointo kaado / Denshi manee / Genkin",
            "meaning": "Kartu poin / Uang elektronik / Uang tunai"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 16 (➊ – ➌)",
        "grammarNotes": [
          {
            "pattern": "➊ 【これ／それ／あれ】（は）いくらですか？",
            "explanation": "Menanyakan harga barang berdasarkan jarak dari pembicara (これ = dekat saya, それ = dekat lawan bicara, あれ = jauh dari keduanya).",
            "example": "すみません、これは いくらですか？ — 1,980円です。(Permisi, ini berapa harganya? — 1.980 yen.)"
          },
          {
            "pattern": "➋ 【この／その／あの】N",
            "explanation": "Kata tunjuk yang langsung diikuti oleh kata benda (harus diikuti N).",
            "example": "あの 白い Tシャツは いくらですか？ (Kaus putih yang di sana itu berapa harganya?)"
          },
          {
            "pattern": "➌ 【kuantitas】ずつ (Masing-masing ...)",
            "explanation": "Digunakan saat membeli beberapa jenis barang dengan jumlah yang sama untuk tiap jenisnya.",
            "example": "たい焼きと コロッケを 2つずつ ください。(Tolong taiyaki dan kroket masing-masing 2 buah.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Kasir Minimarket",
        "dialogues": [
          {
            "speaker": "Kasir Konbini",
            "text": "いらっしゃいませ。こちらの お弁当は 温めますか？",
            "translation": "Selamat datang. Apakah nasi kotak ini mau dihangatkan?"
          },
          {
            "speaker": "Dewi",
            "text": "はい、お願いします。",
            "translation": "Ya, tolong."
          },
          {
            "speaker": "Kasir Konbini",
            "text": "レジ袋は ご利用ですか？",
            "translation": "Apakah menggunakan kantong plastik?"
          },
          {
            "speaker": "Dewi",
            "text": "いいえ、大丈夫です。支払いは Suicaで お願いします。",
            "translation": "Tidak, tidak usah. Pembayarannya tolong pakai Suica."
          }
        ],
        "culturalTips": "Uang Jepang terdiri dari koin (1, 5, 10, 50, 100, 500 yen) dan uang kertas (1.000, 5.000, 10.000 yen). Di supermarket Jepang, menjelang malam hari (sekitar pukul 19:00–20:00), lauk siap saji (Souzai) dan Bento sering ditempeli stiker diskon \"20%引き\" hingga \"半額\" (diskon 50%)."
      }
    ]
  },
  {
    "id": "irodori_bab_17",
    "groupId": "irodori_a1",
    "chapterNumber": 17,
    "topic": "Topik 9: Pada Hari Libur (休みの日に)",
    "title": "Bab 17: Eiga o Mi ni Ikimashita (映画を見に行きました)",
    "subtitle": "Saya pergi menonton film • Pengalaman Akhir Pekan & Bentuk Lampau",
    "canDo": "Can-do 71–75: Mampu menceritakan kegiatan akhir pekan yang lalu, mengungkapkan kesan terhadap kegiatan tersebut, berbincang tentang wisata yang baru dikunjungi, membaca tabel tarif tiket, dan membaca unggahan pengalaman liburan.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "百・千・万・～円",
        "onyomi": "ヒャク・セン・マン・エン",
        "kunyomi": "-",
        "meaning": "Ratus (百), Ribu (千), Puluh Ribu (万), Yen (～円)",
        "compounds": [
          "三百円 (300 yen)",
          "三千円 (さんぜんえん = 3.000 yen)",
          "一万円 (いちまんえん = 10.000 yen)"
        ]
      },
      {
        "kanji": "休み・映画・日本語",
        "onyomi": "キュウ・エイガ・ニホンゴ",
        "kunyomi": "やすみ",
        "meaning": "Libur/Istirahat (休み), Film (映画), Bahasa Jepang (日本語)",
        "compounds": [
          "休み (やすみ = libur)",
          "映画館 (えいがかん = bioskop)"
        ]
      },
      {
        "kanji": "勉強します・買います",
        "onyomi": "ベンキョウ・バイ",
        "kunyomi": "かいます",
        "meaning": "Belajar (勉強します), Membeli (買います)",
        "compounds": [
          "勉強します (べんきょうします = belajar)",
          "買い物 (かいもの = belanja)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 17 (Can-do 71 – 75)",
        "points": [
          {
            "title": "Can-do 71 (1. 週末は何をしましたか？)",
            "desc": "Dapat bertanya dan menceritakan kegiatan yang dilakukan pada akhir pekan lalu."
          },
          {
            "title": "Can-do 72 (2. 楽しかったです)",
            "desc": "Dapat mengungkapkan kesan (menyenangkan, lelah, enak) tentang pengalaman yang telah dilalui."
          },
          {
            "title": "Can-do 73 (3. 家族で水族館に行きました)",
            "desc": "Dapat berbincang mengenai tempat wisata yang baru dikunjungi."
          },
          {
            "title": "Can-do 74 (4. 料金表)",
            "desc": "Dapat membaca tabel harga tiket masuk (dewasa, anak-anak) di fasilitas wisata."
          },
          {
            "title": "Can-do 75 (5. 今、家に着きました)",
            "desc": "Dapat membaca unggahan di media sosial mengenai perjalanan hari itu."
          }
        ]
      },
      {
        "title": "1. Kosakata Pengalaman Liburan & Kesan",
        "vocabulary": [
          {
            "japanese": "週末 (しゅうまつ) / 先週 (せんしゅう) / 昨日 (きのう)",
            "romaji": "Shuumatsu / Senshuu / Kinou",
            "meaning": "Akhir pekan / Minggu lalu / Kemarin"
          },
          {
            "japanese": "水族館 (すいぞくかん) / 動物園 (どうぶつえん) / 漫画喫茶 (まんがきっさ)",
            "romaji": "Suizokukan / Doubutsuen / Manga kissa",
            "meaning": "Akuarium publik / Kebun binatang / Kafe manga"
          },
          {
            "japanese": "お土産 (おみやげ) / 掃除 (そうじ) / 洗濯 (せんたく)",
            "romaji": "Omiyage / Souji / Sentaku",
            "meaning": "Oleh-oleh / Bersih-bersih rumah / Mencuci pakaian"
          },
          {
            "japanese": "大人 (おとな) / 子ども (こども)",
            "romaji": "Otona / Kodomo",
            "meaning": "Dewasa / Anak-anak (pada tabel tiket)"
          },
          {
            "japanese": "楽しい (たのしい) / おもしろい / おいしい / 忙しい (いそがしい)",
            "romaji": "Tanoshii / Omoshiroi / Oishii / Isogashii",
            "meaning": "Menyenangkan / Menarik / Enak / Sibuk"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 17 (➊ – ➎)",
        "grammarNotes": [
          {
            "pattern": "➊ V-ました / V-ませんでした",
            "explanation": "Bentuk lampau kata kerja untuk menceritakan kegiatan yang sudah dilakukan (ました) atau tidak dilakukan (ませんでした).",
            "example": "週末、友だちと 映画を 見に 行きました。(Akhir pekan lalu saya pergi menonton film bersama teman.)"
          },
          {
            "pattern": "➋ 何も V-ませんでした / どこにも V-ませんでした",
            "explanation": "Menyatakan \"tidak melakukan apa-apa\" atau \"tidak pergi ke mana-mana\".",
            "example": "昨日は どこにも 行きませんでした。うちで ゆっくりしました。(Kemarin saya tidak pergi ke mana-mana. Bersantai di rumah.)"
          },
          {
            "pattern": "➌ ナA-でした / イA-かったです",
            "explanation": "Bentuk lampau kata sifat untuk menyatakan kesan: Kata Sifat-Na menjadi ～でした; Kata Sifat-I buang い ganti ～かったです (いい → よかったです).",
            "example": "水族館は とても 楽しかったです。イルカが きれいでした。(Akuariumnya sangat menyenangkan. Lumba-lumbanya indah.)"
          },
          {
            "pattern": "➍ N でした / ➎ N じゃなかったです・ナA-じゃなかったです・イA-くなかったです",
            "explanation": "Bentuk lampau positif dan negatif untuk Kata Benda dan Kata Sifat.",
            "example": "昨日は いい天気でした。あまり 寒くなかったです。(Kemarin cuacanya bagus. Tidak terlalu dingin.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis di Hari Senin",
        "dialogues": [
          {
            "speaker": "Tanaka",
            "text": "アディさん、週末は 何を しましたか？",
            "translation": "Adi-san, akhir pekan kemarin melakukan apa?"
          },
          {
            "speaker": "Adi",
            "text": "新宿へ ゴジラの 映画を 見に 行きました。それから、買い物も しました。",
            "translation": "Saya pergi ke Shinjuku untuk menonton film Godzilla. Setelah itu juga berbelanja."
          },
          {
            "speaker": "Tanaka",
            "text": "そうですか。映画は どうでしたか？",
            "translation": "Begitu ya. Filmnya bagaimana?"
          },
          {
            "speaker": "Adi",
            "text": "とても おもしろかったです！田中さんは？",
            "translation": "Sangat menarik! Kalau Tanaka-san?"
          },
          {
            "speaker": "Tanaka",
            "text": "私は どこにも 行きませんでした。うちで 掃除と 洗濯を しました。",
            "translation": "Saya tidak pergi ke mana-mana. Di rumah bersih-bersih dan mencuci baju."
          }
        ],
        "culturalTips": "Di gedung Toho Cinemas Shinjuku terdapat patung kepala Godzilla raksasa yang ikonik. Jepang juga memiliki banyak akuarium publik kelas dunia (seperti Kaiyukan di Osaka dan Churaumi di Okinawa) serta Manga Kissa (kafe komik & internet 24 jam dengan minuman sepuasnya)."
      }
    ]
  },
  {
    "id": "irodori_bab_18",
    "groupId": "irodori_a1",
    "chapterNumber": 18,
    "topic": "Topik 9: Pada Hari Libur (休みの日に)",
    "title": "Bab 18: Onsen ni Hairitai Desu (温泉に入りたいです)",
    "subtitle": "Saya ingin berendam di onsen • Rencana Liburan, Keinginan & Urutan Cerita",
    "canDo": "Can-do 76–79: Mampu membicarakan rencana liburan panjang (Golden Week), mengungkapkan hal yang ingin dilakukan di Jepang, menceritakan rangkaian kegiatan wisata secara berurutan, dan membaca buku harian perjalanan.",
    "sourceBook": "Buku Utama: 4.2 Daftar Isi Pemula A1 & 7. Daftar Pengecekan Can-do",
    "kanjiItems": [
      {
        "kanji": "温泉・予定・来週",
        "onyomi": "オンセン・ヨテイ・ライシュウ",
        "kunyomi": "ゆ",
        "meaning": "Pemandian Air Panas (温泉), Rencana/Jadwal (予定), Minggu Depan (来週)",
        "compounds": [
          "温泉 (おんせん = onsen)",
          "予定 (よてい = rencana)",
          "来週 (らいしゅう = minggu depan)"
        ]
      },
      {
        "kanji": "会います・入ります・旅行します",
        "onyomi": "カイ・ニュウ・リョコウ",
        "kunyomi": "あいます・はいります",
        "meaning": "Bertemu (会います), Masuk/Berendam (入ります), Bepergian Wisata (旅行します)",
        "compounds": [
          "友だちに会います (bertemu teman)",
          "温泉に入ります (berendam di onsen)",
          "旅行します (りょこうします = berwisata)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Target Can-do Bab 18 (Can-do 76 – 79)",
        "points": [
          {
            "title": "Can-do 76 (1. ゴールデンウィークの予定は？)",
            "desc": "Dapat bertanya dan menceritakan rencana pada masa liburan panjang."
          },
          {
            "title": "Can-do 77 (2. 日本で何がしたい？)",
            "desc": "Dapat membicarakan tempat yang ingin dikunjungi dan hal yang ingin dilakukan di Jepang."
          },
          {
            "title": "Can-do 78 (3. 船に乗りました)",
            "desc": "Dapat menceritakan urutan kegiatan wisata beserta kesannya."
          },
          {
            "title": "Can-do 79 (4. はじめて露天風呂に入りました)",
            "desc": "Dapat membaca catatan harian atau unggahan blog singkat mengenai pengalaman liburan."
          }
        ]
      },
      {
        "title": "1. Kosakata Wisata Jepang & Liburan Panjang",
        "vocabulary": [
          {
            "japanese": "ゴールデンウィーク (GW) / 連休 (れんきゅう)",
            "romaji": "Gooruden wiiku / Renkyuu",
            "meaning": "Golden Week (libur panjang akhir April–awal Mei) / Libur beruntun"
          },
          {
            "japanese": "温泉 (おんせん) / 露天風呂 (ろてんぶろ)",
            "romaji": "Onsen / Rotenburo",
            "meaning": "Pemandian air panas alami / Kolam onsen terbuka di luar ruangan"
          },
          {
            "japanese": "富士山 (ふじさん) / 新幹線 / 船 (ふね)",
            "romaji": "Fujisan / Shinkansen / Fune",
            "meaning": "Gunung Fuji / Kereta cepat Shinkansen / Kapal"
          },
          {
            "japanese": "予定 (よてい) / 旅行 (りょこう)",
            "romaji": "Yotei / Ryokou",
            "meaning": "Rencana / Perjalanan wisata"
          },
          {
            "japanese": "それから / あと / それに / でも",
            "romaji": "Sorekara / Ato / Soreni / Demo",
            "meaning": "Setelah itu / Selain itu / Ditambah lagi / Tetapi"
          }
        ]
      },
      {
        "title": "2. Tata Bahasa & Pola Kalimat Bab 18 (➊ – ➏)",
        "grammarNotes": [
          {
            "pattern": "➊ V(masu)-たいです / N が V-たいです",
            "explanation": "Menyatakan keinginan diri sendiri (\"ingin melakukan V\"). Akhiran ～ます diganti dengan ～たいです.",
            "example": "日本で 温泉に 入りたいです。北海道へ 行きたいです。おいしい カニが 食べたいです。(Di Jepang saya ingin berendam di onsen. Ingin pergi ke Hokkaido.)"
          },
          {
            "pattern": "➋ どこか V-ますか？ / 何を しますか？",
            "explanation": "Menanyakan apakah lawan bicara berencana pergi ke suatu tempat.",
            "example": "連休は どこか 行きますか？ (Saat libur panjang apakah pergi ke suatu tempat?)"
          },
          {
            "pattern": "➌ S1。あと、S2。",
            "explanation": "Kata penghubung \"あと\" digunakan untuk menambahkan rencana atau kegiatan lain.",
            "example": "箱根で 温泉に 入ります。あと、ロープウェイにも 乗りたいです。(Di Hakone akan berendam di onsen. Selain itu, ingin naik kereta gantung juga.)"
          },
          {
            "pattern": "➍ 【tempat】へ 行きます",
            "explanation": "Partikel へ (dibaca \"e\") menekankan arah tujuan kepergian.",
            "example": "来月、京都へ 旅行に 行きます。(Bulan depan pergi berwisata ke Kyoto.)"
          },
          {
            "pattern": "➎ S1。それから、S2。",
            "explanation": "Menghubungkan urutan kejadian secara kronologis (\"Lalu / Setelah itu...\").",
            "example": "横浜で 中華街へ 行きました。それから、船に 乗りました。(Di Yokohama pergi ke Pecinan. Setelah itu naik kapal.)"
          },
          {
            "pattern": "➏ S1。それに、S2。 / S1。でも、S2。",
            "explanation": "それに menambahkan kesan positif/setara (\"Selain itu...\"), sedangkan でも menyatakan pertentangan (\"Tetapi...\").",
            "example": "温泉は 気持ちよかったです。それに、料理も おいしかったです。でも、ちょっと 遠かったです。(Onsennya nyaman. Selain itu masakannya juga enak. Tapi agak jauh.)"
          }
        ]
      },
      {
        "title": "3. Percakapan Praktis: Rencana & Cerita Liburan",
        "dialogues": [
          {
            "speaker": "Sato",
            "text": "リナさん、ゴールデンウィークの 予定は どうですか？どこか 行きますか？",
            "translation": "Rina-san, bagaimana rencana Golden Week? Apakah pergi ke suatu tempat?"
          },
          {
            "speaker": "Rina",
            "text": "はい、友だちと 箱根へ 旅行に 行きます。はじめて 温泉に 入ります。あと、富士山も 見たいです！",
            "translation": "Ya, saya akan berwisata ke Hakone bersama teman. Pertama kalinya masuk onsen. Selain itu saya juga ingin melihat Gunung Fuji!"
          },
          {
            "speaker": "Sato",
            "text": "いいですね！箱根の 露天風呂は とても 気持ちいいですよ。楽しんでくださいね。",
            "translation": "Wah bagus ya! Onsen terbuka di Hakone sangat nyaman lho. Selamat bersenang-senang ya."
          }
        ],
        "culturalTips": "Etika mandi di Onsen Jepang: 1) Lepas seluruh pakaian di ruang ganti (tidak boleh memakai baju renang), 2) Bilas dan cuci tubuh sampai bersih di area pancuran duduk sebelum masuk ke kolam air panas, 3) Jangan mencelupkan handuk maupun rambut panjang ke dalam air kolam."
      }
    ]
  },
  {
    "id": "kanji_unit_1",
    "groupId": "basic_kanji",
    "chapterNumber": 1,
    "topic": "Pelajaran 1 & 2: Piktograf Alam & Manusia (象形文字)",
    "title": "Unit 1: Kanji dari Gambar Alam & Manusia (第1課・第2課)",
    "subtitle": "20 Kanji Dasar: 日月木山川田人口車門 • 火水金土子女学生先私",
    "canDo": "Menguasai 20 Kanji piktograf pertama (Pelajaran 1 & 2), aturan dasar urutan guratan (書き順), nama hari dalam kalender Jepang, serta kosakata dasar pelajar.",
    "videoRef": "Video/Kanji Basic 1-5.mp4 (Pelajaran 1 & 2: Piktograf Alam, Hari & Manusia)",
    "sourceBook": "Basic Kanji Book Vol. 1 (第1課・第2課) & Video/Kanji Basic 1-5.mp4",
    "kanjiItems": [
      {
        "kanji": "日",
        "onyomi": "ニチ・ジツ (nichi / jitsu)",
        "kunyomi": "ひ・-び・-か (hi / -bi / -ka)",
        "meaning": "Matahari / Hari",
        "compounds": [
          "日本 (にほん = Jepang)",
          "日曜日 (にちようび = Minggu)",
          "毎日 (まいにち = setiap hari)",
          "休日 (きゅうじつ = hari libur)"
        ]
      },
      {
        "kanji": "月",
        "onyomi": "ゲツ・ガツ (getsu / gatsu)",
        "kunyomi": "つき (tsuki)",
        "meaning": "Bulan (Moon / Month)",
        "compounds": [
          "月曜日 (げつようび = Senin)",
          "一月 (いちがつ = Januari)",
          "今月 (こんげつ = bulan ini)",
          "月 (つき = bulan di langit)"
        ]
      },
      {
        "kanji": "木",
        "onyomi": "モク・ボク (moku / boku)",
        "kunyomi": "き・こ (ki / ko)",
        "meaning": "Pohon / Kayu",
        "compounds": [
          "木曜日 (もくようび = Kamis)",
          "木 (き = pohon)",
          "木村さん (きむらさん = Tuan Kimura)"
        ]
      },
      {
        "kanji": "山",
        "onyomi": "サン (san)",
        "kunyomi": "やま (yama)",
        "meaning": "Gunung",
        "compounds": [
          "山 (やま = gunung)",
          "富士山 (ふじさん = Gunung Fuji)",
          "火山 (かざん = gunung berapi)"
        ]
      },
      {
        "kanji": "川",
        "onyomi": "セン (sen)",
        "kunyomi": "かわ・-がわ (kawa / -gawa)",
        "meaning": "Sungai",
        "compounds": [
          "川 (かわ = sungai)",
          "小川 (おがわ = sungai kecil)",
          "河川 (かせん = sungai-sungai)"
        ]
      },
      {
        "kanji": "田",
        "onyomi": "デン (den)",
        "kunyomi": "た・-だ (ta / -da)",
        "meaning": "Sawah",
        "compounds": [
          "田んぼ (たんぼ = sawah)",
          "田中さん (たなかさん = Tuan Tanaka)",
          "山田さん (やまださん = Tuan Yamada)",
          "水田 (すいでん = sawah berair)"
        ]
      },
      {
        "kanji": "人",
        "onyomi": "ジン・ニン (jin / nin)",
        "kunyomi": "ひと (hito)",
        "meaning": "Orang / Manusia",
        "compounds": [
          "人 (ひと = orang)",
          "日本人 (にほんじん = orang Jepang)",
          "三人 (さんにん = 3 orang)",
          "大人 (おとな = orang dewasa)"
        ]
      },
      {
        "kanji": "口",
        "onyomi": "コウ・ク (kou / ku)",
        "kunyomi": "くち・-ぐち (kuchi / -guchi)",
        "meaning": "Mulut / Pintu",
        "compounds": [
          "口 (くち = mulut)",
          "入口 (いりぐち = pintu masuk)",
          "出口 (でぐち = pintu keluar)",
          "人口 (じんこう = jumlah penduduk)"
        ]
      },
      {
        "kanji": "車",
        "onyomi": "シャ (sha)",
        "kunyomi": "くるま (kuruma)",
        "meaning": "Mobil / Kendaraan Roda",
        "compounds": [
          "車 (くるま = mobil)",
          "電車 (でんしゃ = kereta listrik)",
          "自動車 (じどうしゃ = mobil)",
          "車いす (くるまいす = kursi roda)"
        ]
      },
      {
        "kanji": "門",
        "onyomi": "モン (mon)",
        "kunyomi": "かど (kado)",
        "meaning": "Gerbang",
        "compounds": [
          "門 (もん = gerbang)",
          "正門 (せいもん = gerbang utama)",
          "専門 (せんもん = jurusan/spesialisasi)"
        ]
      },
      {
        "kanji": "火",
        "onyomi": "カ (ka)",
        "kunyomi": "ひ・-び (hi / -bi)",
        "meaning": "Api",
        "compounds": [
          "火曜日 (かようび = Selasa)",
          "火 (ひ = api)",
          "火事 (かじ = kebakaran)",
          "花火 (はなび = kembang api)"
        ]
      },
      {
        "kanji": "水",
        "onyomi": "スイ (sui)",
        "kunyomi": "みず (mizu)",
        "meaning": "Air",
        "compounds": [
          "水曜日 (すいようび = Rabu)",
          "水 (みず = air)",
          "水道 (すいどう = saluran air PAM)",
          "水泳 (すいえい = renang)"
        ]
      },
      {
        "kanji": "金",
        "onyomi": "キン・コン (kin / kon)",
        "kunyomi": "かね (kane)",
        "meaning": "Emas / Uang / Logam",
        "compounds": [
          "金曜日 (きんようび = Jumat)",
          "お金 (おかね = uang)",
          "料金 (りょうきん = tarif/biaya)"
        ]
      },
      {
        "kanji": "土",
        "onyomi": "ド・ト (do / to)",
        "kunyomi": "つち (tsuchi)",
        "meaning": "Tanah",
        "compounds": [
          "土曜日 (どようび = Sabtu)",
          "土 (つち = tanah)",
          "お土産 (おみやげ = oleh-oleh)",
          "土地 (とち = lahan)"
        ]
      },
      {
        "kanji": "子",
        "onyomi": "シ・ス (shi / su)",
        "kunyomi": "こ (ko)",
        "meaning": "Anak",
        "compounds": [
          "子ども (こども = anak)",
          "女の子 (おんなのこ = anak perempuan)",
          "男の子 (おとこのこ = anak laki-laki)",
          "女子 (じょし = wanita/remaja putri)"
        ]
      },
      {
        "kanji": "女",
        "onyomi": "ジョ・ニョ (jo / nyo)",
        "kunyomi": "おんな・め (onna / me)",
        "meaning": "Perempuan / Wanita",
        "compounds": [
          "女の人 (おんなのひと = wanita)",
          "女性 (じょせい = perempuan)",
          "彼女 (かのじょ = dia perempuan / pacar)"
        ]
      },
      {
        "kanji": "学",
        "onyomi": "ガク (gaku)",
        "kunyomi": "まな(ぶ) (manabu)",
        "meaning": "Belajar / Ilmu",
        "compounds": [
          "学生 (がくせい = pelajar/mahasiswa)",
          "大学 (だいがく = universitas)",
          "学校 (がっこう = sekolah)",
          "留学 (りゅうがく = studi di luar negeri)"
        ]
      },
      {
        "kanji": "生",
        "onyomi": "セイ・ショウ (sei / shou)",
        "kunyomi": "い(きる)・う(まれる)・なま (ikiru / umareru / nama)",
        "meaning": "Hidup / Lahir / Mentah",
        "compounds": [
          "先生 (せんせい = guru/dokter)",
          "学生 (がくせい = mahasiswa)",
          "生活 (せいかつ = kehidupan)",
          "誕生日 (たんじょうび = hari ulang tahun)"
        ]
      },
      {
        "kanji": "先",
        "onyomi": "セン (sen)",
        "kunyomi": "さき (saki)",
        "meaning": "Lebih Dulu / Depan",
        "compounds": [
          "先生 (せんせい = guru)",
          "先週 (せんしゅう = minggu lalu)",
          "先月 (せんげつ = bulan lalu)",
          "お先に (おさきに = duluan)"
        ]
      },
      {
        "kanji": "私",
        "onyomi": "シ (shi)",
        "kunyomi": "わたし・わたくし (watashi / watakushi)",
        "meaning": "Saya / Pribadi",
        "compounds": [
          "私 (わたし = saya)",
          "私立大学 (しりつだいがく = universitas swasta)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Aturan Dasar Urutan Guratan Kanji (書き順の基本法則)",
        "content": "Sesuai pengantar Basic Kanji Book Vol. 1 dan Video Kanji Basic 1-5, menulis Kanji harus mengikuti aturan urutan guratan agar bentuknya seimbang:",
        "points": [
          {
            "title": "1. Dari Atas ke Bawah (上から下へ)",
            "desc": "Guratan bagian atas ditulis terlebih dahulu menuju ke bawah (contoh: 三, 言)."
          },
          {
            "title": "2. Dari Kiri ke Kanan (左から右へ)",
            "desc": "Guratan sisi kiri ditulis terlebih dahulu menuju ke sisi kanan (contoh: 川, 休)."
          },
          {
            "title": "3. Horizontal Dulu, Baru Vertikal (横から縦へ)",
            "desc": "Jika garis mendatar dan tegak bersilangan, tulis garis mendatar dulu baru garis tegak (contoh: 十, 木)."
          },
          {
            "title": "4. Kotak Luar Dulu, Isi Dalamnya, Lalu Tutup Bawahnya",
            "desc": "Untuk Kanji berbentuk kotak (口, 日, 田, 国), tulis sisi kiri dan atas-kanan dulu, isi bagian dalamnya, lalu tutup garis bawah paling akhir."
          }
        ]
      },
      {
        "title": "Bacaan Budaya: Kalender Jepang (日本のカレンダー)",
        "vocabulary": [
          {
            "japanese": "日曜日 (にちようび) — Matahari",
            "romaji": "Nichiyoubi",
            "meaning": "Hari Minggu"
          },
          {
            "japanese": "月曜日 (げつようび) — Bulan",
            "romaji": "Getsuyoubi",
            "meaning": "Hari Senin"
          },
          {
            "japanese": "火曜日 (かようび) — Api (Mars)",
            "romaji": "Kayoubi",
            "meaning": "Hari Selasa"
          },
          {
            "japanese": "水曜日 (すいようび) — Air (Merkurius)",
            "romaji": "Suiyoubi",
            "meaning": "Hari Rabu"
          },
          {
            "japanese": "木曜日 (もくようび) — Kayu (Jupiter)",
            "romaji": "Mokuyoubi",
            "meaning": "Hari Kamis"
          },
          {
            "japanese": "金曜日 (きんようび) — Logam/Emas (Venus)",
            "romaji": "Kinyoubi",
            "meaning": "Hari Jumat"
          },
          {
            "japanese": "土曜日 (どようび) — Tanah (Saturnus)",
            "romaji": "Doyoubi",
            "meaning": "Hari Sabtu"
          },
          {
            "japanese": "祝日 (しゅくじつ) / 祭日 (さいじつ)",
            "romaji": "Shukujitsu / Saijitsu",
            "meaning": "Hari Libur Nasional Jepang"
          }
        ],
        "culturalTips": "Kanji pada Pelajaran 1 dan 2 merupakan \"Shoukeimoji\" (象形文字) atau huruf piktograf yang berasal dari sketsa bentuk benda nyata di alam: 日 (matahari), 月 (bulan sabit), 山 (tiga puncak gunung), 川 (aliran sungai), 田 (petak sawah), dan 木 (batang serta dahan pohon)."
      }
    ]
  },
  {
    "id": "kanji_unit_2",
    "groupId": "basic_kanji",
    "chapterNumber": 2,
    "topic": "Pelajaran 3 & 4: Angka, Bilangan & Simbol Abstrak (指示文字)",
    "title": "Unit 2: Angka, Harga & Simbol Ukuran/Posisi (第3課・第4課)",
    "subtitle": "25 Kanji: 一二三四五六七八九十百千万年円 • 上下中大小本半分力何",
    "canDo": "Menguasai 25 Kanji angka, nominal uang yen, tanggal kalender, serta simbol abstrak ukuran/posisi (Pelajaran 3 & 4), termasuk membaca harga di toko dan petunjuk di stasiun.",
    "videoRef": "Video/Kanji Basic 1-5.mp4 (Pelajaran 3 & 4: Angka, Harga, Waktu & Posisi)",
    "sourceBook": "Basic Kanji Book Vol. 1 (第3課・第4課) & Video/Kanji Basic 1-5.mp4",
    "kanjiItems": [
      {
        "kanji": "一",
        "onyomi": "イチ・イツ (ichi / itsu)",
        "kunyomi": "ひと(つ) (hitotsu)",
        "meaning": "Satu (1)",
        "compounds": [
          "一つ (ひとつ = 1 buah)",
          "一人 (ひとり = 1 orang)",
          "一日 (ついたち = tanggal 1 / いちにち = 1 hari)"
        ]
      },
      {
        "kanji": "二",
        "onyomi": "ニ (ni)",
        "kunyomi": "ふた(つ) (futatsu)",
        "meaning": "Dua (2)",
        "compounds": [
          "二つ (ふたつ = 2 buah)",
          "二人 (ふたり = 2 orang)",
          "二日 (ふつか = tanggal 2)"
        ]
      },
      {
        "kanji": "三",
        "onyomi": "サン (san)",
        "kunyomi": "みっ(つ) (mittsu)",
        "meaning": "Tiga (3)",
        "compounds": [
          "三つ (みっつ = 3 buah)",
          "三人 (さんにん = 3 orang)",
          "三日 (みっか = tanggal 3)",
          "三百 (さんびゃく = 300)"
        ]
      },
      {
        "kanji": "四",
        "onyomi": "シ (shi)",
        "kunyomi": "よっ(つ)・よん・よ (yottsu / yon / yo)",
        "meaning": "Empat (4)",
        "compounds": [
          "四つ (よっつ = 4 buah)",
          "四人 (よにん = 4 orang)",
          "四日 (よっか = tanggal 4)",
          "四月 (しがつ = April)"
        ]
      },
      {
        "kanji": "五",
        "onyomi": "ゴ (go)",
        "kunyomi": "いつ(つ) (itsutsu)",
        "meaning": "Lima (5)",
        "compounds": [
          "五つ (いつつ = 5 buah)",
          "五日 (いつか = tanggal 5)",
          "五百円 (ごひゃくえん = 500 yen)"
        ]
      },
      {
        "kanji": "六",
        "onyomi": "ロク (roku)",
        "kunyomi": "むっ(つ)・むい (muttsu / mui)",
        "meaning": "Enam (6)",
        "compounds": [
          "六つ (むっつ = 6 buah)",
          "六日 (むいか = tanggal 6)",
          "六百 (ろっぴゃく = 600)"
        ]
      },
      {
        "kanji": "七",
        "onyomi": "シチ (shichi)",
        "kunyomi": "なな(つ)・なの (nanatsu / nano)",
        "meaning": "Tujuh (7)",
        "compounds": [
          "七つ (ななつ = 7 buah)",
          "七日 (なのか = tanggal 7)",
          "七月 (しちがつ = Juli)"
        ]
      },
      {
        "kanji": "八",
        "onyomi": "ハチ (hachi)",
        "kunyomi": "やっ(つ)・よう (yattsu / you)",
        "meaning": "Delapan (8)",
        "compounds": [
          "八つ (やっつ = 8 buah)",
          "八日 (ようか = tanggal 8)",
          "八百 (はっぴゃく = 800)",
          "八百屋 (やおや = toko sayur)"
        ]
      },
      {
        "kanji": "九",
        "onyomi": "キュウ・ク (kyuu / ku)",
        "kunyomi": "ここの(つ) (kokonotsu)",
        "meaning": "Sembilan (9)",
        "compounds": [
          "九つ (ここのつ = 9 buah)",
          "九日 (ここのか = tanggal 9)",
          "九月 (くがつ = September)"
        ]
      },
      {
        "kanji": "十",
        "onyomi": "ジュウ・ジッ (juu / jipp-)",
        "kunyomi": "とお・と (too / to)",
        "meaning": "Sepuluh (10)",
        "compounds": [
          "十 (とお = 10 buah)",
          "十日 (とおか = tanggal 10)",
          "二十歳 (はたち = 20 tahun)",
          "二十日 (はつか = tanggal 20)"
        ]
      },
      {
        "kanji": "百",
        "onyomi": "ヒャク・ビャク・ピャク",
        "kunyomi": "-",
        "meaning": "Seratus (100)",
        "compounds": [
          "百円 (ひゃくえん = 100 yen)",
          "三百 (さんびゃく = 300)",
          "六百 (ろっぴゃく = 600)",
          "八百 (はっぴゃく = 800)"
        ]
      },
      {
        "kanji": "千",
        "onyomi": "セン・ゼン (sen / zen)",
        "kunyomi": "ち (chi)",
        "meaning": "Seribu (1.000)",
        "compounds": [
          "千円 (せんえん = 1.000 yen)",
          "三千 (さんぜん = 3.000)",
          "八千 (はっせん = 8.000)"
        ]
      },
      {
        "kanji": "万",
        "onyomi": "マン・バン (man / ban)",
        "kunyomi": "-",
        "meaning": "Sepuluh Ribu (10.000)",
        "compounds": [
          "一万円 (いちまんえん = 10.000 yen)",
          "十万 (じゅうまん = 100.000)",
          "万国 (ばんこく = seluruh negara)"
        ]
      },
      {
        "kanji": "円",
        "onyomi": "エン (en)",
        "kunyomi": "まる(い) (marui)",
        "meaning": "Yen (Mata Uang) / Bulat",
        "compounds": [
          "百円 (ひゃくえん = 100 yen)",
          "円高 (えんだか = penguatan kurs Yen)"
        ]
      },
      {
        "kanji": "年",
        "onyomi": "ネン (nen)",
        "kunyomi": "とし (toshi)",
        "meaning": "Tahun",
        "compounds": [
          "今年 (ことし = tahun ini)",
          "来年 (らいねん = tahun depan)",
          "去年 (きょねん = tahun lalu)",
          "半年 (はんとし = setengah tahun)"
        ]
      },
      {
        "kanji": "上",
        "onyomi": "ジョウ (jou)",
        "kunyomi": "うえ・あ(がる)・のぼ(る)",
        "meaning": "Atas / Naik",
        "compounds": [
          "上 (うえ = atas)",
          "上手 (じょうず = pandai/mahir)",
          "上着 (うわぎ = jaket/baju atasan)"
        ]
      },
      {
        "kanji": "下",
        "onyomi": "カ・ゲ (ka / ge)",
        "kunyomi": "した・さ(がる)・くだ(さい)",
        "meaning": "Bawah / Turun",
        "compounds": [
          "下 (した = bawah)",
          "下手 (へた = kurang mahir)",
          "地下鉄 (ちかてつ = kereta bawah tanah)",
          "下さい (ください = tolong berikan)"
        ]
      },
      {
        "kanji": "中",
        "onyomi": "チュウ・ジュウ (chuu / juu)",
        "kunyomi": "なか (naka)",
        "meaning": "Tengah / Dalam",
        "compounds": [
          "中 (なか = dalam)",
          "中学校 (ちゅうがっこう = SMP)",
          "一日中 (いちにちじゅう = sepanjang hari)",
          "中心 (ちゅうしん = pusat)"
        ]
      },
      {
        "kanji": "大",
        "onyomi": "ダイ・タイ (dai / tai)",
        "kunyomi": "おお(きい) (ookii)",
        "meaning": "Besar",
        "compounds": [
          "大きい (おおきい = besar)",
          "大学 (だいがく = universitas)",
          "大人 (おとな = dewasa)",
          "大切 (たいせつ = penting)"
        ]
      },
      {
        "kanji": "小",
        "onyomi": "ショウ (shou)",
        "kunyomi": "ちい(さい)・こ・お",
        "meaning": "Kecil",
        "compounds": [
          "小さい (ちいさい = kecil)",
          "小学校 (しょうがっこう = SD)",
          "小川 (おがわ = sungai kecil)"
        ]
      },
      {
        "kanji": "本",
        "onyomi": "ホン (hon)",
        "kunyomi": "もと (moto)",
        "meaning": "Buku / Asal / Satuan Benda Panjang",
        "compounds": [
          "本 (ほん = buku)",
          "日本 (にほん = Jepang)",
          "山本さん (やまもとさん = Tuan Yamamoto)",
          "三本 (さんぼん = 3 batang)"
        ]
      },
      {
        "kanji": "半",
        "onyomi": "ハン (han)",
        "kunyomi": "なか(ば) (nakaba)",
        "meaning": "Setengah",
        "compounds": [
          "半分 (はんぶん = separuh)",
          "九時半 (くじはん = pukul 09:30)",
          "半年 (はんとし = setengah tahun)"
        ]
      },
      {
        "kanji": "分",
        "onyomi": "ブン・フン・プン",
        "kunyomi": "わ(かる)・わ(ける)",
        "meaning": "Menit / Bagian / Mengerti",
        "compounds": [
          "五分 (ごふん = 5 menit)",
          "十分 (じゅっぷん = 10 menit / じゅうぶん = cukup)",
          "分かる (わかる = mengerti)"
        ]
      },
      {
        "kanji": "力",
        "onyomi": "リョク・リキ (ryoku / riki)",
        "kunyomi": "ちから (chikara)",
        "meaning": "Tenaga / Kekuatan",
        "compounds": [
          "力 (ちから = tenaga)",
          "体力 (たいりょく = daya tahan fisik)",
          "協力 (きょうりょく = kerja sama)"
        ]
      },
      {
        "kanji": "何",
        "onyomi": "カ (ka)",
        "kunyomi": "なに・なん (nani / nan)",
        "meaning": "Apa / Berapa",
        "compounds": [
          "何 (なに = apa)",
          "何人 (なんにん = berapa orang)",
          "何時 (なんじ = jam berapa)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Bacaan Praktis: Toko Sayur (八百屋), Kedai Soba & Kanji di Stasiun (駅でみる漢字)",
        "content": "Di dalam Basic Kanji Book Pelajaran 3 & 4, Anda dilatih membaca papan harga di toko tradisional serta rambu di stasiun kereta:",
        "vocabulary": [
          {
            "japanese": "八百屋 (やおや)",
            "romaji": "Yaoya",
            "meaning": "Toko sayur dan buah (secara harfiah: toko 800 macam barang)"
          },
          {
            "japanese": "そば屋 (そばや) — かけそば 四百五十円",
            "romaji": "Sobaya — Kake-soba yonhyaku-gojuu-en",
            "meaning": "Kedai Soba — Kake-soba 450 Yen"
          },
          {
            "japanese": "改札口 (かいさつぐち) / 精算所 (せいさんじょ)",
            "romaji": "Kaisatsuguchi / Seisanjo",
            "meaning": "Pintu pemeriksaan tiket / Tempat penyesuaian tarif tiket"
          },
          {
            "japanese": "上り (のぼり) ↔ 下り (くだり)",
            "romaji": "Nobori ↔ Kudari",
            "meaning": "Jalur kereta menuju pusat kota (Tokyo) ↔ Jalur kereta menjauhi pusat kota"
          },
          {
            "japanese": "一日乗車券 (いちにちじょうしゃけん)",
            "romaji": "Ichinichi joushaken",
            "meaning": "Tiket terusan 1 hari penuh"
          }
        ],
        "culturalTips": "Perhatikan perubahan bunyi (Rendaku) saat menghitung ratusan dan ribuan: 300 = Sanbyaku (三百), 600 = Roppyaku (六百), 800 = Happyaku (八百), 3.000 = Sanzen (三千), 8.000 = Hassen (八千). Sementara untuk 10.000 tidak disebut \"juusen\", melainkan wajib \"Ichiman\" (一万)."
      }
    ]
  },
  {
    "id": "kanji_unit_3",
    "groupId": "basic_kanji",
    "chapterNumber": 3,
    "topic": "Pelajaran 5, 6 & 7: Gabungan Makna, Anggota Tubuh & Hewan",
    "title": "Unit 3: Ideograf Gabungan, Tubuh & Alam (第5課・第6課・第7課)",
    "subtitle": "30 Kanji: 明休体好男林森間畑岩 • 目耳手足雨竹米貝石糸 • 花茶肉文字物牛馬鳥魚",
    "canDo": "Menguasai 30 Kanji gabungan makna (会意文字), anggota tubuh, marga Jepang pada kartu nama (名刺), serta kanji flora dan fauna (Pelajaran 5, 6 & 7).",
    "videoRef": "Video/Kanji Basic 1-5.mp4 (Pelajaran 5: Kanji Gabungan Makna / 会意文字)",
    "sourceBook": "Basic Kanji Book Vol. 1 (第5課・第6課・第7課) & Video/Kanji Basic 1-5.mp4",
    "kanjiItems": [
      {
        "kanji": "明",
        "onyomi": "メイ・ミョウ (mei / myou)",
        "kunyomi": "あか(るい)・あ(ける)",
        "meaning": "Terang / Jelas (Matahari 日 + Bulan 月)",
        "compounds": [
          "明るい (あかるい = terang)",
          "明日 (あした／みょうにち = besok)",
          "説明 (せつめい = penjelasan)"
        ]
      },
      {
        "kanji": "休",
        "onyomi": "キュウ (kyuu)",
        "kunyomi": "やす(む)・やす(み)",
        "meaning": "Istirahat / Libur (Orang 亻 + Pohon 木)",
        "compounds": [
          "休む (やすむ = beristirahat)",
          "昼休み (ひるやすみ = istirahat siang)",
          "休日 (きゅうじつ = hari libur)"
        ]
      },
      {
        "kanji": "体",
        "onyomi": "タイ・テイ (tai / tei)",
        "kunyomi": "からだ (karada)",
        "meaning": "Tubuh / Badan (Orang 亻 + Pokok 本)",
        "compounds": [
          "体 (からだ = tubuh)",
          "体力 (たいりょく = stamina fisik)",
          "体育館 (たいいくかん = gedung olahraga)"
        ]
      },
      {
        "kanji": "好",
        "onyomi": "コウ (kou)",
        "kunyomi": "す(き)・この(む)",
        "meaning": "Suka (Ibu 女 + Anak 子)",
        "compounds": [
          "好き (すき = suka)",
          "大好き (だいすき = sangat suka)",
          "好物 (こうぶつ = makanan kesukaan)"
        ]
      },
      {
        "kanji": "男",
        "onyomi": "ダン・ナン (dan / nan)",
        "kunyomi": "おとこ (otoko)",
        "meaning": "Laki-laki (Tenaga 力 di Sawah 田)",
        "compounds": [
          "男の人 (おとこのひと = pria)",
          "男性 (だんせい = laki-laki)",
          "長男 (ちょうなん = putra sulung)"
        ]
      },
      {
        "kanji": "林",
        "onyomi": "リン (rin)",
        "kunyomi": "はやし (hayashi)",
        "meaning": "Hutan Kecil / Pepohonan (2 Pohon 木)",
        "compounds": [
          "林 (はやし = hutan kecil / marga Hayashi)",
          "森林 (しんりん = hutan belantara)"
        ]
      },
      {
        "kanji": "森",
        "onyomi": "シン (shin)",
        "kunyomi": "もり (mori)",
        "meaning": "Hutan Lebat (3 Pohon 木)",
        "compounds": [
          "森 (もり = hutan lebat / marga Mori)",
          "青森 (あおもり = Prefektur Aomori)"
        ]
      },
      {
        "kanji": "間",
        "onyomi": "カン・ケン (kan / ken)",
        "kunyomi": "あいだ・ま (aida / ma)",
        "meaning": "Antara / Ruang / Waktu (Cahaya 日 di celah Gerbang 門)",
        "compounds": [
          "時間 (じかん = waktu)",
          "間 (あいだ = di antara)",
          "人間 (にんげん = manusia)",
          "一週間 (いっしゅうかん = 1 minggu)"
        ]
      },
      {
        "kanji": "畑",
        "onyomi": "-",
        "kunyomi": "はたけ・-ばたけ (hatake)",
        "meaning": "Ladang Kering (Api 火 + Sawah 田 — Kokuji Jepang)",
        "compounds": [
          "畑 (はたけ = ladang sayur)",
          "花畑 (はなばたけ = kebun bunga)"
        ]
      },
      {
        "kanji": "岩",
        "onyomi": "ガン (gan)",
        "kunyomi": "いわ (iwa)",
        "meaning": "Batu Karang / Tebing (Gunung 山 + Batu 石)",
        "compounds": [
          "岩 (いわ = batu besar/karang)",
          "岩石 (がんせき = batuan)"
        ]
      },
      {
        "kanji": "目",
        "onyomi": "モク (moku)",
        "kunyomi": "め (me)",
        "meaning": "Mata",
        "compounds": [
          "目 (め = mata)",
          "目薬 (めぐすり = obat tetes mata)",
          "目的 (もくてき = tujuan)"
        ]
      },
      {
        "kanji": "耳",
        "onyomi": "ジ (ji)",
        "kunyomi": "みみ (mimi)",
        "meaning": "Telinga",
        "compounds": [
          "耳 (みみ = telinga)",
          "耳鼻科 (じびか = poli THT)"
        ]
      },
      {
        "kanji": "手",
        "onyomi": "シュ (shu)",
        "kunyomi": "て (te)",
        "meaning": "Tangan",
        "compounds": [
          "手 (て = tangan)",
          "手紙 (てがみ = surat)",
          "上手 (じょうず = mahir)",
          "歌手 (かしゅ = penyanyi)"
        ]
      },
      {
        "kanji": "足",
        "onyomi": "ソク (soku)",
        "kunyomi": "あし・た(りる) (ashi / tariru)",
        "meaning": "Kaki / Cukup",
        "compounds": [
          "足 (あし = kaki)",
          "二足 (にそく = 2 pasang sepatu)",
          "足りる (たりる = cukup)"
        ]
      },
      {
        "kanji": "雨",
        "onyomi": "ウ (u)",
        "kunyomi": "あめ・あま- (ame / ama-)",
        "meaning": "Hujan",
        "compounds": [
          "雨 (あめ = hujan)",
          "大雨 (おおあめ = hujan lebat)",
          "雨具 (あまぐ = jas hujan)"
        ]
      },
      {
        "kanji": "竹",
        "onyomi": "チク (chiku)",
        "kunyomi": "たけ (take)",
        "meaning": "Bambu",
        "compounds": [
          "竹 (たけ = bambu)",
          "竹の子 (たけのこ = rebung bambu)"
        ]
      },
      {
        "kanji": "米",
        "onyomi": "ベイ・マイ (bei / mai)",
        "kunyomi": "こめ (kome)",
        "meaning": "Beras / Amerika",
        "compounds": [
          "お米 (おこめ = beras)",
          "米国 (べいこく = Amerika Serikat)",
          "白米 (はくまい = beras putih)"
        ]
      },
      {
        "kanji": "貝",
        "onyomi": "バイ (bai)",
        "kunyomi": "かい (kai)",
        "meaning": "Kerang",
        "compounds": [
          "貝 (かい = kerang)",
          "貝殻 (かいがら = cangkang kerang)"
        ]
      },
      {
        "kanji": "石",
        "onyomi": "セキ・シャク (seki / shaku)",
        "kunyomi": "いし (ishi)",
        "meaning": "Batu",
        "compounds": [
          "石 (いし = batu)",
          "石油 (せきゆ = minyak bumi)",
          "宝石 (ほうせき = batu permata)"
        ]
      },
      {
        "kanji": "糸",
        "onyomi": "シ (shi)",
        "kunyomi": "いと (ito)",
        "meaning": "Benang",
        "compounds": [
          "糸 (いと = benang)",
          "毛糸 (けいと = benang wol)"
        ]
      },
      {
        "kanji": "花",
        "onyomi": "カ (ka)",
        "kunyomi": "はな (hana)",
        "meaning": "Bunga",
        "compounds": [
          "花 (はな = bunga)",
          "花見 (はなみ = menikmati bunga sakura)",
          "花火 (はなび = kembang api)",
          "生け花 (いけばな = seni merangkai bunga)"
        ]
      },
      {
        "kanji": "茶",
        "onyomi": "チャ・サ (cha / sa)",
        "kunyomi": "-",
        "meaning": "Teh",
        "compounds": [
          "お茶 (おちゃ = teh hijau)",
          "紅茶 (こうちゃ = teh hitam)",
          "茶色 (ちゃいろ = warna cokelat)",
          "喫茶店 (きっさてん = kedai kopi)"
        ]
      },
      {
        "kanji": "肉",
        "onyomi": "ニク (niku)",
        "kunyomi": "-",
        "meaning": "Daging",
        "compounds": [
          "肉 (にく = daging)",
          "牛肉 (ぎゅうにく = daging sapi)",
          "豚肉 (ぶたにく = daging babi)",
          "鶏肉 (とりにく = daging ayam)"
        ]
      },
      {
        "kanji": "文",
        "onyomi": "ブン・モン (bun / mon)",
        "kunyomi": "ふみ (fumi)",
        "meaning": "Kalimat / Sastra / Budaya",
        "compounds": [
          "作文 (さくぶん = karangan/esai)",
          "文化 (ぶんか = budaya)",
          "文学 (ぶんがく = sastra)"
        ]
      },
      {
        "kanji": "字",
        "onyomi": "ジ (ji)",
        "kunyomi": "あざ (aza)",
        "meaning": "Huruf / Karakter",
        "compounds": [
          "漢字 (かんじ = huruf Kanji)",
          "文字 (もじ = huruf/aksara)",
          "ローマ字 (ろーまじ = huruf Romaji)",
          "名字 (みょうじ = nama marga)"
        ]
      },
      {
        "kanji": "物",
        "onyomi": "ブツ・モツ (butsu / motsu)",
        "kunyomi": "もの (mono)",
        "meaning": "Benda / Barang",
        "compounds": [
          "食べ物 (たべもの = makanan)",
          "飲み物 (のみもの = minuman)",
          "買い物 (かいもの = belanja)",
          "荷物 (にもつ = barang bawaan)"
        ]
      },
      {
        "kanji": "牛",
        "onyomi": "ギュウ (gyuu)",
        "kunyomi": "うし (ushi)",
        "meaning": "Sapi",
        "compounds": [
          "牛 (うし = sapi)",
          "牛肉 (ぎゅうにく = daging sapi)",
          "牛乳 (ぎゅうにゅう = susu sapi)"
        ]
      },
      {
        "kanji": "馬",
        "onyomi": "バ (ba)",
        "kunyomi": "うま (uma)",
        "meaning": "Kuda",
        "compounds": [
          "馬 (うま = kuda)",
          "馬車 (ばしゃ = kereta kuda)"
        ]
      },
      {
        "kanji": "鳥",
        "onyomi": "チョウ (chou)",
        "kunyomi": "とり (tori)",
        "meaning": "Burung / Unggas",
        "compounds": [
          "鳥 (とり = burung)",
          "焼き鳥 (やきとり = sate ayam Jepang)",
          "白鳥 (はくちょう = angsa)"
        ]
      },
      {
        "kanji": "魚",
        "onyomi": "ギョ (gyo)",
        "kunyomi": "さかな・うお (sakana / uo)",
        "meaning": "Ikan",
        "compounds": [
          "魚 (さかな = ikan)",
          "魚屋 (さかなや = toko ikan)",
          "金魚 (きんぎょ = ikan mas koki)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Konsep Kanji Gabungan Makna (会意文字 / Kaii-moji)",
        "content": "Pada Pelajaran 5 (dan Video Kanji Basic 1-5), dua atau lebih kanji dasar digabungkan untuk membentuk makna baru yang logis:",
        "points": [
          {
            "title": "日 (Matahari) + 月 (Bulan) = 明 (Terang)",
            "desc": "Cahaya matahari dan bulan bersatu menciptakan suasana terang (あかるい)."
          },
          {
            "title": "亻 (Orang) + 木 (Pohon) = 休 (Istirahat)",
            "desc": "Seseorang yang bersandar di bawah pohon untuk beristirahat (やすむ)."
          },
          {
            "title": "女 (Perempuan/Ibu) + 子 (Anak) = 好 (Suka / Kasih Sayang)",
            "desc": "Ibu yang memeluk anaknya melambangkan rasa suka dan kasih sayang (すき)."
          },
          {
            "title": "木 (1 Pohon) → 林 (2 Pohon = Hutan Kecil) → 森 (3 Pohon = Hutan Lebat)",
            "desc": "Semakin banyak pohonnya, semakin lebat hutannya."
          }
        ]
      },
      {
        "title": "Bacaan Budaya: Nama Marga Jepang pada Kartu Nama (名刺 / Meishi)",
        "vocabulary": [
          {
            "japanese": "田中 (たなか) / 山田 (やまだ) / 山本 (やまもと)",
            "romaji": "Tanaka / Yamada / Yamamoto",
            "meaning": "Marga Tanaka / Yamada / Yamamoto"
          },
          {
            "japanese": "木村 (きむら) / 林 (はやし) / 森 (もり)",
            "romaji": "Kimura / Hayashi / Mori",
            "meaning": "Marga Kimura / Hayashi / Mori"
          },
          {
            "japanese": "石田 (いしだ) / 竹中 (たけなか) / 小川 (おがわ)",
            "romaji": "Ishida / Takenaka / Ogawa",
            "meaning": "Marga Ishida / Takenaka / Ogawa"
          }
        ],
        "culturalTips": "Sebagian besar nama marga orang Jepang (名字 / Myouji) berasal dari lanskap alam dan pertanian seperti 山 (gunung), 川 (sungai), 田 (sawah), 木 (pohon), 林 (hutan), 石 (batu), dan 竹 (bambu). Menguasai Kanji Pelajaran 1–7 membuat Anda langsung bisa membaca puluhan marga Jepang pada kartu nama (Meishi)!"
      }
    ]
  },
  {
    "id": "kanji_unit_4",
    "groupId": "basic_kanji",
    "chapterNumber": 4,
    "topic": "Pelajaran 8, 9 & 10: Kata Sifat-I, Kata Kerja & Waktu",
    "title": "Unit 4: Kata Sifat, Kata Kerja Dasar & Waktu (第8課・第9課・第10課)",
    "subtitle": "34 Kanji: 新古長短高安低暗多少 • 行来帰食飲見聞読書話買教 • 朝昼夜晩夕方午前後毎週曜",
    "canDo": "Menguasai 34 Kanji kata sifat berpasangan (antonim), kata kerja aktivitas harian, serta keterangan waktu lengkap (Pelajaran 8, 9 & 10).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第8課・第9課・第10課)",
    "kanjiItems": [
      {
        "kanji": "新",
        "onyomi": "シン (shin)",
        "kunyomi": "あたら(しい)・あら(た)",
        "meaning": "Baru",
        "compounds": [
          "新しい (あたらしい = baru)",
          "新聞 (しんぶん = koran)",
          "新幹線 (しんかんせん = kereta cepat Shinkansen)",
          "新年 (しんねん = tahun baru)"
        ]
      },
      {
        "kanji": "古",
        "onyomi": "コ (ko)",
        "kunyomi": "ふる(い) (furui)",
        "meaning": "Lama / Tua / Kuno",
        "compounds": [
          "古い (ふるい = lama/kuno)",
          "古本 (ふるほん = buku bekas)",
          "中古車 (ちゅうこしゃ = mobil bekas)"
        ]
      },
      {
        "kanji": "長",
        "onyomi": "チョウ (chou)",
        "kunyomi": "なが(い) (nagai)",
        "meaning": "Panjang / Ketua",
        "compounds": [
          "長い (ながい = panjang)",
          "社長 (しゃちょう = direktur utama)",
          "校長 (こうちょう = kepala sekolah)",
          "施設長 (しせつちょう = kepala fasilitas)"
        ]
      },
      {
        "kanji": "短",
        "onyomi": "タン (tan)",
        "kunyomi": "みじか(い) (mijikai)",
        "meaning": "Pendek / Singkat",
        "compounds": [
          "短い (みじかい = pendek)",
          "短大 (たんだい = akademi/D3)",
          "短所 (たんしょ = kekurangan/kelemahan)"
        ]
      },
      {
        "kanji": "高",
        "onyomi": "コウ (kou)",
        "kunyomi": "たか(い) (takai)",
        "meaning": "Tinggi / Mahal",
        "compounds": [
          "高い (たかい = tinggi/mahal)",
          "高校 (こうこう = SMA)",
          "高齢者 (こうれいしゃ = lansia)",
          "高血圧 (こうけつあつ = tekanan darah tinggi)"
        ]
      },
      {
        "kanji": "安",
        "onyomi": "アン (an)",
        "kunyomi": "やす(い) (yasui)",
        "meaning": "Murah / Aman / Tenang",
        "compounds": [
          "安い (やすい = murah)",
          "安心 (あんしん = lega/tenang)",
          "安全 (あんぜん = aman/keselamatan)"
        ]
      },
      {
        "kanji": "低",
        "onyomi": "テイ (tei)",
        "kunyomi": "ひく(い) (hikui)",
        "meaning": "Rendah",
        "compounds": [
          "低い (ひくい = rendah)",
          "最低 (さいてい = paling rendah/minimal)",
          "低血圧 (ていけつあつ = darah rendah)"
        ]
      },
      {
        "kanji": "暗",
        "onyomi": "アン (an)",
        "kunyomi": "くら(い) (kurai)",
        "meaning": "Gelap",
        "compounds": [
          "暗い (くらい = gelap)",
          "暗室 (あんしつ = kamar gelap)"
        ]
      },
      {
        "kanji": "多",
        "onyomi": "タ (ta)",
        "kunyomi": "おお(い) (ooi)",
        "meaning": "Banyak",
        "compounds": [
          "多い (おおい = banyak)",
          "多数 (たすう = mayoritas/jumlah banyak)",
          "多文化 (たぶんか = multikultural)"
        ]
      },
      {
        "kanji": "少",
        "onyomi": "ショウ (shou)",
        "kunyomi": "すく(ない)・すこ(し)",
        "meaning": "Sedikit",
        "compounds": [
          "少ない (すくない = sedikit)",
          "少し (すこし = sedikit)",
          "少年 (しょうねん = remaja laki-laki)"
        ]
      },
      {
        "kanji": "行",
        "onyomi": "コウ・ギョウ (kou / gyou)",
        "kunyomi": "い(く)・ゆ(く)・おこな(う)",
        "meaning": "Pergi / Melakukan / Baris",
        "compounds": [
          "行く (いく = pergi)",
          "旅行 (りょこう = wisata)",
          "銀行 (ぎんこう = bank)",
          "三行目 (さんぎょうめ = baris ke-3)"
        ]
      },
      {
        "kanji": "来",
        "onyomi": "ライ (rai)",
        "kunyomi": "く(る)・き(ます)",
        "meaning": "Datang / Yang Akan Datang",
        "compounds": [
          "来る (くる = datang)",
          "来週 (らいしゅう = minggu depan)",
          "来月 (らいげつ = bulan depan)",
          "将来 (しょうらい = masa depan)"
        ]
      },
      {
        "kanji": "帰",
        "onyomi": "キ (ki)",
        "kunyomi": "かえ(る) (kaeru)",
        "meaning": "Pulang / Kembali",
        "compounds": [
          "帰る (かえる = pulang)",
          "帰国 (きこく = pulang ke tanah air)",
          "日帰り (ひがえり = pulang pergi sehari)"
        ]
      },
      {
        "kanji": "食",
        "onyomi": "ショク (shoku)",
        "kunyomi": "た(べる) (taberu)",
        "meaning": "Makan",
        "compounds": [
          "食べる (たべる = makan)",
          "食事 (しょくじ = makan/hidangan)",
          "食堂 (しょくどう = kantin/ruang makan)",
          "外食 (がいしょく = makan di luar)"
        ]
      },
      {
        "kanji": "飲",
        "onyomi": "イン (in)",
        "kunyomi": "の(む) (nomu)",
        "meaning": "Minum",
        "compounds": [
          "飲む (のむ = minum)",
          "飲み物 (のみもの = minuman)",
          "飲食店 (いんしょくてん = tempat makan)"
        ]
      },
      {
        "kanji": "見",
        "onyomi": "ケン (ken)",
        "kunyomi": "み(る)・み(える)・み(せる)",
        "meaning": "Melihat / Memperlihatkan",
        "compounds": [
          "見る (みる = melihat)",
          "見せる (みせる = memperlihatkan)",
          "見学 (けんがく = kunjungan observasi)",
          "意見 (いけん = pendapat)"
        ]
      },
      {
        "kanji": "聞",
        "onyomi": "ブン・モン (bun / mon)",
        "kunyomi": "き(く)・き(こえる)",
        "meaning": "Mendengar / Bertanya",
        "compounds": [
          "聞く (きく = mendengar/bertanya)",
          "新聞 (しんぶん = surat kabar)"
        ]
      },
      {
        "kanji": "読",
        "onyomi": "ドク (doku)",
        "kunyomi": "よ(む) (yomu)",
        "meaning": "Membaca",
        "compounds": [
          "読む (よむ = membaca)",
          "読書 (どくしょ = membaca buku)"
        ]
      },
      {
        "kanji": "書",
        "onyomi": "ショ (sho)",
        "kunyomi": "か(く) (kaku)",
        "meaning": "Menulis / Buku",
        "compounds": [
          "書く (かく = menulis)",
          "辞書 (じしょ = kamus)",
          "図書館 (としょかん = perpustakaan)",
          "書類 (しょるい = dokumen)"
        ]
      },
      {
        "kanji": "話",
        "onyomi": "ワ (wa)",
        "kunyomi": "はな(す)・はなし (hanasu / hanashi)",
        "meaning": "Berbicara / Cerita",
        "compounds": [
          "話す (はなす = berbicara)",
          "話 (はなし = cerita/pembicaraan)",
          "電話 (でんわ = telepon)",
          "会話 (かいわ = percakapan)"
        ]
      },
      {
        "kanji": "買",
        "onyomi": "バイ (bai)",
        "kunyomi": "か(う) (kau)",
        "meaning": "Membeli",
        "compounds": [
          "買う (かう = membeli)",
          "買い物 (かいもの = berbelanja)",
          "売買 (ばいばい = jual beli)"
        ]
      },
      {
        "kanji": "教",
        "onyomi": "キョウ (kyou)",
        "kunyomi": "おし(える)・おそ(わる)",
        "meaning": "Mengajar / Memberitahu",
        "compounds": [
          "教える (おしえる = mengajar/memberitahu)",
          "教室 (きょうしつ = ruang kelas)",
          "教会 (きょうかい = gereja)",
          "教科書 (きょうかしょ = buku paket)"
        ]
      },
      {
        "kanji": "朝",
        "onyomi": "チョウ (chou)",
        "kunyomi": "あさ (asa)",
        "meaning": "Pagi",
        "compounds": [
          "朝 (あさ = pagi)",
          "朝ご飯 (あさごはん = sarapan)",
          "朝食 (ちょうしょく = sarapan)",
          "今朝 (けさ = tadi pagi)"
        ]
      },
      {
        "kanji": "昼",
        "onyomi": "チュウ (chuu)",
        "kunyomi": "ひる (hiru)",
        "meaning": "Siang",
        "compounds": [
          "昼 (ひる = siang)",
          "昼休み (ひるやすみ = istirahat siang)",
          "昼食 (ちゅうしょく = makan siang)"
        ]
      },
      {
        "kanji": "夜",
        "onyomi": "ヤ (ya)",
        "kunyomi": "よる・よ (yoru / yo)",
        "meaning": "Malam",
        "compounds": [
          "夜 (よる = malam)",
          "今夜 (こんや = malam ini)",
          "夜勤 (やきん = shift malam)"
        ]
      },
      {
        "kanji": "晩",
        "onyomi": "バン (ban)",
        "kunyomi": "-",
        "meaning": "Malam / Petang",
        "compounds": [
          "晩ご飯 (ばんごはん = makan malam)",
          "今晩 (こんばん = malam ini)",
          "毎晩 (まいばん = setiap malam)"
        ]
      },
      {
        "kanji": "夕",
        "onyomi": "セキ (seki)",
        "kunyomi": "ゆう (yuu)",
        "meaning": "Sore / Senja",
        "compounds": [
          "夕方 (ゆうがた = sore hari)",
          "夕食 (ゆうしょく = makan malam)"
        ]
      },
      {
        "kanji": "方",
        "onyomi": "ホウ (hou)",
        "kunyomi": "かた・-がた (kata / -gata)",
        "meaning": "Arah / Cara / Orang (Sopan)",
        "compounds": [
          "夕方 (ゆうがた = sore hari)",
          "書き方 (かきかた = cara menulis)",
          "あの方 (あのかた = beliau)"
        ]
      },
      {
        "kanji": "午",
        "onyomi": "ゴ (go)",
        "kunyomi": "-",
        "meaning": "Tengah Hari (Siang)",
        "compounds": [
          "午前 (ごぜん = pagi / A.M.)",
          "午後 (ごご = siang-sore / P.M.)",
          "正午 (しょうご = pukul 12:00 siang tepat)"
        ]
      },
      {
        "kanji": "前",
        "onyomi": "ゼン (zen)",
        "kunyomi": "まえ (mae)",
        "meaning": "Depan / Sebelum",
        "compounds": [
          "前 (まえ = depan)",
          "名前 (なまえ = nama)",
          "午前 (ごぜん = A.M.)",
          "三日前 (みっかまえ = 3 hari yang lalu)"
        ]
      },
      {
        "kanji": "後",
        "onyomi": "ゴ・コウ (go / kou)",
        "kunyomi": "うし(ろ)・あと・おく(れる)",
        "meaning": "Belakang / Setelah / Nanti",
        "compounds": [
          "後ろ (うしろ = belakang)",
          "午後 (ごご = P.M.)",
          "後で (あとで = nanti)",
          "最後 (さいご = terakhir)"
        ]
      },
      {
        "kanji": "毎",
        "onyomi": "マイ (mai)",
        "kunyomi": "-",
        "meaning": "Setiap",
        "compounds": [
          "毎日 (まいにち = setiap hari)",
          "毎週 (まいしゅう = setiap minggu)",
          "毎月 (まいつき = setiap bulan)",
          "毎年 (まいとし／まいねん = setiap tahun)"
        ]
      },
      {
        "kanji": "週",
        "onyomi": "シュウ (shuu)",
        "kunyomi": "-",
        "meaning": "Minggu (Pekan)",
        "compounds": [
          "今週 (こんしゅう = minggu ini)",
          "来週 (らいしゅう = minggu depan)",
          "先週 (せんしゅう = minggu lalu)",
          "週末 (しゅうまつ = akhir pekan)"
        ]
      },
      {
        "kanji": "曜",
        "onyomi": "ヨウ (you)",
        "kunyomi": "-",
        "meaning": "Hari dalam Seminggu",
        "compounds": [
          "日曜日 (にちようび = hari Minggu)",
          "何曜日 (なんようび = hari apa)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Pasangan Lawan Kata (反対語 / Antonim Kanji) & Okurigana",
        "content": "Pelajaran 8 memperkenalkan cara menghafal Kanji Kata Sifat-I secara berpasangan beserta akhiran Hiragana-nya (Okurigana / 送り仮名):",
        "points": [
          {
            "title": "新しい (Atarashii = Baru) ↔ 古い (Furui = Lama/Kuno)",
            "desc": "Perhatikan bahwa bagian kata sifat yang berubah bentuk (～しい / ～い / ～くない) ditulis dengan Hiragana di luar Kanji (Okurigana)."
          },
          {
            "title": "長い (Nagai = Panjang) ↔ 短い (Mijikai = Pendek)",
            "desc": "Dipakai untuk ukuran benda, durasi waktu, maupun sifat (長所 = kelebihan, 短所 = kekurangan)."
          },
          {
            "title": "高い (Takai = Tinggi/Mahal) ↔ 低い (Hikui = Rendah) / 安い (Yasui = Murah)",
            "desc": "Lawan kata 高い untuk posisi/tinggi adalah 低い, sedangkan lawan kata 高い untuk harga adalah 安い."
          },
          {
            "title": "明るい (Akarui = Terang) ↔ 暗い (Kurai = Gelap) • 多い (Ooi = Banyak) ↔ 少ない (Sukunai = Sedikit)",
            "desc": "Khusus 多い dan 少ない tidak bisa langsung diletakkan di depan kata benda (gunakan たくさんの N / 少しの N)."
          }
        ],
        "culturalTips": "Perhatikan bacaan khusus pada Pelajaran 10: 今朝 (Pagi ini) tidak dibaca \"kon-asa\", melainkan \"Kesa\" (けさ). Begitu pula 今年 (Tahun ini) dibaca \"Kotoshi\" (ことし)."
      }
    ]
  },
  {
    "id": "kanji_unit_5",
    "groupId": "basic_kanji",
    "chapterNumber": 5,
    "topic": "Pelajaran 11 & 12: Sistem Radikal (へん・つくり・かんむり・あし)",
    "title": "Unit 5: Radikal Kiri, Kanan, Atas & Bawah (第11課・第12課)",
    "subtitle": "24 Kanji: 作泳油海酒待校時言計語飯 • 宅客室家英薬会今雪雲電売",
    "canDo": "Memahami 4 posisi radikal utama (Hen, Tsukuri, Kanmuri, Ashi) untuk menguasai 24 Kanji Pelajaran 11 & 12 serta tata cara menulis kartu pos Jepang (はがき).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第11課・第12課)",
    "kanjiItems": [
      {
        "kanji": "作",
        "onyomi": "サク・サ (saku / sa)",
        "kunyomi": "つく(る) (tsukuru)",
        "meaning": "Membuat / Karya (Radikal 亻 Ninben)",
        "compounds": [
          "作る (つくる = membuat)",
          "作文 (さくぶん = karangan)",
          "作業 (さぎょう = pekerjaan operasional)"
        ]
      },
      {
        "kanji": "泳",
        "onyomi": "エイ (ei)",
        "kunyomi": "およ(ぐ) (oyogu)",
        "meaning": "Berenang (Radikal 氵 Sanzuiben)",
        "compounds": [
          "泳ぐ (およぐ = berenang)",
          "水泳 (すいえい = olahraga renang)"
        ]
      },
      {
        "kanji": "油",
        "onyomi": "ユ (yu)",
        "kunyomi": "あぶら (abura)",
        "meaning": "Minyak (Radikal 氵 Sanzuiben)",
        "compounds": [
          "油 (あぶら = minyak goreng)",
          "石油 (せきゆ = minyak bumi)",
          "しょう油 (しょうゆ = kecap asin Jepang)"
        ]
      },
      {
        "kanji": "海",
        "onyomi": "カイ (kai)",
        "kunyomi": "うみ (umi)",
        "meaning": "Laut (Radikal 氵 Sanzuiben)",
        "compounds": [
          "海 (うみ = laut)",
          "海外 (かいがい = luar negeri)",
          "北海道 (ほっかいどう = Hokkaido)"
        ]
      },
      {
        "kanji": "酒",
        "onyomi": "シュ (shu)",
        "kunyomi": "さけ・さか- (sake / saka-)",
        "meaning": "Minuman Beralkohol / Sake",
        "compounds": [
          "お酒 (おさけ = sake/minuman alkohol)",
          "日本酒 (にほんしゅ = sake Jepang)",
          "居酒屋 (いざかや = kedai minum Jepang)"
        ]
      },
      {
        "kanji": "待",
        "onyomi": "タイ (tai)",
        "kunyomi": "ま(つ) (matsu)",
        "meaning": "Menunggu (Radikal 彳 Gyouninben)",
        "compounds": [
          "待つ (まつ = menunggu)",
          "待合室 (まちあいしつ = ruang tunggu)",
          "招待 (しょうたい = undangan)"
        ]
      },
      {
        "kanji": "校",
        "onyomi": "コウ (kou)",
        "kunyomi": "-",
        "meaning": "Sekolah (Radikal 木 Kihen)",
        "compounds": [
          "学校 (がっこう = sekolah)",
          "高校 (こうこう = SMA)",
          "校長 (こうちょう = kepala sekolah)"
        ]
      },
      {
        "kanji": "時",
        "onyomi": "ジ (ji)",
        "kunyomi": "とき (toki)",
        "meaning": "Waktu / Jam (Radikal 日 Hihen)",
        "compounds": [
          "時間 (じかん = waktu)",
          "時計 (とけい = jam/arloji)",
          "時々 (ときどき = kadang-kadang)"
        ]
      },
      {
        "kanji": "言",
        "onyomi": "ゲン・ゴン (gen / gon)",
        "kunyomi": "い(う)・こと (iu / koto)",
        "meaning": "Berkata / Kata (Radikal 言 Gonben)",
        "compounds": [
          "言う (いう = berkata)",
          "言葉 (ことば = kata/bahasa)",
          "伝言 (でんごん = pesan titipan)"
        ]
      },
      {
        "kanji": "計",
        "onyomi": "ケイ (kei)",
        "kunyomi": "はか(る) (hakaru)",
        "meaning": "Mengukur / Menghitung / Rencana",
        "compounds": [
          "時計 (とけい = jam)",
          "計画 (けいかく = rencana)",
          "体温計 (たいおんけい = termometer)",
          "血圧計 (けつあつけい = tensimeter)"
        ]
      },
      {
        "kanji": "語",
        "onyomi": "ゴ (go)",
        "kunyomi": "かた(る) (kataru)",
        "meaning": "Bahasa / Kata (Radikal 言 Gonben)",
        "compounds": [
          "日本語 (にほんご = bahasa Jepang)",
          "英語 (えいご = bahasa Inggris)",
          "敬語 (けいご = bahasa hormat)"
        ]
      },
      {
        "kanji": "飯",
        "onyomi": "ハン (han)",
        "kunyomi": "めし (meshi)",
        "meaning": "Nasi / Makanan (Radikal 食 Shokuhen)",
        "compounds": [
          "ご飯 (ごはん = nasi/makanan)",
          "朝ご飯 (あさごはん = sarapan)",
          "炊飯器 (すいはんき = rice cooker)"
        ]
      },
      {
        "kanji": "宅",
        "onyomi": "タク (taku)",
        "kunyomi": "-",
        "meaning": "Rumah (Sopan) (Radikal 宀 Ukanmuri)",
        "compounds": [
          "お宅 (おたく = rumah Anda)",
          "自宅 (じたく = rumah sendiri)",
          "帰宅 (きたく = pulang ke rumah)"
        ]
      },
      {
        "kanji": "客",
        "onyomi": "キャク (kyaku)",
        "kunyomi": "-",
        "meaning": "Tamu / Pelanggan (Radikal 宀 Ukanmuri)",
        "compounds": [
          "お客さん (おきゃくさん = tamu/pelanggan)",
          "客室 (きゃくしつ = kamar tamu)"
        ]
      },
      {
        "kanji": "室",
        "onyomi": "シツ (shitsu)",
        "kunyomi": "むろ (muro)",
        "meaning": "Ruangan / Kamar (Radikal 宀 Ukanmuri)",
        "compounds": [
          "教室 (きょうしつ = ruang kelas)",
          "会議室 (かいぎしつ = ruang rapat)",
          "居室 (きょしつ = kamar penghuni lansia)"
        ]
      },
      {
        "kanji": "家",
        "onyomi": "カ・ケ (ka / ke)",
        "kunyomi": "いえ・うち・や (ie / uchi / ya)",
        "meaning": "Rumah / Keluarga / Ahli",
        "compounds": [
          "家 (いえ／うち = rumah)",
          "家族 (かぞく = keluarga)",
          "家事 (かじ = pekerjaan rumah tangga)",
          "作家 (さっか = penulis)"
        ]
      },
      {
        "kanji": "英",
        "onyomi": "エイ (ei)",
        "kunyomi": "-",
        "meaning": "Inggris / Unggul (Radikal 艹 Kusakanmuri)",
        "compounds": [
          "英語 (えいご = bahasa Inggris)",
          "英会話 (えいかいわ = percakapan bahasa Inggris)"
        ]
      },
      {
        "kanji": "薬",
        "onyomi": "ヤク (yaku)",
        "kunyomi": "くすり (kusuri)",
        "meaning": "Obat (Radikal 艹 Kusakanmuri)",
        "compounds": [
          "薬 (くすり = obat)",
          "目薬 (めぐすり = obat tetes mata)",
          "薬局 (やっきょく = apotek)",
          "内服薬 (ないふくやく = obat minum)"
        ]
      },
      {
        "kanji": "会",
        "onyomi": "カイ (kai)",
        "kunyomi": "あ(う) (au)",
        "meaning": "Bertemu / Perkumpulan",
        "compounds": [
          "会う (あう = bertemu)",
          "会社 (かいしゃ = perusahaan)",
          "会議 (かいぎ = rapat)",
          "会話 (かいわ = percakapan)"
        ]
      },
      {
        "kanji": "今",
        "onyomi": "コン・キン (kon / kin)",
        "kunyomi": "いま (ima)",
        "meaning": "Sekarang",
        "compounds": [
          "今 (いま = sekarang)",
          "今日 (きょう = hari ini)",
          "今月 (こんげつ = bulan ini)",
          "今年 (ことし = tahun ini)"
        ]
      },
      {
        "kanji": "雪",
        "onyomi": "セツ (setsu)",
        "kunyomi": "ゆき (yuki)",
        "meaning": "Salju (Radikal 雨 Amekanmuri)",
        "compounds": [
          "雪 (ゆき = salju)",
          "大雪 (おおゆき = hujan salju lebat)"
        ]
      },
      {
        "kanji": "雲",
        "onyomi": "ウン (un)",
        "kunyomi": "くも (kumo)",
        "meaning": "Awan (Radikal 雨 Amekanmuri)",
        "compounds": [
          "雲 (くも = awan)",
          "雨雲 (あまぐも = awan mendung)"
        ]
      },
      {
        "kanji": "電",
        "onyomi": "デン (den)",
        "kunyomi": "-",
        "meaning": "Listrik (Radikal 雨 Amekanmuri)",
        "compounds": [
          "電気 (でんき = listrik/lampu)",
          "電話 (でんわ = telepon)",
          "電車 (でんしゃ = kereta listrik)",
          "電池 (でんち = baterai)"
        ]
      },
      {
        "kanji": "売",
        "onyomi": "バイ (bai)",
        "kunyomi": "う(る) (uru)",
        "meaning": "Menjual",
        "compounds": [
          "売る (うる = menjual)",
          "売り場 (うりば = konter penjualan)",
          "自動販売機 (じどうはんばいき = mesin penjual otomatis)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Memahami 4 Radikal Utama (部首: へん・つくり・かんむり・あし)",
        "content": "Mulai Pelajaran 11 & 12, Kanji dikelompokkan berdasarkan komponen pembentuk maknanya (Bushu / Radikal):",
        "points": [
          {
            "title": "1. へん (Hen — Radikal Kiri)",
            "desc": "Contoh: 亻 (Ninben = berkaitan dengan manusia: 休, 体, 作), 氵 (Sanzui = berkaitan dengan air/cairan: 泳, 油, 海, 酒), 言 (Gonben = berkaitan dengan ucapan/bahasa: 計, 語, 話, 読), 食 (Shokuhen = berkaitan dengan makanan: 飲, 飯)."
          },
          {
            "title": "2. かんむり (Kanmuri — Radikal Mahkota/Atas)",
            "desc": "Contoh: 宀 (Ukanmuri = berkaitan dengan atap/bangunan: 宅, 客, 室, 家, 安), 艹 (Kusakanmuri = berkaitan dengan tumbuhan: 花, 茶, 英, 薬), 雨 (Amekanmuri = berkaitan dengan cuaca/langit: 雪, 雲, 電)."
          }
        ]
      },
      {
        "title": "Bacaan Budaya: Cara Menulis Kartu Pos Jepang (はがきの書きかた)",
        "vocabulary": [
          {
            "japanese": "郵便番号 (ゆうびんばんごう) / 〒",
            "romaji": "Yuubin bangou",
            "meaning": "Nomor kode pos Jepang (7 digit di dalam kotak merah)"
          },
          {
            "japanese": "宛名 (あてな) / ～様 (～さま)",
            "romaji": "Atena / ~sama",
            "meaning": "Nama penerima surat / Kepada Yth. Tuan/Nyonya ..."
          },
          {
            "japanese": "差出人 (さしだしにん)",
            "romaji": "Sashidashinin",
            "meaning": "Nama dan alamat pengirim (ditulis lebih kecil di kiri bawah)"
          },
          {
            "japanese": "年賀状 (ねんがじょう) / 暑中見舞い (しょちゅうみまい)",
            "romaji": "Nengajou / Shochuu mimai",
            "meaning": "Kartu pos ucapan Tahun Baru / Kartu pos sapaan musim panas"
          }
        ],
        "culturalTips": "Saat menulis kartu pos (Hagaki) secara vertikal (Tategaki), alamat dan nama penerima ditulis di sisi kanan-tengah dengan akhiran hormat \"～様 (-sama)\", sedangkan alamat dan nama pengirim ditulis di bagian kiri bawah."
      }
    ]
  },
  {
    "id": "kanji_unit_6",
    "groupId": "basic_kanji",
    "chapterNumber": 6,
    "topic": "Pelajaran 13 & 14: Radikal Tare/Kamae/Nyou & Komponen Bunyi",
    "title": "Unit 6: Radikal Mengelilingi & Kanji Fonetik (第13課・第14課)",
    "subtitle": "24 Kanji: 広店度病疲痛屋国回困開閉 • 近遠速遅道青晴静寺持荷歌",
    "canDo": "Menguasai 24 Kanji dengan radikal Tare, Kamae, dan Shinnyou serta sistem pengelompokan bunyi Onyomi (形声文字) pada Pelajaran 13 & 14.",
    "sourceBook": "Basic Kanji Book Vol. 1 (第13課・第14課)",
    "kanjiItems": [
      {
        "kanji": "広",
        "onyomi": "コウ (kou)",
        "kunyomi": "ひろ(い) (hiroi)",
        "meaning": "Luas (Radikal 广 Madare)",
        "compounds": [
          "広い (ひろい = luas)",
          "広場 (ひろば = alun-alun/plaza)",
          "広告 (こうこく = iklan)"
        ]
      },
      {
        "kanji": "店",
        "onyomi": "テン (ten)",
        "kunyomi": "みせ (mise)",
        "meaning": "Toko / Kedai (Radikal 广 Madare)",
        "compounds": [
          "店 (みせ = toko)",
          "店員 (てんいん = pegawai toko)",
          "喫茶店 (きっさてん = kafe)",
          "売店 (ばいてん = kios)"
        ]
      },
      {
        "kanji": "度",
        "onyomi": "ド (do)",
        "kunyomi": "たび (tabi)",
        "meaning": "Derajat / Kali (Frekuensi)",
        "compounds": [
          "今度 (こんど = kali ini / lain kali)",
          "もう一度 (もういちど = sekali lagi)",
          "温度 (おんど = suhu)",
          "三十六度五分 (36,5 derajat)"
        ]
      },
      {
        "kanji": "病",
        "onyomi": "ビョウ (byou)",
        "kunyomi": "やまい・や(む) (yamai)",
        "meaning": "Sakit / Penyakit (Radikal 疒 Yamaidare)",
        "compounds": [
          "病気 (びょうき = sakit/penyakit)",
          "病院 (びょういん = rumah sakit)",
          "病人 (びょうにん = orang sakit)"
        ]
      },
      {
        "kanji": "疲",
        "onyomi": "ヒ (hi)",
        "kunyomi": "つか(れる) (tsukareru)",
        "meaning": "Lelah / Capek (Radikal 疒 Yamaidare)",
        "compounds": [
          "疲れる (つかれる = lelah)",
          "お疲れ様でした (おつかれさまでした = terima kasih atas kerja kerasnya)"
        ]
      },
      {
        "kanji": "痛",
        "onyomi": "ツウ (tsuu)",
        "kunyomi": "いた(い)・いた(む) (itai)",
        "meaning": "Sakit / Nyeri (Radikal 疒 Yamaidare)",
        "compounds": [
          "痛い (いたい = sakit/nyeri)",
          "頭痛 (ずつう = sakit kepala)",
          "腰痛 (ようつう = nyeri pinggang)"
        ]
      },
      {
        "kanji": "屋",
        "onyomi": "オク (oku)",
        "kunyomi": "や (ya)",
        "meaning": "Atap / Toko / Kamar (Radikal 尸 Shikabane)",
        "compounds": [
          "部屋 (へや = kamar)",
          "八百屋 (やおや = toko sayur)",
          "本屋 (ほんや = toko buku)",
          "屋上 (おくじょう = atap gedung/rooftop)"
        ]
      },
      {
        "kanji": "国",
        "onyomi": "コク・ゴク (koku / goku)",
        "kunyomi": "くに (kuni)",
        "meaning": "Negara (Radikal 囗 Kunigamae)",
        "compounds": [
          "国 (くに = negara)",
          "外国 (がいこく = luar negeri)",
          "中国 (ちゅうごく = Tiongkok)",
          "帰国 (きこく = pulang ke negara asal)"
        ]
      },
      {
        "kanji": "回",
        "onyomi": "カイ (kai)",
        "kunyomi": "まわ(る)・まわ(す)",
        "meaning": "Berputar / Kali",
        "compounds": [
          "一回 (いっかい = 1 kali)",
          "何回 (なんかい = berapa kali)",
          "回る (まわる = berputar/keliling)"
        ]
      },
      {
        "kanji": "困",
        "onyomi": "コン (kon)",
        "kunyomi": "こま(る) (komaru)",
        "meaning": "Kesulitan / Bingung (Pohon 木 terkurung di dalam 囗)",
        "compounds": [
          "困る (こまる = kesulitan/repot)",
          "困難 (こんなん = kesulitan)"
        ]
      },
      {
        "kanji": "開",
        "onyomi": "カイ (kai)",
        "kunyomi": "あ(く)・あ(ける)・ひら(く)",
        "meaning": "Membuka / Terbuka (Radikal 門 Mongamae)",
        "compounds": [
          "開ける (あける = membuka)",
          "開く (あく／ひらく = terbuka)",
          "開始 (かいし = mulai)"
        ]
      },
      {
        "kanji": "閉",
        "onyomi": "ヘイ (hei)",
        "kunyomi": "し(まる)・し(める)・と(じる)",
        "meaning": "Menutup / Tertutup (Radikal 門 Mongamae)",
        "compounds": [
          "閉める (しめる = menutup)",
          "閉まる (しまる = tertutup)",
          "閉店 (へいてん = tutup toko)"
        ]
      },
      {
        "kanji": "近",
        "onyomi": "キン (kin)",
        "kunyomi": "ちか(い) (chikai)",
        "meaning": "Dekat (Radikal 辶 Shinnyou)",
        "compounds": [
          "近い (ちかい = dekat)",
          "近く (ちかく = di dekat)",
          "最近 (さいきん = akhir-akhir ini)",
          "近所 (きんじょ = tetangga/lingkungan sekitar)"
        ]
      },
      {
        "kanji": "遠",
        "onyomi": "エン (en)",
        "kunyomi": "とお(い) (tooi)",
        "meaning": "Jauh (Radikal 辶 Shinnyou)",
        "compounds": [
          "遠い (とおい = jauh)",
          "遠足 (えんそく = darmawisata/piknik)"
        ]
      },
      {
        "kanji": "速",
        "onyomi": "ソク (soku)",
        "kunyomi": "はや(い) (hayai)",
        "meaning": "Cepat (Kecepatan) (Radikal 辶 Shinnyou)",
        "compounds": [
          "速い (はやい = cepat)",
          "高速道路 (こうそくどうろ = jalan tol)"
        ]
      },
      {
        "kanji": "遅",
        "onyomi": "チ (chi)",
        "kunyomi": "おそ(い)・おく(れる)",
        "meaning": "Lambat / Terlambat (Radikal 辶 Shinnyou)",
        "compounds": [
          "遅い (おそい = lambat/larut)",
          "遅れる (おくれる = terlambat)",
          "遅番 (おそばん = shift siang-malam)"
        ]
      },
      {
        "kanji": "道",
        "onyomi": "ドウ (dou)",
        "kunyomi": "みち (michi)",
        "meaning": "Jalan / Cara / Ajaran (Radikal 辶 Shinnyou)",
        "compounds": [
          "道 (みち = jalan)",
          "水道 (すいどう = saluran air)",
          "柔道 (じゅうどう = Judo)",
          "茶道 (さどう = upacara minum teh)"
        ]
      },
      {
        "kanji": "青",
        "onyomi": "セイ・ショウ (sei / shou)",
        "kunyomi": "あお・あお(い) (ao / aoi)",
        "meaning": "Biru / Hijau Muda",
        "compounds": [
          "青い (あおい = biru)",
          "青信号 (あおしんごう = lampu hijau lalu lintas)",
          "青年 (せいねん = pemuda)"
        ]
      },
      {
        "kanji": "晴",
        "onyomi": "セイ (sei)",
        "kunyomi": "は(れる)・は(れ) (hareru)",
        "meaning": "Cerah (Matahari 日 + komponen bunyi 青 SEI)",
        "compounds": [
          "晴れる (はれる = cuaca menjadi cerah)",
          "晴れ (はれ = cuaca cerah)"
        ]
      },
      {
        "kanji": "静",
        "onyomi": "セイ・ジョウ (sei / jou)",
        "kunyomi": "しず(か) (shizuka)",
        "meaning": "Tenang / Sunyi (Komponen bunyi 青 SEI)",
        "compounds": [
          "静かな (しずかな = tenang/hening)",
          "安静 (あんせい = istirahat tenang medis)"
        ]
      },
      {
        "kanji": "寺",
        "onyomi": "ジ (ji)",
        "kunyomi": "てら (tera)",
        "meaning": "Kuil Buddha",
        "compounds": [
          "お寺 (おてら = kuil Buddha)",
          "浅草寺 (せんそうじ = Kuil Sensoji)"
        ]
      },
      {
        "kanji": "持",
        "onyomi": "ジ (ji)",
        "kunyomi": "も(つ) (motsu)",
        "meaning": "Memegang / Membawa / Memiliki (Tangan 扌 + 寺 JI)",
        "compounds": [
          "持つ (もつ = membawa/memiliki)",
          "気持ち (きもち = perasaan)",
          "お金持ち (おかねもち = orang kaya)"
        ]
      },
      {
        "kanji": "荷",
        "onyomi": "カ (ka)",
        "kunyomi": "に (ni)",
        "meaning": "Barang Bawaan / Muatan (Tumbuhan 艹 + 何 KA)",
        "compounds": [
          "荷物 (にもつ = barang bawaan/paket)"
        ]
      },
      {
        "kanji": "歌",
        "onyomi": "カ (ka)",
        "kunyomi": "うた・うた(う) (uta / utau)",
        "meaning": "Lagu / Menyanyi",
        "compounds": [
          "歌 (うた = lagu)",
          "歌う (うたう = menyanyi)",
          "歌手 (かしゅ = penyanyi)",
          "国歌 (こっか = lagu kebangsaan)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Rahasia Kanji Gabungan Bunyi & Makna (形声文字 / Keisei-moji)",
        "content": "Lebih dari 80% Kanji Jepang adalah Keisei-moji: satu sisi menunjukkan kategori makna (Radikal), sedangkan sisi lainnya memberikan petunjuk cara baca Onyomi!",
        "points": [
          {
            "title": "Radikal 疒 (Yamaidare = Penyakit) & 辶 (Shinnyou = Jalan/Gerak)",
            "desc": "Semua Kanji dengan radikal 疒 berkaitan dengan kondisi tubuh/penyakit: 病 (sakit), 疲 (lelah), 痛 (nyeri). Semua Kanji dengan radikal 辶 berkaitan dengan jarak dan perjalanan: 近 (dekat), 遠 (jauh), 速 (cepat), 遅 (lambat), 道 (jalan)."
          },
          {
            "title": "Keluarga Bunyi 「青 (セイ / SEI)」",
            "desc": "Kanji 青 dibaca セイ (SEI). Jika ditambah radikal matahari 日 menjadi 晴 (セイ = cerah), ditambah radikal争 menjadi 静 (セイ = tenang), ditambah radikal air 氵 menjadi 清 (セイ = bersih/murni, seperti pada 清拭 / Seishiki)."
          },
          {
            "title": "Keluarga Bunyi 「寺 (ジ / JI)」",
            "desc": "Kanji 寺 dibaca ジ (JI). Jika ditambah radikal tangan 扌 menjadi 持 (ジ = memegang/membawa), ditambah radikal matahari 日 menjadi 時 (ジ = waktu/jam)."
          }
        ],
        "culturalTips": "Dalam prakiraan cuaca Jepang (天気予報 / Tenki Yohou), 4 istilah utama yang selalu muncul di layar TV adalah: 晴れ (Hare = Cerah), 曇り (Kumori = Berawan), 雨 (Ame = Hujan), dan 雪 (Yuki = Salju)."
      }
    ]
  },
  {
    "id": "kanji_unit_7",
    "groupId": "basic_kanji",
    "chapterNumber": 7,
    "topic": "Pelajaran 15 & 16: Hubungan Keluarga, Kata Sifat-Na & Rumah Sakit",
    "title": "Unit 7: Keluarga, Kata Sifat-Na & Kantong Obat (第15課・第16課)",
    "subtitle": "24 Kanji: 友父母兄姉弟妹夫妻彼主奥 • 元気有名親切便利不若早忙",
    "canDo": "Menguasai 24 Kanji anggota keluarga sendiri vs orang lain, kata sifat-Na gabungan 2 kanji, serta membaca kantong obat (薬の袋) dan poli rumah sakit (Pelajaran 15 & 16).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第15課・第16課)",
    "kanjiItems": [
      {
        "kanji": "友",
        "onyomi": "ユウ (yuu)",
        "kunyomi": "とも (tomo)",
        "meaning": "Teman / Sahabat",
        "compounds": [
          "友だち (ともだち = teman)",
          "友人 (ゆうじん = sahabat/rekan)",
          "親友 (しんゆう = sahabat karib)"
        ]
      },
      {
        "kanji": "父",
        "onyomi": "フ (fu)",
        "kunyomi": "ちち・おとう(さん)",
        "meaning": "Ayah",
        "compounds": [
          "父 (ちち = ayah sendiri)",
          "お父さん (おとうさん = ayah orang lain)",
          "父母 (ふぼ = ayah dan ibu)",
          "祖父 (そふ = kakek)"
        ]
      },
      {
        "kanji": "母",
        "onyomi": "ボ (bo)",
        "kunyomi": "はは・おかあ(さん)",
        "meaning": "Ibu",
        "compounds": [
          "母 (はは = ibu sendiri)",
          "お母さん (おかあさん = ibu orang lain)",
          "母国 (ぼこく = tanah air)",
          "祖母 (そぼ = nenek)"
        ]
      },
      {
        "kanji": "兄",
        "onyomi": "ケイ・キョウ (kei / kyou)",
        "kunyomi": "あに・おにい(さん)",
        "meaning": "Kakak Laki-laki",
        "compounds": [
          "兄 (あに = kakak laki-laki sendiri)",
          "お兄さん (おにいさん = kakak laki-laki orang lain)",
          "兄弟 (きょうだい = saudara kandung)"
        ]
      },
      {
        "kanji": "姉",
        "onyomi": "シ (shi)",
        "kunyomi": "あね・おねえ(さん)",
        "meaning": "Kakak Perempuan",
        "compounds": [
          "姉 (あね = kakak perempuan sendiri)",
          "お姉さん (おねえさん = kakak perempuan orang lain)",
          "姉妹 (しまい = saudari kandung)"
        ]
      },
      {
        "kanji": "弟",
        "onyomi": "テイ・ダイ・デ",
        "kunyomi": "おとうと (otouto)",
        "meaning": "Adik Laki-laki",
        "compounds": [
          "弟 (おとうと = adik laki-laki sendiri)",
          "弟さん (おとうとさん = adik laki-laki orang lain)",
          "兄弟 (きょうだい = saudara)"
        ]
      },
      {
        "kanji": "妹",
        "onyomi": "マイ (mai)",
        "kunyomi": "いもうと (imouto)",
        "meaning": "Adik Perempuan",
        "compounds": [
          "妹 (いもうと = adik perempuan sendiri)",
          "妹さん (いもうとさん = adik perempuan orang lain)"
        ]
      },
      {
        "kanji": "夫",
        "onyomi": "フ・フウ (fu / fuu)",
        "kunyomi": "おっと (otto)",
        "meaning": "Suami",
        "compounds": [
          "夫 (おっと = suami sendiri)",
          "夫婦 (ふうふ = pasangan suami istri)"
        ]
      },
      {
        "kanji": "妻",
        "onyomi": "サイ (sai)",
        "kunyomi": "つま (tsuma)",
        "meaning": "Istri",
        "compounds": [
          "妻 (つま = istri sendiri)",
          "夫妻 (ふさい = Tuan dan Nyonya)"
        ]
      },
      {
        "kanji": "彼",
        "onyomi": "ヒ (hi)",
        "kunyomi": "かれ (kare)",
        "meaning": "Dia (Laki-laki) / Pacar",
        "compounds": [
          "彼 (かれ = dia laki-laki)",
          "彼女 (かのじょ = dia perempuan)",
          "彼ら (かれら = mereka)"
        ]
      },
      {
        "kanji": "主",
        "onyomi": "シュ (shu)",
        "kunyomi": "ぬし・おも(な) (nushi / omona)",
        "meaning": "Utama / Suami / Pemilik",
        "compounds": [
          "主人 (しゅじん = suami saya)",
          "ご主人 (ごしゅじん = suami Anda)",
          "主な (おもな = yang utama)"
        ]
      },
      {
        "kanji": "奥",
        "onyomi": "オウ (ou)",
        "kunyomi": "おく (oku)",
        "meaning": "Bagian Dalam / Istri Orang Lain",
        "compounds": [
          "奥さん (おくさん = istri orang lain)",
          "奥 (おく = bagian paling dalam)"
        ]
      },
      {
        "kanji": "元",
        "onyomi": "ゲン・ガン (gen / gan)",
        "kunyomi": "もと (moto)",
        "meaning": "Asal / Semula / Sehat",
        "compounds": [
          "元気 (げんき = sehat/bersemangat)",
          "元日 (がんじつ = tanggal 1 Januari)"
        ]
      },
      {
        "kanji": "気",
        "onyomi": "キ・ケ (ki / ke)",
        "kunyomi": "-",
        "meaning": "Semangat / Perasaan / Udara",
        "compounds": [
          "元気 (げんき = sehat)",
          "天気 (てんき = cuaca)",
          "気をつける (きをつける = berhati-hati)",
          "気分 (きぶん = perasaan/kondisi badan)"
        ]
      },
      {
        "kanji": "有",
        "onyomi": "ユウ・ウ (yuu / u)",
        "kunyomi": "あ(る) (aru)",
        "meaning": "Ada / Memiliki",
        "compounds": [
          "有名 (ゆうめい = terkenal)",
          "有料 (ゆうりょう = berbayar)",
          "有給休暇 (ゆうきゅうきゅうか = cuti berbayar)"
        ]
      },
      {
        "kanji": "名",
        "onyomi": "メイ・ミョウ (mei / myou)",
        "kunyomi": "な (na)",
        "meaning": "Nama / Reputasi",
        "compounds": [
          "名前 (なまえ = nama)",
          "有名 (ゆうめい = terkenal)",
          "名刺 (めいし = kartu nama)",
          "氏名 (しめい = nama lengkap)"
        ]
      },
      {
        "kanji": "親",
        "onyomi": "シン (shin)",
        "kunyomi": "おや・した(しい) (oya / shitashii)",
        "meaning": "Orang Tua / Akrab",
        "compounds": [
          "親 (おや = orang tua)",
          "両親 (りょうしん = kedua orang tua)",
          "親切 (しんせつ = ramah/baik hati)",
          "親しい (したしい = akrab)"
        ]
      },
      {
        "kanji": "切",
        "onyomi": "セツ (setsu)",
        "kunyomi": "き(る)・き(れる) (kiru)",
        "meaning": "Memotong / Penting / Habis",
        "compounds": [
          "切る (きる = memotong)",
          "親切 (しんせつ = ramah)",
          "大切 (たいせつ = penting/berharga)",
          "切手 (きって = prangko)"
        ]
      },
      {
        "kanji": "便",
        "onyomi": "ベン・ビン (ben / bin)",
        "kunyomi": "たよ(り) (tayori)",
        "meaning": "Praktis / Pos / Penerbangan / Feses",
        "compounds": [
          "便利 (べんり = praktis)",
          "不便 (ふべん = tidak praktis)",
          "郵便局 (ゆうびんきょく = kantor pos)",
          "便 (べん = tinja/BAB medis)"
        ]
      },
      {
        "kanji": "利",
        "onyomi": "リ (ri)",
        "kunyomi": "き(く) (kiku)",
        "meaning": "Menguntungkan / Berguna",
        "compounds": [
          "便利 (べんり = praktis)",
          "利用する (りようする = menggunakan)",
          "利用者 (りようしゃ = pengguna layanan lansia)"
        ]
      },
      {
        "kanji": "不",
        "onyomi": "フ・ブ (fu / bu)",
        "kunyomi": "-",
        "meaning": "Tidak / Kurang (Awalan Negatif)",
        "compounds": [
          "不便 (ふべん = tidak praktis)",
          "不安 (ふあん = cemas)",
          "不眠 (ふみん = insomnia/sulit tidur)",
          "不足 (ふそく = kekurangan)"
        ]
      },
      {
        "kanji": "若",
        "onyomi": "ジャク (jaku)",
        "kunyomi": "わか(い) (wakai)",
        "meaning": "Muda",
        "compounds": [
          "若い (わかい = muda)",
          "若者 (わかもの = anak muda)"
        ]
      },
      {
        "kanji": "早",
        "onyomi": "ソウ・サッ (sou / sapp-)",
        "kunyomi": "はや(い) (hayai)",
        "meaning": "Cepat / Awal (Waktu)",
        "compounds": [
          "早い (はやい = cepat/pagi-pagi)",
          "早番 (はやばん = shift pagi)",
          "早起き (はやおき = bangun pagi)"
        ]
      },
      {
        "kanji": "忙",
        "onyomi": "ボウ (bou)",
        "kunyomi": "いそが(しい) (isogashii)",
        "meaning": "Sibuk",
        "compounds": [
          "忙しい (いそがしい = sibuk)",
          "多忙 (たぼう = sangat sibuk)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Bacaan Praktis: Di Rumah Sakit (病院で) & Kantong Obat (薬の袋)",
        "content": "Dalam Basic Kanji Book Pelajaran 16, Anda mempelajari cara membaca papan poli rumah sakit dan instruksi minum obat pada kantong obat (薬袋 / Yakutai):",
        "vocabulary": [
          {
            "japanese": "内科 (ないか) / 外科 (げか) / 小児科 (しょうにか)",
            "romaji": "Naika / Geka / Shounika",
            "meaning": "Poli Penyakit Dalam / Poli Bedah / Poli Anak"
          },
          {
            "japanese": "眼科 (がんか) / 歯科 (しか) / 耳鼻科 (じびか)",
            "romaji": "Ganka / Shika / Jibika",
            "meaning": "Poli Mata / Poli Gigi / Poli THT"
          },
          {
            "japanese": "内服薬 (ないふくやく) / 外用薬 (がいようやく)",
            "romaji": "Naifukuyaku / Gaiyouyaku",
            "meaning": "Obat minum (dalam) / Obat luar (salep/tetes)"
          },
          {
            "japanese": "一日三回 毎食後 (いちにちさんかい まいしょくご)",
            "romaji": "Ichinichi sankai maishokugo",
            "meaning": "Sehari 3 kali, setiap sesudah makan"
          },
          {
            "japanese": "食前 (しょくぜん) / 食間 (しょっかん) / 就寝前 (しゅうしんまえ)",
            "romaji": "Shokuzen / Shokkan / Shuushinmae",
            "meaning": "Sebelum makan / Di antara waktu makan / Sebelum tidur"
          }
        ],
        "culturalTips": "Perbedaan penting antara 速い dan 早い (keduanya dibaca \"Hayai\"): 速い digunakan untuk kecepatan gerak (kereta cepat, berlari cepat), sedangkan 早い digunakan untuk waktu yang lebih awal/pagi (bangun pagi, datang lebih awal)."
      }
    ]
  },
  {
    "id": "kanji_unit_8",
    "groupId": "basic_kanji",
    "chapterNumber": 8,
    "topic": "Pelajaran 17 & 18: Kata Kerja Perpindahan, Arah & Apartemen",
    "title": "Unit 8: Kata Kerja Gerak, Rambu Jalan & Cari Kamar (第17課・第18課)",
    "subtitle": "24 Kanji: 出入乗降着渡通走歩止動働 • 右左東西北南外内部駅社院",
    "canDo": "Menguasai 24 Kanji kata kerja gerak transitif/intransitif, rambu lalu lintas (道路標識), arah mata angin, serta istilah sewa apartemen di Jepang (Pelajaran 17 & 18).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第17課・第18課)",
    "kanjiItems": [
      {
        "kanji": "出",
        "onyomi": "シュツ (shutsu)",
        "kunyomi": "で(る)・だ(す) (deru / dasu)",
        "meaning": "Keluar / Mengeluarkan",
        "compounds": [
          "出る (でる = keluar)",
          "出す (だす = mengeluarkan/mengumpulkan)",
          "出口 (でぐち = pintu keluar)",
          "出発 (しゅっぱつ = keberangkatan)"
        ]
      },
      {
        "kanji": "入",
        "onyomi": "ニュウ (nyuu)",
        "kunyomi": "はい(る)・い(れる) (hairu / ireru)",
        "meaning": "Masuk / Memasukkan",
        "compounds": [
          "入る (はいる = masuk)",
          "入れる (いれる = memasukkan)",
          "入口 (いりぐち = pintu masuk)",
          "入院 (にゅういん = opname di RS)"
        ]
      },
      {
        "kanji": "乗",
        "onyomi": "ジョウ (jou)",
        "kunyomi": "の(る)・の(せる) (noru / noseru)",
        "meaning": "Naik Kendaraan",
        "compounds": [
          "乗る (のる = naik kendaraan)",
          "乗り場 (のりば = tempat naik)",
          "乗り換え (のりかえ = transit ganti kereta)"
        ]
      },
      {
        "kanji": "降",
        "onyomi": "コウ (kou)",
        "kunyomi": "お(りる)・ふ(る) (oriru / furu)",
        "meaning": "Turun Kendaraan / Turun Hujan",
        "compounds": [
          "降りる (おりる = turun kendaraan)",
          "雨が降る (あめがふる = turun hujan)",
          "乗降口 (じょうこうぐち = pintu naik-turun)"
        ]
      },
      {
        "kanji": "着",
        "onyomi": "チャク (chaku)",
        "kunyomi": "つ(く)・き(る) (tsuku / kiru)",
        "meaning": "Tiba / Memakai Pakaian Atas",
        "compounds": [
          "着く (つく = tiba)",
          "着る (きる = memakai baju)",
          "上着 (うわぎ = jaket)",
          "着替え (きがえ = ganti pakaian)"
        ]
      },
      {
        "kanji": "渡",
        "onyomi": "ト (to)",
        "kunyomi": "わた(る)・わた(す) (wataru / watasu)",
        "meaning": "Menyeberang / Menyerahkan",
        "compounds": [
          "橋を渡る (はしをわたる = menyeberangi jembatan)",
          "渡す (わたす = menyerahkan)"
        ]
      },
      {
        "kanji": "通",
        "onyomi": "ツウ (tsuu)",
        "kunyomi": "とお(る)・かよ(う) (tooru / kayou)",
        "meaning": "Melewati / Pulang-Pergi Rutin",
        "compounds": [
          "通る (とおる = melewati)",
          "通う (かよう = pulang-pergi rutin)",
          "通勤 (つうきん = komuter kerja)",
          "通行止め (つうこうどめ = jalan ditutup)"
        ]
      },
      {
        "kanji": "走",
        "onyomi": "ソウ (sou)",
        "kunyomi": "はし(る) (hashiru)",
        "meaning": "Berlari / Melaju",
        "compounds": [
          "走る (はしる = berlari)",
          "ご馳走様 (ごちそうさま = terima kasih atas hidangannya)"
        ]
      },
      {
        "kanji": "歩",
        "onyomi": "ホ・ブ (ho / bu)",
        "kunyomi": "ある(く) (aruku)",
        "meaning": "Berjalan Kaki / Langkah",
        "compounds": [
          "歩く (あるく = berjalan kaki)",
          "散歩 (さんぽ = jalan-jalan santai)",
          "歩道 (ほどう = trotoar)",
          "歩行器 (ほこうき = walker alat bantu jalan)"
        ]
      },
      {
        "kanji": "止",
        "onyomi": "シ (shi)",
        "kunyomi": "と(まる)・と(める)・や(める)",
        "meaning": "Berhenti / Menghentikan / Larangan",
        "compounds": [
          "止まる (とまる = berhenti)",
          "止める (とめる = menghentikan)",
          "禁止 (きんし = dilarang)",
          "中止 (ちゅうし = batal)"
        ]
      },
      {
        "kanji": "動",
        "onyomi": "ドウ (dou)",
        "kunyomi": "うご(く)・うご(かす)",
        "meaning": "Bergerak / Menggerakkan",
        "compounds": [
          "動く (うごく = bergerak)",
          "運動 (うんどう = olahraga)",
          "動物 (どうぶつ = hewan)",
          "自動車 (じどうしゃ = mobil)"
        ]
      },
      {
        "kanji": "働",
        "onyomi": "ドウ (dou)",
        "kunyomi": "はたら(く) (hataraku)",
        "meaning": "Bekerja (Orang 亻 + Bergerak 動 — Kokuji Jepang)",
        "compounds": [
          "働く (はたらく = bekerja)",
          "労働者 (ろうどうしゃ = pekerja)"
        ]
      },
      {
        "kanji": "右",
        "onyomi": "ウ・ユウ (u / yuu)",
        "kunyomi": "みぎ (migi)",
        "meaning": "Kanan",
        "compounds": [
          "右 (みぎ = kanan)",
          "右手 (みぎて = tangan kanan)",
          "右折 (うせつ = belok kanan)"
        ]
      },
      {
        "kanji": "左",
        "onyomi": "サ (sa)",
        "kunyomi": "ひだり (hidari)",
        "meaning": "Kiri",
        "compounds": [
          "左 (ひだり = kiri)",
          "左手 (ひだりて = tangan kiri)",
          "左折 (させつ = belok kiri)"
        ]
      },
      {
        "kanji": "東",
        "onyomi": "トウ (tou)",
        "kunyomi": "ひがし (higashi)",
        "meaning": "Timur",
        "compounds": [
          "東 (ひがし = timur)",
          "東京 (とうきょう = Tokyo)",
          "東口 (ひがしぐち = pintu timur)"
        ]
      },
      {
        "kanji": "西",
        "onyomi": "セイ・サイ (sei / sai)",
        "kunyomi": "にし (nishi)",
        "meaning": "Barat",
        "compounds": [
          "西 (にし = barat)",
          "西口 (にしぐち = pintu barat)",
          "関西 (かんさい = wilayah Kansai)"
        ]
      },
      {
        "kanji": "北",
        "onyomi": "ホク・ホッ (hoku / hokk-)",
        "kunyomi": "きた (kita)",
        "meaning": "Utara",
        "compounds": [
          "北 (きた = utara)",
          "北口 (きたぐち = pintu utara)",
          "北海道 (ほっかいどう = Hokkaido)"
        ]
      },
      {
        "kanji": "南",
        "onyomi": "ナン (nan)",
        "kunyomi": "みなみ (minami)",
        "meaning": "Selatan",
        "compounds": [
          "南 (みなみ = selatan)",
          "南口 (みなみぐち = pintu selatan)",
          "東南アジア (とうなんあじあ = Asia Tenggara)"
        ]
      },
      {
        "kanji": "外",
        "onyomi": "ガイ・ゲ (gai / ge)",
        "kunyomi": "そと・はず(す) (soto / hazusu)",
        "meaning": "Luar / Melepas",
        "compounds": [
          "外 (そと = luar)",
          "外国 (がいこく = luar negeri)",
          "外出 (がいしゅつ = keluar bepergian)"
        ]
      },
      {
        "kanji": "内",
        "onyomi": "ナイ (nai)",
        "kunyomi": "うち (uchi)",
        "meaning": "Dalam",
        "compounds": [
          "国内 (こくない = dalam negeri)",
          "案内 (あんない = panduan/informasi)",
          "内科 (ないか = penyakit dalam)"
        ]
      },
      {
        "kanji": "部",
        "onyomi": "ブ (bu)",
        "kunyomi": "-べ (-be)",
        "meaning": "Bagian / Divisi / Kamar",
        "compounds": [
          "部屋 (へや = kamar)",
          "全部 (ぜんぶ = semuanya)",
          "部長 (ぶちょう = kepala divisi)"
        ]
      },
      {
        "kanji": "駅",
        "onyomi": "エキ (eki)",
        "kunyomi": "-",
        "meaning": "Stasiun Kereta",
        "compounds": [
          "駅 (えき = stasiun)",
          "駅前 (えきまえ = depan stasiun)",
          "駅員 (えきいん = petugas stasiun)"
        ]
      },
      {
        "kanji": "社",
        "onyomi": "シャ・ジャ (sha / ja)",
        "kunyomi": "やしろ (yashiro)",
        "meaning": "Perusahaan / Masyarakat / Kuil Shinto",
        "compounds": [
          "会社 (かいしゃ = perusahaan)",
          "社会 (しゃかい = masyarakat)",
          "神社 (じんじゃ = kuil Shinto)"
        ]
      },
      {
        "kanji": "院",
        "onyomi": "イン (in)",
        "kunyomi": "-",
        "meaning": "Institusi / Rumah Sakit / Pascasarjana",
        "compounds": [
          "病院 (びょういん = rumah sakit)",
          "入院 (にゅういん = rawat inap)",
          "退院 (たいいん = keluar dari RS)",
          "美容院 (びよういん = salon)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Bacaan Praktis: Rambu Lalu Lintas (道路標識) & Mencari Apartemen (部屋さがし)",
        "content": "Di dalam Basic Kanji Book Pelajaran 17 & 18, Anda dilatih membaca rambu jalan raya dan iklan sewa kamar apartemen (不動産屋):",
        "vocabulary": [
          {
            "japanese": "止まれ (とまれ) / 駐車禁止 (ちゅうしゃきんし)",
            "romaji": "Tomare / Chuusha kinshi",
            "meaning": "Berhenti (STOP) / Dilarang Parkir"
          },
          {
            "japanese": "通行止め (つうこうどめ) / 歩行者専用 (ほこうしゃせんよう)",
            "romaji": "Tsuukoudome / Hokousha senyou",
            "meaning": "Jalan Ditutup / Khusus Pejalan Kaki"
          },
          {
            "japanese": "家賃 (やちん) / 管理費 (かんりひ)",
            "romaji": "Yachin / Kanrihi",
            "meaning": "Biaya sewa bulanan / Biaya pemeliharaan gedung"
          },
          {
            "japanese": "敷金 (しききん) / 礼金 (れいきん)",
            "romaji": "Shikikin / Reikin",
            "meaning": "Uang jaminan deposit / Uang tanda terima kasih kepada pemilik"
          },
          {
            "japanese": "徒歩5分 (とほごふん) / 2LDK / 南向き (みなみむき)",
            "romaji": "Toho gofun / Ni-Eru-Dii-Kee / Minamimuki",
            "meaning": "Jalan kaki 5 menit dari stasiun / 2 Kamar + Ruang Tamu-Makan-Dapur / Menghadap Selatan"
          }
        ],
        "culturalTips": "Apartemen di Jepang yang menghadap ke Selatan (南向き / Minamimuki) paling diminati karena mendapat sinar matahari hangat sepanjang hari sehingga pakaian cepat kering dan kamar tidak lembap."
      }
    ]
  },
  {
    "id": "kanji_unit_9",
    "groupId": "basic_kanji",
    "chapterNumber": 9,
    "topic": "Pelajaran 19 & 20: Fasilitas Umum, Simbol Peta & Wilayah Administratif",
    "title": "Unit 9: Fasilitas Kota, Peta & Alamat Jepang (第19課・第20課)",
    "subtitle": "22 Kanji: 地鉄工場図館公園住所番号 • 市町村区都府県島京様",
    "canDo": "Menguasai 22 Kanji fasilitas publik, simbol peta Jepang (地図記号), dan pembagian wilayah administratif Jepang (都道府県・市町村) serta penulisan amplop surat (Pelajaran 19 & 20).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第19課・第20課)",
    "kanjiItems": [
      {
        "kanji": "地",
        "onyomi": "チ・ジ (chi / ji)",
        "kunyomi": "-",
        "meaning": "Tanah / Bumi / Wilayah",
        "compounds": [
          "地下鉄 (ちかてつ = subway)",
          "地図 (ちず = peta)",
          "地震 (じしん = gempa bumi)",
          "地下 (ちか = bawah tanah)"
        ]
      },
      {
        "kanji": "鉄",
        "onyomi": "テツ (tetsu)",
        "kunyomi": "-",
        "meaning": "Besi / Jalur Kereta",
        "compounds": [
          "地下鉄 (ちかてつ = kereta bawah tanah)",
          "鉄道 (てつどう = jalan rel kereta)",
          "鉄分 (てつぶん = zat besi)"
        ]
      },
      {
        "kanji": "工",
        "onyomi": "コウ・ク (kou / ku)",
        "kunyomi": "-",
        "meaning": "Teknik / Konstruksi / Pabrik",
        "compounds": [
          "工場 (こうじょう = pabrik)",
          "工事 (こうじ = pekerjaan konstruksi)",
          "工夫 (くふう = akal/inovasi)"
        ]
      },
      {
        "kanji": "場",
        "onyomi": "ジョウ (jou)",
        "kunyomi": "ば (ba)",
        "meaning": "Tempat / Lokasi",
        "compounds": [
          "場所 (ばしょ = tempat)",
          "工場 (こうじょう = pabrik)",
          "売り場 (うりば = konter penjualan)",
          "会場 (かいじょう = lokasi acara)"
        ]
      },
      {
        "kanji": "図",
        "onyomi": "ズ・ト (zu / to)",
        "kunyomi": "はか(る) (hakaru)",
        "meaning": "Peta / Gambar / Diagram",
        "compounds": [
          "地図 (ちず = peta)",
          "図書館 (としょかん = perpustakaan)",
          "合図 (あいず = isyarat/aba-aba)"
        ]
      },
      {
        "kanji": "館",
        "onyomi": "カン (kan)",
        "kunyomi": "やかた (yakata)",
        "meaning": "Gedung Besar / Balai",
        "compounds": [
          "図書館 (としょかん = perpustakaan)",
          "映画館 (えいがかん = bioskop)",
          "水族館 (すいぞくかん = akuarium)",
          "大使館 (たいしかん = kedutaan besar)"
        ]
      },
      {
        "kanji": "公",
        "onyomi": "コウ (kou)",
        "kunyomi": "おおやけ (ooyake)",
        "meaning": "Umum / Publik / Resmi",
        "compounds": [
          "公園 (こうえん = taman umum)",
          "公務員 (こうむいん = pegawai negeri)"
        ]
      },
      {
        "kanji": "園",
        "onyomi": "エン (en)",
        "kunyomi": "その (sono)",
        "meaning": "Taman / Kebun",
        "compounds": [
          "公園 (こうえん = taman)",
          "動物園 (どうぶつえん = kebun binatang)",
          "幼稚園 (ようちえん = TK)"
        ]
      },
      {
        "kanji": "住",
        "onyomi": "ジュウ (juu)",
        "kunyomi": "す(む) (sumu)",
        "meaning": "Tinggal / Menetap",
        "compounds": [
          "住む (すむ = tinggal)",
          "住所 (じゅうしょ = alamat)",
          "住宅 (じゅうたく = perumahan)"
        ]
      },
      {
        "kanji": "所",
        "onyomi": "ショ・ジョ (sho / jo)",
        "kunyomi": "ところ (tokoro)",
        "meaning": "Tempat",
        "compounds": [
          "所 (ところ = tempat)",
          "住所 (じゅうしょ = alamat)",
          "台所 (だいどころ = dapur)",
          "近所 (きんじょ = lingkungan sekitar)"
        ]
      },
      {
        "kanji": "番",
        "onyomi": "バン (ban)",
        "kunyomi": "-",
        "meaning": "Nomor / Giliran / Jaga",
        "compounds": [
          "番号 (ばんごう = nomor)",
          "一番 (いちばん = nomor satu/paling)",
          "交番 (こうばん = pos polisi)",
          "早番 (はやばん = shift pagi)"
        ]
      },
      {
        "kanji": "号",
        "onyomi": "ゴウ (gou)",
        "kunyomi": "-",
        "meaning": "Nomor / Tanda / Sinyal",
        "compounds": [
          "番号 (ばんごう = nomor)",
          "信号 (しんごう = lampu lalu lintas)",
          "三号室 (さんごうしつ = kamar nomor 3)"
        ]
      },
      {
        "kanji": "市",
        "onyomi": "シ (shi)",
        "kunyomi": "いち (ichi)",
        "meaning": "Kota / Pasar",
        "compounds": [
          "市 (し = kota)",
          "市役所 (しやくしょ = balai kota)",
          "市場 (いちば = pasar)"
        ]
      },
      {
        "kanji": "町",
        "onyomi": "チョウ (chou)",
        "kunyomi": "まち (machi)",
        "meaning": "Kota Kecil / Kelurahan",
        "compounds": [
          "町 (まち = kota kecil)",
          "町長 (ちょうちょう = kepala distrik/kota kecil)"
        ]
      },
      {
        "kanji": "村",
        "onyomi": "ソン (son)",
        "kunyomi": "むら (mura)",
        "meaning": "Desa",
        "compounds": [
          "村 (むら = desa)",
          "農村 (のうそん = desa pertanian)"
        ]
      },
      {
        "kanji": "区",
        "onyomi": "ク (ku)",
        "kunyomi": "-",
        "meaning": "Distrik Kota (Ward)",
        "compounds": [
          "新宿区 (しんじゅくく = Distrik Shinjuku)",
          "区役所 (くやくしょ = kantor distrik)"
        ]
      },
      {
        "kanji": "都",
        "onyomi": "ト・ツ (to / tsu)",
        "kunyomi": "みやこ (miyako)",
        "meaning": "Ibu Kota / Metropolis",
        "compounds": [
          "東京都 (とうきょうと = Metropolis Tokyo)",
          "首都 (しゅと = ibu kota)",
          "都合 (つごう = keadaan/jadwal)"
        ]
      },
      {
        "kanji": "府",
        "onyomi": "フ (fu)",
        "kunyomi": "-",
        "meaning": "Prefektur Perkotaan (Osaka & Kyoto) / Pemerintah",
        "compounds": [
          "大阪府 (おおさかふ = Prefektur Osaka)",
          "京都府 (きょうとふ = Prefektur Kyoto)",
          "政府 (せいふ = pemerintah)"
        ]
      },
      {
        "kanji": "県",
        "onyomi": "ケン (ken)",
        "kunyomi": "-",
        "meaning": "Prefektur (Provinsi di Jepang)",
        "compounds": [
          "県 (けん = prefektur)",
          "神奈川県 (かながわけん = Prefektur Kanagawa)",
          "県庁 (けんちょう = kantor gubernur prefektur)"
        ]
      },
      {
        "kanji": "島",
        "onyomi": "トウ (tou)",
        "kunyomi": "しま・-じま (shima / -jima)",
        "meaning": "Pulau",
        "compounds": [
          "島 (しま = pulau)",
          "広島 (ひろしま = Hiroshima)",
          "半島 (はんとう = semenanjung)"
        ]
      },
      {
        "kanji": "京",
        "onyomi": "キョウ・ケイ (kyou / kei)",
        "kunyomi": "-",
        "meaning": "Ibu Kota",
        "compounds": [
          "東京 (とうきょう = Tokyo)",
          "京都 (きょうと = Kyoto)",
          "上京する (じょうきょうする = pergi merantau ke Tokyo)"
        ]
      },
      {
        "kanji": "様",
        "onyomi": "ヨウ (you)",
        "kunyomi": "さま (sama)",
        "meaning": "Tuan / Nyonya / Keadaan",
        "compounds": [
          "山田様 (やまださま = Yth. Tuan/Nyonya Yamada)",
          "皆様 (みなさま = hadirin sekalian)",
          "様子 (ようす = kondisi/keadaan pasien)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Sistem Administratif Jepang: 47 Todoufuken (1都・1道・2府・43県)",
        "content": "Pelajaran 20 membahas struktur wilayah administratif Jepang yang wajib dipahami saat menulis alamat:",
        "points": [
          {
            "title": "1 都 (To) — 東京都 (Toukyou-to)",
            "desc": "Metropolis Tokyo sebagai ibu kota negara."
          },
          {
            "title": "1 道 (Dou) — 北海道 (Hokkaidou)",
            "desc": "Wilayah pulau utara Hokkaido."
          },
          {
            "title": "2 府 (Fu) — 大阪府 (Oosaka-fu) & 京都府 (Kyouto-fu)",
            "desc": "Dua prefektur perkotaan bersejarah di wilayah Kansai."
          },
          {
            "title": "43 県 (Ken) — 愛知県, 福岡県, 沖縄県, dll.",
            "desc": "43 prefektur lainnya di seluruh Jepang, yang di dalamnya terbagi lagi menjadi 市 (Kota), 区 (Distrik), 町 (Kota Kecil), dan 村 (Desa)."
          }
        ],
        "culturalTips": "Pada amplop surat Jepang (封筒 / Fuutou), jika dikirim kepada perorangan gunakan akhiran \"～様 (-sama)\", sedangkan jika dikirim ditujukan kepada instansi/perusahaan atau bagian kantor gunakan akhiran \"～御中 (-onchuu)\"."
      }
    ]
  },
  {
    "id": "kanji_unit_10",
    "groupId": "basic_kanji",
    "chapterNumber": 10,
    "topic": "Pelajaran 21 & 22: Kata Kerja Suru Akademik & Bidang Keilmuan",
    "title": "Unit 10: Studi, Penelitian & Bidang Ilmu (第21課・第22課)",
    "subtitle": "24 Kanji: 練習勉強研究留質問答題宿 • 政治経済歴史育化理科数医",
    "canDo": "Menuntaskan seluruh 251 Kanji Basic Kanji Book Vol. 1 dengan menguasai 24 Kanji kata kerja ～する akademik, tanya-jawab ujian, dan istilah bidang ilmu/masyarakat (Pelajaran 21 & 22).",
    "sourceBook": "Basic Kanji Book Vol. 1 (第21課・第22課 — Tamat Vol. 1)",
    "kanjiItems": [
      {
        "kanji": "練",
        "onyomi": "レン (ren)",
        "kunyomi": "ね(る) (neru)",
        "meaning": "Melatih / Mengasah",
        "compounds": [
          "練習する (れんしゅうする = berlatih)",
          "訓練 (くんれん = pelatihan/drill)"
        ]
      },
      {
        "kanji": "習",
        "onyomi": "シュウ (shuu)",
        "kunyomi": "なら(う) (narau)",
        "meaning": "Belajar / Berlatih",
        "compounds": [
          "習う (ならう = belajar dari guru)",
          "練習 (れんしゅう = latihan)",
          "復習 (ふくしゅう = mengulang pelajaran)",
          "習慣 (しゅうかん = kebiasaan)"
        ]
      },
      {
        "kanji": "勉",
        "onyomi": "ベン (ben)",
        "kunyomi": "-",
        "meaning": "Berusaha Keras",
        "compounds": [
          "勉強する (べんきょうする = belajar)"
        ]
      },
      {
        "kanji": "強",
        "onyomi": "キョウ・ゴウ (kyou / gou)",
        "kunyomi": "つよ(い) (tsuyoi)",
        "meaning": "Kuat",
        "compounds": [
          "強い (つよい = kuat)",
          "勉強 (べんきょう = belajar)"
        ]
      },
      {
        "kanji": "研",
        "onyomi": "ケン (ken)",
        "kunyomi": "と(ぐ) (togu)",
        "meaning": "Mengasah / Meneliti",
        "compounds": [
          "研究する (けんきゅうする = meneliti)",
          "研修 (けんしゅう = pelatihan kerja/training)",
          "研修生 (けんしゅうせい = peserta pelatihan)"
        ]
      },
      {
        "kanji": "究",
        "onyomi": "キュウ (kyuu)",
        "kunyomi": "きわ(める)",
        "meaning": "Menyelidiki / Mendalami",
        "compounds": [
          "研究 (けんきゅう = penelitian/riset)",
          "研究室 (けんきゅうしつ = ruang laboratorium/riset)"
        ]
      },
      {
        "kanji": "留",
        "onyomi": "リュウ・ル (ryuu / ru)",
        "kunyomi": "と(まる)・と(める)",
        "meaning": "Tinggal / Menetap Sementara",
        "compounds": [
          "留学する (りゅうがくする = kuliah di luar negeri)",
          "留学生 (りゅうがくせい = mahasiswa asing)",
          "在留カード (ざいりゅうかーど = kartu izin tinggal)",
          "留守 (るす = sedang tidak di rumah)"
        ]
      },
      {
        "kanji": "質",
        "onyomi": "シツ・シチ (shitsu)",
        "kunyomi": "-",
        "meaning": "Kualitas / Pertanyaan",
        "compounds": [
          "質問する (しつもんする = bertanya)",
          "品質 (ひんしつ = mutu/kualitas)"
        ]
      },
      {
        "kanji": "問",
        "onyomi": "モン (mon)",
        "kunyomi": "と(う) (tou)",
        "meaning": "Bertanya / Masalah",
        "compounds": [
          "質問 (しつもん = pertanyaan)",
          "問題 (もんだい = soal/masalah)",
          "訪問介護 (ほうもんかいご = layanan perawatan kunjungan rumah)"
        ]
      },
      {
        "kanji": "題",
        "onyomi": "ダイ (dai)",
        "kunyomi": "-",
        "meaning": "Judul / Topik / Soal",
        "compounds": [
          "問題 (もんだい = soal/masalah)",
          "宿題 (しゅくだい = pekerjaan rumah/PR)",
          "話題 (わだい = topik pembicaraan)"
        ]
      },
      {
        "kanji": "答",
        "onyomi": "トウ (tou)",
        "kunyomi": "こた(える)・こた(え)",
        "meaning": "Menjawab / Jawaban",
        "compounds": [
          "答える (こたえる = menjawab)",
          "答え (こたえ = jawaban)",
          "回答 (かいとう = tanggapan/jawaban)"
        ]
      },
      {
        "kanji": "宿",
        "onyomi": "シュク (shuku)",
        "kunyomi": "やど (yado)",
        "meaning": "Penginapan / Menginap",
        "compounds": [
          "宿題 (しゅくだい = PR)",
          "宿直 (しゅくちょく = piket jaga malam)"
        ]
      },
      {
        "kanji": "政",
        "onyomi": "セイ (sei)",
        "kunyomi": "まつりごと",
        "meaning": "Politik / Pemerintahan",
        "compounds": [
          "政治 (せいじ = politik)",
          "政府 (せいふ = pemerintah)"
        ]
      },
      {
        "kanji": "治",
        "onyomi": "ジ・チ (ji / chi)",
        "kunyomi": "なお(る)・なお(す)・おさ(める)",
        "meaning": "Menyembuhkan / Memerintah",
        "compounds": [
          "治る (なおる = sembuh dari penyakit)",
          "治療 (ちりょう = pengobatan/terapi medis)",
          "政治 (せいじ = politik)"
        ]
      },
      {
        "kanji": "経",
        "onyomi": "ケイ・キョウ (kei / kyou)",
        "kunyomi": "へ(る) (heru)",
        "meaning": "Melalui / Mengatur / Ekonomi",
        "compounds": [
          "経済 (けいざい = ekonomi)",
          "経験 (けいけん = pengalaman)",
          "経管栄養 (けいかんえいよう = nutrisi sonde/NGT)"
        ]
      },
      {
        "kanji": "済",
        "onyomi": "サイ・ザイ (sai / zai)",
        "kunyomi": "す(む) (sumu)",
        "meaning": "Selesai / Ekonomi",
        "compounds": [
          "経済 (けいざい = ekonomi)",
          "使用済み (しようずみ = sudah terpakai)"
        ]
      },
      {
        "kanji": "歴",
        "onyomi": "レキ (reki)",
        "kunyomi": "-",
        "meaning": "Perjalanan Waktu / Riwayat",
        "compounds": [
          "歴史 (れきし = sejarah)",
          "履歴書 (りれきしょ = CV / daftar riwayat hidup)"
        ]
      },
      {
        "kanji": "史",
        "onyomi": "シ (shi)",
        "kunyomi": "-",
        "meaning": "Sejarah / Catatan",
        "compounds": [
          "歴史 (れきし = sejarah)",
          "日本史 (にほんし = sejarah Jepang)"
        ]
      },
      {
        "kanji": "育",
        "onyomi": "イク (iku)",
        "kunyomi": "そだ(つ)・そだ(てる)",
        "meaning": "Mendidik / Membesarkan",
        "compounds": [
          "教育 (きょういく = pendidikan)",
          "体育館 (たいいくかん = gedung olahraga)",
          "育てる (そだてる = membesarkan/merawat)"
        ]
      },
      {
        "kanji": "化",
        "onyomi": "カ・ケ (ka / ke)",
        "kunyomi": "ば(ける) (bakeru)",
        "meaning": "Perubahan / Budaya",
        "compounds": [
          "文化 (ぶんか = budaya)",
          "化学 (かがく = ilmu kimia)",
          "化粧室 (けしょうしつ = ruang rias/toilet)",
          "高齢化 (こうれいか = penuaan populasi)"
        ]
      },
      {
        "kanji": "理",
        "onyomi": "リ (ri)",
        "kunyomi": "-",
        "meaning": "Logika / Prinsip / Menata",
        "compounds": [
          "料理 (りょうり = masakan)",
          "理由 (りゆう = alasan)",
          "無理 (むり = memaksakan diri/mustahil)",
          "理学療法士 (りがくりょうほうし = fisioterapis / PT)"
        ]
      },
      {
        "kanji": "科",
        "onyomi": "カ (ka)",
        "kunyomi": "-",
        "meaning": "Bidang Ilmu / Departemen Poli",
        "compounds": [
          "科学 (かがく = sains/ilmu pengetahuan)",
          "教科書 (きょうかしょ = buku pelajaran)",
          "内科 (ないか = poli penyakit dalam)"
        ]
      },
      {
        "kanji": "数",
        "onyomi": "スウ (suu)",
        "kunyomi": "かず・かぞ(える) (kazu / kazoeru)",
        "meaning": "Angka / Jumlah / Matematika",
        "compounds": [
          "数学 (すうがく = matematika)",
          "数字 (すうじ = angka)",
          "数える (かぞえる = menghitung)",
          "脈拍数 (みゃくはくすう = frekuensi denyut nadi)"
        ]
      },
      {
        "kanji": "医",
        "onyomi": "イ (i)",
        "kunyomi": "-",
        "meaning": "Kedokteran / Medis",
        "compounds": [
          "医者 (いしゃ = dokter)",
          "医学 (いがく = ilmu kedokteran)",
          "医療 (いりょう = layanan medis)",
          "主治医 (しゅじい = dokter penanggung jawab pasien)"
        ]
      }
    ],
    "sections": [
      {
        "title": "Pola Pembentukan Kata Benda Gabungan & Kata Kerja ～する",
        "content": "Pelajaran 21 & 22 menutup Basic Kanji Book Vol. 1 dengan rumus pembentukan kata majemuk (Jukugo) yang sangat sering keluar di JLPT N5/N4 dan ujian SSW:",
        "points": [
          {
            "title": "1. Gabungan Dua Kanji Bermakna Serupa",
            "desc": "Contoh: 練習 (練 melatih + 習 belajar = latihan), 勉強 (勉 berusaha + 強 kuat = belajar), 研究 (研 mengasah + 究 menyelidiki = riset)."
          },
          {
            "title": "2. Gabungan Dua Kanji Berlawanan / Berpasangan",
            "desc": "Contoh: 質問 (質 kualitas/inti + 問 bertanya = pertanyaan), 問題 (問 bertanya + 題 topik = soal), 売買 (jual-beli), 出入 (keluar-masuk)."
          },
          {
            "title": "3. Akhiran Penanda Bidang: ～学 (Ilmu), ～科 (Departemen/Poli), ～者 (Orang/Profesi)",
            "desc": "Contoh: 医学 (ilmu kedokteran), 内科 (poli penyakit dalam), 医者 (dokter), 高齢者 (lansia), 利用者 (pengguna layanan)."
          }
        ],
        "culturalTips": "Selamat! Dengan menuntaskan Unit 1 hingga Unit 10 ini, Anda telah mempelajari seluruh 22 Pelajaran (251 Kanji pokok dan ratusan kosakata gabungan) dari Basic Kanji Book Vol. 1."
      }
    ]
  },
  {
    "id": "kaigo_modul_1",
    "groupId": "kaigo",
    "chapterNumber": 1,
    "topic": "Bagian 1: Dasar Perawatan Lansia (介護の基本)",
    "title": "Modul 1: Martabat, Kemandirian, Etika & Kerja Sama Tim",
    "subtitle": "Songen no Hoji, Jiritsu Shien, QOL, Normalisasi, ADL/IADL, PDCA & Profesi Tim",
    "canDo": "Memahami filosofi dasar perawatan lansia Jepang (Martabat, Kemandirian, Normalisasi, QOL), etika profesi (Kerahasiaan & Larangan Pembatasan Fisik), jenis layanan asuransi perawatan, proses PDCA, serta kolaborasi tim lintas profesi.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 1 Bab 1–2) & Buku Kosakata Perawatan Lansia (Area 1)",
    "kanjiItems": [
      {
        "kanji": "尊厳",
        "onyomi": "ソンゲン (songen)",
        "kunyomi": "-",
        "meaning": "Martabat / Kehormatan Manusia",
        "compounds": [
          "尊厳の保持 (そんげんのほじ = menjaga martabat pengguna)",
          "個人の尊厳 (こじんのそんげん = martabat individu)"
        ]
      },
      {
        "kanji": "自立",
        "onyomi": "ジリツ (jiritsu)",
        "kunyomi": "-",
        "meaning": "Kemandirian",
        "compounds": [
          "自立支援 (じりつしえん = dukungan kemandirian)",
          "自己決定 (じこけってい = penentuan keputusan sendiri)"
        ]
      },
      {
        "kanji": "介護",
        "onyomi": "カイゴ (kaigo)",
        "kunyomi": "-",
        "meaning": "Perawatan Lansia / Caregiving",
        "compounds": [
          "介護福祉士 (かいごふくしし = Care Worker bersertifikat nasional)",
          "介護保険 (かいごほけん = asuransi perawatan lansia)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Filosofi & Konsep Dasar Perawatan Lansia (Buku Teks Bagian 1 Bab 1)",
        "content": "Inti dari seluruh ujian dan praktik perawatan lansia di Jepang bertumpu pada penghormatan terhadap kehidupan pengguna sebagai individu yang bermartabat:",
        "points": [
          {
            "title": "1. 尊厳の保持 (Songen no Hoji — Menjaga Martabat)",
            "desc": "Menghormati setiap pengguna layanan (利用者) sebagai pribadi yang berharga dan memiliki hak asasi manusia, apa pun kondisi fisik maupun kognitifnya."
          },
          {
            "title": "2. 自立支援 (Jiritsu Shien — Dukungan Kemandirian) & 自己決定 (Jiko Kettei)",
            "desc": "Memanfaatkan kemampuan tersisa (残存機能 / Zanzon kinou) pengguna agar tetap bisa melakukan hal yang mampu dilakukan sendiri, serta menghormati hak pengguna memilih dan memutuskan sendiri (Bukan melakukan semuanya untuk pasien)."
          },
          {
            "title": "3. QOL (クオリティ・オブ・ライフ / Kualitas Hidup)",
            "desc": "Meningkatkan kepuasan hidup, kebahagiaan, dan makna hidup pengguna sehari-hari melalui perawatan yang berpusat pada pengguna (利用者主体)."
          },
          {
            "title": "4. ノーマライゼーション (Normalisasi — Bank-Mikkelsen & Nirje)",
            "desc": "Gagasan bahwa penyandang disabilitas dan lansia berhak menjalani kehidupan normal di tengah masyarakat sama seperti warga lainnya, bukan diisolasi."
          },
          {
            "title": "5. ADL (日常生活動作) vs IADL (手段的日常生活動作)",
            "desc": "ADL adalah aktivitas dasar harian (berpindah, makan, ekskresi, mandi, ganti baju). IADL adalah aktivitas instrumental yang lebih kompleks (memasak, belanja, mencuci, mengatur uang, naik transportasi, minum obat)."
          }
        ]
      },
      {
        "title": "2. Etika Profesi, Privasi & Pencegahan Kekerasan (Bab 2)",
        "points": [
          {
            "title": "秘密保持 (Himitsu Hoji — Menjaga Kerahasiaan) & プライバシー保護",
            "desc": "Staf perawatan dilarang keras membocorkan informasi pribadi pengguna/keluarganya kepada pihak luar maupun di media sosial, bahkan setelah berhenti bekerja."
          },
          {
            "title": "身体拘束の禁止 (Shintai Kousoku no Kinshi — Larangan Pembatasan Fisik)",
            "desc": "Mengikat tubuh, memasang pagar tempat tidur 4 sisi sehingga tidak bisa turun, mengunci kamar, atau memberi obat penenang berlebihan dilarang pada prinsipnya karena merampas martabat dan menurunkan fungsi fisik."
          },
          {
            "title": "高齢者虐待の5類型 (5 Jenis Kekerasan terhadap Lansia)",
            "desc": "1) 身体的虐待 (Fisik), 2) 介護・世話の放棄・放任 / ネグレクト (Penelantaran/Neglect), 3) 心理的虐待 (Psikologis/Verbal), 4) 性的虐待 (Seksual), 5) 経済的虐待 (Ekonomi/ mengambil uang lansia)."
          },
          {
            "title": "介護過程 (Proses Perawatan Siklus PDCA)",
            "desc": "1) アセスメント (Assessment/Pengumpulan informasi) → 2) 介護計画の立案 (Plan/Menyusun rencana perawatan) → 3) 実施 (Do/Pelaksanaan perawatan) → 4) 評価 (Check & Action/Evaluasi hasil)."
          }
        ]
      },
      {
        "title": "3. Kosakata Layanan & Tim Kerja Sama Antarprofesi (多職種連携)",
        "vocabulary": [
          {
            "japanese": "利用者 (りようしゃ) / 高齢者 (こうれいしゃ)",
            "romaji": "Riyousha / Koureisha",
            "meaning": "Pengguna layanan (pasien lansia) / Lansia"
          },
          {
            "japanese": "訪問介護 (ほうもんかいご / ホームヘルプ)",
            "romaji": "Houmon kaigo",
            "meaning": "Layanan perawatan kunjungan ke rumah pengguna"
          },
          {
            "japanese": "通所介護 (つうしょかいご / デイサービス)",
            "romaji": "Tsuusho kaigo (Dei saabisu)",
            "meaning": "Layanan perawatan harian jalan (Day Service)"
          },
          {
            "japanese": "介護老人福祉施設 (特別養護老人ホーム)",
            "romaji": "Kaigo roujin fukushi shisetsu (Tokuyou)",
            "meaning": "Panti werdha perawatan intensif khusus lansia"
          },
          {
            "japanese": "介護支援専門員 (ケアマネジャー)",
            "romaji": "Kaigo shien senmon-in (Kea manejaa)",
            "meaning": "Care Manager (penyusun Care Plan / ケアプラン)"
          },
          {
            "japanese": "医師 (いし) / 看護師 (かんごし)",
            "romaji": "Ishi / Kangoshi",
            "meaning": "Dokter / Perawat medis (Nurse)"
          },
          {
            "japanese": "理学療法士 (PT) / 作業療法士 (OT) / 言語聴覚士 (ST)",
            "romaji": "Rigaku ryouhoushi / Sagyou ryouhoushi / Gengo choukaku-shi",
            "meaning": "Fisioterapis (PT) / Terapis Okupasi (OT) / Terapis Wicara & Menelan (ST)"
          },
          {
            "japanese": "管理栄養士 (かんりえいようし) / 生活相談員",
            "romaji": "Kanri eiyoushi / Seikatsu soudan-in",
            "meaning": "Ahli gizi terdaftar / Konselor kehidupan fasilitas"
          }
        ],
        "culturalTips": "Di fasilitas perawatan Jepang, penghuni lansia tidak dipanggil \"Kanja-san\" (Pasien), melainkan dipanggil dengan nama marganya diikuti \"～さん\" atau \"～様\" (seperti \"Takahashi-san\" atau \"Nomura-san\"), dan secara profesional disebut \"Riyousha-sama\" (利用者様 / Pengguna Layanan)."
      }
    ]
  },
  {
    "id": "kaigo_modul_2",
    "groupId": "kaigo",
    "chapterNumber": 2,
    "topic": "Bagian 2: Anatomi Tubuh, Organ Dalam & Tanda Vital",
    "title": "Modul 2: Bagian Tubuh Manusia & Pemeriksaan Tanda Vital (バイタルサイン)",
    "subtitle": "Kosakata Anatomi Lengkap, Organ Dalam, Suhu, Nadi, Pernapasan, Tekanan Darah & SpO2",
    "canDo": "Menguasai kosakata anatomi tubuh luar dan organ dalam dari Kaigo no Nihongo & Buku Kosakata, serta mampu melakukan pemeriksaan dan koekake Tanda Vital (バイタルサイン).",
    "sourceBook": "Kaigo no Nihongo (Bab 6 & Lampiran Tubuh), Buku Kosakata (Area 3) & Buku Teks Ujian (Bagian 2 Bab 1)",
    "kanjiItems": [
      {
        "kanji": "体温",
        "onyomi": "タイオン (taion)",
        "kunyomi": "-",
        "meaning": "Suhu Tubuh",
        "compounds": [
          "体温 (たいおん = suhu tubuh)",
          "体温計 (たいおんけい = termometer)",
          "検温 (けんおん = pengukuran suhu tubuh)"
        ]
      },
      {
        "kanji": "血圧",
        "onyomi": "ケツアツ (ketsuatsu)",
        "kunyomi": "-",
        "meaning": "Tekanan Darah",
        "compounds": [
          "血圧 (けつあつ = tekanan darah)",
          "血圧計 (けつあつけい = tensimeter)",
          "高血圧 (こうけつあつ = hipertensi)"
        ]
      },
      {
        "kanji": "脈拍",
        "onyomi": "ミャクハク (myakuhaku)",
        "kunyomi": "-",
        "meaning": "Denyut Nadi",
        "compounds": [
          "脈拍 (みゃくはく = denyut nadi)",
          "頻脈 (ひんみゃく = takikardia/nadi cepat)",
          "徐脈 (じょみゃく = bradikardia/nadi lambat)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Kosakata Anatomi Kepala, Wajah, Tangan & Kaki (身体の部位)",
        "content": "Istilah anatomi spesifik yang wajib dikuasai untuk membaca petunjuk perawatan (seperti menyeka mata dari 目頭 ke 目尻) dan melaporkan luka/kemerahan:",
        "vocabulary": [
          {
            "japanese": "頭 (あたま) / 顔 (かお) / 額 (ひたい) / 頬 (ほほ・ほお)",
            "romaji": "Atama / Kao / Hitai / Hoho",
            "meaning": "Kepala / Wajah / Dahi (Jidat) / Pipi"
          },
          {
            "japanese": "目頭 (めがしら) / 目尻 (めじり) / まぶた",
            "romaji": "Megashira / Mejiri / Mabuta",
            "meaning": "Sudut dalam mata (dekat hidung) / Sudut luar mata / Kelopak mata"
          },
          {
            "japanese": "唇 (くちびる) / 舌 (した) / 歯ぐき / 顎 (あご)",
            "romaji": "Kuchibiru / Shita / Haguki / Ago",
            "meaning": "Bibir / Lidah / Gusi / Dagu & Rahang"
          },
          {
            "japanese": "首 (くび) / 喉 (のど) / 肩 (かた) / 脇の下 (わきのした / 腋窩)",
            "romaji": "Kubi / Nodo / Kata / Waki no shita (Ekika)",
            "meaning": "Leher / Tenggorokan / Bahu / Ketiak (tempat ukur suhu)"
          },
          {
            "japanese": "腕 (うで) / 肘 (ひじ) / 手首 (てくび)",
            "romaji": "Ude / Hiji / Tekubi",
            "meaning": "Lengan / Siku / Pergelangan tangan"
          },
          {
            "japanese": "手のひら (手掌) / 手の甲 (てのこう / 手背)",
            "romaji": "Te no hira / Te no kou",
            "meaning": "Telapak tangan / Punggung tangan"
          },
          {
            "japanese": "親指 / 人差し指 / 中指 / 薬指 / 小指",
            "romaji": "Oyayubi / Hitosashiyubi / Nakayubi / Kusuriyubi / Koyubi",
            "meaning": "Ibu jari / Telunjuk / Jari tengah / Jari manis / Kelingking"
          },
          {
            "japanese": "胸 (むね) / 腹・おなか / 背中 (せなか) / 腰 (こし) / 臀部 (でんぶ・おしり)",
            "romaji": "Mune / Onaka / Senaka / Koshi / Denbu (Oshiri)",
            "meaning": "Dada / Perut / Punggung / Pinggang / Bokong"
          },
          {
            "japanese": "足のつけ根 (鼠径部) / 太もも (大腿) / 膝 (ひざ)",
            "romaji": "Ashi no tsukene / Futomomo / Hiza",
            "meaning": "Pangkal paha (lipat paha) / Paha / Lutut"
          },
          {
            "japanese": "すね / ふくらはぎ / 足首 / 踵 (かかと) / 足底 (足の裏)",
            "romaji": "Sune / Fukurahagi / Ashikubi / Kakato / Sokutei (Ashi no ura)",
            "meaning": "Tulang kering / Betis / Pergelangan kaki / Tumit / Telapak kaki"
          }
        ]
      },
      {
        "title": "2. Organ Dalam (内臓) & 4 Tanda Vital Utama (バイタルサイン)",
        "vocabulary": [
          {
            "japanese": "脳 (のう) / 気管 (きかん) / 肺 (はい) / 心臓 (しんぞう)",
            "romaji": "Nou / Kikan / Hai / Shinzou",
            "meaning": "Otak / Trakea (batang tenggorok) / Paru-paru / Jantung"
          },
          {
            "japanese": "食道 (しょくどう) / 胃 (い) / 肝臓 (かんぞう) / 腎臓 (じんぞう)",
            "romaji": "Shokudou / I / Kanzou / Jinzou",
            "meaning": "Kerongkongan (esofagus) / Lambung / Hati (lever) / Ginjal"
          },
          {
            "japanese": "小腸 (しょうちょう) / 大腸 (だいちょう) / 直腸 / 膀胱 (ぼうこう)",
            "romaji": "Shouchou / Daichou / Chokuchou / Boukou",
            "meaning": "Usus halus / Usus besar / Rektum / Kandung kemih"
          },
          {
            "japanese": "バイタルサイン — 体温・脈拍・呼吸・血圧（＋意識・SpO2）",
            "romaji": "Baitaru sain — Taion, Myakuhaku, Kokyuu, Ketsuatsu",
            "meaning": "Tanda Vital: Suhu tubuh, Denyut nadi, Pernapasan, Tekanan darah (+ Kesadaran & SpO2)"
          },
          {
            "japanese": "パルスオキシメーター / 経皮的動脈血酸素飽和度 (SpO2)",
            "romaji": "Parusu okishimeetaa / SpO2",
            "meaning": "Pulse oximeter (alat ukur saturasi oksigen di ujung jari)"
          }
        ],
        "points": [
          {
            "title": "Poin Pemeriksaan Tanda Vital Lansia",
            "desc": "Suhu tubuh normal lansia cenderung sedikit lebih rendah dari orang muda (ukur di ketiak/腋窩 yang kering dari keringat). Tekanan darah diukur saat tenang (hindari langsung sesudah mandi, makan, atau olahraga)."
          }
        ]
      },
      {
        "title": "3. Percakapan Kaigo no Nihongo: Mengukur Suhu Tubuh (Bab 6: 体調管理)",
        "dialogues": [
          {
            "speaker": "Al-san (Staf Perawat)",
            "text": "野村さん、おはようございます。お体の 調子は いかがですか？",
            "translation": "Nomura-san, selamat pagi. Bagaimana kondisi tubuh Anda?"
          },
          {
            "speaker": "Nomura-san (Pengguna)",
            "text": "うーん、ちょっと 体が だるいねえ。",
            "translation": "Hmm, badan saya rasanya agak lemas ya."
          },
          {
            "speaker": "Al-san (Staf Perawat)",
            "text": "そうですか。では、熱を 測りましょうか。脇の下に 体温計を はさみますね。失礼します。",
            "translation": "Begitu ya. Kalau begitu, mari kita ukur suhu tubuhnya ya. Saya jepitkan termometernya di ketiak ya. Permisi."
          },
          {
            "speaker": "Al-san (Staf Perawat)",
            "text": "37度5分ですね。少し 熱が ありますね。看護師さんに 報告しますから、ベッドで 休んでいてください。",
            "translation": "37,5 derajat ya. Ada sedikit demam ya. Karena saya akan melapor kepada perawat medis (Kangoshi), silakan beristirahat di tempat tidur."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_3",
    "groupId": "kaigo",
    "chapterNumber": 3,
    "topic": "Bagian 2: Penuaan, Penyakit, Demensia & Disabilitas",
    "title": "Modul 3: Karakteristik Penuaan, Penyakit Lansia, Demensia & ICF",
    "subtitle": "Hierarki Maslow, Memori, Dehidrasi, Dekubitus, 4 Tipe Demensia (Gejala Inti vs BPSD) & ICF",
    "canDo": "Memahami perubahan fisik/psikologis akibat penuaan, kebutuhan dasar Maslow, penyakit & gejala khas lansia, perbedaan 4 tipe Demensia beserta Gejala Inti vs BPSD, dan klasifikasi ICF.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 2 Bab 1–2) & Buku Kosakata Perawatan Lansia (Area 3)",
    "kanjiItems": [
      {
        "kanji": "認知症",
        "onyomi": "ニンチショウ (ninchishou)",
        "kunyomi": "-",
        "meaning": "Demensia (Gangguan Kognitif)",
        "compounds": [
          "認知症 (にんちしょう = demensia)",
          "中核症状 (ちゅうかくしょうじょう = gejala inti)",
          "行動・心理症状 (BPSD)"
        ]
      },
      {
        "kanji": "褥瘡",
        "onyomi": "ジョクソウ (jokusou)",
        "kunyomi": "とこずれ (tokozure)",
        "meaning": "Luka Tekan / Dekubitus",
        "compounds": [
          "褥瘡 (じょくそう／とこずれ = luka baring dekubitus)",
          "体位変換 (たいいへんかん = perubahan posisi tidur setiap 2 jam)"
        ]
      },
      {
        "kanji": "脱水",
        "onyomi": "ダッスイ (dassui)",
        "kunyomi": "-",
        "meaning": "Dehidrasi (Kekurangan Cairan)",
        "compounds": [
          "脱水症状 (だっすいしょうじょう = gejala dehidrasi)",
          "水分補給 (すいぶんほきゅう = asupan cairan)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Psikologi Lansia (Maslow & Memori) serta Klasifikasi Disabilitas ICF",
        "points": [
          {
            "title": "Hierarki 5 Kebutuhan Maslow (マズローの欲求階層説)",
            "desc": "1) 生理的欲求 (Fisiologis: makan, tidur, ekskresi) → 2) 安全の欲求 (Rasa Aman) → 3) 所属と愛の欲求 (Sosial & Kasih Sayang) → 4) 承認の欲求 (Penghargaan) → 5) 自己実現の欲求 (Aktualisasi Diri)."
          },
          {
            "title": "Jenis Memori (記憶の種類)",
            "desc": "エピソード記憶 (Memori Episodik: pengalaman pribadi, mudah menurun akibat penuaan/demensia), 意味記憶 (Memori Semantik: pengetahuan kata), 手続き記憶 (Memori Prosedural: keterampilan tubuh seperti naik sepeda/berenang, paling bertahan lama)."
          },
          {
            "title": "ICF (国際生活機能分類 — Klasifikasi Fungsional Internasional WHO)",
            "desc": "Melihat manusia secara utuh melalui interaksi antara: 健康状態 (Kondisi Kesehatan), 心身機能・身体構造 (Fungsi & Struktur Tubuh), 活動 (Aktivitas), 参加 (Partisipasi Sosial), 環境因子 (Faktor Lingkungan), dan 個人因子 (Faktor Individu)."
          }
        ]
      },
      {
        "title": "2. Empat Tipe Utama Demensia (認知症) & Gejala Inti vs BPSD",
        "points": [
          {
            "title": "1. アルツハイマー型認知症 (Demensia Tipe Alzheimer — Paling Banyak)",
            "desc": "Otak mengalami atrofi (penyusutan) secara perlahan; diawali lupa kejadian yang baru saja dialami (misal lupa bahwa sudah makan, bukan sekadar lupa menu makanan)."
          },
          {
            "title": "2. 血管性認知症 (Demensia Vaskular)",
            "desc": "Disebabkan oleh infark serebral/perdarahan otak; gejalanya berkembang bertahap (stepwise) dan muncul \"まだら認知症\" (kemampuan yang menurun dan yang masih baik bercampur tidak merata)."
          },
          {
            "title": "3. レビー小体型認知症 (Demensia Badan Lewy)",
            "desc": "Ciri khasnya adalah 幻視 (Halusinasi visual yang sangat nyata), gejala mirip Parkinson (otot kaku, langkah pendek, mudah jatuh), dan gangguan perilaku tidur REM."
          },
          {
            "title": "4. 前頭側頭型認知症 (Demensia Frontotemporal / Penyakit Pick)",
            "desc": "Perubahan kepribadian mencolok, perilaku berulang yang sama terus-menerus (常同行動), dan hilangnya kendali sosial/inhibisi."
          },
          {
            "title": "中核症状 (Gejala Inti) vs BPSD (行動・心理症状 / Gejala Perilaku & Psikologis)",
            "desc": "Gejala Inti dialami semua penderita karena kerusakan sel otak: 記憶障害 (gangguan memori), 見当識障害 (disorientasi waktu/tempat/orang), 実行機能障害 (gangguan merencanakan), 失語・失行・失認. BPSD dipengaruhi faktor lingkungan/psikologis: 徘徊 (keluyuran/wandering), 物盗られ妄想 (delusi barang dicuri), 興奮・暴言 (agitasi), 抑うつ (depresi)."
          }
        ]
      },
      {
        "title": "3. Kosakata Penyakit & Gejala Khas Lansia (症状・疾病)",
        "vocabulary": [
          {
            "japanese": "脳血管疾患 (のうけっかんしっかん) — 脳梗塞・脳出血",
            "romaji": "Noukekkan shikkan (Noukousoku / Noushukketsu)",
            "meaning": "Penyakit serebrovaskular (Stroke infark / Stroke perdarahan)"
          },
          {
            "japanese": "誤嚥性肺炎 (ごえんせいはいえん)",
            "romaji": "Goensei haien",
            "meaning": "Pneumonia aspirasi (radang paru akibat makanan/air liur masuk ke trakea)"
          },
          {
            "japanese": "骨粗鬆症 (こつそしょうしょう) / 骨折 (こっせつ)",
            "romaji": "Kotsusoshoushou / Kossetsu",
            "meaning": "Osteoporosis (pengeroposan tulang) / Patah tulang (sering di pangkal paha/大腿骨頸部)"
          },
          {
            "japanese": "廃用症候群 (はいようしょうこうぐん)",
            "romaji": "Haiyou shoukougun",
            "meaning": "Sindrom disuse (penurunan fungsi tubuh akibat terlalu lama tirah baring)"
          },
          {
            "japanese": "褥瘡 (じょくそう / 床ずれ)",
            "romaji": "Jokusou (Tokozure)",
            "meaning": "Luka tekan dekubitus pada tonjolan tulang (sakrum, tumit, siku)"
          },
          {
            "japanese": "脱水 (だっすい) / 浮腫 (ふしゅ・むくみ) / チアノーゼ",
            "romaji": "Dassui / Fushu (Mukumi) / Chianooze",
            "meaning": "Dehidrasi / Edema (bengkak cairan) / Sianosis (bibir/kuku membiru karena kurang oksigen)"
          },
          {
            "japanese": "掻痒感 (そうようかん・かゆみ) / 便秘 (べんぴ) / 不眠 (ふみん)",
            "romaji": "Souyoukan (Kayumi) / Benpi / Fumin",
            "meaning": "Rasa gatal (kulit kering lansia) / Konstipasi (sembelit) / Insomnia"
          },
          {
            "japanese": "片麻痺 (かたまひ) — 右麻痺・左麻痺",
            "romaji": "Katamahi (Migimahi / Hidarimahi)",
            "meaning": "Hemiplegia / Kelumpuhan separuh tubuh (kanan / kiri akibat stroke)"
          }
        ],
        "culturalTips": "Prinsip komunikasi menghadapi lansia dengan Demensia (認知症ケア): Jangan pernah membantah, menyalahkan, atau memarahi (否定しない・叱らない). Terima perasaan cemas mereka terlebih dahulu (受容・共感) dengan tatapan sejajar mata (目線を合わせる)."
      }
    ]
  },
  {
    "id": "kaigo_modul_4",
    "groupId": "kaigo",
    "chapterNumber": 4,
    "topic": "Bagian 3: Keterampilan Komunikasi & Sapaan Harian",
    "title": "Modul 4: Keterampilan Komunikasi, 7 Prinsip Biestek & Sapaan Harian",
    "subtitle": "Biestek, Menyimak (Keichou), Komunikasi Gangguan Indera & Koekake Pagi–Malam",
    "canDo": "Menerapkan 7 Prinsip Biestek, teknik menyimak aktif (傾聴), komunikasi sesuai jenis disabilitas (penglihatan, pendengaran, afasia, demensia), serta sapaan harian pagi hingga malam dari Kaigo no Nihongo.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 3 Bab 1–2) & Kaigo no Nihongo (Part I Bab 6–8, Part II Bab 6)",
    "kanjiItems": [
      {
        "kanji": "傾聴",
        "onyomi": "ケイチョウ (keichou)",
        "kunyomi": "-",
        "meaning": "Menyimak dengan Sungguh-sungguh (Active Listening)",
        "compounds": [
          "傾聴 (けいちょう = mendengarkan penuh perhatian)",
          "共感 (きょうかん = empati)",
          "受容 (じゅよう = menerima perasaan pengguna)"
        ]
      },
      {
        "kanji": "失語症",
        "onyomi": "シツゴショウ (shitsugoshou)",
        "kunyomi": "-",
        "meaning": "Afasia (Gangguan Berbahasa Akibat Kerusakan Otak)",
        "compounds": [
          "失語症 (しつごしょう = afasia)",
          "構音障害 (こうおんしょうがい = disartria/gangguan artikulasi)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Dasar Komunikasi & 7 Prinsip Biestek (バイスティックの7原則)",
        "content": "Hubungan saling percaya (信頼関係 / ラポール) dibangun melalui komunikasi verbal (言語的) dan nonverbal (非言語的: ekspresi wajah, kontak mata, anggukan, sentuhan lembut):",
        "points": [
          {
            "title": "1. 個別化の原則 (Individualisasi) & 2. 意図的な感情表出 (Ekspresi Perasaan Secara Sadar)",
            "desc": "Memperlakukan setiap pengguna sebagai individu unik, serta menciptakan suasana aman agar pengguna bebas mengungkapkan perasaannya."
          },
          {
            "title": "3. 統制された情緒的関与 (Keterlibatan Emosional Terkendali) & 4. 受容 (Penerimaan / Juyou)",
            "desc": "Merespons perasaan pengguna secara empatik namun tetap tenang, serta menerima pengguna apa adanya tanpa menghakimi."
          },
          {
            "title": "5. 非審判的態度 (Sikap Tidak Menghakimi), 6. 自己決定 (Penentuan Nasib Sendiri), 7. 秘密保持 (Kerahasiaan)",
            "desc": "Tidak menyalahkan nilai/perilaku pengguna, mendukung keputusan pengguna sendiri, dan menjaga privasi."
          },
          {
            "title": "閉ざされた質問 (Pertanyaan Tertutup) vs 開かれた質問 (Pertanyaan Terbuka)",
            "desc": "Pertanyaan tertutup (Closed question) dijawab singkat \"Ya/Tidak\" atau memilih (cocok untuk pasien afasia/kesulitan bicara). Pertanyaan terbuka (Open question) memberi kebebasan pengguna bercerita panjang."
          }
        ]
      },
      {
        "title": "2. Komunikasi Berdasarkan Kondisi Disabilitas Pengguna (Buku Teks Bagian 3 Bab 2)",
        "points": [
          {
            "title": "視覚障害 (Gangguan Penglihatan)",
            "desc": "Sapa dan sebutkan nama diri Anda sebelum menyentuh tubuh pengguna; jelaskan posisi benda secara konkret menggunakan metode posisi arah jarum jam (クロックポジション) atau arah kanan/kiri."
          },
          {
            "title": "聴覚障害 (Gangguan Pendengaran)",
            "desc": "Berbicara dari arah depan agar gerak bibir dan ekspresi terlihat jelas; gunakan kalimat singkat dengan suara jelas (jangan berteriak di telinga), bantu dengan tulisan (筆談 / Hitsudan) atau isyarat."
          },
          {
            "title": "失語症 (Afasia)",
            "desc": "Gunakan kalimat pendek, sederhana, satu per satu, manfaatkan gambar/benda nyata (イラスト・実物), serta gunakan pertanyaan tertutup (はい／いいえで答えられる質問)."
          }
        ]
      },
      {
        "title": "3. Kosakata & Ungkapan Sapaan Harian (Kaigo no Nihongo Part I & II)",
        "vocabulary": [
          {
            "japanese": "おはようございます。よく眠れましたか？",
            "romaji": "Ohayou gozaimasu. Yoku nemuremashita ka?",
            "meaning": "Selamat pagi. Apakah tadi malam bisa tidur nyenyak?"
          },
          {
            "japanese": "カーテンを開けても いいですか？",
            "romaji": "Kaaten o aketemo ii desu ka?",
            "meaning": "Bolehkah saya membuka tirainya?"
          },
          {
            "japanese": "いい天気ですね / 今日は少し寒いですね",
            "romaji": "Ii tenki desu ne / Kyou wa sukoshi samui desu ne",
            "meaning": "Cuacanya bagus ya / Hari ini agak dingin ya"
          },
          {
            "japanese": "おやすみなさい。また明日。",
            "romaji": "Oyasuminasai. Mata ashita.",
            "meaning": "Selamat beristirahat malam. Sampai besok."
          },
          {
            "japanese": "お疲れ様でした。お先に失礼します。",
            "romaji": "Otsukaresama deshita. Osaki ni shitsurei shimasu.",
            "meaning": "Terima kasih atas kerja kerasnya. Saya permisi pulang duluan."
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Bangun Pagi & Sebelum Tidur",
        "dialogues": [
          {
            "speaker": "Ellen-san (Staf Perawat)",
            "text": "高橋さん、おはようございます。朝ですよ。よく 眠れましたか？",
            "translation": "Takahashi-san, selamat pagi. Sudah pagi lho. Apakah tidur nyenyak?"
          },
          {
            "speaker": "Takahashi-san (Pengguna)",
            "text": "ああ、おはよう。うん、よく 寝たよ。",
            "translation": "Oh, selamat pagi. Ya, tidurku nyenyak."
          },
          {
            "speaker": "Ellen-san (Staf Perawat)",
            "text": "よかったです。カーテンを 開けても いいですか？",
            "translation": "Syukurlah. Bolehkah saya membuka tirainya?"
          },
          {
            "speaker": "Takahashi-san (Pengguna)",
            "text": "ああ、いいよ。ありがとう。",
            "translation": "Ya, silakan. Terima kasih."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_5",
    "groupId": "kaigo",
    "chapterNumber": 5,
    "topic": "Bagian 4 Bab 1: Perawatan untuk Berpindah (移動の介護)",
    "title": "Modul 5: Posisi Tubuh, Mekanika Tubuh, Tongkat & Kursi Roda",
    "subtitle": "7 Posisi Tubuh, 8 Prinsip Body Mechanics, Urutan Jalan Tongkat/Tangga & Kursi Roda",
    "canDo": "Menguasai istilah posisi tubuh (体位), 8 prinsip mekanika tubuh (ボディメカニクス), prosedur berpindah (移乗・移動) dengan tongkat maupun kursi roda untuk pasien hemiplegia, serta koekake pendampingan jalan.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 1 Bab 3 & Bagian 4 Bab 1), Buku Kosakata & Kaigo no Nihongo (Bab 2)",
    "kanjiItems": [
      {
        "kanji": "移乗",
        "onyomi": "イジョウ (ijou)",
        "kunyomi": "-",
        "meaning": "Transfer / Berpindah (misal dari Tempat Tidur ke Kursi Roda)",
        "compounds": [
          "移乗介助 (いじょうかいじょ = bantuan transfer)",
          "移動 (いどう = berpindah tempat)"
        ]
      },
      {
        "kanji": "健側・患側",
        "onyomi": "ケンソク・カンソク",
        "kunyomi": "-",
        "meaning": "Sisi Tubuh Sehat (健側) & Sisi Tubuh Sakit/Lumpuh (患側)",
        "compounds": [
          "健側 (けんそく = sisi sehat)",
          "患側 (かんそく = sisi sakit/lumpuh)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Tujuh Posisi Tubuh (体位) & 8 Prinsip Mekanika Tubuh (ボディメカニクス)",
        "points": [
          {
            "title": "7 Posisi Tubuh Utama (体位の種類)",
            "desc": "1) 仰臥位 / 背臥位 (Gyougai / আおむけ = Terlentang), 2) 側臥位 (Sokugai / よこむき = Miring), 3) 腹臥位 (Fukugai / うつぶせ = Tengkurap), 4) 端座位 (Tanzai = Duduk di tepi tempat tidur dengan kaki menjuntai), 5) 椅座位 (Izai = Duduk di kursi), 6) 半座位 / ファーラー位 (Fowler = Setengah duduk 45°), 7) 立位 (Ritsui = Berdiri)."
          },
          {
            "title": "8 Prinsip Mekanika Tubuh (ボディメカニクスの原則 — Mencegah Sakit Pinggang)",
            "desc": "1) Perluas landasan penopang (支持基底面を広くする — buka kedua kaki), 2) Rendahkan titik berat tubuh (重心を低くする — tekuk lutut), 3) Dekatkan pusat gravitasi perawat dengan pengguna (重心を近づける), 4) Gunakan otot besar (paha/tungkai) bukan hanya otot punggung, 5) Kecilkan tubuh pengguna menjadi kompak (전신을小さくまとめる), 6) Tarik ke arah diri sendiri (引く方が楽), 7) Geser secara horizontal tanpa mengangkat tinggi, 8) Jangan memilin pinggang (体をねじらない — arahkan ujung kaki ke tujuan)."
          }
        ]
      },
      {
        "title": "2. Aturan Emas Berjalan dengan Tongkat (杖歩行) & Kursi Roda (車いす)",
        "points": [
          {
            "title": "Posisi Memegang Tongkat & Posisi Staf Perawat",
            "desc": "Pengguna memegang tongkat (杖 / Tsue) di tangan SISI SEHAT (健側). Staf perawat berdiri di SISI SAKIT/LUMPUH (患側) sedikit di belakang untuk menjaga keseimbangan."
          },
          {
            "title": "Urutan Jalan Datar 3 Gerakan (三動作歩行) & 2 Gerakan (二動作歩行)",
            "desc": "3 Gerakan: ➊ Tongkat (杖) → ➋ Kaki Sakit (患側) → ➌ Kaki Sehat (健側). 2 Gerakan: ➊ Tongkat + Kaki Sakit bersamaan → ➋ Kaki Sehat."
          },
          {
            "title": "Urutan NAIK Tangga vs TURUN Tangga (Sangat Sering Keluar di Ujian!)",
            "desc": "Saat NAIK tangga: ➊ Tongkat (杖) → ➋ Kaki SEHAT (健側) → ➌ Kaki SAKIT (患側). Saat TURUN tangga: ➊ Tongkat (杖) → ➋ Kaki SAKIT (患側) → ➌ Kaki SEHAT (健側)."
          },
          {
            "title": "Prosedur Kursi Roda di Tanjakan, Turunan & Gundukan (段差)",
            "desc": "Melewati gundukan naik: injak ティッピングレバー (tipping lever) agar roda depan (キャスター) terangkat. Saat menuruni jalan menurun yang curam: kursi roda dijalankan MUNDUR (後ろ向き) dengan perawat menahan di bawah agar pengguna tidak terjungkal ke depan."
          }
        ]
      },
      {
        "title": "3. Kosakata Tempat Tidur & Alat Bantu Berpindah (Kaigo no Nihongo Bab 2)",
        "vocabulary": [
          {
            "japanese": "車いす — ハンドグリップ・ブレーキ・フットサポート・キャスター",
            "romaji": "Kurumaisu — Handogurippu, Bureeki, Futtosapooto, Kyasutaa",
            "meaning": "Kursi roda — Pegangan tangan, Rem, Pijakan kaki (Footrest), Roda kecil depan"
          },
          {
            "japanese": "T字杖 (Tじづえ) / 多点杖 (たてんづえ) / 歩行器 / シルバーカー",
            "romaji": "Tiijizue / Tatenzue / Hokouki / Shirubaakaa",
            "meaning": "Tongkat huruf T / Tongkat kaki empat / Walker / Troli jalan lansia"
          },
          {
            "japanese": "スライディングボード / スライディングシート / 移動用リフト",
            "romaji": "Suraidingu boodo / Suraidingu shiito / Idouyou rifuto",
            "meaning": "Papan geser transfer / Lembar kain geser / Lift pemindah pasien"
          },
          {
            "japanese": "ベッド柵 (サイドレール) / 介助バー / オーバーベッドテーブル / 床頭台",
            "romaji": "Beddosaku / Kaijobaa / Oobaabeddo teeburu / Shoutoudai",
            "meaning": "Pagar pengaman ranjang / Palang pegangan ranjang / Meja ranjang / Lemari nakas samping ranjang"
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Berpindah ke Kursi Roda & Mengubah Posisi",
        "dialogues": [
          {
            "speaker": "Huang-san (Staf Perawat)",
            "text": "小林さん、食堂へ 行きますから、ベッドから 車いすに 移りましょうか。",
            "translation": "Kobayashi-san, karena kita akan pergi ke ruang makan, mari berpindah dari tempat tidur ke kursi roda ya."
          },
          {
            "speaker": "Kobayashi-san (Pengguna)",
            "text": "はい、お願いします。",
            "translation": "Ya, tolong ya."
          },
          {
            "speaker": "Huang-san (Staf Perawat)",
            "text": "まず、ブレーキが かかっているか 確認しますね。フットサポートを 上げて、足を 床に つけましょう。「いち、に、さん」で 立ちますよ。",
            "translation": "Pertama, saya pastikan dulu remnya sudah terkunci ya. Saya naikkan pijakan kakinya, lalu mari tapakkan kaki ke lantai. Kita berdiri pada hitungan \"satu, dua, tiga\" ya."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_6",
    "groupId": "kaigo",
    "chapterNumber": 6,
    "topic": "Bagian 4 Bab 2: Perawatan untuk Makan (食事の介護)",
    "title": "Modul 6: Makan, 5 Fase Menelan, Posisi Jam & Pencegahan Aspirasi",
    "subtitle": "5 Fase Deglutisi, Bentuk Makanan, Clock Position, Nutrisi & Koekake Makan",
    "canDo": "Memahami mekanisme 5 fase makan/menelan (摂食・嚥下の5期), postur makan yang aman untuk mencegah aspirasi (誤嚥), berbagai tekstur makanan lansia, metode Posisi Jam, serta koekake pendampingan makan.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 4 Bab 2), Buku Kosakata & Kaigo no Nihongo (Bab 1)",
    "kanjiItems": [
      {
        "kanji": "嚥下",
        "onyomi": "エンゲ (enge)",
        "kunyomi": "の(みこむ)",
        "meaning": "Menelan (Deglutisi)",
        "compounds": [
          "嚥下障害 (えんげしょうがい = disfagia/gangguan menelan)",
          "摂食・嚥下 (せっしょく・えんげ = makan dan menelan)"
        ]
      },
      {
        "kanji": "誤嚥",
        "onyomi": "ゴエン (goen)",
        "kunyomi": "-",
        "meaning": "Aspirasi / Tersedak Masuk ke Trakea",
        "compounds": [
          "誤嚥 (ごえん = salah telan masuk ke saluran napas)",
          "誤嚥性肺炎 (ごえんせいはいえん = pneumonia aspirasi)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Lima Fase Makan & Menelan (摂食・嚥下の5期 — Buku Teks Bagian 4 Bab 2)",
        "content": "Memahami 5 tahapan menelan sangat penting untuk mengenali di fase mana pengguna mengalami gangguan:",
        "points": [
          {
            "title": "1. 先行期 (Senkouki — Fase Antisipasi/Kognitif)",
            "desc": "Mengenali makanan melalui mata dan penciuman (melihat bentuk, warna, mencium aroma) sehingga keluar air liur (唾液)."
          },
          {
            "title": "2. 準備期 (Junbiki — Fase Persiapan/Mastikasi)",
            "desc": "Mengunyah makanan di dalam mulut (咀嚼 / Soshaku) dan mencampurnya dengan air liur hingga membentuk gumpalan siap telan (食塊 / Shokkai)."
          },
          {
            "title": "3. 口腔期 (Koukuuki — Fase Oral)",
            "desc": "Lidah mendorong gumpalan makanan (食塊) dari rongga mulut menuju ke faring/tenggorokan (咽頭)."
          },
          {
            "title": "4. 咽頭期 (Intouki — Fase Faringeal)",
            "desc": "Refleks menelan: katup epiglotis (喉頭蓋 / Koutougai) menutup trakea (気管) agar makanan tidak salah masuk ke paru-paru, lalu makanan terdorong masuk ke esofagus."
          },
          {
            "title": "5. 食道期 (Shokudouki — Fase Esofageal)",
            "desc": "Gerak peristaltik kerongkongan (食道) membawa makanan turun menuju ke lambung (胃)."
          }
        ]
      },
      {
        "title": "2. Prosedur Bantuan Makan yang Aman & Metode Posisi Jam (クロックポジション)",
        "points": [
          {
            "title": "Postur Makan yang Benar",
            "desc": "Dudukkan pengguna dengan telapak kaki menapak lantai, badan agak condong ke depan, dan dagu sedikit ditarik ke dalam (顎を引く / Chin-down) agar trakea menyempit dan mencegah aspirasi (誤嚥). Jangan mendongakkan kepala!"
          },
          {
            "title": "Urutan Memberi Makan & Sisi Mulut",
            "desc": "Awali dengan minum teh/air untuk membasahi mulut. Masukkan makanan dari arah bawah (bukan dari atas mata) ke SISI MULUT YANG SEHAT (健側). Suapkan bergantian antara nasi, lauk utama, sayur, dan kuah. Sesudah selesai makan, pertahankan posisi duduk 30 menit untuk mencegah refluks asam lambung."
          },
          {
            "title": "クロックポジション (Clock Position — Untuk Gangguan Penglihatan)",
            "desc": "Menjelaskan letak piring di atas nampan menggunakan arah jarum jam: Pukul 6 (6時 = Nasi / ご飯), Pukul 4 (4時 = Sup Miso / 味噌汁), Pukul 12 (12時 = Lauk Utama / 主菜), Pukul 9 & 2 (Lauk Pendamping / 副菜)."
          }
        ]
      },
      {
        "title": "3. Kosakata Bentuk Makanan & Peralatan Makan (Kaigo no Nihongo Bab 1)",
        "vocabulary": [
          {
            "japanese": "常食 (じょうしょく) / 軟飯 (なんはん) / おかゆ (全粥)",
            "romaji": "Joushoku / Nanhan / Okayu (Zengayu)",
            "meaning": "Makanan biasa / Nasi lembek / Bubur nasi"
          },
          {
            "japanese": "刻み食 (きざみしょく) / ミキサー食 / ソフト食 / とろみ食",
            "romaji": "Kizamishoku / Mikisaashoku / Sofutoshoku / Toromishoku",
            "meaning": "Makanan cincang halus / Makanan blender / Makanan lunak / Makanan diberi pengental (Toromi)"
          },
          {
            "japanese": "とろみ剤 (とろみざい) / むせる (咳き込む)",
            "romaji": "Toromizai / Museru",
            "meaning": "Bubuk pengental cairan (mencegah tersedak air) / Tersedak terbatuk-batuk"
          },
          {
            "japanese": "主食 (しゅしょく) / 主菜 (しゅさい) / 副菜 / 汁物 (しるもの)",
            "romaji": "Shushoku / Shusai / Fukusai / Shirumono",
            "meaning": "Makanan pokok (nasi/roti) / Lauk utama / Lauk pendamping / Hidangan berkuah"
          },
          {
            "japanese": "エプロン (食事用エプロン) / 吸い飲み / 自助具 (じじょぐ)",
            "romaji": "Shokujiyou epuron / Suinomi / Jijogu",
            "meaning": "Celemek makan / Gelas corong minum pasien / Alat bantu mandiri (sendok lengkung, piring berbibir dalam)"
          },
          {
            "japanese": "献立表 (こんだてひょう) / 食事摂取量 (しょくじせっしゅりょう)",
            "romaji": "Kondatehyou / Shokuji sesshuryou",
            "meaning": "Tabel daftar menu makanan / Jumlah asupan makanan yang dihabiskan (misal: 主食 8/10, 副食 10/10)"
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Pendampingan Makan (Bab 1: 食事)",
        "dialogues": [
          {
            "speaker": "Al-san (Staf Perawat)",
            "text": "高橋さん、お昼ご飯の 時間ですよ。手を 拭きましょうね。エプロンを つけますね。",
            "translation": "Takahashi-san, sudah waktunya makan siang lho. Mari kita lap tangannya ya. Saya pasangkan celemeknya ya."
          },
          {
            "speaker": "Al-san (Staf Perawat)",
            "text": "今日の 献立は、鮭の 塩焼きと 肉じゃがですよ。まず、お茶を 一口 飲みましょうか。",
            "translation": "Menu hari ini adalah ikan salmon panggang garam dan nikujaga. Pertama-tama, mari minum teh satu teguk dulu ya."
          },
          {
            "speaker": "Takahashi-san (Pengguna)",
            "text": "うん、おいしいね。もう おなかいっぱいだよ。ごちそうさま。",
            "translation": "Hmm, enak ya. Perutku sudah kenyang. Terima kasih atas hidangannya."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_7",
    "groupId": "kaigo",
    "chapterNumber": 7,
    "topic": "Bagian 4 Bab 3: Perawatan untuk Ekskresi (排泄の介護)",
    "title": "Modul 7: Ekskresi, 5 Jenis Inkontinensia, Toilet Portabel & Popok",
    "subtitle": "Mekanisme Berkemih/Defekasi, 5 Inkontinensia, Privasi, Urinal & Ganti Popok",
    "canDo": "Memahami mekanisme ekskresi, 5 jenis inkontinensia urine (尿失禁), kondisi feses/urine abnormal, penggunaan toilet portabel, urinal, dan penggantian popok dengan tetap menjaga rasa malu (羞恥心) pengguna.",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 4 Bab 3), Buku Kosakata & Kaigo no Nihongo (Bab 3)",
    "kanjiItems": [
      {
        "kanji": "排泄",
        "onyomi": "ハイセツ (haisetsu)",
        "kunyomi": "-",
        "meaning": "Ekskresi (Buang Air Kecil & Buang Air Besar)",
        "compounds": [
          "排泄介助 (はいせつかいじょ = bantuan ekskresi)",
          "排尿 (はいにょう = BAK)",
          "排便 (はいべん = BAB)"
        ]
      },
      {
        "kanji": "失禁",
        "onyomi": "シッキン (shikkin)",
        "kunyomi": "-",
        "meaning": "Inkontinensia (Mengompol / Tidak Mampu Menahan)",
        "compounds": [
          "尿失禁 (にょうしっきん = inkontinensia urine)",
          "便失禁 (べんしっきん = inkontinensia feses)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Lima Jenis Inkontinensia Urine (尿失禁の5タイプ — Sering Muncul di Ujian!)",
        "points": [
          {
            "title": "1. 腹圧性尿失禁 (Inkontinensia Stres / Tekanan Perut)",
            "desc": "Urine keluar tanpa sengaja saat tekanan perut meningkat seperti ketika batuk, bersin, tertawa, atau mengangkat beban berat (sering pada lansia perempuan karena melemahnya otot dasar panggul; dilatih dengan 骨盤底筋訓練)."
          },
          {
            "title": "2. 切迫性尿失禁 (Inkontinensia Urgensi)",
            "desc": "Tiba-tiba muncul keinginan berkemih yang sangat kuat (尿意切迫感) hingga tidak sempat sampai ke toilet."
          },
          {
            "title": "3. 溢流性尿失禁 (Inkontinensia Overflow / Luapan)",
            "desc": "Urine sulit keluar sehingga kandung kemih penuh sesak lalu menetes sedikit demi sedikit (sering akibat pembesaran prostat / 前立腺肥大症 pada pria)."
          },
          {
            "title": "4. 反射性尿失禁 (Inkontinensia Refleks)",
            "desc": "Urine keluar secara refleks tanpa merasakan sensasi ingin berkemih akibat cedera tulang belakang (脊髄損傷)."
          },
          {
            "title": "5. 機能性尿失禁 (Inkontinensia Fungsional)",
            "desc": "Organ saluran kemih normal, tetapi mengompol karena hambatan fisik (sulit berjalan/melepas celana) atau gangguan kognitif (Demensia: tidak tahu letak toilet)."
          }
        ]
      },
      {
        "title": "2. Kondisi Feses (便) & Urine (尿) serta Pencegahan Konstipasi",
        "points": [
          {
            "title": "Tanda Feses Abnormal (便の観察 — Bristol Scale)",
            "desc": "Feses berwarna HITAM pekat (黒色便 / タール便) menandakan perdarahan saluran cerna bagian ATAS (lambung/duodenum). Feses disertai darah MERAH segar (鮮血便) menandakan perdarahan saluran cerna bagian BAWAH (usus besar/wasir)."
          },
          {
            "title": "Posisi Defekasi Terbaik & Pijat Perut",
            "desc": "Posisi duduk agak condong ke depan dengan tumit sedikit diangkat (前傾姿勢) meluruskan sudut rektum sehingga BAB lebih lancar. Untuk konstipasi, lakukan pijat perut searah jarum jam mengikuti huruf 「の」 (「の」の字マッサージ)."
          }
        ]
      },
      {
        "title": "3. Kosakata Peralatan Ekskresi & Penggantian Popok (Kaigo no Nihongo Bab 3)",
        "vocabulary": [
          {
            "japanese": "トイレ / ポータブルトイレ / 尿器 (にょうき) / 差し込み便器 (さしこみべんき)",
            "romaji": "Toire / Pootaburu toire / Nyouki / Sashikomi benki",
            "meaning": "Toilet / Toilet portabel / Urinal (botol tampung pipis) / Pispot sorong (Bedpan)"
          },
          {
            "japanese": "紙おむつ (かみおむつ) / リハビリパンツ / 尿とりパッド",
            "romaji": "Kami omutsu / Rihabiri pantsu / Nyoutori paddo",
            "meaning": "Popok perekat dewasa / Popok celana / Bantalan penyerap urine dalam popok"
          },
          {
            "japanese": "陰部洗浄 (いんぶせんじょう) / シャワーボトル / おしり拭き",
            "romaji": "Inbu senjou / Shawaabotoru / Oshirifuki",
            "meaning": "Pembersihan area genital / Botol semprot air hangat / Tisu basah pembersih bokong"
          },
          {
            "japanese": "羞恥心 (しゅうちしん) / カーテンを閉める / 手すり / ナースコール",
            "romaji": "Shuuchishin / Kaaten o shimeru / Tesuri / Naasu kooru",
            "meaning": "Rasa malu (wajib dilindungi!) / Menutup tirai / Pegangan tangan dinding / Tombol panggil perawat"
          },
          {
            "japanese": "尿意 (にょうい) / 便意 (べんい) / 下痢 (げり) / 失禁",
            "romaji": "Nyoui / Ben-i / Geri / Shikkin",
            "meaning": "Rasa ingin BAK / Rasa ingin BAB / Diare / Mengompol"
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Pendampingan ke Toilet & Ganti Popok",
        "dialogues": [
          {
            "speaker": "Wang-san (Staf Perawat)",
            "text": "山田さん、トイレに 行きませんか？",
            "translation": "Yamada-san, bagaimana kalau pergi ke toilet?"
          },
          {
            "speaker": "Yamada-san (Pengguna)",
            "text": "そうだね、行こうかな。",
            "translation": "Oh iya ya, ayo pergi."
          },
          {
            "speaker": "Wang-san (Staf Perawat)",
            "text": "手すりに つかまって、ゆっくり ズボンを 下ろしますね。終わったら、この ナースコールを 押してくださいね。外で 待っています。",
            "translation": "Silakan berpegangan pada pegangan tangan, saya bantu turunkan celananya pelan-pelan ya. Kalau sudah selesai, tolong tekan tombol panggil (nurse call) ini ya. Saya menunggu di luar."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_8",
    "groupId": "kaigo",
    "chapterNumber": 8,
    "topic": "Bagian 4 Bab 4: Merapikan Diri & Berganti Pakaian (身じたくの介護)",
    "title": "Modul 8: Prinsip Datsu-ken Chaku-kan, Merapikan Diri & Perawatan Mulut",
    "subtitle": "Melepas dari Sisi Sehat & Memakai dari Sisi Sakit (脱健着患), Wajah, Kuku & Gigi Palsu",
    "canDo": "Menerapkan prinsip emas berganti pakaian pasien hemiplegia (脱健着患), perawatan wajah/mata, rambut, potong kuku, bercukur, serta perawatan rongga mulut dan gigi palsu (義歯).",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 4 Bab 4), Buku Kosakata & Kaigo no Nihongo (Bab 4)",
    "kanjiItems": [
      {
        "kanji": "脱健着患",
        "onyomi": "ダッケンチャッカン (dakken chakkan)",
        "kunyomi": "-",
        "meaning": "Melepas dari Sisi Sehat (脱健), Memakai dari Sisi Sakit (着患)",
        "compounds": [
          "脱健着患 (だっけんちゃっかん = prinsip ganti pakaian pasien kelumpuhan)"
        ]
      },
      {
        "kanji": "口腔・義歯",
        "onyomi": "コウクウ・ギシ (koukuu / gishi)",
        "kunyomi": "いれば (ireba)",
        "meaning": "Rongga Mulut (口腔) & Gigi Palsu (義歯 / 入れ歯)",
        "compounds": [
          "口腔ケア (こうくうけあ = perawatan mulut)",
          "義歯 (ぎし／いれば = gigi palsu)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Prinsip Emas Berganti Pakaian: 脱健着患 (Datsu-ken Chaku-kan)",
        "content": "Aturan wajib saat membantu pengguna dengan kelumpuhan separuh tubuh (片麻痺) atau nyeri sendi saat berganti pakaian:",
        "points": [
          {
            "title": "脱ぐときは「健側」から (Melepas Pakaian: Mulai dari SISI SEHAT / 健側)",
            "desc": "Keluarkan lengan/kaki yang SEHAT terlebih dahulu, baru kemudian lepaskan lengan/kaki yang SAKIT/LUMPUH agar sendi yang lumpuh tidak tertarik paksa."
          },
          {
            "title": "着るときは「患側」から (Memakai Pakaian: Mulai dari SISI SAKIT / 患側)",
            "desc": "Masukkan lengan/kaki yang SAKIT/LUMPUH terlebih dahulu ke lengan baju/celana, baru terakhir masukkan sisi yang SEHAT."
          }
        ]
      },
      {
        "title": "2. Poin Penting Merapikan Diri (整容) & Perawatan Rongga Mulut (口腔ケア)",
        "points": [
          {
            "title": "Menyeka Mata (目の清拭) & Memotong Kuku (爪切り)",
            "desc": "Saat menyeka mata, usap dengan handuk bersih dari SUDUT DALAM MATA (目頭) menuju ke SUDUT LUAR MATA (目尻) agar kotoran tidak masuk ke saluran air mata. Potong kuku setelah mandi (saat kuku lunak) dengan bentuk スクエアオフ (persegi agak membulat di sudutnya)."
          },
          {
            "title": "Perawatan Mulut & Gigi Palsu (入れ歯 / 義歯の扱い)",
            "desc": "Perawatan mulut mencegah Pneumonia Aspirasi (誤嚥性肺炎). Saat melepas gigi palsu (義歯), lepas bagian BAWAH dulu (atau sesuai kondisi), cuci dengan sikat khusus di bawah air mengalir, dan simpan di dalam wadah berisi AIR (水を入れた容器) agar tidak berubah bentuk/retak!"
          }
        ]
      },
      {
        "title": "3. Kosakata Pakaian & Alat Merapikan Diri (Kaigo no Nihongo Bab 4)",
        "vocabulary": [
          {
            "japanese": "上着 (うわぎ) / 肌着・下着 (したぎ) / パジャマ — 【着る・脱ぐ】",
            "romaji": "Uwagi / Hadagi, Shitagi / Pajama — [Kiru / Nugu]",
            "meaning": "Baju atasan / Pakaian dalam / Piyama — [Memakai / Melepas]"
          },
          {
            "japanese": "ズボン / スカート / 靴下 (くつした) / 靴 (くつ) — 【はく・脱ぐ】",
            "romaji": "Zubon / Sukaato / Kutsushita / Kutsu — [Haku / Nugu]",
            "meaning": "Celana panjang / Rok / Kaus kaki / Sepatu — [Memakai / Melepas]"
          },
          {
            "japanese": "帽子 (ぼうし) — 【かぶる】 / 眼鏡 (めがね) — 【かける】 / ボタンを留める・外す",
            "romaji": "Boushi [Kaburu] / Megane [Kakeru] / Botan o tomeru, hazusu",
            "meaning": "Topi [Memakai] / Kacamata [Memakai] / Mengancingkan & melepas kancing"
          },
          {
            "japanese": "洗面 (せんめん) / 歯ブラシ / スポンジブラシ / うがい (ぶくぶく・ガラガラ)",
            "romaji": "Senmen / Haburashi / Suponji burashi / Ugai",
            "meaning": "Cuci muka / Sikat gigi / Sikat spons mulut / Berkumur"
          },
          {
            "japanese": "爪切り (つめきり) / やすり / 耳かき / 電気カミソリ / 鏡 (かがみ) / くし",
            "romaji": "Tsumekiri / Yasuri / Mimikaki / Denki kamisori / Kagami / Kushi",
            "meaning": "Gunting kuku / Kikir kuku / Pembersih telinga / Alat cukur elektrik / Cermin / Sisir"
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Berganti Pakaian & Sikat Gigi",
        "dialogues": [
          {
            "speaker": "Ellen-san (Staf Perawat)",
            "text": "鈴木さん、パジャマから 昼間の 服に 着替えましょうか。今日は どの 服が いいですか？",
            "translation": "Suzuki-san, mari kita ganti dari piyama ke pakaian siang hari ya. Hari ini mau pakaian yang mana?"
          },
          {
            "speaker": "Suzuki-san (Pengguna)",
            "text": "そうねえ、この ピンクの カーディガンに しようかしら。",
            "translation": "Hmm, saya pilih kardigan merah muda ini saja."
          },
          {
            "speaker": "Ellen-san (Staf Perawat)",
            "text": "よく お似合いですよ。では、動くほうの 右手から 脱ぎましょうね。着るときは 左手から 袖を 通しますね。",
            "translation": "Sangat cocok untuk Anda. Kalau begitu, mari kita lepas dulu dari tangan kanan yang sehat ya. Saat memakai, kita masukkan lengan baju dari tangan kiri dulu ya."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_9",
    "groupId": "kaigo",
    "chapterNumber": 9,
    "topic": "Bagian 4 Bab 5 & 6: Mandi, Kebersihan Tubuh & Pekerjaan Rumah Tangga",
    "title": "Modul 9: Perawatan Mandi (入浴), Seishiki & Pekerjaan Rumah Tangga (家事)",
    "subtitle": "Efek Mandi, Pencegahan Heat Shock, Shower Chair, Mandi Seka & Dukungan IADL",
    "canDo": "Memahami 3 efek fisiologis mandi, langkah pencegahan Heat Shock (ヒートショック), urutan keluar-masuk bak mandi dengan sisi sehat/sakit, prosedur mandi seka (清拭), serta bantuan pekerjaan rumah tangga (調理・掃除・洗濯).",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 4 Bab 5–6), Buku Kosakata & Kaigo no Nihongo (Bab 5 & 7)",
    "kanjiItems": [
      {
        "kanji": "入浴",
        "onyomi": "ニュウヨク (nyuuyoku)",
        "kunyomi": "-",
        "meaning": "Mandi / Berendam",
        "compounds": [
          "入浴介助 (にゅうよくかいじょ = bantuan mandi)",
          "部分浴 (ぶぶんよく = mandi sebagian: 手浴・足浴)"
        ]
      },
      {
        "kanji": "清拭",
        "onyomi": "セイシキ (seishiki)",
        "kunyomi": "-",
        "meaning": "Menyeka Tubuh (Mandi Lap di Tempat Tidur)",
        "compounds": [
          "全身清拭 (ぜんしんせいしき = menyeka seluruh tubuh)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Tiga Efek Fisiologis Mandi & Pencegahan Heat Shock (ヒートショック)",
        "points": [
          {
            "title": "3 Efek Fisiologis Berendam Air Hangat (入浴の3大作用)",
            "desc": "1) 温熱作用 (Efek Termal/Hangat: melebarkan pembuluh darah, melancarkan peredaran darah, meredakan nyeri), 2) 水圧作用 (Efek Tekanan Hidrostatik: mendorong darah dari kaki kembali ke jantung), 3) 浮力作用 (Efek Daya Apung: berat tubuh berkurang sehingga otot dan sendi rileks)."
          },
          {
            "title": "Pencegahan Heat Shock (ヒートショックの予防)",
            "desc": "Perbedaan suhu drastis antara ruang ganti pakaian yang dingin (脱衣室) dan kamar mandi yang panas (浴室) dapat memicu lonjakan tekanan darah hingga stroke/serangan jantung. Hangatkan ruang ganti (脱衣室) terlebih dahulu sebelum lansia melepas pakaian!"
          },
          {
            "title": "Urutan Masuk Bak Mandi & Menyiram Air Hangat (かけ湯)",
            "desc": "Periksa suhu air dengan tangan perawat terlebih dahulu, lalu minta pengguna mencoba suhu air. Siram air hangat (かけ湯) mulai dari bagian tubuh yang JAUH DARI JANTUNG (ujung kaki/tangan → badan). Saat masuk/keluar bak mandi (浴槽) menggunakan バスボード atau melangkah, dahulukan KAKI SEHAT (健側)."
          },
          {
            "title": "Prinsip Mandi Seka di Tempat Tidur (清拭 / Seishiki)",
            "desc": "Gunakan handuk hangat (50–55°C saat diperas), tutupi bagian tubuh yang belum diseka dengan handuk besar (バスタオル), dan usap dari ujung ekstremitas menuju ke pusat jantung (末梢から中枢へ) mengikuti aliran darah balik vena."
          }
        ]
      },
      {
        "title": "2. Kosakata Kamar Mandi & Pekerjaan Rumah Tangga (Kaigo no Nihongo Bab 5 & 7)",
        "vocabulary": [
          {
            "japanese": "脱衣室 (だついしつ) / 浴室 (よくしつ) / 浴槽 (よくそう)",
            "romaji": "Datsuishitsu / Yokushitsu / Yokusou",
            "meaning": "Ruang ganti pakaian kamar mandi / Kamar mandi / Bak berendam (Bathtub)"
          },
          {
            "japanese": "シャワーチェア / バスボード / 滑り止めマット / 洗面器 (せんめんき)",
            "romaji": "Shawaachea / Basuboodo / Suberidome matto / Senmenki",
            "meaning": "Kursi mandi pancuran / Papan duduk tepi bak mandi / Keset antiselip / Gayung baskom"
          },
          {
            "japanese": "手浴 (しゅよく) / 足浴 (そくよく) / 陰部洗浄 / 洗髪 (せんぱつ)",
            "romaji": "Shuyoku / Sokuyoku / Inbu senjou / Senpatsu",
            "meaning": "Merendam tangan / Merendam kaki / Mencuci area genital / Mencuci rambut (keramas)"
          },
          {
            "japanese": "ボディソープ / シャンプー / リンス / ドライヤー / 水分補給",
            "romaji": "Bodisoopu / Shanpuu / Rinsu / Doraiyaa / Suibun hokyuu",
            "meaning": "Sabun cair badan / Sampo / Kondisioner / Pengering rambut / Minum cairan setelah mandi"
          },
          {
            "japanese": "調理 (ちょうり) / 掃除 (そうじ) / 洗濯 (せんたく) / 換気 (かんき) / ゴミ出し",
            "romaji": "Chouri / Souji / Sentaku / Kanki / Gomidashi",
            "meaning": "Memasak / Membersihkan kamar / Mencuci baju / Ventilasi udara / Membuang sampah terpilah"
          }
        ]
      },
      {
        "title": "3. Percakapan Kaigo no Nihongo: Bantuan Keramas & Membersihkan Kamar",
        "dialogues": [
          {
            "speaker": "Huang-san (Staf Perawat)",
            "text": "野村さん、頭を 洗いますね。お湯の 温度は いかがですか？熱くないですか？",
            "translation": "Nomura-san, saya cuci rambutnya ya. Bagaimana suhu air hangatnya? Apakah tidak terlalu panas?"
          },
          {
            "speaker": "Nomura-san (Pengguna)",
            "text": "うん、ちょうど いい湯加減だよ。気持ちいいね。",
            "translation": "Ya, suhu airnya pas sekali. Nyaman sekali ya."
          },
          {
            "speaker": "Huang-san (Staf Perawat)",
            "text": "かゆいところは ありませんか？耳に お湯が 入らないように 気をつけますね。お風呂から 出たら、お水を 飲みましょうね。",
            "translation": "Apakah ada bagian yang gatal? Saya berhati-hati agar air tidak masuk ke telinga ya. Setelah keluar dari kamar mandi, mari kita minum air putih ya."
          }
        ]
      }
    ]
  },
  {
    "id": "kaigo_modul_10",
    "groupId": "kaigo",
    "chapterNumber": 10,
    "topic": "Bagian 1 Bab 3 & Bagian 3 Bab 3: Infeksi, Hiyari-hatto, 5W1H & Horenso",
    "title": "Modul 10: Pengendalian Infeksi, Manajemen Risiko, Catatan 5W1H & Horenso",
    "subtitle": "Standard Precautions, Norovirus, Hiyari-hatto, Rekam Medis 5W1H, Shift & Serah Terima",
    "canDo": "Menerapkan pengendalian infeksi (Standard Precautions & Norovirus), pelaporan Hiyari-hatto, penulisan catatan perawatan objektif 5W1H, komunikasi tim (報連相 / Horenso), dan serah terima shift (申し送り).",
    "sourceBook": "Buku Teks Ujian Perawatan Lansia (Bagian 1 Bab 3, Bagian 3 Bab 3 & Soal Bahasa Jepang Kaigo) & Kaigo no Nihongo",
    "kanjiItems": [
      {
        "kanji": "感染",
        "onyomi": "カンセン (kansen)",
        "kunyomi": "-",
        "meaning": "Infeksi / Penularan",
        "compounds": [
          "感染症 (かんせんしょう = penyakit menular)",
          "感染経路 (かんせんけいろ = jalur penularan)",
          "標準予防策 (ひょうじゅんよぼうさく = Standard Precautions)"
        ]
      },
      {
        "kanji": "報連相",
        "onyomi": "ホウレンソウ (hourensou)",
        "kunyomi": "-",
        "meaning": "Laporan (報告), Informasi (連絡), Konsultasi (相談)",
        "compounds": [
          "報告 (ほうこく = melapor)",
          "連絡 (れんらく = mengabari)",
          "相談 (そうだん = berkonsultasi)",
          "申し送り (もうしおくり = serah terima shift)"
        ]
      }
    ],
    "sections": [
      {
        "title": "1. Pengendalian Infeksi (感染対策) & Standar Kewaspadaan (標準予防策)",
        "points": [
          {
            "title": "スタンダード・プリコーション (Standard Precautions / Kewaspadaan Standar)",
            "desc": "Prinsip bahwa darah, cairan tubuh, sekret, ekskresi (urine/feses), kulit yang terluka, dan membran mukosa dari SEMUA pengguna harus dianggap berpotensi menular, sehingga wajib mencuci tangan (手洗い) dan memakai APD (手袋・エプロン・マスク)."
          },
          {
            "title": "3 Jalur Utama Penularan Infeksi (感染経路)",
            "desc": "1) 飛沫感染 (Droplet: Influenza, COVID-19), 2) 空気感染 (Udara/Airborne: Tuberkulosis/結核, Campak/麻疹), 3) 接触感染 (Kontak: Norovirus/ノロウイルス, MRSA, Skabies/疥癬)."
          },
          {
            "title": "Penanganan Muntahan/Feses Norovirus (ノロウイルス対策)",
            "desc": "Alkohol TIDAK efektif membunuh Norovirus! Gunakan larutan Natrium Hipoklorit / Pemutih Klorin (次亜塩素酸ナトリウム) untuk mendisinfeksi lantai atau pakaian yang terkena muntahan/feses pasien."
          }
        ]
      },
      {
        "title": "2. Manajemen Risiko (ヒヤリハット) & Pencatatan Perawatan 5W1H (介護記録)",
        "points": [
          {
            "title": "ヒヤリハット (Hiyari-hatto / Near-Miss) & 事故報告書",
            "desc": "Hiyari-hatto adalah kejadian nyaris celaka yang belum menimbulkan cedera, namun wajib dicatat dan dianalisis bersama tim untuk mencegah kecelakaan serius (Menurut Hukum Heinrich: di balik 1 kecelakaan berat terdapat 29 kecelakaan ringan dan 300 kejadian Hiyari-hatto)."
          },
          {
            "title": "Aturan Penulisan Catatan Perawatan (介護記録の書き方 — 5W1H)",
            "desc": "Tulis segera setelah tindakan selesai berdasarkan FAKTA OBJEKTIF (客観的事実: apa yang dilihat, hasil ukur suhu/tensi, dan kutipan ucapan langsung pasien) terpisah dari perkiraan subjektif. Gunakan kerangka 5W1H: When (いつ), Where (どこで), Who (だれが), What (なにを), Why (なぜ), How (どのように)."
          }
        ]
      },
      {
        "title": "3. Kosakata Horenso, Serah Terima Shift & Jadwal Kerja (勤務表)",
        "vocabulary": [
          {
            "japanese": "報告 (ほうこく) ・ 連絡 (れんらく) ・ 相談 (そうだん)",
            "romaji": "Houkoku / Renraku / Soudan",
            "meaning": "Melapor ke atasan / Menginformasikan ke tim / Berkonsultasi sebelum bertindak"
          },
          {
            "japanese": "申し送り (もうしおくり) / カンファレンス / ケース記録",
            "romaji": "Moushiokuri / Kanfarensu / Keesu kiroku",
            "meaning": "Serah terima pergantian shift / Rapat pembahasan kasus / Catatan perkembangan pasien"
          },
          {
            "japanese": "日勤 (にっきん) / 夜勤 (やきん) / 早番 (はやばん) / 遅番 (おそばん)",
            "romaji": "Nikkin / Yakin / Hayaban / Osoban",
            "meaning": "Shift siang / Shift malam / Shift pagi awal / Shift siang-sore"
          },
          {
            "japanese": "公休 (こうきゅう) / 有給休暇 (ゆうきゅうきゅうか) / 夜勤明け (やきんあけ)",
            "romaji": "Koukyuu / Yuukyuu kyuuka / Yakin-ake",
            "meaning": "Libur jadwal resmi / Cuti tahunan berbayar / Lepas dinas shift malam"
          },
          {
            "japanese": "使い捨て手袋 (つかいすててぶくろ) / 消毒 (しょうどく) / 換気 (かんき)",
            "romaji": "Tsukaisute tebukuro / Shoudoku / Kanki",
            "meaning": "Sarung tangan sekali pakai / Disinfeksi / Pertukaran udara (ventilasi)"
          }
        ]
      },
      {
        "title": "4. Percakapan Kaigo no Nihongo: Serah Terima Shift (申し送り) & Laporan Darurat",
        "dialogues": [
          {
            "speaker": "Al-san (Staf Shift Malam)",
            "text": "おはようございます。夜勤の 申し送りを します。203号室の 佐藤さんですが、昨夜 2時ごろ トイレに 起きたとき、ふらつきが ありました。",
            "translation": "Selamat pagi. Saya sampaikan serah terima shift malam. Mengenai Sato-san di kamar 203, tadi malam sekitar pukul 02:00 saat bangun ke toilet, beliau tampak sempoyongan."
          },
          {
            "speaker": "Al-san (Staf Shift Malam)",
            "text": "今朝の 体温は 36度8分、血圧は 138の 82です。転倒の 危険が ありますので、移動の ときは 必ず 見守りと 介助を お願いします。",
            "translation": "Suhu tubuh pagi ini 36,8 derajat, tekanan darah 138/82. Karena ada risiko jatuh, saat berpindah mohon pastikan selalu diawasi dan didampingi."
          },
          {
            "speaker": "Pemimpin Unit (ユニットリーダー)",
            "text": "わかりました。日勤スタッフ全員で 注意して 見守ります。夜勤、お疲れ様でした。",
            "translation": "Baik, dimengerti. Seluruh staf shift siang akan berhati-hati dan mengawasi beliau. Terima kasih atas kerja kerasnya di shift malam."
          }
        ],
        "culturalTips": "Saat melepas sarung tangan sekali pakai (使い捨て手袋) setelah tindakan ekskresi/medis, lepaskan dengan cara membalik bagian luar ke dalam (外側が内側になるように外す) tanpa menyentuh permukaan luar yang terkontaminasi, lalu segera cuci tangan dengan sabun dan air mengalir."
      }
    ]
  }
];

function getModuleGroups() {
  return moduleGroups.map(group => {
    const count = learningModules.filter(m => m.groupId === group.id).length;
    return {
      ...group,
      totalModules: count
    };
  });
}

function getModulesByGroup(groupId) {
  if (!groupId) return learningModules;
  return learningModules.filter(m => m.groupId.toLowerCase() === groupId.toLowerCase());
}

function getModuleDetail(moduleId) {
  return learningModules.find(m => m.id === moduleId);
}

module.exports = {
  moduleGroups,
  learningModules,
  getModuleGroups,
  getModulesByGroup,
  getModuleDetail
};
