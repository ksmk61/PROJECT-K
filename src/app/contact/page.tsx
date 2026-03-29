import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "문의하기 | PROJECT-K ERP",
  description: "PROJECT-K ERP 데모 신청, 요금 문의, 맞춤 구축 상담. 평일 24시간 내 답변.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 font-semibold text-sm mb-3">CONTACT</p>
          <h1 className="text-4xl font-extrabold mb-4">문의하기</h1>
          <p className="text-blue-100 text-lg">
            데모 신청, 견적 문의, 기술 지원 모두 이 양식으로 연락주세요.<br />
            평일 기준 24시간 내 답변드립니다.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">연락처</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800">이메일</p>
                    <a href="mailto:ksmk61@gmail.com" className="text-blue-600 hover:underline">
                      ksmk61@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">⏱️</span>
                  <div>
                    <p className="font-semibold text-gray-800">응답 시간</p>
                    <p>평일 9:00–18:00<br />24시간 내 회신</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <p className="font-bold text-blue-800 mb-2">무료 데모란?</p>
              <p className="text-blue-700 text-sm leading-relaxed">
                실제 ERP 시스템을 직접 조작해볼 수 있는 데모 계정을 제공합니다.
                별도 설치 없이 브라우저에서 즉시 체험 가능합니다.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
