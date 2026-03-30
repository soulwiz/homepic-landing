"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale } from "./translations";
import { termsTranslations } from "./termsTranslations";
import { privacyTranslations } from "./privacyTranslations";

// 각 로케일별로 페이지 번역을 병합
const mergedTranslations: Record<Locale, Record<string, string>> = (() => {
  const result = {} as Record<Locale, Record<string, string>>;
  const locales: Locale[] = ["en", "ko", "ja", "zh", "es", "de"];
  for (const locale of locales) {
    result[locale] = {
      ...translations[locale],
      ...termsTranslations[locale],
      ...privacyTranslations[locale],
    };
  }
  return result;
})();

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const SUPPORTED: Locale[] = ["en", "ko", "ja", "zh", "es", "de"];

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language.slice(0, 2);
  return SUPPORTED.includes(lang as Locale) ? (lang as Locale) : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const resolved = locale ?? "en";

  const t = useCallback(
    (key: string) =>
      mergedTranslations[resolved]?.[key] ?? mergedTranslations.en[key] ?? key,
    [resolved],
  );

  // 브라우저 언어 감지 전까지 빈 화면 (깜빡임 방지)
  if (locale === null) return null;

  return (
    <LanguageContext.Provider value={{ locale: resolved, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
