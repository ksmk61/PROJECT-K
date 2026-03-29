"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const inquiryTypes = [
  "무료 데모 신청",
  "요금제 문의",
  "맞춤 ERP 구축 문의",
  "기술 지원",
  "기타",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: inquiryTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`[PROJECT-K ERP] ${form.type} - ${form.company || form.name}`);
    const body = encodeURIComponent(
      `이름: ${form.name}\n회사: ${form.company}\n이메일: ${form.email}\n전화: ${form.phone}\n문의 유형: ${form.type}\n\n내용:\n${form.message}`
    );
    window.location.href = `mailto:ksmk61@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">문의가 접수되었습니다</h3>
        <p className="text-gray-500">
          이메일 클라이언트가 열렸다면, 전송 후 완료됩니다.<br />
          평일 24시간 내에 답변 드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">회사명</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="(주)예시회사"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">연락처</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">문의 유형</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          문의 내용 <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="회사 규모, 필요한 기능, 현재 사용 중인 시스템 등을 알려주시면 더 빠른 답변이 가능합니다."
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl text-base transition-colors"
      >
        {loading ? "처리 중..." : "문의 보내기"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        이메일 클라이언트를 통해 전송됩니다.
      </p>
    </form>
  );
}
