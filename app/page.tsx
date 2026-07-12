"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CONVERSATIONS, GRAMMAR, KANJI, LISTENING, PARTICLES, PRACTICAL_LESSONS, ROADMAP, SOURCES, VOCABULARY } from "./learning-data";

type Kana = { char: string; romaji: string };
type Script = "hiragana" | "katakana";
type View = "kurikulum" | "belajar" | "latihan" | "kuis" | "kosakata" | "tatabahasa" | "partikel" | "kanji" | "mendengar" | "percakapan" | "situasi";

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
  const [showWord, setShowWord] = useState(false);
  const [grammarIndex, setGrammarIndex] = useState(0);
  const [kanjiIndex, setKanjiIndex] = useState(0);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [showListeningText, setShowListeningText] = useState(false);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [particleIndex, setParticleIndex] = useState(0);
  const [particleAnswer, setParticleAnswer] = useState<string | null>(null);
  const [practicalIndex, setPracticalIndex] = useState(0);
  const [audioStatus, setAudioStatus] = useState<"ready"|"playing"|"error">("ready");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const kana = script === "hiragana" ? HIRAGANA : KATAKANA;
  const active = kana[selected] ?? kana[0];
  const scriptLearned = learned.filter((x) => kana.some((k) => k.char === x)).length;

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("kananihon-progress") || "{}");
      if (Array.isArray(saved.learned)) setLearned(saved.learned);
      if (typeof saved.streak === "number") setStreak(saved.streak);
      if (Array.isArray(saved.completed)) setCompleted(saved.completed);
      if (Array.isArray(saved.learnedWords)) setLearnedWords(saved.learnedWords);
    } catch { /* mulai baru */ }
  }, []);

  useEffect(() => {
    localStorage.setItem("kananihon-progress", JSON.stringify({ learned, streak, completed, learnedWords }));
  }, [learned, streak, completed, learnedWords]);

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
  const example = EXAMPLES[active.romaji];
  const strokeAsset = `/strokes/${active.char.codePointAt(0)!.toString(16).padStart(5, "0")}.svg`;

  function audioId(text: string) {
    let hash = 2166136261;
    for (let index = 0; index < text.length; index++) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16);
  }

  function speakWithSystemVoice(text: string, rate: number) {
    if (!("speechSynthesis" in window)) { setAudioStatus("error"); return; }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = rate;
    const japaneseVoice = speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("ja"));
    if (japaneseVoice) utterance.voice = japaneseVoice;
    utterance.onstart = () => setAudioStatus("playing");
    utterance.onend = () => setAudioStatus("ready");
    utterance.onerror = () => setAudioStatus("error");
    speechSynthesis.speak(utterance);
  }

  function speakJapanese(text: string, rate = .72) {
    const audio = audioRef.current;
    if (!audio) { speakWithSystemVoice(text, rate); return; }
    audio.pause();
    audio.src = `/audio/${audioId(text)}.mp3`;
    audio.playbackRate = Math.max(.7, Math.min(1.2, rate / .76));
    audio.onplay = () => setAudioStatus("playing");
    audio.onended = () => setAudioStatus("ready");
    audio.onerror = () => speakWithSystemVoice(text, rate);
    audio.play().catch(() => speakWithSystemVoice(text, rate));
  }

  function speak(item = active) { speakJapanese(item.char); }

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

  const groups = useMemo(() => GROUPS.map((name, i) => ({
    name,
    items: kana.slice(GROUP_STARTS[i], GROUP_STARTS[i + 1] ?? kana.length),
    start: GROUP_STARTS[i],
  })), [kana]);
  const wordCategories = ["Semua", ...Array.from(new Set(VOCABULARY.map((word) => word.category)))];
  const filteredWords = wordCategory === "Semua" ? VOCABULARY : VOCABULARY.filter((word) => word.category === wordCategory);
  const activeWord = filteredWords[wordIndex % filteredWords.length];
  const activeGrammar = GRAMMAR[grammarIndex];
  const activeKanji = KANJI[kanjiIndex];
  const activeListening = LISTENING[listeningIndex];
  const activeConversation = CONVERSATIONS[conversationIndex];
  const activeParticle = PARTICLES[particleIndex];
  const activePractical = PRACTICAL_LESSONS[practicalIndex];
  const particleQuestion = activeParticle.uses[0].example.replace(activeParticle.char,"＿＿");
  const particleChoices = [activeParticle.char, PARTICLES[(particleIndex+3)%PARTICLES.length].char, PARTICLES[(particleIndex+7)%PARTICLES.length].char, PARTICLES[(particleIndex+11)%PARTICLES.length].char].sort();
  const learningPoints = learned.length + learnedWords.length + completed.length;
  const overallPercent = Math.min(100, Math.round((learningPoints / 120) * 100));
  const viewTitle: Record<View, string> = {
    kurikulum:"Jalur belajar", belajar:"Kana", latihan:"Menulis", kuis:"Kuis kana", kosakata:"Kosakata", tatabahasa:"Tata bahasa", partikel:"Partikel", kanji:"Kanji", mendengar:"Mendengar", percakapan:"Percakapan", situasi:"Situasi nyata"
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
          <button className={view === "belajar" || view === "latihan" ? "active" : ""} onClick={() => setView("belajar")}>Kana</button>
          <button className={["kosakata","tatabahasa","partikel","kanji","situasi"].includes(view) ? "active" : ""} onClick={() => setView("kosakata")}>Materi</button>
        </nav>
        <div className="streak" title="Rangkaian belajar"><span>火</span><strong>{streak}</strong> hari</div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">LANGKAH KECIL, SETIAP HARI</p>
          <h1>Dari huruf pertama.<br/><em>Sampai benar-benar paham.</em></h1>
          <p className="hero-copy">Satu tempat untuk belajar aksara, kosakata, tata bahasa, kanji, menyimak, dan percakapan—bertahap dari nol menuju mahir.</p>
        </div>
        <div className="hero-kana" aria-hidden="true"><span>あ</span><i>ア</i><b>か</b></div>
      </section>

      <section className="workspace">
        <aside>
          <div className="course-label">KURIKULUM</div>
          <div className="course-menu" aria-label="Pilih materi belajar">
            <button className={view === "kurikulum" ? "selected" : ""} onClick={() => setView("kurikulum")}><span>道</span><i>Jalur belajar</i></button>
            <button className={view === "belajar" || view === "latihan" ? "selected" : ""} onClick={() => setView("belajar")}><span>あ</span><i>Kana & menulis</i></button>
            <button className={view === "kosakata" ? "selected" : ""} onClick={() => setView("kosakata")}><span>言</span><i>Kosakata</i></button>
            <button className={view === "tatabahasa" ? "selected" : ""} onClick={() => setView("tatabahasa")}><span>文</span><i>Tata bahasa</i></button>
            <button className={view === "partikel" ? "selected" : ""} onClick={() => setView("partikel")}><span>助</span><i>Partikel</i></button>
            <button className={view === "kanji" ? "selected" : ""} onClick={() => setView("kanji")}><span>字</span><i>Kanji</i></button>
            <button className={view === "mendengar" ? "selected" : ""} onClick={() => setView("mendengar")}><span>聴</span><i>Mendengar</i></button>
            <button className={view === "percakapan" ? "selected" : ""} onClick={() => setView("percakapan")}><span>話</span><i>Percakapan</i></button>
            <button className={view === "situasi" ? "selected" : ""} onClick={() => setView("situasi")}><span>旅</span><i>Situasi nyata</i></button>
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
          <button className={`audio-check ${audioStatus}`} onClick={() => speakJapanese("こんにちは。日本語の勉強を始めましょう。",.76)}><span>{audioStatus === "playing" ? "♪" : audioStatus === "error" ? "!" : "▶"}</span><i>{audioStatus === "playing" ? "Suara sedang diputar" : audioStatus === "error" ? "Suara tidak tersedia" : "Tes suara Jepang"}</i></button>
          <p className="free-note">✓ Gratis · Tanpa akun · Progres tersimpan</p>
        </aside>

        <div className="content-panel">
          {view === "kurikulum" && <div className="curriculum-view">
            <div className="section-title"><div><p>KURIKULUM LENGKAP</p><h2>Jalur menuju mahir</h2></div><span>Mulai dari fondasi, naik sesuai kemampuanmu.</span></div>
            <div className="overview-grid">
              <div><small>AKTIVITAS SELESAI</small><strong>{learningPoints}</strong><span>tersimpan di perangkat</span></div>
              <div><small>KOSAKATA DIKUASAI</small><strong>{learnedWords.length}<i>/30</i></strong><span>target paket pemula</span></div>
              <div><small>KANA DIKUASAI</small><strong>{learned.length}<i>/92</i></strong><span>Hiragana + Katakana</span></div>
            </div>
            <article className="continue-card">
              <div className="continue-symbol">あ</div>
              <div><small>LANJUTKAN HARI INI · 10 MENIT</small><h3>Fondasi: kuasai bunyi dan aksara</h3><p>Baca 5 kana, pelajari 5 kosakata, lalu tutup dengan satu latihan listening.</p></div>
              <button className="primary" onClick={() => setView(learned.length < 20 ? "belajar" : "kosakata")}>Mulai sesi →</button>
            </article>
            <div className="roadmap-heading"><div><p>ROADMAP KEMAMPUAN</p><h3>Enam tahap, satu arah yang jelas</h3></div><span>Dasar</span><i></i><span>Mahir</span></div>
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

          {view === "kosakata" && <div className="vocab-view">
            <div className="section-title"><div><p>KOSAKATA PEMULA</p><h2>Bangun perbendaharaan kata</h2></div><span>Dengar, tebak, lalu lihat penggunaannya.</span></div>
            <div className="category-tabs">{wordCategories.map((category) => <button key={category} className={wordCategory === category ? "selected" : ""} onClick={() => {setWordCategory(category);setWordIndex(0);setShowWord(false)}}>{category}</button>)}</div>
            <div className="vocab-layout">
              <article className={`flashcard ${showWord ? "revealed" : ""}`} onClick={() => setShowWord(true)}>
                <div className="card-label"><span>{activeWord.category}</span><b>{wordIndex + 1}/{filteredWords.length}</b></div>
                <button className="sound-round vocab-sound" onClick={(event) => {event.stopPropagation();speakJapanese(activeWord.japanese)}} aria-label={`Dengarkan ${activeWord.japanese}`}>♪</button>
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

          {view === "tatabahasa" && <div className="grammar-view">
            <div className="section-title"><div><p>TATA BAHASA</p><h2>Susun kalimat dengan yakin</h2></div><span>Pahami fungsi, bukan sekadar menghafal rumus.</span></div>
            <div className="lesson-layout">
              <div className="lesson-list">{GRAMMAR.map((lesson,index) => <button key={lesson.id} className={grammarIndex === index ? "selected" : ""} onClick={() => setGrammarIndex(index)}><span>{lesson.level}</span><div><b>{lesson.title}</b><small>{lesson.meaning}</small></div>{completed.includes(`grammar-${lesson.id}`) && <i>✓</i>}</button>)}</div>
              <article className="grammar-card">
                <div className="grammar-badge">{activeGrammar.level} · POLA {grammarIndex + 1}</div><h2>{activeGrammar.title}</h2><p className="grammar-meaning">{activeGrammar.meaning}</p>
                <div className="pattern-box"><small>POLA</small><strong>{activeGrammar.pattern}</strong></div>
                <p className="grammar-explain">{activeGrammar.explanation}</p>
                <div className="example-stack"><small>CONTOH</small>{activeGrammar.examples.map((example) => <div key={example.jp}><button onClick={() => speakJapanese(example.jp)} aria-label="Dengarkan contoh">♪</button><p><b>{example.jp}</b><span>{example.romaji}</span><em>{example.id}</em></p></div>)}</div>
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
                <div className="particle-uses"><h3>Kapan digunakan?</h3>{activeParticle.uses.map((use,index)=><div className="particle-use" key={use.label}><span>{index+1}</span><div><small>{use.label}</small><code>{use.pattern}</code><button onClick={()=>speakJapanese(use.example)} aria-label={`Dengarkan ${use.example}`}>♪</button><b>{use.example}</b><em>{use.romaji}</em><p>{use.meaning}</p>{use.note&&<div className="use-note">{use.note}</div>}</div></div>)}</div>
                {activeParticle.contrast&&<div className="contrast-box"><span>BEDAKAN</span><p>{activeParticle.contrast}</p></div>}
                <div className="particle-practice"><div><small>CEK PEMAHAMAN</small><h3>{particleQuestion}</h3><p>{activeParticle.uses[0].meaning}</p></div><div className="particle-options">{particleChoices.map((choice)=><button key={choice} className={particleAnswer===choice?(choice===activeParticle.char?"correct":"wrong"):""} onClick={()=>setParticleAnswer(choice)}>{choice}</button>)}</div>{particleAnswer&&<strong>{particleAnswer===activeParticle.char?"Benar—fungsi dan konteksnya cocok.":`Belum tepat. Jawabannya ${activeParticle.char}.`}</strong>}</div>
                <button className="primary complete-lesson" onClick={()=>markComplete(`particle-${activeParticle.id}`,`Partikel ${activeParticle.char} sudah dipahami!`)}>{completed.includes(`particle-${activeParticle.id}`)?"Sudah dipahami ✓":"Tandai sudah paham"}</button>
              </article>
            </div>
          </div>}

          {view === "kanji" && <div className="kanji-view">
            <div className="section-title"><div><p>KANJI DASAR</p><h2>Kenali makna, bunyi, dan bentuk</h2></div><span>Pelajari kanji lewat kata nyata dan urutan goresan.</span></div>
            <div className="kanji-layout">
              <div className="kanji-bank">{KANJI.map((item,index) => <button key={item.char} className={`${kanjiIndex === index ? "selected" : ""} ${completed.includes(`kanji-${item.char}`) ? "learned" : ""}`} onClick={() => setKanjiIndex(index)}><b>{item.char}</b><span>{item.meaning}</span></button>)}</div>
              <article className="kanji-detail">
                <div className="kanji-visual"><img src={`/strokes/${activeKanji.char.codePointAt(0)!.toString(16).padStart(5,"0")}.svg`} alt={`Urutan goresan kanji ${activeKanji.char}`} /></div>
                <div className="kanji-info"><span className="grammar-badge">{activeKanji.level}</span><h2>{activeKanji.char} <small>{activeKanji.meaning}</small></h2><dl><div><dt>On&apos;yomi</dt><dd>{activeKanji.onyomi}</dd></div><div><dt>Kun&apos;yomi</dt><dd>{activeKanji.kunyomi}</dd></div></dl><div className="kanji-word"><small>CONTOH KATA</small><button onClick={() => speakJapanese(activeKanji.word)} aria-label="Dengarkan kata">♪</button><b>{activeKanji.word}</b><span>{activeKanji.reading} · {activeKanji.wordMeaning}</span></div><button className="primary" onClick={() => markComplete(`kanji-${activeKanji.char}`,"Kanji ditambahkan ke ingatan!")}>{completed.includes(`kanji-${activeKanji.char}`) ? "Sudah dikuasai ✓" : "Tandai dikuasai"}</button></div>
              </article>
            </div>
          </div>}

          {view === "mendengar" && <div className="listening-view">
            <div className="section-title"><div><p>LATIHAN MENDENGAR</p><h2>Latih telinga sebelum melihat teks</h2></div><span>Dengarkan dua kali, jawab, baru buka transkrip.</span></div>
            <div className="listening-layout">
              <div className="episode-list">{LISTENING.map((lesson,index) => <button className={listeningIndex === index ? "selected" : ""} onClick={() => {setListeningIndex(index);setShowListeningText(false)}} key={lesson.id}><span>0{index+1}</span><div><b>{lesson.title}</b><small>{lesson.level}</small></div>{completed.includes(`listen-${lesson.id}`) && <i>✓</i>}</button>)}</div>
              <article className="audio-lesson"><span className="grammar-badge">{activeListening.level}</span><h2>{activeListening.title}</h2><p className="listen-instruction">Tutup mata, lalu dengarkan percakapan berikut.</p><div className="audio-controls"><button onClick={() => speakJapanese(activeListening.jp,.58)}><span>▶</span><b>Putar pelan</b><small>0.75×</small></button><button onClick={() => speakJapanese(activeListening.jp,.9)}><span>▶</span><b>Putar normal</b><small>1×</small></button></div><div className="listen-question"><small>CEK PEMAHAMAN</small><h3>{activeListening.question}</h3><details><summary>Lihat jawaban</summary><p>{activeListening.answer}</p></details></div><button className="transcript-toggle" onClick={() => setShowListeningText((old) => !old)}>{showListeningText ? "Sembunyikan transkrip" : "Buka transkrip setelah menjawab"}</button>{showListeningText && <div className="transcript"><b>{activeListening.jp}</b><span>{activeListening.romaji}</span><p>{activeListening.meaning}</p></div>}<button className="primary complete-lesson" onClick={() => markComplete(`listen-${activeListening.id}`,"Latihan listening selesai!")}>Selesaikan latihan</button></article>
            </div>
          </div>}

          {view === "percakapan" && <div className="conversation-view">
            <div className="section-title"><div><p>PERCAKAPAN PRAKTIS</p><h2>Berlatih untuk situasi nyata</h2></div><span>Dengar peran A, lalu ucapkan bagian B.</span></div>
            <div className="scenario-tabs">{CONVERSATIONS.map((scenario,index) => <button className={conversationIndex === index ? "selected" : ""} onClick={() => setConversationIndex(index)} key={scenario.id}><span>{scenario.place}</span><b>{scenario.title}</b></button>)}</div>
            <article className="dialogue-card"><div className="dialogue-head"><div><small>ROLE-PLAY</small><h2>{activeConversation.title}</h2></div><button className="outline" onClick={() => activeConversation.lines.forEach((line,index) => window.setTimeout(() => speakJapanese(line.jp,.78),index*2600))}>♪ Putar semua</button></div><div className="dialogue-lines">{activeConversation.lines.map((line,index) => <div className={line.who === "A" ? "speaker-a" : "speaker-b"} key={`${line.who}-${index}`}><span>{line.who}</span><button onClick={() => speakJapanese(line.jp)} aria-label="Dengarkan kalimat">♪</button><p><b>{line.jp}</b><em>{line.romaji}</em><small>{line.id}</small></p></div>)}</div><div className="role-tip"><b>Giliranmu</b><p>Putar kalimat A, jeda, lalu ucapkan kalimat B tanpa membaca romaji.</p><button className="primary" onClick={() => markComplete(`conversation-${activeConversation.id}`,"Skenario percakapan selesai!")}>{completed.includes(`conversation-${activeConversation.id}`) ? "Latihan selesai ✓" : "Saya sudah role-play"}</button></div></article>
          </div>}

          {view === "situasi" && <div className="practical-view">
            <div className="section-title"><div><p>JEPANG UNTUK DUNIA NYATA</p><h2>Belajar lewat misi, bukan bab</h2></div><span>Selesaikan satu kebutuhan komunikasi setiap sesi.</span></div>
            <div className="can-do-banner"><span>できる</span><div><b>Target Can-do</b><p>Setelah satu pelajaran, kamu harus bisa melakukan sesuatu dalam bahasa Jepang—bukan hanya mengenali rumusnya.</p></div></div>
            <div className="practical-layout"><div className="mission-list">{PRACTICAL_LESSONS.map((lesson,index)=><button key={lesson.id} className={`${practicalIndex===index?"selected":""} ${completed.includes(`practical-${lesson.id}`)?"learned":""}`} onClick={()=>setPracticalIndex(index)}><span>{lesson.level}</span><div><b>{lesson.title}</b><small>{lesson.place}</small></div><i>{completed.includes(`practical-${lesson.id}`)?"✓":"→"}</i></button>)}</div>
              <article className="mission-card"><div className="mission-head"><span>{activePractical.place}</span><h2>{activePractical.title}</h2><p>{activePractical.canDo}</p></div><div className="mission-task"><small>MISIMU</small><p>{activePractical.mission}</p></div><div className="useful-phrases"><h3>Kalimat yang benar-benar dipakai</h3>{activePractical.phrases.map((phrase,index)=><div key={phrase.jp}><span>{index+1}</span><button onClick={()=>speakJapanese(phrase.jp,.76)}>♪</button><p><b>{phrase.jp}</b><em>{phrase.romaji}</em><small>{phrase.meaning}</small></p></div>)}</div><div className="mission-insights"><div><small>PARTIKEL DALAM AKSI</small><p>{activePractical.particle}</p></div><div><small>CARA TERDENGAR NATURAL</small><p>{activePractical.tip}</p></div></div><div className="mission-actions"><button className="outline" onClick={()=>activePractical.phrases.forEach((phrase,index)=>window.setTimeout(()=>speakJapanese(phrase.jp,.75),index*3000))}>♪ Dengarkan dialog</button><button className="primary" onClick={()=>markComplete(`practical-${activePractical.id}`,"Misi komunikasi selesai!")}>{completed.includes(`practical-${activePractical.id}`)?"Misi selesai ✓":"Saya bisa melakukannya"}</button></div></article>
            </div>
          </div>}

          {view === "belajar" && <>
            <div className="section-title">
              <div><p>MATERI LENGKAP</p><h2>{script === "hiragana" ? "Hiragana" : "Katakana"}</h2></div>
              <span>Tekan satu huruf untuk mempelajarinya</span>
            </div>
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
                <div className="detail-top"><span>HURUF PILIHAN</span><button onClick={() => speak()} aria-label={`Dengarkan ${active.char}`}>♪ Dengarkan</button></div>
                <div className="big-kana">{active.char}</div>
                <div className="reading">dibaca <strong>“{active.romaji}”</strong></div>
                <div className="example">
                  <small>CONTOH KATA</small>
                  <div><b>{script === "katakana" ? example[0].replace(/[\u3040-\u309f]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60)) : example[0]}</b><span>{example[1]} · {example[2]}</span></div>
                </div>
                <div className="detail-actions">
                  <button className="outline" onClick={() => { setView("latihan"); clearCanvas(); }}>Latihan tulis</button>
                  <button className="primary" onClick={markLearned}>{learned.includes(active.char) ? "Sudah dikuasai ✓" : "Tandai dikuasai"}</button>
                </div>
              </article>
            </div>
          </>}

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
                <button className="sound-round" onClick={() => speak(quiz[quizIndex])} aria-label="Dengarkan huruf">♪</button>
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
