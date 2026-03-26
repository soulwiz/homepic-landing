"use client";

import { House, CircleCheck, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { localeNames, type Locale } from "../i18n/translations";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-5 bg-white sticky top-0 z-50 border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-9 h-9 bg-teal rounded-[10px] flex items-center justify-center relative">
          <House className="w-[18px] h-[18px] text-white" />
          <CircleCheck className="w-2.5 h-2.5 text-white absolute bottom-1 right-1" />
        </div>
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
          {t("header.brand")}
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-9">
        <Link
          href="/#features"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          {t("header.features")}
        </Link>
        <Link
          href="/#pricing"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          {t("header.pricing")}
        </Link>
        <Link
          href="/#faq"
          className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition"
        >
          {t("header.faq")}
        </Link>

        {/* 언어 선택 */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-[15px] font-medium text-gray-500 hover:text-gray-900 transition cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            {localeNames[locale]}
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[140px]">
              {(Object.keys(localeNames) as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocale(loc);
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                    locale === loc ? "text-teal font-semibold" : "text-gray-600"
                  }`}
                >
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/#early-access"
          className="flex items-center gap-2 bg-teal text-white rounded-[10px] px-6 py-2.5 text-sm font-semibold hover:bg-teal-dark transition"
        >
          {t("header.earlyAccess")}
        </Link>
      </nav>
    </header>
  );
}
