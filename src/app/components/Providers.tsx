"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "../i18n/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePageVisit } from "../hooks/usePageVisit";

function AnalyticsProvider({ children }: { children: ReactNode }) {
  usePageVisit();
  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AnalyticsProvider>
        <Header />
        {children}
        <Footer />
      </AnalyticsProvider>
    </LanguageProvider>
  );
}
