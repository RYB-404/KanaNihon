export type RoadmapStage = {
  level: string;
  title: string;
  subtitle: string;
  goal: string;
  modules: string[];
  accent: string;
};

export const ROADMAP: RoadmapStage[] = [
  { level: "Fondasi", title: "Baca & bunyikan", subtitle: "Mulai dari nol", goal: "Kenal aksara dan pola bunyi Jepang", modules: ["Hiragana", "Katakana", "Pelafalan", "Salam pertama"], accent: "#d94a3f" },
  { level: "N5", title: "Jepang dasar", subtitle: "Kehidupan sehari-hari", goal: "Paham kalimat dan percakapan sangat sederhana", modules: ["Kosakata inti", "Partikel dasar", "Kanji dasar", "Listening pelan"], accent: "#dc8448" },
  { level: "N4", title: "Mulai mandiri", subtitle: "Percakapan rutin", goal: "Mengikuti topik harian yang disampaikan perlahan", modules: ["Bentuk kata kerja", "Kalimat majemuk", "Bacaan pendek", "Percakapan situasi"], accent: "#c4a43b" },
  { level: "N3", title: "Jembatan mahir", subtitle: "Jepang natural", goal: "Mengerti materi sehari-hari dengan kecepatan mendekati normal", modules: ["Nuansa grammar", "Artikel umum", "Listening natural", "Kanji menengah"], accent: "#668e67" },
  { level: "N2", title: "Jepang lanjut", subtitle: "Beragam situasi", goal: "Memahami berita, artikel, dan percakapan luas", modules: ["Bahasa formal", "Artikel panjang", "Keigo", "Ringkasan & opini"], accent: "#4e7f91" },
  { level: "N1", title: "Penguasaan", subtitle: "Kompleks & abstrak", goal: "Memahami maksud, struktur, dan nuansa secara menyeluruh", modules: ["Editorial", "Kuliah", "Ungkapan lanjutan", "Debat & presentasi"], accent: "#6e648f" },
];

