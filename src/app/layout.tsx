import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "フェイスワックス専門店 BELEA | 肌の土台から整える新習慣",
  description: "産毛除去×角質ケア×トーンアップ。1回で実感できるフェイスワックス専門サロン。男女OK。通うたび、心のトーンも一段上がる。",
  keywords: "フェイスワックス, 顔脱毛, 産毛除去, 角質ケア, トーンアップ, 美肌, BELEA",
  openGraph: {
    title: "フェイスワックス専門店 BELEA",
    description: "産毛除去×角質ケア×トーンアップ。1回で実感できるフェイスワックス専門サロン。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorantGaramond.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
