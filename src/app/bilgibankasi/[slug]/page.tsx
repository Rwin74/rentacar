import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { knowledgeArticles } from '@/data/knowledge';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const article = knowledgeArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: 'Makale Bulunamadı | Emir Rent A Car',
    };
  }

  return {
    title: `${article.title} | Emir Rent A Car Bilgi Bankası`,
    description: article.excerpt,
    alternates: {
      canonical: `/bilgibankasi/${resolvedParams.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = knowledgeArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex-1 w-full bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-10">
          <Link href="/bilgibankasi" className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Bilgi Bankasına Dön
          </Link>
        </div>

        <article className="prose prose-stone lg:prose-xl max-w-none">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
             </div>
             <p className="text-sm font-semibold text-red-600 tracking-widest uppercase m-0">Rehber</p>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-extrabold text-stone-900 mb-8 leading-tight tracking-tight">
            {article.title}
          </h1>

          <div className="text-stone-700 leading-relaxed space-y-6 text-lg">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* CTA Footer for Articles */}
        <div className="mt-16 bg-stone-50 p-8 rounded-3xl border border-stone-100 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div>
            <h4 className="text-xl font-bold text-stone-900 mb-2">Denizli'de Araç Mı Kiralayacaksınız?</h4>
            <p className="text-stone-600 font-medium">En uygun fiyatlar ve güvenilir filomuzla hemen rezervasyon yapın.</p>
          </div>
          <Link href="/araclar" className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition shrink-0">
            Araçlarımızı İnceleyin
          </Link>
        </div>

      </div>
    </main>
  );
}
