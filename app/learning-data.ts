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
  { level: "N5 · 1", title: "Kalimat pertama", subtitle: "Kenal pola inti", goal: "Menyusun perkenalan, pertanyaan, waktu, tempat, dan kegiatan harian", modules: ["Bunpou dasar", "Partikel は・が・を", "Kosakata N5", "Kanji dasar"], accent: "#dc8448" },
  { level: "N5 · 2", title: "Paham percakapan pelan", subtitle: "Pakai dalam konteks", goal: "Menangkap informasi penting dan merespons kebutuhan sederhana", modules: ["Listening pelan", "Kaiwa dasar", "Kata kerja ます", "Kuis pemahaman"], accent: "#c4a43b" },
  { level: "N4 · 1", title: "Hubungkan gagasan", subtitle: "Mulai mandiri", goal: "Menceritakan pengalaman, alasan, rencana, dan urutan kejadian", modules: ["Bentuk biasa", "Bentuk て・ない・た", "Kosakata N4", "Bacaan pendek"], accent: "#668e67" },
  { level: "N4 · 2", title: "Berbicara lebih natural", subtitle: "Situasi sehari-hari", goal: "Mengikuti percakapan agak lambat dan menjelaskan maksud dengan lebih luwes", modules: ["Kaiwa N4", "Perbandingan pola", "Shadowing", "Misi Can-do"], accent: "#4e7f91" },
  { level: "Review", title: "Siap latihan JLPT", subtitle: "Ukur kelemahan", goal: "Mengulang kosakata, bunpou, membaca, dan listening secara seimbang", modules: ["Review campuran", "Soal resmi JLPT", "Catatan salah", "Rencana ulang"], accent: "#6e648f" },
];

export type Vocabulary = { id: string; japanese: string; reading: string; romaji: string; meaning: string; category: string; example: string; exampleMeaning: string; level?: "N5" | "N4" };
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

