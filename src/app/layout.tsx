import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emirdenizliotokiralama.com"),
  title: "Denizli Araç Kiralama & Rent A Car | %100 Kasko & Yeni Araçlar",
  description: "Denizli'de güvenilir araç kiralama (rent a car) deneyimi. Uygun fiyatlar, yeni model kaskolu araçlar ve havalimanı teslim fırsatıyla hemen rezervasyon yapın!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Denizli Araç Kiralama & Rent A Car | Emir Oto Kiralama",
    description: "Denizli'de güvenilir araç kiralama deneyimi. Uygun fiyatlar, 2024-2026 model kaskolu araçlar ve ücretsiz Çardak Havalimanı teslim fırsatları.",
    url: "https://www.emirdenizliotokiralama.com",
    siteName: "Emir Rent A Car Denizli",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Emir Rent A Car Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denizli Rent A Car | Emir Oto Kiralama - Havalimanı Teslim",
    description: "Denizli ucuz rent a car, denizli araç kiralama ve profesyonel denizli oto kiralama firması. Denizli rent a car ofisimizden güvenle araç kiralayın.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className={`${inter.className} flex flex-col min-h-screen bg-stone-50 text-stone-900`}>
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-FPY4K1DPBQ`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FPY4K1DPBQ');
              gtag('config', 'G-W1HC1TPKNE');
            `}
          </Script>
        </>
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
