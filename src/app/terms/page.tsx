import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - 홈픽",
};

export default function TermsPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-20 leading-[1.8]">
      <h1 className="text-2xl font-extrabold text-teal mb-1">
        홈픽 서비스 이용약관
      </h1>
      <p className="text-[13px] text-gray-400 mb-8">시행일: 2026년 3월 1일</p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제1조 (목적)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        이 약관은 주식회사 인터스틱(이하 &quot;회사&quot;)이 제공하는 전월세
        하자 증거 수집 서비스 &quot;홈픽&quot;(이하 &quot;서비스&quot;)의 이용
        조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로
        합니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제2조 (용어의 정의)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          &quot;서비스&quot;란 회사가 제공하는 AI 기반 하자 감지, 입퇴실 사진
          비교 분석, PDF 하자 증거 리포트 생성 등 일체의 서비스를 말합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          &quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를 말합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          &quot;콘텐츠&quot;란 이용자가 서비스를 통해 업로드하는 사진, 계약
          정보, AI 분석 결과, 리포트 등을 말합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제3조 (약관의 효력 및 변경)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 관련 법령에 위배되지 않는 범위에서 약관을 개정할 수 있으며,
          개정 시 적용일 7일 전부터 앱 내 공지합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하고
          탈퇴할 수 있습니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제4조 (서비스의 내용)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사는 다음과 같은 서비스를 제공합니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          입주 시 공간별 사진 촬영 및 저장
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          퇴실 시 사진 촬영 및 입주 사진과의 AI 비교 분석
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          하자 유형 분류 (과실 의심, 자연마모, 기존하자)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          법적 참고용 PDF 하자 증거 리포트 생성
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약 관리 및 촬영 가이드 기능
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          기타 회사가 추가 개발하여 제공하는 서비스
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제5조 (회원 가입 및 탈퇴)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자는 카카오, Google, Apple 소셜 로그인 또는 이메일을 통해
          회원가입할 수 있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회원은 앱 내 마이페이지에서 언제든지 탈퇴를 요청할 수 있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          탈퇴 시 개인정보는 개인정보 처리방침에 따라 처리되며, 법령상 보관
          의무가 있는 데이터는 해당 기간까지 보관 후 파기합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제6조 (서비스 이용료 및 결제)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          기본 서비스(사진 촬영, 저장)는 무료로 제공됩니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          AI 비교 분석 및 PDF 리포트 생성은 유료 서비스이며, 인앱 결제(Apple App
          Store, Google Play Store)를 통해 결제합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          구독 상품의 결제 주기 및 요금은 앱 내 구독 관리 화면에서 확인할 수
          있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          결제 취소 및 환불은 각 앱스토어의 환불 정책에 따릅니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제7조 (AI 분석 결과의 면책)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          본 서비스의 AI 분석 결과는 참고 자료로만 제공되며, 법적 효력을
          보장하지 않습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          AI 분석은 사진 이미지를 기반으로 하므로, 촬영 조건(조명, 각도, 해상도
          등)에 따라 결과가 달라질 수 있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          보증금 분쟁 등 법적 절차에서는 전문가의 현장 실사를 병행하시기를
          권장합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 AI 분석 결과의 정확성, 완전성을 보장하지 않으며, 분석 결과에
          기반한 이용자의 판단이나 행위에 대해 책임을 지지 않습니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제8조 (이용자의 의무)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자는 다음 행위를 하여서는 안 됩니다.
          <ul className="pl-5 mb-2">
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              타인의 개인정보를 도용하거나 허위 정보를 등록하는 행위
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              서비스를 이용하여 법령 또는 공공질서에 반하는 행위
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              서비스의 운영을 방해하거나 안정성을 해치는 행위
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              타인의 재산권, 초상권, 사생활 등을 침해하는 행위
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              서비스를 역설계, 무단 복제, 변조하는 행위
            </li>
          </ul>
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자는 촬영한 사진 및 등록한 계약 정보의 정확성에 대해 책임을
          집니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제9조 (회사의 의무)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 관련 법령과 본 약관에 따라 지속적이고 안정적인 서비스를
          제공하기 위해 노력합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 이용자의 개인정보를 보호하기 위해 개인정보 처리방침을 수립하고
          이를 준수합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만을
          적절한 절차를 통해 처리합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제10조 (서비스의 중단 및 변경)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 천재지변, 시스템 장애, 정기 점검 등 불가피한 사유가 있는 경우
          서비스의 전부 또는 일부를 일시적으로 중단할 수 있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 서비스의 내용, 운영 방식 등을 변경할 수 있으며, 중요한 변경
          사항은 사전에 공지합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제11조 (콘텐츠의 관리)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자가 업로드한 사진 및 계약 정보의 저작권은 이용자에게 귀속됩니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 서비스 제공 목적(AI 분석, 리포트 생성)에 한하여 이용자의
          콘텐츠를 이용할 수 있습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약 관련 데이터는 계약 종료 후 5년간 안전하게 보관됩니다
          (주택임대차보호법 소멸시효 기준).
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제12조 (손해배상)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사의 고의 또는 중과실로 인하여 이용자에게 손해가 발생한 경우, 회사는
          관련 법령에 따라 손해를 배상합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          AI 분석 결과의 부정확성으로 인한 손해에 대해서는 제7조의 면책 조항이
          적용됩니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제13조 (분쟁 해결)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          서비스 이용과 관련하여 회사와 이용자 간에 분쟁이 발생한 경우 양
          당사자는 원만한 해결을 위해 성실히 협의합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          협의가 이루어지지 않을 경우, 관할 법원은 민사소송법에 따른 법원으로
          합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제14조 (기타)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        본 약관에서 정하지 아니한 사항은 관련 법령 및 상관례에 따릅니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">부칙</h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        본 약관은 2026년 3월 1일부터 시행합니다.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 text-[13px] text-gray-400 text-center">
        <p>주식회사 인터스틱 (interstick Corp)</p>
      </div>
    </div>
  );
}