export type Vocabulary = { id: string; japanese: string; reading: string; romaji: string; meaning: string; category: string; example: string; exampleMeaning: string };
export const VOCABULARY: Vocabulary[] = [
  { id:"ohayou", japanese:"おはよう", reading:"おはよう", romaji:"ohayou", meaning:"selamat pagi", category:"Salam", example:"おはようございます。", exampleMeaning:"Selamat pagi (sopan)." },
  { id:"konnichiwa", japanese:"こんにちは", reading:"こんにちは", romaji:"konnichiwa", meaning:"selamat siang", category:"Salam", example:"こんにちは、田中さん。", exampleMeaning:"Selamat siang, Tanaka-san." },
  { id:"arigatou", japanese:"ありがとう", reading:"ありがとう", romaji:"arigatou", meaning:"terima kasih", category:"Salam", example:"どうもありがとうございます。", exampleMeaning:"Terima kasih banyak." },
  { id:"sumimasen", japanese:"すみません", reading:"すみません", romaji:"sumimasen", meaning:"permisi / maaf", category:"Salam", example:"すみません、駅はどこですか。", exampleMeaning:"Permisi, stasiun di mana?" },
  { id:"watashi", japanese:"私", reading:"わたし", romaji:"watashi", meaning:"saya", category:"Orang", example:"私はリナです。", exampleMeaning:"Saya Rina." },
  { id:"tomodachi", japanese:"友達", reading:"ともだち", romaji:"tomodachi", meaning:"teman", category:"Orang", example:"田中さんは友達です。", exampleMeaning:"Tanaka adalah teman saya." },
  { id:"kazoku", japanese:"家族", reading:"かぞく", romaji:"kazoku", meaning:"keluarga", category:"Orang", example:"家族は五人です。", exampleMeaning:"Keluarga saya lima orang." },
  { id:"sensei", japanese:"先生", reading:"せんせい", romaji:"sensei", meaning:"guru", category:"Orang", example:"先生は日本人です。", exampleMeaning:"Guru itu orang Jepang." },
  { id:"mizu", japanese:"水", reading:"みず", romaji:"mizu", meaning:"air", category:"Makanan", example:"水を飲みます。", exampleMeaning:"Saya minum air." },
  { id:"gohan", japanese:"ご飯", reading:"ごはん", romaji:"gohan", meaning:"nasi / makanan", category:"Makanan", example:"朝ご飯を食べます。", exampleMeaning:"Saya makan sarapan." },
  { id:"sakana", japanese:"魚", reading:"さかな", romaji:"sakana", meaning:"ikan", category:"Makanan", example:"魚が好きです。", exampleMeaning:"Saya suka ikan." },
  { id:"oishii", japanese:"おいしい", reading:"おいしい", romaji:"oishii", meaning:"enak", category:"Makanan", example:"このラーメンはおいしいです。", exampleMeaning:"Ramen ini enak." },
  { id:"ima", japanese:"今", reading:"いま", romaji:"ima", meaning:"sekarang", category:"Waktu", example:"今、何時ですか。", exampleMeaning:"Sekarang jam berapa?" },
  { id:"kyou", japanese:"今日", reading:"きょう", romaji:"kyou", meaning:"hari ini", category:"Waktu", example:"今日は月曜日です。", exampleMeaning:"Hari ini hari Senin." },
  { id:"ashita", japanese:"明日", reading:"あした", romaji:"ashita", meaning:"besok", category:"Waktu", example:"明日、学校へ行きます。", exampleMeaning:"Besok saya pergi ke sekolah." },
  { id:"mainichi", japanese:"毎日", reading:"まいにち", romaji:"mainichi", meaning:"setiap hari", category:"Waktu", example:"毎日、日本語を勉強します。", exampleMeaning:"Saya belajar bahasa Jepang setiap hari." },
  { id:"eki", japanese:"駅", reading:"えき", romaji:"eki", meaning:"stasiun", category:"Tempat", example:"駅はあそこです。", exampleMeaning:"Stasiun ada di sana." },
  { id:"gakkou", japanese:"学校", reading:"がっこう", romaji:"gakkou", meaning:"sekolah", category:"Tempat", example:"学校へ行きます。", exampleMeaning:"Saya pergi ke sekolah." },
  { id:"mise", japanese:"店", reading:"みせ", romaji:"mise", meaning:"toko", category:"Tempat", example:"あの店は安いです。", exampleMeaning:"Toko itu murah." },
  { id:"ie", japanese:"家", reading:"いえ", romaji:"ie", meaning:"rumah", category:"Tempat", example:"家に帰ります。", exampleMeaning:"Saya pulang ke rumah." },
  { id:"iku", japanese:"行く", reading:"いく", romaji:"iku", meaning:"pergi", category:"Kata kerja", example:"東京へ行きます。", exampleMeaning:"Saya pergi ke Tokyo." },
  { id:"kuru", japanese:"来る", reading:"くる", romaji:"kuru", meaning:"datang", category:"Kata kerja", example:"友達が来ます。", exampleMeaning:"Teman akan datang." },
  { id:"taberu", japanese:"食べる", reading:"たべる", romaji:"taberu", meaning:"makan", category:"Kata kerja", example:"寿司を食べます。", exampleMeaning:"Saya makan sushi." },
  { id:"nomu", japanese:"飲む", reading:"のむ", romaji:"nomu", meaning:"minum", category:"Kata kerja", example:"お茶を飲みます。", exampleMeaning:"Saya minum teh." },
  { id:"miru", japanese:"見る", reading:"みる", romaji:"miru", meaning:"melihat", category:"Kata kerja", example:"映画を見ます。", exampleMeaning:"Saya menonton film." },
  { id:"hanasu", japanese:"話す", reading:"はなす", romaji:"hanasu", meaning:"berbicara", category:"Kata kerja", example:"日本語を話します。", exampleMeaning:"Saya berbicara bahasa Jepang." },
  { id:"ookii", japanese:"大きい", reading:"おおきい", romaji:"ookii", meaning:"besar", category:"Sifat", example:"大きい家ですね。", exampleMeaning:"Rumahnya besar ya." },
  { id:"chiisai", japanese:"小さい", reading:"ちいさい", romaji:"chiisai", meaning:"kecil", category:"Sifat", example:"小さい猫です。", exampleMeaning:"Itu kucing kecil." },
  { id:"yasui", japanese:"安い", reading:"やすい", romaji:"yasui", meaning:"murah", category:"Sifat", example:"この本は安いです。", exampleMeaning:"Buku ini murah." },
  { id:"tanoshii", japanese:"楽しい", reading:"たのしい", romaji:"tanoshii", meaning:"menyenangkan", category:"Sifat", example:"日本語は楽しいです。", exampleMeaning:"Bahasa Jepang menyenangkan." },
];