const EXTRA_VOCABULARY: Vocabulary[] = [
  {id:"ichi",japanese:"一",reading:"いち",romaji:"ichi",meaning:"satu",category:"Angka",level:"N5",example:"りんごを一つください。",exampleMeaning:"Tolong beri satu apel."},
  {id:"ni-num",japanese:"二",reading:"に",romaji:"ni",meaning:"dua",category:"Angka",level:"N5",example:"猫が二匹います。",exampleMeaning:"Ada dua ekor kucing."},
  {id:"san-num",japanese:"三",reading:"さん",romaji:"san",meaning:"tiga",category:"Angka",level:"N5",example:"三時に会いましょう。",exampleMeaning:"Mari bertemu pukul tiga."},
  {id:"hyaku",japanese:"百",reading:"ひゃく",romaji:"hyaku",meaning:"seratus",category:"Angka",level:"N5",example:"これは百円です。",exampleMeaning:"Ini seratus yen."},
  {id:"chichi",japanese:"父",reading:"ちち",romaji:"chichi",meaning:"ayah saya",category:"Keluarga",level:"N5",example:"父は会社員です。",exampleMeaning:"Ayah saya pegawai perusahaan."},
  {id:"haha",japanese:"母",reading:"はは",romaji:"haha",meaning:"ibu saya",category:"Keluarga",level:"N5",example:"母は料理が上手です。",exampleMeaning:"Ibu saya pandai memasak."},
  {id:"ani",japanese:"兄",reading:"あに",romaji:"ani",meaning:"kakak laki-laki saya",category:"Keluarga",level:"N5",example:"兄は大学生です。",exampleMeaning:"Kakak laki-laki saya mahasiswa."},
  {id:"ane",japanese:"姉",reading:"あね",romaji:"ane",meaning:"kakak perempuan saya",category:"Keluarga",level:"N5",example:"姉は東京に住んでいます。",exampleMeaning:"Kakak perempuan saya tinggal di Tokyo."},
  {id:"otouto",japanese:"弟",reading:"おとうと",romaji:"otouto",meaning:"adik laki-laki",category:"Keluarga",level:"N5",example:"弟とゲームをします。",exampleMeaning:"Saya bermain gim dengan adik laki-laki."},
  {id:"imouto",japanese:"妹",reading:"いもうと",romaji:"imouto",meaning:"adik perempuan",category:"Keluarga",level:"N5",example:"妹は十歳です。",exampleMeaning:"Adik perempuan saya berumur sepuluh tahun."},
  {id:"heya",japanese:"部屋",reading:"へや",romaji:"heya",meaning:"kamar",category:"Rumah",level:"N5",example:"部屋を掃除します。",exampleMeaning:"Saya membersihkan kamar."},
  {id:"tsukue",japanese:"机",reading:"つくえ",romaji:"tsukue",meaning:"meja",category:"Rumah",level:"N5",example:"机の上に本があります。",exampleMeaning:"Ada buku di atas meja."},
  {id:"isu",japanese:"椅子",reading:"いす",romaji:"isu",meaning:"kursi",category:"Rumah",level:"N5",example:"この椅子に座ってください。",exampleMeaning:"Silakan duduk di kursi ini."},
  {id:"mado",japanese:"窓",reading:"まど",romaji:"mado",meaning:"jendela",category:"Rumah",level:"N5",example:"窓を開けてもいいですか。",exampleMeaning:"Bolehkah saya membuka jendela?"},
  {id:"doa",japanese:"ドア",reading:"ドア",romaji:"doa",meaning:"pintu",category:"Rumah",level:"N5",example:"ドアを閉めてください。",exampleMeaning:"Tolong tutup pintunya."},
  {id:"densha",japanese:"電車",reading:"でんしゃ",romaji:"densha",meaning:"kereta",category:"Transportasi",level:"N5",example:"電車で会社へ行きます。",exampleMeaning:"Saya pergi ke kantor dengan kereta."},
  {id:"basu",japanese:"バス",reading:"バス",romaji:"basu",meaning:"bus",category:"Transportasi",level:"N5",example:"バスを待っています。",exampleMeaning:"Saya sedang menunggu bus."},
  {id:"jitensha",japanese:"自転車",reading:"じてんしゃ",romaji:"jitensha",meaning:"sepeda",category:"Transportasi",level:"N5",example:"自転車に乗ります。",exampleMeaning:"Saya naik sepeda."},
  {id:"kuukou",japanese:"空港",reading:"くうこう",romaji:"kuukou",meaning:"bandara",category:"Transportasi",level:"N4",example:"空港までバスで行きます。",exampleMeaning:"Saya pergi sampai bandara dengan bus."},
  {id:"kippu",japanese:"切符",reading:"きっぷ",romaji:"kippu",meaning:"tiket",category:"Transportasi",level:"N5",example:"駅で切符を買いました。",exampleMeaning:"Saya membeli tiket di stasiun."},
  {id:"yasai",japanese:"野菜",reading:"やさい",romaji:"yasai",meaning:"sayuran",category:"Makanan",level:"N5",example:"毎日、野菜を食べます。",exampleMeaning:"Saya makan sayuran setiap hari."},
  {id:"niku",japanese:"肉",reading:"にく",romaji:"niku",meaning:"daging",category:"Makanan",level:"N5",example:"肉と野菜を炒めます。",exampleMeaning:"Saya menumis daging dan sayuran."},
  {id:"tamago",japanese:"卵",reading:"たまご",romaji:"tamago",meaning:"telur",category:"Makanan",level:"N5",example:"朝、卵を二つ食べました。",exampleMeaning:"Pagi tadi saya makan dua telur."},
  {id:"ocha",japanese:"お茶",reading:"おちゃ",romaji:"ocha",meaning:"teh",category:"Makanan",level:"N5",example:"温かいお茶はいかがですか。",exampleMeaning:"Bagaimana kalau teh hangat?"},
  {id:"ryouri",japanese:"料理",reading:"りょうり",romaji:"ryouri",meaning:"masakan / memasak",category:"Makanan",level:"N4",example:"日本料理を作ってみたいです。",exampleMeaning:"Saya ingin mencoba membuat masakan Jepang."},
  {id:"kinou",japanese:"昨日",reading:"きのう",romaji:"kinou",meaning:"kemarin",category:"Waktu",level:"N5",example:"昨日は雨でした。",exampleMeaning:"Kemarin hujan."},
  {id:"asatte",japanese:"明後日",reading:"あさって",romaji:"asatte",meaning:"lusa",category:"Waktu",level:"N4",example:"明後日、試験があります。",exampleMeaning:"Lusa ada ujian."},
  {id:"shuumatsu",japanese:"週末",reading:"しゅうまつ",romaji:"shuumatsu",meaning:"akhir pekan",category:"Waktu",level:"N4",example:"週末は何をしますか。",exampleMeaning:"Apa yang kamu lakukan akhir pekan?"},
  {id:"saikin",japanese:"最近",reading:"さいきん",romaji:"saikin",meaning:"akhir-akhir ini",category:"Waktu",level:"N4",example:"最近、忙しくなりました。",exampleMeaning:"Akhir-akhir ini saya menjadi sibuk."},
  {id:"tokidoki",japanese:"時々",reading:"ときどき",romaji:"tokidoki",meaning:"kadang-kadang",category:"Waktu",level:"N5",example:"時々、映画を見ます。",exampleMeaning:"Kadang-kadang saya menonton film."},
  {id:"byouin",japanese:"病院",reading:"びょういん",romaji:"byouin",meaning:"rumah sakit",category:"Tempat",level:"N5",example:"病院へ行ったほうがいいです。",exampleMeaning:"Sebaiknya pergi ke rumah sakit."},
  {id:"yuubinkyoku",japanese:"郵便局",reading:"ゆうびんきょく",romaji:"yuubinkyoku",meaning:"kantor pos",category:"Tempat",level:"N4",example:"郵便局は銀行の隣です。",exampleMeaning:"Kantor pos di sebelah bank."},
  {id:"toshokan",japanese:"図書館",reading:"としょかん",romaji:"toshokan",meaning:"perpustakaan",category:"Tempat",level:"N5",example:"図書館で本を借ります。",exampleMeaning:"Saya meminjam buku di perpustakaan."},
  {id:"kouen",japanese:"公園",reading:"こうえん",romaji:"kouen",meaning:"taman",category:"Tempat",level:"N5",example:"公園を散歩しましょう。",exampleMeaning:"Mari berjalan-jalan di taman."},
  {id:"kaisha",japanese:"会社",reading:"かいしゃ",romaji:"kaisha",meaning:"perusahaan / kantor",category:"Tempat",level:"N5",example:"会社まで一時間かかります。",exampleMeaning:"Perjalanan sampai kantor memakan satu jam."},
  {id:"kau",japanese:"買う",reading:"かう",romaji:"kau",meaning:"membeli",category:"Kata kerja",level:"N5",example:"新しい靴を買いました。",exampleMeaning:"Saya membeli sepatu baru."},
  {id:"yomu",japanese:"読む",reading:"よむ",romaji:"yomu",meaning:"membaca",category:"Kata kerja",level:"N5",example:"寝る前に本を読みます。",exampleMeaning:"Saya membaca buku sebelum tidur."},
  {id:"kaku",japanese:"書く",reading:"かく",romaji:"kaku",meaning:"menulis",category:"Kata kerja",level:"N5",example:"ここに名前を書いてください。",exampleMeaning:"Tolong tulis nama di sini."},
  {id:"kiku",japanese:"聞く",reading:"きく",romaji:"kiku",meaning:"mendengar / bertanya",category:"Kata kerja",level:"N5",example:"先生に質問を聞きました。",exampleMeaning:"Saya bertanya kepada guru."},
  {id:"wakaru",japanese:"分かる",reading:"わかる",romaji:"wakaru",meaning:"mengerti",category:"Kata kerja",level:"N5",example:"意味が分かりません。",exampleMeaning:"Saya tidak mengerti artinya."},
  {id:"wasureru",japanese:"忘れる",reading:"わすれる",romaji:"wasureru",meaning:"lupa",category:"Kata kerja",level:"N4",example:"宿題を忘れてしまいました。",exampleMeaning:"Saya terlanjur lupa PR."},
  {id:"oboeru",japanese:"覚える",reading:"おぼえる",romaji:"oboeru",meaning:"mengingat / menghafal",category:"Kata kerja",level:"N4",example:"新しい漢字を十個覚えました。",exampleMeaning:"Saya menghafal sepuluh kanji baru."},
  {id:"hajimeru",japanese:"始める",reading:"はじめる",romaji:"hajimeru",meaning:"memulai",category:"Kata kerja",level:"N4",example:"日本語の勉強を始めました。",exampleMeaning:"Saya mulai belajar bahasa Jepang."},
  {id:"tsuzukeru",japanese:"続ける",reading:"つづける",romaji:"tsuzukeru",meaning:"melanjutkan",category:"Kata kerja",level:"N4",example:"毎日練習を続けています。",exampleMeaning:"Saya terus berlatih setiap hari."},
  {id:"isogashii",japanese:"忙しい",reading:"いそがしい",romaji:"isogashii",meaning:"sibuk",category:"Sifat",level:"N5",example:"今日はとても忙しいです。",exampleMeaning:"Hari ini sangat sibuk."},
  {id:"omoshiroi",japanese:"面白い",reading:"おもしろい",romaji:"omoshiroi",meaning:"menarik / lucu",category:"Sifat",level:"N5",example:"この本は面白いです。",exampleMeaning:"Buku ini menarik."},
  {id:"muzukashii",japanese:"難しい",reading:"むずかしい",romaji:"muzukashii",meaning:"sulit",category:"Sifat",level:"N5",example:"この文法は少し難しいです。",exampleMeaning:"Tata bahasa ini agak sulit."},
  {id:"kantan",japanese:"簡単",reading:"かんたん",romaji:"kantan",meaning:"mudah / sederhana",category:"Sifat",level:"N4",example:"この問題は簡単でした。",exampleMeaning:"Soal ini mudah."},
  {id:"daijoubu",japanese:"大丈夫",reading:"だいじょうぶ",romaji:"daijoubu",meaning:"tidak apa-apa / aman",category:"Ungkapan",level:"N5",example:"一人で大丈夫です。",exampleMeaning:"Saya tidak apa-apa sendirian."},
  {id:"mouichido",japanese:"もう一度",reading:"もういちど",romaji:"mou ichido",meaning:"sekali lagi",category:"Ungkapan",level:"N5",example:"もう一度お願いします。",exampleMeaning:"Tolong sekali lagi."},
  {id:"yukkuri",japanese:"ゆっくり",reading:"ゆっくり",romaji:"yukkuri",meaning:"pelan-pelan",category:"Ungkapan",level:"N5",example:"ゆっくり話してください。",exampleMeaning:"Tolong bicara pelan-pelan."},
  {id:"tabun",japanese:"たぶん",reading:"たぶん",romaji:"tabun",meaning:"mungkin",category:"Ungkapan",level:"N4",example:"たぶん明日は晴れるでしょう。",exampleMeaning:"Mungkin besok akan cerah."},
  {id:"zehi",japanese:"ぜひ",reading:"ぜひ",romaji:"zehi",meaning:"pasti / sangat ingin",category:"Ungkapan",level:"N4",example:"ぜひ遊びに来てください。",exampleMeaning:"Pastikan datang berkunjung, ya."},
  {id:"keiken",japanese:"経験",reading:"けいけん",romaji:"keiken",meaning:"pengalaman",category:"Sekolah & kerja",level:"N4",example:"日本で働いた経験があります。",exampleMeaning:"Saya punya pengalaman bekerja di Jepang."},
  {id:"shigoto",japanese:"仕事",reading:"しごと",romaji:"shigoto",meaning:"pekerjaan",category:"Sekolah & kerja",level:"N4",example:"仕事が終わった後で、勉強します。",exampleMeaning:"Setelah pekerjaan selesai, saya belajar."},
  {id:"kaigi",japanese:"会議",reading:"かいぎ",romaji:"kaigi",meaning:"rapat",category:"Sekolah & kerja",level:"N4",example:"会議は三時から始まります。",exampleMeaning:"Rapat mulai pukul tiga."},
  {id:"shiken",japanese:"試験",reading:"しけん",romaji:"shiken",meaning:"ujian",category:"Sekolah & kerja",level:"N4",example:"来週、日本語の試験を受けます。",exampleMeaning:"Minggu depan saya mengikuti ujian bahasa Jepang."},
  {id:"shukudai",japanese:"宿題",reading:"しゅくだい",romaji:"shukudai",meaning:"pekerjaan rumah",category:"Sekolah & kerja",level:"N4",example:"宿題を出すのを忘れました。",exampleMeaning:"Saya lupa mengumpulkan PR."},
  {id:"renshuu",japanese:"練習",reading:"れんしゅう",romaji:"renshuu",meaning:"latihan",category:"Sekolah & kerja",level:"N4",example:"毎日、会話の練習をしています。",exampleMeaning:"Setiap hari saya berlatih percakapan."},
  {id:"shitsumon",japanese:"質問",reading:"しつもん",romaji:"shitsumon",meaning:"pertanyaan",category:"Sekolah & kerja",level:"N4",example:"分からないとき、質問してください。",exampleMeaning:"Kalau tidak mengerti, silakan bertanya."},
  {id:"setsumei",japanese:"説明",reading:"せつめい",romaji:"setsumei",meaning:"penjelasan",category:"Sekolah & kerja",level:"N4",example:"先生の説明は分かりやすいです。",exampleMeaning:"Penjelasan guru mudah dipahami."},
  {id:"yakusoku",japanese:"約束",reading:"やくそく",romaji:"yakusoku",meaning:"janji",category:"Kehidupan",level:"N4",example:"友達と会う約束をしました。",exampleMeaning:"Saya membuat janji bertemu teman."},
  {id:"yotei-word",japanese:"予定",reading:"よてい",romaji:"yotei",meaning:"rencana / jadwal",category:"Kehidupan",level:"N4",example:"週末の予定はまだありません。",exampleMeaning:"Saya belum punya rencana akhir pekan."},
  {id:"junbi",japanese:"準備",reading:"じゅんび",romaji:"junbi",meaning:"persiapan",category:"Kehidupan",level:"N4",example:"旅行の準備をしています。",exampleMeaning:"Saya sedang mempersiapkan perjalanan."},
  {id:"tsugou",japanese:"都合",reading:"つごう",romaji:"tsugou",meaning:"keadaan / waktu yang cocok",category:"Kehidupan",level:"N4",example:"明日は都合が悪いです。",exampleMeaning:"Besok waktunya tidak cocok bagi saya."},
  {id:"renraku",japanese:"連絡",reading:"れんらく",romaji:"renraku",meaning:"menghubungi / kabar",category:"Kehidupan",level:"N4",example:"着いたら連絡してください。",exampleMeaning:"Tolong hubungi saya setelah tiba."},
  {id:"byouki",japanese:"病気",reading:"びょうき",romaji:"byouki",meaning:"sakit / penyakit",category:"Kesehatan",level:"N4",example:"病気なので、今日は休みます。",exampleMeaning:"Karena sakit, hari ini saya beristirahat."},
  {id:"kusuri",japanese:"薬",reading:"くすり",romaji:"kusuri",meaning:"obat",category:"Kesehatan",level:"N4",example:"食事の後で薬を飲んでください。",exampleMeaning:"Tolong minum obat setelah makan."},
  {id:"netsu",japanese:"熱",reading:"ねつ",romaji:"netsu",meaning:"demam / panas",category:"Kesehatan",level:"N4",example:"昨日から熱があります。",exampleMeaning:"Saya demam sejak kemarin."},
  {id:"itai",japanese:"痛い",reading:"いたい",romaji:"itai",meaning:"sakit / nyeri",category:"Kesehatan",level:"N4",example:"頭が痛くて、集中できません。",exampleMeaning:"Kepala saya sakit sehingga tidak bisa fokus."},
  {id:"naoru",japanese:"治る",reading:"なおる",romaji:"naoru",meaning:"sembuh",category:"Kesehatan",level:"N4",example:"風邪はもう治りました。",exampleMeaning:"Pilek saya sudah sembuh."},
  {id:"abunai",japanese:"危ない",reading:"あぶない",romaji:"abunai",meaning:"berbahaya",category:"Sifat",level:"N4",example:"夜、一人で歩くのは危ないです。",exampleMeaning:"Berjalan sendirian malam hari berbahaya."},
  {id:"hitsuyou",japanese:"必要",reading:"ひつよう",romaji:"hitsuyou",meaning:"perlu",category:"Sifat",level:"N4",example:"予約する必要があります。",exampleMeaning:"Perlu melakukan reservasi."},
  {id:"tashika",japanese:"確か",reading:"たしか",romaji:"tashika",meaning:"kalau tidak salah",category:"Ungkapan",level:"N4",example:"確か、駅はこの近くです。",exampleMeaning:"Kalau tidak salah, stasiun ada di dekat sini."},
  {id:"moshimo",japanese:"もし",reading:"もし",romaji:"moshi",meaning:"jika / seandainya",category:"Ungkapan",level:"N4",example:"もし時間があったら、電話してください。",exampleMeaning:"Kalau ada waktu, tolong telepon."},
];

