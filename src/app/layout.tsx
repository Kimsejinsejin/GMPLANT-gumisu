import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GUMISU | 나만의 피부 밸런스를 위한 스킨케어",
  description: "건강한 피부를 위한 솔루션 GUMISU 코스메틱 공식 스토어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-8">{/* pt-8 to account for the top banner in Header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
