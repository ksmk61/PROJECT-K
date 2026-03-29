import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤 ERP 구축 | PROJECT-K ERP",
  description: "업종·규모·프로세스에 맞춘 맞춤형 ERP 구축 서비스. Django 기반 빠른 커스터마이징, 합리적인 비용.",
};

const process = [
  { step: "01", title: "요구사항 분석", desc: "업무 프로세스, 기존 시스템, 데이터 구조를 분석합니다. 현장 인터뷰 및 문서 검토를 통해 정확한 범위를 정의합니다.", duration: "1주" },
  { step: "02", title: "설계 및 기획", desc: "데이터 모델, 화면 설계(Wireframe), API 명세를 작성합니다. 고객 확인 후 개발을 시작합니다.", duration: "1-2주" },
  { step: "03", title: "개발 및 구현", desc: "Django CBV 기반으로 빠르게 구현합니다. 2주 단위 스프린트로 진행 상황을 공유합니다.", duration: "4-8주" },
  { step: "04", title: "테스트 및 검수", desc: "기능 테스트, 데이터 마이그레이션 검증, 사용자 수용 테스트(UAT)를 진행합니다.", duration: "1-2주" },
  { step: "05", title: "배포 및 운영", desc: "Azure Cloud 배포, 운영팀 교육, 초기 안정화 지원을 제공합니다.", duration: "1주" },
];

const industries = [
  { icon: "🏭", name: "제조업", desc: "생산 공정 관리, 설비 유지보수, 자재 재고" },
  { icon: "🏗️", name: "건설·시공", desc: "프로젝트별 원가 관리, 하도급 계약, 공정표" },
  { icon: "🏥", name: "의료·헬스케어", desc: "환자·거래처 관리, 의료 장비 유지보수" },
  { icon: "📦", name: "도소매·유통", desc: "재고 관리, 발주·입출고, 거래처 정산" },
  { icon: "💼", name: "서비스업", desc: "고객 계약 관리, 인력 스케줄, 청구 자동화" },
  { icon: "🔬", name: "IT·기술 기업", desc: "프로젝트 관리, 인력 투입률, 기술 자산 추적" },
];

const reasons = [
  {
    icon: "⚡",
    title: "빠른 구현 속도",
    desc: "Django 기반으로 SAP 구현 기간의 1/3 수준. 평균 6-10주 내 운영 가능.",
  },
  {
    icon: "💸",
    title: "합리적인 비용",
    desc: "라이선스 없이 오픈소스 기반. SAP/Oracle ERP 대비 1/5~1/10 비용.",
  },
  {
    icon: "🔄",
    title: "자유로운 커스터마이징",
    desc: "벤더 의존 없이 언제든 기능 추가·변경. 비즈니스 변화에 즉시 대응.",
  },
  {
    icon: "☁️",
    title: "Azure 클라우드 운영",
    desc: "보안, 백업, 스케일아웃 모두 자동화. 서버 관리 부담 제로.",
  },
];

export default function CustomPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 font-semibold text-sm mb-3">CUSTOM ERP DEVELOPMENT</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            우리 회사만을 위한<br />
            <span className="text-amber-400">맞춤 ERP</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            표준 패키지로 해결되지 않는 복잡한 업무 프로세스,<br />
            처음부터 맞춤 설계합니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            맞춤 구축 상담 신청 →
          </Link>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm mb-2">WHY CUSTOM</p>
            <h2 className="text-3xl font-extrabold text-gray-900">맞춤 구축을 선택하는 이유</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-4xl flex-shrink-0">{r.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm mb-2">INDUSTRIES</p>
            <h2 className="text-3xl font-extrabold text-gray-900">구축 가능 업종</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {industries.map((i) => (
              <div key={i.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <span className="text-3xl mb-3 block">{i.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{i.name}</h3>
                <p className="text-gray-500 text-sm">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm mb-2">PROCESS</p>
            <h2 className="text-3xl font-extrabold text-gray-900">구축 프로세스</h2>
            <p className="text-gray-500 mt-3">평균 총 기간: <strong>8-14주</strong></p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
            <div className="space-y-8">
              {process.map((p, idx) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-700 text-white flex flex-col items-center justify-center z-10">
                    <span className="text-xs font-bold opacity-70">STEP</span>
                    <span className="font-extrabold text-sm">{p.step}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{p.duration}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">지금 바로 상담받으세요</h2>
        <p className="text-gray-400 text-lg mb-8">
          업무 프로세스를 알려주시면, 맞춤 제안서를 무료로 드립니다.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors"
        >
          무료 상담 신청 →
        </Link>
      </section>
    </>
  );
}
