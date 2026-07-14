export type NhkLesson = {number:number;level:"N5"|"N4";phase:string;goal:string;page:string;audio:string;pdf:string;image:string};

const PHASES = [
  {until:8,level:"N5" as const,phase:"Fondasi percakapan",goal:"Salam, perkenalan, demonstratif, tempat, kepemilikan, waktu, dan pembilang."},
  {until:16,level:"N5" as const,phase:"Aksi sehari-hari",goal:"Kata kerja dasar, ます, bentuk kamus, ajakan, urutan, arah, dan bentuk て."},
  {until:24,level:"N5" as const,phase:"Deskripsi & pengalaman",goal:"Kata sifat, lampau, bentuk ない, kemampuan, alasan, dan pengalaman sederhana."},
  {until:32,level:"N4" as const,phase:"Menghubungkan gagasan",goal:"Bentuk biasa, penjelasan んです, perbandingan, syarat, angka, dan nuansa sosial."},
  {until:40,level:"N4" as const,phase:"Situasi nyata",goal:"Rencana, kewajiban, perubahan keadaan, kesehatan, permintaan, dan laporan kejadian."},
  {until:48,level:"N4" as const,phase:"Komunikasi lebih natural",goal:"Kemungkinan, urutan kompleks, kehormatan, pendapat, refleksi, dan strategi komunikasi."},
];

export const NHK_LESSONS: NhkLesson[] = Array.from({length:48},(_,index)=>{
  const number=index+1; const phase=PHASES.find((item)=>number<=item.until)!;
  return {number,level:phase.level,phase:phase.phase,goal:phase.goal,
    page:`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/${number}.html`,
    audio:`https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/mp3/${String(number).padStart(2,"0")}-id-le_01.mp3`,
    pdf:`https://www3.nhk.or.jp/nhkworld/lesson/update/pdf/le${number}_id_t.pdf`,
    image:`https://www3.nhk.or.jp/nhkworld/lesson/update/jpg/le${number}_mp_01.jpg`};
});

export const NHK_RESOURCES = [
  {icon:"話",title:"48 drama audio",description:"Dialog 10 menit, naskah Indonesia, grammar, budaya, dan latihan mendengar.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/learn/list/"},
  {icon:"先",title:"Sensei Oshiete",description:"Penjelasan singkat untuk grammar, pilihan kata, pelafalan, dan kebiasaan bahasa.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/teacher/"},
  {icon:"音",title:"Kata tiruan bunyi",description:"Onomatope untuk suara, gerakan, keadaan, dan perasaan yang sering muncul dalam percakapan.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/soundwords/"},
  {icon:"問",title:"Pertanyaan populer",description:"Jawaban untuk kebingungan nyata seperti aksara, kore–kono, katakana, dan telepon.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/questions/"},
  {icon:"試",title:"Tentukan pilihan",description:"Review dua pilihan untuk memeriksa ungkapan dan grammar bersama tokoh cerita.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/special/challenge/"},
  {icon:"言",title:"Kosakata & kuis",description:"Dengarkan kata atau frasa lalu pilih arti yang sesuai.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/vocabulary/"},
  {icon:"本",title:"Buku teks gratis",description:"Unduh buku dan materi resmi berbahasa Indonesia untuk belajar tanpa koneksi.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/download/"},
  {icon:"旅",title:"Bahasa Jepang mudah untuk wisata",description:"Frasa praktis untuk meminta bantuan dan menghadapi situasi perjalanan.",url:"https://www3.nhk.or.jp/nhkworld/lesson/indonesian/easytravel_j/"},
];
