import React from 'react';

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs, title = "Sıkça Sorulan Sorular" }: { faqs: FAQ[], title?: string }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full mt-12 mb-12">
      <h2 className="text-3xl font-extrabold text-stone-900 mb-8 tracking-tight">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-stone-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-900 font-semibold text-lg hover:text-red-600 transition-colors">
              <h3 className="font-medium pr-4">{faq.question}</h3>
              <span className="relative size-6 shrink-0 bg-stone-50 rounded-full flex items-center justify-center group-open:bg-red-50 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4 opacity-100 group-open:opacity-0 transition-opacity text-stone-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4 opacity-0 group-open:opacity-100 transition-opacity text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 mt-2 pt-4">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
