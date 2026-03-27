import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Homepic - Your Home, Managed with AI",
  description:
    "From move-in to move-out, Homepic records, inspects, and protects your home with AI. Available in 6 languages.",
  keywords:
    "home management,rental inspection,security deposit,AI analysis,move-in,move-out,maintenance,property management",
  openGraph: {
    title: "Homepic - Every moment of your home, captured",
    description:
      "AI-powered home management app. Photo capture, comparison analysis, maintenance tracking, and legal-ready reports.",
    url: "https://homepic.app",
    siteName: "Homepic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homepic - Every moment of your home, captured",
    description: "AI-powered home management app. From move-in to move-out.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        className="min-h-screen bg-white text-gray-900 font-sans"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
