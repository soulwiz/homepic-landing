import {
  Sparkles,
  Download,
  Camera,
  ScanSearch,
  FileText,
  ShieldCheck,
  GraduationCap,
  CalendarClock,
  Building2,
  CreditCard,
  Check,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { FAQSection } from "./components/FAQSection";

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-20 py-16 md:py-20 bg-gradient-to-b from-[#F0F7F7] to-white">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">
              AI 기반 하자 증거 수집
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            보증금,
            <br />
            지키는 게<br />
            실력이다
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            입주 시 촬영한 사진과 퇴실 시 사진을 AI가 비교 분석하여 자연마모와
            세입자 과실을 구분합니다.
            <br />
            법적 참고용 PDF 리포트까지 한 번에.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#download"
              className="flex items-center gap-2.5 bg-teal text-white rounded-[14px] px-8 py-4 text-base font-semibold shadow-lg shadow-teal/20 hover:bg-teal-dark transition"
            >
              <Download className="w-5 h-5" />
              무료 다운로드
            </Link>
            <Link
              href="#features"
              className="flex items-center gap-2.5 bg-white text-gray-900 rounded-[14px] px-8 py-4 text-base font-semibold border border-gray-200 hover:border-gray-300 transition"
            >
              자세히 보기
            </Link>
          </div>
        </div>
        {/* 폰 목업 */}
        <div className="flex-shrink-0">
          <div className="w-[280px] md:w-[340px] h-[560px] md:h-[680px] bg-gray-50 rounded-[40px] border-2 border-teal/10 shadow-2xl shadow-teal/10 overflow-hidden">
            <div className="w-full h-full bg-[#FAFAFA] flex flex-col">
              <div className="px-5 pt-12 pb-4">
                <p className="text-[10px] text-gray-400">
                  안녕하세요, 홍길동님
                </p>
                <p className="text-[16px] font-bold text-gray-900 mt-0.5">
                  입퇴실 하자, AI로 꼼꼼하게
                </p>
              </div>
              <div className="mx-5 bg-teal rounded-2xl p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold">
                    보증금 보호 현황
                  </span>
                </div>
                <p className="text-[10px] text-white/70 mb-3">
                  15건의 계약이 관리중입니다
                </p>
                <div className="flex bg-white/10 rounded-xl">
                  <div className="flex-1 text-center py-3 border-r border-white/20">
                    <p className="text-2xl font-extrabold">15</p>
                    <p className="text-[10px] text-white/70">관리중</p>
                  </div>
                  <div className="flex-1 text-center py-3">
                    <p className="text-2xl font-extrabold">3</p>
                    <p className="text-[10px] text-white/70">퇴실 예정</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mx-5 mt-4">
                {[
                  { label: "계약 등록", bg: "bg-teal-light" },
                  { label: "촬영하기", bg: "bg-orange-50" },
                  { label: "리포트", bg: "bg-red-50" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex-1 border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-2"
                  >
                    <div className={`w-10 h-10 ${item.bg} rounded-full`} />
                    <span className="text-[11px] font-medium text-gray-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-5 mt-4">
                <p className="text-[10px] font-semibold text-gray-400 tracking-widest mb-2">
                  MY CONTRACTS
                </p>
                <div className="border border-gray-200 rounded-xl p-3">
                  <span className="text-[9px] bg-teal-light text-teal font-semibold px-2 py-0.5 rounded-full">
                    입주중
                  </span>
                  <p className="text-[13px] font-bold text-gray-900 mt-1.5">
                    서울 마포구 월드컵북로 396
                  </p>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-teal font-medium">
                      보증금 5,000 / 월 65만원
                    </span>
                    <span className="text-[10px] text-gray-400">
                      ~2027.06.15
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-20 py-20 md:py-24">
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">주요 기능</span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
            보증금을 지키는 3단계
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            입주부터 퇴실까지, 홈픽이 꼼꼼하게 챙겨드립니다
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Camera,
              step: "STEP 1",
              title: "공간별 체크리스트 촬영",
              desc: "주방, 거실, 침실, 화장실까지\n체크리스트를 따라 빠짐없이 촬영.\n서버 타임스탬프 자동 기록.",
            },
            {
              icon: ScanSearch,
              step: "STEP 2",
              title: "AI 입퇴실 비교 분석",
              desc: "입주·퇴실 사진을 AI가 비교.\n자연마모 vs 세입자 과실을\n자동으로 구분합니다.",
            },
            {
              icon: FileText,
              step: "STEP 3",
              title: "법적 증거 PDF 리포트",
              desc: "타임스탬프, GPS 검증 포함\n하자 증거 리포트를\nPDF로 다운로드.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center gap-5 p-8 rounded-[20px] bg-[#F8FAF9]"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <span className="text-xs font-bold text-teal tracking-[2px] font-mono">
                {item.step}
              </span>
              <h3 className="text-[22px] font-bold text-gray-900 text-center">
                {item.title}
              </h3>
              <p className="text-[15px] text-gray-400 text-center leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 추천 대상 */}
      <section
        id="recommend"
        className="px-6 md:px-20 py-20 md:py-24 bg-gradient-to-b from-teal to-teal-dark"
      >
        <h2 className="text-3xl md:text-[44px] font-extrabold text-white text-center tracking-tight mb-16">
          이런 분께 추천합니다
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "사회초년생",
              desc: "첫 자취를 시작하는 분.\n입주할 때 꼼꼼히 기록해두면\n퇴실 때 보증금을 지킬 수 있어요.",
            },
            {
              icon: CalendarClock,
              title: "계약 만료 예정자",
              desc: "곧 퇴실하시는 분.\n퇴실 전 AI 비교 분석으로\n부당한 원상복구 비용을 예방하세요.",
            },
            {
              icon: ShieldCheck,
              title: "분쟁 예방파",
              desc: "미리미리 대비하는 분.\n법적 참고자료를 확보해두면\n분쟁 시 유리한 위치를 잡을 수 있어요.",
            },
            {
              icon: Building2,
              title: "다주택 관리자",
              desc: "여러 계약을 관리하는 분.\n한 앱에서 모든 계약의 현황을\n한눈에 파악할 수 있습니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 p-8 rounded-[20px] bg-white/10"
            >
              <item.icon className="w-8 h-8 text-white" />
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 요금 안내 */}
      <section id="pricing" className="px-6 md:px-20 py-20 md:py-24">
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 bg-teal/10 rounded-full px-4 py-2 w-fit mx-auto mb-4">
            <CreditCard className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">요금 안내</span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
            심플한 요금제
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            앱 다운로드와 촬영은 무료, 리포트만 유료
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6 p-10 rounded-[20px] border border-gray-200">
            <span className="text-lg font-bold text-teal">무료</span>
            <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
              ₩0
            </span>
            <span className="text-sm text-gray-400">
              앱 다운로드 · 촬영 · 관리
            </span>
            <div className="w-full h-px bg-gray-100" />
            <div className="flex flex-col gap-3.5 w-full">
              {[
                "공간별 체크리스트 촬영",
                "서버 타임스탬프 자동 기록",
                "GPS 위치 검증",
                "계약 관리 대시보드",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Check className="w-[18px] h-[18px] text-teal flex-shrink-0" />
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 p-10 rounded-[20px] bg-teal shadow-xl shadow-teal/20">
            <span className="text-lg font-bold text-white/60">리포트 생성</span>
            <span className="text-5xl font-extrabold text-white tracking-tight">
              ₩9,900
            </span>
            <span className="text-sm text-white/50">1회 / 계약 건당</span>
            <div className="w-full h-px bg-white/20" />
            <div className="flex flex-col gap-3.5 w-full">
              {[
                "입퇴실 사진 AI 비교 분석",
                "자연마모 / 세입자 과실 판정",
                "법적 참고용 PDF 리포트",
                "타임스탬프 + GPS 검증 포함",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Check className="w-[18px] h-[18px] text-white flex-shrink-0" />
                  <span className="text-sm text-white/80">{text}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-white text-teal rounded-xl py-3.5 text-base font-semibold hover:bg-gray-50 transition mt-2 cursor-pointer">
              리포트 생성하기
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section
        id="download"
        className="px-6 md:px-20 py-20 md:py-24 bg-gradient-to-b from-teal to-teal-dark text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          지금 바로 보증금을 지키세요
        </h2>
        <p className="text-lg text-white/60 mt-4">
          무료로 시작하고, 퇴실할 때 리포트만 결제하세요
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button className="flex items-center gap-2.5 bg-white text-teal rounded-[14px] px-8 py-4 text-base font-semibold hover:bg-gray-50 transition cursor-pointer">
            <Smartphone className="w-5 h-5" />
            App Store
          </button>
          <button className="flex items-center gap-2.5 bg-white/20 text-white rounded-[14px] px-8 py-4 text-base font-semibold border border-white/30 hover:bg-white/30 transition cursor-pointer">
            <Smartphone className="w-5 h-5" />
            Google Play
          </button>
        </div>
      </section>
    </main>
  );
}
