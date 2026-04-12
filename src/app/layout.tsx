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
    images: [
      {
        url: "https://homepic.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Homepic App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homepic - Every moment of your home, captured",
    description: "AI-powered home management app. From move-in to move-out.",
    images: ["https://homepic.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body
        className="min-h-screen bg-white text-gray-900 font-sans"
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
