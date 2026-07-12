import type { Metadata } from "next";
import { Noto_Sans_JP, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ variable: "--font-sans", subsets: ["latin"] });
const noto = Noto_Sans_JP({ variable: "--font-jp", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KanaNihon — Belajar Bahasa Jepang Lengkap Gratis",
  description: "Belajar bahasa Jepang dari nol: kana, kosakata, tata bahasa, kanji, listening, percakapan, dan jalur JLPT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${nunito.variable} ${noto.variable}`}>{children}</body></html>;
}