VOCABULARY.push(...EXTRA_VOCABULARY);

// === EXPANDED VOCABULARY (+40) ===
VOCABULARY.push(
  {id:"kurasu",japanese:"クラス",reading:"kurasu",romaji:"kurasu",meaning:"kelas",category:"Sekolah",example:"「このクラスには二十人います。」",exampleMeaning:"Kelas ini berisi duapuluh orang.",level:"N5"}
  {id:"sensei2",japanese:"先生",reading:"せんせい",romaji:"せんせい",meaning:"guru",category:"Orang",example:"先生はやさしいです。",exampleMeaning:"Gurunya baik.",level:"N5"}
  {id:"gakusei",japanese:"学生",reading:"がくせい",romaji:"がくせい",meaning:"pelajar",category:"Orang",example:"私は学生です。",exampleMeaning:"Saya pelajar.",level:"N5"}
  {id:"hon",japanese:"本",reading:"ほん",romaji:"ほん",meaning:"buku",category:"Benda",example:"本を読みます。",exampleMeaning:"Saya membaca buku.",level:"N5"}
  {id:"pen",japanese:"ペン",reading:"ぺん",romaji:"ぺん",meaning:"pulpen",category:"Benda",example:"ペンで書きます。",exampleMeaning:"Saya menulis dengan pulpen.",level:"N5"}
  {id:"tsukue2",japanese:"机",reading:"つくえ",romaji:"つくえ",meaning:"meja",category:"Rumah",example:"机の上に本があります。",exampleMeaning:"Di atas meja ada buku.",level:"N5"}
  {id:"isud",japanese:"椅子",reading:"いす",romaji:"いす",meaning:"kursi",category:"Rumah",example:"椅子に座ってください。",exampleMeaning:"Silakan duduk di kursi.",level:"N5"}
  {id:"denwa",japanese:"電話",reading:"でんわ",romaji:"でんわ",meaning:"telepon",category:"Tempat",example:"電話をかけます。",exampleMeaning:"Saya menelepon.",level:"N5"}
  {id:"terebi",japanese:"テレビ",reading:"てれび",romaji:"てれび",meaning:"TV",category:"Benda",example:"テレビを見ます。",exampleMeaning:"Saya menonton TV.",level:"N5"}
  {id:"rajio",japanese:"ラジオ",reading:"らじお",romaji:"らじお",meaning:"radio",category:"Benda",example:"ラジオを聞きます。",exampleMeaning:"Saya mendengarkan radio.",level:"N5"}
  {id:"kasa2",japanese:"傘",reading:"かさ",romaji:"かさ",meaning:"payung",category:"Makanan",example:"傘を持って行きます。",exampleMeaning:"Saya pergi membawa payung.",level:"N5"}
  {id:"kutsu",japanese:"靴",reading:"くつ",romaji:"くつ",meaning:"sepatu",category:"Pakaian",example:"靴を買いました。",exampleMeaning:"Saya membeli sepatu.",level:"N5"}
  {id:"fuku",japanese:"服",reading:"ふく",romaji:"ふく",meaning:"pakaian",category:"Pakaian",example:"服を着ます。",exampleMeaning:"Saya memakai pakaian.",level:"N5"}
  {id:"tokei",japanese:"時計",reading:"とけい",romaji:"とけい",meaning:"jam (arloji)",category:"Benda",example:"時計はいくらですか。",exampleMeaning:"Jam berapa harganya?",level:"N5"}
  {id:"okane",japanese:"お金",reading:"おかね",romaji:"おかね",meaning:"uang",category:"Kehidupan",example:"お金を貯金します。",exampleMeaning:"Saya menabung uang.",level:"N5"}
  {id:"ryokan",japanese:"旅館",reading:"りょかん",romaji:"りょかん",meaning:"penginapan",category:"Kehidupan",example:"旅館に泊まります。",exampleMeaning:"Menginap di ryokan.",level:"N4"}
  {id:"eki2",japanese:"駅",reading:"えき",romaji:"えき",meaning:"stasiun",category:"Tempat",example:"駅まで歩きます。",exampleMeaning:"Berjalan kaki ke stasiun.",level:"N5"}
  {id:"machi",japanese:"町",reading:"まち",romaji:"まち",meaning:"kota/desa",category:"Tempat",example:"町は静かです。",exampleMeaning:"Kotanya tenang.",level:"N5"}
  {id:"mura",japanese:"村",reading:"むら",romaji:"むら",meaning:"desa",category:"Tempat",example:"村で育ちました。",exampleMeaning:"Saya besar di desa.",level:"N4"}
  {id:"umi",japanese:"海",reading:"うみ",romaji:"うみ",meaning:"laut",category:"Tempat",example:"海へ行きました。",exampleMeaning:"Saya pergi ke laut.",level:"N5"}
  {id:"sora2",japanese:"空",reading:"そら",romaji:"そら",meaning:"langit",category:"Tempat",example:"空が青いです。",exampleMeaning:"Langitnya biru.",level:"N5"}
  {id:"kaze",japanese:"風",reading:"かぜ",romaji:"かぜ",meaning:"angin",category:"Alam",example:"風が強いです。",exampleMeaning:"Anginnya kuart.",level:"N5"}
  {id:"yuki2",japanese:"雪",reading:"ゆき",romaji:"ゆき",meaning:"salju",category:"Alam",example:"雪が降ります。",exampleMeaning:"Salju turun.",level:"N5"}
  {id:"hana2",japanese:"花",reading:"はな",romaji:"はな",meaning:"bunga",category:"Alam",example:"花が咲きます。",exampleMeaning:"Bunga mekar.",level:"N5"}
  {id:"ki2",japanese:"木",reading:"き",romaji:"き",meaning:"pohon",category:"Alam",example:"木が高いです。",exampleMeaning:"Pohonnya tingggi.",level:"N5"}
  {id:"torii",japanese:"鳥",reading:"とり",romaji:"とり",meaning:"burung",category:"Alam",example:"鳥が歌います。",exampleMeaning:"Burung bernyanyi.",level:"N5"}
  {id:"neko2",japanese:"猫",reading:"ねこ",romaji:"ねこ",meaning:"kucing",category:"Alam",example:"猫が眠っています。",exampleMeaning:"Kucing sedang tidur.",level:"N5"}
  {id:"inu2",japanese:"犬",reading:"いぬ",romaji:"いぬ",meaning:"anjing",category:"Alam",example:"犬を飼っています。",exampleMeaning:"Saya memelihara anjing.",level:"N5"}
  {id:"sakana2",japanese:"魚",reading:"さかな",romaji:"さかな",meaning:"ikan",category:"Makanan",example:"魚を釣ります。",exampleMeaning:"Saya memancing ikan.",level:"N5"}
  {id:"niku2",japanese:"肉",reading:"にく",romaji:"にく",meaning:"daging",category:"Makanan",example:"肉を焼きます。",exampleMeaning:"Saya memanggang daging.",level:"N5"}
  {id:"yasai2",japanese:"野菜",reading:"やさい",romaji:"やさい",meaning:"sayuran",category:"Makanan",example:"野菜を買います。",exampleMeaning:"Saya membeli sayuran.",level:"N5"}
  {id:"gohan2",japanese:"御飯",reading:"ごはん",romaji:"ごはん",meaning:"nasi/makanan",category:"Makanan",example:"御飯を作ります。",exampleMeaning:"Saya memasak.",level:"N5"}
  {id:"mizu2",japanese:"水",reading:"みず",romaji:"みず",meaning:"air",category:"Makanan",example:"水を飲みます。",exampleMeaning:"Saya minum air.",level:"N5"}
  {id:"ocha2",japanese:"お茶",reading:"おちゃ",romaji:"おちゃ",meaning:"teh",category:"Makanan",example:"お茶を入れます。",exampleMeaning:"Saya menyeduh teb.",level:"N5"}
  {id:"koohii",japanese:"コーヒー",reading:"こーひー",romaji:"こーひー",meaning:"kopi",category:"Makanan",example:"コーヒーが好きです。",exampleMeaning:"Saya suka kopi.",level:"N5"}
  {id:"ringo2",japanese:"林檎",reading:"りんご",romaji:"りんご",meaning:"apel",category:"Makanan",example:"林檎を食べます。",exampleMeaning:"Saya makan apel.",level:"N5"}
  {id:"banana",japanese:"バナナ",reading:"ばなな",romaji:"ばなな",meaning:"pisang",category:"Makanan",example:"バナナは安いです。",exampleMeaning:"Pisang murah.",level:"N5"}
  {id:"biiru",japanese:"ビール",reading:"びーる",romaji:"びーる",meaning:"bir",category:"Makanan",example:"ビールを飲みます。",exampleMeaning:"Saya minum bir.",level:"N5"}
  {id:"sakura",japanese:"桜",reading:"さくら",romaji:"さくら",meaning:"sakura",category:"Alam",example:"桜の花がきれいです。",exampleMeaning:"Bunga sakura indah.",level:"N4"}
  {id:"matsu",japanese:"待つ",reading:"まつ",romaji:"まつ",meaning:"menunggu",category:"Kata kerja",example:"バスを待ちます。",exampleMeaning:"Menunggu bus.",level:"N5"}
  {id:"kaeru2",japanese:"帰る",reading:"かえる",romaji:"かえる",meaning:"pulang",category:"Kata kerja",example:"家に帰ります。",exampleMeaning:"Pulang ke rumah.",level:"N5"}
  {id:"neru",japanese:"寝る",reading:"ねる",romaji:"ねる",meaning:"tidur",category:"Kata kerja",example:"十時に寝ます。",exampleMeaning:"Tidur jam 10.",level:"N5"}
  {id:"okiru",japanese:"起きる",reading:"おきる",romaji:"おきる",meaning:"bangun",category:"Kata kerja",example:"七時に起きます。",exampleMeaning:"Bangun jam 7.",level:"N5"}
  {id:"ayumaru",japanese:"歩く",reading:"あるく",romaji:"あるく",meaning:"berjalan",category:"Kata kerja",example:"駅まで歩きます。",exampleMeaning:"Berjalan ke stasiun.",level:"N5"}
  {id:"hanaseru",japanese:"話せる",reading:"はなせる",romaji:"はなせる",meaning:"bisa bicara",category:"Kata kerja",example:"日本語が話せます。",exampleMeaning:"Bisa bicara Jepang.",level:"N4"}
  {id:"wakaru2",japanese:"分かる",reading:"わかる",romaji:"わかる",meaning:"mengerti",category:"Kata kerja",example:"意味が分かります。",exampleMeaning:"Mengerti artinya.",level:"N5"}
);

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

