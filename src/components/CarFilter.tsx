"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Car = {
  id: number;
  slug: string;
  model: string;
  class: string;
  image: string;
  price: string;
  priceNumber: number;
  features: string[];
  description: string[];
  fuelType?: string;
  transmission?: string;
};

export default function CarFilter({ initialCars }: { initialCars: Car[] }) {
  const [selectedClass, setSelectedClass] = useState<string>("Tümü");
  const [selectedFuel, setSelectedFuel] = useState<string>("Tümü");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("Tümü");

  const classes = ["Tümü", ...Array.from(new Set(initialCars.map(c => c.class)))];
  const fuels = ["Tümü", "Benzin", "Dizel", "Hibrit", "Elektrik"];
  const transmissions = ["Tümü", "Otomatik", "Manuel"];

  const filteredCars = initialCars.filter(car => {
    const matchClass = selectedClass === "Tümü" || car.class === selectedClass;
    
    // We infer fuel and transmission from features array since it's there
    const isBenzin = car.features.some(f => f.toLowerCase().includes("benzin"));
    const isDizel = car.features.some(f => f.toLowerCase().includes("dizel"));
    const carFuel = isBenzin ? "Benzin" : (isDizel ? "Dizel" : "Diğer");
    const matchFuel = selectedFuel === "Tümü" || carFuel === selectedFuel;

    const isAuto = car.features.some(f => f.toLowerCase().includes("otomatik"));
    const isManuel = car.features.some(f => f.toLowerCase().includes("manuel"));
    const carTrans = isAuto ? "Otomatik" : (isManuel ? "Manuel" : "Diğer");
    const matchTrans = selectedTransmission === "Tümü" || carTrans === selectedTransmission;

    return matchClass && matchFuel && matchTrans;
  });

  const contactNumber = "905543950404";

  return (
    <div>
      {/* Filters */}
      <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Class Filter */}
          <div>
            <label className="block text-sm font-semibold text-stone-500 mb-2">Araç Sınıfı</label>
            <div className="flex flex-wrap gap-2">
              {classes.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedClass(c)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition ${selectedClass === c ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Fuel Filter */}
          <div>
            <label className="block text-sm font-semibold text-stone-500 mb-2">Yakıt Tipi</label>
            <div className="flex flex-wrap gap-2">
              {fuels.map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedFuel(f)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition ${selectedFuel === f ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Transmission Filter */}
          <div>
            <label className="block text-sm font-semibold text-stone-500 mb-2">Vites Tipi</label>
            <div className="flex flex-wrap gap-2">
              {transmissions.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTransmission(t)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition ${selectedTransmission === t ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Grid */}
      {filteredCars.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-stone-100">
          <p className="text-xl text-stone-500 font-medium">Bu filtrelere uygun araç bulunamadı.</p>
          <button onClick={() => { setSelectedClass("Tümü"); setSelectedFuel("Tümü"); setSelectedTransmission("Tümü"); }} className="mt-4 text-red-600 font-bold hover:underline">Filtreleri Temizle</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group animate-in zoom-in-95 duration-300">
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
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform cursor-pointer"
                  />
                </Link>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{car.model}</h3>
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
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'whatsapp_click', {
                        'event_category': 'conversion',
                        'event_label': `Car List - ${car.model}`,
                      });
                    }
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
