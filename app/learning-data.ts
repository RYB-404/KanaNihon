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

export type ParticleUse = { label:string; pattern:string; example:string; romaji:string; meaning:string; note?:string };
export type Particle = { id:string; char:string; name:string; level:string; core:string; summary:string; uses:ParticleUse[]; contrast?:string };

export const PARTICLES: Particle[] = [
  {id:"wa",char:"は",name:"wa",level:"N5",core:"Topik pembicaraan",summary:"Menandai hal yang sedang dibicarakan atau membandingkan dua hal. Saat menjadi partikel, は dibaca wa.",uses:[
    {label:"Memperkenalkan topik",pattern:"A は B です",example:"私は学生です。",romaji:"Watashi wa gakusei desu.",meaning:"Saya adalah pelajar.",note:"Informasi baru ada setelah は."},
    {label:"Membandingkan",pattern:"A は…、B は…",example:"肉は食べますが、魚は食べません。",romaji:"Niku wa tabemasu ga, sakana wa tabemasen.",meaning:"Daging saya makan, tetapi ikan tidak."}],contrast:"は mengarahkan sorotan ke topik; が mengidentifikasi pelaku atau informasi yang baru ditemukan."},
  {id:"ga",char:"が",name:"ga",level:"N5",core:"Subjek yang disorot",summary:"Menandai siapa atau apa yang melakukan, mengalami, ada, disukai, atau mampu melakukan sesuatu.",uses:[
    {label:"Menjawab siapa/apa",pattern:"A が V",example:"田中さんが来ました。",romaji:"Tanaka-san ga kimashita.",meaning:"Tanaka yang datang."},
    {label:"Keberadaan",pattern:"N が あります／います",example:"公園に猫がいます。",romaji:"Kouen ni neko ga imasu.",meaning:"Ada kucing di taman."},
    {label:"Suka dan kemampuan",pattern:"N が 好き／できます",example:"日本語が好きです。",romaji:"Nihongo ga suki desu.",meaning:"Saya suka bahasa Jepang."}],contrast:"Gunakan は untuk topik yang sudah diketahui; gunakan が ketika jawaban berfokus pada siapa/apa."},
  {id:"o",char:"を",name:"o",level:"N5",core:"Objek tindakan",summary:"Menandai benda yang langsung terkena tindakan. Dibaca o, bukan wo, dalam bahasa Jepang modern.",uses:[
    {label:"Objek langsung",pattern:"N を V",example:"本を読みます。",romaji:"Hon o yomimasu.",meaning:"Saya membaca buku."},
    {label:"Rute yang dilalui",pattern:"Tempat を Gerak",example:"公園を歩きます。",romaji:"Kouen o arukimasu.",meaning:"Saya berjalan melewati taman."}],contrast:"を menandai objek/rute, sedangkan で menandai tempat kegiatan atau alat."},
  {id:"ni",char:"に",name:"ni",level:"N5",core:"Titik tujuan",summary:"Menunjuk titik yang spesifik: waktu, tujuan, penerima, tempat keberadaan, atau hasil perubahan.",uses:[
    {label:"Waktu tertentu",pattern:"Waktu に V",example:"七時に起きます。",romaji:"Shichiji ni okimasu.",meaning:"Saya bangun pukul tujuh.",note:"Biasanya tidak dipakai setelah 今日, 毎日, atau いつ."},
    {label:"Tujuan",pattern:"Tempat に 行く",example:"学校に行きます。",romaji:"Gakkou ni ikimasu.",meaning:"Saya pergi ke sekolah."},
    {label:"Tempat keberadaan",pattern:"Tempat に N が いる",example:"部屋に先生がいます。",romaji:"Heya ni sensei ga imasu.",meaning:"Guru berada di kamar."},
    {label:"Penerima",pattern:"Orang に N を V",example:"友達に写真を見せます。",romaji:"Tomodachi ni shashin o misemasu.",meaning:"Saya memperlihatkan foto kepada teman."}],contrast:"に adalah titik tujuan/keberadaan; で adalah lokasi terjadinya kegiatan."},
  {id:"de",char:"で",name:"de",level:"N5",core:"Tempat atau sarana kegiatan",summary:"Menandai lokasi sebuah tindakan, alat, bahan, bahasa, atau sebab.",uses:[
    {label:"Tempat kegiatan",pattern:"Tempat で V",example:"図書館で勉強します。",romaji:"Toshokan de benkyou shimasu.",meaning:"Saya belajar di perpustakaan."},
    {label:"Alat / kendaraan",pattern:"Alat で V",example:"電車で行きます。",romaji:"Densha de ikimasu.",meaning:"Saya pergi dengan kereta."},
    {label:"Bahasa / bahan",pattern:"Bahasa で V",example:"日本語で話してください。",romaji:"Nihongo de hanashite kudasai.",meaning:"Tolong berbicara dalam bahasa Jepang."}],contrast:"駅にいます = berada di stasiun; 駅で待ちます = menunggu di stasiun."},
  {id:"e",char:"へ",name:"e",level:"N5",core:"Arah pergerakan",summary:"Menunjukkan arah yang dituju. Sebagai partikel, へ dibaca e.",uses:[
    {label:"Arah",pattern:"Tempat へ Gerak",example:"日本へ行きます。",romaji:"Nihon e ikimasu.",meaning:"Saya pergi ke arah/Jepang."}],contrast:"へ menekankan arah perjalanan; に menekankan titik tujuan. Dalam banyak kalimat gerak keduanya dapat dipakai."},
  {id:"to",char:"と",name:"to",level:"N5",core:"Bersama dan kutipan",summary:"Menghubungkan daftar yang lengkap, teman melakukan kegiatan, atau isi ucapan/pikiran.",uses:[
    {label:"Dan (daftar lengkap)",pattern:"A と B",example:"パンと卵を買います。",romaji:"Pan to tamago o kaimasu.",meaning:"Saya membeli roti dan telur."},
    {label:"Bersama",pattern:"Orang と V",example:"友達と映画を見ます。",romaji:"Tomodachi to eiga o mimasu.",meaning:"Saya menonton film bersama teman."},
    {label:"Mengutip",pattern:"「…」と 言う",example:"「ありがとう」と言いました。",romaji:"Arigatou to iimashita.",meaning:"Dia berkata, “terima kasih”."}],contrast:"と adalah daftar lengkap; や berarti contoh di antara hal lain yang tidak disebut."},
  {id:"mo",char:"も",name:"mo",level:"N5",core:"Juga / bahkan",summary:"Menggantikan は, が, atau を untuk menyatakan bahwa informasi yang sama berlaku juga.",uses:[
    {label:"Juga",pattern:"A も B",example:"私もインドネシア人です。",romaji:"Watashi mo Indoneshiajin desu.",meaning:"Saya juga orang Indonesia."},
    {label:"Jumlah penekanan",pattern:"Angka も",example:"三時間も待ちました。",romaji:"Sanjikan mo machimashita.",meaning:"Saya menunggu sampai tiga jam."}],contrast:"も sering menggantikan partikel, tetapi setelah に/で/と dapat menjadi にも/でも/とも."},
  {id:"no",char:"の",name:"no",level:"N5",core:"Kepemilikan dan penjelas",summary:"Menghubungkan kata benda. Kata sebelum の menerangkan kata setelahnya.",uses:[
    {label:"Kepemilikan",pattern:"Pemilik の Benda",example:"これは私の本です。",romaji:"Kore wa watashi no hon desu.",meaning:"Ini buku saya."},
    {label:"Kategori / asal",pattern:"Keterangan の N",example:"日本語の先生です。",romaji:"Nihongo no sensei desu.",meaning:"Guru bahasa Jepang."},
    {label:"Menggantikan benda",pattern:"A の",example:"赤いのをください。",romaji:"Akai no o kudasai.",meaning:"Tolong beri yang merah."}],contrast:"Urutannya kebalikan dari bahasa Indonesia: 日本の車 = mobil Jepang."},
  {id:"kara",char:"から",name:"kara",level:"N5",core:"Titik awal / sebab",summary:"Menunjukkan asal waktu/tempat atau alasan.",uses:[
    {label:"Dari",pattern:"A から",example:"九時から働きます。",romaji:"Kuji kara hatarakimasu.",meaning:"Saya bekerja mulai pukul sembilan."},
    {label:"Karena",pattern:"Kalimat から",example:"雨ですから、行きません。",romaji:"Ame desu kara, ikimasen.",meaning:"Karena hujan, saya tidak pergi."}],contrast:"から menandai awal; まで menandai batas akhir."},
  {id:"made",char:"まで",name:"made",level:"N5",core:"Batas akhir",summary:"Menunjukkan sampai kapan atau sejauh mana sesuatu berlangsung.",uses:[
    {label:"Sampai",pattern:"A から B まで",example:"九時から五時まで働きます。",romaji:"Kuji kara goji made hatarakimasu.",meaning:"Saya bekerja dari pukul sembilan sampai lima."}],contrast:"まで adalah batas; までに berarti paling lambat sebelum batas itu."},
  {id:"ya",char:"や",name:"ya",level:"N5",core:"Contoh dalam daftar",summary:"Menyebut beberapa contoh, dengan makna “A, B, dan sebagainya”.",uses:[
    {label:"Daftar tidak lengkap",pattern:"A や B（など）",example:"机の上に本やノートがあります。",romaji:"Tsukue no ue ni hon ya nooto ga arimasu.",meaning:"Di meja ada buku, catatan, dan lain-lain."}],contrast:"と menyebut semua item; や hanya memberi contoh."},
  {id:"ka",char:"か",name:"ka",level:"N5",core:"Pertanyaan atau pilihan",summary:"Diletakkan di akhir kalimat sopan untuk bertanya, atau di antara pilihan untuk berarti “atau”.",uses:[
    {label:"Pertanyaan",pattern:"Kalimat か",example:"これは何ですか。",romaji:"Kore wa nan desu ka.",meaning:"Ini apa?"},
    {label:"Atau",pattern:"A か B",example:"土曜日か日曜日に行きます。",romaji:"Doyoubi ka nichiyoubi ni ikimasu.",meaning:"Saya pergi Sabtu atau Minggu."}],contrast:"Dalam percakapan kasual, pertanyaan sering memakai intonasi naik tanpa か."},
  {id:"ne",char:"ね",name:"ne",level:"N5",core:"Mencari kesepakatan",summary:"Mengajak lawan bicara berbagi perasaan atau mengonfirmasi informasi bersama.",uses:[
    {label:"Ya / kan",pattern:"Kalimat ね",example:"今日は暑いですね。",romaji:"Kyou wa atsui desu ne.",meaning:"Hari ini panas ya."}],contrast:"ね mengajak setuju; よ memberi informasi yang dianggap belum diketahui lawan bicara."},
  {id:"yo",char:"よ",name:"yo",level:"N5",core:"Memberi penegasan",summary:"Menegaskan atau menyampaikan informasi baru kepada lawan bicara.",uses:[
    {label:"Lho / ya",pattern:"Kalimat よ",example:"この店は安いですよ。",romaji:"Kono mise wa yasui desu yo.",meaning:"Toko ini murah, lho."}],contrast:"よ = saya memberi tahu; ね = kita sama-sama merasakan/mengetahui."},
  {id:"dake",char:"だけ",name:"dake",level:"N4",core:"Hanya",summary:"Membatasi sesuatu tanpa nuansa negatif.",uses:[
    {label:"Hanya",pattern:"N だけ",example:"水だけ飲みます。",romaji:"Mizu dake nomimasu.",meaning:"Saya hanya minum air."}],contrast:"だけ dapat dipakai dalam kalimat positif; しか selalu diikuti bentuk negatif."},
  {id:"shika",char:"しか",name:"shika",level:"N4",core:"Tidak ada selain",summary:"Menekankan keterbatasan dan selalu dipasangkan dengan predikat negatif.",uses:[
    {label:"Hanya ... saja",pattern:"N しか + negatif",example:"千円しかありません。",romaji:"Sen-en shika arimasen.",meaning:"Saya hanya punya seribu yen."}],contrast:"水だけ飲みます netral; 水しか飲みません menekankan tidak minum apa pun selain air."},
  {id:"made-ni",char:"までに",name:"made ni",level:"N4",core:"Batas waktu penyelesaian",summary:"Sesuatu harus selesai sebelum atau paling lambat pada waktu tersebut.",uses:[
    {label:"Paling lambat",pattern:"Waktu までに V",example:"金曜日までに出してください。",romaji:"Kinyoubi made ni dashite kudasai.",meaning:"Tolong serahkan paling lambat Jumat."}],contrast:"五時まで働く = bekerja terus sampai jam lima; 五時までに終わる = selesai paling lambat jam lima."},
];

