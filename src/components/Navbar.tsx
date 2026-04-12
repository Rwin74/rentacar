import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image 
            src="/images/logo.png" 
            alt="Emir Rent A Car Logo" 
            width={240} 
            height={80} 
            priority
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-stone-600">
          <Link href="/" className="hover:text-red-600 transition">Ana Sayfa</Link>
          <Link href="/araclar" className="hover:text-red-600 transition">Araçlarımız</Link>
          <Link href="/kurumsal-filo-kiralama" className="hover:text-red-600 transition">Kurumsal Kiralama</Link>
          <Link href="/bilgibankasi" className="hover:text-red-600 transition">Bilgi Bankası</Link>
          <Link href="/sss" className="hover:text-red-600 transition">S.S.S</Link>
        </div>

        <a 
          href="https://wa.me/905543950404?text=Merhaba,%20araç%20kiralama%20hakkında%20bilgi%20almak%20istiyorum." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center px-5 py-2.5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
        >
          Bize Ulaşın
        </a>
      </div>
    </nav>
  );
}
