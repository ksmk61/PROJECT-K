import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PROJECT-K ERP | 중소기업을 위한 스마트 ERP",
  description:
    "국내 중소기업 맞춤 ERP 솔루션. 계약·재무·인사·영업을 하나로. 합리적인 비용, 빠른 도입, 완전한 커스터마이징.",
  keywords: "ERP, 중소기업ERP, 클라우드ERP, Django ERP, 맞춤ERP구축",
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
