import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kaede Shirazome Portfolio | ゲームプログラマー",
  description: "ゲームプログラマーのポートフォリオサイト。Unity、C++、WebGL を使用したゲーム開発プロジェクトを紹介しています。",
  keywords: ["ゲームプログラマー", "Unity", "C++", "WebGL", "ゲーム開発", "ポートフォリオ"],
  authors: [{ name: "Kaede Shirazome" }],
  openGraph: {
    title: "Kaede Shirazome Portfolio | ゲームプログラマー",
    description: "ゲームプログラマーのポートフォリオサイト。Unity、C++、WebGL を使用したゲーム開発プロジェクトを紹介しています。",
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
        className={`${notoSansJP.variable} font-sans antialiased bg-gray-900 text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