export type Grammar = { id:string; level:string; title:string; meaning:string; pattern:string; explanation:string; examples:{jp:string;romaji:string;id:string}[] };
export const GRAMMAR: Grammar[] = [
  { id:"desu",level:"N5",title:"A は B です",meaning:"A adalah B",pattern:"[Topik] は [Informasi] です",explanation:"Pola paling dasar untuk mengenalkan atau menjelaskan sesuatu. は dibaca wa ketika menjadi partikel.",examples:[{jp:"私は学生です。",romaji:"Watashi wa gakusei desu.",id:"Saya adalah pelajar."},{jp:"これは本です。",romaji:"Kore wa hon desu.",id:"Ini adalah buku."}]},
  { id:"ka",level:"N5",title:"〜ですか",meaning:"Apakah ...?",pattern:"[Kalimat] + か",explanation:"Tambahkan か di akhir kalimat sopan untuk membuat pertanyaan.",examples:[{jp:"日本人ですか。",romaji:"Nihonjin desu ka.",id:"Apakah Anda orang Jepang?"}]},
  { id:"no",level:"N5",title:"A の B",meaning:"B milik / berkaitan dengan A",pattern:"[Pemilik/Kategori] の [Benda]",explanation:"の menghubungkan dua kata benda dan menunjukkan kepemilikan atau kategori.",examples:[{jp:"私の本です。",romaji:"Watashi no hon desu.",id:"Ini buku saya."},{jp:"日本語の先生です。",romaji:"Nihongo no sensei desu.",id:"Guru bahasa Jepang."}]},
  { id:"mo",level:"N5",title:"〜も",meaning:"juga",pattern:"[Topik] も ...",explanation:"も menggantikan は ketika informasi yang sama berlaku pada topik lain.",examples:[{jp:"私も学生です。",romaji:"Watashi mo gakusei desu.",id:"Saya juga pelajar."}]},
  { id:"o",level:"N5",title:"〜を + kata kerja",meaning:"melakukan sesuatu pada objek",pattern:"[Objek] を [Kata kerja]",explanation:"を dibaca o dan menandai benda yang terkena tindakan.",examples:[{jp:"パンを食べます。",romaji:"Pan o tabemasu.",id:"Saya makan roti."}]},
  { id:"ni",level:"N5",title:"Waktu / tempat に",meaning:"pada / ke / di",pattern:"[Waktu/Tujuan] に [Kata kerja]",explanation:"に menunjukkan waktu tertentu, tujuan gerak, atau tempat keberadaan.",examples:[{jp:"七時に起きます。",romaji:"Shichiji ni okimasu.",id:"Saya bangun pukul tujuh."}]},
  { id:"de",level:"N5",title:"Tempat で",meaning:"melakukan kegiatan di",pattern:"[Tempat] で [Kegiatan]",explanation:"で menandai tempat berlangsungnya sebuah tindakan.",examples:[{jp:"図書館で勉強します。",romaji:"Toshokan de benkyou shimasu.",id:"Saya belajar di perpustakaan."}]},
  { id:"ga",level:"N5",title:"〜が あります / います",meaning:"ada / terdapat",pattern:"[Benda/Orang] が あります・います",explanation:"あります untuk benda mati; います untuk manusia dan hewan.",examples:[{jp:"猫がいます。",romaji:"Neko ga imasu.",id:"Ada kucing."}]},
  { id:"adjective",level:"N5",title:"Kata sifat い / な",meaning:"menjelaskan sifat",pattern:"大きい本・静かな町",explanation:"Kata sifat い langsung diikuti kata benda. Kata sifat な memakai な sebelum kata benda.",examples:[{jp:"静かな町です。",romaji:"Shizuka na machi desu.",id:"Kota yang tenang."}]},
  { id:"past",level:"N5",title:"〜ました / ませんでした",meaning:"lampau sopan",pattern:"ます → ました・ませんでした",explanation:"Ubah ます menjadi ました untuk positif lampau, atau ませんでした untuk negatif lampau.",examples:[{jp:"昨日、映画を見ました。",romaji:"Kinou, eiga o mimashita.",id:"Kemarin saya menonton film."}]},
  { id:"te",level:"N4",title:"Bentuk て",meaning:"menghubungkan tindakan",pattern:"食べて、飲みます",explanation:"Bentuk て menjadi dasar banyak pola: urutan tindakan, permintaan, izin, dan kegiatan yang sedang berlangsung.",examples:[{jp:"朝ご飯を食べて、学校へ行きます。",romaji:"Asagohan o tabete, gakkou e ikimasu.",id:"Saya sarapan lalu pergi ke sekolah."}]},
  { id:"tai",level:"N4",title:"〜たいです",meaning:"ingin melakukan",pattern:"Akar ます + たいです",explanation:"Lepas ます dari bentuk sopan, lalu tambahkan たいです.",examples:[{jp:"日本へ行きたいです。",romaji:"Nihon e ikitai desu.",id:"Saya ingin pergi ke Jepang."}]},
];