export type PracticalLesson = { id:string;level:string;title:string;place:string;canDo:string;mission:string;phrases:{jp:string;romaji:string;meaning:string}[];particle:string;tip:string };
export const PRACTICAL_LESSONS: PracticalLesson[] = [
  {id:"meet",level:"A1",title:"Kenalan tanpa kaku",place:"Pertemuan pertama",canDo:"Memperkenalkan nama, asal, dan pekerjaan",mission:"Kenalkan dirimu dalam tiga kalimat tanpa membaca romaji.",phrases:[{jp:"はじめまして。アリです。",romaji:"Hajimemashite. Ari desu.",meaning:"Salam kenal. Saya Ari."},{jp:"インドネシアから来ました。",romaji:"Indonesia kara kimashita.",meaning:"Saya berasal dari Indonesia."},{jp:"どうぞよろしくお願いします。",romaji:"Douzo yoroshiku onegaishimasu.",meaning:"Senang berkenalan dengan Anda."}],particle:"は untuk topik diri; から untuk asal",tip:"Dalam bahasa Jepang, subjek yang sudah jelas sering dihilangkan. Tidak perlu mengulang 私は di setiap kalimat."},
  {id:"order",level:"A1",title:"Pesan makanan",place:"Restoran",canDo:"Memesan, menambah pesanan, dan meminta tagihan",mission:"Pesan satu makanan dan satu minuman dengan sopan.",phrases:[{jp:"ラーメンを一つお願いします。",romaji:"Raamen o hitotsu onegaishimasu.",meaning:"Minta satu ramen."},{jp:"水もお願いします。",romaji:"Mizu mo onegaishimasu.",meaning:"Minta air juga."},{jp:"お会計をお願いします。",romaji:"Okaikei o onegaishimasu.",meaning:"Minta tagihannya."}],particle:"を untuk objek pesanan; も untuk tambahan",tip:"お願いします terdengar fleksibel dan sopan untuk memesan. ください lebih langsung."},
  {id:"direction",level:"A1",title:"Tidak tersesat",place:"Stasiun dan jalan",canDo:"Menanyakan lokasi dan memahami petunjuk sederhana",mission:"Tanyakan letak stasiun dan ulangi arah yang kamu dengar.",phrases:[{jp:"すみません、駅はどこですか。",romaji:"Sumimasen, eki wa doko desu ka.",meaning:"Permisi, stasiun di mana?"},{jp:"まっすぐ行って、右に曲がってください。",romaji:"Massugu itte, migi ni magatte kudasai.",meaning:"Jalan lurus lalu belok kanan."},{jp:"駅の前にあります。",romaji:"Eki no mae ni arimasu.",meaning:"Ada di depan stasiun."}],particle:"は untuk topik lokasi; の untuk hubungan; に untuk keberadaan",tip:"Mulai dengan すみません sebelum bertanya kepada orang asing."},
  {id:"shop",level:"A1",title:"Belanja dengan yakin",place:"Toko",canDo:"Menanyakan harga, ukuran, dan memilih barang",mission:"Tanyakan harga lalu minta barang yang berbeda warna.",phrases:[{jp:"これはいくらですか。",romaji:"Kore wa ikura desu ka.",meaning:"Ini berapa harganya?"},{jp:"もう少し大きいのはありますか。",romaji:"Mou sukoshi ookii no wa arimasu ka.",meaning:"Ada yang sedikit lebih besar?"},{jp:"これをください。",romaji:"Kore o kudasai.",meaning:"Saya ambil ini."}],particle:"は untuk pilihan yang dibandingkan; を untuk barang yang dipilih",tip:"Jangan menunjuk orang dengan これ. Gunakan この人 atau nama orang."},
  {id:"schedule",level:"A2",title:"Membuat janji",place:"Chat dengan teman",canDo:"Mengajak, menentukan waktu, dan menolak halus",mission:"Ajak teman makan pada hari Sabtu dan sepakati jamnya.",phrases:[{jp:"土曜日に一緒にご飯を食べませんか。",romaji:"Doyoubi ni issho ni gohan o tabemasen ka.",meaning:"Mau makan bersama hari Sabtu?"},{jp:"三時はどうですか。",romaji:"Sanji wa dou desu ka.",meaning:"Bagaimana kalau jam tiga?"},{jp:"すみません、土曜日はちょっと…。",romaji:"Sumimasen, doyoubi wa chotto…",meaning:"Maaf, hari Sabtu agak…"}],particle:"に untuk waktu; は untuk menawarkan/membandingkan waktu",tip:"〜はちょっと… adalah cara menolak tidak langsung yang umum dan lebih halus."},
  {id:"doctor",level:"A2",title:"Menjelaskan keluhan",place:"Klinik",canDo:"Mengatakan bagian tubuh yang sakit dan sejak kapan",mission:"Jelaskan dua gejala dan kapan mulainya.",phrases:[{jp:"頭が痛いです。",romaji:"Atama ga itai desu.",meaning:"Kepala saya sakit."},{jp:"昨日から熱があります。",romaji:"Kinou kara netsu ga arimasu.",meaning:"Saya demam sejak kemarin."},{jp:"薬を飲んでもいいですか。",romaji:"Kusuri o nondemo ii desu ka.",meaning:"Bolehkah saya minum obat?"}],particle:"が untuk kondisi; から untuk titik awal; を untuk objek",tip:"Untuk keadaan tubuh, bagian yang mengalami kondisi biasanya ditandai が."},
];
