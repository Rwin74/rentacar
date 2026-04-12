import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kurumsal Filo Kiralama | Emir Rent A Car',
  description: 'Denizli kurumsal uzun dönem araç kiralama ve filo kiralama avantajlarıyla vergi yükünden kurtulun. Şirketlere özel fiyatlarla binek ve ticari kiralama çözümleri.',
  alternates: {
    canonical: 'https://www.emirdenizliotokiralama.com.tr/kurumsal-filo-kiralama',
  },
  openGraph: {
    title: 'Kurumsal Filo Kiralama | Denizli Emir Rent A Car',
    description: 'Şirketiniz için sermayenizi bağlamadan akılcı filo yönetimi. Yüksek vergi avantajı, ücretsiz bakım ve 7/24 yol yardımı ile operasyonel kiralama fırsatları.',
    url: 'https://www.emirdenizliotokiralama.com.tr/kurumsal-filo-kiralama',
  }
};

export default function KurumsalFilo() {
  const advantages = [
    {
      title: "Güçlü Öz Sermaye Yönetimi",
      desc: "Araç satın almak için yüksek maliyetli bir toplu ödeme yapmak veya kredi limitlerinizi doldurmak yerine, aylık sabit ödemelerle sermayenizi ana işinize ayırın.",
      icon: "💰"
    },
    {
      title: "Vergi Avantajı",
      desc: "Aylık kiralama faturalarınızı doğrudan gider gösterebilir, KDV avantajından yararlanarak şirket bilançonuzu pozitif yönde etkileyebilirsiniz.",
      icon: "📊"
    },
    {
      title: "Operasyonel Yüklerden Kurtulun",
      desc: "Trafik sigortası, kasko, MTV, periyodik bakım veya lastik değişimi gibi evrak ve takip işleriyle tamamen veda edersiniz.",
      icon: "⚙️"
    },
    {
      title: "Kesintisiz İş Süreçleri",
      desc: "Kiraladığınız aracın arızalanması veya bakıma girmesi durumunda anında yedek araç tahsis edilir, işleriniz asla yarım kalmaz.",
      icon: "🔄"
    },
    {
      title: "7/24 Profesyonel Destek",
      desc: "Olası acil durumlarda yol yardım destek hattımızla günün her anı Emir Rent A Car güvencesi yanınızdadır.",
      icon: "🛡️"
    },
    {
      title: "Eskime ve Değer Kaybı Riski Yok",
      desc: "Sıfır kilometre veya oldukça genç araçlarla prestijli bir filoya sahip olun. İkinci el değer düşüşü stresi yaşamazsınız.",
      icon: "📉"
    }
  ];

  return (
    <main className="flex-1 w-full bg-white text-stone-800">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5 pattern-dots pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-8">
            Kurumsal Filo Kiralama
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed mb-10">
            Şirketinizin ihtiyaçlarına tam uyan, sıfır maliyet stresi ve yüksek vergi avantajıyla Denizli'nin en prestijli uzun dönem operasyonel kiralama çözümü.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a 
                href="https://wa.me/905543950404?text=Merhaba, şirketimiz için uzun dönem filo kiralama şartlarınız ve teklifleriniz hakkında detaylı görüşmek istiyorum." 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition shadow-xl shadow-red-600/20"
             >
                Teklif İste
             </a>
             <Link 
                href="/araclar"
                className="px-8 py-4 bg-white border border-stone-200 text-stone-700 font-bold rounded-2xl hover:bg-stone-50 transition"
             >
                Geniş Filomuzu İncele
             </Link>
          </div>
        </div>
      </section>

      {/* Avantajlar Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">Neden Operasyonel Kiralama?</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Satın almanın getirdiği gizli maliyetlerden tamamen kurtularak şirketinizi geleceğe çok daha esnek bir şekilde taşıyın.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Şirketinize Özel Fiyatlandırmalar İçin Görüşelim</h2>
          <p className="text-stone-400 mb-10 leading-relaxed">
            Hemen kurumsal müşteri temsilcimiz ile iletişime geçin, işletmenizin büyüklüğüne ve aylık kullanım yoğunluğunuza en uygun filo kiralama taahhüdünü birlikte tasarlayalım.
          </p>
          <a   
            href="mailto:info@emirdenizliotokiralama.com.tr"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-bold rounded-2xl hover:bg-stone-100 transition"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            Kurumsal Departmana Yazın
          </a>
        </div>
      </section>

    </main>
  );
}
