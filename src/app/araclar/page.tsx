import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cars } from '@/data/cars';
import CarFilter from '@/components/CarFilter';

export const metadata: Metadata = {
  title: 'Kiralık Araç Filosu & Fiyatları | Emir Rent A Car Denizli',
  description: 'Denizli kiralık araç filomuzu ve fiyatlarımızı inceleyin. Ekonomik, SUV ve VIP kiralama seçenekleriyle yeni model araçlar Emir Rent A Car ayrıcalığıyla.',
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
          <p className="text-lg text-stone-600 max-w-4xl mx-auto mb-6">
            İhtiyacınıza en uygun aracı seçin ve hemen kiralayın. Denizli Emir Rent A Car olarak, her bütçeye ve kullanım senaryosuna hitap eden zengin araç filomuzla hizmetinizdeyiz. 
            Şehir içi ulaşımınız için yakıt cimrisi ekonomik sınıf araçlardan, uzun yolculuklarda üstün konfor sunan lüks sedanlara ve geniş ailelerin favorisi olan SUV modellere kadar tüm seçenekleri bir arada bulabilirsiniz. 
          </p>
          <p className="text-lg text-stone-600 max-w-4xl mx-auto">
            Filomuzda yer alan tüm araçlar düzenli olarak yetkili servis bakımlarından geçirilmekte olup, teslimat öncesinde detaylı anti-bakteriyel temizlik işlemleri uygulanmaktadır. 
            Ayrıca sürpriz maliyetleri ortadan kaldıran %100 Yasal Rent A Car kaskosu ile seyahatlerinizi güvence altına alıyoruz. Çardak Havalimanı teslimat seçeneklerimiz veya Denizli merkez ofisimiz üzerinden anında teslim avantajıyla kiralama sürecinizi hızlandırabilirsiniz. Günlük, haftalık veya aylık kurumsal filo kiralama ihtiyaçlarınız için de en rekabetçi fiyatları sunmaktayız.
          </p>
        </div>

        {/* Cars Grid */}
        <CarFilter initialCars={cars} />

      </div>
    </main>
  );
}
