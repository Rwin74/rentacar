import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex-1 w-full bg-stone-50 flex items-center justify-center min-h-screen">
      <div className="text-center px-6 py-24">
        <h1 className="text-9xl font-extrabold text-red-100 tracking-tighter mb-4">404</h1>
        <h2 className="text-3xl font-bold text-stone-900 mb-6">Sayfa Bulunamadı</h2>
        <p className="text-lg text-stone-600 mb-10 max-w-md mx-auto">
          Aradığınız sayfaya şu anda ulaşılamıyor. URL&apos;i yanlış yazmış olabilirsiniz veya sayfa kaldırılmış olabilir.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
