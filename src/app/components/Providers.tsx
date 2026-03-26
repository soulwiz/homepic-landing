"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "../i18n/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
