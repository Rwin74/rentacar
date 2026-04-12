"use client";

import { useState } from "react";

export default function ReservationWidget() {
  const [step, setStep] = useState(1);
  
  // Form Data
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [name, setName] = useState("");

  const handleNext = () => {
    if (step === 1 && (!pickupDate || !dropoffDate)) return;
    if (step === 2 && !vehicle) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupDate || !dropoffDate || !vehicle || !name) return;

    const message = `Merhaba, benim adım ${name}. ${pickupDate} - ${dropoffDate} tarihleri arasında ${vehicle} aracınızı kiralamak için rezervasyon oluşturmak istiyorum. Müsaitlik durumunuz nedir?`;
    window.open(`https://wa.me/905543950404?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-16 relative z-20 px-6">
      <div className="bg-white rounded-3xl shadow-2xl shadow-stone-900/10 border border-stone-100 overflow-hidden">
        
        {/* Header / Progress */}
        <div className="bg-stone-900 text-white px-8 py-5 flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
            Aracınızı Ayırtın
          </h3>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-red-600 text-white' : 'bg-stone-700 text-stone-400'}`}>1. Tarih</span>
            <div className={`h-px w-4 ${step >= 2 ? 'bg-red-600' : 'bg-stone-700'}`}></div>
            <span className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-red-600 text-white' : 'bg-stone-700 text-stone-400'}`}>2. Araç</span>
            <div className={`h-px w-4 ${step >= 3 ? 'bg-red-600' : 'bg-stone-700'}`}></div>
            <span className={`px-3 py-1 rounded-full ${step >= 3 ? 'bg-red-600 text-white' : 'bg-stone-700 text-stone-400'}`}>3. Onay</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h4 className="text-2xl font-bold text-stone-900 mb-6">Ne zaman kiralayacaksınız?</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-stone-500 mb-2" htmlFor="pickup">Alış Tarihi</label>
                  <input 
                    type="date" 
                    id="pickup"
                    className="w-full border border-stone-200 bg-stone-50 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition text-stone-800 font-medium"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-stone-500 mb-2" htmlFor="dropoff">İade Tarihi</label>
                  <input 
                    type="date" 
                    id="dropoff"
                    className="w-full border border-stone-200 bg-stone-50 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition text-stone-800 font-medium"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    min={pickupDate || new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleNext}
                  disabled={!pickupDate || !dropoffDate}
                  className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                >
                  Sonraki Adım
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
               <h4 className="text-2xl font-bold text-stone-900 mb-6">Hangi aracı tercih edersiniz?</h4>
               <div className="grid sm:grid-cols-3 gap-4">
                 {[
                   { id: "Ekonomik Sınıf (Renault Clio vb.)", title: "Ekonomik", icon: "🚗" },
                   { id: "Orta Sınıf (Fiat Egea vb.)", title: "Orta Sınıf", icon: "🚙" },
                   { id: "SUV (Peugeot 3008 vb.)", title: "SUV/Arazi", icon: "🏔️" },
                 ].map(item => (
                   <div 
                     key={item.id}
                     onClick={() => setVehicle(item.id)}
                     className={`cursor-pointer p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center
                       ${vehicle === item.id ? 'border-red-600 bg-red-50' : 'border-stone-100 bg-white hover:border-stone-300'}`}
                   >
                     <div className="text-4xl">{item.icon}</div>
                     <div className="font-bold text-stone-800">{item.title}</div>
                     <div className="text-xs text-stone-500 line-clamp-1">{item.id}</div>
                   </div>
                 ))}
               </div>
               <div className="mt-8 flex justify-between">
                <button onClick={handleBack} className="px-8 py-4 text-stone-600 bg-stone-100 font-bold rounded-2xl hover:bg-stone-200 transition">Geri</button>
                <button 
                  onClick={handleNext}
                  disabled={!vehicle}
                  className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                >
                  Sonraki Adım
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
               <h4 className="text-2xl font-bold text-stone-900 mb-6">Detaylar ve Onay</h4>
               <form onSubmit={handleReservation}>
                <div className="mb-6">
                  <label className="text-sm font-semibold text-stone-500 mb-2" htmlFor="fullname">Ad Soyad</label>
                  <input 
                    type="text" 
                    id="fullname"
                    placeholder="Örn: Ahmet Yılmaz"
                    required
                    className="w-full border border-stone-200 bg-stone-50 px-5 py-4 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition text-stone-800 font-medium"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-8">
                  <div className="flex gap-2 items-start mb-2">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-green-600 shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
                    <p className="text-green-800 text-sm font-medium">Bu işlem doğrudan yetkilimize iletilecektir. WhatsApp görüşmenizde tüm tutarlar ve özel talepleriniz hesaplanacaktır.</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={handleBack} className="px-8 py-4 text-stone-600 bg-stone-100 font-bold rounded-2xl hover:bg-stone-200 transition">Geri</button>
                  <button 
                    type="submit" 
                    disabled={!name}
                    className="px-8 py-4 bg-stone-900 text-white font-bold rounded-2xl hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-3 shadow-lg shadow-stone-900/20"
                  >
                    WhatsApp'ta Gönder
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.445 4.439-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.006 5.45-4.443 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  </button>
                </div>
               </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
