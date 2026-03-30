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

      {/* Comparison */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm mb-2">COMPARISON</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              다른 ERP와 비교해보세요
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-gray-500">항목</th>
                  <th className="px-6 py-4 font-bold text-blue-700 bg-blue-50">PROJECT-K</th>
                  <th className="px-6 py-4 font-semibold text-gray-500">SAP B1</th>
                  <th className="px-6 py-4 font-semibold text-gray-500">더존 iCUBE</th>
                  <th className="px-6 py-4 font-semibold text-gray-500">이카운트·위하고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["초기 비용", "낮음", "매우 높음", "높음", "낮음"],
                  ["월 운영 비용", "월 49만원~", "수백만원~", "수십~수백만원", "월 5~20만원"],
                  ["커스터마이징", "자유 (Django)", "제한적", "제한적", "거의 불가"],
                  ["도입 기간", "6–10주", "6–12개월", "3–6개월", "1–2주"],
                  ["클라우드", "Azure 완전 관리", "옵션", "일부", "클라우드"],
                  ["전체 이력 추적", "전 테이블 자동", "별도 설정", "제한", "제한"],
                  ["M365 연동", "Outlook·Teams·AD", "옵션", "제한", "없음"],
                ].map(([item, pk, sap, dz, ic]) => (
                  <tr key={item} className="hover:bg-gray-50/50">
                    <td className="px-6 py-3.5 font-medium text-gray-700">{item}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-blue-700 bg-blue-50/50">{pk}</td>
                    <td className="px-6 py-3.5 text-center text-gray-400">{sap}</td>
                    <td className="px-6 py-3.5 text-center text-gray-400">{dz}</td>
                    <td className="px-6 py-3.5 text-center text-gray-400">{ic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              무료 데모로 직접 확인 →
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

      {/* M365 Integration */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-blue-700 font-semibold text-sm">INTEGRATIONS</p>
              <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">선택 연동</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Microsoft 365와 연결하면<br />더 강력해집니다
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              M365 연동은 <strong>선택 사항</strong>입니다. 연동 없이도 ERP의 모든 핵심 기능을 사용할 수 있습니다.
              M365 계정이 있다면 아래 기능이 자동으로 활성화됩니다.
            </p>
            <ul className="space-y-3">
              {[
                { icon: "📅", title: "Outlook 일정 동기화", desc: "유지보수·작업 일정이 Outlook 캘린더와 자동 연동" },
                { icon: "💬", title: "Teams 알림", desc: "계약 승인 요청, 품의서 결재 알림을 Teams 채팅으로 수신" },
                { icon: "🏢", title: "Azure AD 조직도", desc: "M365 테넌트 사용자 기반으로 조직도 자동 구성·동기화" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <p className="font-bold text-gray-900 mb-6 text-center">연동 없이도 사용 가능한 기능</p>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "거래처·계약·재무·인사 관리",
                "견적서 발행 및 영업 파이프라인",
                "유지보수 일정 및 보고서 생성",
                "전 테이블 감사 추적",
                "Popbill 세금계산서·은행 연동",
                "PDF 보고서 자동 생성",
                "역할 기반 권한 관리",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 text-center mt-6">
              M365 연동은 설정 화면에서 언제든 추가 가능
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm mb-2">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              평균 3–4주면 운영 시작
            </h2>
            <p className="text-gray-500 mt-3">복잡한 구축 과정 없이 빠르게 도입합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "상담 & 분석", desc: "업무 프로세스·기존 시스템·데이터 구조를 파악합니다. 필요한 모듈과 커스터마이징 범위를 확정합니다.", duration: "1주" },
              { step: "02", title: "설정 & 이전", desc: "기존 Excel·DB 데이터를 ERP로 이전하고, 화면·권한·양식을 업무에 맞게 설정합니다.", duration: "1–2주" },
              { step: "03", title: "운영 시작", desc: "담당자 교육 후 실운영을 시작합니다. 초기 안정화 기간 동안 전담 지원을 제공합니다.", duration: "1주" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 text-white font-extrabold flex items-center justify-center mx-auto mb-5 text-lg">
                  {s.step}
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{s.duration}</span>
                <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="py-10 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-extrabold text-xl">월 49만원부터 시작</p>
            <p className="text-blue-200 text-sm mt-1">초기 구축비 별도 · 연간 계약 시 2개월 무료 · 부가세 별도</p>
          </div>
          <Link
            href="/pricing"
            className="flex-shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            요금제 자세히 보기 →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm mb-2">FAQ</p>
            <h2 className="text-3xl font-extrabold text-gray-900">자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "기존 Excel·ERP 데이터를 이전할 수 있나요?", a: "네. 스탠다드 이상 플랜에서 초기 데이터 마이그레이션을 지원합니다. 형식이 다르더라도 변환 작업을 통해 이전해드립니다." },
              { q: "사용자 수에 제한이 있나요?", a: "플랜별로 기본 사용자 수가 정해져 있으며, 추가 사용자는 유연하게 늘릴 수 있습니다. 엔터프라이즈 플랜은 무제한입니다." },
              { q: "인터넷 없이도 사용할 수 있나요?", a: "Azure 클라우드 기반이므로 인터넷 연결이 필요합니다. 사내망 구축이 필요한 경우 별도 문의 바랍니다." },
              { q: "계약 해지 시 데이터는 어떻게 되나요?", a: "계약 종료 전 전체 데이터를 Excel/CSV 포맷으로 내려받을 수 있습니다. 데이터 잠금은 없습니다." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5">
                <p className="font-bold text-gray-900 mb-1.5">Q. {f.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">A. {f.a}</p>
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