GRAMMAR.push(
  {id:"kore-sore-are",level:"N5",title:"これ・それ・あれ",meaning:"ini, itu, yang di sana",pattern:"これ／それ／あれ + は…",explanation:"これ dekat pembicara, それ dekat lawan bicara, あれ jauh dari keduanya. Untuk langsung menerangkan benda gunakan この・その・あの + benda.",examples:[{jp:"これは私の傘です。",romaji:"Kore wa watashi no kasa desu.",id:"Ini payung saya."},{jp:"その本はいくらですか。",romaji:"Sono hon wa ikura desu ka.",id:"Buku itu berapa harganya?"}]},
  {id:"location",level:"N5",title:"ここ・そこ・あそこ・どこ",meaning:"menunjukkan tempat",pattern:"Tempat は ここ／そこ／あそこ です",explanation:"Gunakan ここ untuk lokasi pembicara, そこ untuk lokasi lawan bicara, dan あそこ untuk tempat yang jauh. どこ digunakan untuk bertanya.",examples:[{jp:"トイレはどこですか。",romaji:"Toire wa doko desu ka.",id:"Toilet ada di mana?"}]},
  {id:"masu",level:"N5",title:"〜ます・ません",meaning:"kata kerja sopan sekarang",pattern:"Vます／Vません",explanation:"Bentuk ます dipakai untuk kebiasaan atau masa depan. Negatifnya ません; bahasa Jepang tidak selalu menandai waktu sekarang secara khusus.",examples:[{jp:"毎朝コーヒーを飲みます。",romaji:"Maiasa koohii o nomimasu.",id:"Setiap pagi saya minum kopi."},{jp:"今日は働きません。",romaji:"Kyou wa hatarakimasen.",id:"Hari ini saya tidak bekerja."}]},
  {id:"counters",level:"N5",title:"Angka + kata bantu bilangan",meaning:"menghitung benda dan orang",pattern:"angka + 人／枚／本／個／つ",explanation:"Bahasa Jepang memakai penghitung sesuai bentuk benda. つ adalah penghitung umum sampai sepuluh; 人 untuk orang, 枚 untuk benda tipis, dan 本 untuk benda panjang.",examples:[{jp:"切符を二枚ください。",romaji:"Kippu o nimai kudasai.",id:"Tolong beri dua lembar tiket."}]},
  {id:"frequency",level:"N5",title:"いつも・よく・時々・あまり",meaning:"menyatakan frekuensi",pattern:"Frekuensi + V",explanation:"いつも selalu, よく sering, 時々 kadang-kadang. あまり dan 全然 biasanya diikuti bentuk negatif.",examples:[{jp:"テレビはあまり見ません。",romaji:"Terebi wa amari mimasen.",id:"Saya tidak terlalu sering menonton TV."}]},
  {id:"invitation",level:"N5",title:"〜ませんか・〜ましょう",meaning:"mengajak",pattern:"Vませんか／Vましょう",explanation:"〜ませんか adalah ajakan halus yang memberi ruang untuk menolak. 〜ましょう lebih langsung: mari kita lakukan.",examples:[{jp:"一緒に昼ご飯を食べませんか。",romaji:"Issho ni hirugohan o tabemasen ka.",id:"Mau makan siang bersama?"}]},
  {id:"kudasai",level:"N5",title:"〜てください",meaning:"tolong lakukan",pattern:"Vて + ください",explanation:"Permintaan sopan tetapi tetap langsung. Untuk layanan atau bantuan yang lebih lembut, 〜てもらえますか sering terasa lebih halus.",examples:[{jp:"もう一度言ってください。",romaji:"Mou ichido itte kudasai.",id:"Tolong katakan sekali lagi."}]},
  {id:"permission",level:"N5",title:"〜てもいいです",meaning:"boleh melakukan",pattern:"Vて + もいいです（か）",explanation:"Dipakai untuk memberi atau meminta izin. Jawaban negatif yang lembut sering memakai すみません、ちょっと… alih-alih larangan keras.",examples:[{jp:"ここに座ってもいいですか。",romaji:"Koko ni suwatte mo ii desu ka.",id:"Bolehkah saya duduk di sini?"}]},
  {id:"prohibition",level:"N5",title:"〜てはいけません",meaning:"tidak boleh",pattern:"Vて + はいけません",explanation:"Menyatakan larangan atau aturan. Dalam percakapan santai sering menjadi 〜ちゃだめ.",examples:[{jp:"ここで写真を撮ってはいけません。",romaji:"Koko de shashin o totte wa ikemasen.",id:"Tidak boleh mengambil foto di sini."}]},
  {id:"progressive",level:"N5",title:"〜ています",meaning:"sedang / keadaan berlanjut",pattern:"Vて + います",explanation:"Bisa berarti aksi sedang berlangsung, kebiasaan berulang, atau keadaan hasil. 結婚しています berarti dalam keadaan menikah, bukan sedang menikah sekarang.",examples:[{jp:"今、日本語を勉強しています。",romaji:"Ima, nihongo o benkyou shite imasu.",id:"Sekarang saya sedang belajar bahasa Jepang."}]},
  {id:"comparison",level:"N5",title:"A より B のほうが",meaning:"B lebih ... daripada A",pattern:"A より B のほうが sifat",explanation:"より menandai pembanding. Untuk memilih dari dua hal gunakan AとBと、どちらが…; jawab dengan 〜のほうが.",examples:[{jp:"電車よりバスのほうが安いです。",romaji:"Densha yori basu no hou ga yasui desu.",id:"Bus lebih murah daripada kereta."}]},
  {id:"reason-kara",level:"N5",title:"〜から",meaning:"karena",pattern:"Alasan + から、hasil",explanation:"から memberikan alasan dengan cukup tegas. Dalam bentuk sopan, kata benda dan sifat-na memakai ですから.",examples:[{jp:"雨ですから、出かけません。",romaji:"Ame desu kara, dekakemasen.",id:"Karena hujan, saya tidak keluar."}]},
  {id:"dictionary-form",level:"N4",title:"Bentuk kamus dan bentuk biasa",meaning:"fondasi kalimat kasual",pattern:"行く・行かない・行った・行かなかった",explanation:"Bentuk biasa dipakai sebelum banyak pola N4 dan dalam percakapan akrab. Kesopanan kalimat terutama ditentukan oleh akhir kalimat, bukan setiap kata.",examples:[{jp:"明日、学校へ行く？",romaji:"Ashita, gakkou e iku?",id:"Besok pergi ke sekolah?"}]},
  {id:"nai-form",level:"N4",title:"Bentuk ない",meaning:"negatif biasa",pattern:"Vない",explanation:"Bentuk ない menjadi dasar larangan, kewajiban, dan menyatakan belum. Perhatikan pengecualian ある → ない dan する → しない.",examples:[{jp:"今日は肉を食べない。",romaji:"Kyou wa niku o tabenai.",id:"Hari ini saya tidak makan daging."}]},
  {id:"must",level:"N4",title:"〜なければなりません",meaning:"harus",pattern:"Vない → Vなければなりません",explanation:"Secara harfiah berarti jika tidak dilakukan, tidak baik. Dalam percakapan sering dipendekkan menjadi 〜なきゃ.",examples:[{jp:"薬を飲まなければなりません。",romaji:"Kusuri o nomanakereba narimasen.",id:"Saya harus minum obat."}]},
  {id:"not-have-to",level:"N4",title:"〜なくてもいいです",meaning:"tidak harus",pattern:"Vない → Vなくてもいい",explanation:"Jangan tertukar dengan 〜てはいけない. なくてもいい membebaskan kewajiban; てはいけない melarang tindakan.",examples:[{jp:"明日は来なくてもいいです。",romaji:"Ashita wa konakute mo ii desu.",id:"Besok tidak perlu datang."}]},
  {id:"experience",level:"N4",title:"〜たことがあります",meaning:"pernah melakukan",pattern:"Vた + ことがある",explanation:"Menyatakan pengalaman setidaknya sekali. Jangan gunakan untuk kejadian yang waktunya spesifik seperti 昨日.",examples:[{jp:"京都へ行ったことがあります。",romaji:"Kyouto e itta koto ga arimasu.",id:"Saya pernah pergi ke Kyoto."}]},
  {id:"before-after",level:"N4",title:"〜前に・〜た後で",meaning:"sebelum dan sesudah",pattern:"Vる前に／Vた後で",explanation:"前に memakai bentuk kamus walaupun kejadian keseluruhan sudah lampau. 後で memakai bentuk た karena tindakan pertama sudah selesai.",examples:[{jp:"寝る前に、歯を磨きます。",romaji:"Neru mae ni, ha o migakimasu.",id:"Saya menggosok gigi sebelum tidur."}]},
  {id:"while",level:"N4",title:"〜ながら",meaning:"sambil",pattern:"akar ます + ながら",explanation:"Dua tindakan dilakukan oleh subjek yang sama. Tindakan utama biasanya berada di akhir kalimat.",examples:[{jp:"音楽を聞きながら勉強します。",romaji:"Ongaku o kikinagara benkyou shimasu.",id:"Saya belajar sambil mendengarkan musik."}]},
  {id:"try",level:"N4",title:"〜てみます",meaning:"mencoba melakukan",pattern:"Vて + みる",explanation:"Menunjukkan mencoba untuk mengetahui hasil atau pengalaman. Bukan sekadar melihat; みる di sini ditulis hiragana.",examples:[{jp:"この料理を食べてみます。",romaji:"Kono ryouri o tabete mimasu.",id:"Saya akan mencoba makanan ini."}]},
  {id:"completion",level:"N4",title:"〜てしまいます",meaning:"selesai sepenuhnya / terlanjur",pattern:"Vて + しまう",explanation:"Bisa menekankan penyelesaian, atau rasa menyesal karena sesuatu terjadi. Bentuk percakapan: 〜ちゃう／〜じゃう.",examples:[{jp:"財布を忘れてしまいました。",romaji:"Saifu o wasurete shimaimashita.",id:"Saya terlanjur lupa dompet."}]},
  {id:"give-receive",level:"N4",title:"あげる・くれる・もらう",meaning:"memberi dan menerima",pattern:"AはBにNをあげる／Bが私にくれる／私はBにもらう",explanation:"Pilih kata kerja berdasarkan arah manfaat. くれる selalu bergerak menuju pembicara atau kelompoknya; もらう melihat dari pihak penerima.",examples:[{jp:"友達が本をくれました。",romaji:"Tomodachi ga hon o kuremashita.",id:"Teman memberi saya buku."}]},
  {id:"intention",level:"N4",title:"〜つもりです",meaning:"berniat",pattern:"Vる／Vない + つもり",explanation:"Menyatakan niat yang sudah dipikirkan. Untuk rencana resmi yang sudah dijadwalkan, 予定です sering lebih tepat.",examples:[{jp:"来年、日本へ行くつもりです。",romaji:"Rainen, Nihon e iku tsumori desu.",id:"Saya berniat pergi ke Jepang tahun depan."}]},
  {id:"plan",level:"N4",title:"〜予定です",meaning:"terjadwal / direncanakan",pattern:"Vる／Nの + 予定",explanation:"Dipakai untuk rencana yang relatif konkret atau telah dijadwalkan, tidak hanya niat pribadi.",examples:[{jp:"会議は三時に始まる予定です。",romaji:"Kaigi wa sanji ni hajimaru yotei desu.",id:"Rapat dijadwalkan mulai pukul tiga."}]},
  {id:"seems",level:"N4",title:"〜そうです",meaning:"kelihatannya",pattern:"akar ます／kata sifat + そう",explanation:"Menyimpulkan dari penampilan langsung. おいしそう = terlihat enak. Berbeda dari bentuk biasa + そうです yang berarti kabarnya.",examples:[{jp:"このケーキはおいしそうです。",romaji:"Kono keeki wa oishisou desu.",id:"Kue ini kelihatannya enak."}]},
  {id:"hearsay",level:"N4",title:"〜そうです（katanya）",meaning:"menyampaikan kabar",pattern:"bentuk biasa + そうです",explanation:"Menyebut informasi yang didengar dari sumber lain. Bentuk sebelum そう tidak diubah; 雨だそうです berarti katanya hujan.",examples:[{jp:"天気予報によると、明日は雨だそうです。",romaji:"Tenki yohou ni yoru to, ashita wa ame da sou desu.",id:"Menurut prakiraan cuaca, katanya besok hujan."}]},
  {id:"because-node",level:"N4",title:"〜ので",meaning:"karena / sebab",pattern:"bentuk biasa + ので",explanation:"ので cenderung terdengar lebih menjelaskan dan lembut daripada から. Kata benda dan sifat-na memakai なので.",examples:[{jp:"用事があるので、先に帰ります。",romaji:"Youji ga aru node, saki ni kaerimasu.",id:"Karena ada urusan, saya pulang dulu."}]},
  {id:"although",level:"N4",title:"〜のに",meaning:"padahal / meskipun",pattern:"bentuk biasa + のに",explanation:"Menunjukkan hasil yang berlawanan dengan harapan, sering membawa rasa heran atau kecewa.",examples:[{jp:"勉強したのに、分かりませんでした。",romaji:"Benkyou shita noni, wakarimasen deshita.",id:"Padahal sudah belajar, saya tidak mengerti."}]},
  {id:"explanation-no-desu",level:"N4",title:"〜んです／のです",meaning:"memberi latar atau penjelasan",pattern:"bentuk biasa + んです",explanation:"Dipakai saat menjelaskan keadaan, meminta alasan, atau menunjukkan bahwa ada konteks di balik ucapan. Kata benda dan sifat-na memakai なんです.",examples:[{jp:"どうして遅れたんですか。",romaji:"Doushite okureta n desu ka.",id:"Kenapa terlambat?"}]},
  {id:"too-much",level:"N4",title:"〜すぎます",meaning:"terlalu",pattern:"akar ます／akar sifat + すぎる",explanation:"Untuk kata kerja lepaskan ます; untuk sifat-i lepaskan い; untuk sifat-na langsung tambah すぎる.",examples:[{jp:"昨日、食べすぎました。",romaji:"Kinou, tabesugimashita.",id:"Kemarin saya makan terlalu banyak."}]},
  {id:"easy-hard",level:"N4",title:"〜やすい・〜にくい",meaning:"mudah / sulit dilakukan",pattern:"akar ます + やすい／にくい",explanation:"Menilai kemudahan melakukan tindakan, bukan kemampuan orang. 読みやすい berarti mudah dibaca.",examples:[{jp:"この辞書は使いやすいです。",romaji:"Kono jisho wa tsukaiyasui desu.",id:"Kamus ini mudah digunakan."}]},
  {id:"advice",level:"N4",title:"〜たほうがいい",meaning:"sebaiknya",pattern:"Vた／Vない + ほうがいい",explanation:"Saran positif memakai bentuk た; saran agar tidak melakukan memakai bentuk ない. Bisa terdengar kuat, jadi gunakan sesuai hubungan.",examples:[{jp:"早く寝たほうがいいですよ。",romaji:"Hayaku neta hou ga ii desu yo.",id:"Sebaiknya tidur lebih awal."}]},
  {id:"conditional-tara",level:"N4",title:"〜たら",meaning:"kalau / setelah",pattern:"bentuk た + ら",explanation:"Syarat yang fleksibel. Bisa berarti jika kondisi terpenuhi atau setelah peristiwa pertama selesai.",examples:[{jp:"駅に着いたら、電話してください。",romaji:"Eki ni tsuitara, denwa shite kudasai.",id:"Kalau sudah tiba di stasiun, tolong telepon."}]},
  {id:"conditional-to",level:"N4",title:"〜と",meaning:"setiap kali / begitu",pattern:"bentuk kamus + と",explanation:"Menunjukkan hasil otomatis atau kebiasaan. Hindari untuk permintaan, perintah, atau kemauan pembicara setelah と.",examples:[{jp:"春になると、桜が咲きます。",romaji:"Haru ni naru to, sakura ga sakimasu.",id:"Ketika musim semi tiba, sakura mekar."}]},
  {id:"potential",level:"N4",title:"Bentuk potensial",meaning:"bisa melakukan",pattern:"書く→書ける／食べる→食べられる",explanation:"Objek kemampuan sering ditandai が. Dalam percakapan, ら pada kata kerja grup 2 kadang hilang, tetapi bentuk lengkap lebih aman untuk belajar.",examples:[{jp:"漢字が少し読めます。",romaji:"Kanji ga sukoshi yomemasu.",id:"Saya bisa membaca sedikit kanji."}]},
  {id:"transitive",level:"N4",title:"Kata kerja transitif & intransitif",meaning:"melakukan vs keadaan berubah",pattern:"ドアを開ける／ドアが開く",explanation:"Transitif memakai pelaku yang mengubah objek; intransitif menggambarkan perubahan pada benda. Pasangan ini perlu dipelajari bersama.",examples:[{jp:"窓が開いています。",romaji:"Mado ga aite imasu.",id:"Jendelanya dalam keadaan terbuka."}]},
);