export type KanjiItem = { char:string; meaning:string; onyomi:string; kunyomi:string; word:string; reading:string; wordMeaning:string; level:string };
export const KANJI: KanjiItem[] = [
  {char:"日",meaning:"hari / matahari",onyomi:"ニチ・ジツ",kunyomi:"ひ・か",word:"日本",reading:"にほん",wordMeaning:"Jepang",level:"N5"},
  {char:"月",meaning:"bulan",onyomi:"ゲツ・ガツ",kunyomi:"つき",word:"月曜日",reading:"げつようび",wordMeaning:"Senin",level:"N5"},
  {char:"火",meaning:"api",onyomi:"カ",kunyomi:"ひ",word:"火曜日",reading:"かようび",wordMeaning:"Selasa",level:"N5"},
  {char:"水",meaning:"air",onyomi:"スイ",kunyomi:"みず",word:"水曜日",reading:"すいようび",wordMeaning:"Rabu",level:"N5"},
  {char:"木",meaning:"pohon",onyomi:"モク・ボク",kunyomi:"き",word:"木曜日",reading:"もくようび",wordMeaning:"Kamis",level:"N5"},
  {char:"金",meaning:"emas / uang",onyomi:"キン",kunyomi:"かね",word:"金曜日",reading:"きんようび",wordMeaning:"Jumat",level:"N5"},
  {char:"土",meaning:"tanah",onyomi:"ド・ト",kunyomi:"つち",word:"土曜日",reading:"どようび",wordMeaning:"Sabtu",level:"N5"},
  {char:"人",meaning:"orang",onyomi:"ジン・ニン",kunyomi:"ひと",word:"日本人",reading:"にほんじん",wordMeaning:"orang Jepang",level:"N5"},
  {char:"大",meaning:"besar",onyomi:"ダイ・タイ",kunyomi:"おお",word:"大学",reading:"だいがく",wordMeaning:"universitas",level:"N5"},
  {char:"小",meaning:"kecil",onyomi:"ショウ",kunyomi:"ちい・こ",word:"小さい",reading:"ちいさい",wordMeaning:"kecil",level:"N5"},
  {char:"山",meaning:"gunung",onyomi:"サン",kunyomi:"やま",word:"富士山",reading:"ふじさん",wordMeaning:"Gunung Fuji",level:"N5"},
  {char:"川",meaning:"sungai",onyomi:"セン",kunyomi:"かわ",word:"川口",reading:"かわぐち",wordMeaning:"muara sungai",level:"N5"},
  {char:"口",meaning:"mulut / pintu",onyomi:"コウ・ク",kunyomi:"くち",word:"入口",reading:"いりぐち",wordMeaning:"pintu masuk",level:"N5"},
  {char:"目",meaning:"mata",onyomi:"モク",kunyomi:"め",word:"目的",reading:"もくてき",wordMeaning:"tujuan",level:"N5"},
  {char:"手",meaning:"tangan",onyomi:"シュ",kunyomi:"て",word:"上手",reading:"じょうず",wordMeaning:"pandai",level:"N5"},
  {char:"学",meaning:"belajar",onyomi:"ガク",kunyomi:"まな",word:"学生",reading:"がくせい",wordMeaning:"pelajar",level:"N5"},
  {char:"先",meaning:"dahulu / depan",onyomi:"セン",kunyomi:"さき",word:"先生",reading:"せんせい",wordMeaning:"guru",level:"N5"},
  {char:"年",meaning:"tahun",onyomi:"ネン",kunyomi:"とし",word:"来年",reading:"らいねん",wordMeaning:"tahun depan",level:"N5"},
  {char:"本",meaning:"buku / asal",onyomi:"ホン",kunyomi:"もと",word:"本屋",reading:"ほんや",wordMeaning:"toko buku",level:"N5"},
  {char:"語",meaning:"bahasa / kata",onyomi:"ゴ",kunyomi:"かた",word:"日本語",reading:"にほんご",wordMeaning:"bahasa Jepang",level:"N5"},
  {char:"食",meaning:"makan",onyomi:"ショク",kunyomi:"た",word:"食べる",reading:"たべる",wordMeaning:"makan",level:"N5"},
  {char:"飲",meaning:"minum",onyomi:"イン",kunyomi:"の",word:"飲み物",reading:"のみもの",wordMeaning:"minuman",level:"N5"},
  {char:"見",meaning:"melihat",onyomi:"ケン",kunyomi:"み",word:"見る",reading:"みる",wordMeaning:"melihat",level:"N5"},
  {char:"行",meaning:"pergi",onyomi:"コウ・ギョウ",kunyomi:"い・ゆ",word:"行く",reading:"いく",wordMeaning:"pergi",level:"N5"},
  {char:"来",meaning:"datang",onyomi:"ライ",kunyomi:"く・き",word:"来月",reading:"らいげつ",wordMeaning:"bulan depan",level:"N5"},
];

