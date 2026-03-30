"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-20 leading-[1.8]">
      <h1 className="text-2xl font-extrabold text-teal mb-1">
        {t("terms.title")}
      </h1>
      <p className="text-[13px] text-gray-400 mb-8">
        {t("terms.effectiveDate")}
      </p>

      {/* 제1조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article1.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("terms.article1.content")}
      </p>

      {/* 제2조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article2.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article2.item1"),
          t("terms.article2.item2"),
          t("terms.article2.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제3조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article3.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article3.item1"),
          t("terms.article3.item2"),
          t("terms.article3.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제4조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article4.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("terms.article4.desc")}
      </p>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article4.item1"),
          t("terms.article4.item2"),
          t("terms.article4.item3"),
          t("terms.article4.item4"),
          t("terms.article4.item5"),
          t("terms.article4.item6"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제5조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article5.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article5.item1"),
          t("terms.article5.item2"),
          t("terms.article5.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제6조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article6.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article6.item1"),
          t("terms.article6.item2"),
          t("terms.article6.item3"),
          t("terms.article6.item4"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제7조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article7.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article7.item1"),
          t("terms.article7.item2"),
          t("terms.article7.item3"),
          t("terms.article7.item4"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제8조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article8.title")}
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          {t("terms.article8.item1")}
          <ul className="pl-5 mb-2">
            {[
              t("terms.article8.item1.sub1"),
              t("terms.article8.item1.sub2"),
              t("terms.article8.item1.sub3"),
              t("terms.article8.item1.sub4"),
              t("terms.article8.item1.sub5"),
            ].map((sub, i) => (
              <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
                {sub}
              </li>
            ))}
          </ul>
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          {t("terms.article8.item2")}
        </li>
      </ol>

      {/* 제9조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article9.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article9.item1"),
          t("terms.article9.item2"),
          t("terms.article9.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제10조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article10.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[t("terms.article10.item1"), t("terms.article10.item2")].map(
          (item, i) => (
            <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
              {item}
            </li>
          ),
        )}
      </ol>

      {/* 제11조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article11.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[
          t("terms.article11.item1"),
          t("terms.article11.item2"),
          t("terms.article11.item3"),
        ].map((item, i) => (
          <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
            {item}
          </li>
        ))}
      </ol>

      {/* 제12조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article12.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[t("terms.article12.item1"), t("terms.article12.item2")].map(
          (item, i) => (
            <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
              {item}
            </li>
          ),
        )}
      </ol>

      {/* 제13조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article13.title")}
      </h2>
      <ol className="pl-5 mb-2">
        {[t("terms.article13.item1"), t("terms.article13.item2")].map(
          (item, i) => (
            <li key={i} className="text-sm text-gray-500 leading-[1.8] mb-1">
              {item}
            </li>
          ),
        )}
      </ol>

      {/* 제14조 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.article14.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("terms.article14.content")}
      </p>

      {/* 부칙 */}
      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        {t("terms.supplement.title")}
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        {t("terms.supplement.content")}
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 text-[13px] text-gray-400 text-center">
        <p>{t("terms.company")}</p>
      </div>
    </div>
  );
}