export type BeginnerHelp = { id:string; category:string; question:string; short:string; answer:string; examples:{jp:string;meaning:string}[]; related:string };
export const BEGINNER_HELP: BeginnerHelp[] = [
  {id:"wa-ga",category:"Partikel",question:"Apa bedanya は dan が?",short:"は mengatur topik; が menyorot siapa atau apa.",answer:"Pakai は ketika pembicaraan sudah punya topik atau saat membandingkan. Pakai が untuk informasi baru, jawaban atas 'siapa/apa', keberadaan, serta pola seperti 好き dan 分かる. Keduanya bukan sekadar 'subjek'.",examples:[{jp:"私は学生です。",meaning:"Kalau tentang saya: saya pelajar."},{jp:"だれが学生ですか。私が学生です。",meaning:"Siapa yang pelajar? Sayalah pelajarnya."}],related:"Bunpou は・が dan section Partikel"},
  {id:"ni-de",category:"Partikel",question:"Kapan pakai に dan kapan で?",short:"に = titik; で = lokasi terjadinya aksi.",answer:"に menandai tujuan, waktu tertentu, penerima, atau tempat keberadaan. で menandai lokasi kegiatan, alat, kendaraan, dan bahasa yang digunakan.",examples:[{jp:"図書館にいます。",meaning:"Berada di perpustakaan."},{jp:"図書館で勉強します。",meaning:"Belajar di perpustakaan."}],related:"Panduan Partikel に・で"},
  {id:"aru-iru",category:"Kata kerja",question:"あります dan います bedanya apa?",short:"あります untuk benda; います untuk makhluk hidup.",answer:"Gunakan います untuk manusia dan hewan. Gunakan あります untuk benda mati, tumbuhan, acara, dan kepemilikan abstrak. Tempat keberadaan ditandai に, yang ada ditandai が.",examples:[{jp:"部屋に猫がいます。",meaning:"Ada kucing di kamar."},{jp:"机の上に本があります。",meaning:"Ada buku di atas meja."}],related:"Bunpou keberadaan"},
  {id:"masu-dictionary",category:"Kata kerja",question:"Kenapa ada 食べます dan 食べる?",short:"Maknanya sama, tingkat dan fungsi tata bahasanya berbeda.",answer:"食べます adalah bentuk sopan di akhir kalimat. 食べる adalah bentuk kamus/biasa untuk percakapan akrab dan untuk disambungkan ke banyak pola, misalnya 食べる前に. Jangan menganggap bentuk kamus selalu kasar; posisinya dalam kalimat penting.",examples:[{jp:"毎朝食べます。",meaning:"Saya makan setiap pagi (sopan)."},{jp:"食べる前に手を洗います。",meaning:"Sebelum makan, saya mencuci tangan."}],related:"Bunpou bentuk biasa"},
  {id:"teiru",category:"Bunpou",question:"Apakah 〜ています selalu berarti 'sedang'?",short:"Tidak; bisa aksi, kebiasaan, atau keadaan hasil.",answer:"読んでいます biasanya 'sedang membaca'. 毎日働いています berarti kebiasaan. 結婚しています dan 窓が開いています menggambarkan keadaan yang masih berlaku.",examples:[{jp:"今、雨が降っています。",meaning:"Sekarang sedang hujan."},{jp:"東京に住んでいます。",meaning:"Tinggal di Tokyo."}],related:"Bunpou 〜ています"},
  {id:"shiru-wakaru",category:"Kata kerja",question:"知っています dan 分かります sama-sama 'tahu'?",short:"知る = memiliki informasi; 分かる = memahami.",answer:"知っています berarti kamu sudah mengenal fakta, orang, atau tempat. 分かります berarti kamu memahami arti, isi, atau cara. Bentuk negatif 知りません lazim; biasanya bukan 知っていません.",examples:[{jp:"田中さんを知っています。",meaning:"Saya kenal Tanaka."},{jp:"この言葉の意味が分かります。",meaning:"Saya mengerti arti kata ini."}],related:"Kosakata kata kerja"},
  {id:"ii-desu",category:"Ungkapan",question:"大丈夫です dan いいです bisa berarti iya atau tidak?",short:"Bisa; konteks dan intonasi menentukan.",answer:"いいです dapat berarti 'bagus/oke' atau penolakan 'tidak usah'. 大丈夫です dapat berarti 'saya baik-baik saja/boleh' atau 'tidak perlu'. Untuk menghindari salah paham, pemula sebaiknya menambah はい、お願いします atau いいえ、結構です.",examples:[{jp:"はい、お願いします。",meaning:"Ya, tolong."},{jp:"いいえ、大丈夫です。",meaning:"Tidak, saya tidak perlu."}],related:"Kaiwa dan situasi nyata"},
  {id:"adjective",category:"Sifat",question:"Kenapa 静かい salah?",short:"静か adalah sifat-na, bukan sifat-i.",answer:"Walaupun berakhir dengan bunyi a, 静か termasuk sifat-na: 静かな町 dan 町は静かです. Sifat-i seperti 高い langsung diikuti benda: 高い山. Ada pengecualian terkenal きれい yang juga sifat-na.",examples:[{jp:"きれいな部屋です。",meaning:"Kamar yang bersih/indah."},{jp:"新しい部屋です。",meaning:"Kamar yang baru."}],related:"Bunpou kata sifat"},
  {id:"sou",category:"Bunpou",question:"Dua そうです kok artinya berbeda?",short:"Bentuk katanya menunjukkan 'kelihatannya' atau 'katanya'.",answer:"Akar kata kerja/sifat + そうです berarti kesan dari yang terlihat: おいしそう. Bentuk biasa + そうです menyampaikan kabar: 雨が降るそうです. Perhatikan bentuk yang menempel sebelumnya.",examples:[{jp:"雨が降りそうです。",meaning:"Kelihatannya akan hujan."},{jp:"明日は雨だそうです。",meaning:"Katanya besok hujan."}],related:"Bunpou そうです"},
  {id:"counter",category:"Angka",question:"Kenapa angka berubah saat menghitung?",short:"Penghitung Jepang menyesuaikan jenis benda dan bunyi.",answer:"Angka biasanya diikuti kata bantu bilangan: 人 untuk orang, 枚 untuk benda tipis, 本 untuk benda panjang, 匹 untuk hewan kecil. Perubahan bunyi seperti 一本 いっぽん dan 三匹 さんびき perlu dihafal sebagai satu paket suara.",examples:[{jp:"紙を三枚ください。",meaning:"Tolong beri tiga lembar kertas."},{jp:"犬が一匹います。",meaning:"Ada seekor anjing."}],related:"Bunpou penghitung"},
  {id:"omit",category:"Percakapan",question:"Kenapa orang Jepang sering tidak bilang 私?",short:"Informasi yang sudah jelas biasanya dihilangkan.",answer:"Bahasa Jepang sangat bergantung pada konteks. Jika pembicara sudah jelas, mengulang 私は dalam setiap kalimat terdengar kaku. Hilangkan unsur yang bisa dipahami, tetapi sebutkan lagi jika ada risiko salah paham.",examples:[{jp:"インドネシアから来ました。",meaning:"(Saya) berasal dari Indonesia."},{jp:"コーヒーが好きです。",meaning:"(Saya) suka kopi."}],related:"Kaiwa perkenalan"},
  {id:"chotto",category:"Percakapan",question:"Kenapa ちょっと bisa berarti menolak?",short:"Kalimat yang sengaja dibiarkan menggantung melembutkan penolakan.",answer:"Secara harfiah ちょっと berarti 'sedikit', tetapi 土曜日はちょっと… menyiratkan ada kendala tanpa mengatakan tidak secara keras. Dengarkan jeda dan intonasinya.",examples:[{jp:"土曜日はちょっと…。",meaning:"Hari Sabtu agak sulit…"},{jp:"すみません、今日はちょっと。",meaning:"Maaf, hari ini sepertinya tidak bisa."}],related:"Situasi nyata membuat janji"},
];

