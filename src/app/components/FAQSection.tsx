"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  return (
    <section id="faq" className="px-6 md:px-20 py-20 md:py-24 bg-[#FAFAFA]">
      <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 text-center tracking-tight mb-12">
        {t("faq.title")}
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full py-6 text-left cursor-pointer"
            >
              <span className="text-base font-semibold text-gray-900">
                Q. {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <p className="text-sm text-gray-500 leading-relaxed pb-6">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
