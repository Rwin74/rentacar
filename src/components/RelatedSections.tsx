import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cars } from '@/data/cars';
// knowledgeBase might not be exported from knowledge.ts yet, but I'll import it or create a placeholder if it fails.
import { knowledgeArticles } from '@/data/knowledge';

export function RelatedCars({ currentSlug }: { currentSlug?: string }) {
  const related = cars.filter(c => c.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(0, 3);
  
  if (related.length === 0) return null;

  return (
    <div className="mt-16 mb-12">
      <h3 className="text-3xl font-extrabold text-stone-900 mb-8 tracking-tight">İlgili Araçlarımız</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map(car => (
          <Link href={`/arac-kiralama/${car.slug}`} key={car.id} className="group block bg-white rounded-3xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all hover:border-red-100">
            <div className="aspect-[4/3] relative bg-stone-50 p-6 flex items-center justify-center">
              <Image src={car.image} alt={car.model} width={400} height={300} className="object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full mb-3">
                {car.class}
              </span>
              <h4 className="font-bold text-xl text-stone-900 mb-2 group-hover:text-red-600 transition-colors">{car.model}</h4>
              <p className="text-stone-500 text-sm font-medium">{car.fuelType} • {car.transmission}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RelatedServices({ currentSlug }: { currentSlug?: string }) {
  const services = [
    { title: "Çardak Havalimanı Araç Kiralama", slug: "cardak-havalimani-arac-kiralama", desc: "Havalimanı teslim araç kiralama." },
    { title: "Denizli Rent A Car", slug: "denizli-rent-a-car", desc: "Şehir merkezinde ekonomik seçenekler." },
    { title: "Pamukkale Araç Kiralama", slug: "pamukkale-arac-kiralama", desc: "Turistik bölgelere özel kiralama." },
    { title: "Kurumsal Filo Kiralama", slug: "kurumsal-filo-kiralama", desc: "Şirketler için uzun dönem avantajları." },
    { title: "Merkezefendi Araç Kiralama", slug: "merkezefendi-arac-kiralama", desc: "Merkezefendi ilçesinde hızlı teslimat." }
  ].filter(s => s.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="mt-16 mb-12 bg-stone-900 rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold mb-8 tracking-tight">Diğer Hizmet Bölgelerimiz</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <Link key={idx} href={`/${srv.slug}`} className="group block p-6 rounded-2xl bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-red-500/50 transition-all">
              <span className="block font-bold text-lg mb-2 group-hover:text-red-400 transition-colors">{srv.title}</span>
              <span className="text-stone-400 text-sm">{srv.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RelatedBlogs({ currentSlug }: { currentSlug?: string }) {
  const blogs = (knowledgeArticles || []).filter(b => b.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(0, 3);
  
  if (blogs.length === 0) return null;

  return (
    <div className="mt-16 mb-12">
      <h3 className="text-3xl font-extrabold text-stone-900 mb-8 tracking-tight">Faydalı İçerikler</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <Link href={`/bilgibankasi/${blog.slug}`} key={i} className="group block bg-white rounded-3xl p-8 border border-stone-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/5 transition-all">
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider mb-4 block">Rehber</span>
            <h4 className="font-bold text-xl text-stone-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">{blog.title}</h4>
            <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