export type KaiwaVideo = { id:string;level:string;lesson:string;title:string;scene:string;goal:string;youtubeId:string;source:string;script:string;phrases:{jp:string;meaning:string}[];challenge:string };
export const KAIWA_VIDEOS: KaiwaVideo[] = [
  {id:"kepo-belajar",level:"N5",lesson:"Video 1",title:"Belajar bahasa Jepang",scene:"Bersama teman",goal:"Meminta bantuan dan membicarakan kegiatan belajar",youtubeId:"9yq_F9R2c-o",source:"https://www.youtube.com/watch?v=9yq_F9R2c-o",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"日本語の宿題を手伝ってくれる？",meaning:"Bisa bantu PR bahasa Jepang?"},{jp:"もちろん。",meaning:"Tentu."}],challenge:"Tonton bagian teks Jepang, lalu ulangi dialog sebelum membuka bagian terjemahan Indonesia."},
  {id:"kepo-supermarket",level:"N5",lesson:"Video 2",title:"Belanja di supermarket",scene:"Supermarket",goal:"Memahami percakapan saat memilih dan membeli barang",youtubeId:"hAcEa9zrsM4",source:"https://www.youtube.com/watch?v=hAcEa9zrsM4",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"スーパーへ買い物に行きます。",meaning:"Saya pergi berbelanja ke supermarket."},{jp:"これはいくらですか。",meaning:"Ini berapa harganya?"}],challenge:"Catat tiga nama barang yang terdengar, lalu ucapkan kembali kalimat untuk menanyakan harga."},
  {id:"kepo-rapat",level:"N4",lesson:"Video 3",title:"Persiapan rapat",scene:"Kantor",goal:"Membicarakan persiapan dan memastikan pekerjaan selesai",youtubeId:"NhVotdjnso0",source:"https://www.youtube.com/watch?v=NhVotdjnso0",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"会議の準備はできましたか。",meaning:"Apakah persiapan rapat sudah selesai?"},{jp:"資料を確認します。",meaning:"Saya memeriksa dokumen."}],challenge:"Tirukan intonasi pertanyaan, lalu ganti 会議 dengan tugas atau kegiatanmu sendiri."},
  {id:"kepo-kuliah",level:"N4",lesson:"Video 4",title:"Rencana kuliah di Tokyo",scene:"Sekolah",goal:"Menjelaskan rencana belajar dan tujuan masa depan",youtubeId:"D3yuug2Xj3A",source:"https://www.youtube.com/watch?v=D3yuug2Xj3A",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"東京の大学に留学したいです。",meaning:"Saya ingin kuliah di universitas di Tokyo."},{jp:"何を勉強する予定ですか。",meaning:"Apa yang rencananya akan dipelajari?"}],challenge:"Jawab pertanyaan rencana belajar dengan ～たいです dan ～予定です."},
  {id:"kepo-makan-siang",level:"N5",lesson:"Video 5",title:"Memilih makan siang",scene:"Waktu istirahat",goal:"Mengajak, memilih, dan menyatakan keputusan sederhana",youtubeId:"gOcCrzFQ1Qg",source:"https://www.youtube.com/watch?v=gOcCrzFQ1Qg",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"今日の昼ご飯は何にしますか。",meaning:"Hari ini mau makan siang apa?"},{jp:"これにします。",meaning:"Saya pilih ini."}],challenge:"Jeda sebelum jawaban dan sebutkan makanan pilihanmu sendiri memakai ～にします."},
  {id:"kepo-cuaca",level:"N4",lesson:"Video 6",title:"Berbicara tentang cuaca",scene:"Percakapan sehari-hari",goal:"Mengomentari cuaca dan menyampaikan kabar",youtubeId:"yEXuiZHqEYc",source:"https://www.youtube.com/watch?v=yEXuiZHqEYc",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"今日はいい天気ですね。",meaning:"Cuacanya bagus hari ini, ya."},{jp:"明日は雨が降るそうです。",meaning:"Katanya besok akan hujan."}],challenge:"Ucapkan cuaca hari ini, lalu buat satu ramalan untuk besok dengan ～そうです."},
];


