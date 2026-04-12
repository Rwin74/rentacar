import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) {
    return {
      title: 'Araç Bulunamadı | Emir Rent A Car',
    };
  }

  return {
    title: `${car.model} Kiralama Denizli | Emir Rent A Car`,
    description: `${car.model} kiralama ayrıcalığı Denizli Emir Rent A Car'da! ${car.price} başlayan fiyatlarla hemen rezervasyon yapın. ${car.features.join(', ')}.`,
    alternates: {
      canonical: `/arac-kiralama/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${car.model} Kiralama Denizli`,
      description: car.description,
      images: [
        {
          url: car.image,
          width: 800,
          height: 600,
          alt: `${car.model} Denizli Kiralama`,
        },
      ],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) {
    notFound();
  }

  const contactNumber = "905543950404";

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": car.model,
    "image": `https://www.emirdenizliotokiralama.com.tr${car.image}`,
    "description": car.description,
    "brand": {
      "@type": "Brand",
      "name": car.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.emirdenizliotokiralama.com.tr/arac-kiralama/${car.slug}`,
      "priceCurrency": "TRY",
      "price": car.priceNumber,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Emir Rent A Car"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "FuelType",
        "value": car.fuelType
      },
      {
        "@type": "PropertyValue",
        "name": "Transmission",
        "value": car.transmission
      },
      {
        "@type": "PropertyValue",
        "name": "ModelYear",
        "value": car.year.toString()
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.emirdenizliotokiralama.com.tr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Araç Filomuz",
        "item": "https://www.emirdenizliotokiralama.com.tr/araclar"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": car.model,
        "item": `https://www.emirdenizliotokiralama.com.tr/arac-kiralama/${car.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="flex-1 w-full bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <Link href="/araclar" className="text-red-600 hover:text-red-800 font-medium transition inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Filoya Dön
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Image Section */}
            <div className="bg-stone-50 rounded-3xl p-8 lg:p-12 border border-stone-100 flex items-center justify-center sticky top-24 shadow-sm">
              <Image
                src={car.image}
                alt={`${car.model} kiralama Denizli`}
                width={800}
                height={600}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col">
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-bold rounded-full w-fit mb-4">
                {car.class}
              </span>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
                {car.model}
              </h1>
              
              <div className="text-3xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-8">
                {car.price} {car.price !== "Fiyat Sorunuz" && <span className="text-lg font-medium text-stone-500">/ Günlük</span>}
              </div>

              <div className="prose prose-stone mb-10">
                <h3 className="text-xl font-bold text-stone-800 mb-3">Araç Hakkında</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {car.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Vites Tipi</span>
                  <strong className="text-stone-900 text-lg">{car.transmission}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Yakıt Tipi</span>
                  <strong className="text-stone-900 text-lg">{car.fuelType}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Araç Yılı</span>
                  <strong className="text-stone-900 text-lg">{car.year}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Marka</span>
                  <strong className="text-stone-900 text-lg">{car.brand}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href={`tel:+${contactNumber}`} 
                  className="flex-1 py-4 bg-stone-900 text-white text-lg font-semibold rounded-2xl hover:bg-stone-800 transition flex items-center justify-center gap-2 shadow-lg shadow-stone-900/20"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Hemen Ara
                </a>
                <a 
                  href={`https://wa.me/${contactNumber}?text=Merhaba, ${car.model} aracı için kiralama işlemi yapmak istiyorum.${car.price !== "Fiyat Sorunuz" ? ` Günlük ${car.price} fiyatı gördüm.` : ""}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-4 bg-green-500 text-white text-lg font-semibold rounded-2xl hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  WhatsApp
                </a>
              </div>
              
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
