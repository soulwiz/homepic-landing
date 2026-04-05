"use client";

import { useLanguage } from "../i18n/LanguageContext";

const content = {
  ko: {
    title: "계정 삭제 안내",
    heading: "Homepic 계정 삭제 방법",
    steps: [
      "Homepic 앱을 실행합니다.",
      "하단 메뉴에서 '마이페이지'를 선택합니다.",
      "'회원탈퇴'를 선택합니다.",
      "안내 사항을 확인한 후 '탈퇴하기'를 누릅니다.",
    ],
    dataTitle: "삭제되는 데이터",
    dataItems: [
      "계정 정보 (이메일, 이름)",
      "계약 정보 및 촬영 사진",
      "AI 분석 결과 및 리포트",
      "구독 정보 및 결제 내역",
    ],
    retentionTitle: "데이터 보관 기간",
    retentionDesc:
      "계정 삭제 요청 시 모든 개인정보는 즉시 삭제됩니다. 단, 법령에 따라 일부 데이터는 아래 기간 동안 보관될 수 있습니다.",
    retentionItems: [
      "전자상거래 거래 기록: 5년 (전자상거래법)",
      "결제 기록: 5년 (전자상거래법)",
    ],
    contact: "문의: support@homepic.app",
  },
  en: {
    title: "Account Deletion",
    heading: "How to Delete Your Homepic Account",
    steps: [
      "Open the Homepic app.",
      "Select 'My Page' from the bottom menu.",
      "Select 'Delete Account'.",
      "Review the information and tap 'Delete'.",
    ],
    dataTitle: "Data to be Deleted",
    dataItems: [
      "Account information (email, name)",
      "Contract information and photos",
      "AI analysis results and reports",
      "Subscription and payment history",
    ],
    retentionTitle: "Data Retention Period",
    retentionDesc:
      "All personal data is deleted immediately upon account deletion request. However, some data may be retained for the following periods as required by law.",
    retentionItems: [
      "E-commerce transaction records: 5 years",
      "Payment records: 5 years",
    ],
    contact: "Contact: support@homepic.app",
  },
};

export default function AccountDeletionPage() {
  const { lang } = useLanguage();
  const c = content[lang === "ko" ? "ko" : "en"];

  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-20 leading-[1.8]">
      <h1 className="text-2xl font-extrabold text-teal mb-6">{c.title}</h1>

      <h2 className="text-base font-bold text-gray-900 mt-4 mb-2">
        {c.heading}
      </h2>
      <ol className="list-decimal list-inside text-sm text-gray-500 space-y-1">
        {c.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {c.dataTitle}
      </h2>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
        {c.dataItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {c.retentionTitle}
      </h2>
      <p className="text-sm text-gray-500">{c.retentionDesc}</p>
      <ul className="list-disc list-inside text-sm text-gray-500 mt-2 space-y-1">
        {c.retentionItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-400 mt-8">{c.contact}</p>
    </div>
  );
}
