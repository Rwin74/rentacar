import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-900 flex-none text-stone-300 py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Brand & Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center mb-2">
             <Image 
               src="/images/logo.png" 
               alt="Emir Rent A Car Logo" 
               width={200} 
               height={64} 
               className="h-12 w-auto object-contain brightness-0 invert opacity-90" 
             />
          </div>
          <p className="text-stone-400 leading-relaxed text-sm">
            Denizli&apos;de güvenilir, bakımlı ve uygun fiyatlı araç kiralama hizmeti sunuyoruz. Her bütçeye uygun geniş araç seçeneklerimizle yanınızdayız.
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <strong className="text-white">Adres:</strong> 15 Mayıs Mah. Atatürk Cad. No:31 Adım Apt. Denizli/Merkez
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-white">Telefon:</strong> <a href="tel:+905543950404" className="hover:text-white transition">+90 554 395 04 04</a>
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-white">E-posta:</strong> <a href="mailto:info@emirdenizliotokiralama.com.tr" className="hover:text-white transition">info@emirdenizliotokiralama.com.tr</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Hızlı Bağlantılar</h3>
          <ul className="space-y-3 text-sm">
             <li><Link href="/" className="hover:text-red-400 transition">Ana Sayfa</Link></li>
             <li><Link href="/araclar" className="hover:text-red-400 transition">Araçlarımız (Filo)</Link></li>
             <li><Link href="/kurumsal-filo-kiralama" className="hover:text-red-400 transition">Kurumsal Filo Kiralama</Link></li>
             <li><Link href="/bilgibankasi" className="hover:text-red-400 transition">Bilgi Bankası</Link></li>
             <li><Link href="/sss" className="hover:text-red-400 transition">Sıkça Sorulan Sorular</Link></li>
             <li>
                <a 
                  href="https://wa.me/905543950404?text=Merhaba,%20araç%20kiralama%20hakkında%20bilgi%20almak%20istiyorum." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  WhatsApp&apos;tan Yazın
                </a>
             </li>
          </ul>
        </div>

        {/* Google Maps Embed */}
        <div className="flex flex-col h-full shadow-lg rounded-2xl overflow-hidden border border-stone-800 bg-stone-800">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.649176378411!2d29.0886676!3d37.7748439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c70f0ed158fde5%3A0x6b772421f15dbbc4!2s15%20May%C4%B1s%2C%20Atat%C3%BCrk%20Viyad%C3%BC%C4%9F%C3%BC%20No%3A31%2C%2020150%20Pamukkale%2FDenizli!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "200px" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Emir Rent A Car Konum"
            className="flex-grow object-cover"
          ></iframe>
          <div className="p-3 bg-stone-800">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=15+Mayıs,+Atatürk+Cd.+No:31,+20150+Pamukkale/Denizli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition gap-2"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              Yol Tarifi Al
            </a>
          </div>
        </div>

      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 flex flex-col items-center gap-4 text-center text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} Emir Rent A Car, Denizli. Tüm Hakları Saklıdır.</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-stone-400">
          <p>
            Tasarım ve Altyapı: <a href="https://atakanyagli.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 font-medium hover:text-white transition">Atakan Yağlı</a>
          </p>
          <span className="hidden sm:inline text-stone-700">|</span>
          <p>
            SEO ve Büyüme Stratejisi: <a href="https://atakanyagli.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 font-medium hover:text-white transition">Atakan Yağlı</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
