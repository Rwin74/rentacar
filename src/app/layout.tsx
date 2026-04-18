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
  metadataBase: new URL("https://www.emirdenizliotokiralama.com.tr"),
  title: "Denizli Rent A Car | Emir Oto Kiralama - Havalimanı Teslim",
  description: "Denizli ucuz rent a car, denizli araç kiralama ve profesyonel denizli oto kiralama firması arayışlarınızda Emir Rent A Car hizmetinizde. Denizli rent a car ofisimizden güvenle kiralayın.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Denizli Rent A Car | Emir Oto Kiralama - Havalimanı Teslim",
    description: "Denizli ucuz rent a car, denizli araç kiralama ve profesyonel denizli oto kiralama firması. Denizli rent a car ofisimizden güvenle kiralayın.",
    url: "https://www.emirdenizliotokiralama.com.tr",
    siteName: "Emir Rent A Car",
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
    description: "Denizli ucuz rent a car, denizli araç kiralama ve profesyonel denizli oto kiralama firması. Denizli rent a car ofisimizden güvenle kiralayın.",
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
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
