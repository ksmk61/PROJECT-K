import Link from "next/link";

const modules = [
  { icon: "🤝", name: "거래처 관리", desc: "거래처·연락처 통합 관리, 방문 이력 추적" },
  { icon: "📋", name: "계약 관리", desc: "계약서·청구 일정·구매 기록 자동화" },
  { icon: "💰", name: "재무 관리", desc: "매출·매입·정산 실시간 현황" },
  { icon: "👥", name: "인사 관리", desc: "사원 정보·급여·근태 통합 관리" },
  { icon: "📊", name: "영업 관리", desc: "견적서 발행·영업 파이프라인 추적" },
  { icon: "🔧", name: "유지보수", desc: "설비 점검·작업 일정·보고서 자동 생성" },
];

const stats = [
  { value: "6+", label: "통합 모듈" },
  { value: "100%", label: "데이터 이력 추적" },
  { value: "Azure", label: "클라우드 인프라" },
  { value: "24h", label: "빠른 도입 시작" },
];

const strengths = [
  {
    icon: "💸",
    title: "합리적인 비용",
    desc: "오픈소스 기반으로 SAP 대비 1/10 이하 비용. 라이선스 없이 핵심 기능 모두 사용.",
  },
  {
    icon: "⚡",
    title: "빠른 커스터마이징",
    desc: "Django 기반으로 신규 기능 추가가 빠릅니다. 벤더 대기 없이 즉시 업무 반영.",
  },
  {
    icon: "🔍",
    title: "완전한 감사 추적",
    desc: "모든 데이터 변경 이력 자동 기록. 감사·규제 대응 즉시 가능.",
  },
  {
    icon: "☁️",
    title: "Azure 클라우드",
    desc: "Azure 위에서 안전하게 운영. 보안·백업·확장 모두 자동.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-28 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 bg-blue-600/40 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-500/40">
            🚀 Django 6.0 + Azure 기반 엔터프라이즈 ERP
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            중소기업을 위한<br />
            <span className="text-amber-400">스마트 ERP</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            계약·재무·인사·영업·유지보수를 하나의 시스템으로.<br />
            SAP 수준의 기능을, 중소기업 예산으로.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-blue-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              무료 데모 신청 →
            </Link>
            <Link
              href="/product"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              제품 살펴보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-blue-700">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm mb-2">ALL-IN-ONE</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              업무 전체를 하나로
            </h2>
            <p className="text-gray-500 mt-4 text-lg">흩어진 Excel·개별 솔루션을 하나의 ERP로 통합하세요.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{m.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
            >
              전체 기능 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm mb-2">WHY PROJECT-K</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              왜 PROJECT-K ERP인가
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((s) => (
              <div key={s.title} className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-4xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            우리 회사에 맞는 ERP가 필요하다면?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            업종·규모·프로세스에 맞춘 맞춤형 ERP 구축 서비스를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/custom"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              맞춤 구축 알아보기
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              상담 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
