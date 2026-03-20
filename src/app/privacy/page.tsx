import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 홈픽",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 pb-20 leading-[1.8]">
      <h1 className="text-2xl font-extrabold text-teal mb-1">
        개인정보 처리방침
      </h1>
      <p className="text-[13px] text-gray-400 mb-8">시행일: 2026년 3월 1일</p>

      <p className="text-sm text-gray-500 leading-[1.8]">
        주식회사 인터스틱(이하 &quot;회사&quot;)은 「개인정보 보호법」 등 관련
        법령에 따라 이용자의 개인정보를 보호하고, 이와 관련된 고충을 신속하게
        처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제1조 (수집하는 개인정보 항목 및 수집 방법)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ① 회사는 서비스 제공을 위해 다음 개인정보를 수집합니다.
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>1. 필수 항목</strong>
      </p>
      <ul className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          소셜 로그인 정보: 카카오/Google/Apple 계정의 닉네임, 이메일, 고유
          식별자
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이메일 로그인 정보: 이메일, 비밀번호(암호화 저장), 이름
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약 정보: 임대차 주소, 보증금, 월세, 계약 기간, 임대인 성명
        </li>
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>2. 선택 항목</strong>
      </p>
      <ul className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          연락처(전화번호)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약서 사진
        </li>
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        <strong>3. 자동 수집 항목</strong>
      </p>
      <ul className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          GPS 위치정보 (촬영 시 계약 주소 일치 검증 목적)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          촬영 사진 및 서버 타임스탬프
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          기기 정보 (OS 버전, 앱 버전, 디바이스 모델)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          서비스 이용 기록, 접속 로그
        </li>
      </ul>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ② 수집 방법: 앱 내 직접 입력, 소셜 로그인 API, 이메일 회원가입, 카메라
        촬영, GPS 센서
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제2조 (개인정보의 이용 목적)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사는 수집한 개인정보를 다음 목적으로 이용합니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회원 가입 및 본인 확인
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          임대차 하자 증거 사진 촬영·저장·관리
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          AI(OpenAI GPT-4o Vision) 기반 하자 감지 및 입퇴실 비교 분석
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          법적 참고용 PDF 하자 증거 리포트 생성
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          GPS 위치 검증을 통한 촬영 신뢰성 확보
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          결제 처리 및 구독 관리
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          서비스 개선, 통계 분석, 고객 지원
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제3조 (개인정보의 보유 및 이용 기간)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약 관련 데이터(사진, 분석 결과, 리포트): 계약 종료일로부터 5년간
          보관 (주택임대차보호법상 보증금 반환 청구권 소멸시효 기준)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회원 정보: 회원 탈퇴 시까지 보유하며, 탈퇴 요청 시 지체 없이
          파기합니다. 다만 법령에 따른 보관 의무가 있는 경우 해당 기간까지
          보관합니다.
          <ul className="pl-5 mb-2">
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              전자상거래법에 따른 계약·결제 기록: 5년
            </li>
            <li className="text-sm text-gray-500 leading-[1.8] mb-1">
              통신비밀보호법에 따른 접속 로그: 3개월
            </li>
          </ul>
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          보유 기간 경과 또는 처리 목적 달성 후 지체 없이 파기합니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제4조 (개인정보의 제3자 제공)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ① 회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ② 다음 경우에 한하여 예외로 합니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자가 사전에 동의한 경우
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          법령에 의한 요청이 있는 경우 (법원 명령, 수사기관 요청 등)
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제5조 (개인정보 처리의 위탁)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁합니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          Supabase (AWS 인프라): 데이터베이스 호스팅 및 파일 스토리지
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          OpenAI: AI 이미지 분석 (하자 감지 및 비교 분석)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          카카오/Google/Apple: 소셜 로그인 인증
        </li>
      </ol>
      <p className="text-[13px] text-gray-400 mt-1">
        ※ 위탁 업무 수행 시 개인정보가 안전하게 처리되도록 관리·감독합니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제6조 (개인정보의 안전성 확보 조치)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사는 개인정보의 안전성 확보를 위해 다음 조치를 취합니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          계약서 사진, 주소 등 민감 정보의 암호화 저장
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          SSL/TLS 통신 암호화
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          접근 권한 관리 및 인증 토큰(JWT) 기반 접근 통제
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          사진 파일의 안전한 클라우드 스토리지(AWS S3) 저장
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          서버 타임스탬프를 통한 촬영 시점 위변조 방지
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          정기적인 보안 점검 및 취약점 진단
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제7조 (이용자의 권리와 행사 방법)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ① 이용자는 언제든지 다음 권리를 행사할 수 있습니다.
      </p>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          개인정보 열람 요구
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          오류 정정 요구
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">삭제 요구</li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          처리 정지 요구
        </li>
      </ol>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ② 권리 행사는 앱 내 마이페이지 또는 고객센터(support@interstick.co.kr)를
        통해 가능합니다.
      </p>
      <p className="text-sm text-gray-500 leading-[1.8]">
        ③ 회원 탈퇴 시 개인정보는 법령상 보관 의무가 있는 경우를 제외하고 지체
        없이 파기됩니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제8조 (위치정보의 수집)
      </h2>
      <ol className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사는 촬영 시 GPS 위치정보를 수집하여 계약 주소와의 일치 여부를
          검증합니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          위치정보는 촬영 시점에만 일회성으로 수집되며, 별도의 실시간 추적은
          하지 않습니다.
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이용자는 기기 설정에서 위치 권한을 거부할 수 있으며, 이 경우 위치 검증
          기능이 제한됩니다.
        </li>
      </ol>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제9조 (자동 수집 장치의 설치·운영 및 거부)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사는 서비스 이용 과정에서 기기 식별 정보, 접속 로그 등을 자동으로
        수집할 수 있습니다. 이용자는 기기 설정을 통해 이를 거부할 수 있으며,
        거부 시 일부 서비스 이용이 제한될 수 있습니다.
      </p>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제10조 (개인정보 보호책임자)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        회사의 개인정보 보호책임자는 다음과 같습니다.
      </p>
      <ul className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          회사명: 주식회사 인터스틱 (interstick Corp)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          이메일: privacy@interstick.co.kr
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          개인정보 관련 문의: support@interstick.co.kr
        </li>
      </ul>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제11조 (권익 침해 구제 방법)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        개인정보 침해로 인한 피해 구제를 받으시려면 아래 기관에 문의하실 수
        있습니다.
      </p>
      <ul className="pl-5 mb-2">
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          개인정보침해신고센터: 118 (privacy.kisa.or.kr)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          대검찰청 사이버수사과: 1301 (www.spo.go.kr)
        </li>
        <li className="text-sm text-gray-500 leading-[1.8] mb-1">
          경찰청 사이버수사국: 182 (ecrm.cyber.go.kr)
        </li>
      </ul>

      <h2 className="text-base font-bold text-gray-900 mt-7 mb-2">
        제12조 (개인정보 처리방침 변경)
      </h2>
      <p className="text-sm text-gray-500 leading-[1.8]">
        이 개인정보 처리방침은 2026년 3월 1일부터 적용됩니다. 변경 시 앱 내
        공지사항을 통해 사전 고지합니다.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 text-[13px] text-gray-400 text-center">
        <p>주식회사 인터스틱 (interstick Corp)</p>
      </div>
    </div>
  );
}
