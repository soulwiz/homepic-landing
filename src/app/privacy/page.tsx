"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-20 leading-[1.8]">
      <h1 className="text-2xl font-extrabold text-teal mb-1">
        {t("privacy.title")}
      </h1>
      <p className="text-[13px] text-gray-400 mb-8">
        {t("privacy.effectiveDate")}
      </p>

      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.intro")}
      </p>

      {/* 제1조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article1.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article1.paragraph1")}
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>{t("privacy.article1.category1")}</strong>
      </p>
      <ul className="pl-5 mb-2">
        {[
          t("privacy.article1.required1"),
          t("privacy.article1.required2"),
          t("privacy.article1.required3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>{t("privacy.article1.category2")}</strong>
      </p>
      <ul className="pl-5 mb-2">
        {[t("privacy.article1.optional1"), t("privacy.article1.optional2")].map(
          (item, i) => (
            <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
              {item}
            </li>
          ),
        )}
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>{t("privacy.article1.category3")}</strong>
      </p>
      <ul className="pl-5 mb-2">
        {[
          t("privacy.article1.auto1"),
          t("privacy.article1.auto2"),
          t("privacy.article1.auto3"),
          t("privacy.article1.auto4"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article1.paragraph2")}
      </p>

      {/* 제2조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article2.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article2.intro")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article2.item1"),
          t("privacy.article2.item2"),
          t("privacy.article2.item3"),
          t("privacy.article2.item4"),
          t("privacy.article2.item5"),
          t("privacy.article2.item6"),
          t("privacy.article2.item7"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제3조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article3.title")}
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          {t("privacy.article3.item1")}
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          {t("privacy.article3.item2")}
          <ul className="pl-5 mb-2">
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              {t("privacy.article3.item2.sub1")}
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              {t("privacy.article3.item2.sub2")}
            </li>
          </ul>
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          {t("privacy.article3.item3")}
        </li>
      </ol>

      {/* 제4조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article4.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article4.paragraph1")}
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article4.paragraph2")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article4.exception1"),
          t("privacy.article4.exception2"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제5조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article5.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article5.intro")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article5.item1"),
          t("privacy.article5.item2"),
          t("privacy.article5.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>
      <p className="text-[13px] text-gray-400 mt-1">
        {t("privacy.article5.note")}
      </p>

      {/* 제6조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article6.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article6.intro")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article6.item1"),
          t("privacy.article6.item2"),
          t("privacy.article6.item3"),
          t("privacy.article6.item4"),
          t("privacy.article6.item5"),
          t("privacy.article6.item6"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제7조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article7.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article7.paragraph1")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article7.right1"),
          t("privacy.article7.right2"),
          t("privacy.article7.right3"),
          t("privacy.article7.right4"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article7.paragraph2")}
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article7.paragraph3")}
      </p>

      {/* 제8조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article8.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("privacy.article8.item1"),
          t("privacy.article8.item2"),
          t("privacy.article8.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제9조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article9.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article9.content")}
      </p>

      {/* 제10조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article10.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article10.intro")}
      </p>
      <ul className="pl-5 mb-2">
        {[
          t("privacy.article10.company"),
          t("privacy.article10.email"),
          t("privacy.article10.inquiry"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ul>

      {/* 제11조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article11.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article11.intro")}
      </p>
      <ul className="pl-5 mb-2">
        {[
          t("privacy.article11.org1"),
          t("privacy.article11.org2"),
          t("privacy.article11.org3"),
          t("privacy.article11.org4"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ul>

      {/* 제12조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("privacy.article12.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("privacy.article12.content")}
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 text-[13px] text-gray-400 text-center">
        <p>{t("privacy.company")}</p>
      </div>
    </div>
  );
}
