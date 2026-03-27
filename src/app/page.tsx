"use client";

import {
  Sparkles,
  ShieldCheck,
  Check,
  ScanSearch,
  Camera,
  Wrench,
  FileArchive,
  Globe,
  Search,
  Home,
  Sofa,
  LogOut,
  Bell,
  ClipboardList,
  House,
  User,
} from "lucide-react";
import { useLanguage } from "./i18n/LanguageContext";
import { FAQSection } from "./components/FAQSection";
import { EmailForm } from "./components/EmailForm";

export default function LandingPage() {
  const { locale, t } = useLanguage();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F7F7] to-white px-6 md:px-20 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit">
              <Globe className="w-4 h-4 text-teal" />
              <span className="text-sm font-semibold text-teal">
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              {t("hero.desc")}
            </p>
            <div className="max-w-[480px]">
              <EmailForm />
            </div>
            <p className="text-sm text-gray-400">🚀 {t("hero.note")}</p>
          </div>

          {/* 폰 목업 */}
          <div className="flex-shrink-0">
            {locale === "ko" ? (
              <div className="w-[280px] md:w-[320px] rounded-[40px] border-2 border-teal/10 shadow-2xl shadow-teal/10 overflow-hidden">
                <img
                  src="/home.png"
                  alt="Homepic App Screenshot"
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-gray-50 rounded-[40px] border-2 border-teal/10 shadow-2xl shadow-teal/10 overflow-hidden flex flex-col justify-between">
                <div className="w-full flex-1 bg-[#FAFAFA] flex flex-col">
                  <div className="px-5 pt-12 pb-4 flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-gray-400">
                        {t("phone.greeting")}
                      </p>
                      <p className="text-[15px] font-bold text-gray-900 mt-0.5">
                        {t("phone.title")}
                      </p>
                    </div>
                    <Bell className="w-5 h-5 text-gray-600 mt-1" />
                  </div>
                  <div className="mx-5 bg-teal rounded-2xl p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-semibold">
                        {t("phone.myProperties")}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/70 mb-3">
                      {t("phone.managed")}
                    </p>
                    <div className="flex bg-white/10 rounded-xl">
                      <div className="flex-1 text-center py-3 border-r border-white/20">
                        <p className="text-2xl font-extrabold">1</p>
                        <p className="text-[10px] text-white/70">
                          {t("phone.active")}
                        </p>
                      </div>
                      <div className="flex-1 text-center py-3">
                        <p className="text-2xl font-extrabold">0</p>
                        <p className="text-[10px] text-white/70">
                          {t("phone.moveOut")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mx-5 mt-4">
                    {[
                      {
                        label: t("phone.addProperty"),
                        bg: "bg-teal-light",
                        iconColor: "text-teal",
                        Icon: House,
                      },
                      {
                        label: t("phone.photos"),
                        bg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        Icon: Camera,
                      },
                      {
                        label: t("phone.reports"),
                        bg: "bg-red-50",
                        iconColor: "text-red-600",
                        Icon: ClipboardList,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex-1 border border-gray-200 rounded-xl py-3 flex flex-col items-center gap-2"
                      >
                        <div
                          className={`w-9 h-9 ${item.bg} rounded-xl flex items-center justify-center`}
                        >
                          <item.Icon
                            className={`w-[18px] h-[18px] ${item.iconColor}`}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 mt-4">
                    <p className="text-[10px] font-semibold text-gray-400 tracking-widest mb-2">
                      MY PROPERTIES
                    </p>
                    <div className="border border-gray-200 rounded-xl p-3">
                      <span className="text-[9px] bg-teal-light text-teal font-semibold px-2 py-0.5 rounded-full">
                        {t("phone.status")}
                      </span>
                      <p className="text-[12px] font-bold text-gray-900 mt-1.5">
                        {t("phone.address")}
                      </p>
                      <div className="flex justify-between mt-1">
                        <span className="text-[9px] text-teal font-medium">
                          {t("phone.deposit")}
                        </span>
                        <span className="text-[9px] text-gray-400">
                          ~2012.12.31
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around items-center px-6 py-3 border-t border-gray-200 bg-white">
                  <div className="flex flex-col items-center gap-1">
                    <Home className="w-5 h-5 text-teal" />
                    <span className="text-[9px] font-semibold text-teal">
                      Home
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Camera className="w-5 h-5 text-gray-400" />
                    <span className="text-[9px] text-gray-400">Photos</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-[9px] text-gray-400">My</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section
        id="features"
        className="px-6 md:px-20 py-20 md:py-24 bg-gradient-to-b from-teal to-teal-dark"
      >
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              {t("features.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-white tracking-tight whitespace-pre-line">
            {t("features.title")}
          </h2>
          <p className="text-lg text-white/60 mt-4">{t("features.desc")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: ScanSearch,
              title: t("features.aiTitle"),
              desc: t("features.aiDesc"),
            },
            {
              icon: Camera,
              title: t("features.timelineTitle"),
              desc: t("features.timelineDesc"),
            },
            {
              icon: Wrench,
              title: t("features.maintenanceTitle"),
              desc: t("features.maintenanceDesc"),
            },
            {
              icon: FileArchive,
              title: t("features.vaultTitle"),
              desc: t("features.vaultDesc"),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-8 rounded-[20px] bg-white/10"
            >
              <item.icon className="w-8 h-8 text-white" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle */}
      <section className="px-6 md:px-20 py-20 md:py-24">
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">
              {t("lifecycle.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
            {t("lifecycle.title")}
          </h2>
          <p className="text-lg text-gray-400 mt-4">{t("lifecycle.desc")}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              icon: Search,
              title: t("lifecycle.browseTitle"),
              desc: t("lifecycle.browseDesc"),
            },
            {
              num: "02",
              icon: Home,
              title: t("lifecycle.moveInTitle"),
              desc: t("lifecycle.moveInDesc"),
            },
            {
              num: "03",
              icon: Sofa,
              title: t("lifecycle.livingTitle"),
              desc: t("lifecycle.livingDesc"),
            },
            {
              num: "04",
              icon: LogOut,
              title: t("lifecycle.moveOutTitle"),
              desc: t("lifecycle.moveOutDesc"),
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex flex-col gap-4 p-8 rounded-[20px] bg-[#F8FAF9]"
            >
              <span className="text-3xl font-extrabold text-teal/20">
                {item.num}
              </span>
              <item.icon className="w-6 h-6 text-teal" />
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Worldwide */}
      <section className="px-6 md:px-20 py-16 md:py-20 bg-[#F0FDFA]">
        <div className="text-center mb-10">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <Globe className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">
              {t("worldwide.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
            {t("worldwide.title")}
          </h2>
          <p className="text-lg text-gray-400 mt-4">{t("worldwide.desc")}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            { flag: "🇺🇸", name: "English" },
            { flag: "🇰🇷", name: "한국어" },
            { flag: "🇯🇵", name: "日本語" },
            { flag: "🇨🇳", name: "中文" },
            { flag: "🇪🇸", name: "Español" },
            { flag: "🇩🇪", name: "Deutsch" },
          ].map((lang) => (
            <div
              key={lang.name}
              className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100"
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-sm font-semibold text-gray-700">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 md:px-20 py-20 md:py-24">
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">
              {t("pricing.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-400 mt-4">{t("pricing.desc")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <div className="flex flex-col items-center gap-6 p-10 rounded-[20px] border border-gray-200">
            <span className="text-lg font-bold text-teal">
              {t("pricing.free")}
            </span>
            <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
              {t("pricing.freePrice")}
            </span>
            <span className="text-sm text-gray-400">
              {t("pricing.freeSub")}
            </span>
            <div className="w-full h-px bg-gray-100" />
            <div className="flex flex-col gap-3.5 w-full">
              {[
                t("pricing.freeF1"),
                t("pricing.freeF2"),
                t("pricing.freeF3"),
                t("pricing.freeF4"),
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Check className="w-[18px] h-[18px] text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Pro */}
          <div className="flex flex-col items-center gap-6 p-10 rounded-[20px] bg-teal shadow-xl shadow-teal/20">
            <span className="text-lg font-bold text-white/60">
              {t("pricing.pro")}
            </span>
            <span className="text-5xl font-extrabold text-white tracking-tight">
              {t("pricing.proPrice")}
            </span>
            <span className="text-sm text-white/50">{t("pricing.proSub")}</span>
            <div className="w-full h-px bg-white/20" />
            <div className="flex flex-col gap-3.5 w-full">
              {[
                t("pricing.proF1"),
                t("pricing.proF2"),
                t("pricing.proF3"),
                t("pricing.proF4"),
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Check className="w-[18px] h-[18px] text-white flex-shrink-0" />
                  <span className="text-sm text-white/80">{text}</span>
                </div>
              ))}
            </div>
            <a
              href="#early-access"
              className="w-full bg-white text-teal rounded-xl py-3.5 text-base font-semibold hover:bg-gray-50 transition text-center"
            >
              {t("pricing.proCta")}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section
        id="early-access"
        className="px-6 md:px-20 py-20 md:py-24 bg-gradient-to-b from-teal to-teal-dark text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {t("cta.title")}
        </h2>
        <p className="text-lg text-white/60 mt-4 mb-8">{t("cta.desc")}</p>
        <div className="max-w-[560px] mx-auto">
          <EmailForm variant="dark" />
        </div>
        <p className="text-sm text-white/40 mt-4">🔒 {t("cta.note")}</p>
      </section>
    </main>
  );
}
