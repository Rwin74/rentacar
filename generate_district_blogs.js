const fs = require('fs');

const districts = [
  { name: "Acıpayam", features: "Kanyonları, kelesi ve yaylalarıyla ünlü" },
  { name: "Babadağ", features: "Tekstil ürünleri ve yayla turizmiyle öne çıkan" },
  { name: "Baklan", features: "Tarihi dokusu ve tarım arazileriyle bilinen" },
  { name: "Bekilli", features: "Üzüm bağları ve şarapçılığıyla meşhur" },
  { name: "Beyağaç", features: "Anıt ormanları ve doğa sporlarıyla dikkat çeken" },
  { name: "Bozkurt", features: "Karagöl ve doğal güzellikleriyle huzur veren" },
  { name: "Buldan", features: "Dokuması, tarihi konakları ve termal sularıyla ünlü" },
  { name: "Çal", features: "Kısık Kanyonu ve üzüm bağlarıyla büyüleyen" },
  { name: "Çameli", features: "Yayla turizmi ve doğal kaynaklarıyla popüler" },
  { name: "Çardak", features: "Acıgöl ve havalimanına ev sahipliği yapan" },
  { name: "Çivril", features: "Işıklı Gölü ve nilüfer çiçekleriyle doğa harikası" },
  { name: "Güney", features: "Güney Şelalesi ile muhteşem manzaralar sunan" },
  { name: "Honaz", features: "Ege Bölgesinin en yüksek dağına ve kirazına sahip" },
  { name: "Kale", features: "Tabae Antik Kenti ve tarihi dokusuyla büyüleyen" },
  { name: "Merkezefendi", features: "Denizlinin kalbi, modern yaşamı ve iş merkezleriyle öne çıkan" },
  { name: "Pamukkale", features: "Beyaz travertenleri ve Hierapolis Antik Kentiyle dünyaca ünlü" },
  { name: "Sarayköy", features: "Termal kaplıcaları ve tarım zenginliğiyle bilinen" },
  { name: "Serinhisar", features: "Leblebisi ve Yatağan kılıçlarıyla meşhur" },
  { name: "Tavas", features: "Bozdağ Kayak Merkezi ve yöresel lezzetleriyle dikkat çeken" }
];

const generatedBlogs = districts.map(district => {
  const slug = `${district.name.toLowerCase().replace(/ı/g, 'i').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o')}-arac-kiralama-rehberi`;
  
  return `  {
    slug: "${slug}",
    title: "${district.name} Araç Kiralama ve Gezi Rehberi 2026",
    excerpt: "${district.name} ilçesini kesintisiz ve özgürce gezmek için en uygun fiyatlı araç kiralama rehberi. Emir Rent A Car güvencesiyle ${district.name} rent a car hizmetleri.",
    content: [
      "${district.features} ${district.name}, Denizli'nin keşfedilmeyi bekleyen en özel noktalarından biridir. Bu eşsiz coğrafyayı toplu taşıma saatlerine bağlı kalmadan, özgürce ve konforlu bir şekilde gezmenin en mantıklı yolu <a href=\\"/denizli-arac-kiralama\\" className=\\"text-red-600 font-medium hover:underline\\">Denizli araç kiralama</a> hizmetinden faydalanmaktır. Emir Rent A Car olarak, ${district.name} seyahatlerinizde size özel ekonomik ve lüks araç seçenekleri sunuyoruz.",
      "${district.name} bölgesine seyahat eden misafirlerimiz genellikle Denizli merkezinden veya havalimanından araçlarını teslim almayı tercih etmektedir. Eğer şehre uçakla geliyorsanız, zaman kaybetmemek adına doğrudan <a href=\\"/cardak-havalimani-arac-kiralama\\" className=\\"text-red-600 font-medium hover:underline\\">Çardak Havalimanı araç kiralama</a> ofisimizden aracınızı teslim alabilir ve direkt ${district.name} rotanıza doğru yola çıkabilirsiniz. Gerekli kiralama prosedürleri için <a href=\\"/bilgibankasi/havalimani-arac-teslimat-prosedurleri\\" className=\\"text-red-600 font-medium hover:underline\\">Havalimanı Teslimat Süreçleri</a> yazımızı okuyabilirsiniz.",
      "${district.name} yollarında konforlu bir sürüş için araç seçimi oldukça önemlidir. Dağlık veya yayla bölgelerine seyahat edecekseniz yüksek alt yapılı <a href=\\"/arac-kiralama/dacia-duster-manuel-dizel\\" className=\\"text-red-600 font-medium hover:underline\\">Dacia Duster</a> SUV modellerimizi, şehir içi ağırlıklı gezecekseniz yakıt cimrisi <a href=\\"/arac-kiralama/renault-clio-otomatik-benzin\\" className=\\"text-red-600 font-medium hover:underline\\">Renault Clio</a> veya <a href=\\"/arac-kiralama/fiat-egea-manuel-dizel\\" className=\\"text-red-600 font-medium hover:underline\\">Fiat Egea</a> modellerimizi tercih edebilirsiniz. Araç seçerken dikkat etmeniz gerekenleri <a href=\\"/bilgibankasi/denizlide-rent-a-car-secerken-nelere-dikkat-edilmeli\\" className=\\"text-red-600 font-medium hover:underline\\">Araç Seçim Rehberimiz</a> üzerinden inceleyebilirsiniz.",
      "Uzun soluklu bir tatil veya ticari faaliyet planlıyorsanız, ${district.name} için günlük kiralama yerine aylık kiralama çok daha ekonomik olacaktır. İşletmeler için vergi avantajı sağlayan bu yöntemle ilgili detayları <a href=\\"/bilgibankasi/uzun-donem-aylik-arac-kiralamanin-avantajlari\\" className=\\"text-red-600 font-medium hover:underline\\">Aylık Araç Kiralama Avantajları</a> sayfasında bulabilirsiniz. Hemen rezervasyon yapmak ve 2026 yılına özel indirimli <a href=\\"/denizli-rent-a-car\\" className=\\"text-red-600 font-medium hover:underline\\">Denizli rent a car</a> fiyatlarından yararlanmak için müşteri hizmetlerimizle WhatsApp üzerinden iletişime geçin."
    ]
  }`;
});

let content = fs.readFileSync('src/data/knowledge.ts', 'utf-8');
content = content.replace(/\];\s*$/, ',\\n' + generatedBlogs.join(',\\n') + '\\n];\\n');
fs.writeFileSync('src/data/knowledge.ts', content, 'utf-8');
console.log('Successfully added 19 new blog posts to knowledge.ts');
