export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const knowledgeArticles: Article[] = [
  {
    slug: "arac-kiralarken-nelere-dikkat-edilmeli",
    title: "Araç Kiralarken Nelere Dikkat Edilmeli?",
    excerpt: "Denizli'de veya farklı bir şehirde ilk defa araç kiralıyorsanız, sözleşme şartlarını, kasko durumunu ve aracın teslim anındaki kondisyonunu (çizik, yakıt vb.) detaylıca incelemeniz çok önemlidir.",
    content: [
        "Araç kiralama işlemi, özellikle seyahate çıkarken hayat kurtarıcı bir çözüm sunar. Ancak işlemi sorunsuz tamamlamak için bazı kritik noktalara dikkat edilmesi gereklidir.",
        "Öncelikle, aracın kasko poliçesini inceleyin. Şahsi kaskolar kiralık araçlarda geçerli değildir; bu yüzden Rent a Car kaskosu olan kurumsal şirketleri tercih edin. Emir Rent A Car'da tüm araçlarımız tam kapsamlı Rent a Car kaskosuna sahiptir.",
        "Aracı teslim almadan önce görevliyle birlikte aracın etrafını gezin. Var olan çizikleri veya küçük vurukları sözleşmeye mutlaka işletin. Mümkünse akıllı telefonunuzla dış ve iç kondisyonun kısa bir videosunu çekin.",
        "Yakıt politikasını teyit edin. 'Dolu al, dolu ver' kuralı en yaygın ve en adil olanıdır. Aracı teslim ettiğiniz esnada mağduriyet yaşamamak için aldığınız yakıt seviyesinde bırakmaya özen gösterin."
    ]
  },
  {
    slug: "rent-a-car-kaskosu-ve-standart-kasko-farki",
    title: "Rent a Car Kaskosu ve Standart Kasko Farkı",
    excerpt: "Bireysel araç kaskoları ile kiralık araç (Rent A Car) kaskoları arasında büyük farklar vardır. Emir Rent A Car filosundaki tüm araçlar yasal Rent a Car kaskosuna sahip olup, güvencenizi maksimize eder.",
    content: [
      "Araç kiralama sektöründe en çok kafa karıştıran konulardan biri de kasko tipleridir. Birçok kişi standart kaskonun kiralık araçlarda da geçerli olduğunu düşünür ancak bu ciddi bir yanılgıdır.",
      "Standart bireysel kasko poliçeleri, aracın ticari amaçla kiraya verildiğinin tespit edilmesi durumunda (örneğin bir kaza anında) doğacak hiçbir hasarı karşılamaz. Sigorta şirketleri kiralama faaliyetini 'mesleki risk' sayarak tazminat ödemeyi reddeder.",
      "Yasal Rent a Car Kaskosu ise özel olarak oto kiralama firmalarına verilen, yüksek teminatlı ve yolcu güvenliğini de içine alan kurumsal bir poliçedir. Bu poliçe, aracın kiralanmış olduğunu yasal olarak kabul eder ve her türlü kazayı, çalınmayı teminat altına alır.",
      "Emir Rent A Car olarak fiyatlarımıza hiçbir gizli maliyet eklemiyor ve filomuzun %100'ünü yasal Rent a Car kaskosu ile güvence altına alıyoruz. Bu sayede yola tereddütsüz ve güvenle çıkabilirsiniz."
    ]
  },
  {
    slug: "havalimani-arac-teslimat-prosedurleri",
    title: "Havalimanı Araç Teslimat Prosedürleri",
    excerpt: "Uçağınızdan indiğiniz anda aracınızın hazır olması için uçuş kodunuzu (PNR) rezervasyon sırasında yetkiliye bildirmeniz yeterlidir. Çardak Havalimanı teslimatlarında ekstra beklemeden yolculuğunuza başlayabilirsiniz.",
    content: [
      "İş seyahati veya tatil için Denizli Çardak Havalimanı'na iniş yaptığınızda zamanınızın ne kadar değerli olduğunu biliyoruz. Havalimanı araç kiralama süreçlerimiz sizi bekletmemek üzerine tasarlanmıştır.",
      "Rezervasyon aşamasında Müşteri Hizmetlerimize Uçuş Numaranızı (PNR Kodu) bildirmeniz bizim için yeterlidir. Uçuş bilgi ekranlarını canlı olarak anlık takip ediyor, uçağınız rötar yapsa bile operasyon ekibimizin çıkışta sizi beklemesini sağlıyoruz.",
      "Havalimanı çıkış kapısında (Gelen Yolcu Terminali) karşılama ekibimiz isminizin yazılı olduğu bir tabela veya şirket üniformasıyla sizi karşılar. Araca yönlendirildiğinizde evrak işlemleriniz zaten %90 oranında hazırlanmış olur.",
      "İki dakikalık bir imza sürecinin ardından anahtar teslim edilir ve valizlerinizle birlikte doğrudan aracınıza binerek otelinize veya iş toplantınıza hareket edebilirsiniz. Dönüşte ise aracı direkt havalimanı otoparkında yine aynı ekibimize teslim edersiniz."
    ]
  },
  {
    slug: "uzun-donem-aylik-arac-kiralamanin-avantajlari",
    title: "Uzun Dönem (Aylık) Araç Kiralamanın Avantajları",
    excerpt: "Şirketler veya bireysel uzun dönem ihtiyaçlar için aylık araç kiralama, periyodik bakım masraflarından, MTV ve trafik sigortası gibi giderlerden tamamen kurtulmanızı sağlar.",
    content: [
      "Otomobil sahibi olmak, özellikle ticaretle uğraşanlar veya yoğun seyahat edenler için beraberinde görünmez maliyetler ve zaman kayıpları getirir. Aylık ve uzun dönem kiralama ise son yılların en rasyonel ulaşım çözümüdür.",
      "İlk ve en büyük avantajı Muhasebesel Gider Göstermedir. Kiralama faturanızın tamamını şirket gideri olarak defterinize işleyebilir, KDV'sini indirebilir ve böylece vergi avantajı sağlarsınız. Araç satın almaya ödeyeceğiniz toplu nakdi ise işletmenizi büyütmek için ana sermayenizde tutarsınız.",
      "İkinci dev avantaj zaman tasarrufudur. Trafik Sigortası, Kasko, Motorlu Taşıtlar Vergisi (MTV), periyodik yağ bakımı, lastik değişimi ve muayene gibi tüm yorucu evrak-takip işlemleri tamamıyla Emir Rent A Car operasyon merkezi tarafından yönetilir.",
      "Ayrıca kaza veya arıza durumunda, aracınız yetkili serviste kalırken size hemen eşdeğer bir yedek araç tahsis edilir. İş akışınız bir saat bile kesintiye uğramaz. Denizli'de uzun dönem oto kiralama ihtiyaçlarınız için size en uygun fiyat teklifini sunmaya hazırız."
    ]
  }
];
