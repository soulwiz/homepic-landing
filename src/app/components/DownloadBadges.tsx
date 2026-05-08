"use client";

const APP_STORE_URL = "https://apps.apple.com/app/id6760773667";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=kr.co.hajapp";

interface DownloadBadgesProps {
  variant?: "light" | "dark";
  size?: "default" | "large";
}

export function DownloadBadges({
  variant = "light",
  size = "default",
}: DownloadBadgesProps) {
  const isDark = variant === "dark";
  const padding = size === "large" ? "px-6 py-3.5" : "px-5 py-3";
  const badgeBg = isDark
    ? "bg-white text-gray-900 hover:bg-gray-100"
    : "bg-gray-900 text-white hover:bg-black";

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

      {/* Google Play */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 rounded-xl ${padding} ${badgeBg} transition shadow-md`}
      >
        <svg
          viewBox="0 0 512 512"
          className="w-7 h-7 flex-shrink-0"
          aria-hidden="true"
        >
          <path
            d="M99.617 8.057C95.602 5.967 90.957 5 86.027 5c-3.973 0-7.711.85-10.852 2.43L284.41 217.13l66.34-66.34L99.617 8.057z"
            fill="#32BBFF"
          />
          <path
            d="M75.176 7.43c-3.973 0-7.711.85-10.852 2.43-3.293 1.738-5.992 4.336-7.844 7.602L284.41 217.13l66.34-66.34L75.176 7.43z"
            fill="#32BBFF"
          />
          <path
            d="M284.41 217.13l-227.93 217.93c1.852 3.27 4.55 5.86 7.844 7.598 3.14 1.582 6.879 2.43 10.852 2.43 4.93 0 9.575-.967 13.59-3.057L350.75 283.47 284.41 217.13z"
            fill="#FFBA00"
          />
          <path
            d="M504.066 232.66l-83.71-46.38-71.71 71.71 71.71 71.71 83.71-46.38c8.504-4.71 13.434-13.41 13.434-22.83 0-9.42-4.93-18.12-13.434-22.83z"
            fill="#FF4521"
          />
          <path
            d="M421.36 187.28L350.75 217.13 284.41 283.47l72.005 72.005L421.36 327.4 504.07 281.02c8.504-4.71 13.434-13.41 13.434-22.83 0-9.42-4.93-18.12-13.434-22.83l-82.71-48.08z"
            fill="#FF4521"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] opacity-80">GET IT ON</span>
          <span className="text-base font-semibold">Google Play</span>
        </div>
      </a>
    </div>
  );
}
