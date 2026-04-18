"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getSupabase } from "../lib/supabase";
import { useUTM } from "../hooks/useUTM";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOTAL_SPOTS = 500;

interface EmailFormProps {
  variant?: "light" | "dark";
}

export function EmailForm({ variant = "light" }: EmailFormProps) {
  const { t, locale } = useLanguage();
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const utm = useUTM();

  useEffect(() => {
    async function fetchCount() {
      try {
        const { count, error } = await getSupabase()
          .from("haj_waitlist")
          .select("*", { count: "exact", head: true });
        if (!error && count !== null) {
          setWaitlistCount(count);
        }
      } catch {
        // 카운트 조회 실패 시 무시
      }
    }
    fetchCount();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!email || status === "submitting") return;

    if (!EMAIL_REGEX.test(email)) {
      setValidationError(t("email.invalidEmail"));
      return;
    }

    setStatus("submitting");
    try {
      const { error } = await getSupabase().from("haj_waitlist").upsert(
        {
          email,
          locale,
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_content: utm.utm_content,
          referrer: utm.referrer,
          landed_at: new Date().toISOString(),
        },
        { onConflict: "email" },
      );
      if (error) throw error;
      setStatus("success");
      setEmail("");
      if (waitlistCount !== null) {
        setWaitlistCount(waitlistCount + 1);
      }
    } catch (err) {
      console.error("[waitlist] submit failed:", err);
      setStatus("error");
    }
  };

  const spotsLeft =
    waitlistCount !== null ? Math.max(0, TOTAL_SPOTS - waitlistCount) : null;

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
    <div className="flex flex-col gap-2">
      {/* 선착순 500명 한정 */}
      <p
        className={`text-sm font-semibold ${
          variant === "dark" ? "text-yellow-300" : "text-orange-500"
        }`}
      >
        {t("hero.limitedSpots")}
      </p>

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
              onChange={(e) => {
                setEmail(e.target.value);
                if (validationError) setValidationError("");
              }}
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
        {validationError && (
          <p className="text-sm text-red-500">{validationError}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">{t("email.error")}</p>
        )}
      </form>
    </div>
  );
}
