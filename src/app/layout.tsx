import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PROJECT-K ERP | 중소기업을 위한 스마트 ERP",
  description:
    "국내 중소기업 맞춤 ERP 솔루션. 계약·재무·인사·영업을 하나로. 합리적인 비용, 빠른 도입, 완전한 커스터마이징.",
  keywords: "ERP, 중소기업ERP, 클라우드ERP, Django ERP, 맞춤ERP구축, ERP솔루션, 중소기업솔루션",
  openGraph: {
    title: "PROJECT-K ERP | 중소기업을 위한 스마트 ERP",
    description:
      "SAP 수준의 기능을 중소기업 예산으로. 계약·재무·인사·영업을 하나의 시스템으로 통합하세요.",
    url: "https://project-k-web.vercel.app",
    siteName: "PROJECT-K ERP",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJECT-K ERP | 중소기업을 위한 스마트 ERP",
    description:
      "SAP 수준의 기능을 중소기업 예산으로. 계약·재무·인사·영업을 하나의 시스템으로 통합하세요.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
