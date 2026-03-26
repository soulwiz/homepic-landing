"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getSupabase } from "../lib/supabase";

interface EmailFormProps {
  variant?: "light" | "dark";
}

export function EmailForm({ variant = "light" }: EmailFormProps) {
  const { t, locale } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    try {
      const { error } = await getSupabase()
        .from("haj_waitlist")
        .upsert({ email, locale }, { onConflict: "email" });
      if (error) throw error;
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-2 rounded-2xl px-6 py-4 ${
          variant === "dark" ? "bg-white/20 text-white" : "bg-teal/10 text-teal"
        }`}
      >
        <span className="text-lg">✅</span>
        <span className="text-sm font-semibold">{t("email.success")}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex rounded-[14px] overflow-hidden shadow-lg shadow-black/5">
        <div
          className={`flex items-center gap-2.5 px-5 py-4 flex-1 ${
            variant === "dark" ? "bg-white" : "bg-gray-100"
          }`}
        >
          <Mail className="w-[18px] h-[18px] text-gray-400 flex-shrink-0" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("hero.emailPlaceholder")}
            className="bg-transparent text-[15px] text-gray-900 placeholder-gray-400 outline-none w-full"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-teal-dark text-white px-7 py-4 text-[15px] font-bold hover:bg-teal transition cursor-pointer whitespace-nowrap disabled:opacity-60"
        >
          {status === "submitting" ? t("email.submitting") : t("hero.cta")}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">{t("email.error")}</p>
      )}
    </form>
  );
}
