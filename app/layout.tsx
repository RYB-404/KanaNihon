import type { Metadata } from "next";
import { Geist, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const noto = Noto_Serif_JP({ variable: "--font-jp", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KanaNihon — Belajar Bahasa Jepang Lengkap Gratis",
  description: "Belajar bahasa Jepang dari nol: kana, kosakata, tata bahasa, kanji, listening, percakapan, dan jalur JLPT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${geist.variable} ${noto.variable}`}>{children}</body></html>;
}
