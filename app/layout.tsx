import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KanaNihon — Belajar Bahasa Jepang N5–N4 Gratis",
  description: "Belajar bahasa Jepang dari nol sampai N4: kana, 100+ kosakata, bunpou, partikel, kanji, listening, video kaiwa, dan bantuan saat bingung.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
