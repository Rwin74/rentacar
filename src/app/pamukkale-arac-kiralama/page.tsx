import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pamukkale Araç Kiralama | Emir Rent A Car',
  description: 'Pamukkale araç kiralama hizmetiyle turistik geziler, iş seyahatleri ve şehir içi kullanım için uygun araç seçenekleri.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/pamukkale-arac-kiralama',
  },
  openGraph: {
    title: 'Pamukkale Araç Kiralama | Emir Rent A Car',
    description: 'Pamukkale araç kiralama hizmetiyle turistik geziler, iş seyahatleri ve şehir içi kullanım için uygun araç seçenekleri.',
    url: 'https://www.emirdenizliotokiralama.com/pamukkale-arac-kiralama',
  }
};

export default function PamukkaleAracKiralama() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pamukkale'de araç kiralama ofisiniz var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merkez ofisimiz Denizli içinde olup, Pamukkale bölgesindeki otellere vale ile araç teslimat hizmetimiz bulunmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Pamukkale turu için hangi aracı önerirsiniz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dar yollarda manevra kabiliyeti yüksek olan B segment ekonomik araçlar en çok tercih edilenlerdir. Ancak aileniz kalabalıksa SUV veya Minibüs seçeneklerimiz daha uygundur."
        }
      },
      {
        "@type": "Question",
        "name": "Şoförlü araç kiralama yapıyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Öncelikli faaliyet alanımız bireysel (şoförsüz) rent a car olmakla birlikte, özel turistik talepler için çağrı merkezimizle görüşerek VİP transfer ve şoförlü kiralama detaylarını öğrenebilirsiniz."
        }
      }
    ]
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Emir Rent A Car",
    "image": "https://www.emirdenizliotokiralama.com/images/logo.png",
    "url": "https://www.emirdenizliotokiralama.com",
    "telephone": "+905543950404",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Mayıs Mahallesi Atatürk Caddesi No:31 Adım Apartmanı",
      "addressLocality": "Merkez",
      "addressRegion": "Denizli",
      "addressCountry": "TR"
    }
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.emirdenizliotokiralama.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pamukkale Araç Kiralama",
        "item": "https://www.emirdenizliotokiralama.com/pamukkale-arac-kiralama"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      
      <main className="flex-1 w-full bg-stone-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <article className="prose prose-stone lg:prose-xl max-w-none text-stone-700">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-8 tracking-tight">
              Pamukkale Araç Kiralama
            </h1>
            
            <p>
              Dünya Kültür Mirası listesinde baş sıraları çeken travertenleri, antik havuzu (Kleopatra Havuzu) ve devasa Hierapolis Antik Kenti ile Pamukkale, sadece Denizli'nin değil, Türkiye'nin en değerli turizm markalarından biridir. Bu harikulade güzellikleri tam anlamıyla keşfedebilmek ve zaman sınırlarına takılmamak için <strong>Pamukkale araç kiralama</strong> hizmetlerimizden yararlanabilirsiniz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Turistik Geziler İçin İdeal Ulaşım</h2>
            <p>
              Tur şirketlerine bağlı kalmadan Pamukkale'nin eşsiz atmosferini özgürce içinize çekmek paha biçilemez bir duygudur. Beyaz cennetin tadını çıkardıktan hemen sonra aracınıza atlayıp Karahayıt'taki kırmızı su kaplıcalarına geçebilir, oradan Laodikeia Antik Kenti'ne tarihi bir yolculuk düzenleyebilirsiniz.
            </p>
            <p>
              <Link href="/denizli-rent-a-car" className="text-red-600 hover:underline">Denizli rent a car</Link> altyapımız, tam da bu tür serbest rotalar çizen misafirlerimizin işini kolaylaştırmak için tasarlanmıştır. Tur paketlerinin sınırlı zaman ve rotalarına sıkışmak yerine, kendi tatilinizin şoförü olarak anın tadını tam anlamıyla çıkarabilirsiniz.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Her Seyahate Uygun Araç Seçenekleri</h3>
            <p>
              Emir Rent A Car olarak tek başınıza yapacağınız bir keşif turundan, geniş aile tatillerine kadar her konsepte uygun araçlar bulunduruyoruz. Eğer amacınız sadece otel ve ören yerleri arasında mekik dokumaksa şehir içi trafiğinde pratik kullanım sunan hatchback veya B segment sedan araçlarımız tam size göredir.
            </p>
            <p>
              Kalabalık bir ekip, valiz fazlalığı olan gruplar veya daha konforlu bir yolculuk talep eden VIP misafirlerimiz için üst segment SUV'ler ve minibüsler devreye girmektedir. Hangi aracı seçeceğinize henüz karar vermediyseniz, detaylı özelliklerin yer aldığı <Link href="/araclar" className="text-red-600 hover:underline">araçlarımız sayfasından</Link> tüm filomuzu inceleyebilirsiniz.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Otelinize Kadar Vale Teslimatı</h3>
            <p>
              Pamukkale tatiliniz boyunca şubeye gelerek vakit kaybetmenizi istemiyoruz. Otelinizin resepsiyonuna veya bulunduğunuz noktaya, kiraladığınız aracı önceden dezenfekte edilmiş ve teslimata hazır bir biçimde yönlendiriyoruz. Ulaşımı hava yoluyla sağlayan misafirlerimiz içinse <Link href="/cardak-havalimani-arac-kiralama" className="text-red-600 hover:underline">Çardak havalimanı teslim</Link> hizmetimiz sayesinde ulaşım sorunu en başından kökten çözülmektedir.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Tam Güvence ve Şeffaf Fiyatlar</h3>
            <p>
              Kurumsal bir anlayışla sunduğumuz araç kiralama süreçlerinde en büyük sözümüz "sürprizsiz bir deneyim"dir. Yasal rent a car kaskolu araçlarımızla yolculuğunuza çıkarken, araçta oluşabilecek teknik sorunlarda veya kaza durumlarında tam destek sağlıyoruz. Size sadece Pamukkale'nin beyaz dokusunda harika anılar biriktirmek ve tatilinizin keyfini çıkarmak kalıyor. <Link href="/" className="text-red-600 hover:underline">Ana sayfamızdan</Link> veya iletişim numaralarımızdan hemen uygun fiyat tekliflerimizi alabilirsiniz.
            </p>
          </article>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h3 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Pamukkale'de araç kiralama ofisiniz var mı?</h3>
                <p className="text-stone-600">Fiziksel ofisimiz Denizli merkez bölgesindedir, ancak Pamukkale bölgesindeki turistik tesislerde veya otellerde konaklayan misafirlerimize vale sistemi ile doğrudan araç teslimatı ve iade alımı sağlamaktayız.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Pamukkale turu için hangi aracı önerirsiniz?</h3>
                <p className="text-stone-600">Ören yerleri arasındaki yollar ve otoparklar düşünülerek, manevra kabiliyeti yüksek ekonomik hatchback ve sedan araçlar çok pratik olacaktır. Ancak bagaj yükünüz fazlaysa veya kalabalık bir aileyseniz SUV kiralamanız daha rahat bir tur yapmanızı sağlar.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Şoförlü araç kiralama yapıyor musunuz?</h3>
                <p className="text-stone-600">Temel iş modelimiz günlük veya uzun dönem bireysel (şoförsüz) araç kiralama üzerine kuruludur. Ancak özel VIP transfer talepleriniz için müşteri hizmetlerimizle iletişime geçtiğinizde müsaitlik durumuna göre size özel çözümler üretebilmekteyiz.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
             <Link href="/araclar" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Araç Fiyatlarına Göz At
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
