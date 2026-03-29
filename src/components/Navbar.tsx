"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/product", label: "제품 소개" },
  { href: "/custom", label: "맞춤 구축" },
  { href: "/pricing", label: "요금제" },
  { href: "/contact", label: "문의하기" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-blue-700 tracking-tight">
            PROJECT-K
          </span>
          <span className="text-xs font-medium text-gray-400 hidden sm:block">
            ERP
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          무료 데모 신청
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            무료 데모 신청
          </Link>
        </div>
      )}
    </header>
  );
}
