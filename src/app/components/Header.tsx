"use client";

import { House, CircleCheck, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { localeNames, type Locale } from "../i18n/translations";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const desktopLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const inMobile = mobileLangRef.current?.contains(target);
      const inDesktop = desktopLangRef.current?.contains(target);
      if (!inMobile && !inDesktop) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  function handleSelectLocale(loc: Locale) {
    setLocale(loc);
    setLangOpen(false);
    setMenuOpen(false);
  }

  const langDropdown = (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[140px] z-[60]">
      {(Object.keys(localeNames) as Locale[]).map((loc) => (
        <button
          key={loc}
          onClick={() => handleSelectLocale(loc)}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
            locale === loc ? "text-teal font-semibold" : "text-gray-600"
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );

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

      {/* 모바일: 언어 + 햄버거 */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="relative" ref={mobileLangRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-[15px] font-medium text-gray-500 hover:text-gray-900 transition cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            {localeNames[locale]}
          </button>
          {langOpen && langDropdown}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 cursor-pointer"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden z-40">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/#features"
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition py-2"
            >
              {t("header.features")}
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition py-2"
            >
              {t("header.pricing")}
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition py-2"
            >
              {t("header.faq")}
            </Link>
            <Link
              href="/#early-access"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-teal text-white rounded-[10px] px-6 py-3 text-sm font-semibold hover:bg-teal-dark transition"
            >
              {t("header.earlyAccess")}
            </Link>
          </nav>
        </div>
      )}

      {/* 데스크톱 내비게이션 */}
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
        <div className="relative" ref={desktopLangRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-[15px] font-medium text-gray-500 hover:text-gray-900 transition cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            {localeNames[locale]}
          </button>
          {langOpen && langDropdown}
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
