import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "홈픽 - 입퇴실 하자, AI로 꼼꼼하게",
  description:
    "입주 시 촬영한 사진과 퇴실 시 사진을 AI가 비교 분석하여 자연마모와 세입자 과실을 구분합니다. 법적 참고용 PDF 리포트까지 한 번에.",
  keywords: "전월세,보증금,하자,퇴실,입주,원상복구,AI분석,증거,리포트,부동산",
  openGraph: {
    title: "홈픽 - 보증금, 지키는 게 실력이다",
    description:
      "입퇴실 하자를 AI로 꼼꼼하게 비교하고 법적 증거자료까지 한 번에",
    url: "https://homepic.app",
    siteName: "홈픽",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
