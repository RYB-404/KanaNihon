import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete N5-N4 learning shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>KanaNihon — Belajar Bahasa Jepang N5–N4 Gratis<\/title>/i);
  assert.match(html, /Bunpou 文法/);
  assert.match(html, /Kaiwa video/);
  assert.match(html, /Tanya &amp; paham/);
  assert.match(html, /paket inti N5–N4/);
  assert.match(html, /\/(?:<!-- -->)?105/);
  assert.match(html, /Enam tahap sampai siap N4/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Codex is building/i);
});

test("ships detailed beginner data and official kaiwa sources", async () => {
  const [page, data, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/learning-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /BEGINNER_HELP/);
  assert.match(page, /KAIWA_VIDEOS/);
  assert.match(page, /normalizedHelpQuery/);
  assert.match(data, /VOCABULARY\.push\(\.\.\.EXTRA_VOCABULARY\)/);
  assert.match(data, /GRAMMAR\.push\(/);
  assert.match(data, /www\.erin\.jpf\.go\.jp\/movie\/01\/01-ba_high\.mp4/);
  assert.match(data, /erin_lesson01_basic_script_id\.pdf/);
  assert.match(data, /Apa bedanya は dan が\?/);
  assert.match(layout, /100\+ kosakata/);
});

test("ships the N4 practice suite and licensed vocabulary reference", async () => {
  const [page, n4, particles, lexicon, license, stroke] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/n4-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/particle-guides.ts", import.meta.url), "utf8"),
    readFile(new URL("../public/data/jlpt-vocabulary.json", import.meta.url), "utf8"),
    readFile(new URL("../public/data/jlpt-vocabulary-LICENSE.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/strokes/065e5.svg", import.meta.url), "utf8"),
  ]);
  assert.match(page, /Review sebelum lupa/);
  assert.match(page, /Simulasi mini N5–N4/);
  assert.match(page, /Studio latihan bicara/);
  assert.match(n4, /READING_LESSONS/);
  assert.match(n4, /SPEAKING_PROMPTS/);
  assert.match(particles, /KESALAHAN|mistake/);
  assert.doesNotMatch(page, /♪|♫|♬/);
  assert.doesNotMatch(stroke, /<!DOCTYPE/);
  assert.equal(JSON.parse(lexicon).items.length, 1384);
  assert.match(license, /MIT License/);
});

test("ships the NHK Indonesian companion hub without copying media", async () => {
  const [page, nhk] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/nhk-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(page, /Pusat NHK/);
  assert.match(page, /Audio, gambar, naskah, dan PDF tetap disajikan langsung oleh NHK/);
  assert.match(nhk, /Array\.from\(\{length:48\}/);
  assert.match(nhk, /String\(number\)\.padStart\(2,"0"\)/);
  assert.match(nhk, /Sensei Oshiete/);
  assert.match(nhk, /Kata tiruan bunyi/);
});

test("ships working audio toggles and tiered written quizzes", async () => {
  const [page, data, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/n4-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /playingAudioKey===key&&audioStatus==="playing"/);
  assert.match(page, /audioRef\.current\?\.pause\(\)/);
  assert.match(page, /speechSynthesis\.cancel\(\)/);
  assert.match(page, /\["Mudah","Sedang","Sulit"\]/);
  assert.match(page, /item\.difficulty \?\? "Mudah"/);
  assert.match(data, /difficulty:"Mudah"/);
  assert.match(data, /difficulty:"Sedang"/);
  assert.match(data, /difficulty:"Sulit"/);
  assert.match(data, /Susun menjadi kalimat yang benar/);
  assert.match(css, /button\.playing:after\{content:"Ⅱ"/);
});

test("explains kana families and auto-checks handwriting", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /type KanaSet = "basic" \| "dakuon" \| "handakuon" \| "contracted" \| "special"/);
  assert.match(page, /K → G/);
  assert.match(page, /H → P/);
  assert.match(page, /Kana bunyi-i \+ ゃ・ゅ・ょ kecil/);
  assert.match(page, /async function checkWriting\(\)/);
  assert.match(page, /expectedStarts/);
  assert.match(page, /Bentuk \{writingResult\.shape\}% · urutan & titik mulai/);
  assert.match(css, /max-width:min\(1700px,calc\(100vw - 56px\)\)/);
  assert.match(css, /\.writing-result/);
});
