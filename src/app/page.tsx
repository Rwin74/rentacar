import Image from "next/image";
import Link from "next/link";
import ReservationWidget from "@/components/ReservationWidget";
import { cars } from "@/data/cars";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Emir Rent A Car",
    "image": "https://www.emirdenizliotokiralama.com.tr/images/logo.png",
    "url": "https://www.emirdenizliotokiralama.com.tr",
    "telephone": "+905543950404",
    "email": "info@emirdenizliotokiralama.com.tr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Mayıs Mahallesi Atatürk Caddesi No:31 Adım Apartmanı",
      "addressLocality": "Merkez",
      "addressRegion": "Denizli",
      "addressCountry": "TR",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
  };

  // Get Peugeot, Egea, Clio
  const featuredCars = cars.filter(c => [3, 2, 1].includes(c.id)).sort((a,b) => b.priceNumber - a.priceNumber);

  return (
    <>
      <link rel="preload" href="/images/2025-12-12.webp" as="image" type="image/webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main className="flex-1 w-full bg-[#f4f5f7] text-stone-800">
        
        {/* HERO BÖLÜMÜ - Arka plan desenlerini tüm sayfa yerine sadece üst alana sınırladık */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Yukardan inen üçgen geometrik şekil */}
            <svg className="absolute -top-[10%] -right-[5%] w-[60%] h-[80%] text-stone-200/50 transform rotate-6" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               <polygon points="0,100 100,0 100,100" />
            </svg>
            {/* Soldan çıkan üçgen şekil */}
            <svg className="absolute top-[30%] -left-[10%] w-[40%] h-[60%] text-red-100/30 transform -rotate-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
               <polygon points="0,0 100,100 0,100" />
            </svg>
            {/* İnce zarif bir nokta (dot grid) deseni */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '48px 48px', opacity: 0.15 }}></div>
          </div>

          <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center pb-32">
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-5xl lg:text-5xl xl:text-6xl font-extrabold text-stone-900 leading-tight tracking-tight mb-6">
              Emir ile <span className="text-red-600">Denizli Araç Kiralama</span> Deneyimi
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Her bütçeye uygun, bakımlı ve geniş araç filosuyla hizmetinizdeyiz. <strong>Denizli ucuz rent a car</strong> ve kusursuz <strong>denizli oto kiralama</strong> arayışınızda en güvenilir tercihiniz Emir Rent A Car&apos;dır. Güvenilir bir <strong>denizli rent a car</strong> deneyimi için hemen rezervasyon yapın.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/araclar" className="flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-2xl hover:bg-red-700 transition shadow-lg shadow-red-600/30">
                Tüm Araçları Gör
              </Link>
            </div>
          </div>
          <div className="relative isolate flex justify-center mt-8 lg:mt-0 xl:p-4 group">
            {/* Modern arka plan dekorasyonları (Etrafı doldurmak için) */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 bg-gradient-to-br from-red-100 to-red-50 rounded-[2rem] transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 border border-stone-200 bg-stone-50/50 rounded-[2rem] transition-transform duration-700 group-hover:-translate-x-6 group-hover:-translate-y-6" />
            
            {/* Fotoğrafı saran modern çerçeve */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white w-full max-w-lg lg:max-w-none">
              <Image
                src="/images/2025-12-12.webp"
                alt="Emir Rent A Car Denizli Ofisi"
                width={600}
                height={400}
                priority
                className="object-cover w-full h-auto brightness-[0.85] contrast-[1.05] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700"
              />
              {/* İç gradient karartma efekti (Daha derin ve modern bir görünüm) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </section>
        </div> {/* HERO BÖLÜMÜ SONU */}

        {/* Step-by-Step Professional Booking Form */}
        <div className="relative z-20">
          <ReservationWidget />
        </div>

        <section className="relative z-20 bg-stone-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900 mb-4 tracking-tight">Öne Çıkan Araçlarımız</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Denizli oto kiralama sektöründe en yenilikçi ve konforlu araçlarımız ile seyahatlerinizi keyfe dönüştürün.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                  <div className="flex-grow flex items-center justify-center mb-4 py-2">
                    <Link href={`/arac-kiralama/${car.slug}`}>
                      <Image
                        src={car.image}
                        alt={`Denizli rent a car - ${car.model} - Emir Rent A Car`}
                        width={300}
                        height={200}
                        className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-1">{car.model}</h3>
                  <div className="text-red-600 font-bold text-xl mb-3">{car.price} {car.price !== "Fiyat Sorunuz" && <span className="text-sm font-normal text-stone-500">/ Günlük</span>}</div>
                  <p className="text-stone-600 text-sm mb-6 flex-grow line-clamp-3">{car.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                     <Link href={`/arac-kiralama/${car.slug}`} className="w-full py-3 bg-stone-100 text-stone-800 rounded-xl text-sm font-bold hover:bg-stone-200 transition flex justify-center items-center">
                       Detayları Gör
                     </Link>
                     <a href={`https://wa.me/905543950404?text=Merhaba, ${car.model} kiralamak istiyorum.`} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition flex justify-center items-center">
                       WhatsApp
                     </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/araclar" className="inline-flex px-8 py-3 bg-white border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition">
                  Tüm Araç Filomuzu Görüntüle
               </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