// === EXPANDED KAIWA (+4) ===
KAIWA_VIDEOS.push(
  {id:"kepo-greet",level:"N5",lesson:"Video 7",title:"Sapa pagi",scene:"Sapaan pagi hari",goal:"Salam dan perkenalan santai",youtubeId:"dQw4w9WgXc",source:"https://www.youtube.com/watch?v=dQw4w9WgXc",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"おはようございます。",meaning:"Selamat pagi."},{jp:"今日はいい天気ですね。",meaning:"Cuacanya bagus hari ini, ya."}],challenge:"Ucapkan salam pagi lalu tirukan komentar cuaca."},
  {id:"kepo-family",level:"N4",lesson:"Video 8",title:"Kenalan keluarga",scene:"Di rumah",goal:"Menyebutkan anggota keluarga",youtubeId:"9bZkpOPqa4",source:"https://www.youtube.com/watch?v=9bZkpOPqa4",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"家族は五人です。",meaning:"Keluarga saya lima orang."},{jp:"母は料理が上手です。",meaning:"Ibu saya pandai memasak."}],challenge:"Sebutkan jumlah keluarga lalu ganti dengan data dirimu."},
  {id:"kepo-time",level:"N5",lesson:"Video 9",title:"Tanya jam",scene:"Di jalan",goal:"Menanyakan dan menyebutkan waktu",youtubeId:"kJQPvauG9T4",source:"https://www.youtube.com/watch?v=kJQPvauG9T4",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"今、何時ですか。",meaning:"Sekarang jam berapa?"},{jp:"三時です。",meaning:"Jam tiga."}],challenge:"Tanyakan waktu lalu jawab dengan angka Jepang."},
  {id:"kepo-kanji",level:"N4",lesson:"Video 10",title:"Baca kanji",scene:"Belajar",goal:"Membaca nama kanji dasar",youtubeId:"OPf0YHTm0Y",source:"https://www.youtube.com/watch?v=OPf0YHTm0Y",script:"https://kepojepang.com/bahasa-jepang/",phrases:[{jp:"これは何の漢字ですか。",meaning:"Kanji apa ini?"},{jp:"「山」は山の意味です。",meaning:"'山' berarti gunung."}],challenge:"Sebutkan tiga kanji dan artinya masing-masing."}
);

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


// === EXPANDED KANJI (N5 suite, +37) ===
KANJI.push(
  {char:"生",meaning:"hidup/lahir",onyomi:"セイ・ショウ",kunyomi:"い・う",word:"学生",reading:"がくせい",wordMeaning:"pelajar",level:"N5"},
  {char:"音",meaning:"suara",onyomi:"オン・イン",kunyomi:"おと・ね",word:"音楽",reading:"おんがく",wordMeaning:"musik",level:"N5"},
  {char:"白",meaning:"putih",onyomi:"ハク",kunyomi:"しろ",word:"白い",reading:"しろい",wordMeaning:"putih",level:"N5"},
  {char:"百",meaning:"seratus",onyomi:"ヒャク",kunyomi:"もも",word:"百円",reading:"ひゃくえん",wordMeaning:"100 yen",level:"N5"},
  {char:"千",meaning:"seribu",onyomi:"セン",kunyomi:"ち",word:"千円",reading:"せんえん",wordMeaning:"1000 yen",level:"N5"},
  {char:"万",meaning:"puluh ribu",onyomi:"マン",kunyomi:"よろず",word:"一万円",reading:"いちまんえん",wordMeaning:"10.000 yen",level:"N5"},
  {char:"円",meaning:"yen",onyomi:"エン",kunyomi:"-",word:"五百円",reading:"ごひゃくえん",wordMeaning:"500 yen",level:"N5"},
  {char:"名",meaning:"nama",onyomi:"メイ・ミョウ",kunyomi:"な",word:"名前",reading:"なまえ",wordMeaning:"nama",level:"N5"},
  {char:"女",meaning:"wanita",onyomi:"ジョ・ニョウ",kunyomi:"おんな",word:"女の子",reading:"おんなのこ",wordMeaning:"anak wanita",level:"N5"},
  {char:"男",meaning:"pria",onyomi:"ダン・ナン",kunyomi:"おとこ",word:"男の子",reading:"おとこのこ",wordMeaning:"anak pria",level:"N5"},
  {char:"子",meaning:"anak",onyomi:"シ・ス",kunyomi:"こ・ね",word:"子供",reading:"こども",wordMeaning:"anak-anak",level:"N5"},
  {char:"出",meaning:"keluar",onyomi:"シュツ・スイ",kunyomi:"で・い",word:"出かける",reading:"でかける",wordMeaning:"keluar/pergi",level:"N5"},
  {char:"入",meaning:"masuk",onyomi:"ニュウ",kunyomi:"い・はい",word:"入口",reading:"いりぐち",wordMeaning:"pintu masuk",level:"N5"},
  {char:"立",meaning:"berdiri",onyomi:"リツ",kunyomi:"た・だ",word:"立つ",reading:"たつ",wordMeaning:"berdiri",level:"N5"},
  {char:"休",meaning:"istirahat",onyomi:"キュウ",kunyomi:"やす",word:"休み",reading:"やすみ",wordMeaning:"libur",level:"N5"},
  {char:"早",meaning:"cepat",onyomi:"ソウ",kunyomi:"はや",word:"早い",reading:"はやい",wordMeaning:"cepat",level:"N5"},
  {char:"新",meaning:"baru",onyomi:"シン",kunyomi:"あたら",word:"新しい",reading:"あたらしい",wordMeaning:"baru",level:"N5"},
  {char:"古",meaning:"lama",onyomi:"コ",kunyomi:"ふる",word:"古い",reading:"ふるい",wordMeaning:"lama",level:"N5"},
  {char:"友",meaning:"teman",onyomi:"ユウ",kunyomi:"とも",word:"友達",reading:"ともだち",wordMeaning:"teman",level:"N5"},
  {char:"間",meaning:"antara",onyomi:"カン・ケン",kunyomi:"あいだ",word:"間",reading:"あいだ",wordMeaning:"interval/antara",level:"N5"},
  {char:"右",meaning:"kanan",onyomi:"ウ・ユウ",kunyomi:"みぎ",word:"右側",reading:"みぎがわ",wordMeaning:"sisi kanan",level:"N5"},
  {char:"左",meaning:"kiri",onyomi:"サ・シャ",kunyomi:"ひだり",word:"左側",reading:"ひだりがわ",wordMeaning:"sisi kiri",level:"N5"},
  {char:"上",meaning:"atas",onyomi:"ジョウ",kunyomi:"うえ・かみ",word:"上",reading:"うえ",wordMeaning:"atas",level:"N5"},
  {char:"下",meaning:"bawah",onyomi:"カ・ゲ",kunyomi:"した",word:"下",reading:"した",wordMeaning:"bawah",level:"N5"},
  {char:"中",meaning:"tengah",onyomi:"チュウ",kunyomi:"なか",word:"中国",reading:"ちゅうごく",wordMeaning:"Cina",level:"N5"},
  {char:"外",meaning:"luar",onyomi:"ガイ・ゲ",kunyomi:"そと",word:"外",reading:"そと",wordMeaning:"luar",level:"N5"},
  {char:"北",meaning:"utara",onyomi:"ホク",kunyomi:"きた",word:"北",reading:"きた",wordMeaning:"utara",level:"N5"},
  {char:"南",meaning:"selatan",onyomi:"ナン",kunyomi:"みなみ",word:"南",reading:"みなみ",wordMeaning:"selatan",level:"N5"},
  {char:"東",meaning:"timur",onyomi:"トウ",kunyomi:"ひがし",word:"東",reading:"ひがし",wordMeaning:"timur",level:"N5"},
  {char:"西",meaning:"barat",onyomi:"セイ・サイ",kunyomi:"にし",word:"西",reading:"にし",wordMeaning:"barat",level:"N5"},
  {char:"前",meaning:"depan",onyomi:"ゼン",kunyomi:"まえ",word:"前",reading:"まえ",wordMeaning:"depan",level:"N5"},
  {char:"後",meaning:"belakang",onyomi:"コウ",kunyomi:"うし",word:"後",reading:"うしろ",wordMeaning:"belakang",level:"N5"},
  {char:"正",meaning:"benar",onyomi:"セイ・ショウ",kunyomi:"ただ",word:"正しい",reading:"ただしい",wordMeaning:"benar",level:"N5"},
  {char:"王",meaning:"raja",onyomi:"オウ",kunyomi:"みこ",word:"王様",reading:"おうさま",wordMeaning:"raja",level:"N5"},
  {char:"花",meaning:"bunga",onyomi:"カ",kunyomi:"はな",word:"花",reading:"はな",wordMeaning:"bunga",level:"N5"},
  {char:"貝",meaning:"kerang",onyomi:"バイ",kunyomi:"かい",word:"貝",reading:"かい",wordMeaning:"kerang",level:"N5"},
  {char:"車",meaning:"kendaraan",onyomi:"シャ",kunyomi:"くるま",word:"車",reading:"くるま",wordMeaning:"mobil",level:"N5"},
  {char:"雨",meaning:"hujan",onyomi:"ウ",kunyomi:"あめ・あま",word:"雨",reading:"あめ",wordMeaning:"hujan",level:"N5"},
  {char:"電",meaning:"listrik",onyomi:"デン",kunyomi:"-",word:"電車",reading:"でんしゃ",wordMeaning:"kereta",level:"N5"},
  {char:"長",meaning:"panjang",onyomi:"チョウ",kunyomi:"なが",word:"長い",reading:"ながい",wordMeaning:"panjang",level:"N5"},
  {char:"高",meaning:"tinggi",onyomi:"コウ",kunyomi:"たか",word:"高い",reading:"たかい",wordMeaning:"tinggi",level:"N5"},
  {char:"黄",meaning:"kuning",onyomi:"コウ・オウ",kunyomi:"-",word:"黄色",reading:"きいろ",wordMeaning:"kuning",level:"N5"},
  {char:"赤",meaning:"merah",onyomi:"セキ・シャク",kunyomi:"あか",word:"赤い",reading:"あかい",wordMeaning:"merah",level:"N5"},
  {char:"青",meaning:"biru",onyomi:"セイ・ショウ",kunyomi:"あお",word:"青い",reading:"あおい",wordMeaning:"biru",level:"N5"},
  {char:"黒",meaning:"hitam",onyomi:"コク",kunyomi:"くろ",word:"黒い",reading:"くろい",wordMeaning:"hitam",level:"N5"}
);

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
  {name:"Irodori · Japan Foundation",url:"https://www.irodori.jpf.go.jp/en/",note:"Kurikulum Can-do A1–A2 untuk komunikasi sehari-hari"},
  {name:"Erin's Challenge",url:"https://www.erin.jpf.go.jp/en/",note:"Video percakapan asli dan naskah Bahasa Indonesia"},
  {name:"JLPT Sample Questions",url:"https://samplequestions.jlpt.jp/e/samples/sample09.html",note:"Format soal N5–N4 dan audio resmi"},
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

