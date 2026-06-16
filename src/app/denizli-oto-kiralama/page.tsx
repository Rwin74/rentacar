import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Denizli Oto Kiralama | Emir Rent A Car',
  description: 'Denizli oto kiralama hizmetinde güvenilir, ekonomik ve bakımlı araç seçenekleri. Hızlı rezervasyon ve uygun fiyat avantajı.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/denizli-oto-kiralama',
  },
  openGraph: {
    title: 'Denizli Oto Kiralama | Emir Rent A Car',
    description: 'Denizli oto kiralama hizmetinde güvenilir, ekonomik ve bakımlı araç seçenekleri.',
    url: 'https://www.emirdenizliotokiralama.com/denizli-oto-kiralama',
  }
};

export default function DenizliOtoKiralama() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Araç arıza yaparsa ne olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Olası bir arıza veya kaza durumunda yetkili teknik servisimiz devreye girer ve size en kısa sürede eşdeğer bir yedek araç tahsis edilir."
        }
      },
      {
        "@type": "Question",
        "name": "Oto kiralama ücretleri neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kiralama ücretleri; tercih edilen araç sınıfına, kiralama süresine ve sezona göre değişiklik gösterir. Uzun süreli kiralamalar daha avantajlıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Depozito ödenmesi zorunlu mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, kiralama sırasında kredi kartınızdan trafik cezaları veya olası eksik yakıt durumları için bloke şeklinde depozito alınır ve teslimde iade edilir."
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
        "name": "Denizli Oto Kiralama",
        "item": "https://www.emirdenizliotokiralama.com/denizli-oto-kiralama"
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
              Denizli Oto Kiralama
            </h1>
            
            <p>
              Yılların getirdiği tecrübe ve koşulsuz müşteri memnuniyeti ilkesiyle hareket eden Emir Rent A Car, <strong>Denizli oto kiralama</strong> sektöründe referans alınan kurumlardan biridir. Hem şahsi hem de kurumsal ihtiyaçlara yönelik geliştirdiğimiz çok yönlü kiralama opsiyonlarıyla, her adımda güveni hissedeceğiniz bir hizmet bütünü sunuyoruz.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Kurumsal ve Güvenilir Oto Kiralama</h2>
            <p>
              Merdiven altı firmaların yarattığı güvensizlik ortamından sıyrılarak profesyonel ve yasal çerçevelere tamamen uygun bir hizmet sağlıyoruz. Araçlarımızın kasko poliçelerinden periyodik bakım evraklarına kadar tüm süreçler şeffaflıkla yönetilmektedir. Bir kaza veya arıza anında asla yalnız bırakılmaz, <Link href="/denizli-rent-a-car" className="text-red-600 hover:underline">Denizli rent a car</Link> güvencesiyle 7/24 destek hizmetimizden anında faydalanırsınız.
            </p>
            <p>
              Amacımız yalnızca kâr odaklı bir kiralama işlemi değil, uzun yıllar sürecek kalıcı bir müşteri ilişkisi inşa etmektir. <Link href="/" className="text-red-600 hover:underline">Ana sayfada</Link> yer alan araç filomuz ve fiyatlarımız hakkında dilediğiniz her an destek hattımızdan ayrıntılı bilgi talep edebilirsiniz.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Her Bütçeye Uygun Zengin Seçenekler</h3>
            <p>
              İster kısıtlı bir bütçeyle günübirlik seyahat planlıyor olun, isterseniz misafirlerinizi prestijli bir araçla karşılamak isteyin; beklentinize uygun bir seçeneği filomuzda bulmanız mümkündür. 
              Denizli oto kiralama süreçlerimizde en önemli prensibimiz, tüm müşterilerimize eşit derecede özen göstererek temiz ve sorunsuz araçlar teslim etmektir.
            </p>
            <p>
              Yaz sezonu veya tatil dönemlerinde yoğunlaşan talepleri başarıyla karşılayabilmek adına filomuzu sürekli genişletiyoruz. Yeni model araçlarımız yakıt cimrisi teknolojilere, düşük emisyon değerlerine ve ergonomik iç tasarımlara sahiptir. <Link href="/araclar" className="text-red-600 hover:underline">Araçlarımız</Link> düzenli periyotlarla yenilenerek yaş ortalaması daima düşük tutulur.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Kesintisiz Yolculuk Deneyimi</h3>
            <p>
              Seyahatlerin bölünmemesi ve zaman kaybının yaşanmaması adına gerekli tüm önlemleri alıyoruz. Araç kiralarken özellikle dikkat edilmesi gereken konu, aracın yolda kalma ihtimaline karşı alınmış önlemlerdir. Bizler her aracımızın yağ, su ve filtre değişimlerini orijinal parçalar kullanarak aksatmadan gerçekleştiriyoruz.
            </p>
            <p>
              Şehirler arası uzun yolculuklarda güvenliği artırmak için araçlarımızda yedek lastik (stepne), ilkyardım çantası ve yangın söndürme tüpü standart olarak bulunmaktadır. Güvenlik, Denizli oto kiralama felsefemizin temel taşını oluşturur.
            </p>

            <h3 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Rezervasyon ve Teslimat Süreçleri</h3>
            <p>
              Teknolojiyi en efektif şekilde kullanarak karmaşık bürokratik engelleri aştık. Online rezervasyon platformumuz veya WhatsApp iletişim hattımızdan sadece dakikalar içinde kiralama yapabilirsiniz. Fiyat teklifinizi şeffaf bir şekilde alır, sürpriz ek ücretlerle kesinlikle karşılaşmazsınız.
            </p>
            <p>
              Ayrıca merkeze uzak veya hava yoluyla seyahat eden müşterilerimiz için <Link href="/cardak-havalimani-arac-kiralama" className="text-red-600 hover:underline">havalimanı teslim araç kiralama</Link> hizmetimiz mevcuttur. Adrese veya otele teslimat opsiyonları için rezervasyon temsilcilerimizle iletişime geçerek detaylı bir planlama yapabilirsiniz.
            </p>
          </article>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h3 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Araç arıza yaparsa ne olur?</h3>
                <p className="text-stone-600">Olası bir arıza veya kaza durumunda 7/24 hizmet veren teknik servis ağımız anında devreye girer. Aracın yürümesine engel bir durum varsa veya onarım uzun sürecekse, seyahatinize devam edebilmeniz için size en kısa sürede eşdeğer bir yedek araç tahsis edilir.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Oto kiralama ücretleri neye göre değişir?</h3>
                <p className="text-stone-600">Kiralama ücretleri; tercih edilen aracın sınıfına (ekonomik, SUV, lüks), kiralama süresine (günlük, haftalık, aylık) ve bulunduğumuz mevsime göre (resmi tatiller ve yaz ayları fiyatları etkiler) değişiklik gösterir. Uzun süreli kiralamalar günlük maliyet açısından her zaman daha avantajlıdır.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Depozito ödenmesi zorunlu mu?</h3>
                <p className="text-stone-600">Evet, kiralama işlemi sırasında kredi kartınızdan olası trafik cezaları, köprü/otoyol geçiş ücretleri veya eksik yakıt durumlarına karşılık güvence bedeli (provizyon/bloke) alınır. Araç sorunsuz teslim edildikten ve gerekli kontroller yapıldıktan sonra bu bedel iade edilir.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
             <Link href="/araclar" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Şimdi Araç Seçin
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
