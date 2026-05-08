"use client";

import {
  Download,
  Home as HomeIcon,
  Camera,
  Sparkles,
  FileText,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { DownloadBadges } from "../components/DownloadBadges";

export default function GuidePage() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      Icon: Download,
      title: t("guide.step1Title"),
      desc: t("guide.step1Desc"),
    },
    {
      num: "02",
      Icon: HomeIcon,
      title: t("guide.step2Title"),
      desc: t("guide.step2Desc"),
    },
    {
      num: "03",
      Icon: Camera,
      title: t("guide.step3Title"),
      desc: t("guide.step3Desc"),
    },
    {
      num: "04",
      Icon: Sparkles,
      title: t("guide.step4Title"),
      desc: t("guide.step4Desc"),
    },
    {
      num: "05",
      Icon: FileText,
      title: t("guide.step5Title"),
      desc: t("guide.step5Desc"),
    },
  ];

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F7F7] to-white px-6 md:px-20 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("guide.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-500 mt-4">
            {t("guide.subtitle")}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 md:px-20 py-12 md:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-[20px] border border-gray-200 bg-white"
            >
              <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                <span className="text-2xl md:text-3xl font-extrabold text-teal/30">
                  {step.num}
                </span>
                <div className="w-12 h-12 bg-teal-light rounded-2xl flex items-center justify-center">
                  <step.Icon className="w-6 h-6 text-teal" />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-gradient-to-b from-teal to-teal-dark text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          {t("guide.downloadCta")}
        </h2>
        <p className="text-base text-white/60 mt-4 mb-8">{t("cta.desc")}</p>
        <div className="flex justify-center">
          <DownloadBadges variant="dark" size="large" />
        </div>
      </section>
    </main>
  );
}
