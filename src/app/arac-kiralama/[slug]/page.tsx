import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';
import FAQAccordion from '@/components/FAQAccordion';
import { RelatedCars, RelatedServices, RelatedBlogs } from '@/components/RelatedSections';

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
    title: `${car.model} Kiralama Denizli | En Uygun Fiyatlarla Emir Oto Kiralama`,
    description: `Denizli'de ${car.model} kiralamak artık çok kolay! Güvenilir kasko, düşük yakıt tüketimi (${car.technicalSpecs?.engineCapacity || 'Güçlü Motor'}) ve uygun fiyatlarla hemen rezervasyon yapın.`,
    alternates: {
      canonical: `/arac-kiralama/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${car.model} Kiralama Denizli | Emir Rent A Car`,
      description: car.description[0],
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
    "image": `https://www.emirdenizliotokiralama.com${car.image}`,
    "description": car.description[0],
    "brand": {
      "@type": "Brand",
      "name": car.brand
    },
    "aggregateRating": car.review ? {
      "@type": "AggregateRating",
      "ratingValue": car.review.ratingValue,
      "reviewCount": car.review.reviewCount
    } : undefined,
    "offers": {
      "@type": "Offer",
      "url": `https://www.emirdenizliotokiralama.com/arac-kiralama/${car.slug}`,
      "priceCurrency": "TRY",
      "price": car.priceNumber > 0 ? car.priceNumber : "500", // Fallback for schema
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
        "item": "https://www.emirdenizliotokiralama.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Araç Filomuz",
        "item": "https://www.emirdenizliotokiralama.com/araclar"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": car.model,
        "item": `https://www.emirdenizliotokiralama.com/arac-kiralama/${car.slug}`
      }
    ]
  };

  const faqSchema = car.faqs && car.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": car.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="flex-1 w-full bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <Link href="/araclar" className="text-red-600 hover:text-red-800 font-medium transition inline-flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Filoya Dön
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            
            {/* Image Section */}
            <div className="bg-stone-50 rounded-3xl p-8 lg:p-12 border border-stone-100 flex items-center justify-center sticky top-24 shadow-sm">
              <Image
                src={car.image}
                alt={`${car.model} kiralama Denizli`}
                width={800}
                height={600}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
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
              
              <div className="flex items-center gap-2 mb-4">
                {car.review && (
                  <>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(car.review!.ratingValue) ? 'fill-current' : 'text-stone-300'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-stone-600 font-medium">{car.review.ratingValue} / 5</span>
                    <span className="text-stone-400 text-sm">({car.review.reviewCount} Değerlendirme)</span>
                  </>
                )}
              </div>

              <div className="text-3xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-8">
                {car.price} {car.price !== "Fiyat Sorunuz" && <span className="text-lg font-medium text-stone-500">/ Günlük</span>}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex items-center gap-4">
                  <span className="block text-stone-500 text-sm mb-1">Vites Tipi</span>
                  <strong className="text-stone-900 text-lg block">{car.transmission}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Yakıt Tipi</span>
                  <strong className="text-stone-900 text-lg block">{car.fuelType}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Araç Yılı</span>
                  <strong className="text-stone-900 text-lg block">{car.year}</strong>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                  <span className="block text-stone-500 text-sm mb-1">Bagaj</span>
                  <strong className="text-stone-900 text-lg block">{car.trunkCapacity || 'Geniş'}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-stone prose-lg max-w-none">
                <h2 className="text-3xl font-extrabold text-stone-900 mb-6">{car.model} Kiralama Özellikleri ve Detaylar</h2>
                {car.description.map((paragraph, idx) => {
                  if (idx === 3) return (
                    <React.Fragment key={idx}>
                      <h3 className="text-2xl font-bold mt-8 mb-4">{car.model} ile Seyahat Avantajları</h3>
                      <p>{paragraph}</p>
                    </React.Fragment>
                  );
                  if (idx === 6) return (
                    <React.Fragment key={idx}>
                      <h3 className="text-2xl font-bold mt-8 mb-4">Neden Emir Rent A Car'ı Tercih Etmelisiniz?</h3>
                      <p>{paragraph}</p>
                    </React.Fragment>
                  );
                  return <p key={idx} className="mb-6">{paragraph}</p>;
                })}
              </div>

              {car.faqs && <FAQAccordion faqs={car.faqs} title={`${car.model} Kiralama Hakkında Sıkça Sorulan Sorular`} />}
            </div>

            <div className="lg:col-span-1 space-y-8">
              {car.technicalSpecs && (
                <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-4">Teknik Özellikler</h3>
                  <ul className="space-y-4 text-stone-600">
                    <li className="flex justify-between items-center"><span className="font-medium">Motor Hacmi</span><span className="font-bold text-stone-900">{car.technicalSpecs.engineCapacity}</span></li>
                    <li className="flex justify-between items-center"><span className="font-medium">Beygir Gücü</span><span className="font-bold text-stone-900">{car.technicalSpecs.horsepower}</span></li>
                    <li className="flex justify-between items-center"><span className="font-medium">Tork</span><span className="font-bold text-stone-900">{car.technicalSpecs.torque}</span></li>
                    <li className="flex justify-between items-center"><span className="font-medium">Maks. Hız</span><span className="font-bold text-stone-900">{car.technicalSpecs.topSpeed}</span></li>
                    <li className="flex justify-between items-center"><span className="font-medium">Hızlanma (0-100)</span><span className="font-bold text-stone-900">{car.technicalSpecs.acceleration}</span></li>
                  </ul>
                </div>
              )}

              {car.advantages && (
                <div className="bg-stone-900 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 border-b border-stone-700 pb-4">Öne Çıkan Avantajlar</h3>
                  <ul className="space-y-3">
                    {car.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-stone-300 leading-tight">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {car.targetAudience && (
                <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                  <h3 className="text-xl font-bold text-stone-900 mb-6 border-b border-red-200 pb-4">Kimler Tercih Etmeli?</h3>
                  <ul className="space-y-3">
                    {car.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="text-stone-800 font-medium leading-tight">{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <RelatedCars currentSlug={car.slug} />
          <RelatedServices currentSlug="none" />
          <RelatedBlogs currentSlug="none" />

        </div>
      </main>
    </>
  );
}
