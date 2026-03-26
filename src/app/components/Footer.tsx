"use client";

import { House, CircleCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-20 py-16 bg-[#111111]">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-teal rounded-lg flex items-center justify-center relative">
              <House className="w-3.5 h-3.5 text-white" />
              <CircleCheck className="w-2 h-2 text-white absolute bottom-0.5 right-0.5" />
            </div>
            <span className="text-xl font-extrabold text-white">
              {t("header.brand")}
            </span>
          </Link>
          <p className="text-[13px] text-gray-500">{t("footer.tagline")}</p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-semibold text-white">
              {t("footer.service")}
            </span>
            <Link
              href="/#features"
              className="text-[13px] text-gray-500 hover:text-gray-300"
            >
              {t("header.features")}
            </Link>
            <Link
              href="/#pricing"
              className="text-[13px] text-gray-500 hover:text-gray-300"
            >
              {t("header.pricing")}
            </Link>
            <Link
              href="/#faq"
              className="text-[13px] text-gray-500 hover:text-gray-300"
            >
              {t("header.faq")}
            </Link>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-semibold text-white">
              {t("footer.legal")}
            </span>
            <Link
              href="/terms"
              className="text-[13px] text-gray-500 hover:text-gray-300"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="/privacy"
              className="text-[13px] text-gray-500 hover:text-gray-300"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between">
        <span className="text-xs text-gray-600">
          &copy; 2026 Homepic. All rights reserved.
        </span>
        <span className="text-xs text-gray-600">support@homepic.app</span>
      </div>
    </footer>
  );
}
