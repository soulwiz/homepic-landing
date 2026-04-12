"use client";

import { useEffect, useRef } from "react";
import { getSupabase } from "../lib/supabase";
import { useUTM } from "./useUTM";

function getSessionId(): string {
  const key = "homepic_session";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function usePageVisit() {
  const utm = useUTM();
  const recorded = useRef(false);

  useEffect(() => {
    // utm_source가 null이면 초기 상태일 수 있으므로 referrer 확인
    // 이미 기록했으면 무시
    if (recorded.current) return;

    const timer = setTimeout(async () => {
      try {
        recorded.current = true;
        await getSupabase()
          .from("haj_page_visits")
          .insert({
            session_id: getSessionId(),
            utm_source: utm.utm_source,
            utm_medium: utm.utm_medium,
            utm_campaign: utm.utm_campaign,
            utm_content: utm.utm_content,
            referrer: utm.referrer,
            user_agent: navigator.userAgent,
            locale: navigator.language.split("-")[0],
            page_path: window.location.pathname,
          });
      } catch {
        // 방문 기록 실패는 무시 (핵심 기능 아님)
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [utm]);
}
