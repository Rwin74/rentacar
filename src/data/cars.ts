export interface Car {
  id: number;
  slug: string;
  brand: string;
  modelName: string;
  model: string;
  class: string;
  image: string;
  price: string;
  priceNumber: number;
  features: string[];
  description: string[];
  year: number;
  fuelType: string;
  transmission: string;
}

export const cars: Car[] = [
  { 
    id: 1, 
    slug: "renault-clio-otomatik-benzin", 
    brand: "Renault", 
    modelName: "Clio", 
    model: "Renault Clio", 
    class: "Ekonomik Sınıf", 
    image: "/images/kiralik_renault_clio.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Benzin", "5 Koltuk"], 
    description: [
      "Şehir içi pratik kullanım, ekonomik ve konforlu ulaşım imkanı sunan Renault Clio, yenilikçi tasarımıyla dikkat çekiyor. Aerodinamik yapısı ve kompakt boyutları sayesinde dar sokaklarda bile kolay manevra yapma ve pratik park avantajı sağlıyor.",
      "Yeni nesil benzinli motoru ve otomatik şanzımanı ile donatılan Clio, yakıt tüketiminde oldukça cimridir. Şehir içinde ortalama 6.0 litre, şehirler arası yollarda ise 4.5 litre civarında yakıt tüketerek bütçe dostu bir kiralama deneyimi sunar.",
      "İç mekanda sunulan ergonomik koltuklar, geniş diz mesafesi ve kullanıcı dostu multimedya sistemi sürüş konforunu en üst seviyeye taşır. 391 litrelik bagaj hacmi, 2-3 kişilik bir ailenin hafta sonu tatili veya iş seyahatleri için gereken bavulları rahatlıkla alabilecek kapasitededir.",
      "Denizli rent a car ihtiyaçlarınız için ideal bir seçenek olan Renault Clio, Çardak Havalimanı'ndan şehir merkezine veya Pamukkale gibi turistik noktalara yapacağınız transferler için hem ekonomik hem de son derece konforlu bir yol arkadaşıdır."
    ],
    year: 2023,
    fuelType: "Benzin",
    transmission: "Otomatik"
  },
  { 
    id: 2, 
    slug: "fiat-egea-manuel-dizel", 
    brand: "Fiat", 
    modelName: "Egea", 
    model: "Fiat Egea", 
    class: "Orta Sınıf", 
    image: "/images/kiralik_fiat_egea.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Manuel", "Dizel", "Geniş Bagaj"], 
    description: [
      "Fiyat-performans oranı en yüksek araçlardan biri olan Fiat Egea, hem şehir içi günlük kullanımlarda hem de uzun yolda sunduğu üstün sürüş dinamiği ile tam bir aile aracı olarak öne çıkıyor.",
      "Dizel motorun sunduğu yüksek tork gücü sayesinde rampalarda çekiş kaybı yaşatmayan Egea, yakıt tüketimi konusunda sınıfının en iddialı modellerindendir. Ortalama 4.5 - 5.0 litre yakıt tüketimi ile uzun yolculuklarınızı çok daha ekonomik hale getirir.",
      "Geniş ve ferah iç mekanı, uzun boylu yolcuların dahi rahat etmesini sağlarken, sınıfının en büyüklerinden olan 520 litrelik dev bagaj hacmi ile kalabalık ailelerin tüm eşyalarını sorunsuz bir şekilde taşır.",
      "Denizli oto kiralama filosunun vazgeçilmezlerinden olan Egea, özellikle Çardak Havalimanı'ndan çevre illere veya ilçelere yapılacak olan transferlerde, bagaj yoğunluğu olan misafirlerimiz için en mantıklı ve bütçe dostu seçenektir."
    ],
    year: 2022,
    fuelType: "Dizel",
    transmission: "Manuel"
  },
  { 
    id: 3, 
    slug: "peugeot-3008-otomatik-dizel", 
    brand: "Peugeot", 
    modelName: "3008", 
    model: "Peugeot 3008", 
    class: "SUV", 
    image: "/images/kiralik_peugeot_3008.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Dizel", "Cam Tavan"], 
    description: [
      "Denizli araç kiralama ihtiyaçlarınız için ideal, lüks ve sportif SUV deneyimi sunan Peugeot 3008. Göz alıcı tasarımı, keskin hatları ve karakteristik aslan dişi farlarıyla yollarda tüm dikkatleri üzerine çeker.",
      "Dizel motorun yüksek verimliliği ve 8 ileri tam otomatik şanzımanın kusursuz uyumu sayesinde, güçlü bir performans sergilerken yakıt ekonomisinden de ödün vermez. Uzun yolda ortalama 5.0 litre yakıt tüketimi ile devasa bir SUV için oldukça cimridir.",
      "İç mekana adım attığınızda sizi karşılayan i-Cockpit teknolojisi, küçük direksiyon simidi ve piyano tuşları, sürüş keyfini adeta bir uzay mekiği kullanıyormuş hissiyatına dönüştürür. Açılabilir panoramik cam tavanı ve 520 litrelik bagaj kapasitesiyle ailenizle eşsiz bir yolculuk sunar.",
      "Özellikle Denizli Çardak Havalimanı VIP transferlerinde veya Ege bölgesi uzun tatil rotalarında, prestij, konfor ve yüksek sürüş pozisyonu arayan müşterilerimiz için birinci sınıf bir kiralık SUV alternatifidir."
    ],
    year: 2023,
    fuelType: "Dizel",
    transmission: "Otomatik"
  },
  { 
    id: 4, 
    slug: "hyundai-i20-otomatik-benzin", 
    brand: "Hyundai", 
    modelName: "i20", 
    model: "Hyundai i20", 
    class: "Ekonomik Sınıf", 
    image: "/images/kiralik_hyundai_i20.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Benzin", "Kompakt"], 
    description: [
      "Modern, keskin ve sportif dış tasarımının yanı sıra çift renk gövde yapısıyla da dikkat çeken Hyundai i20, yoğun trafiği olan şehirlerde ve keyifli hafta sonu gezilerinde mükemmel bir yol arkadaşıdır.",
      "Yeni nesil benzinli motor ve çift kavramalı otomatik vites (DCT) teknolojisi, pürüzsüz vites geçişleri sağlarken performansı üst düzeye çıkarır. Şehir içi ve dışı karma kullanımda ortalama 5.5 litre yakıt sarfiyatı ile beklentileri fazlasıyla karşılar.",
      "Boyutlarına göre oldukça iddialı bir iç mekana sahip olan i20, dijital gösterge paneli ve gelişmiş multimedya özellikleri ile teknolojik bir sürüş deneyimi vadeder. 352 litrelik bagaj hacmi, standart boyutlardaki 2-3 valizi rahatlıkla alabilir.",
      "Denizli şehir merkezi içi günlük toplantılarınızda veya Pamukkale, Karahayıt gibi yakın mesafe turistik lokasyon ziyaretlerinizde kıvrak yapısı, kolay park edilmesi ve dinamik sürüşü ile en çok tercih edilen kiralık hatchback araçlarımızdandır."
    ],
    year: 2024,
    fuelType: "Benzin",
    transmission: "Otomatik"
  },
  { 
    id: 5, 
    slug: "renault-megane-otomatik-dizel", 
    brand: "Renault", 
    modelName: "Megane", 
    model: "Renault Megane", 
    class: "Orta Sınıf", 
    image: "/images/kiralik_renault_megane.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Dizel", "Konfor"], 
    description: [
      "Prestij, yüksek güvenlik ve şık sedan tasarımını bir arada sunan Renault Megane Sedan, hem kurumsal şirket kiralama taleplerinde hem de bireysel lüks kiralama ihtiyaçlarınızda en üstün verimi sağlar.",
      "Efsanevi dCi dizel motoru ve EDC otomatik şanzımanı sayesinde, uzun yolda rakipsiz bir yakıt tasarrufu sunar. Tek depo ile uzun kilometreler katedebilen Megane, ortalama 4.0 - 4.5 litre yakıt tüketimi ile işletme maliyetlerinizi minimize eder.",
      "C segmentinin referans modellerinden olan araç, üstün süspansiyon konforu ve yalıtımı ile yorgunluk hissini ortadan kaldırır. 503 litrelik derin ve kullanışlı bagaj hacmi, geniş ailelerin tatil planları için tam not almaktadır.",
      "Denizli Havalimanı teslimatlı araç kiralama süreçlerinizde veya şehir dışı uzun iş seyahatlerinizde, misafirlerinize ve kendinize üst düzey bir seyahat konforu yaşatmak için ideal bir rent a car tercihidir."
    ],
    year: 2023,
    fuelType: "Dizel",
    transmission: "Otomatik"
  },
  { 
    id: 6, 
    slug: "dacia-duster-manuel-dizel", 
    brand: "Dacia", 
    modelName: "Duster", 
    model: "Dacia Duster", 
    class: "SUV", 
    image: "/images/kiralik_dacia_duster.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Manuel", "Dizel", "Arazi Uyumlu"], 
    description: [
      "Yüksek zemin mesafesi, kaslı dış görünümü ve kanıtlanmış sağlam yapısıyla Duster; doğa tatilleri, hafif engebeli rotalar veya geniş alana ihtiyaç duyan kalabalık aileler için en mantıklı SUV kiralama tercihidir.",
      "Güçlü dizel motoru, dik yokuşlarda ve zorlu şartlarda dahi yüksek çekiş gücü sağlarken manuel şanzımanıyla sürücüye tam kontrol verir. SUV standartlarına göre oldukça ekonomik olan araç, karma tüketimde 5.0 litre yakıt değerine sahiptir.",
      "Yüksek oturma pozisyonu sayesinde çevreye tam hakimiyet sağlarken, geniş omuz ve baş mesafesiyle 5 yetişkini konforla ağırlar. 478 litrelik bagaj hacmi ise kamp malzemelerinizden büyük valizlerinize kadar her şeyi taşıyabilir.",
      "Özellikle Denizli'nin dağlık köylerine, kayak merkezlerine veya çevre illerdeki doğa rotalarına yapılacak seyahatlerde, aracın altını sürtme endişesi yaşamadan güvenle yolculuk edebileceğiniz bir arazi aracıdır."
    ],
    year: 2022,
    fuelType: "Dizel",
    transmission: "Manuel"
  },
  { 
    id: 7, 
    slug: "vw-polo-otomatik-benzin", 
    brand: "Volkswagen", 
    modelName: "Polo", 
    model: "VW Polo", 
    class: "Ekonomik Sınıf", 
    image: "/images/kiralik_vw_polo.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Benzin", "Premium"], 
    description: [
      "Kendi sınıfının en premium ve tok hissini sunan Volkswagen Polo, klasikleşen Alman mühendisliği ile üst düzey güvenlik, mükemmel izolasyon ve elit bir tasarım çizgisi sunar.",
      "TSI benzinli motor ve dünyanın en hızlı vites değiştiren şanzımanlarından biri olan DSG'nin harika uyumu ile kesintisiz bir güç ve pürüzsüz vites geçişleri garanti edilir. Şehir içinde seri, uzun yolda ise stabil ve düşük tüketimli bir karakter sergiler.",
      "Kompakt dış boyutlarına rağmen iç mekanı oldukça cömert olan Polo, yumuşak dokunuşlu malzemeleri ve sezgisel bilgi-eğlence sistemiyle lüks hissini yaşatır. 351 litrelik simetrik bagajı pratik bir kullanım sunar.",
      "Denizli oto kiralama süreçlerinde, boyut olarak büyük bir araç istemeyen ancak kalite, prestij ve sessizlikten kesinlikle taviz vermek istemeyen müşterilerimiz için birinci sınıf premium kompakt bir kiralık araç seçeneğidir."
    ],
    year: 2023,
    fuelType: "Benzin",
    transmission: "Otomatik"
  },
  { 
    id: 8, 
    slug: "toyota-corolla-otomatik-hibrit", 
    brand: "Toyota", 
    modelName: "Corolla", 
    model: "Toyota Corolla", 
    class: "Orta Sınıf", 
    image: "/images/kiralik_toyota_corolla.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Hibrit", "Ekonomik"], 
    description: [
      "Dünyanın en çok tercih edilen otomobili unvanını gururla taşıyan Toyota Corolla, kendi kendini şarj eden e-CVT hibrit teknolojisi sayesinde pürüzsüz, sessiz ve yenilikçi bir sürüş deneyimi sağlar.",
      "Özellikle sıkışık trafikte elektrik motorunu kullanarak inanılmaz derecede düşük bir yakıt tüketimine ulaşan Corolla Hibrit, şehir içi kullanımlarda ortalama 3.5 - 4.0 litre tüketim değerleriyle bütçenizi büyük oranda korur.",
      "Gelişmiş güvenlik donanımları, bağımsız arka süspansiyon sayesinde artan yol tutuşu ve 471 litrelik bagaj hacmi ile tam bir konfor abidesidir. Sessiz çalışma karakteri sayesinde yorucu uzun yolculukları dinlendirici bir aktiviteye çevirir.",
      "Denizli rent a car pazarında, çevre dostu teknolojilere önem veren, teknolojik ve prestijli bir sedan arayan, aynı zamanda yakıt maliyetini en aza indirmek isteyen kurumsal ve bireysel müşterilerimiz için kusursuz bir kiralama opsiyonudur."
    ],
    year: 2024,
    fuelType: "Hibrit",
    transmission: "Otomatik"
  },
  { 
    id: 9, 
    slug: "vw-tiguan-otomatik-benzin", 
    brand: "Volkswagen", 
    modelName: "Tiguan", 
    model: "VW Tiguan", 
    class: "SUV", 
    image: "/images/kiralik_vw_tiguan.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Benzin", "Lüks İç Mekan"], 
    description: [
      "Volkswagen'in amiral gemisi SUV modellerinden olan Tiguan, güçlü duruşu, geniş iç hacmi ve en üstün donanım paketiyle kendinizi yollarda her an özel hissetmenizi sağlayacak kusursuz bir kiralık SUV aracıdır.",
      "TSI motor teknolojisi ve DSG otomatik şanzımanı ile iki tona yaklaşan gövdesine rağmen spor otomobil ivmelenmesi sunar. Gelişmiş aerodinamiği sayesinde yüksek süratlerde dahi güvenli ve stabil bir tutuş sağlarken rüzgar sesini kabine almaz.",
      "Sınıfının lideri konumundaki lüks iç mekanı, 3 bölgeli dijital klima, panoramik cam tavan ve devasa dokunmatik ekranla donatılmıştır. 615 litrelik muazzam bagaj hacmi, en kalabalık aile tatillerinin bavullarını bile kolayca yutar.",
      "Denizli Havalimanı VIP karşılamalarında, iş adamlarının şehirler arası protokol ziyaretlerinde veya uzun süreli Anadolu turlarında, güvenlik ve gösterişi en üst düzeyde yaşamak isteyenler için rakipsiz bir seçenektir."
    ],
    year: 2023,
    fuelType: "Benzin",
    transmission: "Otomatik"
  },
  { 
    id: 10, 
    slug: "mercedes-c200-amg-otomatik-benzin", 
    brand: "Mercedes-Benz", 
    modelName: "C200", 
    model: "Mercedes C200 AMG", 
    class: "Lüks Segment", 
    image: "/images/kiralik_mercedes_c200.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Benzin", "Premium İç Mekan"], 
    description: [
      "Yıldızın prestijini AMG sportifliği ile harmanlayan Mercedes-Benz C200, iş seyahatleriniz, düğün, nişan gibi özel günleriniz veya en üst düzey prestij ihtiyaçlarınız için tasarlanmış gerçek bir sanat eseridir.",
      "9G-Tronic tam otomatik şanzımanı ve EQ Boost hafif hibrit teknolojisiyle desteklenen motoru, kusursuz bir performans sağlarken gaz tepkilerine anında cevap verir. Dinamik sürüş modları ile aracın karakterini isteğinize göre değiştirebilirsiniz.",
      "İç mekana adım attığınızda sizi karşılayan devasa orta ekran, ambiyans aydınlatmaları ve birinci sınıf deri döşemeler eşsiz bir ambiyans yaratır. İleri sürüş destek sistemleri ve üstün izolasyon ile yolculuklarınız yorulmadan tamamlanır.",
      "Denizli lüks araç kiralama sektörünün zirvesinde yer alan bu modelimiz; gelin arabası konsepti, üst düzey protokol taşımacılığı veya sadece kendi konforunu ödüllendirmek isteyen VIP müşterilerimiz için ayrıcalıklı bir kiralama deneyimi sunar."
    ],
    year: 2023,
    fuelType: "Benzin",
    transmission: "Otomatik"
  },
  { 
    id: 11, 
    slug: "mercedes-vito-otomatik-dizel", 
    brand: "Mercedes-Benz", 
    modelName: "Vito", 
    model: "Mercedes Vito VIP", 
    class: "VIP Minivan / 9 Koltuk", 
    image: "/images/kiralik_mercedes_vito.png", 
    price: "Fiyat Sorunuz", 
    priceNumber: 0,
    features: ["Otomatik", "Dizel", "8+1 Yolcu"], 
    description: [
      "Geniş aile tatilleri, kurumsal ekip etkinlikleri ve konforlu havalimanı transferleri için tasarlanmış olan Mercedes Vito, üst düzey sürüş dinamikleri ve geniş yaşam alanıyla minibüs kiralama algısını bambaşka bir lüks seviyeye taşıyor.",
      "Güçlü dizel motoru tam kapasite yüklüyken bile performansından ödün vermez. Otomatik şanzımanıyla binek araç konforunda kullanılabilen Vito, boyutlarına göre oldukça makul olan ortalama 7.0 litre yakıt tüketimi sergiler.",
      "8+1 yolcu kapasitesiyle kalabalık grupları rahatça ağırlayan araç, bağımsız arka klima kontrolleri, deri koltukları ve VIP detayları ile arka bölümdeki yolculara birinci sınıf bir uçuş deneyimi yaşatır. Dev bagajı sayesinde 8 kişinin valizini de rahatlıkla alır.",
      "Çardak Havalimanı'ndan Pamukkale, Salda Gölü veya çevre illerdeki tatil beldelerine yapılacak transferlerde; çoklu araç kiralamak yerine tek bir araçta VIP konforunda bir araya gelmek isteyen gruplar için en rasyonel ve prestijli çözümdür."
    ],
    year: 2023,
    fuelType: "Dizel",
    transmission: "Otomatik"
  }
];
