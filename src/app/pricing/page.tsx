import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "요금제 | PROJECT-K ERP",
  description: "PROJECT-K ERP 요금제. 스타터·스탠다드·엔터프라이즈 플랜과 맞춤 구축 옵션.",
};

const plans = [
  {
    name: "스타터",
    tag: null,
    price: "월 49만원",
    priceNote: "부터",
    desc: "소규모 팀을 위한 핵심 ERP",
    users: "최대 5명",
    features: [
      "거래처·연락처 관리",
      "계약 관리 (월 50건)",
      "재무 기본 (매출·매입)",
      "인사 관리 (사원 정보·급여)",
      "영업 관리 (견적서)",
      "Azure 클라우드 호스팅",
      "이메일 지원",
    ],
    notIncluded: ["유지보수 모듈", "API 연동", "커스텀 필드", "전용 담당자"],
    cta: "무료 데모 신청",
    ctaHref: "/contact",
    highlight: false,
  },
  {
    name: "스탠다드",
    tag: "추천",
    price: "월 129만원",
    priceNote: "부터",
    desc: "성장 중인 중소기업을 위한 풀 ERP",
    users: "최대 20명",
    features: [
      "스타터 전체 포함",
      "유지보수 모듈 (설비·작업)",
      "무제한 계약 처리",
      "커스텀 필드 (테이블당 10개)",
      "REST API 연동",
      "완전한 감사 추적 (이력 관리)",
      "전화·이메일 지원",
      "월 1회 사용자 교육",
    ],
    notIncluded: ["전용 담당자", "SLA 보장", "커스텀 모듈 개발"],
    cta: "무료 데모 신청",
    ctaHref: "/contact",
    highlight: true,
  },
  {
    name: "엔터프라이즈",
    tag: null,
    price: "별도 협의",
    priceNote: "",
    desc: "복잡한 프로세스·대규모 조직",
    users: "인원 무제한",
    features: [
      "스탠다드 전체 포함",
      "전용 담당자 배정",
      "SLA 99.9% 보장",
      "커스텀 모듈 개발 포함",
      "커스텀 필드 무제한",
      "전용 Azure 환경",
      "온사이트 교육",
      "24/7 기술 지원",
    ],
    notIncluded: [],
    cta: "엔터프라이즈 문의",
    ctaHref: "/contact",
    highlight: false,
  },
];

const faqs = [
  {
    q: "도입 초기 설정 비용이 따로 있나요?",
    a: "초기 구축·설정 비용이 별도 발생합니다. 규모에 따라 100만~500만원 수준이며, 상담 시 정확한 견적을 드립니다.",
  },
  {
    q: "기존 Excel 데이터를 이전할 수 있나요?",
    a: "네. 스탠다드 이상 플랜에서 초기 데이터 마이그레이션을 지원합니다. 복잡한 이관의 경우 별도 공수가 발생할 수 있습니다.",
  },
  {
    q: "사용자 수가 늘면 어떻게 되나요?",
    a: "사용자 추가는 언제든 가능합니다. 상위 플랜으로 업그레이드하거나 사용자 단위 추가 요금제를 선택할 수 있습니다.",
  },
  {
    q: "계약 해지 시 데이터는 어떻게 되나요?",
    a: "계약 종료 전 전체 데이터를 Excel/CSV 포맷으로 내려받을 수 있도록 제공합니다. 데이터 잠금은 없습니다.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-700 font-semibold text-sm mb-3">PRICING</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            합리적인 요금제
          </h1>
          <p className="text-gray-500 text-lg">
            규모에 맞는 플랜을 선택하고, 필요할 때 업그레이드하세요.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.highlight
                  ? "bg-blue-700 border-blue-700 text-white shadow-2xl scale-105"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-extrabold text-xl ${p.highlight ? "text-white" : "text-gray-900"}`}>
                    {p.name}
                  </span>
                  {p.tag && (
                    <span className="text-xs font-bold bg-amber-400 text-gray-900 px-2 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-4 ${p.highlight ? "text-blue-200" : "text-gray-500"}`}>
                  {p.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-extrabold ${p.highlight ? "text-white" : "text-gray-900"}`}>
                    {p.price}
                  </span>
                  {p.priceNote && (
                    <span className={`text-sm ${p.highlight ? "text-blue-200" : "text-gray-400"}`}>
                      {p.priceNote}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-1 ${p.highlight ? "text-blue-200" : "text-gray-400"}`}>
                  {p.users}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-blue-100" : "text-gray-600"}`}>
                    <span className={`flex-shrink-0 mt-0.5 ${p.highlight ? "text-amber-300" : "text-blue-500"}`}>✓</span>
                    {f}
                  </li>
                ))}
                {p.notIncluded.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-blue-400 line-through" : "text-gray-300 line-through"}`}>
                    <span className="flex-shrink-0 mt-0.5">✕</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={p.ctaHref}
                className={`block text-center font-bold py-3 rounded-xl transition-colors ${
                  p.highlight
                    ? "bg-amber-400 hover:bg-amber-300 text-gray-900"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">
          * 요금은 부가세 별도입니다. 연간 계약 시 2개월 무료.
        </p>
      </section>

      {/* Custom CTA Banner */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              표준 플랜이 맞지 않는다면?
            </h3>
            <p className="text-gray-500 text-sm">
              업무 프로세스가 복잡하거나 특수한 요구사항이 있다면 맞춤 구축을 검토하세요.
              처음부터 설계하여 딱 맞는 ERP를 만들어드립니다.
            </p>
          </div>
          <Link
            href="/custom"
            className="flex-shrink-0 bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            맞춤 구축 알아보기 →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">자주 묻는 질문</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="font-bold text-gray-900 mb-2">Q. {f.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
