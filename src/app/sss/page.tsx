import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Emir Rent A Car Denizli',
  description: 'Araç kiralama şartları, depozito süreleri, kasko kapsamı ve Denizli oto kiralama hakkında en çok merak edilen soruların yanıtları.',
  alternates: {
    canonical: '/sss',
  },
};

export default function SSS() {
  const faqs = [
    {
      q: "Araç kiralamada kilometre sınırı var mıdır?",
      a: "Evet, günlük araç kiralamalarında genellikle 200 KM ile 300 KM arası limit uygulanmaktadır. Aylık veya uzun dönem kiralamalarda özel paketler sunulmaktadır. İhtiyacınıza uygun kilometre paketleri için rezervasyon esnasında bilgi alabilirsiniz."
    },
    {
      q: "Depozito / Provizyon ücreti alınıyor mu?",
      a: "Trafik cezaları, HGS geçişleri veya olası hasarlar için kredi kartınızdan belirli bir tutarda provizyon alınmaktadır. Araç tesliminden sonra sorunsuz olması durumunda provizyon bankanızın süresine bağlı olarak 1-7 iş günü içinde iade edilir."
    },
    {
      q: "Kiralanan aracın kaskosu var mı?",
      a: "Tüm araçlarımızda standart veya full Rent A Car kaskosu bulunmaktadır. Hasar durumunda polis raporu / tutanak tutulması kasko geçerliliği için yasal zorunluluktur."
    },
    {
      q: "Havalimanına araç teslimatınız var mı?",
      a: "Evet, Çardak Havalimanı (Denizli) dahil olmak üzere belirli konumlara önceden rezervasyon yapılması koşuluyla araç vale / teslimat hizmetimiz bulunmaktadır."
    },
    {
      q: "Araç kiralama şartları nelerdir?",
      a: "Minimum kiralama yaşı 21 ve en az 2 yıllık B sınıfı ehliyet sahibi olunması gerekmektedir. Üst segment araçlar için bu şartlar (yaş: 25, ehliyet süresi: 3-5 yıl) değişebilir."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.emirdenizliotokiralama.com.tr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sıkça Sorulan Sorular",
        "item": "https://www.emirdenizliotokiralama.com.tr/sss"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex-1 w-full bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Emir Rent A Car&apos;dan araç kiralarken aklınıza takılabilecek tüm soruların yanıtlarını sizin için derledik.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden 2xl:open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-stone-800 list-none group-open:bg-red-50/50 group-open:text-red-700 transition-colors">
                  {faq.q}
                  <span className="text-red-500 group-open:rotate-180 transition-transform duration-300">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-6 pt-2 text-stone-600 leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-red-900 mb-2">Başka sorunuz mu var?</h3>
            <p className="text-red-700 mb-6">Müşteri hizmetlerimiz 7/24 size yardımcı olmaktan memnuniyet duyar.</p>
            <a  
              href="https://wa.me/905543950404?text=Merhaba,%20araç%20kiralama%20hakkında%20sorularım%20vardı." 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/30"
            >
              WhatsApp&apos;tan Sorun
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
