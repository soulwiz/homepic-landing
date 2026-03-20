"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "촬영한 사진은 어디에 저장되나요?",
    a: "모든 사진은 AWS S3 서버에 암호화 저장됩니다. 계약 종료 후 5년간 보관되며 (주택임대차보호법 소멸시효), 이후 자동 삭제됩니다.",
  },
  {
    q: "AI 분석 결과는 법적 효력이 있나요?",
    a: "AI 분석 결과 자체는 법적 효력을 보장하지 않습니다. 다만 서버 인증 타임스탬프, GPS 검증 데이터가 포함된 리포트는 분쟁 시 유력한 참고자료로 활용할 수 있습니다.",
  },
  {
    q: "리포트 비용은 얼마인가요?",
    a: "하자 증거 리포트 생성 비용은 건당 9,900원이며, 토스페이로 간편하게 결제할 수 있습니다. 앱 다운로드, 사진 촬영, 계약 관리는 모두 무료입니다.",
  },
  {
    q: "자연마모와 세입자 과실은 어떻게 구분하나요?",
    a: "GPT-4o Vision AI가 입주 시와 퇴실 시 사진을 비교하여, 벽지 변색·장판 눌림·도어 마모 등은 자연마모로, 새로운 스크래치·파손 등은 세입자 과실로 판정합니다.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-20 py-20 md:py-24 bg-[#FAFAFA]">
      <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 text-center tracking-tight mb-12">
        자주 묻는 질문
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
