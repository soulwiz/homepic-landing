"use client";

import { useEffect, useState } from "react";

export interface UTMParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  referrer: string | null;
}

const UTM_STORAGE_KEY = "homepic_utm";

export function useUTM(): UTMParams {
  const [utm, setUtm] = useState<UTMParams>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
    referrer: null,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    const content = params.get("utm_content");
    const referrer = document.referrer || null;

    const utmData: UTMParams = {
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
      utm_content: content,
      referrer,
    };

    // UTM이 있으면 sessionStorage에 저장 (페이지 내 이동 시 유지)
    if (source) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      setUtm(utmData);
    } else {
      // URL에 UTM 없으면 저장된 값 사용
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (stored) {
        setUtm(JSON.parse(stored));
      } else {
        // UTM 없으면 referrer만 기록
        setUtm(utmData);
      }
    }
  }, []);

  return utm;
}
