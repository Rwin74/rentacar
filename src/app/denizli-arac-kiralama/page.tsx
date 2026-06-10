import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Denizli Araç Kiralama | Ekonomik ve Güvenilir Oto Kiralama',
  description: 'Denizli araç kiralama ihtiyaçlarınız için ekonomik, bakımlı ve geniş araç filosu. Günlük, haftalık ve aylık kiralama seçenekleri.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/denizli-arac-kiralama',
  },
  openGraph: {
    title: 'Denizli Araç Kiralama | Ekonomik ve Güvenilir Oto Kiralama',
    description: 'Denizli araç kiralama ihtiyaçlarınız için ekonomik, bakımlı ve geniş araç filosu.',
    url: 'https://www.emirdenizliotokiralama.com/denizli-arac-kiralama',
  }
};

export default function DenizliAracKiralama() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Araç teslim alırken hangi evraklar gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geçerli bir ehliyet, kimlik belgesi ve adınıza kayıtlı bir kredi kartı ibraz etmeniz yeterlidir."
        }
      },
      {
        "@type": "Question",
        "name": "Erken rezervasyon avantajlı mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kesinlikle evet. Özellikle yaz dönemi ve resmi tatillerde, seyahatinizden haftalar önce yapacağınız rezervasyonlar size çok daha ekonomik fiyatlar sağlar."
        }
      },
      {
        "@type": "Question",
        "name": "Kiralık araçla şehir dışına çıkılabilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, sözleşmenizde belirtilen sınırlar dahilinde araçlarımızla yurt içinde dilediğiniz rotaya seyahat edebilirsiniz."
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
        "name": "Denizli Araç Kiralama",
        "item": "https://www.emirdenizliotokiralama.com/denizli-arac-kiralama"
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
              Denizli Araç Kiralama
            </h1>
            
            <p>
              Hem iş seyahatlerinde profesyonel bir duruş sergilemek hem de ailece yapılacak tatillerde rahat ve güvenli bir yolculuk deneyimlemek için kaliteli bir ulaşıma ihtiyaç duyulur. <strong>Denizli araç kiralama</strong> alanında uzun yıllardır hizmet veren firmamız, yenilikçi araç filosu ve güler yüzlü ekibiyle daima müşterilerinin yanındadır. Hedefimiz sadece bir araç teslim etmek değil, sorunsuz ve keyifli bir sürüş deneyimini garanti etmektir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Ekonomik ve Güvenilir Oto Kiralama Çözümleri</h2>
            <p>
              Toplu taşıma veya taksi kullanımının getirdiği stres ve maliyet yükünü ortadan kaldırmak için en ideal yöntem, <Link href="/denizli-rent-a-car" className="text-red-600 hover:underline">Denizli rent a car</Link> hizmetlerinden faydalanmaktır. Ancak kiralama yaparken yalnızca ucuz fiyata değil, aracın mekanik durumuna, lastiklerine ve firmanın kurumsallığına da dikkat edilmesi gerekir.
            </p>
            <p>
              Emir Rent A Car olarak fiyat-performans dengesini en iyi şekilde kurduğumuz ekonomik segment araçlarımızla bütçenizi yormadan konforlu bir sürüş vaat ediyoruz. Ayrıca <Link href="/" className="text-red-600 hover:underline">ana sayfa</Link> üzerinden yapılan rezervasyonlarda dönemsel kampanyalar ve indirimlerle misafirlerimize sürpriz avantajlar sunmaktayız.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Geniş Araç Filosu ile Esnek Seçenekler</h2>
            <p>
              Müşterilerimizin talepleri günden güne değişmekte ve çeşitlenmektedir. Şehir içinde dar sokaklarda rahatça park edebileceğiniz küçük hatchback araçlardan, dağlık ve kırsal alanlara yapacağınız seyahatler için güçlü motora sahip SUV'lere kadar oldukça geniş bir ürün yelpazesi sunuyoruz.
            </p>
            <p>
              Ayrıca kalabalık aile grupları veya iş arkadaşlarınızla yapacağınız bayi toplantıları için 9 kişilik özel minibüslerimiz, yolculuğu eğlenceli ve ekonomik hale getiriyor. <Link href="/araclar" className="text-red-600 hover:underline">Tüm araçlarımızı detaylı inceleyerek</Link>, bagaj hacmi, yakıt türü ve vites seçeneğine göre filtreleme yapabilir, tam da ihtiyacınız olan aracı kolaylıkla rezerve edebilirsiniz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Müşteri Odaklı Hizmet Anlayışı</h2>
            <p>
              Bizim için en büyük reklam, mutlu ayrılan bir müşterinin tavsiyesidir. Bu bilinçle, araç kiralama süreçlerindeki tüm bürokratik engelleri ortadan kaldırarak işlemleri dakikalar içinde tamamlamanızı sağlıyoruz. Evrak yoğunluğunda boğulmadan, hızlıca anahtar teslimine geçilir.
            </p>
            <p>
              Tatilinize veya iş görüşmenize bir an evvel başlamanızı önemsiyoruz. Denizli oto kiralama işlemlerinde güveni tesis etmek amacıyla sözleşme öncesinde aracın etrafında yapılan kontroller, şeffaflıkla kayıt altına alınır. Sizlere kusursuz temizlenmiş, deposu dolu veya belirlenen seviyede teslim edilen araçlarımızla sorunsuz bir başlangıç yaşatıyoruz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Online Rezervasyon Kolaylığı</h2>
            <p>
              Gelişen teknolojiyi hizmet süreçlerimize entegre ederek, web sitemiz veya WhatsApp destek hattımız üzerinden sadece birkaç tıklama ile rezervasyon yapabilme ayrıcalığı tanıyoruz. Sistemimiz üzerinden seçtiğiniz tarih aralığını belirterek müsait araçları anında görüntüleyebilir, kredi kartsız ön rezervasyon imkanından yararlanabilirsiniz.
            </p>
            <p>
              İşlemlerinizin ardından müşteri temsilcilerimiz sizinle irtibata geçerek teyit alır ve herhangi bir özel talebiniz (bebek koltuğu, ek sürücü, navigasyon vb.) olup olmadığını öğrenir. Böylece Denizli'ye geldiğinizde aracınız tam da istediğiniz donanımlarla sizin için hazır bekliyor olur.
            </p>
          </article>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Araç teslim alırken hangi evraklar gerekiyor?</h3>
                <p className="text-stone-600">Geçerli bir ehliyet, kimlik belgesi ve adınıza kayıtlı bir kredi kartı ibraz etmeniz yeterlidir. Ticari kiralamalarda vergi levhası gibi ek evraklar istenebilir.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Erken rezervasyon avantajlı mıdır?</h3>
                <p className="text-stone-600">Kesinlikle evet. Özellikle yaz dönemi ve resmi tatillerde, seyahatinizden haftalar önce yapacağınız rezervasyonlar size çok daha ekonomik fiyatlar ve araç garantisi sağlar.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Kiralık araçla şehir dışına çıkılabilir mi?</h3>
                <p className="text-stone-600">Evet, sözleşmenizde belirtilen sınırlar dahilinde araçlarımızla yurt içinde dilediğiniz rotaya seyahat edebilirsiniz. Yurt dışı çıkışları ise özel prosedürlere tabidir.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
             <Link href="/araclar" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Filomuzu İnceleyin
             </Link>
             <Link href="/cardak-havalimani-arac-kiralama" className="px-8 py-4 bg-stone-800 text-white font-bold rounded-xl hover:bg-stone-900 transition">
                Havalimanı Kiralama
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
