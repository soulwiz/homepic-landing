"use client";

import { useLanguage } from "../i18n/LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/app/id6760773667";

interface DownloadBadgesProps {
  variant?: "light" | "dark";
  size?: "default" | "large";
}

export function DownloadBadges({
  variant = "light",
  size = "default",
}: DownloadBadgesProps) {
  const { t } = useLanguage();
  const isDark = variant === "dark";
  const padding = size === "large" ? "px-6 py-3.5" : "px-5 py-3";
  const badgeBg = isDark
    ? "bg-white text-gray-900 hover:bg-gray-100"
    : "bg-gray-900 text-white hover:bg-black";

  const handleAndroidClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(t("download.androidComingSoon"));
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* App Store */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 rounded-xl ${padding} ${badgeBg} transition shadow-md`}
      >
        <svg
          viewBox="0 0 384 512"
          className="w-7 h-7 fill-current flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] opacity-80">Download on the</span>
          <span className="text-base font-semibold">App Store</span>
        </div>
      </a>

      {/* Google Play — 안드로이드 출시 전까지 곧 출시 alert */}
      <button
        type="button"
        onClick={handleAndroidClick}
        className={`flex items-center gap-3 rounded-xl ${padding} ${badgeBg} transition shadow-md cursor-pointer`}
      >
        <svg
          viewBox="0 0 512 512"
          className="w-7 h-7 flex-shrink-0"
          aria-hidden="true"
        >
          {/* 파랑 (상단) */}
          <path
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
            fill="#00D7FE"
          />
          {/* 녹색 (왼쪽) */}
          <path
            d="M104.6 13c-2.4 5.3-3.6 11.6-3.6 18.7v448.6c0 7.1 1.2 13.4 3.6 18.7l223-223L104.6 13z"
            fill="#00C752"
          />
          {/* 노랑 (오른쪽) */}
          <path
            d="M504.6 256c0-16.1-9.4-32.2-28.1-44.5l-91.2-52.3-66.7 66.5 66.7 66.7 91.4-52.5c18.5-12.4 27.9-28.4 27.9-43.9z"
            fill="#FFC107"
          />
          {/* 빨강 (하단) */}
          <path
            d="M104.6 499l220.7-221.3 60.1 60.1L104.6 499z"
            fill="#EA433A"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] opacity-80">GET IT ON</span>
          <span className="text-base font-semibold">Google Play</span>
        </div>
      </button>
    </div>
  );
}
