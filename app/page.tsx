"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BEGINNER_HELP, CONVERSATIONS, GRAMMAR, KAIWA_VIDEOS, KANJI, LISTENING, PARTICLES, PRACTICAL_LESSONS, ROADMAP, SOURCES, VOCABULARY } from "./learning-data";
import { JLPT_DRILLS, READING_LESSONS, SPEAKING_PROMPTS } from "./n4-data";
import { PARTICLE_GUIDES, PARTICLE_SOURCES } from "./particle-guides";
import { NHK_LESSONS, NHK_RESOURCES } from "./nhk-data";

type Kana = { char: string; romaji: string };
type Script = "hiragana" | "katakana";
type KanaSet = "basic" | "voiced" | "contracted" | "special";
type View = "kurikulum" | "belajar" | "latihan" | "kuis" | "kuisgambar" | "kosakata" | "tatabahasa" | "partikel" | "kanji" | "mendengar" | "percakapan" | "situasi" | "tanya" | "membaca" | "review" | "ujian" | "studio" | "nhk";
type LexiconItem = {id:string;word:string;reading:string;meaning:string;level:"N5"|"N4"};
type ReviewStat = {due:number;interval:number;ease:number;right:number;wrong:number};

type ComicScene = { id: string; word: string; romaji: string; meaning: string; image: string; alt: string; hint: string };

const COMIC_SCENES: ComicScene[] = [
  {id:"inu",word:"いぬ",romaji:"inu",meaning:"anjing",image:"/comic/inu.webp",alt:"Anjing Shiba Inu di rumah",hint:"Makhluk ini sering menjadi hewan peliharaan."},
  {id:"kasa",word:"かさ",romaji:"kasa",meaning:"payung",image:"/comic/kasa.webp",alt:"Payung Jepang di tengah hujan",hint:"Benda ini dipakai saat hujan."},
  {id:"sakana",word:"さかな",romaji:"sakana",meaning:"ikan",image:"/comic/sakana.webp",alt:"Seekor ikan berenang di air",hint:"Makhluk ini hidup dan berenang di air."},
  {id:"neko",word:"ねこ",romaji:"neko",meaning:"kucing",image:"/comic/neko.webp",alt:"Kucing belang duduk di kamar Jepang",hint:"Hewan ini suka mengeong."},
  {id:"yama",word:"やま",romaji:"yama",meaning:"gunung",image:"/comic/yama.webp",alt:"Gunung besar di balik perbukitan",hint:"Bentang alam ini menjulang tinggi."},
  {id:"tsuki",word:"つき",romaji:"tsuki",meaning:"bulan",image:"/comic/tsuki.webp",alt:"Bulan purnama di langit malam",hint:"Benda langit ini terlihat pada malam hari."},
  {id:"ringo",word:"りんご",romaji:"ringo",meaning:"apel",image:"/comic/ringo.webp",alt:"Apel merah di dalam keranjang",hint:"Buah bulat ini biasanya berwarna merah atau hijau."},
  {id:"kuruma",word:"くるま",romaji:"kuruma",meaning:"mobil",image:"/comic/kuruma.webp",alt:"Mobil merah di jalan lingkungan Jepang",hint:"Kendaraan ini memiliki empat roda."},
  {id:"hana",word:"はな",romaji:"hana",meaning:"bunga",image:"/comic/hana.webp",alt:"Bunga merah mekar di taman",hint:"Tumbuhan ini mekar dan memiliki kelopak."},
  {id:"tori",word:"とり",romaji:"tori",meaning:"burung",image:"/comic/tori.webp",alt:"Burung kecil bertengger di pagar",hint:"Hewan ini memiliki sayap dan bulu."},
  {id:"mizu",word:"みず",romaji:"mizu",meaning:"air",image:"/comic/mizu.webp",alt:"Air mengalir dari bambu ke wadah batu",hint:"Cairan bening ini kita minum setiap hari."},
  {id:"pan",word:"パン",romaji:"pan",meaning:"roti",image:"/comic/pan.webp",alt:"Roti bulat yang baru dipanggang",hint:"Makanan ini dibuat dari adonan dan dipanggang."},
];

const COMIC_ROUND_COUNT = COMIC_SCENES.length * 2;

const HIRAGANA: Kana[] = [
  ["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"],
  ["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"],
  ["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"],
  ["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"],
  ["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"],
  ["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"],
  ["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"],
  ["や","ya"],["ゆ","yu"],["よ","yo"],["ら","ra"],["り","ri"],
  ["る","ru"],["れ","re"],["ろ","ro"],["わ","wa"],["を","wo"],["ん","n"],
].map(([char, romaji]) => ({ char, romaji }));

const KATAKANA: Kana[] = [
  ["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"],
  ["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"],
  ["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"],
  ["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"],
  ["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"],
  ["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"],
  ["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"],
  ["ヤ","ya"],["ユ","yu"],["ヨ","yo"],["ラ","ra"],["リ","ri"],
  ["ル","ru"],["レ","re"],["ロ","ro"],["ワ","wa"],["ヲ","wo"],["ン","n"],
].map(([char, romaji]) => ({ char, romaji }));

const HIRAGANA_VOICED: Kana[] = [
  ["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"],
  ["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"],
  ["だ","da"],["ぢ","ji (di)"],["づ","zu (du)"],["で","de"],["ど","do"],
  ["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"],
  ["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"],
].map(([char, romaji]) => ({ char, romaji }));

const KATAKANA_VOICED: Kana[] = HIRAGANA_VOICED.map(({char,romaji}) => ({char:String.fromCodePoint(char.codePointAt(0)! + 0x60),romaji}));
const HIRAGANA_CONTRACTED: Kana[] = [
  ["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"],["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"],
  ["しゃ","sha"],["しゅ","shu"],["しょ","sho"],["じゃ","ja"],["じゅ","ju"],["じょ","jo"],
  ["ちゃ","cha"],["ちゅ","chu"],["ちょ","cho"],["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"],
  ["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"],["びゃ","bya"],["びゅ","byu"],["びょ","byo"],
  ["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"],["みゃ","mya"],["みゅ","myu"],["みょ","myo"],
  ["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"],
].map(([char, romaji]) => ({ char, romaji }));
const KATAKANA_CONTRACTED: Kana[] = HIRAGANA_CONTRACTED.map(({char,romaji}) => ({char:[...char].map(c=>String.fromCodePoint(c.codePointAt(0)!+0x60)).join(""),romaji}));
const HIRAGANA_SPECIAL: Kana[] = [
  ["っ","konsonan ganda"],["ああ","aa"],["いい","ii"],["うう","uu"],["えい","ee / ei"],["おう","oo / ou"],
  ["は","wa (partikel)"],["へ","e (partikel)"],["を","o (partikel)"],
].map(([char, romaji]) => ({ char, romaji }));
const KATAKANA_SPECIAL: Kana[] = [
  ["ッ","konsonan ganda"],["ー","vokal panjang"],["ファ","fa"],["フィ","fi"],["フェ","fe"],["フォ","fo"],
  ["ティ","ti"],["ディ","di"],["ウィ","wi"],["ウェ","we"],["ウォ","wo"],["ヴ","vu"],
].map(([char, romaji]) => ({ char, romaji }));
const TOTAL_KANA_FORMS = new Set([...HIRAGANA,...HIRAGANA_VOICED,...HIRAGANA_CONTRACTED,...HIRAGANA_SPECIAL,...KATAKANA,...KATAKANA_VOICED,...KATAKANA_CONTRACTED,...KATAKANA_SPECIAL].map(item=>item.char)).size;

const KANA_SET_INFO: Record<KanaSet,{label:string;hint:string}> = {
  basic:{label:"Dasar 46",hint:"Gojūon: fondasi bunyi dan bentuk kana."},
  voiced:{label:"Dakuten ゛゜",hint:"Bunyi bersuara dan setengah bersuara: が・ざ・だ・ば・ぱ."},
  contracted:{label:"Kombinasi ゃゅょ",hint:"Yōon: gabungkan kana kolom i dengan ゃ・ゅ・ょ kecil sebagai satu ketukan."},
  special:{label:"Bunyi khusus",hint:"Konsonan ganda, vokal panjang, dan bacaan partikel yang perlu dikenali."},
};

const EXAMPLES: Record<string, [string, string, string]> = {
  a: ["あさ", "asa", "pagi"], i: ["いぬ", "inu", "anjing"], u: ["うみ", "umi", "laut"],
  e: ["えき", "eki", "stasiun"], o: ["おと", "oto", "suara"], ka: ["かさ", "kasa", "payung"],
  ki: ["き", "ki", "pohon"], ku: ["くち", "kuchi", "mulut"], ke: ["けさ", "kesa", "tadi pagi"],
  ko: ["こえ", "koe", "suara"], sa: ["さかな", "sakana", "ikan"], shi: ["しろ", "shiro", "putih"],
  su: ["すし", "sushi", "sushi"], se: ["せかい", "sekai", "dunia"], so: ["そら", "sora", "langit"],
  ta: ["たこ", "tako", "gurita"], chi: ["ちず", "chizu", "peta"], tsu: ["つき", "tsuki", "bulan"],
  te: ["て", "te", "tangan"], to: ["とり", "tori", "burung"], na: ["なつ", "natsu", "musim panas"],
  ni: ["にく", "niku", "daging"], nu: ["ぬの", "nuno", "kain"], ne: ["ねこ", "neko", "kucing"],
  no: ["のり", "nori", "rumput laut"], ha: ["はな", "hana", "bunga"], hi: ["ひ", "hi", "api"],
  fu: ["ふね", "fune", "kapal"], he: ["へや", "heya", "kamar"], ho: ["ほし", "hoshi", "bintang"],
  ma: ["まど", "mado", "jendela"], mi: ["みみ", "mimi", "telinga"], mu: ["むし", "mushi", "serangga"],
  me: ["め", "me", "mata"], mo: ["もり", "mori", "hutan"], ya: ["やま", "yama", "gunung"],
  yu: ["ゆき", "yuki", "salju"], yo: ["よる", "yoru", "malam"], ra: ["らいねん", "rainen", "tahun depan"],
  ri: ["りす", "risu", "tupai"], ru: ["るす", "rusu", "tidak di rumah"], re: ["れきし", "rekishi", "sejarah"],
  ro: ["ろく", "roku", "enam"], wa: ["わに", "wani", "buaya"], wo: ["を", "wo", "penanda objek"], n: ["ほん", "hon", "buku"],
};

