import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2">PROJECT-K ERP</p>
            <p className="text-sm leading-relaxed">
              중소기업을 위한 스마트 ERP 솔루션.<br />
              합리적인 비용으로 엔터프라이즈급 기능을.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">서비스</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/product" className="hover:text-white transition-colors">제품 소개</Link></li>
              <li><Link href="/custom" className="hover:text-white transition-colors">맞춤 ERP 구축</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">요금제</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">문의</p>
            <ul className="space-y-2 text-sm">
              <li>이메일: ksmk61@gmail.com</li>
              <li><Link href="/contact" className="hover:text-white transition-colors">문의 양식</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center">
          © 2026 PROJECT-K ERP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