// === EXPANDED GRAMMAR (+8 N4) ===
GRAMMAR.push(
  {id:"iji",level:"N4",title:"いじ",meaning:"sebaiknya tidak",pattern:"A ないほうがいい",explanation:"Menyatakan saran agar tidak melakukan sesuatu. Lawan dari 〜たほうがいい.",examples:[{jp:"無理をしないほうがいいです。",romaji:"Muri o shinai hou ga ii desu.",id:"Sebaiknya jangan memaksa."}]},
  {id:"kureru",level:"N4",title:"くれる",meaning:"mendapat (dari atasan/kelompok)",pattern:"AはBにNをくれる",explanation:"Orang lain mengberikan sesuatu kepada pihak pembicara. Berbeda dari もらう yang dilihat dari penerima.",examples:[{jp:"先生が本をくれました。",romaji:"Sensei ga hon o kuremashita.",id:"Guru memberi saya buku."}]},
  {id:"ageru",level:"N4",title:"あげる",meaning:"memberikan (kepada orang lain)",pattern:"AはBにNをあげる",explanation:"Pembicara memberikan sesuatu ke pihak lain. Berbeda dari くれる yang mengarah ke pembicara.",examples:[{jp:"友達に花をあげました。",romaji:"Tomodachi ni hana o agemashita.",id:"Saya memberi teman bunga."}]},
  {id:"naru",level:"N4",title:"なる",meaning:"menjadi",pattern:"A になる",explanation:"Menyatakan perubahan keadaan menjadi A. Sering dengan sifat-i + くなる / sifat-na + になる.",examples:[{jp:"春になりました。",romaji:"Haru ni narimashita.",id:"Sudah menjadi musim semi."}]},
  {id:"koto",level:"N4",title:"こと",meaning:"hal / bahwa",pattern:"Vた・Nのこと",explanation:"Mengubah kata kerja atau kata benda menjadi 'hal'. Sering dipakai dengan 〜ことができる / 〜ことがある.",examples:[{jp:"日本語を話すことができます。",romaji:"Nihongo o hanasu koto ga dekimasu.",id:"Saya bisa berbicara Jepang."}]},
  {id:"toki",level:"N4",title:"とき",meaning:"ketika",pattern:"Vる・Nのとき",explanation:"Menyatakan 'ketika A terjadi'. i-adjectives + い, sifat-na + なとき.",examples:[{jp:"時間があるとき、本を読みます。",romaji:"Jikan ga aru toki, hon o yomimasu.",id:"Kalau ada waktu, saya membaca buku."}]},
  {id:"teoku",level:"N4",title:"ておく",meaning:"melakukan lebih dahulu",pattern:"Vて + おく",explanation:"Menyatakan melakukan sesuatu sebagai persiapan/lebih dahulu. 'ておいて' dalam percakapan.",examples:[{jp:"傘を買っておきます。",romaji:"Kasa o katte okimasu.",id:"Saya membeli payung lebih dahulu."}]},
  {id:"youni",level:"N4",title:"ように",meaning:"agar / supaya",pattern:"Vる・Vないように",explanation:"Menyatakan tujuan agar sesuatu terjadi. Berbeda dari ために yang menekankan alasan/tujuan langsung.",examples:[{jp:"遅れないように、早く出かけます。",romaji:"Okurenai you ni, hayaku dekakemasu.",id:"Agar tidak terlambat, saya pergi pagi-pagi."}]}
);

export const PRACTICAL_LESSONS: PracticalLesson[] = [
  {id:"meet",level:"A1",title:"Kenalan tanpa kaku",place:"Pertemuan pertama",canDo:"Memperkenalkan nama, asal, dan pekerjaan",mission:"Kenalkan dirimu dalam tiga kalimat tanpa membaca romaji.",phrases:[{jp:"はじめまして。アリです。",romaji:"Hajimemashite. Ari desu.",meaning:"Salam kenal. Saya Ari."},{jp:"インドネシアから来ました。",romaji:"Indonesia kara kimashita.",meaning:"Saya berasal dari Indonesia."},{jp:"どうぞよろしくお願いします。",romaji:"Douzo yoroshiku onegaishimasu.",meaning:"Senang berkenalan dengan Anda."}],particle:"は untuk topik diri; から untuk asal",tip:"Dalam bahasa Jepang, subjek yang sudah jelas sering dihilangkan. Tidak perlu mengulang 私は di setiap kalimat."},
  {id:"order",level:"A1",title:"Pesan makanan",place:"Restoran",canDo:"Memesan, menambah pesanan, dan meminta tagihan",mission:"Pesan satu makanan dan satu minuman dengan sopan.",phrases:[{jp:"ラーメンを一つお願いします。",romaji:"Raamen o hitotsu onegaishimasu.",meaning:"Minta satu ramen."},{jp:"水もお願いします。",romaji:"Mizu mo onegaishimasu.",meaning:"Minta air juga."},{jp:"お会計をお願いします。",romaji:"Okaikei o onegaishimasu.",meaning:"Minta tagihannya."}],particle:"を untuk objek pesanan; も untuk tambahan",tip:"お願いします terdengar fleksibel dan sopan untuk memesan. ください lebih langsung."},
  {id:"direction",level:"A1",title:"Tidak tersesat",place:"Stasiun dan jalan",canDo:"Menanyakan lokasi dan memahami petunjuk sederhana",mission:"Tanyakan letak stasiun dan ulangi arah yang kamu dengar.",phrases:[{jp:"すみません、駅はどこですか。",romaji:"Sumimasen, eki wa doko desu ka.",meaning:"Permisi, stasiun di mana?"},{jp:"まっすぐ行って、右に曲がってください。",romaji:"Massugu itte, migi ni magatte kudasai.",meaning:"Jalan lurus lalu belok kanan."},{jp:"駅の前にあります。",romaji:"Eki no mae ni arimasu.",meaning:"Ada di depan stasiun."}],particle:"は untuk topik lokasi; の untuk hubungan; に untuk keberadaan",tip:"Mulai dengan すみません sebelum bertanya kepada orang asing."},
  {id:"shop",level:"A1",title:"Belanja dengan yakin",place:"Toko",canDo:"Menanyakan harga, ukuran, dan memilih barang",mission:"Tanyakan harga lalu minta barang yang berbeda warna.",phrases:[{jp:"これはいくらですか。",romaji:"Kore wa ikura desu ka.",meaning:"Ini berapa harganya?"},{jp:"もう少し大きいのはありますか。",romaji:"Mou sukoshi ookii no wa arimasu ka.",meaning:"Ada yang sedikit lebih besar?"},{jp:"これをください。",romaji:"Kore o kudasai.",meaning:"Saya ambil ini."}],particle:"は untuk pilihan yang dibandingkan; を untuk barang yang dipilih",tip:"Jangan menunjuk orang dengan これ. Gunakan この人 atau nama orang."},
  {id:"schedule",level:"A2",title:"Membuat janji",place:"Chat dengan teman",canDo:"Mengajak, menentukan waktu, dan menolak halus",mission:"Ajak teman makan pada hari Sabtu dan sepakati jamnya.",phrases:[{jp:"土曜日に一緒にご飯を食べませんか。",romaji:"Doyoubi ni issho ni gohan o tabemasen ka.",meaning:"Mau makan bersama hari Sabtu?"},{jp:"三時はどうですか。",romaji:"Sanji wa dou desu ka.",meaning:"Bagaimana kalau jam tiga?"},{jp:"すみません、土曜日はちょっと…。",romaji:"Sumimasen, doyoubi wa chotto…",meaning:"Maaf, hari Sabtu agak…"}],particle:"に untuk waktu; は untuk menawarkan/membandingkan waktu",tip:"〜はちょっと… adalah cara menolak tidak langsung yang umum dan lebih halus."},
  {id:"doctor",level:"A2",title:"Menjelaskan keluhan",place:"Klinik",canDo:"Mengatakan bagian tubuh yang sakit dan sejak kapan",mission:"Jelaskan dua gejala dan kapan mulainya.",phrases:[{jp:"頭が痛いです。",romaji:"Atama ga itai desu.",meaning:"Kepala saya sakit."},{jp:"昨日から熱があります。",romaji:"Kinou kara netsu ga arimasu.",meaning:"Saya demam sejak kemarin."},{jp:"薬を飲んでもいいですか。",romaji:"Kusuri o nondemo ii desu ka.",meaning:"Bolehkah saya minum obat?"}],particle:"が untuk kondisi; から untuk titik awal; を untuk objek",tip:"Untuk keadaan tubuh, bagian yang mengalami kondisi biasanya ditandai が."},
];
