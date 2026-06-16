import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Çardak Havalimanı Araç Kiralama | Emir Rent A Car',
  description: 'Çardak Havalimanı araç kiralama hizmetiyle uçağınızdan indikten sonra aracınızı hızlıca teslim alın. Emir Rent A Car Denizli.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/cardak-havalimani-arac-kiralama',
  },
  openGraph: {
    title: 'Çardak Havalimanı Araç Kiralama | Emir Rent A Car',
    description: 'Çardak Havalimanı araç kiralama hizmetiyle uçağınızdan indikten sonra aracınızı hızlıca teslim alın. Emir Rent A Car Denizli.',
    url: 'https://www.emirdenizliotokiralama.com/cardak-havalimani-arac-kiralama',
  }
};

export default function CardakHavalimaniAracKiralama() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Uçağım rötar yaparsa ne olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rezervasyon esnasında uçuş numaranızı (PNR) aldığımız için uçağınızı anlık takip ediyoruz. Uçağınız ne kadar rötar yaparsa yapsın personelimiz sizi bekliyor olacaktır."
        }
      },
      {
        "@type": "Question",
        "name": "Havalimanı araç teslimi için ekstra ücret alınıyor mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Denizli Çardak Havalimanı araç teslim süreçlerimiz için uygulanan fiyatlandırma, kiralama gün sayısına ve araç modeline göre değişebilir. Fiyatlarımızı teklif alırken şeffaf bir şekilde görebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Aracı teslim ederken nereye bırakacağım?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dönüş uçuşunuzdan önce havalimanı Giden Yolcu otoparkında yetkili personelimizle buluşup aracı saniyeler içerisinde iade edebilirsiniz."
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
        "name": "Çardak Havalimanı Araç Kiralama",
        "item": "https://www.emirdenizliotokiralama.com/cardak-havalimani-arac-kiralama"
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
              Çardak Havalimanı Araç Kiralama
            </h1>
            
            <p>
              İş gezisi, turizm seyahati veya memleket ziyareti... Amacınız ne olursa olsun, Denizli'ye hava yolu ile ulaşmayı tercih eden misafirlerimiz için en büyük ihtiyaç havalimanından şehir merkezine veya çevre ilçelere ulaşımın sağlanmasıdır. İşte bu noktada <strong>Çardak havalimanı araç kiralama</strong> hizmetimiz, otobüs veya taksi bekleme derdini ortadan kaldıran en pratik ve lüks çözüm olarak karşınıza çıkmaktadır.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Uçaktan İndikten Sonra Araç Teslim Kolaylığı</h2>
            <p>
              Uzun ve yorucu bir uçuşun ardından hiçbirimiz ağır valizlerle havalimanı dışında toplu taşıma araçları beklemek istemeyiz. İşleyişimizi tamamen misafirlerimizin konforu üzerine kurduk. <strong>Denizli Çardak Havalimanı</strong> terminaline iniş yaptığınız anda dışarı adım atar atmaz aracınızın hazır olması, seyahatinize stressiz bir başlangıç yapmanızı sağlar.
            </p>
            <p>
              Uyguladığımız kusursuz operasyon sayesinde, rezervasyonunuzu önceden oluşturduğunuz takdirde <em>uçaktan indikten sonra araç teslim</em> süreci yalnızca birkaç dakikanızı alır. Uzun formlar ve yorucu bürokratik işlemler yerine, hazır olan evraklarınızı imzalayarak anahtarınızı hemen teslim alabilirsiniz. <Link href="/" className="text-red-600 hover:underline">Ana sayfamızdan</Link> uçuş tarihinize göre araç sorgulaması yaparak vakit kaybetmeden planlamanızı tamamlayabilirsiniz.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Denizli Havalimanı Rent A Car Sektöründeki Farkımız</h3>
            <p>
              Bizi diğer firmalardan ayıran en önemli özelliklerimizden biri uçuş takibini titizlikle gerçekleştirmemizdir. <strong>Denizli havalimanı rent a car</strong> hizmeti sunan firmamız, uçuş kodunuz üzerinden uçağınızın durumunu canlı izler. Uçağınız erken inse de, saatlerce rötar yapsa da temsilcimiz çıkış kapısında isminizin yazılı olduğu bir tabela veya şirket forması ile sizi mutlaka karşılayacaktır.
            </p>
            <p>
              Havalimanından merkeze yaklaşık 45 dakikalık konforlu bir sürüş yapmanız gerekir. Filomuzda bulunan tüm kiralık araçlar, uzun ve kısa mesafeli yolculuklara uygun olarak periyodik bakımlardan geçirilmiştir. Güvenliğinizi asla şansa bırakmıyor; lastik, fren ve motor kontrolleri eksiksiz olan araçları tarafınıza yönlendiriyoruz. Dilerseniz <Link href="/araclar" className="text-red-600 hover:underline">araçlar sayfamızdan</Link> dilediğiniz segmentteki aracı detaylı olarak inceleyebilirsiniz.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Havalimanı Araç Teslimi Nasıl Gerçekleşiyor?</h3>
            <p>
              Müşteri deneyimini en üst seviyeye taşımak amacıyla <strong>havalimanı araç teslimi</strong> sürecini üç basit adıma indirgedik:
            </p>
            <ul>
              <li><strong>Adım 1 - Rezervasyon:</strong> Seyahatiniz netleştiğinde web sitemiz veya çağrı merkezimiz üzerinden aracı, tarihleri ve uçuş numaranızı sisteme girerek rezervasyon oluşturun.</li>
              <li><strong>Adım 2 - Karşılama:</strong> İniş saatinizde Gelen Yolcu terminalinde ekibimiz sizi bekliyor olacak. Kendilerini kolaylıkla fark edeceksiniz.</li>
              <li><strong>Adım 3 - Teslimat:</strong> Kimlik ve ehliyet kontrollerinin ardından imzanızı atıp kiralama bedelini (önceden ödemediyseniz) tahsil ederek aracınızı otoparktan çıkartıp size teslim ediyoruz.</li>
            </ul>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Araç İadesi ve Dönüş Yolculuğu</h3>
            <p>
              Kiralama süreniz bittiğinde ve artık dönüş yolculuğu vakti geldiğinde de aynı kolaylığı sağlıyoruz. Çardak Havalimanı'na gelerek Giden Yolcu kapısı önünde veya belirtilen havalimanı otoparkında aracımızı yetkili personellerimize teslim edebilirsiniz. Hasar ve yakıt kontrolünün hızla tamamlanmasının ardından check-in bankolarına yönelerek evinize huzurla dönebilirsiniz. Gerek teslim alırken gerekse iade ederken işlemlerinizi en kısa sürede halletmeniz için buradayız.
            </p>
          </article>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h3 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Uçağım rötar yaparsa ne olur?</h3>
                <p className="text-stone-600">Rezervasyon esnasında uçuş numaranızı (PNR) aldığımız için uçağınızı canlı sistemler üzerinden anlık takip ediyoruz. Uçağınız ne kadar rötar yaparsa yapsın personelimiz terminal çıkışında sizi bekliyor olacaktır. Gece geç saatlere sarkan uçuşlar için de nöbetçi personelimiz mutlaka bulunmaktadır.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Havalimanı araç teslimi için ekstra ücret alınıyor mu?</h3>
                <p className="text-stone-600">Denizli Çardak Havalimanı araç teslim süreçlerimiz için uygulanan fiyatlandırma, kiralama gün sayısına ve kampanya şartlarına göre değişiklik gösterebilir. Online rezervasyon sırasında eğer teslim noktası için bir drop (tek yön veya teslimat) bedeli varsa, bu tarafınıza tüm şeffaflığıyla gösterilmektedir.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Aracı teslim ederken nereye bırakacağım?</h3>
                <p className="text-stone-600">Dönüş uçuşunuzdan makul bir süre önce firmamızla iletişime geçtiğinizde personelimiz havalimanı otoparkında veya giden yolcu peronunda sizi bekler. Aracı saniyeler içerisinde iade edebilir, vakit kaybetmeden uçağınıza binebilirsiniz.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
             <Link href="/araclar" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Havalimanına Araç Rezerve Et
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
