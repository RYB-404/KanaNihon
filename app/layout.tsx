import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KanaNihon — Belajar Bahasa Jepang Lengkap Gratis",
  description: "Belajar bahasa Jepang dari nol: kana, kosakata, tata bahasa, kanji, listening, percakapan, dan jalur JLPT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
