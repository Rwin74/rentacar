import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merkezefendi Araç Kiralama | Emir Rent A Car',
  description: 'Merkezefendi araç kiralama hizmetiyle Denizli merkezde ekonomik, güvenilir ve bakımlı araç kiralama seçenekleri.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/merkezefendi-arac-kiralama',
  },
  openGraph: {
    title: 'Merkezefendi Araç Kiralama | Emir Rent A Car',
    description: 'Merkezefendi araç kiralama hizmetiyle Denizli merkezde ekonomik, güvenilir ve bakımlı araç kiralama seçenekleri.',
    url: 'https://www.emirdenizliotokiralama.com/merkezefendi-arac-kiralama',
  }
};

export default function MerkezefendiAracKiralama() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Merkezefendi ofisiniz nerede bulunuyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Merkez ofisimiz Denizli'nin kalbi sayılan 15 Mayıs Mahallesi'nde yer almaktadır. Merkezefendi içerisindeki her adrese çok kısa sürede ulaşım sağlayabilmekteyiz."
        }
      },
      {
        "@type": "Question",
        "name": "Araç kiralarken kredi kartı zorunlu mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm kurumsal rent a car firmalarında olduğu gibi güvence bedeli (bloke) işlemi için kiracının kendi adına kayıtlı bir kredi kartı ibraz etmesi zorunludur."
        }
      },
      {
        "@type": "Question",
        "name": "Aracı farklı bir ilçede iade edebilir miyim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Araç iade işleminizi önceden bildirmek kaydıyla Havalimanı dahil Denizli'nin birçok noktasında, belirlenen teslimat ücretleri (drop fee) dahilinde yapabilirsiniz."
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
        "name": "Merkezefendi Araç Kiralama",
        "item": "https://www.emirdenizliotokiralama.com/merkezefendi-arac-kiralama"
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
              Merkezefendi Araç Kiralama
            </h1>
            
            <p>
              Denizli'nin en hareketli ve ticaret hacmi en yüksek ilçelerinden biri olan Merkezefendi, hem iş amaçlı ziyaretlerde hem de günlük yaşam dinamizminde sürekli bir mobilite gerektirir. Kalabalık şehir trafiğinde hızlı, konforlu ve güvenilir ulaşım sağlamak için <strong>Merkezefendi araç kiralama</strong> hizmetlerimizden yararlanarak gününüzün kontrolünü elinize alabilirsiniz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Denizli Merkezde Kaliteli Oto Kiralama</h2>
            <p>
              Emir Rent A Car olarak Denizli merkeze konumlanmış güçlü altyapımızla, Merkezefendi sınırları içerisinde talep ettiğiniz aracı çok kısa sürelerde hazır hale getiriyoruz. Merkez ofisimize yapacağınız ufak bir ziyaret veya <Link href="/" className="text-red-600 hover:underline">ana sayfamızdan</Link> gerçekleştireceğiniz online rezervasyon ile ulaşım probleminizi anında çözmekteyiz.
            </p>
            <p>
              <Link href="/denizli-rent-a-car" className="text-red-600 hover:underline">Denizli rent a car</Link> ihtiyaçlarınıza anında cevap veren uzman kadromuz, sözleşme evraklarının hızlıca hazırlanmasını sağlayarak sizi bürokratik engellerden kurtarır. İhtiyaç duymanız halinde, aracınızın teslimatı doğrudan ev adresinize veya iş yerinize de yönlendirilebilmektedir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Her Kullanıma Uygun Zengin Filo</h2>
            <p>
              Şehir içi kullanımda park kolaylığı sağlayan ekonomik ve küçük sınıf araçlar en çok tercih edilenler arasındadır. Düşük yakıt tüketimine sahip, otomatik vites rahatlığı sunan bu araçlarla Merkezefendi'nin işlek caddelerinde kolayca dolaşabilirsiniz. Daha prestijli görüşmeleriniz veya aile gezileriniz için ise lüks sedan ve SUV modellerimiz hizmetinizdedir.
            </p>
            <p>
              Kararsız kaldıysanız <Link href="/araclar" className="text-red-600 hover:underline">araçlarımız</Link> sayfasını ziyaret ederek bütçenize, yolcu kapasitesine ve yakıt türüne göre filtreleme yapabilir; size en uygun aracı hemen rezerve edebilirsiniz. Tüm araçlarımız düzenli bakımlara ve dezenfeksiyon işlemlerine tabi tutularak, tertemiz bir şekilde teslim edilmektedir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Güvenli, Şeffaf ve Sorunsuz Kiralamalar</h2>
            <p>
              Firmamız, müşteri güvenini her şeyin üzerinde tutan kurumsal bir politika benimsemiştir. Sözleşmelerimizde gizli maddeler, sürpriz ücretler veya sonradan ortaya çıkan maliyetler yer almaz. Fiyatlarımızı kiralama işleminin başında net bir şekilde görür ve onaylarsınız. 
            </p>
            <p>
              Bununla birlikte filomuzdaki tüm araçlar standart kasko değil, %100 oranında Yasal Rent A Car Kaskosu ile korunmaktadır. Aracınızın arıza yapması veya kaza durumunda yetkili teknik ekibimiz hızlıca müdahale eder, yolda kalmamanız adına yedek araç ile size destek olmaya devam ederiz. Dışarıdan veya hava yoluyla Denizli'ye gelecek konuklarınız için dilerseniz <Link href="/cardak-havalimani-arac-kiralama" className="text-red-600 hover:underline">Havalimanı araç kiralama</Link> paketlerimizden de faydalanabilirsiniz.
            </p>
          </article>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Merkezefendi ofisiniz nerede bulunuyor?</h3>
                <p className="text-stone-600">Merkez ofisimiz 15 Mayıs Mahallesi'nde merkezi bir konumda yer almaktadır. Merkezefendi ve Pamukkale bölgelerinden bize çok kolay bir şekilde ulaşabilirsiniz.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Araç kiralarken kredi kartı zorunlu mu?</h3>
                <p className="text-stone-600">Evet, sektör standartları gereği trafik cezaları veya sonradan oluşabilecek küçük pürüzlere karşı provizyon (güvence bedeli blokesi) almak adına, aracı kiralayan kişinin kendi adına kayıtlı kredi kartı olması zorunludur.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Aracı farklı bir ilçede veya havalimanında iade edebilir miyim?</h3>
                <p className="text-stone-600">Aracı kiralarken veya kiralama süresi içerisinde bize haber vermeniz durumunda, farklı bir lokasyonda (örneğin Çardak Havalimanı) aracın iade alınması mümkündür. Mesafe ve operasyon maliyetine göre ufak bir teslimat bedeli uygulanabilir.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
             <Link href="/araclar" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Şimdi Fiyat Al
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
