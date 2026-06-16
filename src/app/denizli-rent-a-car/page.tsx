import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Denizli Rent A Car | Emir Oto Kiralama',
  description: 'Denizli rent a car arayışınızda lüks ve ekonomik araç seçenekleri. Şehir merkezi ve havalimanı teslim kiralık araç filomuz.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com/denizli-rent-a-car',
  },
  openGraph: {
    title: 'Denizli Rent A Car | Emir Oto Kiralama',
    description: 'Denizli rent a car arayışınızda lüks ve ekonomik araç seçenekleri.',
    url: 'https://www.emirdenizliotokiralama.com/denizli-rent-a-car',
  }
};

export default function DenizliRentACar() {
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Denizli rent a car için yaş sınırı nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ekonomik sınıf araçlar için minimum 21 yaş, orta ve lüks segment araçlar için 25 veya 27 yaş sınırı bulunmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Havalimanına araç teslimi yapıyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, uçuş bilgilerinizi paylaşmanız durumunda Çardak Havalimanı'nda aracınızı doğrudan teslim ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Kiralama ücretine kasko dahil mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Araçlarımızın tamamı yasal rent a car kaskosu güvencesi altındadır."
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
        "name": "Denizli Rent A Car",
        "item": "https://www.emirdenizliotokiralama.com/denizli-rent-a-car"
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
              Denizli Rent A Car Hizmetleri
            </h1>
            
            <p>
              Gelişen sanayisi, turistik cazibe merkezleri ve termal zenginlikleriyle Denizli, yılın her dönemi yoğun bir ziyaretçi akınına uğramaktadır. Hem iş gezilerinizde hem de turistik seyahatlerinizde konforunuzdan ödün vermemek için <strong>Denizli rent a car</strong> hizmetlerimizle yanınızdayız. Geniş araç filomuz, düzenli olarak yetkili servis bakımlarından geçen araçlardan oluşur ve en yüksek güvenlik standartlarını karşılar.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Denizli'de Rent A Car Hizmeti</h2>
            <p>
              Şehir içi ulaşım ağının yanı sıra, çevre ilçelere ve turistik bölgelere yapılacak seyahatlerde kişisel bir araca sahip olmak büyük bir avantajdır. Özel aracınızın konforunu aratmayan kiralık araçlarımızla <Link href="/" className="text-red-600 hover:underline">ana sayfamız</Link> üzerinden kolayca işlem yapabilir, rezervasyonunuzu dakikalar içinde tamamlayabilirsiniz. <Link href="/araclar" className="text-red-600 hover:underline">Araç filomuzu</Link> inceleyerek ihtiyacınıza en uygun modeli seçmeniz mümkündür.
            </p>
            <p>
              Filomuzda her ihtiyaca yönelik çözümler bulunmaktadır. Düşük yakıt tüketimiyle dikkat çeken ekonomik sınıf araçlar, kalabalık aileler için geniş iç hacimli SUV ve minibüsler, prestij arayanlar için lüks segment otomobiller ile Denizli oto kiralama süreçlerinizi ayrıcalıklı hale getiriyoruz. Kiraladığınız araçla sadece bir noktadan diğerine gitmekle kalmaz, sürüş keyfini doyasıya yaşarsınız.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Günlük ve Aylık Araç Kiralama Seçenekleri</h2>
            <p>
              İhtiyaçlarınıza özel esnek kiralama paketlerimiz bulunmaktadır. Hafta sonu kaçamakları veya kısa süreli iş toplantılarınız için günlük araç kiralama Denizli bölgesinde en çok tercih edilen opsiyonlardan biridir. Günlük kiralama hizmetimizde aracı dilediğiniz gün sayısınca kullanabilir, gereksinimleriniz doğrultusunda süreyi esnetebilirsiniz.
            </p>
            <p>
              Uzun soluklu projeler, geçici personel görevlendirmeleri veya tatil programları için ise aylık araç kiralama Denizli paketlerimiz devreye girmektedir. Aylık kiralama sayesinde periyodik bakım, sigorta, kasko ve vergi gibi masraflardan kurtularak yalnızca yakıtınızı koyar ve işinize odaklanırsınız. Fiyat/performans açısından aylık kiralama, günlük kiralama maliyetlerine göre ciddi oranlarda avantaj sağlamaktadır.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Havalimanı Teslim Araç Kiralama</h2>
            <p>
              Uçak yolculuğunuzun ardından yorgunluğunuzu hissetmeden ulaşım problemini çözmenin en akılcı yolu Çardak havalimanı araç kiralama hizmetimizden yararlanmaktır. Rezervasyon aşamasında bildireceğiniz uçuş kodu (PNR) ile uçuşunuz anlık olarak takip edilir.
            </p>
            <p>
              Uçağınız rötar yapsa dahi, ekibimiz havalimanı terminal çıkışında sizi beklemeye devam eder. Böylelikle taksi veya toplu taşıma bekleyerek vakit kaybetmez, bagajlarınızı kiraladığınız aracın geniş bagajına yerleştirerek direkt olarak rotanıza doğru yola çıkabilirsiniz. Uçaktan inip direksiyona geçmeniz arasındaki süre sadece birkaç dakikadan ibarettir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Emir Rent A Car Araç Filosu</h2>
            <p>
              Denizli araç kiralama şirketleri arasında filomuzun çeşitliliği ve yeniliği ile ön plana çıkıyoruz. Gerek düz vites gerek otomatik vites seçenekleriyle, benzinli veya dizel motor tipleriyle her türlü sürüş alışkanlığına cevap veriyoruz. Yeni model araçlarımız teknolojik donanımlara sahip olup; Bluetooth bağlantısı, Apple CarPlay, geri görüş kamerası, hız sabitleyici gibi uzun yolculukları keyifli hale getirecek özelliklerle donatılmıştır.
            </p>
            <p>
              Her aracımız kiralama işlemi sonrasında detaylı bir iç ve dış temizlik işleminden geçirilir. Hijyen standartlarımız gereği araç içi dezenfeksiyon düzenli olarak sağlanmaktadır. Aynı zamanda mevsim koşullarına uygun lastik (kış lastiği vb.) kullanımı da önceliğimizdir, böylece sürüş güvenliğiniz her zaman maksimize edilir.
            </p>

            <h2 className="text-3xl font-bold text-stone-900 mt-12 mb-6">Neden Emir Rent A Car?</h2>
            <p>
              Müşteri memnuniyetini her zaman ön planda tutan firmamız, sektörde şeffaflık ilkesiyle hareket eder. Gizli ücretlendirmelerden, sonradan ortaya çıkan ekstra maliyetlerden tamamen uzak, sözleşmede ne yazıyorsa onu ödeyeceğiniz bir sistemle çalışıyoruz. Şirketlere özel faturalandırma (KDV indirimi sağlama) avantajı ile kurumsal taleplere de profesyonel çözümler üretiyoruz.
            </p>
            <p>
              Yolda yaşanabilecek olası problemlerde ise 7/24 destek hattımız devrededir. Arıza veya kaza durumunda size en hızlı şekilde eşdeğer bir yedek araç tahsis ederek planlarınızın aksamasını engelliyoruz. %100 rent a car kaskosu sayesinde sürpriz faturalar ile karşılaşmaz, yolculuğunuza sadece anın tadını çıkararak devam edersiniz. Denizli ve çevre ilçelerindeki lider konumumuz, yılların verdiği tecrübe ve bizi tercih eden binlerce mutlu müşterimizin eseridir.
            </p>
          </article>

          {/* FAQ Section */}
          <section className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Denizli rent a car için yaş sınırı nedir?</h3>
                <p className="text-stone-600">Ekonomik sınıf araçlar için minimum 21 yaş ve en az 2 yıllık ehliyet, orta ve lüks segment araçlar için ise modele göre 25 veya 27 yaş sınırı bulunmaktadır.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Havalimanına araç teslimi yapıyor musunuz?</h3>
                <p className="text-stone-600">Evet, uçuş bilgilerinizi (PNR) bizimle rezervasyon aşamasında paylaşmanız durumunda Çardak Havalimanı'nda aracınızı uçağınızdan indiğiniz gibi teslim ediyoruz. Böylece hiçbir bekleme veya transfer stresi yaşamazsınız.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Kiralama ücretine kasko dahil mi?</h3>
                <p className="text-stone-600">Araçlarımızın tamamı yasal rent a car kaskosu güvencesi altındadır. Bireysel şahsi kasko poliçelerinin aksine rent a car kaskomuz tüm hasar ve olası problemlere karşı sizi güvence altına alır.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Araç kiralama işleminde kilometre sınırı var mı?</h3>
                <p className="text-stone-600">Günlük ve haftalık kiralamalarda standart kilometre limitlerimiz uygulanmaktadır. Detaylı kilometre aşım bilgisi rezervasyon esnasında sözleşmenizde şeffaf bir biçimde yer alır. Uzun dönem kiralamalarda ise kurumsal ihtiyaçlarınıza özel paketler hazırlanmaktadır.</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
             <Link href="/araclar" className="inline-flex px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition">
                Tüm Araçlarımızı İnceleyin
             </Link>
          </div>

        </div>
      </main>
    </>
  );
}
