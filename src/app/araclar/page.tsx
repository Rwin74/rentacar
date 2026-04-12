import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cars } from '@/data/cars';

export const metadata: Metadata = {
  title: 'Araçlarımız | Emir Rent A Car Denizli',
  description: 'Denizli oto kiralama filomuzu inceleyin. Ekonomik, orta sınıf ve lüks (SUV) araç seçenekleri ile Emir Rent A Car hizmetinizde.',
  alternates: {
    canonical: '/araclar',
  },
};

export default function Araclar() {
  const contactNumber = "905543950404";

  return (
    <main className="flex-1 w-full bg-stone-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Geniş Araç Filomuz
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            İhtiyacınıza en uygun aracı seçin ve hemen kiralayın. Tüm araçlarımız düzenli bakımlı ve kaskoludur.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full w-fit mb-4">
                {car.class}
              </span>
              
              <div className="flex-grow flex items-center justify-center mb-6 py-4">
                <Link href={`/arac-kiralama/${car.slug}`}>
                  <Image
                    src={car.image}
                    alt={`Denizli rent a car - ${car.model}`}
                    width={300}
                    height={200}
                    className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform cursor-pointer"
                  />
                </Link>
              </div>
              
              <h2 className="text-2xl font-bold text-stone-900 mb-1">{car.model}</h2>
              <div className="text-red-600 font-bold text-xl mb-4">{car.price} {car.price !== "Fiyat Sorunuz" && <span className="text-sm font-normal text-stone-500">/ Günlük</span>}</div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {car.features.map(f => (
                  <span key={f} className="text-xs bg-stone-50 border border-stone-200 text-stone-600 px-2 py-1 rounded-md">{f}</span>
                ))}
              </div>
              
              <div className="mt-auto grid grid-cols-2 gap-3">
                <Link 
                  href={`/arac-kiralama/${car.slug}`} 
                  className="flex items-center justify-center py-3 bg-stone-100 text-stone-800 text-sm font-bold rounded-xl hover:bg-stone-200 transition"
                >
                  Detayları Gör
                </Link>
                <a 
                  href={`https://wa.me/${contactNumber}?text=Merhaba, ${car.model} kiralamak hakkında bilgi almak istiyorum.`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 bg-green-500 text-white text-sm font-medium rounded-xl hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
