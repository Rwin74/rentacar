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
  description: string;
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
    price: "900₺", 
    priceNumber: 900,
    features: ["Otomatik", "Benzin", "5 Koltuk"], 
    description: "Şehir içi pratik kullanım, ekonomik ve konforlu ulaşım imkanı sunan Renault Clio. Yenilikçi tasarımı, düşük yakıt tüketimi ve pratik park avantajıyla Denizli rent a car ihtiyaçlarınız için en ideal ekonomik araç seçeneklerinden biridir.",
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
    price: "1100₺", 
    priceNumber: 1100,
    features: ["Manuel", "Dizel", "Geniş Bagaj"], 
    description: "Düşük yakıt tüketimi ve geniş bagaj hacmi ile tam bir aile aracı. Uzun yolda ve şehir içinde sunduğu üstün sürüş dinamiği ile Egea, Denizli oto kiralama filosunun vazgeçilmezidir.",
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
    price: "2500₺", 
    priceNumber: 2500,
    features: ["Otomatik", "Dizel", "Cam Tavan"], 
    description: "Denizli araç kiralama ihtiyaçlarınız için ideal, lüks SUV deneyimi. Cam tavanı, yüksek sürüş pozisyonu ve premium donanımları ile aileniz veya arkadaşlarınızla eşsiz bir yolculuk sunar.",
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
    price: "950₺", 
    priceNumber: 950,
    features: ["Otomatik", "Benzin", "Kompakt"], 
    description: "Modern ve sportif tasarımının yanı sıra otomatik vites kolaylığıyla Hyundai i20, yoğun trafiği olan şehirlerde ve keyifli gezilerde mükemmel sürüş konforu sağlar.",
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
    price: "1300₺", 
    priceNumber: 1300,
    features: ["Otomatik", "Dizel", "Konfor"], 
    description: "Prestij, güvenlik ve yüksek performansı bir arada sunan Megane Sedan, hem şirket kiralama hem de bireysel kiralama ihtiyaçlarınızda en üstün verimi sağlar.",
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
    price: "1800₺", 
    priceNumber: 1800,
    features: ["Manuel", "Dizel", "Arazi Uyumlu"], 
    description: "Yüksek zemin mesafesi ve dayanıklı yapısıyla Duster; doğa tatilleri, yorucu rotalar veya geniş depolama ihtiyacı olan aileler için en mantıklı SUV kiralama tercihidir.",
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
    price: "1100₺", 
    priceNumber: 1100,
    features: ["Otomatik", "Benzin", "Premium"], 
    description: "Kendi sınıfının en premium hissini sunan Volkswagen Polo, üst düzey izolasyon ve pürüzsüz vites geçişleri (DSG) ile premium kompakt bir rent a car deneyimi sunar.",
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
    price: "1400₺", 
    priceNumber: 1400,
    features: ["Otomatik", "Hibrit", "Ekonomik"], 
    description: "Hibrit teknolojisi sayesinde inanılmaz düşük bir yakıt tüketimine sahip olan Corolla, sessiz sürüşü ve yüksek ikinci el güvenilirliği ile eşsiz bir opsiyondur.",
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
    price: "2800₺", 
    priceNumber: 2800,
    features: ["Otomatik", "Benzin", "Lüks İç Mekan"], 
    description: "En geniş iç hacme ve en üstün donanım paketine sahip olan Volkswagen Tiguan, kendinizi özel hissetmenizi sağlayacak kusursuz bir kiralık SUV aracıdır.",
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
    description: "İş seyahatleriniz, özel günleriniz veya prestij ihtiyaçlarınız için tasarlanmış üst düzey lüks ve güvenlik sunan Mercedes-Benz C200 AMG. Ayrıcalıklı bir kiralama deneyimi için ilk tercihiniz.",
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
    description: "Geniş aile tatilleri, özel turlar ve konforlu havalimanı transferleri için ideal. Mercedes Vito, üst düzey yolculuk dinamikleriyle minibüs kiralama algısını bambaşka bir lüks seviyeye taşıyor.",
    year: 2023,
    fuelType: "Dizel",
    transmission: "Otomatik"
  }
];