const GROUPS = ["A", "K", "S", "T", "N", "H", "M", "Y", "R", "W"];
const GROUP_STARTS = [0, 5, 10, 15, 20, 25, 30, 35, 38, 43];

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [script, setScript] = useState<Script>("hiragana");
  const [kanaSet, setKanaSet] = useState<KanaSet>("basic");
  const [comicAnswer, setComicAnswer] = useState<string | null>(null);
  const [comicIndex, setComicIndex] = useState(0);
  const [comicCorrect, setComicCorrect] = useState<number[]>([]);
  const [comicFinished, setComicFinished] = useState(false);
  const [view, setView] = useState<View>("kurikulum");
  const [selected, setSelected] = useState(0);
  const [learned, setLearned] = useState<string[]>([]);
  const [streak, setStreak] = useState(1);
  const [quiz, setQuiz] = useState<Kana[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [answerState, setAnswerState] = useState<"idle" | "correct" | "wrong">("idle");
  const [finished, setFinished] = useState(false);
  const [toast, setToast] = useState("");
  const [showStrokeGuide, setShowStrokeGuide] = useState(true);
  const [completed, setCompleted] = useState<string[]>([]);
  const [learnedWords, setLearnedWords] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordCategory, setWordCategory] = useState("Semua");
  const [wordLevel, setWordLevel] = useState<"Semua"|"N5"|"N4">("Semua");
  const [showWord, setShowWord] = useState(false);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [grammarLevel, setGrammarLevel] = useState<"Semua"|"N5"|"N4">("Semua");
  const [kanjiIndex, setKanjiIndex] = useState(0);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [showListeningText, setShowListeningText] = useState(false);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [kaiwaIndex, setKaiwaIndex] = useState(0);
  const [helpIndex, setHelpIndex] = useState(0);
  const [helpQuery, setHelpQuery] = useState("");
  const [particleIndex, setParticleIndex] = useState(0);
  const [particleAnswer, setParticleAnswer] = useState<string | null>(null);
  const [practicalIndex, setPracticalIndex] = useState(0);
  const [lexicon, setLexicon] = useState<LexiconItem[]>([]);
  const [lexiconQuery, setLexiconQuery] = useState("");
  const [lexiconLevel, setLexiconLevel] = useState<"Semua"|"N5"|"N4">("Semua");
  const [readingIndex, setReadingIndex] = useState(0);
  const [readingAnswer, setReadingAnswer] = useState<string | null>(null);
  const [reviewStats, setReviewStats] = useState<Record<string,ReviewStat>>({});
  const [reviewClock] = useState(()=>Date.now());
  const [reviewReveal, setReviewReveal] = useState(false);
  const [examLevel, setExamLevel] = useState<"N5"|"N4">("N5");
  const [examDifficulty, setExamDifficulty] = useState<"Mudah"|"Sedang"|"Sulit">("Mudah");
  const [examIndex, setExamIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState<Record<string,string>>({});
  const [examFinished, setExamFinished] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [nhkLessonIndex, setNhkLessonIndex] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState("");
  const [recordingError, setRecordingError] = useState("");
  const [audioStatus, setAudioStatus] = useState<"ready"|"playing"|"error">("ready");
  const [playingAudioKey, setPlayingAudioKey] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const kanaCollections = script === "hiragana"
    ? {basic:HIRAGANA,voiced:HIRAGANA_VOICED,contracted:HIRAGANA_CONTRACTED,special:HIRAGANA_SPECIAL}
    : {basic:KATAKANA,voiced:KATAKANA_VOICED,contracted:KATAKANA_CONTRACTED,special:KATAKANA_SPECIAL};
  const kana = kanaCollections[kanaSet];
  const active = kana[selected] ?? kana[0];
  const scriptLearned = learned.filter((x) => kana.some((k) => k.char === x)).length;

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("kananihon-progress") || "{}");
      if (Array.isArray(saved.learned)) setLearned(saved.learned);
      if (typeof saved.streak === "number") setStreak(saved.streak);
      if (Array.isArray(saved.completed)) setCompleted(saved.completed);
      if (Array.isArray(saved.learnedWords)) setLearnedWords(saved.learnedWords);
      if (saved.reviewStats && typeof saved.reviewStats === "object") setReviewStats(saved.reviewStats);
    } catch { /* mulai baru */ }
  }, []);

  useEffect(() => {
    localStorage.setItem("kananihon-progress", JSON.stringify({ learned, streak, completed, learnedWords, reviewStats }));
  }, [learned, streak, completed, learnedWords, reviewStats]);

  useEffect(() => {
    fetch("/data/jlpt-vocabulary.json").then((response)=>response.json()).then((data)=>setLexicon(data.items ?? [])).catch(()=>setLexicon([]));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    const ctx = canvas.getContext("2d");
    ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
  }, [active, view]);

  const percent = Math.round((scriptLearned / kana.length) * 100);
  const example = EXAMPLES[active.romaji] ?? [active.char, active.romaji, KANA_SET_INFO[kanaSet].hint];
  const strokeAsset = `/strokes/${active.char.codePointAt(0)!.toString(16).padStart(5, "0")}.svg?v=2`;

  function audioId(text: string) {
    let hash = 2166136261;
    for (let index = 0; index < text.length; index++) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  }

  function audioKey(text:string,rate=.72){return `${text}|${rate}`}
  function playIcon(text:string,rate=.72){return playingAudioKey===audioKey(text,rate)&&audioStatus==="playing"?"Ⅱ":"▶"}

  function speakWithSystemVoice(text: string, rate: number, key: string) {
    if (!("speechSynthesis" in window)) { setAudioStatus("error"); return; }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = rate;
    const japaneseVoice = speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("ja"));
    if (japaneseVoice) utterance.voice = japaneseVoice;
    utterance.onstart = () => {setPlayingAudioKey(key);setAudioStatus("playing")};
    utterance.onend = () => {setPlayingAudioKey(null);setAudioStatus("ready")};
    utterance.onerror = () => {setPlayingAudioKey(null);setAudioStatus("error")};
    speechSynthesis.speak(utterance);
  }

  function speakJapanese(text: string, rate = .72) {
    const key=audioKey(text,rate);
    if(playingAudioKey===key&&audioStatus==="playing"){
      audioRef.current?.pause();
      if("speechSynthesis" in window)speechSynthesis.cancel();
      setPlayingAudioKey(null);setAudioStatus("ready");return;
    }
    const audio = audioRef.current;
    if (!audio) { speakWithSystemVoice(text, rate,key); return; }
    audio.pause();
    audio.src = `/audio/${audioId(text)}.mp3`;
    audio.playbackRate = Math.max(.7, Math.min(1.2, rate / .76));
    audio.onplay = () => {setPlayingAudioKey(key);setAudioStatus("playing")};
    audio.onended = () => {setPlayingAudioKey(null);setAudioStatus("ready")};
    audio.onerror = () => speakWithSystemVoice(text, rate,key);
    audio.play().catch(() => speakWithSystemVoice(text, rate,key));
  }

  function kanaAudioText(item = active) { return item.char === "ー" ? "コーヒー" : item.char; }
  function speak(item = active) { speakJapanese(kanaAudioText(item)); }

  function markComplete(id: string, message = "Pelajaran selesai!") {
    setCompleted((old) => old.includes(id) ? old : [...old, id]);
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  }

  function markLearned() {
    setLearned((old) => old.includes(active.char) ? old : [...old, active.char]);
    setToast(`${active.char} masuk daftar dikuasai!`);
    window.setTimeout(() => setToast(""), 1800);
  }

  function switchScript(next: Script) {
    setScript(next);
    setKanaSet("basic");
    setSelected(0);
    setFinished(false);
    setAnswerState("idle");
  }

  function startQuiz() {
    const questions = shuffle(kana).slice(0, 10);
    setQuiz(questions);
    setQuizIndex(0);
    setScore(0);
    setFinished(false);
    setAnswerState("idle");
    makeChoices(questions[0], kana);
    setView("kuis");
  }

  function makeChoices(question: Kana, pool: Kana[]) {
    const wrong = shuffle(pool.filter((k) => k.romaji !== question.romaji)).slice(0, 3).map((k) => k.romaji);
    setChoices(shuffle([question.romaji, ...wrong]));
  }

  function answer(choice: string) {
    if (answerState !== "idle") return;
    const correct = choice === quiz[quizIndex].romaji;
    setAnswerState(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
    window.setTimeout(() => {
      if (quizIndex === quiz.length - 1) {
        setFinished(true);
        setStreak((s) => Math.max(s, 1));
      } else {
        const next = quizIndex + 1;
        setQuizIndex(next);
        makeChoices(quiz[next], kana);
        setAnswerState("idle");
      }
    }, 800);
  }

  function canvasPoint(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function beginDraw(e: React.PointerEvent<HTMLCanvasElement>) {
    drawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    const ctx = e.currentTarget.getContext("2d");
    const p = canvasPoint(e);
    if (!ctx) return;
    ctx.beginPath(); ctx.moveTo(p.x, p.y);
    ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineWidth = 11; ctx.strokeStyle = "#25221f";
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const ctx = e.currentTarget.getContext("2d");
    const p = canvasPoint(e);
    if (!ctx) return;
    ctx.lineTo(p.x, p.y); ctx.stroke();
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  }

  function gradeReview(rating: "ulang"|"sulit"|"bagus"|"mudah") {
    if (!activeReview) return;
    const old = reviewStats[activeReview.id] ?? {due:0,interval:0,ease:2.5,right:0,wrong:0};
    const days = rating === "ulang" ? 0 : rating === "sulit" ? Math.max(1,old.interval) : rating === "bagus" ? Math.max(2,old.interval*2 || 2) : Math.max(4,old.interval*3 || 4);
    setReviewStats({...reviewStats,[activeReview.id]:{due:Date.now()+(rating === "ulang" ? 10*60*1000 : days*86400000),interval:days,ease:Math.max(1.3,old.ease+(rating === "mudah"?.15:rating === "sulit"?-.15:0)),right:old.right+(rating === "ulang"?0:1),wrong:old.wrong+(rating === "ulang"?1:0)}});
    setReviewReveal(false);
  }

  async function startRecording() {
    try {
      setRecordingError("");
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (event)=>chunks.push(event.data);
      recorder.onstop = ()=>{ if (recordingUrl) URL.revokeObjectURL(recordingUrl); setRecordingUrl(URL.createObjectURL(new Blob(chunks,{type:recorder.mimeType}))); stream.getTracks().forEach((track)=>track.stop()); };
      recorderRef.current = recorder;
      recorder.start(); setRecording(true);
    } catch { setRecordingError("Mikrofon belum diizinkan. Aktifkan izin mikrofon di browser lalu coba lagi."); }
  }

  function stopRecording() { recorderRef.current?.stop(); setRecording(false); }

  const groups = useMemo(() => kanaSet === "basic"
    ? GROUPS.map((name, i) => ({name,items:kana.slice(GROUP_STARTS[i], GROUP_STARTS[i + 1] ?? kana.length),start:GROUP_STARTS[i]}))
    : Array.from({length:Math.ceil(kana.length / 5)},(_,i)=>({name:String(i+1).padStart(2,"0"),items:kana.slice(i*5,i*5+5),start:i*5})), [kana,kanaSet]);
  const levelWords = VOCABULARY.filter((word)=>wordLevel === "Semua" || (word.level ?? "N5") === wordLevel);
  const wordCategories = ["Semua", ...Array.from(new Set(levelWords.map((word) => word.category)))];
  const filteredWords = levelWords.filter((word) => wordCategory === "Semua" || word.category === wordCategory);
  const activeWord = filteredWords[wordIndex % filteredWords.length];
  const activeGrammar = GRAMMAR[grammarIndex];
  const filteredGrammar = GRAMMAR.map((lesson,index)=>({lesson,index})).filter(({lesson})=>grammarLevel === "Semua" || lesson.level === grammarLevel);
  const activeKanji = KANJI[kanjiIndex];
  const activeListening = LISTENING[listeningIndex];
  const activeConversation = CONVERSATIONS[conversationIndex];
  const activeKaiwa = KAIWA_VIDEOS[kaiwaIndex];
  const normalizedHelpQuery = helpQuery.toLowerCase().replace(/\bwa\b/g,"は").replace(/\bga\b/g,"が").replace(/\bni\b/g,"に").replace(/\bde\b/g,"で").replace(/\bwo\b|\bo\b/g,"を").replace(/\bte\b/g,"て");
  const helpTokens = normalizedHelpQuery.split(/\s+/).filter((token)=>token && !["dan","atau","apa","bedanya","kapan","pakai","cara"].includes(token));
  const helpResults = BEGINNER_HELP.filter((item)=>{const haystack=`${item.id} ${item.question} ${item.short} ${item.answer} ${item.category}`.toLowerCase();return helpTokens.every((token)=>haystack.includes(token))});
  const activeHelp = helpResults[helpIndex % Math.max(1,helpResults.length)] ?? BEGINNER_HELP[0];
  const activeParticle = PARTICLES[particleIndex];
  const activeParticleGuide = PARTICLE_GUIDES[activeParticle.id];
  const activePractical = PRACTICAL_LESSONS[practicalIndex];
  const activeReading = READING_LESSONS[readingIndex];
  const activeSpeaking = SPEAKING_PROMPTS[speakingIndex];
  const activeNhkLesson = NHK_LESSONS[nhkLessonIndex];
  const filteredLexicon = lexicon.filter((item)=>(lexiconLevel === "Semua" || item.level === lexiconLevel) && (!lexiconQuery || `${item.word} ${item.reading} ${item.meaning}`.toLowerCase().includes(lexiconQuery.toLowerCase()))).slice(0,80);
  const reviewItems = [...VOCABULARY.map((item)=>({id:`v-${item.id}`,kind:"Kosakata",front:item.japanese,reading:item.reading,back:item.meaning})),...GRAMMAR.map((item)=>({id:`g-${item.id}`,kind:"Bunpou",front:item.title,reading:item.pattern,back:item.meaning}))];
  const dueReviewItems = reviewItems.filter((item)=>(reviewStats[item.id]?.due ?? 0)<=reviewClock).sort((a,b)=>(reviewStats[a.id]?.due ?? 0)-(reviewStats[b.id]?.due ?? 0));
  const activeReview = dueReviewItems[0];
  const examQuestions = JLPT_DRILLS.filter((item)=>item.level===examLevel && (item.difficulty ?? "Mudah")===examDifficulty);
  const activeExam = examQuestions[examIndex];
  const examScore = examQuestions.filter((item)=>examAnswers[item.id]===item.answer).length;
  const comicMode = comicIndex < COMIC_SCENES.length ? "word-to-image" : "image-to-word";
  const activeComic = COMIC_SCENES[comicIndex % COMIC_SCENES.length];
  const comicScore = comicCorrect.length;
  const activeComicSceneIndex = comicIndex % COMIC_SCENES.length;
  const comicChoices = [activeComic, COMIC_SCENES[(activeComicSceneIndex + 3) % COMIC_SCENES.length], COMIC_SCENES[(activeComicSceneIndex + 6) % COMIC_SCENES.length], COMIC_SCENES[(activeComicSceneIndex + 9) % COMIC_SCENES.length]].sort((a,b)=>a.id.localeCompare(b.id));
  const particleQuestion = activeParticle.uses[0].example.replace(activeParticle.char,"＿＿");
  const particleChoices = [activeParticle.char, PARTICLES[(particleIndex+3)%PARTICLES.length].char, PARTICLES[(particleIndex+7)%PARTICLES.length].char, PARTICLES[(particleIndex+11)%PARTICLES.length].char].sort();
  const learningPoints = learned.length + learnedWords.length + completed.length;
  const voicedBase: Record<string,string> = {が:"か",ぎ:"き",ぐ:"く",げ:"け",ご:"こ",ざ:"さ",じ:"し",ず:"す",ぜ:"せ",ぞ:"そ",だ:"た",ぢ:"ち",づ:"つ",で:"て",ど:"と",ば:"は",び:"ひ",ぶ:"ふ",べ:"へ",ぼ:"ほ",ぱ:"は",ぴ:"ひ",ぷ:"ふ",ぺ:"へ",ぽ:"ほ"};
  const hiraganaActive = script === "katakana" ? [...active.char].map(c=>String.fromCodePoint(c.codePointAt(0)!-0x60)).join("") : active.char;
  const activeBreakdown = kanaSet === "contracted" ? `${[...active.char][0]} + ${[...active.char][1]} kecil = ${active.char}`
    : kanaSet === "voiced" ? `${script === "hiragana" ? voicedBase[hiraganaActive] : String.fromCodePoint(voicedBase[hiraganaActive]?.codePointAt(0)!+0x60)} + ${hiraganaActive.startsWith("ぱ")||hiraganaActive.startsWith("ぴ")||hiraganaActive.startsWith("ぷ")||hiraganaActive.startsWith("ぺ")||hiraganaActive.startsWith("ぽ") ? "゜maru" : "゛tenten"} = ${active.char}`
    : kanaSet === "special" ? KANA_SET_INFO.special.hint
    : `Lihat bentuk → dengar ${active.romaji} → ucapkan tanpa romaji`;
  const overallPercent = Math.min(100, Math.round((learningPoints / 120) * 100));
  const viewTitle: Record<View, string> = {
    kurikulum:"Jalur belajar", belajar:"Kana", latihan:"Menulis", kuis:"Kuis kana", kuisgambar:"Kuis gambar", kosakata:"Kosakata", tatabahasa:"Bunpou", partikel:"Partikel", kanji:"Kanji", mendengar:"Mendengar", percakapan:"Kaiwa", situasi:"Situasi nyata", tanya:"Tanya & paham", membaca:"Membaca", review:"Review pintar", ujian:"Simulasi JLPT", studio:"Studio bicara", nhk:"Pusat NHK"
  };

  return (
    <main>
      <header className="topbar">
        <button className="brand" onClick={() => setView("kurikulum")} aria-label="Kembali ke jalur belajar">
          <span className="brand-mark">かな</span>
          <span><strong>KanaNihon</strong><small>Belajar Jepang dari nol</small></span>
        </button>
        <nav aria-label="Navigasi utama">
          <button className={view === "kurikulum" ? "active" : ""} onClick={() => setView("kurikulum")}>Jalur</button>
          <button className={["belajar","latihan","kuis","kuisgambar"].includes(view) ? "active" : ""} onClick={() => setView("belajar")}>Kana</button>
          <button className={["kosakata","tatabahasa","partikel","kanji","situasi","mendengar","percakapan","tanya","membaca","review","ujian","studio","nhk"].includes(view) ? "active" : ""} onClick={() => setView("kosakata")}>N5–N4</button>
        </nav>
        <div className="streak" title="Rangkaian belajar"><span>火</span><strong>{streak}</strong> hari</div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">LANGKAH KECIL, SETIAP HARI</p>
          <h1>Dari huruf pertama.<br/><em>Sampai benar-benar paham.</em></h1>
          <p className="hero-copy">Satu tempat untuk belajar aksara, kosakata, bunpou, kanji, menyimak, dan kaiwa—bertahap dari nol sampai siap N5–N4.</p>
        </div>
        <div className="hero-kana" aria-hidden="true"><span>あ</span><i>ア</i><b>か</b></div>
      </section>

      <section className="workspace">
        <aside>
          <div className="course-label">KURIKULUM</div>
          <div className="course-menu" aria-label="Pilih materi belajar">
            <button className={view === "kurikulum" ? "selected" : ""} onClick={() => setView("kurikulum")}><span>道</span><i>Jalur belajar</i></button>
            <button className={view === "belajar" || view === "latihan" ? "selected" : ""} onClick={() => setView("belajar")}><span>あ</span><i>Kana & menulis</i></button>
            <button className={view === "kuisgambar" ? "selected" : ""} onClick={() => {setView("kuisgambar");setComicAnswer(null)}}><span>絵</span><i>Kuis gambar</i></button>
            <button className={view === "kosakata" ? "selected" : ""} onClick={() => setView("kosakata")}><span>言</span><i>Kosakata</i></button>
            <button className={view === "tatabahasa" ? "selected" : ""} onClick={() => setView("tatabahasa")}><span>文</span><i>Bunpou 文法</i></button>
            <button className={view === "partikel" ? "selected" : ""} onClick={() => setView("partikel")}><span>助</span><i>Partikel</i></button>
            <button className={view === "kanji" ? "selected" : ""} onClick={() => setView("kanji")}><span>字</span><i>Kanji</i></button>
            <button className={view === "mendengar" ? "selected" : ""} onClick={() => setView("mendengar")}><span>聴</span><i>Mendengar</i></button>
            <button className={view === "percakapan" ? "selected" : ""} onClick={() => setView("percakapan")}><span>会</span><i>Kaiwa video</i></button>
            <button className={view === "situasi" ? "selected" : ""} onClick={() => setView("situasi")}><span>旅</span><i>Situasi nyata</i></button>
            <button className={view === "membaca" ? "selected" : ""} onClick={() => {setView("membaca");setReadingAnswer(null)}}><span>読</span><i>Membaca</i></button>
            <button className={view === "studio" ? "selected" : ""} onClick={() => setView("studio")}><span>声</span><i>Studio bicara</i></button>
            <button className={view === "review" ? "selected" : ""} onClick={() => setView("review")}><span>復</span><i>Review pintar</i></button>
            <button className={view === "ujian" ? "selected" : ""} onClick={() => setView("ujian")}><span>試</span><i>Simulasi JLPT</i></button>
            <button className={view === "nhk" ? "selected" : ""} onClick={() => setView("nhk")}><span>放</span><i>Pusat NHK</i></button>
            <button className={view === "tanya" ? "selected" : ""} onClick={() => setView("tanya")}><span>?</span><i>Tanya & paham</i></button>
          </div>
          {(view === "belajar" || view === "latihan") && <div className="script-switch compact" aria-label="Pilih jenis huruf">
            <button className={script === "hiragana" ? "selected" : ""} onClick={() => switchScript("hiragana")}><span>あ</span> Hiragana</button>
            <button className={script === "katakana" ? "selected" : ""} onClick={() => switchScript("katakana")}><span>ア</span> Katakana</button>
          </div>}
          <div className="progress-card">
            <div className="progress-head"><span>Progres total</span><strong>{overallPercent}%</strong></div>
            <div className="progress-track"><i style={{ width: `${overallPercent}%` }} /></div>
            <small>{learningPoints} aktivitas diselesaikan</small>
          </div>
          <button className="quiz-cta" onClick={startQuiz}><span>Review kana cepat</span><b>→</b></button>
          <button className={`audio-check ${audioStatus}`} onClick={() => speakJapanese("こんにちは。日本語の勉強を始めましょう。",.76)}><span>{audioStatus === "error" ? "!" : playIcon("こんにちは。日本語の勉強を始めましょう。",.76)}</span><i>{playingAudioKey===audioKey("こんにちは。日本語の勉強を始めましょう。",.76)&&audioStatus === "playing" ? "Tekan lagi untuk berhenti" : audioStatus === "error" ? "Suara tidak tersedia" : "Tes suara Jepang"}</i></button>
          <p className="free-note">✓ Gratis · Tanpa akun · Progres tersimpan</p>
        </aside>

        <div className="content-panel">
          {view === "kurikulum" && <div className="curriculum-view">
            <div className="section-title"><div><p>KURIKULUM LENGKAP</p><h2>Jalur menuju mahir</h2></div><span>Mulai dari fondasi, naik sesuai kemampuanmu.</span></div>
            <div className="overview-grid">
              <div><small>AKTIVITAS SELESAI</small><strong>{learningPoints}</strong><span>tersimpan di perangkat</span></div>
              <div><small>KOSAKATA DIKUASAI</small><strong>{learnedWords.length}<i>/{VOCABULARY.length}</i></strong><span>paket inti N5–N4</span></div>
              <div><small>KANA DIKUASAI</small><strong>{learned.length}<i>/{TOTAL_KANA_FORMS}</i></strong><span>Dasar, variasi, dan kombinasi</span></div>
            </div>
            <article className="continue-card">
              <div className="continue-symbol">あ</div>
              <div><small>LANJUTKAN HARI INI · 10 MENIT</small><h3>Fondasi: kuasai bunyi dan aksara</h3><p>Baca 5 kana, pelajari 5 kosakata, lalu tutup dengan satu latihan listening.</p></div>
              <button className="primary" onClick={() => setView(learned.length < 20 ? "belajar" : "kosakata")}>Mulai sesi →</button>
            </article>
            <div className="roadmap-heading"><div><p>ROADMAP KEMAMPUAN</p><h3>Enam tahap sampai siap N4</h3></div><span>Dasar</span><i></i><span>N4</span></div>
            <div className="roadmap-list">
              {ROADMAP.map((stage, index) => <article className="roadmap-card" key={stage.level} style={{"--stage":stage.accent} as React.CSSProperties}>
                <div className="roadmap-index">{String(index + 1).padStart(2,"0")}</div>
                <div className="roadmap-level"><span>{stage.level}</span><small>{stage.subtitle}</small></div>
                <div className="roadmap-main"><h3>{stage.title}</h3><p>{stage.goal}</p><div>{stage.modules.map((module) => <b key={module}>{module}</b>)}</div></div>
                <button aria-label={`Buka tahap ${stage.level}`} onClick={() => setView(index === 0 ? "belajar" : index === 1 ? "kosakata" : "tatabahasa")}>→</button>
              </article>)}
            </div>
            <div className="source-box"><div><p>DIRANCANG DARI SUMBER TEPERCAYA</p><h3>Kurikulum berbasis aktivitas nyata</h3><span>Strukturnya mengikuti kemampuan membaca dan mendengar JLPT, lalu dilengkapi latihan percakapan, menulis, kosakata, dan situasi sehari-hari.</span></div><div className="source-links">{SOURCES.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.name}><b>{source.name}</b><span>{source.note}</span></a>)}</div></div>
          </div>}

          {view === "nhk" && <div className="nhk-view">
            <div className="section-title"><div><p>NHK WORLD-JAPAN · BAHASA INDONESIA</p><h2>Belajar lewat drama, audio, dan situasi</h2></div><span>48 pelajaran resmi · sekitar 10 menit per episode · akses gratis.</span></div>
            <div className="nhk-credit"><span>放送</span><div><b>Pendamping resmi untuk jalur N5–N4 KanaNihon</b><p>KanaNihon membantu memilih urutan dan mencatat progres. Audio, gambar, naskah, dan PDF tetap disajikan langsung oleh NHK WORLD-JAPAN serta tunduk pada hak cipta NHK.</p></div><a href="https://www3.nhk.or.jp/nhkworld/lesson/indonesian/" target="_blank" rel="noreferrer">Buka situs NHK ↗</a></div>
            <div className="nhk-resources">{NHK_RESOURCES.map((resource)=><a key={resource.title} href={resource.url} target="_blank" rel="noreferrer"><span>{resource.icon}</span><div><b>{resource.title}</b><p>{resource.description}</p></div><i>↗</i></a>)}</div>
            <div className="subsection-title"><div><small>JALUR 48 EPISODE</small><h3>Dengar → baca naskah → tirukan → cek grammar</h3></div><span>{completed.filter((id)=>id.startsWith("nhk-")).length}/48 selesai</span></div>
            <div className="nhk-layout"><div className="nhk-lesson-list">{NHK_LESSONS.map((lesson,index)=><button key={lesson.number} className={`${nhkLessonIndex===index?"selected":""} ${completed.includes(`nhk-${lesson.number}`)?"learned":""}`} onClick={()=>setNhkLessonIndex(index)}><span>{String(lesson.number).padStart(2,"0")}</span><div><b>{lesson.level}</b><small>{lesson.phase}</small></div><i>{completed.includes(`nhk-${lesson.number}`)?"✓":"→"}</i></button>)}</div><article className="nhk-player"><div className="nhk-image"><img src={activeNhkLesson.image} alt={`Ilustrasi resmi NHK pelajaran ${activeNhkLesson.number}`} referrerPolicy="no-referrer"/><span>© NHK WORLD-JAPAN</span></div><div className="nhk-player-copy"><span className="grammar-badge">{activeNhkLesson.level} · PELAJARAN {activeNhkLesson.number}</span><h2>{activeNhkLesson.phase}</h2><p>{activeNhkLesson.goal}</p><audio key={activeNhkLesson.number} controls preload="none" src={activeNhkLesson.audio}>Browser tidak mendukung audio.</audio><div className="nhk-actions"><a className="outline" href={activeNhkLesson.page} target="_blank" rel="noreferrer">Naskah & grammar ↗</a><a className="outline" href={activeNhkLesson.pdf} target="_blank" rel="noreferrer">PDF Indonesia ↗</a></div><div className="nhk-method"><small>CARA BELAJAR 15 MENIT</small><ol><li>Dengarkan sekali tanpa naskah; tangkap tempat dan tujuan percakapan.</li><li>Buka naskah, tandai satu pola dan tiga kata baru.</li><li>Putar ulang per kalimat lalu shadowing dengan jeda sesingkat mungkin.</li><li>Tutup naskah dan ceritakan kembali inti dialog dalam satu kalimat.</li></ol></div><button className="primary" onClick={()=>{markComplete(`nhk-${activeNhkLesson.number}`,`Pelajaran NHK ${activeNhkLesson.number} selesai!`);setNhkLessonIndex(Math.min(47,nhkLessonIndex+1))}}>{completed.includes(`nhk-${activeNhkLesson.number}`)?"Selesai ✓":"Tandai selesai & lanjut →"}</button></div></article></div>
            <div className="nhk-bridge"><div><small>AGAR BUKAN SEKADAR MENONTON</small><h3>Hubungkan setiap episode ke latihan situs kita</h3></div><button onClick={()=>setView("mendengar")}><span>1</span><b>Listening</b><small>Tangkap informasi kunci</small></button><button onClick={()=>setView("tatabahasa")}><span>2</span><b>Bunpou</b><small>Bedah pola episode</small></button><button onClick={()=>setView("studio")}><span>3</span><b>Shadowing</b><small>Rekam dan bandingkan</small></button><button onClick={()=>setView("review")}><span>4</span><b>Review</b><small>Jaga agar tidak lupa</small></button></div>
          </div>}

          {view === "membaca" && <div className="reading-view">
            <div className="section-title"><div><p>DOKKAI N5–N4</p><h2>Belajar membaca informasi nyata</h2></div><span>{READING_LESSONS.length} teks: pesan, jadwal, iklan, email, dan pengumuman.</span></div>
            <div className="reading-layout"><div className="reading-list">{READING_LESSONS.map((lesson,index)=><button key={lesson.id} className={readingIndex===index?"selected":""} onClick={()=>{setReadingIndex(index);setReadingAnswer(null)}}><span>{lesson.level} · {lesson.kind}</span><b>{lesson.title}</b><small>{lesson.canDo}</small></button>)}</div><article className="reading-card"><div className="can-do"><b>できる · Target</b><span>{activeReading.canDo}</span></div><pre>{activeReading.text}</pre><button className="outline" onClick={()=>speakJapanese(activeReading.text,.76)}>{playIcon(activeReading.text,.76)} Dengarkan teks</button><details><summary>Buka cara baca & arti</summary><p>{activeReading.reading}</p><p>{activeReading.meaning}</p></details><div className="reading-vocab">{activeReading.vocabulary.map((word)=><span key={word.word}><b>{word.word}</b> {word.reading} · {word.meaning}</span>)}</div><div className="reading-question"><small>CEK PEMAHAMAN</small><h3>{activeReading.question}</h3>{activeReading.choices.map((choice)=><button key={choice} className={readingAnswer===choice?(choice===activeReading.answer?"correct":"wrong"):""} onClick={()=>setReadingAnswer(choice)}>{choice}</button>)}{readingAnswer&&<p><b>{readingAnswer===activeReading.answer?"Benar.":`Jawaban: ${activeReading.answer}.`}</b> {activeReading.explanation}</p>}</div><div className="module-nav"><button className="outline" disabled={readingIndex===0} onClick={()=>{setReadingIndex(readingIndex-1);setReadingAnswer(null)}}>← Kembali</button><button className="primary" onClick={()=>{markComplete(`reading-${activeReading.id}`);setReadingIndex((readingIndex+1)%READING_LESSONS.length);setReadingAnswer(null)}}>Selesai & lanjut →</button></div></article></div>
          </div>}

          {view === "review" && <div className="review-view">
            <div className="section-title"><div><p>SPACED REPETITION</p><h2>Review sebelum lupa</h2></div><span>{dueReviewItems.length} kartu jatuh tempo · progres tersimpan otomatis.</span></div>
            {activeReview?<article className={`review-card ${reviewReveal?"revealed":""}`}><span>{activeReview.kind}</span><h2>{activeReview.front}</h2><p>{activeReview.reading}</p>{reviewReveal?<><div className="review-answer">{activeReview.back}</div><div className="review-grades"><button onClick={()=>gradeReview("ulang")}>Ulang<small>10 menit</small></button><button onClick={()=>gradeReview("sulit")}>Sulit<small>1 hari</small></button><button onClick={()=>gradeReview("bagus")}>Bagus<small>bertahap</small></button><button onClick={()=>gradeReview("mudah")}>Mudah<small>lebih lama</small></button></div></>:<button className="primary" onClick={()=>setReviewReveal(true)}>Tampilkan jawaban</button>}</article>:<div className="review-empty"><span>復</span><h2>Review hari ini selesai</h2><p>Kartu berikutnya akan muncul saat hampir perlu diingat kembali.</p><button className="outline" onClick={()=>setReviewStats({})}>Latih semua lagi</button></div>}
          </div>}

          {view === "ujian" && <div className="exam-view">
            <div className="section-title"><div><p>FORMAT SOAL JLPT</p><h2>Simulasi mini N5–N4</h2></div><span>Kosakata, bunpou, susun kalimat, membaca, dan listening.</span></div>
            <div className="level-tabs">{(["N5","N4"] as const).map((level)=><button key={level} className={examLevel===level?"selected":""} onClick={()=>{setExamLevel(level);setExamIndex(0);setExamAnswers({});setExamFinished(false)}}>Simulasi {level}</button>)}</div>
            <div className="difficulty-tabs"><span>Tingkat soal</span>{(["Mudah","Sedang","Sulit"] as const).map((difficulty)=><button key={difficulty} className={examDifficulty===difficulty?"selected":""} onClick={()=>{setExamDifficulty(difficulty);setExamIndex(0);setExamAnswers({});setExamFinished(false)}}>{difficulty}<small>{difficulty==="Mudah"?"Fondasi":difficulty==="Sedang"?"Penerapan":"Jebakan & konteks"}</small></button>)}<strong>{examQuestions.length} soal</strong></div>
            {!examFinished?<article className="exam-card"><div className="exam-meta"><span>{activeExam.skill} · soal {examIndex+1}/{examQuestions.length}</span><strong>{examLevel}</strong></div>{activeExam.audio&&<button className="sound-round" onClick={()=>speakJapanese(activeExam.audio!)}>{playIcon(activeExam.audio!)}</button>}<h2>{activeExam.prompt}</h2>{activeExam.context&&<p className="exam-context">{activeExam.context}</p>}<div className="exam-choices">{activeExam.choices.map((choice)=><button key={choice} className={examAnswers[activeExam.id]===choice?"selected":""} onClick={()=>setExamAnswers({...examAnswers,[activeExam.id]:choice})}>{choice}</button>)}</div><div className="module-nav"><button className="outline" disabled={examIndex===0} onClick={()=>setExamIndex(examIndex-1)}>← Kembali</button><button className="primary" disabled={!examAnswers[activeExam.id]} onClick={()=>examIndex===examQuestions.length-1?setExamFinished(true):setExamIndex(examIndex+1)}>{examIndex===examQuestions.length-1?"Nilai ujian":"Berikutnya →"}</button></div></article>:<article className="exam-result"><span>合格?</span><h2>{examScore}/{examQuestions.length} benar</h2><p>{examScore/examQuestions.length>=.7?"Fondasi kamu sudah baik. Review penjelasan lalu lanjutkan latihan penuh.":"Belum masalah—lihat pembahasan dan masukkan bagian lemah ke review."}</p>{examQuestions.map((item)=><div key={item.id} className={examAnswers[item.id]===item.answer?"correct":"wrong"}><b>{item.skill}: {item.prompt}</b><span>Jawabanmu: {examAnswers[item.id]} · Benar: {item.answer}</span><p>{item.explanation}</p></div>)}<button className="primary" onClick={()=>{setExamIndex(0);setExamAnswers({});setExamFinished(false)}}>Ulangi simulasi</button></article>}
          </div>}

          {view === "studio" && <div className="studio-view">
            <div className="section-title"><div><p>OUTPUT & SHADOWING</p><h2>Studio latihan bicara</h2></div><span>Dengar model, rekam suara sendiri, lalu bandingkan.</span></div>
            <div className="studio-layout"><div className="speaking-list">{SPEAKING_PROMPTS.map((prompt,index)=><button key={prompt.id} className={speakingIndex===index?"selected":""} onClick={()=>{setSpeakingIndex(index);setRecordingUrl("")}}><span>{prompt.level}</span><b>{prompt.title}</b></button>)}</div><article className="speaking-card"><span className="grammar-badge">{activeSpeaking.level} · SHADOWING</span><h2>{activeSpeaking.title}</h2><div className="model-speech"><small>MODEL</small><p>{activeSpeaking.model}</p><button className="outline" onClick={()=>speakJapanese(activeSpeaking.model,.72)}>{playIcon(activeSpeaking.model,.72)} Putar contoh</button></div><div className="speaking-task"><small>GILIRANMU</small><p>{activeSpeaking.task}</p><ul>{activeSpeaking.checks.map((check)=><li key={check}>{check}</li>)}</ul></div><div className="record-controls">{recording?<button className="primary recording" onClick={stopRecording}>■ Hentikan rekaman</button>:<button className="primary" onClick={startRecording}>● Mulai rekam</button>}{recordingUrl&&<audio controls src={recordingUrl}/>}</div>{recordingError&&<p className="record-error">{recordingError}</p>}<button className="outline" onClick={()=>markComplete(`speaking-${activeSpeaking.id}`,"Latihan bicara disimpan sebagai selesai!")}>Tandai latihan selesai</button></article></div>
          </div>}

          {view === "kosakata" && <div className="vocab-view">
            <div className="section-title"><div><p>KOSAKATA N5–N4 · {VOCABULARY.length} KATA</p><h2>Bangun perbendaharaan kata</h2></div><span>Dengar, tebak, lalu lihat penggunaannya.</span></div>
            <div className="level-tabs" aria-label="Pilih tingkat kosakata">{(["Semua","N5","N4"] as const).map((level)=><button key={level} className={wordLevel===level?"selected":""} onClick={()=>{setWordLevel(level);setWordCategory("Semua");setWordIndex(0);setShowWord(false)}}>{level === "Semua" ? "Semua level" : level}</button>)}</div>
            <div className="category-tabs">{wordCategories.map((category) => <button key={category} className={wordCategory === category ? "selected" : ""} onClick={() => {setWordCategory(category);setWordIndex(0);setShowWord(false)}}>{category}</button>)}</div>
            <div className="vocab-layout">
              <article className={`flashcard ${showWord ? "revealed" : ""}`} onClick={() => setShowWord(true)}>
                <div className="card-label"><span>{activeWord.level ?? "N5"} · {activeWord.category}</span><b>{wordIndex + 1}/{filteredWords.length}</b></div>
                <button className="sound-round vocab-sound" onClick={(event) => {event.stopPropagation();speakJapanese(activeWord.japanese)}} aria-label={`Dengarkan ${activeWord.japanese}`}>{playIcon(activeWord.japanese)}</button>
                <div className="vocab-japanese">{activeWord.japanese}</div>
                <div className="vocab-reading">{activeWord.reading}</div>
                {!showWord ? <div className="tap-hint">Tekan kartu untuk melihat arti</div> : <div className="vocab-answer"><h3>{activeWord.meaning}</h3><p>{activeWord.romaji}</p><div><b>{activeWord.example}</b><span>{activeWord.exampleMeaning}</span></div></div>}
              </article>
              <div className="vocab-side">
                <div className="mastery-ring" style={{"--mastery":`${Math.round((learnedWords.length/VOCABULARY.length)*100)}%`} as React.CSSProperties}><strong>{learnedWords.length}</strong><span>dikuasai</span></div>
                <h3>Ulangi sampai otomatis</h3><p>Dengarkan tanpa melihat romaji. Ucapkan keras-keras, lalu cek contoh kalimatnya.</p>
                <div className="flash-actions"><button className="outline" onClick={() => {setWordIndex((wordIndex - 1 + filteredWords.length) % filteredWords.length);setShowWord(false)}}>← Sebelumnya</button><button className="primary" onClick={() => {setLearnedWords((old) => old.includes(activeWord.id) ? old : [...old,activeWord.id]);setWordIndex((wordIndex + 1) % filteredWords.length);setShowWord(false)}}>{learnedWords.includes(activeWord.id) ? "Sudah hafal ✓" : "Saya hafal"}</button><button className="outline" onClick={() => {setWordIndex((wordIndex + 1) % filteredWords.length);setShowWord(false)}}>Berikutnya →</button></div>
              </div>
            </div>
            <div className="word-bank"><h3>Bank kata · {filteredWords.length} kata</h3><div>{filteredWords.map((word, index) => <button className={learnedWords.includes(word.id) ? "learned" : ""} key={word.id} onClick={() => {setWordIndex(index);setShowWord(true)}}><b>{word.japanese}</b><span>{word.meaning}</span></button>)}</div></div>
          </div>}

            {view === "kosakata" && <section className="lexicon"><div><p>REFERENSI KOSAKATA JLPT</p><h3>{lexicon.length.toLocaleString("id-ID")} kata N5–N4</h3><span>Paket inti di atas berbahasa Indonesia; kamus tambahan ini memakai arti sumber berbahasa Inggris.</span></div><div className="lexicon-tools"><input aria-label="Cari kamus" value={lexiconQuery} onChange={(event)=>setLexiconQuery(event.target.value)} placeholder="Cari Jepang, cara baca, atau arti…"/><select value={lexiconLevel} onChange={(event)=>setLexiconLevel(event.target.value as typeof lexiconLevel)}><option>Semua</option><option>N5</option><option>N4</option></select></div><div className="lexicon-grid">{filteredLexicon.map((item)=><button key={item.id} className={playingAudioKey===audioKey(item.word)&&audioStatus==="playing"?"playing":""} onClick={()=>speakJapanese(item.word)}><b>{item.word}</b><span>{item.reading}</span><small>{item.level} · {item.meaning}</small></button>)}</div><small>Data referensi: open-anki-jlpt-decks (MIT). Maksimal 80 hasil ditampilkan agar tetap ringan.</small></section>}

          {view === "tatabahasa" && <div className="grammar-view">
            <div className="section-title"><div><p>文法 · BUNPOU N5–N4</p><h2>Susun kalimat dengan yakin</h2></div><span>{GRAMMAR.length} pola dengan fungsi, contoh, dan jebakan umum.</span></div>
            <div className="bunpou-intro"><span>文法</span><div><b>Bunpou bukan kumpulan rumus.</b><p>Pelajari maksud pembicara, bentuk yang menempel, lalu bedakan dengan pola yang terlihat mirip. Dengarkan setiap contoh sebelum menandainya paham.</p></div><strong>{completed.filter((id)=>id.startsWith("grammar-")).length}/{GRAMMAR.length}</strong></div>
            <div className="level-tabs" aria-label="Pilih tingkat bunpou">{(["Semua","N5","N4"] as const).map((level)=><button key={level} className={grammarLevel===level?"selected":""} onClick={()=>{setGrammarLevel(level);const first=GRAMMAR.findIndex((item)=>level==="Semua"||item.level===level);if(first>=0)setGrammarIndex(first)}}>{level === "Semua" ? "Semua pola" : `Bunpou ${level}`}</button>)}</div>
            <div className="lesson-layout">
              <div className="lesson-list">{filteredGrammar.map(({lesson,index}) => <button key={lesson.id} className={grammarIndex === index ? "selected" : ""} onClick={() => setGrammarIndex(index)}><span>{lesson.level}</span><div><b>{lesson.title}</b><small>{lesson.meaning}</small></div>{completed.includes(`grammar-${lesson.id}`) && <i>✓</i>}</button>)}</div>
              <article className="grammar-card">
                <div className="grammar-badge">{activeGrammar.level} · POLA {grammarIndex + 1}</div><h2>{activeGrammar.title}</h2><p className="grammar-meaning">{activeGrammar.meaning}</p>
                <div className="pattern-box"><small>POLA</small><strong>{activeGrammar.pattern}</strong></div>
                <p className="grammar-explain">{activeGrammar.explanation}</p>
                <div className="example-stack"><small>CONTOH</small>{activeGrammar.examples.map((example) => <div key={example.jp}><button onClick={() => speakJapanese(example.jp)} aria-label="Dengarkan contoh">{playIcon(example.jp)}</button><p><b>{example.jp}</b><span>{example.romaji}</span><em>{example.id}</em></p></div>)}</div>
                <button className="primary complete-lesson" onClick={() => markComplete(`grammar-${activeGrammar.id}`,"Pola tata bahasa dikuasai!")}>{completed.includes(`grammar-${activeGrammar.id}`) ? "Pelajaran selesai ✓" : "Tandai sudah paham"}</button>
              </article>
            </div>
          </div>}

          {view === "partikel" && <div className="particle-view">
            <div className="section-title"><div><p>PANDUAN PARTIKEL</p><h2>Pahami fungsi, bukan hafalan</h2></div><span>Lihat hubungan kata, konteks, dan perbedaannya.</span></div>
            <div className="particle-intro"><div><span>助詞</span><p><b>Partikel adalah penunjuk hubungan.</b> Partikel ditempatkan setelah kata untuk menjelaskan perannya: topik, pelaku, objek, tujuan, lokasi, teman, batas, dan nuansa pembicara.</p></div><div><b>{completed.filter((id)=>id.startsWith("particle-")).length}/{PARTICLES.length}</b><span>partikel dipahami</span></div></div>
            <div className="particle-layout">
              <div className="particle-list">{PARTICLES.map((particle,index)=><button key={particle.id} className={`${particleIndex===index?"selected":""} ${completed.includes(`particle-${particle.id}`)?"learned":""}`} onClick={()=>{setParticleIndex(index);setParticleAnswer(null)}}><b>{particle.char}</b><span>{particle.core}</span><i>{particle.level}</i></button>)}</div>
              <article className="particle-detail">
                <div className="particle-hero"><div className="particle-char">{activeParticle.char}</div><div><span className="grammar-badge">{activeParticle.level} · dibaca {activeParticle.name}</span><h2>{activeParticle.core}</h2><p>{activeParticle.summary}</p></div></div>
                {activeParticleGuide&&<div className="particle-beginner"><div><small>BAYANGKAN BEGINI</small><p>{activeParticleGuide.picture}</p></div><div><small>KAPAN SAYA MEMILIHNYA?</small><p>{activeParticleGuide.choose}</p></div><div className="particle-warning"><small>KESALAHAN YANG SERING TERJADI</small><p>{activeParticleGuide.mistake}</p></div><strong>Rumus ingatan: {activeParticleGuide.memory}</strong></div>}
                <div className="particle-uses"><h3>Kapan digunakan?</h3>{activeParticle.uses.map((use,index)=><div className="particle-use" key={use.label}><span>{index+1}</span><div><small>{use.label}</small><code>{use.pattern}</code><button onClick={()=>speakJapanese(use.example)} aria-label={`Dengarkan ${use.example}`}>{playIcon(use.example)}</button><b>{use.example}</b><em>{use.romaji}</em><p>{use.meaning}</p>{use.note&&<div className="use-note">{use.note}</div>}</div></div>)}</div>
                {activeParticle.contrast&&<div className="contrast-box"><span>BEDAKAN</span><p>{activeParticle.contrast}</p></div>}
                <div className="particle-practice"><div><small>CEK PEMAHAMAN</small><h3>{particleQuestion}</h3><p>{activeParticle.uses[0].meaning}</p></div><div className="particle-options">{particleChoices.map((choice)=><button key={choice} className={particleAnswer===choice?(choice===activeParticle.char?"correct":"wrong"):""} onClick={()=>setParticleAnswer(choice)}>{choice}</button>)}</div>{particleAnswer&&<strong>{particleAnswer===activeParticle.char?"Benar—fungsi dan konteksnya cocok.":`Belum tepat. Jawabannya ${activeParticle.char}.`}</strong>}</div>
                <button className="primary complete-lesson" onClick={()=>markComplete(`particle-${activeParticle.id}`,`Partikel ${activeParticle.char} sudah dipahami!`)}>{completed.includes(`particle-${activeParticle.id}`)?"Sudah dipahami ✓":"Tandai sudah paham"}</button>
              </article>
            </div>
          </div>}

          {view === "partikel" && <div className="particle-sources"><div><small>SUMBER PENJELASAN</small><h3>Belajar dari fungsi dalam konteks</h3><p>Penjelasan disederhanakan untuk pemula, lalu diverifikasi terhadap contoh penggunaan dan perbandingan partikel.</p></div>{PARTICLE_SOURCES.map((source)=><a key={source.name} href={source.url} target="_blank" rel="noreferrer"><b>{source.name} ↗</b><span>{source.note}</span></a>)}</div>}

          {view === "kanji" && <div className="kanji-view">
            <div className="section-title"><div><p>KANJI DASAR</p><h2>Kenali makna, bunyi, dan bentuk</h2></div><span>Pelajari kanji lewat kata nyata dan urutan goresan.</span></div>
            <div className="kanji-layout">
              <div className="kanji-bank">{KANJI.map((item,index) => <button key={item.char} className={`${kanjiIndex === index ? "selected" : ""} ${completed.includes(`kanji-${item.char}`) ? "learned" : ""}`} onClick={() => setKanjiIndex(index)}><b>{item.char}</b><span>{item.meaning}</span></button>)}</div>
              <article className="kanji-detail">
                <div className="kanji-visual"><img src={`/strokes/${activeKanji.char.codePointAt(0)!.toString(16).padStart(5,"0")}.svg?v=2`} alt={`Urutan goresan kanji ${activeKanji.char}`} /></div>
                <div className="kanji-info"><span className="grammar-badge">{activeKanji.level}</span><h2>{activeKanji.char} <small>{activeKanji.meaning}</small></h2><dl><div><dt>On&apos;yomi</dt><dd>{activeKanji.onyomi}</dd></div><div><dt>Kun&apos;yomi</dt><dd>{activeKanji.kunyomi}</dd></div></dl><div className="kanji-word"><small>CONTOH KATA</small><button onClick={() => speakJapanese(activeKanji.word)} aria-label="Dengarkan kata">{playIcon(activeKanji.word)}</button><b>{activeKanji.word}</b><span>{activeKanji.reading} · {activeKanji.wordMeaning}</span></div><button className="primary" onClick={() => markComplete(`kanji-${activeKanji.char}`,"Kanji ditambahkan ke ingatan!")}>{completed.includes(`kanji-${activeKanji.char}`) ? "Sudah dikuasai ✓" : "Tandai dikuasai"}</button></div>
              </article>
            </div>
          </div>}

          {view === "mendengar" && <div className="listening-view">
            <div className="section-title"><div><p>LATIHAN MENDENGAR</p><h2>Latih telinga sebelum melihat teks</h2></div><span>Dengarkan dua kali, jawab, baru buka transkrip.</span></div>
            <div className="listening-layout">
              <div className="episode-list">{LISTENING.map((lesson,index) => <button className={listeningIndex === index ? "selected" : ""} onClick={() => {setListeningIndex(index);setShowListeningText(false)}} key={lesson.id}><span>0{index+1}</span><div><b>{lesson.title}</b><small>{lesson.level}</small></div>{completed.includes(`listen-${lesson.id}`) && <i>✓</i>}</button>)}</div>
              <article className="audio-lesson"><span className="grammar-badge">{activeListening.level}</span><h2>{activeListening.title}</h2><p className="listen-instruction">Tutup mata, lalu dengarkan percakapan berikut.</p><div className="audio-controls"><button onClick={() => speakJapanese(activeListening.jp,.58)}><span>{playIcon(activeListening.jp,.58)}</span><b>Putar pelan</b><small>0.75×</small></button><button onClick={() => speakJapanese(activeListening.jp,.9)}><span>{playIcon(activeListening.jp,.9)}</span><b>Putar normal</b><small>1×</small></button></div><div className="listen-question"><small>CEK PEMAHAMAN</small><h3>{activeListening.question}</h3><details><summary>Lihat jawaban</summary><p>{activeListening.answer}</p></details></div><button className="transcript-toggle" onClick={() => setShowListeningText((old) => !old)}>{showListeningText ? "Sembunyikan transkrip" : "Buka transkrip setelah menjawab"}</button>{showListeningText && <div className="transcript"><b>{activeListening.jp}</b><span>{activeListening.romaji}</span><p>{activeListening.meaning}</p></div>}<button className="primary complete-lesson" onClick={() => markComplete(`listen-${activeListening.id}`,"Latihan listening selesai!")}>Selesaikan latihan</button></article>
            </div>
          </div>}

          {view === "percakapan" && <div className="conversation-view">
            <div className="section-title"><div><p>会話 · KAIWA VIDEO</p><h2>Lihat cara orang benar-benar berbicara</h2></div><span>Video resmi Japan Foundation · level N5–N4.</span></div>
            <div className="kaiwa-source-note"><span>映像</span><div><b>Tonton → tangkap maksud → tirukan → ganti dengan ceritamu.</b><p>Jangan mengejar setiap kata pada tontonan pertama. Fokus pada situasi, ekspresi wajah, dan satu frasa yang bisa langsung kamu pakai.</p></div><a href={activeKaiwa.source} target="_blank" rel="noreferrer">Sumber resmi ↗</a></div>
            <div className="kaiwa-tabs">{KAIWA_VIDEOS.map((video,index)=><button key={video.id} className={kaiwaIndex===index?"selected":""} onClick={()=>setKaiwaIndex(index)}><span>{video.level}</span><b>{video.title}</b><small>{video.scene}</small></button>)}</div>
            <article className="kaiwa-player">
              <div className="video-shell"><video key={activeKaiwa.id} controls preload="metadata" poster={activeKaiwa.poster}><source src={activeKaiwa.video} type="video/mp4"/>Browser kamu tidak mendukung video HTML5.</video><div className="video-credit">© The Japan Foundation · Erin&apos;s Challenge</div></div>
              <div className="kaiwa-study"><span className="grammar-badge">{activeKaiwa.level} · {activeKaiwa.lesson}</span><h2>{activeKaiwa.title}</h2><p>{activeKaiwa.goal}</p><div className="kaiwa-phrases"><small>FRASE YANG DITANGKAP</small>{activeKaiwa.phrases.map((phrase)=><button key={phrase.jp} onClick={()=>speakJapanese(phrase.jp)}><span>{playIcon(phrase.jp)}</span><b>{phrase.jp}</b><em>{phrase.meaning}</em></button>)}</div><div className="shadowing-task"><small>TANTANGAN SHADOWING</small><p>{activeKaiwa.challenge}</p></div><div className="kaiwa-links"><a className="outline" href={activeKaiwa.script} target="_blank" rel="noreferrer">Naskah Bahasa Indonesia ↗</a><button className="primary" onClick={()=>markComplete(`kaiwa-${activeKaiwa.id}`,"Latihan kaiwa selesai!")}>{completed.includes(`kaiwa-${activeKaiwa.id}`)?"Kaiwa selesai ✓":"Saya sudah menirukan"}</button></div></div>
            </article>
            <div className="subsection-title"><div><small>LANJUTKAN TANPA VIDEO</small><h3>Role-play dua arah</h3></div><span>Putar peran A, lalu jawab sebagai B.</span></div>
            <div className="scenario-tabs">{CONVERSATIONS.map((scenario,index) => <button className={conversationIndex === index ? "selected" : ""} onClick={() => setConversationIndex(index)} key={scenario.id}><span>{scenario.place}</span><b>{scenario.title}</b></button>)}</div>
            <article className="dialogue-card"><div className="dialogue-head"><div><small>ROLE-PLAY</small><h2>{activeConversation.title}</h2></div><button className="outline" onClick={() => activeConversation.lines.forEach((line,index) => window.setTimeout(() => speakJapanese(line.jp,.78),index*2600))}>▶ Putar semua</button></div><div className="dialogue-lines">{activeConversation.lines.map((line,index) => <div className={line.who === "A" ? "speaker-a" : "speaker-b"} key={`${line.who}-${index}`}><span>{line.who}</span><button onClick={() => speakJapanese(line.jp)} aria-label="Dengarkan kalimat">{playIcon(line.jp)}</button><p><b>{line.jp}</b><em>{line.romaji}</em><small>{line.id}</small></p></div>)}</div><div className="role-tip"><b>Giliranmu</b><p>Putar kalimat A, jeda, lalu ucapkan kalimat B tanpa membaca romaji.</p><button className="primary" onClick={() => markComplete(`conversation-${activeConversation.id}`,"Skenario percakapan selesai!")}>{completed.includes(`conversation-${activeConversation.id}`) ? "Latihan selesai ✓" : "Saya sudah role-play"}</button></div></article>
          </div>}

          {view === "tanya" && <div className="help-view">
            <div className="section-title"><div><p>KETIKA BINGUNG, MULAI DI SINI</p><h2>Tanya & benar-benar paham</h2></div><span>Jawaban untuk kebingungan yang paling sering dialami pemula.</span></div>
            <div className="help-search"><span>?</span><div><label htmlFor="help-query">Apa yang belum kamu mengerti?</label><input id="help-query" value={helpQuery} onChange={(event)=>{setHelpQuery(event.target.value);setHelpIndex(0)}} placeholder="Contoh: bedanya wa dan ga, ni atau de, bentuk te..."/></div><b>{helpResults.length} jawaban</b></div>
            {helpResults.length > 0 ? <div className="help-layout"><div className="help-list">{helpResults.map((item,index)=><button key={item.id} className={helpIndex===index?"selected":""} onClick={()=>setHelpIndex(index)}><span>{item.category}</span><b>{item.question}</b><small>{item.short}</small></button>)}</div><article className="help-answer"><span className="grammar-badge">{activeHelp.category} · PENJELASAN PEMULA</span><h2>{activeHelp.question}</h2><p className="help-short">{activeHelp.short}</p><div className="answer-core"><small>JAWABAN INTI</small><p>{activeHelp.answer}</p></div><div className="help-examples"><small>LIHAT PERBEDAANNYA</small>{activeHelp.examples.map((example)=><button key={example.jp} onClick={()=>speakJapanese(example.jp)}><span>{playIcon(example.jp)}</span><b>{example.jp}</b><em>{example.meaning}</em></button>)}</div><div className="related-path"><span>LANJUT BELAJAR</span><p>{activeHelp.related}</p></div><button className="primary" onClick={()=>markComplete(`help-${activeHelp.id}`,"Kebingungan ini sudah kamu pecahkan!")}>{completed.includes(`help-${activeHelp.id}`)?"Sudah paham ✓":"Sekarang saya paham"}</button></article></div> : <div className="empty-help"><span>迷</span><h3>Belum ada jawaban yang cocok</h3><p>Coba kata yang lebih pendek seperti “partikel”, “bentuk te”, “angka”, atau “percakapan”.</p><button className="outline" onClick={()=>setHelpQuery("")}>Lihat semua pertanyaan</button></div>}
          </div>}

          {view === "situasi" && <div className="practical-view">
            <div className="section-title"><div><p>JEPANG UNTUK DUNIA NYATA</p><h2>Belajar lewat misi, bukan bab</h2></div><span>Selesaikan satu kebutuhan komunikasi setiap sesi.</span></div>
            <div className="can-do-banner"><span>できる</span><div><b>Target Can-do</b><p>Setelah satu pelajaran, kamu harus bisa melakukan sesuatu dalam bahasa Jepang—bukan hanya mengenali rumusnya.</p></div></div>
            <div className="practical-layout"><div className="mission-list">{PRACTICAL_LESSONS.map((lesson,index)=><button key={lesson.id} className={`${practicalIndex===index?"selected":""} ${completed.includes(`practical-${lesson.id}`)?"learned":""}`} onClick={()=>setPracticalIndex(index)}><span>{lesson.level}</span><div><b>{lesson.title}</b><small>{lesson.place}</small></div><i>{completed.includes(`practical-${lesson.id}`)?"✓":"→"}</i></button>)}</div>
              <article className="mission-card"><div className="mission-head"><span>{activePractical.place}</span><h2>{activePractical.title}</h2><p>{activePractical.canDo}</p></div><div className="mission-task"><small>MISIMU</small><p>{activePractical.mission}</p></div><div className="useful-phrases"><h3>Kalimat yang benar-benar dipakai</h3>{activePractical.phrases.map((phrase,index)=><div key={phrase.jp}><span>{index+1}</span><button onClick={()=>speakJapanese(phrase.jp,.76)}>{playIcon(phrase.jp,.76)}</button><p><b>{phrase.jp}</b><em>{phrase.romaji}</em><small>{phrase.meaning}</small></p></div>)}</div><div className="mission-insights"><div><small>PARTIKEL DALAM AKSI</small><p>{activePractical.particle}</p></div><div><small>CARA TERDENGAR NATURAL</small><p>{activePractical.tip}</p></div></div><div className="mission-actions"><button className="outline" onClick={()=>activePractical.phrases.forEach((phrase,index)=>window.setTimeout(()=>speakJapanese(phrase.jp,.75),index*3000))}>▶ Dengarkan dialog</button><button className="primary" onClick={()=>markComplete(`practical-${activePractical.id}`,"Misi komunikasi selesai!")}>{completed.includes(`practical-${activePractical.id}`)?"Misi selesai ✓":"Saya bisa melakukannya"}</button></div></article>
            </div>
          </div>}

          {view === "belajar" && <>
            <div className="section-title">
              <div><p>MATERI LENGKAP</p><h2>{script === "hiragana" ? "Hiragana" : "Katakana"}</h2></div>
              <span>{kana.length} bentuk pada bagian ini</span>
            </div>
            <div className="kana-set-tabs" role="tablist" aria-label="Jenis bunyi kana">
              {(Object.keys(KANA_SET_INFO) as KanaSet[]).map((set)=><button role="tab" aria-selected={kanaSet===set} className={kanaSet===set?"selected":""} key={set} onClick={()=>{setKanaSet(set);setSelected(0)}}><b>{KANA_SET_INFO[set].label}</b><span>{set === "basic" ? "あ" : set === "voiced" ? "が" : set === "contracted" ? "きゃ" : "っ"}</span></button>)}
            </div>
            <div className="kana-set-note"><b>{KANA_SET_INFO[kanaSet].label}</b><span>{KANA_SET_INFO[kanaSet].hint}</span></div>
            <article className="guided-kana" aria-label="Mode kelas hiragana">
              <div className="guided-steps"><span className="active">1 · LIHAT</span><span>2 · DENGAR</span><span>3 · IKUTI</span><span>4 · GABUNGKAN</span></div>
              <div className="guided-main">
                <div className="guided-symbol">{active.char}</div>
                <div className="guided-coach"><small>MODE KELAS · ULANGI 3 KALI</small><h3>{active.romaji}</h3><p>{activeBreakdown}</p><div><button className="primary" onClick={()=>speak(active)}>{playIcon(kanaAudioText(active))} Dengar pelafalan</button><button className="outline" onClick={()=>{speak(active);setToast("Ucapkan keras-keras setelah suara berhenti");window.setTimeout(()=>setToast(""),1800)}}>Saya ikuti</button></div></div>
                <div className="guided-example"><small>COBA BACA</small><b>{example[0]}</b><span>{example[1]}</span><p>{example[2]}</p><button onClick={()=>speakJapanese(example[0])}>{playIcon(example[0])} Dengarkan kata</button></div>
              </div>
              <div className="guided-nav" aria-label="Navigasi huruf kelas">
                <button className="outline" onClick={()=>setSelected((selected - 1 + kana.length) % kana.length)} disabled={selected === 0}>← Kembali</button>
                <span><b>{selected + 1}</b> / {kana.length}<small>{active.char} · {active.romaji}</small></span>
                <button className="primary" onClick={()=>setSelected((selected + 1) % kana.length)}>{selected === kana.length - 1 ? "Ulang dari awal ↻" : "Berikutnya →"}</button>
              </div>
            </article>
            <div className="learn-layout">
              <div className="kana-chart">
                {groups.map((group) => <div className="kana-row" key={group.name}>
                  <b>{group.name}</b>
                  {group.items.map((item, itemIndex) => {
                    const index = group.start + itemIndex;
                    return <button key={item.char} className={`${selected === index ? "current" : ""} ${learned.includes(item.char) ? "learned" : ""}`} onClick={() => setSelected(index)} aria-label={`${item.char}, ${item.romaji}`}>
                      <span>{item.char}</span><small>{item.romaji}</small>
                    </button>;
                  })}
                </div>)}
              </div>
              <article className="detail-card">
                <div className="detail-top"><span>HURUF PILIHAN</span><button onClick={() => speak()} aria-label={`Dengarkan ${active.char}`}>{playIcon(kanaAudioText(active))} Dengarkan</button></div>
                <div className="big-kana">{active.char}</div>
                <div className="reading">dibaca <strong>“{active.romaji}”</strong></div>
                <div className="example">
                  <small>CONTOH KATA</small>
                  <div><b>{script === "katakana" ? example[0].replace(/[\u3040-\u309f]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60)) : example[0]}</b><span>{example[1]} · {example[2]}</span></div>
                </div>
                <div className="detail-actions">
                  <button className="outline" disabled={[...active.char].length > 1} title={[...active.char].length > 1 ? "Pelajari tiap huruf penyusunnya di bagian Dasar" : undefined} onClick={() => { setView("latihan"); clearCanvas(); }}>{[...active.char].length > 1 ? "Gabungan bunyi" : "Latihan tulis"}</button>
                  <button className="primary" onClick={markLearned}>{learned.includes(active.char) ? "Sudah dikuasai ✓" : "Tandai dikuasai"}</button>
                </div>
              </article>
            </div>
          </>}

          {view === "kuisgambar" && <div className="comic-quiz-view">
            {!comicFinished ? <>
              <div className="section-title comic-title"><div><p>KUIS KANA BERGAMBAR</p><h2>{comicMode === "word-to-image" ? "Baca kata, pilih adegannya" : "Lihat adegan, pilih katanya"}</h2></div><span>24 soal · 12 gambar orisinal · 2 jenis latihan</span></div>
              <div className="comic-stage"><span>TAHAP {comicMode === "word-to-image" ? "1" : "2"} / 2</span><p>{comicMode === "word-to-image" ? "Hubungkan tulisan kana dengan gambarnya." : "Kenali gambar lalu ingat kata Jepangnya."}</p></div>
              <div className="comic-session-meta"><span>SOAL {comicIndex + 1} DARI {COMIC_ROUND_COUNT}</span><strong>{comicScore} benar</strong></div>
              <div className="quiz-progress"><i style={{width:`${((comicIndex + 1) / COMIC_ROUND_COUNT) * 100}%`}} /></div>
              <section className="comic-quiz" aria-label="Kuis kana bergambar">
                <div className="comic-heading"><div><small>{comicMode === "word-to-image" ? "BACA TANPA ROMAJI" : "INGAT KATA DARI GAMBAR"}</small><h3>{comicMode === "word-to-image" ? <>Mana gambar untuk 「{activeComic.word}」?</> : <>Apa kata Jepang untuk gambar ini?</>}</h3><p>{comicMode === "word-to-image" ? "Dengarkan bunyinya bila perlu, lalu pilih satu adegan." : "Pilih tulisan kana yang cocok. Audio terbuka setelah menjawab."}</p></div>{comicMode === "word-to-image" ? <button className="outline" onClick={()=>speakJapanese(activeComic.word)}>{playIcon(activeComic.word)} Putar suara</button> : comicAnswer ? <button className="outline" onClick={()=>speakJapanese(activeComic.word)}>{playIcon(activeComic.word)} Dengarkan jawaban</button> : <span className="audio-locked">🔒 Audio setelah menjawab</span>}</div>
                {comicMode === "word-to-image" ? <div className="comic-options">
                  {comicChoices.map((scene)=><button key={scene.id} disabled={comicAnswer!==null} className={comicAnswer===scene.id?(scene.id===activeComic.id?"correct":"wrong"):comicAnswer&&scene.id===activeComic.id?"correct":""} onClick={()=>{setComicAnswer(scene.id);if(scene.id===activeComic.id)setComicCorrect((items)=>items.includes(comicIndex)?items:[...items,comicIndex])}}><img src={scene.image} alt={scene.alt}/><span>{comicAnswer?(scene.id===activeComic.id?`${scene.word} = ${scene.meaning}`:scene.id===comicAnswer?"Belum tepat":"Pilihan lain"):`Pilihan ${scene.alt.toLowerCase()}`}</span></button>)}
                </div> : <div className="comic-picture-word">
                  <img src={activeComic.image} alt={activeComic.alt}/>
                  <div className="comic-word-options">{comicChoices.map((scene,index)=><button key={scene.id} disabled={comicAnswer!==null} className={comicAnswer===scene.id?(scene.id===activeComic.id?"correct":"wrong"):comicAnswer&&scene.id===activeComic.id?"correct":""} onClick={()=>{setComicAnswer(scene.id);if(scene.id===activeComic.id)setComicCorrect((items)=>items.includes(comicIndex)?items:[...items,comicIndex])}}><kbd>{index+1}</kbd><b>{scene.word}</b>{comicAnswer&&scene.id===activeComic.id?<span>{scene.romaji} · {scene.meaning}</span>:null}</button>)}</div>
                </div>}
                {comicAnswer && <div className={`comic-feedback ${comicAnswer===activeComic.id?"correct":""}`}>{comicAnswer===activeComic.id?`Benar! ${activeComic.word} dibaca ${activeComic.romaji}, artinya ${activeComic.meaning}.`:`Belum tepat. Petunjuk: ${activeComic.hint}`}</div>}
              </section>
              <div className="comic-navigation">
                <button className="outline" disabled={comicIndex===0} onClick={()=>{setComicIndex((index)=>Math.max(0,index-1));setComicAnswer(null)}}>← Kembali</button>
                <button className="primary" disabled={!comicAnswer} onClick={()=>{if(comicIndex===COMIC_ROUND_COUNT-1){setComicFinished(true);markComplete("comic-quiz","Kuis gambar selesai!")}else{setComicIndex((index)=>index+1);setComicAnswer(null)}}}>{comicIndex===COMIC_ROUND_COUNT-1?"Lihat hasil":"Soal berikutnya →"}</button>
              </div>
            </> : <div className="result-card comic-result"><span className="result-seal">絵</span><p>SESI GAMBAR SELESAI</p><h2>{comicScore}/{COMIC_ROUND_COUNT} benar</h2><p>{comicScore===COMIC_ROUND_COUNT?"Sempurna! Kamu bisa menghubungkan gambar, bunyi, dan tulisan kana.":"Bagus. Ulangi adegan yang masih tertukar agar bunyi dan maknanya melekat."}</p><button className="primary" onClick={()=>{setComicIndex(0);setComicCorrect([]);setComicAnswer(null);setComicFinished(false)}}>Ulangi 24 soal</button><button className="outline" onClick={()=>setView("belajar")}>Kembali ke Kana</button></div>}
          </div>}

          {view === "latihan" && <div className="writing-view">
            <div className="section-title"><div><p>LATIHAN MENULIS</p><h2>Tulis {active.char}</h2></div><span>Ikuti bentuk samar, lalu ulangi tanpa panduan.</span></div>
            <div className="writing-grid">
              <div className="writing-board">
                <div className="canvas-toolbar">
                  <span>Area latihan</span>
                  <button className={showStrokeGuide ? "guide-on" : ""} onClick={() => setShowStrokeGuide((value) => !value)} aria-pressed={showStrokeGuide}>
                    {showStrokeGuide ? "● Angka urutan aktif" : "○ Tampilkan angka urutan"}
                  </button>
                </div>
                <div className="canvas-wrap">
                  {showStrokeGuide
                    ? <img className="stroke-overlay" src={strokeAsset} alt="" aria-hidden="true" />
                    : <div className="guide-kana">{active.char}</div>}
                  <canvas ref={canvasRef} onPointerDown={beginDraw} onPointerMove={draw} onPointerUp={() => drawing.current = false} onPointerCancel={() => drawing.current = false} />
                  <div className="crosshair" aria-hidden="true" />
                </div>
              </div>
              <div className="writing-help">
                <div className="stroke-order-card">
                  <div className="stroke-copy"><span className="step-number">URUTAN GORESAN</span><h3>Mulai dari angka 1</h3><p>Letakkan pena di dekat angka <strong>1</strong>, ikuti garisnya, lalu lanjutkan ke angka berikutnya.</p></div>
                  <div className="stroke-diagram"><img src={strokeAsset} alt={`Urutan goresan huruf ${active.char}, dimulai dari angka 1`} /></div>
                </div>
                <div className="direction-note"><b>1 → 2 → 3</b><span>Angkat pena setiap berpindah ke nomor berikutnya.</span></div>
                <span className="step-number">PRAKTIK</span><h3>Jiplak perlahan</h3><p>Gunakan jari, mouse, atau pena digital. Matikan “angka urutan” setelah kamu mulai hafal.</p>
                <div className="writing-buttons"><button className="outline" onClick={clearCanvas}>Hapus tulisan</button><button className="primary" onClick={markLearned}>Selesai latihan</button></div>
              </div>
            </div>
            <div className="character-strip" aria-label="Pilih huruf latihan">
              {kana.map((item, i) => <button key={item.char} className={selected === i ? "current" : ""} onClick={() => { setSelected(i); clearCanvas(); }}>{item.char}<small>{item.romaji}</small></button>)}
            </div>
          </div>}

          {view === "kuis" && <div className="quiz-view">
            {!finished ? <>
              <div className="quiz-meta"><span>SOAL {quizIndex + 1} DARI {quiz.length || 10}</span><strong>{score} benar</strong></div>
              <div className="quiz-progress"><i style={{ width: `${((quizIndex + 1) / (quiz.length || 10)) * 100}%` }} /></div>
              {quiz[quizIndex] && <div className={`question-card ${answerState}`}>
                <p>Bagaimana cara membaca huruf ini?</p>
                <button className="sound-round" onClick={() => speak(quiz[quizIndex])} aria-label="Dengarkan huruf">{playIcon(kanaAudioText(quiz[quizIndex]))}</button>
                <div className="question-kana">{quiz[quizIndex].char}</div>
                <div className="choices">
                  {choices.map((choice, i) => <button key={choice} onClick={() => answer(choice)} disabled={answerState !== "idle"}><kbd>{i + 1}</kbd>{choice}</button>)}
                </div>
                {answerState !== "idle" && <div className="feedback">{answerState === "correct" ? "Benar! いいですね ✦" : `Belum tepat. Jawabannya “${quiz[quizIndex].romaji}”`}</div>}
              </div>}
            </> : <div className="result-card">
              <span className="result-seal">合格</span><p>SESI SELESAI</p><h2>{score}/10 benar</h2>
              <p>{score >= 8 ? "Hebat! Ingatan kanamu makin kuat." : "Awal yang bagus. Ulangi lagi agar makin melekat."}</p>
              <button className="primary" onClick={startQuiz}>Ulangi kuis</button><button className="outline" onClick={() => setView("belajar")}>Kembali belajar</button>
            </div>}
          </div>}
        </div>
      </section>

      <footer><span><b>かな</b> KanaNihon</span><p>Dibuat untuk siapa pun yang ingin mulai. Diagram goresan: <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noreferrer">KanjiVG</a> (CC BY-SA 3.0).</p></footer>
      <audio ref={audioRef} preload="none" aria-hidden="true" />
      {toast && <div className="toast" role="status">{toast}</div>}
    </main>
  );
}
