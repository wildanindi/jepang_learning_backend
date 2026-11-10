// Bank Soal Lengkap Ujian JLPT N5 & N4 (342 Soal)
// Mencakup seluruh domain standar JLPT:
// 1. Moji & Goi: Kanji Yomi, Kanji Kakitoki, Bunryaku Imi, Ruigo, Youhou
// 2. Bunpou    : Bunpou Keishiki, Bun no Kousei (★), Bunsho no Bunpou
// 3. Dokkai    : Tanbun Dokkai, Chuubun Dokkai, Jouhou Kensaku
// 4. Choukai   : Kadai Rikai, Pointo Rikai, Gaiyou Rikai (N4), Utatsugen, Sokkuhaotou

const examQuestions = [
  {
    "id": 101,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「学校」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "がっこう",
      "がこう",
      "かっこう",
      "がくこう"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: がっこう (Gakkou). Kanji 学校 berarti \"Sekolah\"."
  },
  {
    "id": 102,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「友達」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "ともだち",
      "うちだち",
      "ゆうだち",
      "ともたち"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ともだち (Tomodachi). Kanji 友達 berarti \"Teman / Sahabat\"."
  },
  {
    "id": 103,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「先生」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "せんせい",
      "ぜんせい",
      "せんじょう",
      "さきせい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: せんせい (Sensei). Kanji 先生 berarti \"Guru\"."
  },
  {
    "id": 104,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「水」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "みず",
      "あめ",
      "いけ",
      "かわ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: みず (Mizu). Kanji 水 berarti \"Air\"."
  },
  {
    "id": 105,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「車」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "くるま",
      "でんしゃ",
      "じてんしゃ",
      "ひこうき"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: くるま (Kuruma). Kanji 車 berarti \"Mobil / Kendaraan\"."
  },
  {
    "id": 106,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「日本語」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "にほんご",
      "にっぽんこ",
      "ひほんご",
      "にちほんご"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: にほんご (Nihongo). Kanji 日本語 berarti \"Bahasa Jepang\"."
  },
  {
    "id": 107,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「時間」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "じかん",
      "じけん",
      "ときま",
      "じかんかん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: じかん (Jikan). Kanji 時間 berarti \"Waktu / Jam\"."
  },
  {
    "id": 108,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「駅」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "えき",
      "はし",
      "みち",
      "まち"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: えき (Eki). Kanji 駅 berarti \"Stasiun\"."
  },
  {
    "id": 109,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「電話」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "でんわ",
      "でんしゃ",
      "てんわ",
      "でんき"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: でんわ (Denwa). Kanji 電話 berarti \"Telepon\"."
  },
  {
    "id": 110,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「白い」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "しろい",
      "くろい",
      "あかい",
      "あおい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: しろい (Shiroi). Kanji 白い berarti \"Putih\"."
  },
  {
    "id": 111,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「食べる」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "たべる",
      "のむ",
      "みる",
      "きく"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: たべる (Taberu). Kanji 食べる berarti \"Makan\"."
  },
  {
    "id": 112,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「毎朝」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "まいあさ",
      "まいばん",
      "まいひ",
      "まいちょう"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: まいあさ (Maiasa). Kanji 毎朝 berarti \"Setiap pagi\"."
  },
  {
    "id": 113,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「大きい」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "おおきい",
      "ちいさい",
      "たかい",
      "ひろい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: おおきい (Ookii). Kanji 大きい berarti \"Besar\"."
  },
  {
    "id": 114,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「魚」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "さかな",
      "にく",
      "たまご",
      "やさい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: さかな (Sakana). Kanji 魚 berarti \"Ikan\"."
  },
  {
    "id": 115,
    "level": "N5",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「雨」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "あめ",
      "ゆき",
      "かぜ",
      "くも"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あめ (Ame). Kanji 雨 berarti \"Hujan\"."
  },
  {
    "id": 116,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "まいあさ ６じに ____。\n「おきます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "起きます",
      "行きます",
      "来ます",
      "見ます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 起きます (Okimasu = Bangun tidur)."
  },
  {
    "id": 117,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "としょかんで 本を ____。\n「よみます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "読みます",
      "書きます",
      "聞きます",
      "話します"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 読みます (Yomimasu = Membaca)."
  },
  {
    "id": 118,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "えんぴつで てがみを ____。\n「かきます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "書きます",
      "描きます",
      "聞きます",
      "行きます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 書きます (Kakimasu = Menulis)."
  },
  {
    "id": 119,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "あした ともだちに ____。\n「あいます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "会います",
      "合います",
      "見ます",
      "来ます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 会います (Aimasu = Bertemu)."
  },
  {
    "id": 120,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "この へやは ____ です。\n「ひろい」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "広い",
      "高い",
      "近い",
      "長い"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 広い (Hiroi = Luas)."
  },
  {
    "id": 121,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "そとに ____ が います。\n「いぬ」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "犬",
      "太",
      "大",
      "牛"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 犬 (Inu = Anjing)."
  },
  {
    "id": 122,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "きょうは ____ です。\n「げつようび」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "月曜日",
      "火曜日",
      "水曜日",
      "金曜日"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 月曜日 (Getsuyoubi = Hari Senin)."
  },
  {
    "id": 123,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "つくえの ____ に ねこが います。\n「した」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "下",
      "上",
      "中",
      "前"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 下 (Shita = Bawah)."
  },
  {
    "id": 124,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "こうえんを ____。\n「あるきます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "歩きます",
      "走ります",
      "行きます",
      "足ります"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 歩きます (Arukimasu = Berjalan kaki)."
  },
  {
    "id": 125,
    "level": "N5",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "おんがくを ____。\n「ききます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "聞きます",
      "言います",
      "話します",
      "見ます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 聞きます (Kikimasu = Mendengarkan)."
  },
  {
    "id": 126,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "わたしは まいにち 朝 ____ を たべます。",
    "contextText": null,
    "options": [
      "パン",
      "おちゃ",
      "みず",
      "えんぴつ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: パン (Pan = Roti). Tabemasu (makan) membutuhkan objek makanan."
  },
  {
    "id": 127,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "へやが くらいですから、____ を つけました。",
    "contextText": null,
    "options": [
      "でんき",
      "テレビ",
      "ドア",
      "まど"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: でんき (Denki = Lampu). Kurai (gelap) -> menyalakan lampu (denki o tsukeru)."
  },
  {
    "id": 128,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "あついですから、まどを ____ ください。",
    "contextText": null,
    "options": [
      "あけて",
      "しめて",
      "つけて",
      "けして"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あけて (Akete = Buka). Atsui (panas) -> buka jendela (mado o akeru)."
  },
  {
    "id": 129,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "あめが ふっていますから、____ を さします。",
    "contextText": null,
    "options": [
      "かさ",
      "ぼうし",
      "くつ",
      "コート"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: かさ (Kasa = Payung). Pasangan kata kerja memakai payung adalah kasa o sasu."
  },
  {
    "id": 130,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "きのうは つかれましたから、____ ねました。",
    "contextText": null,
    "options": [
      "はやく",
      "おそく",
      "たかく",
      "あかるく"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: はやく (Hayaku = Cepat / Awal). Lelah -> tidur lebih cepat."
  },
  {
    "id": 131,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "ごはんを たべたあとで、「____」と 言います。",
    "contextText": null,
    "options": [
      "ごちそうさまでした",
      "いただきます",
      "いってきます",
      "ただいま"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ごちそうさまでした (Gochisousama deshita). Diucapkan setelah selesai makan."
  },
  {
    "id": 132,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "わたしの うちは えきから ____ ですから、べんりです。",
    "contextText": null,
    "options": [
      "ちかい",
      "とおい",
      "ひろい",
      "せまい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ちかい (Chikai = Dekat). Dekat dari stasiun sehingga praktis (benri)."
  },
  {
    "id": 133,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "かぜを ひきましたから、びょういんで ____ を もらいました。",
    "contextText": null,
    "options": [
      "くすり",
      "おかし",
      "きっぷ",
      "はがき"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: くすり (Kusuri = Obat). Mengalami flu -> mendapat obat dari rumah sakit."
  },
  {
    "id": 134,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "じかんが ありませんから、____ いきましょう。",
    "contextText": null,
    "options": [
      "タクシーで",
      "あるいて",
      "じてんしゃで",
      "ゆっくり"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: タクシーで (Dengan taksi). Karena tidak ada waktu (terburu-buru)."
  },
  {
    "id": 135,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "この りょうりは とても ____ ですね。",
    "contextText": null,
    "options": [
      "おいしい",
      "あかるい",
      "みじかい",
      "おもい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: おいしい (Oishii = Enak / Lezat). Kata sifat yang sesuai untuk makanan."
  },
  {
    "id": 136,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "ノートに えんぴつで 字を ____。",
    "contextText": null,
    "options": [
      "かきます",
      "ききます",
      "のみます",
      "あけます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: かきます (Kakimasu = Menulis)."
  },
  {
    "id": 137,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "あたまが ____ ですから、きょうは やすみます。",
    "contextText": null,
    "options": [
      "いたい",
      "あかい",
      "あまい",
      "あたたかい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いたい (Itai = Sakit). Atama ga itai = sakit kepala."
  },
  {
    "id": 138,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "おとうとは ____ を あらっています。",
    "contextText": null,
    "options": [
      "て",
      "め",
      "みみ",
      "はな"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: て (Te = Tangan). Te o arau = mencuci tangan."
  },
  {
    "id": 139,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "きょうは かぜが つよいですから、そとは ____ です。",
    "contextText": null,
    "options": [
      "さむい",
      "あつい",
      "あまい",
      "からい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: さむい (Samui = Dingin)."
  },
  {
    "id": 140,
    "level": "N5",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "あしたの テストの ために、たくさん ____ しました。",
    "contextText": null,
    "options": [
      "べんきょう",
      "さんぽ",
      "かいもの",
      "りょこう"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: べんきょう (Benkyou = Belajar). Belajar untuk persiapan tes esok hari."
  },
  {
    "id": 141,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "この へやは <u>せまい</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この へやは ひろくないです。",
      "この へやは おおきいです。",
      "この へやは あかるいです。",
      "この へやは あたらしくないです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この へやは ひろくないです (Kamar ini tidak luas). Semai (sempit) berlawanan dengan hiroi (luas)."
  },
  {
    "id": 142,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "あの 本は <u>たかい</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "あの 本は やすくないです。",
      "あの 本は ひくくないです。",
      "あの 本は おもしろいです。",
      "あの 本は ふるくないです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あの 本は やすくないです (Buku itu tidak murah = mahal)."
  },
  {
    "id": 143,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "きのうは <u>あめ</u> でした。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "きのうは 天気が よくなかったです。",
      "きのうは はれでした。",
      "きのうは あたたかかったです。",
      "きのうは すずしかったです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: きのうは 天気が よくなかったです (Kemarin cuacanya tidak bagus / hujan)."
  },
  {
    "id": 144,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "山田さんは <u>げんき</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "山田さんは からだが じょうぶです。",
      "山田さんは びょうきです。",
      "山田さんは しんせつです。",
      "山田さんは いそがしいです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 山田さんは からだが じょうぶです (Fisik/tubuh pak Yamada kuat dan sehat)."
  },
  {
    "id": 145,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "この かばんは <u>かるい</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この かばんは おもくないです。",
      "この かばんは くろくないです。",
      "この かばんは ちいさくないです。",
      "この かばんは ふるいです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この かばんは おもくないです (Tas ini tidak berat = ringan)."
  },
  {
    "id": 146,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "母は <u>きょうだい</u> が 三人 います。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "母には あにや いもうとが 三人 います。",
      "母には ともだちが 三人 います。",
      "母には こどもが 三人 います。",
      "母には せいとが 三人 います。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 母には あにや いもうとが 三人 います (Kyoudai = saudara kandung)."
  },
  {
    "id": 147,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "父は <u>かいしゃいん</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "父は かいしゃで はたらいています。",
      "父は がっこうで おしえています。",
      "父は びょういんで しごとしています。",
      "父は うちで やすんでいます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 父は かいしゃで はたらいています (Kaishain = karyawan perusahaan)."
  },
  {
    "id": 148,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "この シャツを <u>あらいます</u>。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この シャツを せんたくします。",
      "この シャツを きます。",
      "この シャツを かいます。",
      "この シャツを うります。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この シャツを せんたくします (Sentaku shimasu = mencuci pakaian)."
  },
  {
    "id": 149,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "かれは <u>ゆうめい</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "たくさんの 人が かれを 知っています。",
      "だれも かれを 知りません。",
      "かれは とても しずかです。",
      "かれは うたが へたです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: たくさんの 人が かれを 知っています (Yuumei = terkenal, diketahui banyak orang)."
  },
  {
    "id": 150,
    "level": "N5",
    "category": "Moji-Goi: Ruigo",
    "question": "えきまで <u>すぐ</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "えきまで とても 近いです。",
      "えきまで とても 遠いです。",
      "えきまで １時間 かかります。",
      "えきまで あぶないです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: えきまで とても 近いです (Sugu = langsung/sangat dekat)."
  },
  {
    "id": 151,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「いつも」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "父は いつも 朝 7時に 起きます。",
      "あした いつも 映画を 見ます。",
      "きのう いつも 雨が 降りました。",
      "いま いつも 勉強しています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 父は いつも 朝 7時に 起きます (Ayah selalu bangun jam 7 pagi. \"Itsumo\" menyatakan kebiasaan rutin)."
  },
  {
    "id": 152,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「もうすぐ」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "もうすぐ 春に なりますね。",
      "きのう もうすぐ 友だちが 来ました。",
      "おととい もうすぐ 宿題を しました。",
      "先週 もうすぐ 旅行へ 行きました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: もうすぐ 春に なりますね (Mousugu = sebentar lagi, digunakan untuk waktu yang akan segera tiba)."
  },
  {
    "id": 153,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「あたま」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "かぜを ひいて、あたまが 痛いです。",
      "あたまを はいて、学校へ 行きます。",
      "あたまを 切って、料理を 作ります。",
      "あたまを 飲んで、ねました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: かぜを ひいて、あたまが 痛いです (Atama = kepala)."
  },
  {
    "id": 154,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「ゆっくり」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "お茶を 飲みながら、ゆっくり 話しましょう。",
      "ゆっくり 電車が はやいです。",
      "ゆっくり 時計が こわれました。",
      "ゆっくり ごはんを 忘れました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: お茶を 飲みながら、ゆっくり 話しましょう (Yukkuri = santai / perlahan)."
  },
  {
    "id": 155,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「べんり」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "駅の 近くに 住むのは とても べんりです。",
      "きのうは べんりな 雨でした。",
      "この ケーキは べんりな 味です。",
      "べんりな 犬が 走っています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 駅の 近くに 住むのは とても べんりです (Benri = praktis / memudahkan)."
  },
  {
    "id": 156,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「あかい」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "あかい リンゴを 食べました。",
      "あかい 水を 飲みました。",
      "あかい 音楽を 聞きました。",
      "あかい 風が ふいています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あかい リンゴを 食べました (Akai = merah, cocok untuk warna buah apel)."
  },
  {
    "id": 157,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「きっぷ」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "駅で 電車の きっぷを 買いました。",
      "レストランで きっぷを 食べました。",
      "きっぷを 着て、出かけます。",
      "きっぷを 飲んで、寝ます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 駅で 電車の きっぷを 買いました (Kippu = tiket kereta)."
  },
  {
    "id": 158,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「ならう」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "先生に ピアノを ならっています。",
      "友だちに プレゼントを ならいました。",
      "スーパーで やさいを ならいました。",
      "川で 魚を ならいました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 先生に ピアノを ならっています (Narau = belajar / berguru dari seorang pengajar)."
  },
  {
    "id": 159,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「おぼえる」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "新しい 漢字を 10こ おぼえました。",
      "テレビを おぼえて、見ました。",
      "ジュースを おぼえて、飲みました。",
      "お風呂を おぼえました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 新しい 漢字を 10こ おぼえました (Oboeru = mengingat / menghafal)."
  },
  {
    "id": 160,
    "level": "N5",
    "category": "Moji-Goi: Youhou",
    "question": "「あそぶ」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "日曜日、公園で 子どもと あそびました。",
      "毎晩 10時に ベッドで あそびます。",
      "教室で 漢字を あそびます。",
      "食堂で ごはんを あそびます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日曜日、公園で 子どもと あそびました (Asobu = bermain)."
  },
  {
    "id": 201,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "わたしは 毎朝 7時 ____ 起きます。",
    "contextText": null,
    "options": [
      "に",
      "で",
      "を",
      "が"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: に. Partikel に digunakan untuk menandai waktu spesifik (7-ji ni)."
  },
  {
    "id": 202,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "図書館 ____ 本を 読みます。",
    "contextText": null,
    "options": [
      "で",
      "に",
      "へ",
      "を"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: で. Partikel で menandai tempat terjadinya suatu aktivitas (membaca di perpustakaan)."
  },
  {
    "id": 203,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "日曜日、どこ ____ 行きませんでした。",
    "contextText": null,
    "options": [
      "へも",
      "でも",
      "をも",
      "にも"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: へも. Pola kata tanya + partikel + も + bentuk negatif menyatakan penyangkalan total (doko e mo ikimasen deshita = tidak pergi ke mana pun)."
  },
  {
    "id": 204,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "李さんは 日本語 ____ 上手ですね。",
    "contextText": null,
    "options": [
      "が",
      "を",
      "に",
      "で"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: が. Kata sifat kemahiran (jouzu / heta) menggunakan partikel が untuk menandai bidang kemahiran."
  },
  {
    "id": 205,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この りんごは 一つ 100円です。三つ ____ ください。",
    "contextText": null,
    "options": [
      "で",
      "に",
      "を",
      "から"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: で. Digunakan untuk batas hitungan / satuan belanja (mittsu de kudasai = tolong berikan 3 buah)."
  },
  {
    "id": 206,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "いっしょに お茶を ____。",
    "contextText": null,
    "options": [
      "飲みませんか",
      "飲みますか",
      "飲みました",
      "飲むでした"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 飲みませんか (~masen ka). Pola ajakan sopan: \"Maukah minum teh bersama-sama?\"."
  },
  {
    "id": 207,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "教室で 写真を ____ は いけません。",
    "contextText": null,
    "options": [
      "とって",
      "とる",
      "とった",
      "とり"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: とって (~te wa ikemasen). Pola larangan: V-te wa ikemasen (tidak boleh mengambil foto)."
  },
  {
    "id": 208,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "テレビを ____ から、寝ます。",
    "contextText": null,
    "options": [
      "見て",
      "見る",
      "見ます",
      "見た"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 見て (~te kara). Pola urutan aktivitas: V-te kara (setelah menonton TV, lalu tidur)."
  },
  {
    "id": 209,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "田中さんは 英語を 話すこと ____ できます。",
    "contextText": null,
    "options": [
      "が",
      "を",
      "に",
      "で"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: が. Pola kemampuan: V-kamus + koto ga dekimasu."
  },
  {
    "id": 210,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "日本へ 富士山を ____ に 行きます。",
    "contextText": null,
    "options": [
      "見",
      "見て",
      "見る",
      "見ます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 見 (kata kerja akar). Pola tujuan pergi: V-masu (tanpa masu) + ni ikimasu."
  },
  {
    "id": 211,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "母は スーパーへ 肉 ____ 野菜を 買いに 行きました。",
    "contextText": null,
    "options": [
      "や",
      "で",
      "に",
      "を"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: や. Partikel や digunakan untuk menyebutkan contoh barang secara non-lengkap (daging dan sayur dll)."
  },
  {
    "id": 212,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "部屋の ドアが ____ います。",
    "contextText": null,
    "options": [
      "あいて",
      "あけて",
      "あく",
      "あき"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あいて (V-jidoushi + te imasu). Doa ga aite imasu = pintu sedang dalam keadaan terbuka."
  },
  {
    "id": 213,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "明日 雨が ____、旅行に 行きません。",
    "contextText": null,
    "options": [
      "ふったら",
      "ふれば",
      "ふるなら",
      "ふると"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ふったら (~tara). Pola pengandaian dasar N5: Ame ga futtara (kalau besok hujan)."
  },
  {
    "id": 214,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この お菓子は 甘くて ____ おいしいです。",
    "contextText": null,
    "options": [
      "とても",
      "あまり",
      "全然",
      "少しも"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: とても (Totemo = sangat). Cocok dengan kalimat predikat positif."
  },
  {
    "id": 215,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "時間が ありませんから、____ 話してください。",
    "contextText": null,
    "options": [
      "はやく",
      "はやい",
      "はやくて",
      "はや"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: はやく. Bentuk adverbia kata sifat-i diubah menjadi ~ku untuk menerangkan kata kerja."
  },
  {
    "id": 216,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "きのうは 寒かった ____、今日は あたたかいです。",
    "contextText": null,
    "options": [
      "が",
      "から",
      "ので",
      "のに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: が. Kata hubung perlawanan: Kemarin dingin, tetapi hari ini hangat."
  },
  {
    "id": 217,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "あたまが 痛いですから、薬を ____ ほうが いいです。",
    "contextText": null,
    "options": [
      "のんだ",
      "のむ",
      "のんで",
      "のみ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: のんだ (~ta hou ga ii desu). Pola saran: Lebih baik minum obat."
  },
  {
    "id": 218,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "わたしは 弟 ____ お金を 貸しました。",
    "contextText": null,
    "options": [
      "に",
      "で",
      "から",
      "へ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: に. Menandai penerima pinjaman (meminjamkan kepada adik)."
  },
  {
    "id": 219,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "ここで タバコを ____ ください。",
    "contextText": null,
    "options": [
      "すわないで",
      "すわない",
      "すわなくて",
      "すわなければ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: すわないで (~naide kudasai). Pola permohonan larangan sopan: Tolong jangan merokok."
  },
  {
    "id": 220,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "バス ____ 電車 ____ どちらが 速いですか。",
    "contextText": null,
    "options": [
      "と / と",
      "や / や",
      "に / に",
      "で / で"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: と / と (A to B to dochira ga ~ desu ka). Pola perbandingan 2 hal."
  },
  {
    "id": 221,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "一年で 夏が ____ 暑いです。",
    "contextText": null,
    "options": [
      "一番",
      "もっと",
      "より",
      "ずっと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 一番 (Ichiban = paling/ter-). Natsu ga ichiban atsui desu = musim panas yang paling panas."
  },
  {
    "id": 222,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この シャツを ____ みても いいですか。",
    "contextText": null,
    "options": [
      "きて",
      "きる",
      "きます",
      "き"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: きて (V-te miru). Pola mencoba melakukan sesuatu: kite mite mo ii desu ka = bolehkah saya coba pakai?"
  },
  {
    "id": 223,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "田中さんは まだ 来て ____。",
    "contextText": null,
    "options": [
      "いません",
      "あります",
      "みます",
      "おきます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いません (Mada V-te imasen = belum datang)."
  },
  {
    "id": 224,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "夜 11時に なりました。そろそろ ____ 時間です。",
    "contextText": null,
    "options": [
      "寝る",
      "寝て",
      "寝ます",
      "寝た"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 寝る. Menerangkan kata benda jikan menggunakan bentuk kamus (neru jikan = waktu untuk tidur)."
  },
  {
    "id": 225,
    "level": "N5",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "日本料理の 中で すしが ____ 好きです。",
    "contextText": null,
    "options": [
      "いちばん",
      "もっと",
      "だいたい",
      "ぜんぶ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いちばん (Ichiban = paling). Sushi paling disukai."
  },
  {
    "id": 226,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "わたしは 昨日 ____  ____  ★  ____ 買いました。\n1: 買った  2: おいしい  3: パン屋で  4: パンを",
    "contextText": null,
    "options": [
      "1 (買った)",
      "2 (おいしい)",
      "3 (パン屋で)",
      "4 (パンを)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: わたしは 昨日【3: パン屋で】 【2: おいしい】 【★ 4: パンを】 【1: 買った】 買いました (Urutan: 3 - 2 - 4 - 1).\nPosisi bintang (★) adalah urutan ke-3 yaitu 4 (パンを)."
  },
  {
    "id": 227,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "毎朝 ____  ____  ★  ____ 行きます。\n1: 電車で  2: 駅から  3: 学校へ  4: 歩いて",
    "contextText": null,
    "options": [
      "1 (電車で)",
      "2 (駅から)",
      "3 (学校へ)",
      "4 (歩いて)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: 毎朝【1: 電車で】 【2: 駅から】 【★ 4: 歩いて】 【3: 学校へ】 行きます (Urutan: 1 - 2 - 4 - 3).\nPosisi bintang (★) adalah 4 (歩いて)."
  },
  {
    "id": 228,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "ここは ____  ____  ★  ____ できません。\n1: 写真を  2: 暗くて  3: きれいに  4: とることが",
    "contextText": null,
    "options": [
      "1 (写真を)",
      "2 (暗くて)",
      "3 (きれいに)",
      "4 (とることが)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: ここは【2: 暗くて】 【3: きれいに】 【★ 1: 写真を】 【4: とることが】 できません (Urutan: 2 - 3 - 1 - 4).\nPosisi bintang (★) adalah 1 (写真を)."
  },
  {
    "id": 229,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "あした ____  ____  ★  ____ 会います。\n1: 友達に  2: 映画館の  3: 4時に  4: 前で",
    "contextText": null,
    "options": [
      "1 (友達に)",
      "2 (映画館の)",
      "3 (4時に)",
      "4 (前で)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: あした【3: 4時に】 【2: 映画館の】 【★ 4: 前で】 【1: 友達に】 会います (Urutan: 3 - 2 - 4 - 1).\nPosisi bintang (★) adalah 4 (前で)."
  },
  {
    "id": 230,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "この部屋は ____  ____  ★  ____ 好きです。\n1: 広くて  2: とても  3: 明るいから  4: わたしは",
    "contextText": null,
    "options": [
      "1 (広くて)",
      "2 (とても)",
      "3 (明るいから)",
      "4 (わたしは)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: この部屋は【1: 広くて】 【2: とても】 【★ 3: 明るいから】 【4: わたしは】 好きです (Urutan: 1 - 2 - 3 - 4).\nPosisi bintang (★) adalah 3 (明るいから)."
  },
  {
    "id": 231,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "すみませんが ____  ____  ★  ____ ください。\n1: 塩を  2: ちょっと  3: 取って  4: その",
    "contextText": null,
    "options": [
      "1 (塩を)",
      "2 (ちょっと)",
      "3 (取って)",
      "4 (その)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: すみませんが【2: ちょっと】 【4: その】 【★ 1: 塩を】 【3: 取って】 ください (Urutan: 2 - 4 - 1 - 3).\nPosisi bintang (★) adalah 1 (塩を)."
  },
  {
    "id": 232,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "日本語の ____  ____  ★  ____ ありません。\n1: 時間が  2: 勉強する  3: ぜんぜん  4: 辞書を",
    "contextText": null,
    "options": [
      "1 (時間が)",
      "2 (勉強する)",
      "3 (ぜんぜん)",
      "4 (辞書を)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: 日本語の【4: 辞書を】 【2: 勉強する】 【★ 1: 時間が】 【3: ぜんぜん】 ありません (Urutan: 4 - 2 - 1 - 3).\nPosisi bintang (★) adalah 1 (時間が)."
  },
  {
    "id": 233,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "日曜日は ____  ____  ★  ____ します。\n1: 買い物を  2: 掃除を  3: したり  4: したり",
    "contextText": null,
    "options": [
      "1 (買い物を)",
      "2 (掃除を)",
      "3 (したり)",
      "4 (したり)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: 日曜日は【2: 掃除を】 【3: したり】 【★ 1: 買い物を】 【4: したり】 します (Urutan: 2 - 3 - 1 - 4).\nPosisi bintang (★) adalah 1 (買い物を)."
  },
  {
    "id": 234,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "田中さんは ____  ____  ★  ____ 上手です。\n1: 歌を  2: とても  3: 歌うのが  4: カラオケで",
    "contextText": null,
    "options": [
      "1 (歌を)",
      "2 (とても)",
      "3 (歌うのが)",
      "4 (カラオケで)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: 田中さんは【4: カラオケで】 【1: 歌を】 【★ 3: 歌うのが】 【2: とても】 上手です (Urutan: 4 - 1 - 3 - 2).\nPosisi bintang (★) adalah 3 (歌うのが)."
  },
  {
    "id": 235,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "図書館では ____  ____  ★  ____ 話してください。\n1: 声で  2: 大きな  3: 話さないで  4: 小さな",
    "contextText": null,
    "options": [
      "1 (声で)",
      "2 (大きな)",
      "3 (話さないで)",
      "4 (小さな)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: 図書館では【2: 大きな】 【1: 声で】 【★ 3: 話さないで】 【4: 小さな】 声で話してください (Urutan: 2 - 1 - 3 - 4).\nPosisi bintang (★) adalah 3 (話さないで)."
  },
  {
    "id": 236,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "わたしは ____  ____  ★  ____ 聞きます。\n1: 電車の中で  2: 音楽を  3: いつも  4: イヤホンで",
    "contextText": null,
    "options": [
      "1 (電車の中で)",
      "2 (音楽を)",
      "3 (いつも)",
      "4 (イヤホンで)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: わたしは【3: いつも】 【1: 電車の中で】 【★ 4: イヤホンで】 【2: 音楽を】 聞きます (Urutan: 3 - 1 - 4 - 2).\nPosisi bintang (★) adalah 4 (イヤホンで)."
  },
  {
    "id": 237,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "父に ____  ____  ★  ____ もらいました。\n1: 誕生日プレゼントに  2: 時計を  3: 新しい  4: 買っても",
    "contextText": null,
    "options": [
      "1 (誕生日プレゼントに)",
      "2 (時計を)",
      "3 (新しい)",
      "4 (買っても)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: 父に【1: 誕生日プレゼントに】 【3: 新しい】 【★ 2: 時計を】 【4: 買っても】 もらいました (Urutan: 1 - 3 - 2 - 4).\nPosisi bintang (★) adalah 2 (時計を)."
  },
  {
    "id": 238,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "この町は ____  ____  ★  ____ 好きです。\n1: 静かで  2: 人が  3: 親切だから  4: とても",
    "contextText": null,
    "options": [
      "1 (静かで)",
      "2 (人が)",
      "3 (親切だから)",
      "4 (とても)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: この町は【1: 静かで】 【4: とても】 【★ 2: 人が】 【3: 親切だから】 好きです (Urutan: 1 - 4 - 2 - 3).\nPosisi bintang (★) adalah 2 (人が)."
  },
  {
    "id": 239,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "雨が ____  ____  ★  ____ 出かけません。\n1: 家から  2: 降っているから  3: きょうは  4: 一歩も",
    "contextText": null,
    "options": [
      "1 (家から)",
      "2 (降っているから)",
      "3 (きょうは)",
      "4 (一歩も)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: 雨が【2: 降っているから】 【3: きょうは】 【★ 1: 家から】 【4: 一歩も】 出かけません (Urutan: 2 - 3 - 1 - 4).\nPosisi bintang (★) adalah 1 (家から)."
  },
  {
    "id": 240,
    "level": "N5",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "あたまが ____  ____  ★  ____ 帰りました。\n1: 痛くなったので  2: 早く  3: 会社を  4: 今日は",
    "contextText": null,
    "options": [
      "1 (痛くなったので)",
      "2 (早く)",
      "3 (会社を)",
      "4 (今日は)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: あたまが【1: 痛くなったので】 【4: 今日は】 【★ 2: 早く】 【3: 会社を】 帰りました (Urutan: 1 - 4 - 2 - 3).\nPosisi bintang (★) adalah 2 (早く)."
  },
  {
    "id": 241,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 1 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "先週の日曜日に、友だちと山へ行きました。天気がとてもよかったです。[ 1 ]、山の上は風が強くて少し寒かったです。",
    "options": [
      "しかし",
      "だから",
      "そして",
      "それから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: しかし (Tetapi). Menunjukkan pertentangan antara cuaca yang cerah dengan puncak gunung yang berangin dingin."
  },
  {
    "id": 242,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 2 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "昨日、新しいレストランへ行きました。料理はとてもおいしかったです。[ 2 ]、値段もあまり高くありませんでした。また行きたいです。",
    "options": [
      "それに",
      "でも",
      "ですから",
      "しかし"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: それに (Selain itu). Menambahkan nilai positif: makanannya lezat dan harganya juga tidak mahal."
  },
  {
    "id": 243,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 3 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "わたしは 日本のアニメが 大好きです。[ 3 ]、毎日 日本語を 一生懸命 勉強しています。",
    "options": [
      "ですから",
      "しかし",
      "けれども",
      "でも"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ですから (Oleh karena itu). Menyatakan hubungan sebab akibat."
  },
  {
    "id": 244,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 4 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "朝起きて、顔を洗いました。[ 4 ]、朝ごはんの パンと たまごを 食べました。",
    "options": [
      "それから",
      "だから",
      "しかし",
      "でも"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: それから (Setelah itu). Menyatakan urutan kronologis kegiatan di pagi hari."
  },
  {
    "id": 245,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 5 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "毎日 漢字の 練習を しています。[ 5 ]、なかなか 覚えることが できません。もっと 頑張ります。",
    "options": [
      "でも",
      "ですから",
      "そして",
      "それでは"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: でも (Tetapi). Menghubungkan usaha latihan setiap hari dengan kesulitan menghafal."
  },
  {
    "id": 246,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 6 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "来週、友だちの 結婚式が あります。[ 6 ]、新しい スーツを 買いに デパートへ 行きます。",
    "options": [
      "それで",
      "しかし",
      "でも",
      "けれども"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: それで (Oleh karena itu / makanya). Karena ada pernikahan teman, maka pergi membeli jas."
  },
  {
    "id": 247,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 7 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "田中さんは 歌が とても 上手です。[ 7 ]、ピアノも 上手に ひくことが できます。",
    "options": [
      "そして",
      "しかし",
      "だから",
      "なぜなら"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: そして (Dan / Serta). Menggabungkan dua bakat musik yang dimiliki pak Tanaka."
  },
  {
    "id": 248,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 8 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "昨日のテストは とても 難しかったです。[ 8 ]、勉強した ところが たくさん 出て うれしかったです。",
    "options": [
      "でも",
      "だから",
      "それで",
      "そして"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: でも (Tetapi). Tesnya sulit tetapi materi yang dipelajari banyak keluar."
  },
  {
    "id": 249,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 9 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "傘を 忘れて しまいました。[ 9 ]、雨が 降ってきて 困りました。",
    "options": [
      "そこに",
      "それで",
      "しかし",
      "でも"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Jawaban benar: それで (Maka / akibatnya). Lupa payung, lalu turun hujan sehingga kesulitan."
  },
  {
    "id": 250,
    "level": "N5",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 10 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "図書館で 勉強しました。とても 静かでした。[ 10 ]、集中して たくさん 本が 読めました。",
    "options": [
      "だから",
      "しかし",
      "でも",
      "それから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: だから (Oleh karena itu). Karena sangat tenang, sehingga bisa fokus membaca banyak buku."
  },
  {
    "id": 301,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "鈴木さんは このあと まず 何を しなければなりませんか。",
    "contextText": "【田中さんからの メモ】\n鈴木さん、お疲れ様です。会議の資料を机の上に置いておきました。内容を確認したら、午後3時までに部長に渡してください。よろしくお願いします。",
    "options": [
      "資料の 内容を 確認する",
      "部長に 電話を かける",
      "会議室へ すぐに 行く",
      "新しい資料を 作成する"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 資料の 内容を 確認する. Memo menyatakan: 「内容を確認したら、午後3時までに部長に渡してください」. Langkah pertama sebelum menyerahkan ke manajer adalah memeriksa isi dokumen."
  },
  {
    "id": 302,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "山田さんは 今日 どこへ 行きますか。",
    "contextText": "【山田さんの メモ】\n母へ：\n今日は 学校が 終わったあと、友達と 図書館で 勉強します。そのあと、6時に 駅前の 本屋で 兄と 会って、一緒に 帰ります。晩ごはんは 7時ごろ 食べます。",
    "options": [
      "図書館と 本屋",
      "病院と スーパー",
      "公園と 映画館",
      "学校と プール"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 図書館と 本屋. Yamada menulis akan belajar di perpustakaan lalu bertemu kakaknya di toko buku stasiun."
  },
  {
    "id": 303,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "この部屋の ドアは いつ 閉めますか。",
    "contextText": "【お知らせ】\n会議室を 使う 人へ：\n部屋を 出るときは、必ず エアコンと 電気を 消してください。また、窓を 閉めて、ドアの カギを 受付に 返してください。",
    "options": [
      "部屋を 出るとき",
      "部屋に 入るとき",
      "午前 9時に",
      "午後 5時に"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 部屋を 出るとき (Saat meninggalkan ruangan)."
  },
  {
    "id": 304,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "アディさんは どうして パーティーに 遅れましたか。",
    "contextText": "【メール】\nケンさんへ：\nすみません、今日の 誕生日の パーティーに 少し 遅れます。電車が 事故で 止まって しまいました。今 バスに 乗りましたから、30分後に 着きます。先に 始めていて ください。",
    "options": [
      "電車が 止まったから",
      "道に 迷ったから",
      "寝坊を したから",
      "仕事が 終わらなかったから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 電車が 止まったから (Karena kereta berhenti akibat kecelakaan)."
  },
  {
    "id": 305,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "ゴミは どこに 捨てますか。",
    "contextText": "【ゴミの 捨て方】\nペットボトルや カンは、あらうあとで 青い 箱に 入れてください。紙の ゴミは 白い 箱に 入れてください。生ゴミは 燃えるゴミの 袋に 入れて 出してください。",
    "options": [
      "ペットボトルは 洗ってから 青い箱に 入れる",
      "ペットボトルは 白い箱に 入れる",
      "紙のゴミは 青い箱に 入れる",
      "何でも 燃えるゴミの袋に 入れる"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ペットボトルは 洗ってから 青い箱に 入れる. Sesuai kalimat: 「ペットボトルや カンは、あらうあとで 青い 箱に 入れてください。」"
  },
  {
    "id": 306,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "プールに 入る前に、何を しなければなりませんか。",
    "contextText": "【市民プールを ご利用の 皆様へ】\nプールに 入る前には、必ず シャワーを 浴びてください。また、メガネや 時計を つけたまま 泳ぐことは できません。水泳帽（スイミングキャップ）を かぶってください。",
    "options": [
      "シャワーを 浴びる",
      "メガネを かける",
      "時計を つける",
      "受付で 写真を 撮る"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: シャワーを 浴びる (Mandi shower sebelum masuk kolam renang)."
  },
  {
    "id": 307,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "図書館の 本は 一度に 何冊まで 借りられますか。",
    "contextText": "【図書館の ご案内】\n本は 一人 5冊まで、2週間 借りることが できます。CDや DVDは 2枚まで、1週間です。返す 日を 守って ください。",
    "options": [
      "5冊まで",
      "2冊まで",
      "10冊まで",
      "何冊でも よい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 5冊まで (Maksimal 5 buku)."
  },
  {
    "id": 308,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "薬は いつ 飲みますか。",
    "contextText": "【薬の 飲み方】\nこの 薬は 1日に 3回、朝・昼・晩の ごはんを 食べたあとに 飲んでください。1回に 2錠（じょう）です。お茶や ジュースではなく、水で 飲んでください。",
    "options": [
      "ごはんを 食べたあと",
      "ごはんを 食べる前",
      "寝る直前",
      "いつでも よい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ごはんを 食べたあと (Setelah makan)."
  },
  {
    "id": 309,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "エレベーターが 使えないのは いつですか。",
    "contextText": "【工事の お知らせ】\nマンションの エレベーター点検の ため、明日（火曜日）の 午前10時から 午後2時まで エレベーターが 止まります。階段を ご利用ください。ご迷惑を おかけします。",
    "options": [
      "明日の 午前10時から 午後2時まで",
      "明日の 朝8時から",
      "今夜 午後10時から",
      "明後日の 終日"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 明日の 午前10時から 午後2時まで (Besok jam 10 pagi sampai 2 siang)."
  },
  {
    "id": 310,
    "level": "N5",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "荷物は いつ 届きますか。",
    "contextText": "【配達の お知らせ】\n小林様：\nご注文の 品物は、明日の 夕方（午後4時から 6時まで）に お届けします。ご不在の 場合は、不在連絡票の 番号に お電話ください。",
    "options": [
      "明日の 午後4時から 6時まで",
      "明日の 午前中",
      "今夜の 8時まで",
      "来週の 月曜日"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 明日の 午後4時から 6時まで (Besok sore antara pukul 16:00 hingga 18:00)."
  },
  {
    "id": 311,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "筆者（書いた人）は 休みの日に 何を しましたか。",
    "contextText": "わたしは 先週の 日曜日に、家族と 一緒に 海へ 行きました。朝 7時に 車で 出発しました。海は 青くて とても きれいでした。父と 弟は 魚を つりました。わたしと 母は 海岸を 散歩して、貝がらを 拾いました。お昼は 近くの レストランで 新鮮な 魚料理を 食べました。とても 楽しい 一日でした。",
    "options": [
      "家族と 海へ 行って 楽しく 過ごした",
      "一人で 山登りを した",
      "家で ずっと テレビを 見ていた",
      "友達と デパートで 買い物を した"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 家族と 海へ 行って 楽しく 過ごした. Penulis pergi ke laut bersama keluarganya dan menikmati hari libur."
  },
  {
    "id": 312,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "筆者と お母さんは 海で 何を しましたか。",
    "contextText": "わたしは 先週の 日曜日に、家族と 一緒に 海へ 行きました。朝 7時に 車で 出発しました。海は 青くて とても きれいでした。父と 弟は 魚を つりました。わたしと 母は 海岸を 散歩して、貝がらを 拾いました。お昼は 近くの レストランで 新鮮な 魚料理を 食べました。とても 楽しい 一日でした。",
    "options": [
      "海岸を 散歩して 貝がらを 拾った",
      "魚を つった",
      "海で 泳いだ",
      "レストランで 料理を 作った"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 海岸を 散歩して 貝がらを 拾った (Berjalan-jalan di pantai dan mengumpulkan kerang)."
  },
  {
    "id": 313,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "リンさんは 日本に 来て 最初 どうでしたか。",
    "contextText": "わたしは ベトナムから 来た リンです。日本に 来て もう 3か月に なります。最初は 日本語が あまり 上手に 話せなくて、買い物や 電車の 乗り換えが とても 心配でした。でも、日本語学校の 先生や アパートの 大家さんが いつも 優しく 助けてくれました。今では 友達も たくさん できて、日本の 生活に 慣れました。",
    "options": [
      "日本語が うまく 話せず 心配だった",
      "最初から 日本語が とても 上手だった",
      "日本に 友達が 一人も いなかった",
      "買い物が 嫌いだった"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日本語が うまく 話せず 心配だった (Khawatir karena belum lancar berbicara bahasa Jepang)."
  },
  {
    "id": 314,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "今の リンさんの 様子は どうですか。",
    "contextText": "わたしは ベトナムから 来た リンです。日本に 来て もう 3か月に なります。最初は 日本語が あまり 上手に 話せなくて、買い物や 電車の 乗り換えが とても 心配でした。でも、日本語学校の 先生や アパートの 大家さんが いつも 優しく 助けてくれました。今では 友達も たくさん できて、日本の 生活に 慣れました。",
    "options": [
      "友達も たくさん できて 生活に 慣れた",
      "まだ 毎日 心配している",
      "すぐに ベトナムへ 帰りたい",
      "アパートから 一歩も 出ない"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 友達も たくさん できて 生活に 慣れた (Sudah terbiasa dengan kehidupan di Jepang dan punya banyak teman)."
  },
  {
    "id": 315,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "けんた君の 好きな 季節は なぜ 春ですか。",
    "contextText": "ぼくの 名前は けんたです。ぼくの 一番 好きな 季節は 春です。春になると、公園の 桜の 花が 満開に なって、ピンク色で とても きれいだからです。家族と 一緒に 桜の 木の 下で お弁当を 食べる「お花見」が 大好きです。夏は 暑すぎるし、冬は 寒いです。ですから、あたたかい 春が 最高です。",
    "options": [
      "桜が きれいで お花見が できるから",
      "夏休みが あるから",
      "雪だるまが 作れるから",
      "涼しくて 勉強しやすいから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 桜が きれいで お花見が できるから (Karena bunga sakura mekar indah dan bisa piknik hanami bersama keluarga)."
  },
  {
    "id": 316,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "けんた君は 夏や 冬について どう 思っていますか。",
    "contextText": "ぼくの 名前は けんたです。ぼくの 一番 好きな 季節は 春です。春になると、公園の 桜の 花が 満開に なって、ピンク色で とても きれいだからです。家族と 一緒に 桜の 木の 下で お弁当を 食べる「お花見」が 大好きです。夏は 暑すぎるし、冬は 寒いです。ですから、あたたかい 春が 最高です。",
    "options": [
      "夏は 暑すぎるし、冬は 寒いと 思っている",
      "夏も 冬も 大好きだと 思っている",
      "夏は 寒くて 冬は 暑いと 思っている",
      "どちらも 春より 好きだと 思っている"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 夏は 暑すぎるし、冬は 寒いと 思っている (Musim panas terlalu terik dan musim dingin terlalu dingin)."
  },
  {
    "id": 317,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "マリアさんは 毎日 どうやって 大学へ 通っていますか。",
    "contextText": "マリアさんは 留学生です。アパートから 大学までは 少し 遠いです。毎朝 7時半に 起きて、8時に アパートを 出ます。まず 駅まで 10分 歩きます。それから 地下鉄に 乗って、20分で 大学の 前の 駅に 着きます。雨の日は バスを 使いますが、普段は 地下鉄が 時間どおりに 来るので 好きです。",
    "options": [
      "歩いて 駅へ 行き、地下鉄に 乗る",
      "いつも 自転車で 通っている",
      "毎朝 タクシーを 使う",
      "車を 自分で 運転する"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 歩いて 駅へ 行き、地下鉄に 乗る (Berjalan kaki ke stasiun lalu naik kereta bawah tanah subway)."
  },
  {
    "id": 318,
    "level": "N5",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "マリアさんが 普段 地下鉄を 使う 理由は 何ですか。",
    "contextText": "マリアさんは 留学生です。アパートから 大学までは 少し 遠いです。毎朝 7時半に 起きて、8時に アパートを 出ます。まず 駅まで 10分 歩きます。それから 地下鉄に 乗って、20分で 大学の 前の 駅に 着きます。雨の日は バスを 使いますが、普段は 地下鉄が 時間どおりに 来るので 好きです。",
    "options": [
      "時間どおりに 来るから",
      "料金が 無料だから",
      "人が 少ないから",
      "バスより 景色が いいから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 時間どおりに 来るから (Karena kereta datang tepat waktu / jikan doori)."
  },
  {
    "id": 319,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "スピーチコンテストに 出たい 人は、いつまでに 申し込まなければなりませんか。",
    "contextText": "【さくら日本語学校 スピーチコンテスト】\n・日時：12月15日（土）13:00 - 16:00\n・場所：市民ホール 2階\n・参加費：無料\n・申込締切：11月30日（金）17:00まで\n※ 参加したい人は、事務所で 申込用紙を もらって 提出してください。",
    "options": [
      "11月30日の 17:00まで",
      "12月15日の 13:00まで",
      "いつでも 申し込める",
      "コンテスト当日の 朝まで"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 11月30日の 17:00まで. Tertulis jelas pada bagian: 「申込締切：11月30日（金）17:00まで」."
  },
  {
    "id": 320,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "このコンテストの 参加費は いくらですか。",
    "contextText": "【さくら日本語学校 スピーチコンテスト】\n・日時：12月15日（土）13:00 - 16:00\n・場所：市民ホール 2階\n・参加費：無料\n・申込締切：11月30日（金）17:00まで\n※ 参加したい人は、事務所で 申込用紙を もらって 提出してください。",
    "options": [
      "無料（0円）",
      "1,000円",
      "2,000円",
      "500円"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 無料（0円）. Tertulis: 「参加費：無料」."
  },
  {
    "id": 321,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "富士山ツアーの 集合場所は どこですか。",
    "contextText": "【日帰り 富士山バスツアー】\n・出発日：毎週 日曜日\n・集合場所：新宿駅 西口交番前\n・集合時間：午前 7時45分（8時00分 出発）\n・代金：大人 6,000円 / 子ども 3,000円\n※ 雨天でも 出発します。",
    "options": [
      "新宿駅 西口交番前",
      "東京駅 丸の内口",
      "渋谷駅 ハチ公前",
      "富士山 5合目"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 新宿駅 西口交番前. Tertulis pada: 「集合場所：新宿駅 西口交番前」."
  },
  {
    "id": 322,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "大人1人と 子ども1人で 参加すると、代金は 合計 いくらですか。",
    "contextText": "【日帰り 富士山バスツアー】\n・出発日：毎週 日曜日\n・集合場所：新宿駅 西口交番前\n・集合時間：午前 7時45分（8時00分 出発）\n・代金：大人 6,000円 / 子ども 3,000円\n※ 雨天でも 出発します。",
    "options": [
      "9,000円",
      "6,000円",
      "12,000円",
      "3,000円"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 9,000円. Dewasa (6.000 yen) + Anak-anak (3.000 yen) = 9.000 yen."
  },
  {
    "id": 323,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "病院が 休み（休診）なのは 何曜日ですか。",
    "contextText": "【さくらクリニック 診療時間】\n・月〜金：9:00 - 12:30 / 14:30 - 18:00\n・土曜日：9:00 - 13:00（午後休診）\n・日曜日・祝日：休診（休み）\n※ 初診の方は 保険証を お持ちください。",
    "options": [
      "日曜日と 祝日",
      "月曜日と 金曜日",
      "土曜日の 午前",
      "火曜日と 木曜日"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日曜日と 祝日. Tertulis: 「日曜日・祝日：休診（休み）」."
  },
  {
    "id": 324,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "土曜日に 診療を 受けたい 場合、何時までに 行けば よいですか。",
    "contextText": "【さくらクリニック 診療時間】\n・月〜金：9:00 - 12:30 / 14:30 - 18:00\n・土曜日：9:00 - 13:00（午後休診）\n・日曜日・祝日：休診（休み）\n※ 初診の方は 保険証を お持ちください。",
    "options": [
      "13:00まで",
      "18:00まで",
      "12:30まで",
      "何時でもよい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 13:00まで. Pada hari Sabtu buka dari jam 9:00 sampai 13:00."
  },
  {
    "id": 325,
    "level": "N5",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "スーパーの「タイムセール（割引時間）」は 何時からですか。",
    "contextText": "【みどりスーパー お得なお知らせ】\n・営業時間：9:00 - 21:00\n・タイムセール：毎日 17:00 - 19:00（肉・魚・惣菜が 20% 引き！）\n・ポイント2倍デー：毎週 火曜日\n※ レジ袋は 1枚 5円です。マイバッグを お持ちください。",
    "options": [
      "毎日 17:00から 19:00まで",
      "朝 9:00から 12:00まで",
      "毎週 火曜日の 終日",
      "夜 20:00から 21:00まで"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 毎日 17:00から 19:00まで. Tertulis: 「タイムセール：毎日 17:00 - 19:00」."
  },
  {
    "id": 701,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は これから まず 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\n会社で 男の人と 女の人が 話しています。\n男：「課長、今日の 会議室の 準備は どうしましょうか。」\n女：「10階の 会議室Aに 資料を 20部 配っておいてください。プロジェクターは 私が 用意しますから。」\n男：「わかりました。すぐ やります。」",
    "options": [
      "会議室Aに 資料を 配る",
      "プロジェクターを 用意する",
      "課長に 電話を する",
      "資料を コピーし直す"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 会議室Aに 資料を 配る. Manajer wanita menginstruksikan: 「10階の 会議室Aに 資料を 20部 配っておいてください」 dan si pria menyanggupi untuk langsung melakukannya."
  },
  {
    "id": 702,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "女の学生は 何を 買って 帰りますか。",
    "contextText": "【音声スクリプト / Situasi】\n家で お母さんと 娘が 電話で 話しています。\n母：「もしもし、今 どこ？ 帰りに スーパーで 牛乳を 2本 買ってきてくれる？」\n娘：「うん、いいよ。パンや 卵は いらない？」\n母：「パンは まだ あるから、牛乳だけで いいわ。お願いね。」\n娘：「わかった、買っていくね。」",
    "options": [
      "牛乳 2本",
      "牛乳と パン",
      "牛乳と 卵",
      "パンと 卵"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 牛乳 2本. Sang ibu mengatakan bahwa roti masih ada, jadi hanya minta dibelikan 2 kotak susu."
  },
  {
    "id": 703,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は 明日 何時に どこへ 行きますか。",
    "contextText": "【音声スクリプト / Situasi】\n男の人と 女の人が 明日の 約束について 話しています。\n男：「明日は どこで 会おうか。」\n女：「駅の 改札の前は 人が 多いから、東口の カフェの 前に しない？」\n男：「いいね。時間は 10時で いい？」\n女：「うん、10時に カフェの 前で ね。」",
    "options": [
      "10時に 東口の カフェの前",
      "10時に 駅の 改札の前",
      "9時に 東口の カフェの前",
      "11時に 西口の カフェの前"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 10時に 東口の カフェの前. Mereka sepakat bertemu jam 10 di depan kafe pintu timur (Higashiguchi)."
  },
  {
    "id": 704,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "学生は 宿題を いつまでに 出さなければなりませんか。",
    "contextText": "【音声スクリプト / Situasi】\n教室で 先生が 話しています。\n先生：「みなさん、今日の 宿題は ワークブックの 25ページです。今週の 金曜日の 授業の 始めに 集めますから、忘れずに やってきてくださいね。」",
    "options": [
      "金曜日の 授業の 始めまで",
      "明日の 朝まで",
      "木曜日の 夕方まで",
      "来週の 月曜日まで"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 金曜日の 授業の 始めまで (Awal jam pelajaran hari Jumat)."
  },
  {
    "id": 705,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は どの 傘を 持って 行きますか。",
    "contextText": "【音声スクリプト / Situasi】\n玄関で 夫と 妻が 話しています。\n夫：「外は 雨が 降っているね。傘を 持って 行こう。」\n妻：「青い 長い 傘は 壊れているから、そっちの 黒い 折りたたみ傘を 使って。」\n夫：「あ、これね。ありがとう、行ってきます。」",
    "options": [
      "黒い 折りたたみ傘",
      "青い 長い 傘",
      "白い ビニール傘",
      "黄色い 傘"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 黒い 折りたたみ傘. Payung biru panjang rusak, sehingga istri menyarankan payung lipat hitam."
  },
  {
    "id": 706,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "二人は どこで 昼ごはんを 食べますか。",
    "contextText": "【音声スクリプト / Situasi】\n昼休みに 同僚の 二人が 話しています。\n男：「お腹が すいたね。食堂へ 行こうか。」\n女：「今日の 食堂は とても 混んでいるみたい。駅前の ラーメン屋に しない？」\n男：「いいね、そうしよう。」",
    "options": [
      "駅前の ラーメン屋",
      "会社の 食堂",
      "近くの コンビニ",
      "イタリアン レストラン"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 駅前の ラーメン屋. Karena kafetaria kantor sedang ramai padat, mereka sepakat ke kedai ramen depan stasiun."
  },
  {
    "id": 707,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "女の人は 図書館で まず 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\n図書館の 受付で 女の人と 係員が 話しています。\n女：「すみません、初めて 本を 借りたいのですが。」\n係員：「では、まず こちらの カードに お名前と ご住所、お電話番号を 書いてください。そのあとで 本を お選びください。」\n女：「わかりました。」",
    "options": [
      "カードに 名前や 住所を 書く",
      "本を 探して 選ぶ",
      "本を カウンターに 返す",
      "利用料金を 支払う"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: カードに 名前や 住所を 書く (Mengisi kartu pendaftaran anggota baru lebih dulu)."
  },
  {
    "id": 708,
    "level": "N5",
    "category": "Choukai: Kadai Rikai",
    "question": "男の子は 部屋で 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\nお母さんと 男の子が 話しています。\n母：「タケシ、遊ぶ前に 散らかった おもちゃを 片付けなさい。」\n子：「えー、ゲーム したいよ。」\n母：「片付けたら、おやつに ケーキを あげるわよ。」\n子：「わーい！ すぐ 片付ける！」",
    "options": [
      "おもちゃを 片付ける",
      "ゲームを する",
      "ケーキを 焼く",
      "外へ 遊びに 行く"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: おもちゃを 片付ける (Merapikan mainan agar mendapat kue)."
  },
  {
    "id": 709,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人は どうして 昨日 学校を 休みましたか。",
    "contextText": "【音声スクリプト / Situasi】\n男の学生と 女の学生が 話しています。\n男：「マリアさん、昨日は どうしたの？ 学校 休んでいたね。」\n女：「うん、一昨日から 熱が 38度も 出ちゃって、一日中 寝ていたの。」\n男：「そうだったんだ。もう 大丈夫？」\n女：「薬を 飲んだから、だいぶ よくなったよ。」",
    "options": [
      "熱が 出て 病気だったから",
      "旅行へ 行っていたから",
      "寝坊を して 遅刻したから",
      "アルバイトが 忙しかったから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 熱が 出て 病気だったから (Karena demam tinggi 38 derajat)."
  },
  {
    "id": 710,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は なぜ 新しい アパートに 引っ越したいのですか。",
    "contextText": "【音声スクリプト / Situasi】\n二人の 友人が 話しています。\n女：「今のアパート、広くて いい部屋じゃない？」\n男：「うん、部屋は 気に入っているんだけど、駅から 歩いて 25分も かかるんだ。毎朝 本当に 大変で…。」\n女：「あー、それは 遠いね。」",
    "options": [
      "駅から 遠くて 不便だから",
      "部屋が 狭すぎるから",
      "家賃が 高すぎるから",
      "周りが うるさいから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 駅から 遠くて 不便だから (Karena jarak stasiun 25 menit jalan kaki, sangat melelahkan setiap pagi)."
  },
  {
    "id": 711,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人は どの 料理が 一番 好きだと 言っていますか。",
    "contextText": "【音声スクリプト / Situasi】\nレストランで 二人が メニューを 見ながら 話しています。\n男：「日本料理で 何が 一番 好き？」\n女：「天ぷらや 寿司も おいしいけど、私は すき焼きが 一番 好きだな。甘い タレが お肉に よく 合うの。」\n男：「僕も すき焼き 大好きだよ。」",
    "options": [
      "すき焼き",
      "天ぷら",
      "寿司",
      "ラーメン"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: すき焼き. Wanita tersebut secara gamblang menyatakan: 「私は すき焼きが 一番 好きだな」."
  },
  {
    "id": 712,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は なぜ 旅行に 行きませんか。",
    "contextText": "【音声スクリプト / Situasi】\n大学で 二人が 話しています。\n女：「連休の 北海道旅行、一緒に行かない？」\n男：「行きたいのは やまやまなんだけど、最近 出費が 多くて お金が ピンチなんだ。」\n女：「そっか、残念。また 今度ね。」",
    "options": [
      "お金が ないから",
      "時間が ないから",
      "飛行機が 苦手だから",
      "北海道が 寒いから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: お金が ないから (Karena sedang tidak memiliki cukup uang / okane ga pinchi)."
  },
  {
    "id": 713,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人が この カバンを 選んだ 理由は 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n店で 客の 女の人と 店員が 話しています。\n店員：「こちらの 革の カバンは とても 丈夫ですよ。」\n客：「素敵ですね。でも、私は 荷物が いつも 多いので、軽くて ポケットが たくさん ある ナイロンの 方に します。」",
    "options": [
      "軽くて ポケットが たくさん あるから",
      "本物の 革で 丈夫だから",
      "色が 鮮やかだから",
      "値段が 一番 安いから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 軽くて ポケットが たくさん あるから (Ringan dan banyak sakunya)."
  },
  {
    "id": 714,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は 明日 何時に 起きなければなりませんか。",
    "contextText": "【音声スクリプト / Situasi】\n家族の 会話です。\n母：「明日は 新幹線が 7時出発だから、6時前には 家を 出ないと 間に合わないわよ。」\n息子：「じゃあ、朝ごはんを 食べて 準備するから、5時に 起きないと ダメだね。」\n母：「目覚まし時計、セットして おきなさいね。」",
    "options": [
      "5時",
      "6時",
      "7時",
      "8時"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 5時. Harus keluar rumah sebelum jam 6, sehingga dia harus bangun pukul 05:00."
  },
  {
    "id": 715,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人は 何のために アルバイトを していますか。",
    "contextText": "【音声スクリプト / Situasi】\n二人の 学生が 話しています。\n男：「アンナさん、毎晩 カフェで バイト 頑張っているね。」\n女：「うん、来年の 夏休みに 日本へ 旅行に 行きたいの。そのための 旅費を 貯めているんだ。」\n男：「えらいね！ 応援しているよ。」",
    "options": [
      "日本へ 旅行に 行く お金を 貯めるため",
      "新しい パソコンを 買うため",
      "学費を 払うため",
      "友だちに お金を 貸すため"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日本へ 旅行に 行く お金を 貯めるため (Menabung biaya liburan ke Jepang)."
  },
  {
    "id": 716,
    "level": "N5",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は 誕生日に 何を もらいましたか。",
    "contextText": "【音声スクリプト / Situasi】\n男の人と 女の人が 話しています。\n女：「ケン君、昨日の 誕生日、ご両親から 何か プレゼント もらった？」\n男：「うん、父と 母から かっこいい 自転車を もらったよ！ 通学に 使えるから すごく 嬉しいんだ。」",
    "options": [
      "自転車",
      "時計",
      "本",
      "スマートフォン"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 自転車 (Sepeda)."
  },
  {
    "id": 717,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "同僚が 重い荷物を 持っています。手伝いたいとき、何と 言いますか。",
    "contextText": "【状況 / Situasi】\n会社の 同僚が 両手で 重そうな 段ボール箱を 持って 運んでいます。手伝いたいと 思います。",
    "options": [
      "手伝いましょうか。",
      "手伝ってください。",
      "どういたしまして。",
      "ごちそうさまでした。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 手伝いましょうか。 Menawarkan bantuan secara sopan: \"Bolehkah saya bantu?\"."
  },
  {
    "id": 718,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "朝、会社の 人に 会いました。何と 挨拶しますか。",
    "contextText": "【状況 / Situasi】\n朝 8時半、会社の 玄関で 上司や 同僚に 会いました。",
    "options": [
      "おはようございます。",
      "こんにちは。",
      "こんばんは。",
      "さようなら。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: おはようございます。 Salam pagi hari di tempat kerja."
  },
  {
    "id": 719,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "ごはんを 食べる 前に、何と 言いますか。",
    "contextText": "【状況 / Situasi】\n食堂で 料理が 運ばれてきました。今から 食べ始めます。",
    "options": [
      "いただきます。",
      "ごちそうさまでした。",
      "いってきます。",
      "いってらっしゃい。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いただきます。 Diucapkan sebelum menyantap makanan."
  },
  {
    "id": 720,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "他人の 足を 踏んでしまいました。何と 言いますか。",
    "contextText": "【状況 / Situasi】\n満員電車の中で、うっかり 隣の 人の 足を 踏んでしまいました。",
    "options": [
      "すみません！",
      "おめでとうございます！",
      "はじめまして。",
      "どういたしまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: すみません！ (Maafkan saya!)."
  },
  {
    "id": 721,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "家を 出て 出かけるとき、家族に 何と 言いますか。",
    "contextText": "【状況 / Situasi】\n靴を 履いて、学校へ 出発します。家に 残る お母さんに 挨拶します。",
    "options": [
      "行ってきます。",
      "行ってらっしゃい。",
      "ただいま。",
      "お帰りなさい。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 行ってきます。 (Ittekimasu = Saya berangkat dulu)."
  },
  {
    "id": 722,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "先生の 部屋に 入るとき、何と 言いますか。",
    "contextText": "【状況 / Situasi】\n先生の 研究室の ドアを ノックして、中へ 入ります。",
    "options": [
      "失礼します。",
      "失礼しました。",
      "お邪魔でした。",
      "ごめんなさいでした。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 失礼します。 (Shitsurei shimasu = Permisi)."
  },
  {
    "id": 723,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "仕事が 終わって 先に 帰るとき、何と 言いますか。",
    "contextText": "【状況 / Situasi】\n自分の 仕事が 終わり、まだ 働いている 同僚たちに 挨拶して 帰ります。",
    "options": [
      "お先に 失礼します。",
      "お疲れ様でした。",
      "さようならでした。",
      "ご苦労様でした。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: お先に 失礼します。 (Osaki ni shitsurei shimasu = Permisi pulang lebih dulu)."
  },
  {
    "id": 724,
    "level": "N5",
    "category": "Choukai: Utatsugen",
    "question": "相手の 言ったことが よく 聞こえませんでした。何と 言いますか。",
    "contextText": "【状況 / Situasi】\n周りの 音が うるさくて、相手の 言葉が 聞き取れませんでした。もう一度 言ってほしいです。",
    "options": [
      "もう一度 お願いします。",
      "もう一度 言いました。",
      "全然 わかりました。",
      "どうも ありがとう。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: もう一度 お願いします。 (Mohon sekali lagi)."
  },
  {
    "id": 725,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「お茶を もう一杯 いかがですか。」",
    "options": [
      "いいえ、もう けっこうです。",
      "はい、食べました。",
      "どうも すみませんでした。",
      "ごめんなさい、わかりません。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いいえ、もう けっこうです。 (Tidak, sudah cukup terima kasih)."
  },
  {
    "id": 726,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「昨日は ありがとうございました。」",
    "options": [
      "いいえ、どういたしまして。",
      "はい、ありがとうございます。",
      "さようなら。",
      "お邪魔します。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いいえ、どういたしまして。 (Sama-sama)."
  },
  {
    "id": 727,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「お名前は 何と おっしゃいますか。」",
    "options": [
      "田中と 申します。",
      "先生です。",
      "お元気ですか。",
      "はい、名前です。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 田中と 申します。 (Nama saya Tanaka)."
  },
  {
    "id": 728,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「明日、一緒に 映画を 見に 行きませんか。」",
    "options": [
      "いいですね、ぜひ 行きましょう！",
      "いいえ、映画を 見ました。",
      "はい、行きますか。",
      "映画館は あそこです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いいですね、ぜひ 行きましょう！ (Ide bagus, ayo kita pergi!)."
  },
  {
    "id": 729,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「駅まで どうやって 行きますか。」",
    "options": [
      "バスで 10分くらいですよ。",
      "駅は あちらです。",
      "友達と 行きます。",
      "昨日 行きました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: バスで 10分くらいですよ。 Menjelaskan cara pergi: naik bus sekitar 10 menit."
  },
  {
    "id": 730,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「お疲れ様でした。」",
    "options": [
      "お疲れ様でした。",
      "ごちそうさまでした。",
      "いってらっしゃい。",
      "はじめまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: お疲れ様でした。 Salam penutup sesama rekan kerja."
  },
  {
    "id": 731,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「ペンを ちょっと 貸して もらえませんか。」",
    "options": [
      "はい、どうぞ 使ってください。",
      "いいえ、貸しました。",
      "ペンを 買いました。",
      "どういたしまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: はい、どうぞ 使ってください。 (Ya, silakan pakai)."
  },
  {
    "id": 732,
    "level": "N5",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「日本語の 勉強は どうですか。」",
    "options": [
      "難しいですが、とても 面白いです。",
      "日本語を 勉強します。",
      "教室で 勉強しています。",
      "先生が 好きです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 難しいですが、とても 面白いです。 (Sulit, tapi sangat menarik)."
  },
  {
    "id": 401,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「試験」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "しけん",
      "じけん",
      "しっけん",
      "しげん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: しけん (Shiken). Kanji 試験 berarti \"Ujian\"."
  },
  {
    "id": 402,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「経済」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "けいざい",
      "けいさい",
      "きょうざい",
      "きょうさい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: けいざい (Keizai). Kanji 経済 berarti \"Ekonomi\"."
  },
  {
    "id": 403,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「案内」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "あんない",
      "あんないん",
      "あんな",
      "あんうち"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あんない (Annai). Kanji 案内 berarti \"Pemandu / Petunjuk\"."
  },
  {
    "id": 404,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「約束」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "やくそく",
      "やくぞく",
      "やっそく",
      "やくしょく"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: やくそく (Yakusoku). Kanji 約束 berarti \"Janji\"."
  },
  {
    "id": 405,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「複雑」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "ふくざつ",
      "ふくさつ",
      "ふくぞう",
      "ふくそう"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ふくざつ (Fukuzatsu). Kanji 複雑 berarti \"Rumit / Kompleks\"."
  },
  {
    "id": 406,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「受ける」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "うける",
      "つける",
      "かける",
      "あける"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: うける (Ukeru). Kanji 受ける berarti \"Menerima / Mengikuti (ujian)\"."
  },
  {
    "id": 407,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「準備」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "じゅんび",
      "じゅんひ",
      "じゅび",
      "ちゅんび"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: じゅんび (Junbi). Kanji 準備 berarti \"Persiapan\"."
  },
  {
    "id": 408,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「急に」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "きゅうに",
      "いそに",
      "きょうに",
      "きゅうじん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: きゅうに (Kyuu ni). Kanji 急に berarti \"Tiba-tiba\"."
  },
  {
    "id": 409,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「注意」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "ちゅうい",
      "しゅうい",
      "ちゅい",
      "ちょうい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ちゅうい (Chuui). Kanji 注意 berarti \"Perhatian / Hati-hati\"."
  },
  {
    "id": 410,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「相談」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "そうだん",
      "しょくだん",
      "そうたん",
      "しんだん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: そうだん (Soudan). Kanji 相談 berarti \"Konsultasi / Berunding\"."
  },
  {
    "id": 411,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「返事」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "へんじ",
      "へんし",
      "かえじ",
      "はんじ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: へんじ (Henji). Kanji 返事 berarti \"Balasan / Jawaban\"."
  },
  {
    "id": 412,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「集める」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "あつめる",
      "あつまる",
      "ためる",
      "まとめる"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あつめる (Atsumeru). Kanji 集める berarti \"Mengumpulkan\"."
  },
  {
    "id": 413,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「反対」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "はんたい",
      "ほんたい",
      "はんだい",
      "はんてい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: はんたい (Hantai). Kanji 反対 berarti \"Oposisi / Lawan / Menentang\"."
  },
  {
    "id": 414,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「紹介」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "しょうかい",
      "ちょうかい",
      "しょうがい",
      "じょうかい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: しょうかい (Shoukai). Kanji 紹介 berarti \"Perkenalan\"."
  },
  {
    "id": 415,
    "level": "N4",
    "category": "Moji-Goi: Kanji Yomi",
    "question": "「経験」の よみかたは どれですか。",
    "contextText": null,
    "options": [
      "けいけん",
      "けいげん",
      "きょうけん",
      "けんけん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: けいけん (Keiken). Kanji 経験 berarti \"Pengalaman\"."
  },
  {
    "id": 416,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "切手を ____ います。\n「あつめて」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "集めて",
      "進めて",
      "拾めて",
      "取めて"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 集めて (Atsumete = Mengumpulkan)."
  },
  {
    "id": 417,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "お金を ____。\n「はらいます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "払います",
      "売ります",
      "買います",
      "貸します"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 払います (Haraimasu = Membayar)."
  },
  {
    "id": 418,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "じこに ____。\n「ちゅうい」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "注意",
      "用意",
      "意見",
      "意味"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 注意 (Chuui = Perhatian / Berhati-hati)."
  },
  {
    "id": 419,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "りょこうの ____ を します。\n「じゅんび」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "準備",
      "設備",
      "予備",
      "守備"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 準備 (Junbi = Persiapan)."
  },
  {
    "id": 420,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "かれの いけんに ____ します。\n「はんたい」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "反対",
      "反省",
      "対応",
      "相対"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 反対 (Hantai = Menentang / Berseberangan)."
  },
  {
    "id": 421,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "しけんの けっかを ____。\n「しらせます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "知らせます",
      "調べます",
      "教らせます",
      "話らせます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 知らせます (Shirasemasu = Memberitahukan)."
  },
  {
    "id": 422,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "あさねぼう して しまいました。\n「ねぼう」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "寝坊",
      "寝町",
      "睡坊",
      "眠坊"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 寝坊 (Nebou = Bangun kesiangan)."
  },
  {
    "id": 423,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "しょうらいの ____ を たてます。\n「けいかく」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "計画",
      "計図",
      "予定",
      "企図"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 計画 (Keikaku = Rencana)."
  },
  {
    "id": 424,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "先生に ____ します。\n「そうだん」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "相談",
      "相談",
      "会談",
      "対話"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 相談 (Soudan = Konsultasi / Meminta saran)."
  },
  {
    "id": 425,
    "level": "N4",
    "category": "Moji-Goi: Kanji Kakitoki",
    "question": "荷物を 網棚に ____。\n「のせます」の かんじは どれですか。",
    "contextText": null,
    "options": [
      "載せます",
      "乗せます",
      "置せます",
      "上せます"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Jawaban benar: 乗せます (Nosemasu = Menaruh / Memuat barang di rak)."
  },
  {
    "id": 426,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "雨で 試合が ____ に なりました。",
    "contextText": null,
    "options": [
      "中止",
      "禁止",
      "停止",
      "廃止"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 中止 (Chuushi = Batal). Pertandingan dibatalkan karena hujan."
  },
  {
    "id": 427,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "この 機械の ____ を 教えてください。",
    "contextText": null,
    "options": [
      "使い方",
      "作り方",
      "買い方",
      "話し方"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 使い方 (Tsukaikata = Cara penggunaan)."
  },
  {
    "id": 428,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "大事な 書類を ____ しまいました。",
    "contextText": null,
    "options": [
      "なくして",
      "こわして",
      "やぶって",
      "おとして"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: なくして (Nakushite = Menghilangkan / Kehilangan)."
  },
  {
    "id": 429,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "会議の ____ を メールで 送りました。",
    "contextText": null,
    "options": [
      "予定",
      "用事",
      "約束",
      "都合"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 予定 (Yotei = Jadwal / Rencana kegiatan)."
  },
  {
    "id": 430,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "先生の 説明を 聞いて、よく ____ できました。",
    "contextText": null,
    "options": [
      "理解",
      "勘違い",
      "心配",
      "相談"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 理解 (Rikai = Memahami). Rikai dekimashita = dapat mengerti."
  },
  {
    "id": 431,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "この 問題は とても ____ ですから、難解です。",
    "contextText": null,
    "options": [
      "複雑",
      "簡単",
      "丁寧",
      "盛ん"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 複雑 (Fukuzatsu = Rumit / Kompleks)."
  },
  {
    "id": 432,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "仕事で ミスを して、上司に ____ を 言いました。",
    "contextText": null,
    "options": [
      "謝罪",
      "お礼",
      "感謝",
      "お祝い"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 謝罪 (Shazai = Permintaan maaf) / あやまり."
  },
  {
    "id": 433,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "毎晩 パソコンで メールを ____ しています。",
    "contextText": null,
    "options": [
      "チェック",
      "スイッチ",
      "スタート",
      "クリック"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: チェック (Check = Memeriksa / Mengecek pesan)."
  },
  {
    "id": 434,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "図書館で 借りた 本を ____。",
    "contextText": null,
    "options": [
      "返しました",
      "渡しました",
      "出しました",
      "捨てました"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 返しました (Kaeshi mashita = Mengembalikan)."
  },
  {
    "id": 435,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "朝、電車が ____ いて、乗れませんでした。",
    "contextText": null,
    "options": [
      "混んで",
      "すいて",
      "あいて",
      "こわれて"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 混んで (Konde = Penuh sesak / Padat)."
  },
  {
    "id": 436,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "財布を 落としましたが、交番に ____ いました。",
    "contextText": null,
    "options": [
      "届いて",
      "運んで",
      "送って",
      "渡して"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 届いて (Todoite = Sampai / Telah diserahkan ke pos polisi)."
  },
  {
    "id": 437,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "日本に 留学する ____ が 決まりました。",
    "contextText": null,
    "options": [
      "こと",
      "もの",
      "とき",
      "わけ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: こと. Koto ga kimarimashita = hal tersebut telah diputuskan."
  },
  {
    "id": 438,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "試験に 合格する ____、毎日 勉強しています。",
    "contextText": null,
    "options": [
      "ために",
      "ように",
      "とおりに",
      "あとに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ために (~tame ni = Demi / Untuk tujuan)."
  },
  {
    "id": 439,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "車を 運転する ときは、スピードに ____ してください。",
    "contextText": null,
    "options": [
      "気をつけて",
      "心配して",
      "安心して",
      "遠慮して"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 気をつけて (Ki o tsukete = Hati-hati)."
  },
  {
    "id": 440,
    "level": "N4",
    "category": "Moji-Goi: Bunryaku Imi",
    "question": "この アパートの ____ は 駅から 5分で とても 近いです。",
    "contextText": null,
    "options": [
      "場所",
      "場合",
      "場面",
      "都合"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 場所 (Basho = Lokasi / Tempat)."
  },
  {
    "id": 441,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "あの 人は <u>遠慮</u> しています。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "あの 人は 恥ずかしがって 控えています。",
      "あの 人は 怒っています。",
      "あの 人は 喜んでいます。",
      "あの 人は 威張っています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あの 人は 恥ずかしがって 控えています (Enryo = sungkan / menahan diri)."
  },
  {
    "id": 442,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "会議の 日程を <u>変更</u> しました。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "会議の 日程を 変えました。",
      "会議の 日程を 決めました。",
      "会議の 日程を 中止しました。",
      "会議の 日程を 忘れました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 会議の 日程を 変えました (Henkou = mengubah)."
  },
  {
    "id": 443,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "この 仕事を <u>引き受けます</u>。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この 仕事を やることに します。",
      "この 仕事を 断ります。",
      "この 仕事を 頼みます。",
      "この 仕事を 終わらせます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この 仕事を やることに します (Hikiukeru = menerima/mengambil tanggung jawab pekerjaan)."
  },
  {
    "id": 444,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "部屋を <u>片付けました</u>。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "部屋を きれいに 整理しました。",
      "部屋を 汚しました。",
      "部屋を 壊しました。",
      "部屋を 出ました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 部屋を きれいに 整理しました (Katazukeru = merapikan)."
  },
  {
    "id": 445,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "彼女は <u>おとなしい</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "彼女は 静かで 落ち着いています。",
      "彼女は うるさくて 元気です。",
      "彼女は 怒りっぽいです。",
      "彼女は 背が 高いです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 彼女は 静かで 落ち着いています (Otonashii = pendiam, santun dan tenang)."
  },
  {
    "id": 446,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "明日までに <u>必ず</u> 出してください。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "明日までに 絶対に 出してください。",
      "明日までに できれば 出してください。",
      "明日までに たぶん 出してください。",
      "明日までに もしかしたら 出してください。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 明日までに 絶対に 出してください (Kanarazu = zettai ni = pasti/harus)."
  },
  {
    "id": 447,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "この 服は <u>汚れて</u> います。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この 服は きれいでは ありません。",
      "この 服は 新しく ありません。",
      "この 服は 高く ありません。",
      "この 服は 破れて います。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この 服は きれいでは ありません (Yogorete iru = kotor / tidak bersih)."
  },
  {
    "id": 448,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "<u>急に</u> 雨が 降り出しました。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "突然 雨が 降り出しました。",
      "ゆっくり 雨が 降り出しました。",
      "やっと 雨が 降り出しました。",
      "とうとう 雨が 降り出しました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 突然 雨が 降り出しました (Kyuu ni = totsuzen = tiba-tiba)."
  },
  {
    "id": 449,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "彼は <u>まじめ</u> な 学生です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "彼は 一生懸命 勉強する 学生です。",
      "彼は よく 遊ぶ 学生です。",
      "彼は 冗談が 好きな 学生です。",
      "彼は いつも 眠そうな 学生です。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 彼は 一生懸命 勉強する 学生です (Majime = tekun, sungguh-sungguh, rajin)."
  },
  {
    "id": 450,
    "level": "N4",
    "category": "Moji-Goi: Ruigo",
    "question": "この 町は <u>にぎやか</u> です。\nだいたい 同じ いみの 文は どれですか。",
    "contextText": null,
    "options": [
      "この 町は 人が 多くて 活気が あります。",
      "この 町は 静かで 落ち着いています。",
      "この 町は 危険で 暗いです。",
      "この 町は 自然が たくさん あります。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この 町は 人が 多くて 活気が あります (Nigiyaka = ramai dan hidup)."
  },
  {
    "id": 451,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「都合」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "明日の 午後は 都合が 悪いです。",
      "この ペンは 都合が 書きやすいです。",
      "駅の 都合で 電車を 待ちます。",
      "都合な 雨が 降っています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 明日の 午後は 都合が 悪いです (Tsugou ga warui = jadwal/kondisi sedang tidak luang/tidak cocok)."
  },
  {
    "id": 452,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「案内」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "京都の 町を 友達に 案内しました。",
      "案内を 飲んで、元気になりました。",
      "部屋で 案内を 寝ました。",
      "案内な 服を 着ています。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 京都の 町を 友達に 案内しました (Annai suru = memandu / mengajak berkeliling)."
  },
  {
    "id": 453,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「遠慮」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "どうぞ 遠慮しないで 食べてください。",
      "電車の中で 遠慮を 聞きました。",
      "遠慮な 映画を 見ました。",
      "遠慮を かけて、出かけます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: どうぞ 遠慮しないで 食べてください (Enryo shinaide = jangan sungkan-sungkan)."
  },
  {
    "id": 454,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「故障」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "テレビが 故障して、音が出ません。",
      "テストで 故障な 点を とりました。",
      "故障な 風邪を ひきました。",
      "スープに 故障を 入れます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: テレビが 故障して、音が出ません (Koshou = kerusakan mesin/elektronik)."
  },
  {
    "id": 455,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「複雑」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "この パズルの ルールは 複雑で 難しいです。",
      "複雑な 水を 飲みました。",
      "今日の 空は 複雑に 青いです。",
      "複雑な 友達と 会いました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: この パズルの ルールは 複雑で 難しいです (Fukuzatsu = rumit/kompleks)."
  },
  {
    "id": 456,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「相談」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "進路について 先生に 相談しました。",
      "図書館で 相談を 読みました。",
      "相談な ごはんを 食べました。",
      "バスに 相談を 忘れました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 進路について 先生に 相談しました (Soudan suru = berdiskusi / berkonsultasi mengenai masa depan)."
  },
  {
    "id": 457,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「中止」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "大雨の ため、花火大会は 中止に なりました。",
      "ドアを 中止して ください。",
      "中止な 時間に 起きました。",
      "ノートに 中止を 書きました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 大雨の ため、花火大会は 中止に なりました (Chuushi ni naru = dibatalkan)."
  },
  {
    "id": 458,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「丁寧」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "あの 店員は いつも 丁寧な 言葉遣いを します。",
      "丁寧な 電車が 走っています。",
      "昨日は 丁寧な 雨でした。",
      "この 机は 丁寧に 重いです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あの 店員は いつも 丁寧な 言葉遣いを します (Teinei = sopan, ramah, teliti)."
  },
  {
    "id": 459,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「予定」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "来週は 出張の 予定が あります。",
      "予定を 着て、出かけます。",
      "予定な スープを 飲みました。",
      "駅の 予定に 着きました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 来週は 出張の 予定が あります (Yotei ga aru = memiliki jadwal/agenda dinas kerja)."
  },
  {
    "id": 460,
    "level": "N4",
    "category": "Moji-Goi: Youhou",
    "question": "「失敗」の つかいかたで 一番 いい ものは どれですか。",
    "contextText": null,
    "options": [
      "料理の 味付けを 失敗して しまいました。",
      "失敗な カバンを 買いました。",
      "今夜は 失敗に 眠いです。",
      "失敗を 歩いて、駅へ 行きます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 料理の 味付けを 失敗して しまいました (Shippai suru = gagal / salah meracik rasa masakan)."
  },
  {
    "id": 501,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "電車の中で 足を ____ しまいました。",
    "contextText": null,
    "options": [
      "踏まれて",
      "踏んで",
      "踏ませて",
      "踏まさせて"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 踏まれて (Bentuk Pasif Menjengkelkan / Meiwaku Ukemi: fuma rete shimaimashita = kaki saya terinjak orang)."
  },
  {
    "id": 502,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "母は 弟に 部屋を 掃除 ____。",
    "contextText": null,
    "options": [
      "させました",
      "されました",
      "しました",
      "させられました"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: させました (Bentuk Kausatif / Shieki: Ibu menyuruh adik membersihkan kamar)."
  },
  {
    "id": 503,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "先生に レポートを 直して ____。",
    "contextText": null,
    "options": [
      "いただきました",
      "くださいました",
      "あげました",
      "やりました"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いただきました (V-te itadakimashita = menerima bantuan perbaikan dari orang yang dihormati/guru)."
  },
  {
    "id": 504,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "熱が ____、無理を しないで 休んでください。",
    "contextText": null,
    "options": [
      "あるなら",
      "あったら",
      "あれば",
      "あると"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あるなら (~nara = pengandaian saran/instruksi berdasarkan situasi)."
  },
  {
    "id": 505,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "雨が ____、試合は 行われます。",
    "contextText": null,
    "options": [
      "降っても",
      "降ると",
      "降ったら",
      "降れば"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 降っても (~temo = meskipun hujan turun, pertandingan tetap berlangsung)."
  },
  {
    "id": 506,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "日本語が 話せる ____ なりたいです。",
    "contextText": null,
    "options": [
      "ように",
      "ために",
      "ことに",
      "とおりに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ように (V-kanoukei + you ni naritai = ingin menjadi mampu berbicara)."
  },
  {
    "id": 507,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "家を 買う ____、貯金を しています。",
    "contextText": null,
    "options": [
      "ために",
      "ように",
      "ことに",
      "はずで"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ために (V-kamus + tame ni = demi tujuan membeli rumah)."
  },
  {
    "id": 508,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "部長は もう お帰りに ____。",
    "contextText": null,
    "options": [
      "なりました",
      "しました",
      "なれました",
      "いたしました"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: なりました (Sonkeigo / Bentuk Hormat: o-kaeri ni narimashita)."
  },
  {
    "id": 509,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "明日 10時に 社長に お目にかかる ____ です。",
    "contextText": null,
    "options": [
      "予定",
      "つもり",
      "はず",
      "わけ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 予定 (Yotei = jadwal resmi)."
  },
  {
    "id": 510,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "電車が 来る ____、少し お茶を 飲みましょう。",
    "contextText": null,
    "options": [
      "までに",
      "まで",
      "あいだ",
      "あいだに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: までに (Made ni = sebelum batas waktu kereta tiba)."
  },
  {
    "id": 511,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この 本は 読めば ____ 面白いです。",
    "contextText": null,
    "options": [
      "読むほど",
      "読んだら",
      "読んだと",
      "読むより"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 読むほど (~ba ~hodo = semakin dibaca, semakin menarik)."
  },
  {
    "id": 512,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "あの子は まるで 大人の ____ 話します。",
    "contextText": null,
    "options": [
      "ように",
      "ような",
      "そうで",
      "らしく"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ように (Marude ~ no you ni = berbicara seolah-olah layaknya orang dewasa)."
  },
  {
    "id": 513,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "窓から 雨が 降って ____ のが 見えます。",
    "contextText": null,
    "options": [
      "いる",
      "ある",
      "いく",
      "くる"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: いる (futte iru no ga miemasu = terlihat hujan sedang turun)."
  },
  {
    "id": 514,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "田中さんは 明日の 会議に 出席する ____ です。",
    "contextText": null,
    "options": [
      "はず",
      "べき",
      "わけ",
      "こと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: はず (Hazu desu = semestinya / seharusnya hadir)."
  },
  {
    "id": 515,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "薬を 飲んだ ____、熱が 下がりません。",
    "contextText": null,
    "options": [
      "のに",
      "ので",
      "から",
      "ため"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: のに (~noni = padahal sudah minum obat, tetapi demam tak kunjung turun)."
  },
  {
    "id": 516,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この ドアは 自動で ____。",
    "contextText": null,
    "options": [
      "開きます",
      "開けます",
      "開けられます",
      "開かせます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 開きます (Jidoushi: Akimasu = terbuka secara otomatis)."
  },
  {
    "id": 517,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "テレビを ____ まま、寝て しまいました。",
    "contextText": null,
    "options": [
      "つけた",
      "つける",
      "つけて",
      "つけ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: つけた (V-ta mama = tertidur dalam kondisi TV masih menyala)."
  },
  {
    "id": 518,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "今から 荷物を 送り ____ ところです。",
    "contextText": null,
    "options": [
      "にいく",
      "にいった",
      "にいくの",
      "にいくところ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: にいく (V-kamus + tokoro desu = tepat baru akan pergi mengirim paket)."
  },
  {
    "id": 519,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "わたしが お荷物を お持ち ____。",
    "contextText": null,
    "options": [
      "します",
      "なさいます",
      "なられます",
      "くださいます"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: します (Kenjougo / Merendahkan diri: o-mochi shimasu = biar saya bawakan barang bawaan Anda)."
  },
  {
    "id": 520,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "この カバンは 軽くて ____ やすいです。",
    "contextText": null,
    "options": [
      "持ち",
      "持つ",
      "持て",
      "持った"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 持ち (V-masu stem + yasui = mudah dijinjing / dibawa)."
  },
  {
    "id": 521,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "山田さんは フランス語が ____ そうです。",
    "contextText": null,
    "options": [
      "話せる",
      "話す",
      "話して",
      "話し"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 話せる (V-futsuukei + sou desu = kabar burung / konon pak Yamada bisa bahasa Prancis)."
  },
  {
    "id": 522,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "雨が 降り ____ そうです。傘を 持って 行きましょう。",
    "contextText": null,
    "options": [
      "出し",
      "出す",
      "出して",
      "出した"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 出し (V-masu stem + sou desu = tampak seperti akan mulai turun hujan)."
  },
  {
    "id": 523,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "時間までに 宿題を 出す ____ です。",
    "contextText": null,
    "options": [
      "べき",
      "はず",
      "わけ",
      "こと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: べき (Beki desu = seharusnya / kewajiban moral)."
  },
  {
    "id": 524,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "兄は わたしに 新しい 自転車を ____。",
    "contextText": null,
    "options": [
      "くれました",
      "あげました",
      "もらいました",
      "やりました"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: くれました (Kuremashita = memberi kepada saya / pihak penutur)."
  },
  {
    "id": 525,
    "level": "N4",
    "category": "Bunpou: Bunpou Keishiki",
    "question": "先生の 説明の ____ 書いてください。",
    "contextText": null,
    "options": [
      "とおりに",
      "ために",
      "ように",
      "かわりに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: とおりに (No toori ni = sesuai dengan / persis seperti penjelasan guru)."
  },
  {
    "id": 526,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "これは ____  ____  ★  ____ カメラです。\n1: 買った  2: 父に  3: 旅行のために  4: もらった",
    "contextText": null,
    "options": [
      "1 (買った)",
      "2 (父に)",
      "3 (旅行のために)",
      "4 (もらった)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: これは【3: 旅行のために】 【2: 父に】 【★ 1: 買ってもらった】 (Urutan: 3 - 2 - 1 - 4).\nPosisi bintang (★) adalah 1 (買った)."
  },
  {
    "id": 527,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "明日までに ____  ____  ★  ____ いけません。\n1: 出さなければ  2: レポートを  3: 先生に  4: きれいに",
    "contextText": null,
    "options": [
      "1 (出さなければ)",
      "2 (レポートを)",
      "3 (先生に)",
      "4 (きれいに)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: 明日までに【4: きれいに】 【2: レポートを】 【★ 3: 先生に】 【1: 出さなければ】 いけません (Urutan: 4 - 2 - 3 - 1).\nPosisi bintang (★) adalah 3 (先生に)."
  },
  {
    "id": 528,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "外国語を ____  ____  ★  ____ 大変です。\n1: 上手に  2: 話せる  3: なるのは  4: ように",
    "contextText": null,
    "options": [
      "1 (上手に)",
      "2 (話せる)",
      "3 (なるのは)",
      "4 (ように)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: 外国語を【1: 上手に】 【2: 話せる】 【★ 4: ように】 【3: なるのは】 大変です (Urutan: 1 - 2 - 4 - 3).\nPosisi bintang (★) adalah 4 (ように)."
  },
  {
    "id": 529,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "彼は ____  ____  ★  ____ 来ませんでした。\n1: 約束した  2: 時間に  3: のに  4: なかなか",
    "contextText": null,
    "options": [
      "1 (約束した)",
      "2 (時間に)",
      "3 (のに)",
      "4 (なかなか)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: 彼は【1: 約束した】 【2: 時間に】 【★ 3: のに】 【4: なかなか】 来ませんでした (Urutan: 1 - 2 - 3 - 4).\nPosisi bintang (★) adalah 3 (のに)."
  },
  {
    "id": 530,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "この パソコンは ____  ____  ★  ____ 便利です。\n1: 軽くて  2: 持ち運び  3: やすいので  4: とても",
    "contextText": null,
    "options": [
      "1 (軽くて)",
      "2 (持ち運び)",
      "3 (やすいので)",
      "4 (とても)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: この パソコンは【1: 軽くて】 【2: 持ち運び】 【★ 3: やすいので】 【4: とても】 便利です (Urutan: 1 - 2 - 3 - 4).\nPosisi bintang (★) adalah 3 (やすいので)."
  },
  {
    "id": 531,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "わたしが ____  ____  ★  ____ 教えます。\n1: 作り方を  2: ケーキの  3: おいしい  4: あなたに",
    "contextText": null,
    "options": [
      "1 (作り方を)",
      "2 (ケーキの)",
      "3 (おいしい)",
      "4 (あなたに)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: わたしが【4: あなたに】 【3: おいしい】 【★ 2: ケーキの】 【1: 作り方を】 教えます (Urutan: 4 - 3 - 2 - 1).\nPosisi bintang (★) adalah 2 (ケーキの)."
  },
  {
    "id": 532,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "健康の ____  ____  ★  ____ います。\n1: 毎朝  2: ために  3: 走るように  4: して",
    "contextText": null,
    "options": [
      "1 (毎朝)",
      "2 (ために)",
      "3 (走るように)",
      "4 (して)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: 健康の【2: ために】 【1: 毎朝】 【★ 3: 走るように】 【4: して】 います (Urutan: 2 - 1 - 3 - 4).\nPosisi bintang (★) adalah 3 (走るように)."
  },
  {
    "id": 533,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "風邪を ____  ____  ★  ____ 寝てください。\n1: ひかない  2: あたたかく  3: ように  4: して",
    "contextText": null,
    "options": [
      "1 (ひかない)",
      "2 (あたたかく)",
      "3 (ように)",
      "4 (して)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: 風邪を【1: ひかない】 【3: ように】 【★ 2: あたたかく】 【4: して】 寝てください (Urutan: 1 - 3 - 2 - 4).\nPosisi bintang (★) adalah 2 (あたたかく)."
  },
  {
    "id": 534,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "雨が ____  ____  ★  ____ 行きます。\n1: 降っても  2: サッカーの  3: 試合に  4: 必ず",
    "contextText": null,
    "options": [
      "1 (降っても)",
      "2 (サッカーの)",
      "3 (試合に)",
      "4 (必ず)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: 雨が【1: 降っても】 【4: 必ず】 【★ 2: サッカーの】 【3: 試合に】 行きます (Urutan: 1 - 4 - 2 - 3).\nPosisi bintang (★) adalah 2 (サッカーの)."
  },
  {
    "id": 535,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "田中さんに ____  ____  ★  ____ もらいました。\n1: 日本語を  2: 親切に  3: 教えて  4: わたしは",
    "contextText": null,
    "options": [
      "1 (日本語を)",
      "2 (親切に)",
      "3 (教えて)",
      "4 (わたしは)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: 田中さんに【4: わたしは】 【2: 親切に】 【★ 1: 日本語を】 【3: 教えて】 もらいました (Urutan: 4 - 2 - 1 - 3).\nPosisi bintang (★) adalah 1 (日本語を)."
  },
  {
    "id": 536,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "この部屋は ____  ____  ★  ____ 開けてください。\n1: 暑すぎるので  2: 少し  3: 窓を  4: 空気を換えるために",
    "contextText": null,
    "options": [
      "1 (暑すぎるので)",
      "2 (少し)",
      "3 (窓を)",
      "4 (空気を換えるために)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Urutan benar: この部屋は【1: 暑すぎるので】 【4: 空気を換えるために】 【★ 3: 窓を】 【2: 少し】 開けてください (Urutan: 1 - 4 - 3 - 2).\nPosisi bintang (★) adalah 3 (窓を)."
  },
  {
    "id": 537,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "部長は ____  ____  ★  ____ なりました。\n1: アメリカへ  2: 出張に  3: 行かれることに  4: 来月",
    "contextText": null,
    "options": [
      "1 (アメリカへ)",
      "2 (出張に)",
      "3 (行かれることに)",
      "4 (来月)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Urutan benar: 部長は【4: 来月】 【1: アメリカへ】 【★ 2: 出張に】 【3: 行かれることに】 なりました (Urutan: 4 - 1 - 2 - 3).\nPosisi bintang (★) adalah 2 (出張に)."
  },
  {
    "id": 538,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "何回 ____  ____  ★  ____ できませんでした。\n1: 練習しても  2: 上手に  3: ピアノが  4: 弾くことが",
    "contextText": null,
    "options": [
      "1 (練習しても)",
      "2 (上手に)",
      "3 (ピアノが)",
      "4 (弾くことが)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Urutan benar: 何回【1: 練習しても】 【3: ピアノが】 【★ 2: 上手に】 【4: 弾くことが】 できませんでした (Urutan: 1 - 3 - 2 - 4).\nPosisi bintang (★) adalah 2 (上手に)."
  },
  {
    "id": 539,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "駅の ____  ____  ★  ____ できました。\n1: 新しい  2: 近くに  3: レストランが  4: おいしい",
    "contextText": null,
    "options": [
      "1 (新しい)",
      "2 (近くに)",
      "3 (レストランが)",
      "4 (おいしい)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: 駅の【2: 近くに】 【4: おいしい】 【★ 1: 新しい】 【3: レストランが】 できました (Urutan: 2 - 4 - 1 - 3).\nPosisi bintang (★) adalah 1 (新しい)."
  },
  {
    "id": 540,
    "level": "N4",
    "category": "Bunpou: Bun no Kousei (★)",
    "question": "子どもに ____  ____  ★  ____ います。\n1: 英語を  2: 習わせて  3: 早くから  4: わたしは",
    "contextText": null,
    "options": [
      "1 (英語を)",
      "2 (習わせて)",
      "3 (早くから)",
      "4 (わたしは)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Urutan benar: 子どもに【4: わたしは】 【3: 早くから】 【★ 1: 英語を】 【2: 習わせて】 います (Urutan: 4 - 3 - 1 - 2).\nPosisi bintang (★) adalah 1 (英語を)."
  },
  {
    "id": 541,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 1 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "最近、健康のために ジョギングを 始めました。[ 1 ]、急に 激しい運動を すると 体を 痛めてしまいます。ですから、毎日 無理を せず、30分程度 ゆっくり 走るように しています。",
    "options": [
      "しかし",
      "だから",
      "そして",
      "そのうえ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: しかし (Tetapi / Namun demikian). Menyatakan peringatan pertentangan bahwa olahraga mendadak bisa mencederai badan."
  },
  {
    "id": 542,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 2 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "日本語の 勉強は 漢字を 覚えるのが 一番 大変です。[ 2 ]、語彙や 文法も たくさん 覚えなければなりません。でも、諦めずに 頑張ります。",
    "options": [
      "さらに",
      "しかし",
      "ですから",
      "それなら"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: さらに (Bahkan lebih jauh lagi / Selain itu). Menambahkan kesulitan belajar kosakata dan tata bahasa."
  },
  {
    "id": 543,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 3 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "会社で 新しい プロジェクトが 始まりました。仕事が とても 忙しくなりました。[ 3 ]、毎日 やりがいが あって とても 充実しています。",
    "options": [
      "けれども",
      "だから",
      "そして",
      "それに"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: けれども (Meskipun demikian). Pekerjaannya sibuk tetapi terasa memuaskan."
  },
  {
    "id": 544,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 4 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "明日の 天気予報に よると、午後から 大雨に なるそうです。[ 4 ]、傘を 持って 出かけたほうが 安心です。",
    "options": [
      "したがって",
      "しかし",
      "でも",
      "けれども"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: したがって (Oleh karena itu / Maka). Menghubungkan ramalan hujan dengan anjuran membawa payung."
  },
  {
    "id": 545,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 5 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "日本で ホームステイを したとき、ホストファミリーは とても 親切でした。[ 5 ]、最初は 言葉が 通じなくて 困ることも ありました。",
    "options": [
      "もっとも",
      "だから",
      "そして",
      "それから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: もっとも (Meski begitu / Walaupun begitu). Mengungkapkan sisi lain kendala bahasa saat homestay."
  },
  {
    "id": 546,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 6 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "この レストランは 料理が おいしくて 有名です。[ 6 ]、スタッフの 接客も 非常に 丁寧で 気持ちが いいです。",
    "options": [
      "そのうえ",
      "しかし",
      "だから",
      "けれども"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: そのうえ (Ditambah lagi). Menambahkan kelebihan lain pelayanan staf yang ramah."
  },
  {
    "id": 547,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 7 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "今夜は 友人と 食事の 約束が あります。[ 7 ]、定時に 仕事を 終わらせるように 頑張ります。",
    "options": [
      "そのため",
      "しかし",
      "でも",
      "なぜなら"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: そのため (Demi hal itu / Maka dari itu)."
  },
  {
    "id": 548,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 8 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "旅行の 準備を しました。着替えや カメラを カバンに 入れました。[ 8 ]、財布と パスポートを 忘れては いけません。",
    "options": [
      "特に",
      "しかし",
      "だから",
      "それでは"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 特に (Khususnya / Terutama). Menekankan pentingnya paspor dan dompet."
  },
  {
    "id": 549,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 9 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "図書館の 本を 汚してしまいました。[ 9 ]、すぐに カウンターへ 行って 謝りました。",
    "options": [
      "そこで",
      "しかし",
      "でも",
      "けれども"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: そこで (Lalu kemudian / Oleh sebab itu)."
  },
  {
    "id": 550,
    "level": "N4",
    "category": "Bunpou: Bunsho no Bunpou",
    "question": "[ 10 ] に 入る 一番 いい 言葉は どれですか。",
    "contextText": "彼は 毎日 ピアノを 練習しています。[ 10 ]、コンクールで 優勝する ことが できました。努力の 成果です。",
    "options": [
      "その結果",
      "しかし",
      "でも",
      "けれども"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: その結果 (Hasilnya / Buahnya). Menyatakan hasil kerja keras membuahkan kemenangan kontes."
  },
  {
    "id": 601,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "山田さんは このメールを 読んで、まず 何を しなければなりませんか。",
    "contextText": "【業務連絡メール】\n山田様：\nお疲れ様です。明日の 午前10時からの クライアントとの 打ち合わせですが、場所が 会議室Bから 8階の 第一応接室に 変更に なりました。資料は すでに 人数分 印刷して ありますので、事前に プロジェクターの 動作確認を お願いいたします。",
    "options": [
      "プロジェクターの 動作確認を する",
      "資料を 印刷する",
      "クライアントに 電話を かける",
      "会議室Bを 予約する"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: プロジェクターの 動作確認を する. Email menyatakan dokumen sudah dicetak, dan Yamada diminta memeriksa kelancaran proyektor terlebih dahulu."
  },
  {
    "id": 602,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "この アパートの 住民は、ゴミ出しについて どのように 注意されていますか。",
    "contextText": "【アパート管理会社からの お知らせ】\n入居者の 皆様へ：\n最近、ゴミ出しの ルールが 守られていないという 苦情が 寄せられています。燃えるゴミは 必ず 収集日当日の 朝8時までに 出してください。前日の 夜から 出しておくと、カラスや 猫が ゴミ袋を 破いて 散らかってしまいます。ご協力を お願いします。",
    "options": [
      "当日の 朝8時までに 出す",
      "前日の 夜に 出しておく",
      "いつでも 好きなときに 出してよい",
      "ゴミ箱を 部屋の 前に 置く"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 当日の 朝8時までに 出す (Wajib dikeluarkan pada pagi hari pengambilan maksimal pukul 08:00)."
  },
  {
    "id": 603,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "図書館の パソコンを 利用したい 人は、どうすれば よいですか。",
    "contextText": "【図書館 パソコン利用案内】\n館内の インターネット用 パソコンを ご利用に なる方は、2階の カウンターで 利用カードを 提示して、番号札を お受け取りください。お一人様 1回につき 1時間まで ご利用いただけます。印刷は 1枚 10円です。",
    "options": [
      "カウンターで カードを 見せて 番号札を もらう",
      "予約なしで 自由に 座って 使う",
      "自宅から パソコンを 持ち込む",
      "1回につき 3時間まで 使える"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: カウンターで カードを 見せて 番号札を もらう (Menunjukkan kartu di konter lantai 2 dan mengambil nomor giliran)."
  },
  {
    "id": 604,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "この 薬を 服用する際、最も 注意すべき 点は 何ですか。",
    "contextText": "【お薬の 説明書】\n本剤は 眠気を 催す成分が 含まれています。服用後は、自動車の 運転や 危険を伴う 機械の 操作は 絶対に おやめください。また、飲酒前後の 服用は 避けてください。",
    "options": [
      "服用後に 車の 運転を してはいけない",
      "食前に 飲まなければならない",
      "お酒と 一緒に 飲むと 効果が 上がる",
      "眠くならないので 安心である"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 服用後に 車の 運転を してはいけない (Dilarang mengemudi setelah minum obat karena menyebabkan kantuk)."
  },
  {
    "id": 605,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "コンサートの チケットを キャンセルしたい 場合、どうなりますか。",
    "contextText": "【チケット購入規約】\nご購入後の チケットの 変更および キャンセル・払い戻しは、公演が 中止に なった場合を 除き、いかなる 理由であっても 一切 お受けできません。あらかじめ ご了承の上、お買い求めください。",
    "options": [
      "公演中止の 場合を除き、払い戻しは できない",
      "前日までなら 全額 返金される",
      "半額だけ 返金される",
      "別の日程に 自由に変更できる"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 公演中止の 場合を除き、払い戻しは できない (Kecuali konser dibatalkan, tiket tidak dapat di-refund)."
  },
  {
    "id": 606,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "留学生相談室は いつ 開いていますか。",
    "contextText": "【留学生相談室からのお知らせ】\n学業や 生活の 悩みについて 専門の カウンセラーが 相談に 応じます。\n開室時間：毎週 火曜日・木曜日（13:00 - 17:00）\n※ 相談は 無料ですが、前日までに ホームページから 予約が 必要です。",
    "options": [
      "火曜日と 木曜日の 午後",
      "月曜日から 金曜日の 午前",
      "土曜日と 日曜日の 終日",
      "予約なしで いつでも 利用可能"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 火曜日と 木曜日の 午後 (Setiap Selasa dan Kamis pukul 13:00 - 17:00)."
  },
  {
    "id": 607,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "ホテルの チェックアウト時間は 何時ですか。",
    "contextText": "【ホテル ご宿泊の 手引き】\nチェックインは 15:00から、チェックアウトは 11:00までとなっております。ご出発の際は、ルームキーを フロントへ ご返却ください。11:00を 過ぎますと、延長料金が 発生いたしますので ご注意ください。",
    "options": [
      "午前 11:00まで",
      "午後 15:00まで",
      "正午 12:00まで",
      "いつでも 自由である"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 午前 11:00まで (Maksimal pukul 11:00 pagi)."
  },
  {
    "id": 608,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "台風が 来たとき、学校の 授業は どうなりますか。",
    "contextText": "【台風接近に 伴う 授業の 措置】\n午前7時の 時点で、当市に「暴風警報」が 発令されている場合は、午前の 授業は 休講と します。午前11時までに 警報が 解除された場合は 午後から 授業を 行いますが、11時を 過ぎても 警報が 続いている場合は 終日 休講となります。",
    "options": [
      "午前7時に 暴風警報が 出ていれば 午前の 授業は 休み",
      "雨が 降れば 無条件で 休み",
      "警報に 関係なく 授業が ある",
      "午前11時に 警報が 解除されても 終日 休み"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 午前7時に 暴風警報が 出ていれば 午前の 授業は 休み (Jika pukul 07:00 ada peringatan badai, kelas pagi diliburkan)."
  },
  {
    "id": 609,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "荷物の 再配達を 依頼するには、どうすれば よいですか。",
    "contextText": "【ご不在連絡票】\nお荷物を お届けに 参りましたが、ご不在でしたので 持ち帰りました。再配達を ご希望の 方は、伝票番号を ご確認の上、QRコードまたは お電話（0120-XXX-XXX）にて ご連絡ください。保管期限は 本日から 7日間です。",
    "options": [
      "QRコードまたは 電話で 再配達を 依頼する",
      "直接 郵便局の 本部まで 行かなければならない",
      "連絡しなくても 毎日 自動で 届く",
      "新しい 伝票を 買いに行く"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: QRコードまたは 電話で 再配達を 依頼する (Scan QR code atau telepon ke nomor bebas pulsa)."
  },
  {
    "id": 610,
    "level": "N4",
    "category": "Dokkai: Tanbun Dokkai",
    "question": "この レストランで 禁煙なのは どの 時間帯ですか。",
    "contextText": "【店内 禁煙の お知らせ】\n当店では、ランチタイム（11:30 - 14:30）は 全席 完全禁煙と させていただいております。喫煙される お客様は、店外の 指定喫煙所を ご利用いただきますよう ご協力 お願い申し上げます。ディナータイムは 分煙となっております。",
    "options": [
      "ランチタイム（11:30 - 14:30）の 全席",
      "一日中 全席",
      "ディナータイムの 全席",
      "喫煙所だけ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ランチタイム（11:30 - 14:30）の 全席 (Jam makan siang seluruh meja bebas rokok)."
  },
  {
    "id": 611,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "筆者は 日本の コンビニの 何に 驚きましたか。",
    "contextText": "わたしが 日本に 来て 最も 驚いたことの 一つは、コンビニエンスストアの 便利さです。お弁当や 飲み物を 買えるだけでなく、24時間 いつでも お金を 引き出したり、公共料金や 税金を 支払ったりする ことができます。さらに、荷物の 発送や 受け取り、コンサートの チケット購入まで 可能です。母国では 郵便局や 銀行へ 行かなければ ならなかった 手続きが、すべて 近所の コンビニで 済ませられることに 本当に 感動しました。",
    "options": [
      "買い物の ほかに 銀行や 郵便、支払いの 手続きまで できること",
      "お弁当の 値段が とても 高いこと",
      "夜になると すぐに 閉まってしまうこと",
      "店員が 一人も いないこと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 買い物の ほかに 銀行や 郵便、支払いの 手続きまで できること. Penulis kagum konbini Jepang menyediakan perbankan, pos paket, hingga pembayaran tagihan."
  },
  {
    "id": 612,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "筆者の 母国では、公共料金の 支払いは どこで していましたか。",
    "contextText": "わたしが 日本に 来て 最も 驚いたことの 一つは、コンビニエンスストアの 便利さです。お弁当や 飲み物を 買えるだけでなく、24時間 いつでも お金を 引き出したり、公共料金や 税金を 支払ったりする ことができます。さらに、荷物の 発送や 受け取り、コンサートの チケット購入まで 可能です。母国では 郵便局や 銀行へ 行かなければ ならなかった 手続きが、すべて 近所の コンビニで 済ませられることに 本当に 感動しました。",
    "options": [
      "郵便局や 銀行",
      "コンビニ",
      "スーパー",
      "学校"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 郵便局や 銀行. Tertulis: 「母国では 郵便局や 銀行へ 行かなければ ならなかった 手続きが...」."
  },
  {
    "id": 613,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "介護施設で 働く アディさんが 心がけていることは 何ですか。",
    "contextText": "わたしは 特定技能の ビザで、日本の 高齢者介護施設で 働いています。入浴や 食事の 介助など 体力を 使う 仕事も 多いですが、一番 大切に しているのは 利用者さんとの コミュニケーションです。耳が 遠い お年寄りの 方には、目線を 合わせて ゆっくり はっきり 話しかけるように しています。利用者さんが「ありがとう、アディさん」と 笑顔で 言ってくれたとき、この 仕事を やっていて 本当に よかったと 心から 思います。",
    "options": [
      "利用者さんの 目線を 合わせて ゆっくり はっきり 話すこと",
      "なるべく 話しかけずに 早く 介助を 終わらせること",
      "日本語ではなく 英語で コミュニケーションを とること",
      "体力作りの トレーニングだけを すること"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 利用者さんの 目線を 合わせて ゆっくり はっきり 話すこと. Adi selalu menyejajarkan kontak mata dan berbicara perlahan dan jelas kepada lansia."
  },
  {
    "id": 614,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "アディさんが 仕事に やりがいを 感じるのは どんなときですか。",
    "contextText": "わたしは 特定技能の ビザで、日本の 高齢者介護施設で 働いています。入浴や 食事の 介助など 体力を 使う 仕事も 多いですが、一番 大切に しているのは 利用者さんとの コミュニケーションです。耳が 遠い お年寄りの 方には、目線を 合わせて ゆっくり はっきり 話しかけるように しています。利用者さんが「ありがとう、アディさん」と 笑顔で 言ってくれたとき、この 仕事を やっていて 本当に よかったと 心から 思います。",
    "options": [
      "利用者さんが 笑顔で お礼を 言ってくれたとき",
      "給料が たくさん 入ったとき",
      "仕事が 早く 終わって 帰れるとき",
      "休みが たくさん あるとき"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 利用者さんが 笑顔で お礼を 言ってくれたとき (Ketika lansia tersenyum dan mengucapkan terima kasih kepadanya)."
  },
  {
    "id": 615,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "日本の「もったいない」という 言葉は どんな 意味ですか。",
    "contextText": "日本には「もったいない」という 伝統的な 言葉が あります。これは、食べ物や 道具など、物を 無駄に 捨てたり 粗末に 扱ったりすることを 惜しむ 気持ちを 表しています。例えば、ごはん粒を お茶碗に 残さずに 綺麗に 食べることや、壊れた 物を 修理して 長く 大切に 使う 心です。環境問題が 注目されている 今、この「もったいない」という 日本の 精神は 世界中からも 高く 評価されています。",
    "options": [
      "物を 無駄にせず 大切に 扱う 心",
      "新しい 物を どんどん 買う 心",
      "古い 物を すぐに 捨てること",
      "お金を たくさん 使うこと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 物を 無駄にせず 大切に 扱う 心. Mottainai berarti rasa menyayangkan menyia-nyiakan sesuatu dan menghargai barang secara berkesinambungan."
  },
  {
    "id": 616,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "世界中で「もったいない」という 言葉が 評価されているのは なぜですか。",
    "contextText": "日本には「もったいない」という 伝統的な 言葉が あります。これは、食べ物や 道具など、物を 無駄に 捨てたり 粗末に 扱ったりすることを 惜しむ 気持ちを 表しています。例えば、ごはん粒を お茶碗に 残さずに 綺麗に 食べることや、壊れた 物を 修理して 長く 大切に 使う 心です。環境問題が 注目されている 今、この「もったいない」という 日本の 精神は 世界中からも 高く 評価されています。",
    "options": [
      "環境問題を 考える上で 大切な 精神だから",
      "日本語の 発音が かわいいから",
      "日本経済が 豊かになったから",
      "最新の テクノロジーだから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 環境問題を 考える上で 大切な 精神だから (Karena merupakan filosofi penting dalam mengatasi persoalan lingkungan hidup)."
  },
  {
    "id": 617,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "筆者が 失敗から 学んだ 教訓は 何ですか。",
    "contextText": "新入社員のころ、わたしは 先輩から 頼まれた 仕事の やり方が よく 分かりませんでした。しかし、「質問したら 怒られるかもしれない」と 恐れて、一人で 勝手に 進めて しまいました。その結果、大きな ミスを してしまい、会社全体に 迷惑を かけることに なりました。先輩は 怒るどころか、「分からないときは すぐに 相談・報告しなさい」と 教えてくれました。それ以来、わたしは 遠慮せずに 相談することを 徹底しています。",
    "options": [
      "分からないときは 恐れずに すぐ 相談・報告すること",
      "質問せずに 自分で 何でも 決めること",
      "ミスを 隠して 一人で 抱え込むこと",
      "頼まれた 仕事を 断ること"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 分からないときは 恐れずに すぐ 相談・報告すること (Jika tidak paham jangan takut untuk segera berkonsultasi dan melapor/Hou-Ren-So)."
  },
  {
    "id": 618,
    "level": "N4",
    "category": "Dokkai: Chuubun Dokkai",
    "question": "先輩は ミスを した後、どのように 対応してくれましたか。",
    "contextText": "新入社員のころ、わたしは 先輩から 頼まれた 仕事の やり方が よく 分かりませんでした。しかし、「質問したら 怒られるかもしれない」と 恐れて、一人で 勝手に 進めて しまいました。その結果、大きな ミスを してしまい、会社全体に 迷惑を かけることに なりました。先輩は 怒るどころか、「分からないときは すぐに 相談・報告しなさい」と 教えてくれました。それ以来、わたしは 遠慮せずに 相談することを 徹底しています。",
    "options": [
      "怒らずに、相談・報告の 大切さを 教えてくれた",
      "とても 激しく 怒鳴った",
      "もう 仕事を 一切 任せなくなった",
      "会社を 辞めるように 言った"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 怒らずに、相談・報告の 大切さを 教えてくれた (Alih-alih marah, senior justru mengajari pentingnya konsultasi dan pelaporan)."
  },
  {
    "id": 619,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "留学生奨学金の 応募資格で 求められている 日本語能力は どれですか。",
    "contextText": "【2026年度 アジア留学生奨学金 募集要項】\n・支給額：月額 80,000円（1年間）\n・応募資格：\n　1. 日本の 大学または 専門学校に 在籍している 正規留学生\n　2. JLPT N3以上（または N4取得者で 成績優秀な者）\n　3. 前年度の 出席率が 90%以上の者\n・提出書類：願書、成績証明書、推薦書\n・応募締切：4月25日（必着）",
    "options": [
      "JLPT N3以上（または N4取得者で 成績優秀な者）",
      "JLPT N1取得者に 限る",
      "日本語の 試験は 不要",
      "英語の スコアのみ 必要"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: JLPT N3以上（または N4取得者で 成績優秀な者）. Sesuai poin ke-2 kriteria pendaftaran."
  },
  {
    "id": 620,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "この 奨学金に 応募する 人が 提出する 書類は どれですか。",
    "contextText": "【2026年度 アジア留学生奨学金 募集要項】\n・支給額：月額 80,000円（1年間）\n・応募資格：\n　1. 日本の 大学または 専門学校に 在籍している 正規留学生\n　2. JLPT N3以上（または N4取得者で 成績優秀な者）\n　3. 前年度の 出席率が 90%以上の者\n・提出書類：願書、成績証明書、推薦書\n・応募締切：4月25日（必着）",
    "options": [
      "願書、成績証明書、推薦書",
      "パスポートの コピーのみ",
      "住民票と 銀行通帳",
      "卒業証書と 履歴書"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 願書、成績証明書、推薦書. Tertulis jelas pada bagian: 「提出書類：願書、成績証明書、推薦書」."
  },
  {
    "id": 621,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "ガラス瓶や 空き缶の 収集日は 何曜日ですか。",
    "contextText": "【みどり市 家庭ゴミ分別カレンダー】\n・可燃ゴミ（生ゴミ・紙）：毎週 火曜日・金曜日\n・不燃ゴミ（プラスチック・陶器）：第1・第3 水曜日\n・資源ゴミ（空き缶・ビン・ペットボトル）：毎週 木曜日\n・粗大ゴミ（家具・電化製品）：月1回（電話予約制・有料）\n※ ゴミは 朝8時までに ネットの中に 入れてください。",
    "options": [
      "毎週 木曜日",
      "毎週 火曜日と 金曜日",
      "第1・第3 水曜日",
      "いつでも よい"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 毎週 木曜日. Kategori shigen gomi (botol kaca/kaleng/pet) diambil setiap hari Kamis."
  },
  {
    "id": 622,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "不要に なった 机や 椅子を 捨てたいとき、どうしなければなりませんか。",
    "contextText": "【みどり市 家庭ゴミ分別カレンダー】\n・可燃ゴミ（生ゴミ・紙）：毎週 火曜日・金曜日\n・不燃ゴミ（プラスチック・陶器）：第1・第3 水曜日\n・資源ゴミ（空き缶・ビン・ペットボトル）：毎週 木曜日\n・粗大ゴミ（家具・電化製品）：月1回（電話予約制・有料）\n※ ゴミは 朝8時までに ネットの中に 入れてください。",
    "options": [
      "電話で 予約して 有料で 粗大ゴミとして 捨てる",
      "可燃ゴミの日に 出す",
      "木曜日の 資源ゴミに 混ぜて 出す",
      "公園に 置いておく"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 電話で 予約して 有料で 粗大ゴミとして 捨てる (Perabotan masuk kategori sodai gomi: wajib reservasi telepon dan berbayar)."
  },
  {
    "id": 623,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "アルバイトの 応募条件で「経験不問」とは どういう 意味ですか。",
    "contextText": "【カフェ スタッフ 募集！】\n・仕事内容：接客、レジ、ドリンク作り\n・時給：1,150円（研修期間 1,100円）\n・勤務時間：7:00 - 22:00の間で 週2日、1日4時間〜OK\n・応募資格：高校生不可、経験不問、外国人留学生歓迎（日常会話レベルの日本語）\n・待遇：交通費支給、制服貸与、おいしい まかない付き！",
    "options": [
      "アルバイトの 経験が なくても 応募できる",
      "プロの 経験者しか 応募できない",
      "長年の 勤務経験が 必要なこと",
      "カフェで 働いたことが ある人のみ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: アルバイトの 経験が なくても 応募できる (Keiken fumon = tidak dipersyaratkan memiliki pengalaman kerja sebelumnya / pemula boleh mendaftar)."
  },
  {
    "id": 624,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "週に 最低 何時間から 働くことが できますか。",
    "contextText": "【カフェ スタッフ 募集！】\n・仕事内容：接客、レジ、ドリンク作り\n・時給：1,150円（研修期間 1,100円）\n・勤務時間：7:00 - 22:00の間で 週2日、1日4時間〜OK\n・応募資格：高校生不可、経験不問、外国人留学生歓迎（日常会話レベルの日本語）\n・待遇：交通費支給、制服貸与、おいしい まかない付き！",
    "options": [
      "週2日、1日4時間（週8時間〜）",
      "週5日、1日8時間",
      "1日1時間から",
      "毎日 働かなければならない"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 週2日、1日4時間（週8時間〜）. Tertulis: 「週2日、1日4時間〜OK」."
  },
  {
    "id": 625,
    "level": "N4",
    "category": "Dokkai: Jouhou Kensaku",
    "question": "この カフェで 働く アルバイトの 特典（待遇）は どれですか。",
    "contextText": "【カフェ スタッフ 募集！】\n・仕事内容：接客、レジ、ドリンク作り\n・時給：1,150円（研修期間 1,100円）\n・勤務時間：7:00 - 22:00の間で 週2日、1日4時間〜OK\n・応募資格：高校生不可、経験不問、外国人留学生歓迎（日常会話レベルの日本語）\n・待遇：交通費支給、制服貸与、おいしい まかない付き！",
    "options": [
      "交通費支給、制服貸与、まかない付き",
      "社員寮 無料提供",
      "海外旅行の チケット",
      "パソコンの 無料支給"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 交通費支給、制服貸与、まかない付き (Uang transportasi, seragam dipinjamkan, dan dapat jatah makan gratis/makanai)."
  },
  {
    "id": 801,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は これから まず 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\nオフィスで 課長と 部下の 男の人が 話しています。\n女：「佐藤君、午後からの プレゼンの 資料、修正は 終わった？」\n男：「はい、先ほど 修正して データを サーバーに 保存しました。」\n女：「ありがとう。じゃあ、参加者15人分の 印刷を お願いできる？ そのあとで パソコンと プロジェクターを 接続しておいて。」\n男：「承知いたしました。すぐに 印刷してまいります。」",
    "options": [
      "資料を 15人分 印刷する",
      "プロジェクターを 接続する",
      "データを サーバーに 保存する",
      "プレゼンを 始める"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 資料を 15人分 印刷する. Manajer meminta mencetak 15 eksemplar dokumen terlebih dahulu sebelum menghubungkan proyektor."
  },
  {
    "id": 802,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "女の学生は 明日 何を 持って 行かなければなりませんか。",
    "contextText": "【音声スクリプト / Situasi】\n学校で 先生が 明日の 校外学習について 話しています。\n先生：「明日は 歴史博物館へ 行きます。入場料は 学校で 払いますから いりません。学生証と 筆記用具、それから お弁当と 水筒を 忘れずに カバンに 入れてきてください。カメラは 持ってこないでください。」",
    "options": [
      "学生証、筆記用具、お弁当、水筒",
      "カメラと 入場料",
      "入場料と お弁当",
      "カメラと 学生証"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 学生証、筆記用具、お弁当、水筒. Biaya masuk ditanggung sekolah dan kamera dilarang dibawa."
  },
  {
    "id": 803,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "二人は どこで 電車を 乗り換えますか。",
    "contextText": "【音声スクリプト / Situasi】\n駅の ホームで 男の人と 女の人が 話しています。\n女：「空港まで 行くには、どの 電車に 乗れば いいのかな。」\n男：「まず この 快速に 乗って、新宿で 山手線に 乗り換えるんだ。そして 品川で 空港線の 急行に 乗り換えると 一番 早いよ。」\n女：「わかった、新宿と 品川ね。」",
    "options": [
      "新宿と 品川",
      "東京と 渋谷",
      "上野と 新橋",
      "横浜と 新宿"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 新宿と 品川. Transit pertama di Shinjuku, lalu transit kedua di Shinagawa."
  },
  {
    "id": 804,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は 注文した 料理を 変更するために 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\nレストランで 客の 男の人と 店員が 話しています。\n男：「すみません、さっき 注文した パスタなんですが、ピザに 変更することは できますか。」\n店員：「かしこまりました。まだ 調理に 入っておりませんので 大丈夫です。どちらの ピザに なさいますか。」\n男：「マルゲリータで お願いします。」",
    "options": [
      "マルゲリータ ピザを 新たに 注文した",
      "パスタを そのまま 食べることにした",
      "別の 店へ 行くことにした",
      "パスタと ピザの 両方を 食べることにした"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: マルゲリータ ピザを 新たに 注文した (Mengganti pesanan pasta menjadi pizza margherita)."
  },
  {
    "id": 805,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "女の人は 図書館の 本を どうやって 返却しますか。",
    "contextText": "【音声スクリプト / Situasi】\n女の人と 友人が 話しています。\n女：「今日、図書館の 本の 返却日なんだけど、閉館時間の 5時までに 間に合いそうにないの。」\n男：「あ、それなら 正面玄関の 横に『返却ポスト』が あるよ。閉館後でも そこに 本を 入れておけば 大丈夫だよ。」\n女：「本当？ 助かった、そうするね！」",
    "options": [
      "玄関横の 返却ポストに 入れる",
      "明日の 朝 カウンターに 持っていく",
      "郵送で 図書館に 送る",
      "友達に 返却を 頼む"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 玄関横の 返却ポストに 入れる (Memasukkan buku ke dalam kotak pengembalian / henkyaku posuto di samping pintu utama)."
  },
  {
    "id": 806,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "患者の 男の人は 薬を どのように 服用しますか。",
    "contextText": "【音声スクリプト / Situasi】\n薬局で 薬剤師と 男の人が 話しています。\n薬剤師：「こちらの 白い 錠剤は 毎食後に 1錠ずつ、青い カプセルは 夜寝る前に 1つ 飲んでください。粉薬は 胃が 痛くなったときだけ 飲んでくださいね。」\n男：「わかりました。粉薬は 痛いときだけですね。」",
    "options": [
      "白い錠剤は毎食後、青いカプセルは就寝前、粉薬は痛いときだけ",
      "全部 一緒に 毎朝 飲む",
      "粉薬を 毎食後 欠かさず 飲む",
      "青いカプセルを 毎食前 飲む"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 白い錠剤は毎食後、青いカプセルは就寝前、粉薬は痛いときだけ. Aturan minum dijelaskan detail oleh apoteker."
  },
  {
    "id": 807,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "男の人は 病院の 受付で 何を 出しますか。",
    "contextText": "【音声スクリプト / Situasi】\n病院の 受付で 受付係と 男の人が 話しています。\n受付：「本日は 初めての ご来院ですか。」\n男：「はい、初診です。」\n受付：「では、こちらの 問診票に ご記入いただき、健康保険証と 一緒に カウンターへ お出しください。」\n男：「はい、わかりました。」",
    "options": [
      "記入した 問診票と 健康保険証",
      "診察券のみ",
      "お金と パスポート",
      "薬の 手帳のみ"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 記入した 問診票と 健康保険証 (Form kuesioner medis dan kartu asuransi kesehatan)."
  },
  {
    "id": 808,
    "level": "N4",
    "category": "Choukai: Kadai Rikai",
    "question": "女の人は これから パソコンで 何を しますか。",
    "contextText": "【音声スクリプト / Situasi】\n会社で 同僚の 二人が パソコンを 前に 話しています。\n男：「さっきの アンケートの 結果、グラフに まとめて もらえる？」\n女：「はい、データは もう エクセルに 入力してあります。」\n男：「じゃあ、円グラフを 作成して 報告書に 貼り付けておいて。」\n女：「わかりました、すぐ やります。」",
    "options": [
      "円グラフを 作成して 報告書に 貼る",
      "データを 最初から 手入力する",
      "アンケート用紙を 配布する",
      "パソコンを 再起動する"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 円グラフを 作成して 報告書に 貼る (Membuat diagram lingkaran dan menempelkannya di laporan)."
  },
  {
    "id": 809,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は なぜ ジョギングを 始めたのですか。",
    "contextText": "【音声スクリプト / Situasi】\n職場で 二人の 同僚が 話しています。\n女：「木村さん、最近 毎朝 走っているんですって？」\n男：「ええ、先月の 健康診断で 医者から『運動不足ですから 少し 体を 動かしなさい』って 注意されちゃってね。」\n女：「そうだったんですか。でも 続けられていて えらいですね。」",
    "options": [
      "健康診断で 医者に 運動不足を 注意されたから",
      "マラソン大会に 出場するから",
      "痩せて 服を 買い直したいから",
      "走るのが もともと 趣味だから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 健康診断で 医者に 運動不足を 注意されたから (Karena pada medical check-up dokter memperingatkannya agar aktif bergerak)."
  },
  {
    "id": 810,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人が この スマートフォンを 選んだ 決め手は 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n家電量販店で 客の 女の人と 店員が 話しています。\n店員：「こちらの 新機種は 画面が 大きくて バッテリーも 長持ちしますよ。」\n客：「うーん、でも 私は 旅行先で 写真を たくさん 撮るので、夜でも 綺麗に 撮影できる カメラ性能の 高い こちらの モデルに します。」",
    "options": [
      "暗い場所でも 綺麗に 写真が 撮れる カメラ性能",
      "画面が とても 大きいこと",
      "バッテリーが 長持ちすること",
      "本体価格が 一番 安いこと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 暗い場所でも 綺麗に 写真が 撮れる カメラ性能 (Kualitas kamera yang mampu memotret jernih di malam hari)."
  },
  {
    "id": 811,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人は どうして 会議に 遅刻して しまいましたか。",
    "contextText": "【音声スクリプト / Situasi】\n会社で 部長と 男の社員が 話しています。\n部長：「田中君、朝の 重要な 会議に どうして 遅れたんだ？」\n社員：「大変 申し訳ありません。乗っていた 電車の 車両点検が 行われ、30分以上 駅の 手前で 停車して しまいました。」\n部長：「そうか、事故証明書は もらってきたか。」",
    "options": [
      "乗っていた 電車が 車両点検で 止まったから",
      "目覚ましが 鳴らず 寝坊したから",
      "道路が 渋滞していたから",
      "会議の 時間を 勘違いしていたから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 乗っていた 電車が 車両点検で 止まったから (Kereta terhenti lebih dari 30 menit karena pengecekan gerbong)."
  },
  {
    "id": 812,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人は なぜ 日本の ドラマを よく 見るのですか。",
    "contextText": "【音声スクリプト / Situasi】\n日本語学校で 二人の 留学生が 話しています。\n男：「マリアさん、日本語の リスニング すごく 上手になったね。」\n女：「毎晩 日本の ドラマを 見ているの。教科書には 載っていない 自然な 日常会話の 表現が たくさん 学べるから とても 勉強になるんだ。」",
    "options": [
      "自然な 日常会話の 表現が 学べるから",
      "好きな 俳優が 出演しているから",
      "宿題で 見るように 言われたから",
      "字幕が 面白いから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 自然な 日常会話の 表現が 学べるから (Bisa mempelajari ungkapan percakapan sehari-hari yang alami)."
  },
  {
    "id": 813,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人が 日本での 生活で 最も 苦労したことは 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\nインタビューで 外国人研修生が 話しています。\n「来日して 最初の頃、最も 苦労したのは ゴミの 分別でした。私の 国では すべて 一緒に 捨てていましたが、日本では 可燃・不燃・資源など 細かく 分けなければならず、最初は 何度も 大家さんに 注意されました。」",
    "options": [
      "細かな ゴミの 分別ルール",
      "日本食の 味付け",
      "電車の 乗り換え",
      "日本語の 挨拶"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 細かな ゴミの 分別ルール (Aturan pemilahan sampah yang sangat mendetail)."
  },
  {
    "id": 814,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "新商品の 売れ行きが 良い 理由は 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n会社の ミーティングで 開発担当者が 報告しています。\n「先月 発売した 新しい お茶の ドリンクですが、予想の 2倍の 売り上げを 記録しています。健康志向の 若い 世代に向けて、無糖で すっきりとした 後味に 仕上げた点が 高く 支持されています。」",
    "options": [
      "無糖で すっきりとした 後味が 支持されているから",
      "ボトルに 有名アニメの キャラクターが ついているから",
      "値段を 半額に 割り引いたから",
      "テレビCMを 大量に 流したから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 無糖で すっきりとした 後味が 支持されているから (Rasa bebas gula dengan aftertaste yang segar disukai generasi muda)."
  },
  {
    "id": 815,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "女の人は なぜ アルバイト先を 変えたいのですか。",
    "contextText": "【音声スクリプト / Situasi】\n二人の 学生が 話しています。\n男：「今の カフェの バイト、時給も いいし 楽しそうじゃない？」\n女：「うん、人間関係は すごく いいんだけど、シフトが 深夜まで 入ることが 多くて、大学の 予習・復習が 追いつかなくなっちゃって…」",
    "options": [
      "深夜までの 勤務で 学業との 両立が 難しいから",
      "時給が 安すぎるから",
      "店長や 同僚と 仲が 悪いから",
      "仕事内容が 退屈だから"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 深夜までの 勤務で 学業との 両立が 難しいから (Karena jam kerja sampai larut malam mengganggu waktu belajar kuliah)."
  },
  {
    "id": 816,
    "level": "N4",
    "category": "Choukai: Pointo Rikai",
    "question": "男の人が 引っ越し先の 部屋で 気に入っている 点は 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n男の人と 女の人が 新居について 話しています。\n女：「新しい 部屋、どう？ 日当たりは いい？」\n男：「うん、南向きの 大きな ベランダが あって、洗濯物が すぐ 乾くんだ。駅からも 徒歩5分だし、本当に 引っ越して よかったよ。」",
    "options": [
      "南向きの ベランダで 日当たりが よく、駅から 近い点",
      "家賃が 前の 部屋より 半額な点",
      "ペットを 飼える点",
      "大きな 庭が ついている点"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 南向きの ベランダで 日当たりが よく、駅から 近い点 (Balkon menghadap selatan yang cerah dan hanya 5 menit jalan kaki dari stasiun)."
  },
  {
    "id": 817,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "話している 人は 主に 何について 伝えていますか。",
    "contextText": "【音声スクリプト / Situasi】\nラジオで アナウンサーが 呼びかけています。\n「最近、歩きながら スマートフォンを 操作する『歩きスマホ』による 事故が 多発しています。駅の ホームから 転落したり、階段や 通行人との 接触事故が 後を 絶ちません。画面を 見るときは 必ず 立ち止まり、周囲の 安全を 確認してからに しましょう。」",
    "options": [
      "歩きスマホの 危険性と 立ち止まることの 重要性",
      "最新の スマートフォンの 便利な 活用法",
      "駅の ホームの 安全柵の 工事予定",
      "歩行者が 運動不足を 解消する 方法"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 歩きスマホの 危険性と 立ち止まることの 重要性. Inti monolog adalah bahaya menggunakan HP sambil berjalan dan anjuran untuk berhenti saat melihat layar."
  },
  {
    "id": 818,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "店主は 何について お客様に お願いしていますか。",
    "contextText": "【音声スクリプト / Situasi】\nスーパーの 店内放送です。\n「お客様に お願い申し上げます。当店では プラスチックゴミ削減の 取り組みとして、お買い物の 際には マイバッグ（エコバッグ）の ご持参を お願いしております。レジ袋を ご希望の お客様には、有料にて 1枚 5円で 販売しております。地球環境保護への ご理解と ご協力を お願いいたします。」",
    "options": [
      "環境保護のための マイバッグ持参と レジ袋有料化",
      "新しい ポイントカードの 入会案内",
      "タイムセールの 割引商品の 紹介",
      "賞味期限の 短い 食品の 寄付の お願い"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 環境保護のための マイバッグ持参と レジ袋有料化 (Pengumuman membawa tas belanja sendiri demi kelestarian lingkungan dan kantong plastik berbayar)."
  },
  {
    "id": 819,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "スピーチの テーマは 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n日本語学校の 卒業式で 留学生代表が 話しています。\n「日本に来た 当初は、文化や 習慣の 違いに 戸惑うことばかりでした。しかし、地域の人々との 交流や ボランティア活動を 通して、相手の 価値観を 尊重することの 大切さを 学びました。言葉の 壁を 越えて 心を 通わせることこそが、本当の 国際交流だと 実感しています。」",
    "options": [
      "異文化理解と 心を通わせる 国際交流の大切さ",
      "日本で 就職活動を 成功させる 秘訣",
      "日本語能力試験の 勉強方法",
      "ボランティア活動の 参加資格"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 異文化理解と 心を通わせる 国際交流の大切さ (Pemahaman lintas budaya dan pentingnya saling menghargai nilai orang lain)."
  },
  {
    "id": 820,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "料理研究家は 和食の 何について 語っていますか。",
    "contextText": "【音声スクリプト / Situasi】\nテレビ番組で 料理研究家が 話しています。\n「和食の 基本は、素材本来の 旨味や 季節感を 生かすことです。過剰な 調味料で 味を 覆い隠すのではなく、昆布や 鰹節から とった『出汁（だし）』を 使うことで、塩分や 脂質を 控えめにしながらも、深い 味わいを 生み出すことができます。これが 和食が 世界の 健康食として 注目される 理由です。」",
    "options": [
      "出汁を 生かして 素材の 味を引き出す 和食の 健康的な 特徴",
      "伝統的な 包丁の 研ぎ方と お手入れ",
      "日本酒と 刺身の 正しい 組み合わせ",
      "西洋料理と 中華料理の 歴史的 発展"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 出汁を 生かして 素材の 味を引き出す 和食の 健康的な 特徴 (Karakteristik sehat masakan Jepang yang memanfaatkan dashi dan menjaga cita rasa asli bahan)."
  },
  {
    "id": 821,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "医者は 睡眠について どんな アドバイスを していますか。",
    "contextText": "【音声スクリプト / Situasi】\n健康講座で 医師が 講演しています。\n「質の 良い 睡眠を 取るためには、就寝前の 過ごし方が 極めて 重要です。寝る直前まで スマートフォンや パソコンの ブルーライトを 浴びていると、脳が 昼間だと 錯覚して 眠気が 妨げられます。就寝の 1時間前には 電子機器を 置き、ぬるめのお湯に 浸かって リラックスする 習慣を つけましょう。」",
    "options": [
      "就寝前の スマホ使用を 控え、リラックスして 睡眠の質を 高めること",
      "毎日 必ず 10時間以上 眠ること",
      "寝る直前に 激しい 筋トレを 行うこと",
      "睡眠薬を 毎日 規則正しく 服用すること"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 就寝前の スマホ使用を 控え、リラックスして 睡眠の質を 高めること (Menghindari layar ponsel sebelum tidur demi kualitas tidur yang baik)."
  },
  {
    "id": 822,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "会社員が 話している「テレワーク（在宅勤務）」の メリットは 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\nビジネスの 座談会で 話しています。\n「在宅勤務を 導入して 一番 良かったのは、毎日の 満員電車の 通勤ストレスから 解放されたことです。往復2時間の 通勤時間が なくなったことで、朝 家族と 朝食を 食べたり、終業後に 資格取得の 勉強に 充てる 時間が 増え、生活全体の バランスが 向上しました。」",
    "options": [
      "通勤ストレスが なくなり、家族や 自己啓発の 時間が 増えたこと",
      "会社の 経費を 削減できたこと",
      "オフィスで 同僚と 雑談できること",
      "給料が 大幅に アップしたこと"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 通勤ストレスが なくなり、家族や 自己啓発の 時間が 増えたこと (Bebas dari stres komuter kereta dan memiliki lebih banyak waktu berkualitas)."
  },
  {
    "id": 823,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "防災の 専門家は 地震への 備えとして 何を 強調していますか。",
    "contextText": "【音声スクリプト / Situasi】\n防災セミナーでの 講演です。\n「大地震が 発生した際、家の中で 最も 多い 負傷原因は、家具の 転倒や 落下物です。非常食や 水の 備蓄も 大切ですが、まずは 寝室や リビングの タンスや 本棚を 器具で 壁に しっかり 固定してください。これだけで 命が 助かる 確率が 格段に 高まります。」",
    "options": [
      "家具の 転倒防止対策を 最優先に 行うこと",
      "食料を 1年分 買い占めること",
      "地震が 起きたら すぐに 外へ 飛び出すこと",
      "家を 鉄筋コンクリートに 建て替えること"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 家具の 転倒防止対策を 最優先に 行うこと (Memasang pengaman perabotan lemari agar tidak roboh menimpa penghuni rumah)."
  },
  {
    "id": 824,
    "level": "N4",
    "category": "Choukai: Gaiyou Rikai",
    "question": "この 話の 主な テーマは 何ですか。",
    "contextText": "【音声スクリプト / Situasi】\n環境教育の 授業で 先生が 話しています。\n「私たちが 普段 何気なく 使っている 電気や プラスチックは、大量の 化石燃料を 消費して 作られています。一人ひとりが『使わない 部屋の 電気を 消す』『マイボトルを 持ち歩く』といった 小さな 行動を 積み重ねることが、地球温暖化を 食い止める 大きな 力と なります。」",
    "options": [
      "日々の 小さな 省エネ行動が 地球環境を守る",
      "電気料金を 節約して 貯金する コツ",
      "プラスチック製品の 製造工程の 解説",
      "新しい 発電所の 建設プロジェクト"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日々の 小さな 省エネ行動が 地球環境を守る (Tindakan hemat energi kecil sehari-hari memiliki dampak besar bagi bumi)."
  },
  {
    "id": 825,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "取引先の 会社を 訪問したとき、受付で 何と 言いますか。",
    "contextText": "【状況 / Situasi】\n仕事で 取引先の 会社に 到着しました。受付の 係員に 用件を 伝えます。",
    "options": [
      "〇〇商事の 田中と 申します。山田部長に お約束を いただいております。",
      "山田部長を 今すぐ 呼んでください。",
      "こんにちは、遊びに 来ました。",
      "ごめんください、お邪魔します。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 〇〇商事の 田中と 申します。山田部長に お約束を いただいております。 (Tata krama bisnis formal saat bertamu)."
  },
  {
    "id": 826,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "相手の 家に 上がるとき、何と 挨拶しますか。",
    "contextText": "【状況 / Situasi】\n日本人の 先生の 自宅に 招かれ、玄関で 靴を 脱いで 部屋に 上がります。",
    "options": [
      "お邪魔します。",
      "いらっしゃいませ。",
      "お世話に なりました。",
      "ごちそうさまでした。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: お邪魔します。 (Ojama shimasu = Permisi mengganggu / bertamu ke rumah orang)."
  },
  {
    "id": 827,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "目上の 人に 書類を 見てほしいとき、何と 頼みますか。",
    "contextText": "【状況 / Situasi】\n作成した 企画書の 内容を、課長に チェックして もらいたいと 思います。",
    "options": [
      "こちらの 資料を ご確認いただけますでしょうか。",
      "この 資料を 早く 見てください。",
      "資料を 見てあげます。",
      "資料を 拝見します。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: こちらの 資料を ご確認いただけますでしょうか。 (Ungkapan permohonan sopan / kenjou-keigo)."
  },
  {
    "id": 828,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "エレベーターに 後から 乗ってくる 人に ドアを 開けて 待つとき、何と 言いますか。",
    "contextText": "【状況 / Situasi】\n自分が エレベーターの「開」ボタンを 押して、相手に 先に 乗ってもらいます。",
    "options": [
      "どうぞ、お乗りください。",
      "乗ってはいけません。",
      "急いで 乗ってください。",
      "どういたしまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: どうぞ、お乗りください。 (Silakan naik)."
  },
  {
    "id": 829,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "電話で 相手の 声が 小さくて 聞こえにくいとき、何と 言いますか。",
    "contextText": "【状況 / Situasi】\nビジネス電話で、相手の 電波が 悪く 声が 聞き取れません。",
    "options": [
      "恐れ入りますが、少々 お電話が 遠いようですが…",
      "大きな 声で 喋ってください。",
      "全然 聞こえませんから 切りましょう。",
      "もう一度 電話しないでください。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 恐れ入りますが、少々 お電話が 遠いようですが… (Ungkapan sopan khas bisnis untuk menyatakan sambungan suara kurang jelas)."
  },
  {
    "id": 830,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "お見舞いに 行ったとき、病気や 怪我の 相手に 何と 言いますか。",
    "contextText": "【状況 / Situasi】\n入院している 友人の 病室を 訪れ、帰り際に 相手の 体調を 気遣います。",
    "options": [
      "どうぞ お大事に なさってください。",
      "おめでとうございます。",
      "お疲れ様でした。",
      "ご愁傷様です。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: どうぞ お大事に なさってください。 (Semoga lekas sembuh)."
  },
  {
    "id": 831,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "くしゃみを 連続で している 同僚に、何と 声を かけますか。",
    "contextText": "【状況 / Situasi】\n隣の 席の 同僚が 寒そうに くしゃみを しています。",
    "options": [
      "大丈夫ですか？ 風邪を ひいたんじゃありませんか。",
      "静かに してください。",
      "おめでとうございます。",
      "どういたしまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 大丈夫ですか？ 風邪を ひいたんじゃありませんか。 (Menanyakan kabar/kondisi dengan perhatian)."
  },
  {
    "id": 832,
    "level": "N4",
    "category": "Choukai: Utatsugen",
    "question": "上司から ごちそうに なった 翌朝、何と 挨拶しますか。",
    "contextText": "【状況 / Situasi】\n昨夜、課長に 居酒屋で 美味しい 料理を おごってもらいました。翌朝 会社で 課長に 会いました。",
    "options": [
      "昨晩は ごちそうさまでした。ありがとうございました。",
      "昨日は お疲れ様でした。",
      "次は 私が おごりますよ。",
      "いただきます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 昨晩は ごちそうさまでした。ありがとうございました。 (Budaya Jepang berterima kasih kembali keesokan paginya atas traktiran makan)."
  },
  {
    "id": 833,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「部長、こちらの 企画書に 目を 通して いただけますでしょうか。」",
    "options": [
      "わかりました。後で 拝見しておきますね。",
      "はい、私が 通します。",
      "いいえ、企画書は ありません。",
      "どうぞ ご覧ください。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: わかりました。後で 拝見しておきますね。 (Baiklah, nanti akan saya periksa/baca)."
  },
  {
    "id": 834,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「お忙しいところ 恐縮ですが、少々 お時間を いただけますか。」",
    "options": [
      "ええ、何でしょうか。",
      "はい、時間が ありません。",
      "いいえ、忙しいです。",
      "どういたしまして。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ええ、何でしょうか。 (Ya, ada apa gerangan?)."
  },
  {
    "id": 835,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「雨が 激しく なってきたので、車で 駅まで 送りましょうか。」",
    "options": [
      "助かります！ お願いしても よろしいですか。",
      "はい、車を 運転してください。",
      "いいえ、歩いて 送りましょう。",
      "駅は あそこです。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 助かります！ お願いしても よろしいですか。 (Sangat membantu! Bolehkah saya merepotkan Anda?)."
  },
  {
    "id": 836,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「山田さんは いらっしゃいますか。」",
    "options": [
      "あいにく 山田は ただいま 外出しております。",
      "はい、山田様は いません。",
      "山田を お呼びしました。",
      "山田は 私です。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: あいにく 山田は ただいま 外出しております。 (Sayang sekali saat ini Yamada sedang keluar kantor. Menggunakan nama tanpa -san untuk sesama staf internal)."
  },
  {
    "id": 837,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「この ペン、使っても いいですか。」",
    "options": [
      "ええ、どうぞ お使いください。",
      "はい、使ってあげます。",
      "ペンは そこに ありますか。",
      "使ってしまいました。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ええ、どうぞ お使いください。 (Ya, silakan digunakan)."
  },
  {
    "id": 838,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「今度の 日曜日に 引っ越しを 手伝って もらえない？」",
    "options": [
      "日曜日は ちょっと 先約が あって…ごめんね。",
      "うん、引っ越しは 大変だね。",
      "日曜日に 引っ越したよ。",
      "どこへ 引っ越すつもり？"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: 日曜日は ちょっと 先約が あって…ごめんね。 Menolak ajakan secara halus dengan alasan sudah ada janji terlebih dahulu."
  },
  {
    "id": 839,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「プレゼン、大成功でしたね！ お疲れ様でした。」",
    "options": [
      "ありがとうございます。皆様の おかげです。",
      "いいえ、成功しませんでした。",
      "どういたしまして、疲れました。",
      "おめでとうございます。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: ありがとうございます。皆様の おかげです。 (Terima kasih, ini berkat dukungan semuanya)."
  },
  {
    "id": 840,
    "level": "N4",
    "category": "Choukai: Sokkuhaotou",
    "question": "一番 いい 返事は どれですか。",
    "contextText": "【音声スクリプト】\n「明日までに この レポートを まとめなければ ならないんです。」",
    "options": [
      "それは 大変ですね。何か 手伝いましょうか。",
      "はい、まとめました。",
      "レポートを 読みました。",
      "明日が 楽しみですね。"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban benar: それは 大変ですね。何か 手伝いましょうか。 (Wah berat ya, ada yang bisa saya bantu?)."
  }
];

// Helper: Ambil kategori ujian berdasarkan level (N5 atau N4)
function getCategories(level) {
  const lvl = (level || 'N5').toUpperCase();
  const kanjiVocabCount = getQuestions(lvl, 'kanji_vocab').length;
  const grammarCount = getQuestions(lvl, 'grammar').length;
  const readingCount = getQuestions(lvl, 'reading').length;
  const listeningCount = getQuestions(lvl, 'listening').length;
  const fullCount = getQuestions(lvl, 'simulasi_full').length;

  return [
    {
      id: 'kanji_vocab',
      title: 'Moji & Goi (文字・語彙)',
      description: `Kanji Yomi, Kakitoki, Imi, Ruigo & Youhou ${lvl}`,
      level: lvl,
      iconEmoji: '🈁',
      totalQuestions: kanjiVocabCount,
      durationMinutes: 25
    },
    {
      id: 'grammar',
      title: 'Bunpou (文法)',
      description: `Keishiki, Susun Kalimat (★) & Paragraf ${lvl}`,
      level: lvl,
      iconEmoji: '📝',
      totalQuestions: grammarCount,
      durationMinutes: 25
    },
    {
      id: 'reading',
      title: 'Dokkai (読解)',
      description: `Teks Pendek, Menengah & Dokumen Informasi ${lvl}`,
      level: lvl,
      iconEmoji: '📖',
      totalQuestions: readingCount,
      durationMinutes: 30
    },
    {
      id: 'listening',
      title: 'Choukai (聴解)',
      description: `Tugas, Poin Inti, Ungkapan & Respon Cepat ${lvl}`,
      level: lvl,
      iconEmoji: '🎧',
      totalQuestions: listeningCount,
      durationMinutes: 30
    },
    {
      id: 'simulasi_full',
      title: `Simulasi Ujian Full ${lvl}`,
      description: 'Simulasi Lengkap: Moji-Goi, Bunpou, Dokkai & Choukai',
      level: lvl,
      iconEmoji: '🎓',
      totalQuestions: fullCount,
      durationMinutes: 60
    }
  ];
}

// Helper: Ambil soal berdasarkan level dan kategori
function getQuestions(level, categoryId, limit) {
  const lvl = (level || 'N5').toUpperCase();
  const questionsByLevel = examQuestions.filter(q => q.level.toUpperCase() === lvl);

  let filtered = questionsByLevel;
  if (categoryId && categoryId !== 'simulasi_full') {
    if (categoryId === 'kanji_vocab') {
      filtered = questionsByLevel.filter(q =>
        q.category.includes('Kosakata') ||
        q.category.includes('Kanji') ||
        q.category.includes('Moji') ||
        q.category.includes('Goi')
      );
    } else if (categoryId === 'grammar') {
      filtered = questionsByLevel.filter(q =>
        q.category.includes('Tata Bahasa') ||
        q.category.includes('Bunpou')
      );
    } else if (categoryId === 'reading') {
      filtered = questionsByLevel.filter(q =>
        q.category.includes('Bacaan') ||
        q.category.includes('Dokkai')
      );
    } else if (categoryId === 'listening') {
      filtered = questionsByLevel.filter(q =>
        q.category.includes('Mendengar') ||
        q.category.includes('Choukai') ||
        q.category.includes('Listening')
      );
    }
  }

  if (limit && !isNaN(limit) && Number(limit) > 0) {
    return filtered.slice(0, Number(limit));
  }

  return filtered;
}

module.exports = {
  examQuestions,
  getCategories,
  getQuestions
};
