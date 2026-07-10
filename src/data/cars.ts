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
  technicalSpecs?: {
    engineCapacity: string;
    horsepower: string;
    torque: string;
    topSpeed: string;
    acceleration: string;
  };
  trunkCapacity?: string;
  advantages?: string[];
  targetAudience?: string[];
  faqs?: { question: string; answer: string }[];
  review?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export const cars: Car[] = [
  {
    "id": 1,
    "slug": "renault-clio-otomatik-benzin",
    "brand": "Renault",
    "modelName": "Clio",
    "model": "Renault Clio",
    "class": "Ekonomik Sınıf",
    "image": "/images/kiralik_renault_clio.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Benzin",
      "5 Koltuk"
    ],
    "year": 2023,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.0 TCe",
      "horsepower": "90 HP",
      "torque": "142 Nm",
      "topSpeed": "180 km/s",
      "acceleration": "12.2 sn"
    },
    "trunkCapacity": "391 Litre",
    "advantages": [
      "Düşük yakıt tüketimi",
      "Şehir içi kolay park imkanı",
      "Ergonomik iç mekan",
      "Uygun kiralama fiyatı"
    ],
    "targetAudience": [
      "Çekirdek aileler",
      "Şehir içi seyahat edenler",
      "Bütçe dostu araç arayanlar",
      "Yalnız seyahat edenler"
    ],
    "faqs": [
      {
        "question": "Renault Clio otomatik vites mi?",
        "answer": "Evet, filomuzdaki Renault Clio aracımız yeni nesil otomatik viteslidir. Şehir içi ve uzun yolda son derece konforlu bir sürüş sunar."
      },
      {
        "question": "Clio'nun yakıt tüketimi nasıl?",
        "answer": "1.0 TCe motoru sayesinde karma kullanımda 100 km'de ortalama 5.5 - 6.0 litre gibi oldukça düşük bir yakıt tüketimine sahiptir."
      },
      {
        "question": "Denizli Çardak Havalimanı'nda aracı teslim alabilir miyim?",
        "answer": "Elbette. Önceden rezervasyon yaptırmanız durumunda Renault Clio aracınızı direkt olarak havalimanı çıkışında yetkili personelimizden teslim alabilirsiniz."
      },
      {
        "question": "Araçta kasko var mı?",
        "answer": "Filomuzdaki tüm araçlarda olduğu gibi Clio modelimizde de %100 Yasal Rent A Car Kaskosu bulunmaktadır."
      }
    ],
    "review": {
      "ratingValue": 4.8,
      "reviewCount": 65
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Renault Clio modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Renault Clio ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Renault mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Renault Clio, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Renault Clio, 1.0 TCe hacmindeki modern motoru sayesinde 90 HP güç ve 142 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Renault Clio ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Renault Clio aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Renault Clio modelinin 391 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Renault Clio, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Renault Clio kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Renault Clio, sahip olduğu Otomatik, Benzin, 5 Koltuk gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Benzin yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Renault Clio, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Renault Clio kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Renault kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Renault Clio aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Renault Clio, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Renault Clio modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Renault Clio, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Renault Clio modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 2,
    "slug": "fiat-egea-manuel-dizel",
    "brand": "Fiat",
    "modelName": "Egea",
    "model": "Fiat Egea",
    "class": "Orta Sınıf",
    "image": "/images/kiralik_fiat_egea.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Manuel",
      "Dizel",
      "Geniş Bagaj"
    ],
    "year": 2022,
    "fuelType": "Dizel",
    "transmission": "Manuel",
    "technicalSpecs": {
      "engineCapacity": "1.3 Multijet",
      "horsepower": "95 HP",
      "torque": "200 Nm",
      "topSpeed": "181 km/s",
      "acceleration": "12.0 sn"
    },
    "trunkCapacity": "520 Litre",
    "advantages": [
      "Devasa bagaj hacmi",
      "Çok düşük dizel yakıt tüketimi",
      "Geniş ve ferah arka koltuk",
      "Yüksek tork ile rampalarda çekiş gücü"
    ],
    "targetAudience": [
      "Geniş aileler",
      "Çok eşyası olanlar",
      "Uzun yola çıkacaklar",
      "Ekonomik dizel arayanlar"
    ],
    "faqs": [
      {
        "question": "Fiat Egea dizel mi?",
        "answer": "Evet, aracımız 1.3 Multijet dizel motora sahiptir. Sınıfının en az yakan motorlarından biridir."
      },
      {
        "question": "Bagaj kapasitesi kaç litre?",
        "answer": "Fiat Egea Sedan 520 litrelik devasa bir bagaja sahiptir. Ailenizin tüm valizlerini rahatça sığdırabilirsiniz."
      },
      {
        "question": "Bebek koltuğu kiralayabiliyor muyuz?",
        "answer": "Evet, rezervasyon sırasında belirtmeniz halinde aracınıza temizlenmiş ve dezenfekte edilmiş bebek koltuğu ekleyebiliyoruz."
      }
    ],
    "review": {
      "ratingValue": 4.7,
      "reviewCount": 82
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Fiat Egea modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Fiat Egea ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Fiat mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Fiat Egea, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Fiat Egea, 1.3 Multijet hacmindeki modern motoru sayesinde 95 HP güç ve 200 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Manuel şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Fiat Egea ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Fiat Egea aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Fiat Egea modelinin 520 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Fiat Egea, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Fiat Egea kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Fiat Egea, sahip olduğu Manuel, Dizel, Geniş Bagaj gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Dizel yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Fiat Egea, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Fiat Egea kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Fiat kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Fiat Egea aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Fiat Egea, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Fiat Egea modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Fiat Egea, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Fiat Egea modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 3,
    "slug": "peugeot-3008-otomatik-dizel",
    "brand": "Peugeot",
    "modelName": "3008",
    "model": "Peugeot 3008",
    "class": "SUV",
    "image": "/images/kiralik_peugeot_3008.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Dizel",
      "Cam Tavan"
    ],
    "year": 2023,
    "fuelType": "Dizel",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.5 BlueHDi",
      "horsepower": "130 HP",
      "torque": "300 Nm",
      "topSpeed": "189 km/s",
      "acceleration": "11.5 sn"
    },
    "trunkCapacity": "520 Litre",
    "advantages": [
      "Panoramik açılabilir cam tavan",
      "i-Cockpit dijital gösterge",
      "Yerden yüksek SUV konforu",
      "Üst düzey yalıtım ve süspansiyon"
    ],
    "targetAudience": [
      "Lüks ve konfor arayanlar",
      "VIP konuklar",
      "Güvenli aile seyahati isteyenler",
      "Premium deneyim yaşamak isteyenler"
    ],
    "faqs": [
      {
        "question": "Peugeot 3008'de cam tavan var mı?",
        "answer": "Evet, filomuzdaki Peugeot 3008 araçlarımız panoramik açılabilir cam tavan donanımına sahiptir."
      },
      {
        "question": "Araç otomatik vites mi?",
        "answer": "Evet, 8 ileri EAT8 tam otomatik şanzımana sahiptir. Vites geçişleri tamamen pürüzsüzdür."
      },
      {
        "question": "Günlük kiralama limiti kaç km?",
        "answer": "Günlük kiralama kilometre limitimiz araç segmentine göre değişmektedir. Detaylı bilgi için müşteri temsilcimizle iletişime geçebilirsiniz."
      }
    ],
    "review": {
      "ratingValue": 4.9,
      "reviewCount": 54
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Peugeot 3008 modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Peugeot 3008 ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Peugeot mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Peugeot 3008, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Peugeot 3008, 1.5 BlueHDi hacmindeki modern motoru sayesinde 130 HP güç ve 300 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Peugeot 3008 ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Peugeot 3008 aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Peugeot 3008 modelinin 520 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Peugeot 3008, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Peugeot 3008 kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Peugeot 3008, sahip olduğu Otomatik, Dizel, Cam Tavan gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Dizel yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Peugeot 3008, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Peugeot 3008 kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Peugeot kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Peugeot 3008 aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Peugeot 3008, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Peugeot 3008 modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Peugeot 3008, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Peugeot 3008 modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 4,
    "slug": "hyundai-i20-otomatik-benzin",
    "brand": "Hyundai",
    "modelName": "i20",
    "model": "Hyundai i20",
    "class": "Ekonomik Sınıf",
    "image": "/images/kiralik_hyundai_i20.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Benzin",
      "Kompakt"
    ],
    "year": 2024,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.4 MPI",
      "horsepower": "100 HP",
      "torque": "134 Nm",
      "topSpeed": "176 km/s",
      "acceleration": "12.2 sn"
    },
    "trunkCapacity": "352 Litre",
    "advantages": [
      "Kompakt boyutlarla kolay park",
      "Sessiz benzinli motor",
      "Geniş multimedya ekranı",
      "Dinamik dış tasarım"
    ],
    "targetAudience": [
      "Şehir içi kullanıcıları",
      "Genç çiftler",
      "Bireysel gezginler",
      "Otomatik vites pratikliği arayanlar"
    ],
    "faqs": [
      {
        "question": "Hyundai i20'nin vitesi nasıl?",
        "answer": "Aracımız tam otomatik viteslidir. Yokuşlarda kesinlikle geri kaydırma yapmaz."
      },
      {
        "question": "Bluetooth ile telefona bağlanabilir miyim?",
        "answer": "Evet, araçta Apple CarPlay ve Android Auto destekli geniş ekran multimedya sistemi bulunmaktadır."
      }
    ],
    "review": {
      "ratingValue": 4.6,
      "reviewCount": 71
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Hyundai i20 modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Hyundai i20 ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Hyundai mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Hyundai i20, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Hyundai i20, 1.4 MPI hacmindeki modern motoru sayesinde 100 HP güç ve 134 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Hyundai i20 ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Hyundai i20 aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Hyundai i20 modelinin 352 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Hyundai i20, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Hyundai i20 kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Hyundai i20, sahip olduğu Otomatik, Benzin, Kompakt gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Benzin yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Hyundai i20, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Hyundai i20 kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Hyundai kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Hyundai i20 aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Hyundai i20, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Hyundai i20 modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Hyundai i20, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Hyundai i20 modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 5,
    "slug": "renault-megane-otomatik-dizel",
    "brand": "Renault",
    "modelName": "Megane",
    "model": "Renault Megane",
    "class": "Orta Sınıf",
    "image": "/images/kiralik_renault_megane.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Dizel",
      "Konfor"
    ],
    "year": 2023,
    "fuelType": "Dizel",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.5 Blue dCi",
      "horsepower": "115 HP",
      "torque": "260 Nm",
      "topSpeed": "197 km/s",
      "acceleration": "10.8 sn"
    },
    "trunkCapacity": "503 Litre",
    "advantages": [
      "Çok düşük yakıt tüketimi",
      "C segmenti geniş arka diz mesafesi",
      "Şık ve prestijli tasarım",
      "Büyük sedan bagajı"
    ],
    "targetAudience": [
      "Şirket yöneticileri",
      "Konforlu uzun yol seyahatleri",
      "Kurumsal kiralama talepleri",
      "Geniş aileler"
    ],
    "faqs": [
      {
        "question": "Renault Megane dizel ve otomatik mi?",
        "answer": "Evet, efsanevi 1.5 dCi motor ve EDC otomatik şanzımana sahiptir. Hem ekonomik hem çok konforludur."
      },
      {
        "question": "Şirketim için aylık kiralayabilir miyim?",
        "answer": "Kurumsal filo kiralama ve aylık kiralama hizmetimiz mevcuttur. Avantajlı fiyatlar için bizimle iletişime geçin."
      }
    ],
    "review": {
      "ratingValue": 4.8,
      "reviewCount": 45
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Renault Megane modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Renault Megane ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Renault mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Renault Megane, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Renault Megane, 1.5 Blue dCi hacmindeki modern motoru sayesinde 115 HP güç ve 260 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Renault Megane ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Renault Megane aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Renault Megane modelinin 503 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Renault Megane, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Renault Megane kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Renault Megane, sahip olduğu Otomatik, Dizel, Konfor gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Dizel yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Renault Megane, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Renault Megane kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Renault kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Renault Megane aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Renault Megane, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Renault Megane modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Renault Megane, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Renault Megane modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 6,
    "slug": "dacia-duster-manuel-dizel",
    "brand": "Dacia",
    "modelName": "Duster",
    "model": "Dacia Duster",
    "class": "SUV",
    "image": "/images/kiralik_dacia_duster.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Manuel",
      "Dizel",
      "Arazi Uyumlu"
    ],
    "year": 2022,
    "fuelType": "Dizel",
    "transmission": "Manuel",
    "technicalSpecs": {
      "engineCapacity": "1.5 Blue dCi",
      "horsepower": "115 HP",
      "torque": "260 Nm",
      "topSpeed": "183 km/s",
      "acceleration": "10.2 sn"
    },
    "trunkCapacity": "478 Litre",
    "advantages": [
      "Yerden yüksek yapı",
      "Kırsal alanda rahat kullanım",
      "Güçlü çekiş",
      "Sağlam ve dayanıklı süspansiyon"
    ],
    "targetAudience": [
      "Kamp ve doğa tutkunları",
      "Şantiye ziyaretleri yapan mühendisler",
      "Uygun fiyatlı SUV arayanlar",
      "Köy ve engebeli araziye gidecekler"
    ],
    "faqs": [
      {
        "question": "Duster kiralayarak yaylaya/köye gidebilir miyim?",
        "answer": "Elbette. Dacia Duster yüksek alt yapısıyla hafif arazi ve köy yolları için oldukça uygundur."
      },
      {
        "question": "Araç çok yakar mı?",
        "answer": "Hayır, Duster 1.5 dizel motoruyla SUV sınıfının en az yakan araçlarının başında gelir."
      }
    ],
    "review": {
      "ratingValue": 4.6,
      "reviewCount": 68
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Dacia Duster modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Dacia Duster ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Dacia mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Dacia Duster, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Dacia Duster, 1.5 Blue dCi hacmindeki modern motoru sayesinde 115 HP güç ve 260 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Manuel şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Dacia Duster ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Dacia Duster aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Dacia Duster modelinin 478 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Dacia Duster, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Dacia Duster kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Dacia Duster, sahip olduğu Manuel, Dizel, Arazi Uyumlu gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Dizel yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Dacia Duster, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Dacia Duster kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Dacia kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Dacia Duster aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Dacia Duster, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Dacia Duster modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Dacia Duster, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Dacia Duster modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 7,
    "slug": "vw-polo-otomatik-benzin",
    "brand": "Volkswagen",
    "modelName": "Polo",
    "model": "VW Polo",
    "class": "Ekonomik Sınıf",
    "image": "/images/kiralik_vw_polo.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Benzin",
      "Premium"
    ],
    "year": 2023,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.0 TSI",
      "horsepower": "95 HP",
      "torque": "175 Nm",
      "topSpeed": "187 km/s",
      "acceleration": "10.8 sn"
    },
    "trunkCapacity": "351 Litre",
    "advantages": [
      "Alman kalitesi ve tokluğu",
      "Mükemmel DSG şanzıman",
      "Üst düzey kabin yalıtımı",
      "Prestijli kompakt tasarım"
    ],
    "targetAudience": [
      "Kaliteden ödün vermeyenler",
      "Küçük ama lüks araç arayanlar",
      "Şehir içi konforu isteyenler",
      "Pratik kullanım arayanlar"
    ],
    "faqs": [
      {
        "question": "VW Polo'nun bagajı aile için yeterli mi?",
        "answer": "351 litrelik bagajı 2-3 kişilik çekirdek aileler için veya kısa süreli tatiller için yeterlidir."
      },
      {
        "question": "DSG şanzıman konforlu mu?",
        "answer": "Dünyanın en iyi şanzımanlarından biri olan DSG, vites geçişlerini hissettirmez ve sarsıntısız bir sürüş sağlar."
      }
    ],
    "review": {
      "ratingValue": 4.9,
      "reviewCount": 77
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı VW Polo modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan VW Polo ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Volkswagen mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için VW Polo, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. VW Polo, 1.0 TSI hacmindeki modern motoru sayesinde 95 HP güç ve 175 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında VW Polo ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, VW Polo aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. VW Polo modelinin 351 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan VW Polo, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir VW Polo kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında VW Polo, sahip olduğu Otomatik, Benzin, Premium gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Benzin yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. VW Polo, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. VW Polo kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Volkswagen kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. VW Polo aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de VW Polo, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. VW Polo modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda VW Polo, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve VW Polo modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 8,
    "slug": "toyota-corolla-otomatik-hibrit",
    "brand": "Toyota",
    "modelName": "Corolla",
    "model": "Toyota Corolla",
    "class": "Orta Sınıf",
    "image": "/images/kiralik_toyota_corolla.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Hibrit",
      "Ekonomik"
    ],
    "year": 2024,
    "fuelType": "Hibrit",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.8 Hybrid",
      "horsepower": "122 HP",
      "torque": "142 Nm",
      "topSpeed": "180 km/s",
      "acceleration": "11.0 sn"
    },
    "trunkCapacity": "471 Litre",
    "advantages": [
      "Sessiz elektrik motoruyla sürüş",
      "Trafikte sıfır yakıt tüketimi imkanı",
      "Toyota güvenlik donanımları",
      "Konforlu bağımsız süspansiyon"
    ],
    "targetAudience": [
      "Çevreciler",
      "Yakıt ekonomisi arayanlar",
      "Yeni teknoloji deneyimlemek isteyenler",
      "Sessiz sürüş sevenler"
    ],
    "faqs": [
      {
        "question": "Hibrit aracı şarj etmem gerekiyor mu?",
        "answer": "Hayır, Toyota Corolla kendi kendini şarj eden hibrit teknolojisine sahiptir. Fişe takmanıza gerek yoktur, frenleme esnasında bataryasını kendi doldurur."
      },
      {
        "question": "Benzin almak zorunda mıyım?",
        "answer": "Evet, araç benzin ve elektrik motorunu hibrit olarak kullanır. İstasyonlardan standart benzin alarak yolunuza devam edersiniz."
      }
    ],
    "review": {
      "ratingValue": 4.8,
      "reviewCount": 52
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Toyota Corolla modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Toyota Corolla ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Toyota mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Toyota Corolla, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Toyota Corolla, 1.8 Hybrid hacmindeki modern motoru sayesinde 122 HP güç ve 142 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Toyota Corolla ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Toyota Corolla aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Toyota Corolla modelinin 471 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Toyota Corolla, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Toyota Corolla kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Toyota Corolla, sahip olduğu Otomatik, Hibrit, Ekonomik gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Hibrit yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Toyota Corolla, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Toyota Corolla kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Toyota kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Toyota Corolla aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Toyota Corolla, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Toyota Corolla modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Toyota Corolla, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Toyota Corolla modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 9,
    "slug": "vw-tiguan-otomatik-benzin",
    "brand": "Volkswagen",
    "modelName": "Tiguan",
    "model": "VW Tiguan",
    "class": "SUV",
    "image": "/images/kiralik_vw_tiguan.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Benzin",
      "Lüks İç Mekan"
    ],
    "year": 2023,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.5 TSI",
      "horsepower": "150 HP",
      "torque": "250 Nm",
      "topSpeed": "202 km/s",
      "acceleration": "9.2 sn"
    },
    "trunkCapacity": "615 Litre",
    "advantages": [
      "Lüks donanım seviyesi",
      "Güçlü performans (150 HP)",
      "Devasa ve değişken bagaj",
      "Üst düzey prestij"
    ],
    "targetAudience": [
      "Lüks SUV deneyimi isteyenler",
      "Makam aracı ihtiyacı olanlar",
      "Uzun tatile çıkan geniş aileler",
      "Güç ve konforu bir arada arayanlar"
    ],
    "faqs": [
      {
        "question": "Tiguan'ın iç hacmi geniş mi?",
        "answer": "Kendi sınıfının en geniş arka diz mesafelerinden birine ve 615 litrelik çok büyük bir bagaja sahiptir."
      },
      {
        "question": "Performansı nasıl?",
        "answer": "1.5 TSI 150 beygirlik motoruyla cüssesine rağmen çok atak ve güçlü bir performans sergiler."
      }
    ],
    "review": {
      "ratingValue": 4.9,
      "reviewCount": 63
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı VW Tiguan modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan VW Tiguan ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Volkswagen mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için VW Tiguan, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. VW Tiguan, 1.5 TSI hacmindeki modern motoru sayesinde 150 HP güç ve 250 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında VW Tiguan ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, VW Tiguan aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. VW Tiguan modelinin 615 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan VW Tiguan, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir VW Tiguan kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında VW Tiguan, sahip olduğu Otomatik, Benzin, Lüks İç Mekan gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Benzin yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. VW Tiguan, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. VW Tiguan kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Volkswagen kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. VW Tiguan aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de VW Tiguan, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. VW Tiguan modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda VW Tiguan, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve VW Tiguan modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 10,
    "slug": "mercedes-c200-amg-otomatik-benzin",
    "brand": "Mercedes-Benz",
    "modelName": "C200",
    "model": "Mercedes C200 AMG",
    "class": "Lüks Segment",
    "image": "/images/kiralik_mercedes_c200.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Benzin",
      "Premium İç Mekan"
    ],
    "year": 2023,
    "fuelType": "Benzin",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "1.5 Turbo EQ Boost",
      "horsepower": "204 HP",
      "torque": "300 Nm",
      "topSpeed": "246 km/s",
      "acceleration": "7.1 sn"
    },
    "trunkCapacity": "455 Litre",
    "advantages": [
      "Safkan Mercedes prestiji",
      "AMG sportif dış tasarım",
      "Yüksek performans ve ivmelenme",
      "Ambiyans aydınlatmalı lüks kabin"
    ],
    "targetAudience": [
      "VIP müşteriler",
      "Düğün arabası kiralayanlar",
      "İş adamları ve protokol",
      "Kendini şımartmak isteyenler"
    ],
    "faqs": [
      {
        "question": "Mercedes C200'ü düğün arabası olarak kiralayabilir miyim?",
        "answer": "Elbette. Mercedes C200 AMG, düğün, nişan ve özel günleriniz için en çok tercih edilen lüks aracımızdır."
      },
      {
        "question": "Araçta hız limiti veya kısıtlama var mı?",
        "answer": "Hayır, ancak Karayolları Trafik Kanunu'nda belirtilen hız limitlerine uymanız tamamen sizin sorumluluğunuzdadır."
      }
    ],
    "review": {
      "ratingValue": 4.9,
      "reviewCount": 58
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Mercedes C200 AMG modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Mercedes C200 AMG ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Mercedes-Benz mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Mercedes C200 AMG, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Mercedes C200 AMG, 1.5 Turbo EQ Boost hacmindeki modern motoru sayesinde 204 HP güç ve 300 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Mercedes C200 AMG ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Mercedes C200 AMG aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Mercedes C200 AMG modelinin 455 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Mercedes C200 AMG, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Mercedes C200 AMG kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Mercedes C200 AMG, sahip olduğu Otomatik, Benzin, Premium İç Mekan gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Benzin yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Mercedes C200 AMG, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Mercedes C200 AMG kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Mercedes-Benz kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Mercedes C200 AMG aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Mercedes C200 AMG, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Mercedes C200 AMG modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Mercedes C200 AMG, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Mercedes C200 AMG modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  },
  {
    "id": 11,
    "slug": "mercedes-vito-otomatik-dizel",
    "brand": "Mercedes-Benz",
    "modelName": "Vito",
    "model": "Mercedes Vito VIP",
    "class": "VIP Minivan / 9 Koltuk",
    "image": "/images/kiralik_mercedes_vito.png",
    "price": "Fiyat Sorunuz",
    "priceNumber": 0,
    "features": [
      "Otomatik",
      "Dizel",
      "8+1 Yolcu"
    ],
    "year": 2023,
    "fuelType": "Dizel",
    "transmission": "Otomatik",
    "technicalSpecs": {
      "engineCapacity": "2.0 CDI",
      "horsepower": "136 HP",
      "torque": "330 Nm",
      "topSpeed": "183 km/s",
      "acceleration": "12.5 sn"
    },
    "trunkCapacity": "1030 Litre",
    "advantages": [
      "8+1 yolcu kapasitesi",
      "Birinci sınıf deri koltuklar",
      "Bağımsız arka VIP klima",
      "Bavullar için dev bagaj hacmi"
    ],
    "targetAudience": [
      "Kalabalık arkadaş grupları",
      "Geniş aileler",
      "Havalimanı transferi isteyenler",
      "Fuar ve organizasyon ekipleri"
    ],
    "faqs": [
      {
        "question": "Vito'yu B sınıfı ehliyetle kullanabilir miyim?",
        "answer": "Evet, 8+1 koltuk kapasitesi (otomobil/minibüs ruhsatı) olduğu için B sınıfı ehliyetle yasal olarak kullanabilirsiniz."
      },
      {
        "question": "Aracın içinde buzdolabı veya TV var mı?",
        "answer": "Donanım paketine göre değişiklik gösterebilmektedir, rezervasyon esnasında özel taleplerinizi iletebilirsiniz."
      }
    ],
    "review": {
      "ratingValue": 4.8,
      "reviewCount": 49
    },
    "description": [
      "Denizli rent a car sektörünün öncü firması Emir Rent A Car olarak, sizlere yepyeni ve kusursuz bakımlı Mercedes Vito VIP modelimizi sunmaktan gurur duyuyoruz. Denizli araç kiralama ihtiyaçlarınızda her zaman en üstün hizmet kalitesini hedefliyor, filomuzun en gözde araçlarından biri olan Mercedes Vito VIP ile seyahatlerinizi unutulmaz kılıyoruz. İster şehre iş amaçlı kısa bir toplantı için gelmiş olun, ister ailenizle Pamukkale'nin eşsiz travertenlerini keşfetmek üzere uzun bir tatil planlamış olun, Mercedes-Benz mühendisliğinin kalitesini yansıtan bu harika araç tüm beklentilerinizi fazlasıyla karşılayacaktır. Araç kiralama sürecinde güven, konfor ve şeffaf fiyatlandırma arayan müşterilerimiz için Mercedes Vito VIP, mükemmel bir performans ve yakıt ekonomisi dengesi sunmaktadır.",
      "Günümüzde araç kiralama sadece bir noktadan diğerine gitmek değil, aynı zamanda o yolculuktan keyif almak ve güvende hissetmek anlamına gelmektedir. Mercedes Vito VIP, 2.0 CDI hacmindeki modern motoru sayesinde 136 HP güç ve 330 Nm tork üreterek, otoyollarda ihtiyacınız olan gücü ayağınızın altına serer. Otomatik şanzımanı, şehir içi yoğun trafik koşullarında bile yorulmadan sürüş yapmanızı sağlarken, vites geçişlerindeki pürüzsüzlük sayesinde yolcularınıza sarsıntısız bir deneyim yaşatır. Özellikle Denizli - İzmir veya Denizli - Antalya gibi uzun soluklu Ege ve Akdeniz rotalarında Mercedes Vito VIP ile yapacağınız yolculuklar, aracın üstün yalıtımı ve aerodinamik gövdesi sayesinde son derece sessiz ve huzurlu geçecektir.",
      "Denizli Çardak Havalimanı araç kiralama hizmetimiz kapsamında, Mercedes Vito VIP aracınızı uçağınızdan indiğiniz anda, havalimanı terminal çıkışında doğrudan personelimizden teslim alabilirsiniz. Bavullarınızı beklerken zaman kaybetmez, önceden dezenfekte edilmiş ve içi tertemiz hazırlanmış aracınıza binerek otelinize veya toplantınıza hemen doğru yola koyulabilirsiniz. Mercedes Vito VIP modelinin 1030 Litre değerindeki geniş bagaj hacmi, yurt içi ve yurt dışından gelen misafirlerimizin büyük valizlerini, bebek arabalarını veya özel eşyalarını hiçbir zorluk çekmeden yerleştirebileceği kadar elverişlidir. İç mekanın ferahlığı, baş ve diz mesafesi, arka koltukta oturan yolcular için bile uzun yolculukları keyfe dönüştürür.",
      "Araç kiralamada en çok dikkat edilen hususlardan biri de şüphesiz güvenliktir. Emir Rent A Car filosunda bulunan Mercedes Vito VIP, en güncel aktif ve pasif güvenlik donanımlarıyla donatılmıştır. ABS, ESP, acil fren destek sistemi, çoklu hava yastıkları ve gelişmiş yol tutuş asistanları sayesinde, Denizli'nin dağlık yollarında, virajlı rotalarında veya yağışlı havalarda dahi kendinizi tam anlamıyla güvende hissedersiniz. Ayrıca, tüm filomuz %100 Yasal Rent A Car Kaskosu ile güvence altındadır. Yolda karşılaşabileceğiniz herhangi bir olumsuz durumda, 7/24 kesintisiz yol yardım hizmetimiz ve anında yedek araç tahsisi garantimiz ile tatilinizin kabusa dönüşmesini engelliyoruz. Bizi tercih ettiğinizde sadece bir Mercedes Vito VIP kiralamaz, aynı zamanda profesyonel bir ekibin her an yanınızda olduğunu bilirsiniz.",
      "Denizli oto kiralama seçenekleri arasında Mercedes Vito VIP, sahip olduğu Otomatik, Dizel, 8+1 Yolcu gibi özellikleriyle sınıfının en çok tercih edilen modellerinden biridir. Dizel yakıt türünün sunduğu ekonomi sayesinde, geziniz boyunca yakıt istasyonlarına daha az uğrar, bütçenizi gezip göreceğiniz yerlere ve sevdiklerinize harcayabilirsiniz. Özellikle günümüz ekonomik koşullarında yakıt tüketimi, araç kiralama kararlarında belirleyici bir faktördür. Mercedes Vito VIP, aerodinamik tasarımı ve verimli motor teknolojisiyle minimum yakıt sarfiyatı sağlarken, performansından da asla ödün vermez.",
      "Denizli bölgesi, Pamukkale Travertenleri, Hierapolis Antik Kenti, Laodikeia, Karahayıt Termal Kaplıcaları, teleferik ve Bağbaşı Yaylası gibi sayısız turistik ve tarihi zenginliğe ev sahipliği yapmaktadır. Bu geniş coğrafyayı toplu taşıma veya taksi ile gezmek hem zaman kaybına hem de yüksek maliyetlere yol açar. Mercedes Vito VIP kiralayarak kendi rotanızı özgürce çizebilir, istediğiniz antik kentte dilediğiniz kadar vakit geçirebilir, eşsiz doğa manzaralarının tadını çıkararak dilediğiniz yerde mola verebilirsiniz. Mercedes-Benz kalitesiyle üretilen aracımızın konforlu koltukları, ergonomik direksiyonu ve üstün multimedya sistemi, seyahatiniz boyunca müzik dinleme, navigasyon kullanımı ve iletişim ihtiyaçlarınızı en modern şekilde karşılar.",
      "Emir Rent A Car olarak müşteri memnuniyetini en üst düzeyde tutmak için araçlarımızın periyodik bakımlarını aksatmadan, yalnızca yetkili ve uzman servislerde gerçekleştiriyoruz. Mercedes Vito VIP aracımız, size teslim edilmeden önce detaylı bir mekanik kontrolden geçer. Lastik basınçlarından motor yağına, fren balatalarından silecek sularına kadar her detay titizlikle incelenir. Salgın hastalıklar ve hijyen hassasiyetleri göz önünde bulundurularak, aracın içi profesyonel antibakteriyel solüsyonlarla temizlenir, direksiyon, vites topuzu, kapı kolları gibi sık temas edilen bölgeler özel olarak dezenfekte edilir. İçinize sinerek, ailenizle birlikte güvenle seyahat edebileceğiniz hijyenik bir ortam sunuyoruz.",
      "Kurumsal firmalar ve şirket yöneticileri için de Mercedes Vito VIP, hem prestijli görünümü hem de operasyonel kiralama avantajlarıyla öne çıkmaktadır. Uzun dönem kiralama veya aylık kiralama taleplerinizde, şirket bütçenize en uygun, esnek ödeme planları ve avantajlı fiyatlar sunuyoruz. Araç bakım, vergi, sigorta, kasko, lastik değişimi gibi tüm operasyonel yükleri omuzlarınızdan alıyor, şirketinizin sadece kendi işine odaklanmasını sağlıyoruz. Mercedes Vito VIP modelimiz, müşterilerinizi veya iş ortaklarınızı karşılarken markanızın değerini yukarı taşıyacak, yollardaki prestijli temsilciniz olacaktır.",
      "Özetle; Denizli merkez, Pamukkale, Merkezefendi veya Çardak Havalimanı çıkışlı tüm araç kiralama planlarınızda Mercedes Vito VIP, modern teknolojisi, kusursuz sürüş dinamiği, üstün güvenliği ve ekonomik yapısıyla beklentilerinizin çok ötesinde bir deneyim vadetmektedir. Erken rezervasyon fırsatlarımızdan yararlanmak, güncel fiyatlarımızı öğrenmek ve Mercedes Vito VIP modelini adınıza ayırtmak için web sitemiz üzerinden hemen rezervasyon yapabilir veya WhatsApp destek hattımızdan bize 7 gün 24 saat anında ulaşabilirsiniz. Emir Rent A Car ayrıcalığıyla yola çıkın, farkı hissedin!"
    ]
  }
];
