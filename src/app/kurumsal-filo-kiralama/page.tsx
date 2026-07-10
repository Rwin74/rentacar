import { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { RelatedCars, RelatedServices, RelatedBlogs } from '@/components/RelatedSections';

export const metadata: Metadata = {
  title: 'Denizli Kurumsal Filo Kiralama | Aylık & Yıllık Rent A Car',
  description: 'Şirketinize özel avantajlı fiyatlarla Denizli kurumsal araç kiralama. Filo kiralama ile vergi avantajı ve operasyonel kolaylık sağlayın.',
  alternates: {
    canonical: '/kurumsal-filo-kiralama',
  }
};

export default function ServicePage() {
  const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": [
    "LocalBusiness",
    "AutoRental"
  ],
  "name": "Emir Rent A Car",
  "image": "https://www.emirdenizliotokiralama.com/images/logo.png",
  "@id": "https://www.emirdenizliotokiralama.com",
  "url": "https://www.emirdenizliotokiralama.com",
  "telephone": "+905543950404",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Altıntop Mah. 834 Sok. No:1",
    "addressLocality": "Merkezefendi",
    "addressRegion": "Denizli",
    "postalCode": "20100",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7816,
    "longitude": 29.0831
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "23:59"
  }
};
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kurumsal kiralama için minimum süre nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kurumsal kiralama hizmetimiz genellikle minimum 1 aylık periyotlarla başlamakta olup 1, 2 veya 3 yıla kadar sözleşme yapılabilmektedir."
      }
    },
    {
      "@type": "Question",
      "name": "Bakım ve onarım giderleri kime ait?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filo kiralamada periyodik bakım, lastik değişimi, kasko, sigorta ve MTV gibi tüm masraflar Emir Rent A Car'a aittir."
      }
    }
  ]
};
  const breadcrumbSchema = {
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
      "name": "Denizli Kurumsal Filo Kiralama | Aylık & Yıllık Rent A Car",
      "item": "https://www.emirdenizliotokiralama.com/kurumsal-filo-kiralama"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <main className="flex-1 w-full bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-8 tracking-tight">Şirketler İçin Kurumsal Araç ve Filo Kiralama</h1>
          
          <div className="prose prose-stone prose-lg max-w-none text-stone-800 space-y-6">
            <p className="lead text-xl text-stone-800 font-medium">
              Şirketler İçin Kurumsal Araç ve Filo Kiralama alanında Denizli'nin en güvenilir adresi Emir Rent A Car olarak, siz değerli misafirlerimize kesintisiz, güvenli ve ekonomik çözümler sunuyoruz. Yılların getirdiği sektör tecrübemiz ve genişleyen modern araç filomuzla yanınızdayız.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Neden Emir Rent A Car'ı Tercih Etmelisiniz?</h2>
            <p className="text-stone-800">
              Gelişen ve büyüyen Denizli'nin ulaşım ihtiyaçları, esnek ve hızlı çözümleri zorunlu kılıyor. Şehre ister iş, ister gezi, ister aile ziyareti için gelin, doğru araç kiralama firmasını bulmak yolculuğunuzun kalitesini doğrudan etkileyecektir. Firmamız, %100 yasal rent a car kaskosu, periyodik bakımları eksiksiz yapılmış araçları ve 7/24 kesintisiz müşteri desteğiyle sektörde fark yaratmaktadır. 
            </p>
            <p className="text-stone-800">
              Müşteri memnuniyetini merkeze alan hizmet anlayışımızla, araç kiralama sürecindeki karmaşık evrak işlerini ve prosedürleri en aza indirgiyoruz. İnternet sitemiz üzerinden dakikalar içinde rezervasyon yapabilir veya <Link href="/araclar" className="text-red-600 font-semibold hover:underline">araç filomuz</Link> içinden bütçenize en uygun modeli seçerek hemen yola koyulabilirsiniz. Gizli ücretler, son dakika sürprizleri veya ekstra kesintilerle asla karşılaşmazsınız; fiyatlarımız tamamen şeffaftır.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Filomuz ve Araç Seçenekleri</h2>
            <p className="text-stone-800 leading-relaxed mb-6">
              Her bütçeye ve her ihtiyaca uygun geniş bir araç parkına sahibiz. Yakıt ekonomisi arayanlar için <Link href="/arac-kiralama/renault-clio-otomatik-benzin" className="text-red-600 font-semibold hover:underline">Renault Clio</Link> veya <Link href="/arac-kiralama/hyundai-i20-otomatik-benzin" className="text-red-600 font-semibold hover:underline">Hyundai i20</Link> gibi pratik B segmenti araçlarımız; uzun yolda yüksek bagaj hacmi arayan geniş aileler için <Link href="/arac-kiralama/fiat-egea-manuel-dizel" className="text-red-600 font-semibold hover:underline">Fiat Egea</Link> modellerimiz mevcuttur.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Lüks ve gösterişten ödün vermek istemeyen müşterilerimiz için <Link href="/arac-kiralama/peugeot-3008-otomatik-dizel" className="text-red-600 font-semibold hover:underline">Peugeot 3008</Link> ve <Link href="/arac-kiralama/vw-tiguan-otomatik-benzin" className="text-red-600 font-semibold hover:underline">VW Tiguan</Link> gibi donanımlı SUV araçlarımız; protokol, düğün veya VIP karşılama organizasyonları için <Link href="/arac-kiralama/mercedes-c200-amg-otomatik-benzin" className="text-red-600 font-semibold hover:underline">Mercedes C200</Link> ve <Link href="/arac-kiralama/mercedes-vito-otomatik-dizel" className="text-red-600 font-semibold hover:underline">VIP Vito</Link> minibüslerimiz de filomuzda yer almaktadır. Hangi aracı seçerseniz seçin, üstün bir hijyen standardıyla ve full depoya yakın yakıtla size teslim edilir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Şeffaf Sözleşme ve Tam Kapsamlı Güvenlik</h2>
            <p className="text-stone-800 leading-relaxed mb-6">
              Kiralama sözleşmelerimiz, tamamen Tüketici Hakları'na uygun, şeffaf ve anlaşılır maddelerden oluşmaktadır. Bireysel kiralama ve <Link href="/kurumsal-filo-kiralama" className="text-red-600 font-semibold hover:underline">Kurumsal Filo Kiralama</Link> taleplerinizde, aracı kiraladığınız günden teslim edeceğiniz güne kadar ne ödeyeceğinizi net olarak bilirsiniz. Araçlarımızdaki Yasal Rent A Car Kaskosu, olası trafik kazalarında sizin ve karşı tarafın masraflarını teminat altına alır. Çarpışma, hırsızlık veya doğal afet gibi istenmeyen durumlarda dahi hukuki ve maddi olarak koruma altındasınız.
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Dahası, acil bir durumda ulaşabileceğiniz 7/24 açık destek hattımızla, çekici hizmetinden ikame araca kadar tüm süreçleri hızlıca organize ediyoruz. Tatilinizin veya iş seyahatinizin yarıda kalmaması için tüm operasyonel gücümüzü kullanıyoruz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Denizli'de Görülmesi Gereken Yerler</h2>
            <p className="text-stone-800 leading-relaxed mb-6">
              Aracınızı teslim aldıktan sonra Denizli'nin eşsiz güzelliklerini keşfetmek için harika bir yolculuk sizi bekliyor. <Link href="/pamukkale-arac-kiralama" className="text-red-600 font-semibold hover:underline">Pamukkale</Link> Travertenleri ve Hierapolis antik kenti, dünyada eşi benzeri olmayan bir doğa harikasıdır. Buradaki Kleopatra havuzunda yüzebilir, antik tiyatronun heybetine tanıklık edebilirsiniz. 
            </p>
            <p className="text-stone-800 leading-relaxed mb-6">
              Şifalı kırmızı sularıyla ünlü Karahayıt bölgesi, özellikle kış turizmi ve sağlık turizmi için vazgeçilmezdir. Eğer doğa ile iç içe olmak isterseniz, Teleferik ile Bağbaşı Yaylası'na çıkabilir, çam ormanları arasında harika bir Ege kahvaltısı yapabilirsiniz. Daha fazla gezi rehberi ve ipucu için <Link href="/bilgibankasi" className="text-red-600 font-semibold hover:underline">Bilgi Bankası</Link> sayfamızdaki içeriklerimize mutlaka göz atmalısınız.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Nasıl Rezervasyon Yaparım?</h2>
            <p className="text-stone-800 leading-relaxed mb-6">
              Rezervasyon sürecimiz son derece basittir. İhtiyacınıza uygun aracı web sitemizden seçtikten sonra WhatsApp üzerinden veya doğrudan iletişim numaralarımızdan bizi arayarak saniyeler içinde adınıza rezerve edebilirsiniz. İster merkezdeki ofisimizden, ister <Link href="/cardak-havalimani-arac-kiralama" className="text-red-600 font-semibold hover:underline">Çardak Havalimanı</Link> terminalinden, isterseniz de otelinizden aracınızı teslim alma esnekliğine sahipsiniz. Emir Rent A Car, koşulsuz müşteri memnuniyeti ilkesiyle Denizli yollarındaki en iyi yol arkadaşınız olmaya devam edecektir.
            </p>
          </div>

          <FAQAccordion 
            title="Şirketler İçin Kurumsal Araç ve Filo Kiralama Hakkında Sıkça Sorulan Sorular" 
            faqs={[{"question":"Kurumsal kiralama için minimum süre nedir?","answer":"Kurumsal kiralama hizmetimiz genellikle minimum 1 aylık periyotlarla başlamakta olup 1, 2 veya 3 yıla kadar sözleşme yapılabilmektedir."},{"question":"Bakım ve onarım giderleri kime ait?","answer":"Filo kiralamada periyodik bakım, lastik değişimi, kasko, sigorta ve MTV gibi tüm masraflar Emir Rent A Car'a aittir."}]} 
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-16 border-t border-stone-200 pt-16">
          <RelatedCars currentSlug="none" />
          <RelatedServices currentSlug="kurumsal-filo-kiralama" />
          <RelatedBlogs currentSlug="none" />
        </div>
      </main>
    </>
  );
}
