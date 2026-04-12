import type { Metadata } from 'next';
import Link from 'next/link';
import { knowledgeArticles } from '@/data/knowledge';

export const metadata: Metadata = {
  title: 'Bilgi Bankası | Emir Rent A Car Denizli',
  description: 'Oto kiralama terimleri, araç teslimat prosedürleri ve güvenli sürüş rehberi dahil olmak üzere kiralama süreci hakkında faydalı bilgiler.',
};

export default function BilgiBankasi() {
  return (
    <main className="flex-1 w-full bg-stone-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Bilgi Bankası
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
            Araç kiralama süreçleri, yasal prosedürler ve ipuçları hakkında hazırladığımız uzman rehberimize göz atın.
          </p>
          <div className="flex justify-center">
             <div className="bg-stone-200/50 rounded-full flex items-center p-2 max-w-md w-full">
               <input 
                 type="text" 
                 placeholder="Bilgi bankasında ara..." 
                 className="bg-transparent border-none outline-none flex-grow px-4 text-stone-700" 
                 disabled
               />
               <button className="bg-white text-stone-900 px-6 py-2 rounded-full font-medium shadow-sm" disabled>Ara</button>
             </div>
          </div>
        </div>

        {/* Articles Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {knowledgeArticles.map((article, idx) => (
            <article key={idx} className="bg-white hover:-translate-y-1 rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-red-600 tracking-widest uppercase">Rehber</p>
                 </div>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">{article.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-8 flex-grow">
                {article.excerpt}
              </p>
              <div className="mt-auto">
                 <Link href={`/bilgibankasi/${article.slug}`} className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors">
                   Devamını Oku 
                   <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                 </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
