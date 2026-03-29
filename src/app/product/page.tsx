import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품 소개 | PROJECT-K ERP",
  description: "거래처·계약·재무·인사·영업·유지보수를 하나로 통합한 중소기업 ERP 솔루션. 모든 모듈 상세 기능을 확인하세요.",
};

const modules = [
  {
    icon: "🤝",
    name: "거래처 관리",
    tag: "CRM",
    features: [
      "거래처·연락처 통합 DB 관리",
      "방문 이력 및 상담 내역 추적",
      "거래처별 계약·매출 연동",
      "담당자 배정 및 변경 이력",
    ],
  },
  {
    icon: "📋",
    name: "계약 관리",
    tag: "Contract",
    features: [
      "전자 계약서 작성 및 보관",
      "청구 일정 자동화",
      "계약 갱신 알림",
      "구매·판매 계약 이력 관리",
    ],
  },
  {
    icon: "💰",
    name: "재무 관리",
    tag: "Finance",
    features: [
      "매출·매입 실시간 현황",
      "정산·지출 내역 관리",
      "부가세 신고용 데이터 자동 집계",
      "손익 현황 대시보드",
    ],
  },
  {
    icon: "👥",
    name: "인사 관리",
    tag: "HR",
    features: [
      "사원 정보·직급·부서 관리",
      "급여 계산 및 명세서 발행",
      "근태(출퇴근·휴가) 관리",
      "인사 발령·이력 추적",
    ],
  },
  {
    icon: "📊",
    name: "영업 관리",
    tag: "Sales",
    features: [
      "견적서 작성 및 발송",
      "영업 파이프라인 시각화",
      "수주·수발주 관리",
      "영업 담당자별 성과 추적",
    ],
  },
  {
    icon: "🔧",
    name: "유지보수",
    tag: "Maintenance",
    features: [
      "설비·장비 점검 일정 관리",
      "작업 지시서 발행",
      "보고서 자동 생성",
      "고객사별 유지보수 이력",
    ],
  },
];

const techStack = [
  { label: "Backend", value: "Django 6.0 + PostgreSQL" },
  { label: "Frontend", value: "Bootstrap 5 + 반응형 UI" },
  { label: "인프라", value: "Azure Cloud (Container Apps)" },
  { label: "인증/보안", value: "OAuth 2.0 + RBAC 권한 관리" },
  { label: "이력 추적", value: "django-simple-history (전 테이블)" },
  { label: "API", value: "REST API + Admin 대시보드" },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 font-semibold text-sm mb-3">PRODUCT OVERVIEW</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            업무 전체를 하나로 통합
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            흩어진 Excel과 개별 솔루션을 PROJECT-K ERP 하나로 대체하세요.<br />
            6개 핵심 모듈이 완전히 연동됩니다.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900">핵심 모듈</h2>
            <p className="text-gray-500 mt-3">모든 모듈은 데이터를 공유하고 실시간으로 연동됩니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{m.name}</h3>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Trail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-blue-700 font-semibold text-sm mb-2">AUDIT TRAIL</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              모든 변경 이력이<br />자동으로 기록됩니다
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              누가, 언제, 무엇을 변경했는지 전 테이블에 걸쳐 자동 추적됩니다.
              감사(audit) 대응, 규제 준수, 내부 이슈 추적이 즉시 가능합니다.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              {["전 테이블 자동 변경 이력 저장", "사용자·타임스탬프·변경 전후 값 기록", "관리자 콘솔에서 즉시 조회", "데이터 복원 및 롤백 지원"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm">
            <p className="text-gray-500 text-xs mb-3"># 이력 예시</p>
            <p><span className="text-blue-400">history_id:</span> 1842</p>
            <p><span className="text-blue-400">table:</span> contracts_contract</p>
            <p><span className="text-blue-400">action:</span> <span className="text-yellow-400">UPDATE</span></p>
            <p><span className="text-blue-400">changed_by:</span> kim@company.com</p>
            <p><span className="text-blue-400">changed_at:</span> 2026-03-29 09:14:22</p>
            <p className="mt-2"><span className="text-blue-400">field:</span> contract_amount</p>
            <p><span className="text-blue-400">old:</span> <span className="text-red-400">12,000,000</span></p>
            <p><span className="text-blue-400">new:</span> <span className="text-green-400">15,000,000</span></p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm mb-2">TECH STACK</p>
            <h2 className="text-3xl font-extrabold text-gray-900">검증된 기술 스택</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((t) => (
              <div key={t.label} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 border border-gray-100 shadow-sm">
                <span className="text-xs font-bold text-gray-400 w-20 flex-shrink-0">{t.label}</span>
                <span className="font-semibold text-gray-800 text-sm">{t.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">직접 확인해보세요</h2>
        <p className="text-blue-200 mb-8 text-lg">무료 데모를 통해 실제 ERP 화면을 체험할 수 있습니다.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-amber-400 hover:bg-amber-300 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            무료 데모 신청 →
          </Link>
          <Link href="/pricing" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            요금제 보기
          </Link>
        </div>
      </section>
    </>
  );
}