export const LISTENING = [
  {id:"self",level:"Pemula",title:"Perkenalan diri",jp:"はじめまして。私はアユです。インドネシアから来ました。",romaji:"Hajimemashite. Watashi wa Ayu desu. Indonesia kara kimashita.",meaning:"Salam kenal. Saya Ayu. Saya berasal dari Indonesia.",question:"Ayu berasal dari mana?",answer:"Indonesia"},
  {id:"time",level:"N5",title:"Menanyakan waktu",jp:"すみません、今、何時ですか。七時半です。",romaji:"Sumimasen, ima nanji desu ka. Shichiji han desu.",meaning:"Permisi, sekarang jam berapa? Jam setengah delapan.",question:"Sekarang pukul berapa?",answer:"07.30"},
  {id:"cafe",level:"N5",title:"Di kafe",jp:"コーヒーを一つと、ケーキを一つお願いします。",romaji:"Koohii o hitotsu to, keeki o hitotsu onegaishimasu.",meaning:"Minta satu kopi dan satu kue.",question:"Apa yang dipesan?",answer:"Kopi dan kue"},
  {id:"station",level:"N5",title:"Mencari stasiun",jp:"駅はどこですか。あのコンビニの右です。",romaji:"Eki wa doko desu ka. Ano konbini no migi desu.",meaning:"Stasiun di mana? Di sebelah kanan minimarket itu.",question:"Stasiun ada di sebelah mana?",answer:"Kanan minimarket"},
  {id:"weekend",level:"N4",title:"Rencana akhir pekan",jp:"週末、友達と映画を見て、レストランで晩ご飯を食べます。",romaji:"Shuumatsu, tomodachi to eiga o mite, resutoran de bangohan o tabemasu.",meaning:"Akhir pekan saya menonton film bersama teman, lalu makan malam di restoran.",question:"Setelah menonton film, mereka pergi ke mana?",answer:"Restoran"},
];

export const CONVERSATIONS = [
  {id:"intro",title:"Kenalan",place:"Pertemuan pertama",lines:[{who:"A",jp:"はじめまして。リナです。",romaji:"Hajimemashite. Rina desu.",id:"Salam kenal. Saya Rina."},{who:"B",jp:"はじめまして。田中です。よろしくお願いします。",romaji:"Hajimemashite. Tanaka desu. Yoroshiku onegaishimasu.",id:"Salam kenal. Saya Tanaka. Senang berkenalan."}]},
  {id:"shop",title:"Belanja",place:"Toko",lines:[{who:"A",jp:"これはいくらですか。",romaji:"Kore wa ikura desu ka.",id:"Ini berapa harganya?"},{who:"B",jp:"千二百円です。",romaji:"Sen nihyaku en desu.",id:"1.200 yen."},{who:"A",jp:"これをください。",romaji:"Kore o kudasai.",id:"Saya ambil ini."}]},
  {id:"food",title:"Pesan makanan",place:"Restoran",lines:[{who:"A",jp:"ご注文は？",romaji:"Gochuumon wa?",id:"Pesan apa?"},{who:"B",jp:"ラーメンを一つお願いします。",romaji:"Raamen o hitotsu onegaishimasu.",id:"Minta satu ramen."}]},
  {id:"direction",title:"Tanya arah",place:"Jalan",lines:[{who:"A",jp:"すみません、駅はどこですか。",romaji:"Sumimasen, eki wa doko desu ka.",id:"Permisi, stasiun di mana?"},{who:"B",jp:"まっすぐ行って、右に曲がってください。",romaji:"Massugu itte, migi ni magatte kudasai.",id:"Jalan lurus, lalu belok kanan."}]},
];

export const SOURCES = [
  {name:"Japan Foundation Minato",url:"https://minato-jf.jp/",note:"Kursus mandiri A1–B2 dan materi Bahasa Indonesia"},
  {name:"NHK World Easy Japanese",url:"https://www3.nhk.or.jp/nhkworld/en/learnjapanese/",note:"Percakapan, grammar, perjalanan, dan audio situasional"},
  {name:"Nihongo e-na",url:"https://nihongo-e-na.com/",note:"Kategori membaca, menulis, menyimak, berbicara, grammar, dan budaya"},
  {name:"JLPT Official",url:"https://www.jlpt.jp/e/about/levelsummary.html",note:"Acuan kemampuan N5 sampai N1"},
];
