export const seoKeywords = [
  { keyword: "Peugeot 3008", url: "/arac-kiralama/peugeot-3008-otomatik-dizel" },
  { keyword: "Renault Clio", url: "/arac-kiralama/renault-clio-otomatik-benzin" },
  { keyword: "Fiat Egea", url: "/arac-kiralama/fiat-egea-manuel-dizel" },
  { keyword: "Dacia Duster", url: "/arac-kiralama/dacia-duster-manuel-dizel" },
  { keyword: "VW Tiguan", url: "/arac-kiralama/vw-tiguan-otomatik-benzin" },
  { keyword: "Mercedes Vito", url: "/arac-kiralama/mercedes-vito-otomatik-dizel" },
  { keyword: "Mercedes C200", url: "/arac-kiralama/mercedes-c200-amg-otomatik-benzin" },
  { keyword: "Çardak Havalimanı", url: "/cardak-havalimani-arac-kiralama" },
  { keyword: "Çardak havalimanı", url: "/cardak-havalimani-arac-kiralama" },
  { keyword: "Pamukkale", url: "/pamukkale-arac-kiralama" },
  { keyword: "Merkezefendi", url: "/merkezefendi-arac-kiralama" },
  { keyword: "kurumsal filo kiralama", url: "/kurumsal-filo-kiralama" },
  { keyword: "Denizli rent a car", url: "/denizli-rent-a-car" },
  { keyword: "Denizli araç kiralama", url: "/denizli-arac-kiralama" },
  { keyword: "Denizli oto kiralama", url: "/denizli-oto-kiralama" },
  { keyword: "ekonomik araç", url: "/araclar" },
  { keyword: "SUV kiralama", url: "/araclar" }
];

export function applyInternalLinks(htmlContent: string): string {
  let processedHtml = htmlContent;

  // We only want to replace the FIRST occurrence of a keyword in the text to avoid spamming links
  seoKeywords.forEach(({ keyword, url }) => {
    // Avoid replacing if it's already inside an <a> tag.
    // A simple regex that checks if the word is NOT preceded by <a... and NOT followed by </a>
    // Since complex HTML parsing is heavy, a simple negative lookahead/lookbehind approach or simple replace works for basic content.
    
    // We use a regex that matches the keyword only if it's not inside an existing <a> tag.
    // This is a naive but effective approach for blog paragraphs.
    const regex = new RegExp(`(?<!<a[^>]*>)(${keyword})(?![^<]*</a>)`, 'i');
    
    // Replace only the first occurrence
    processedHtml = processedHtml.replace(regex, (match) => {
      return `<a href="${url}" class="text-red-600 font-medium hover:underline" title="${match}">${match}</a>`;
    });
  });

  return processedHtml;
}
