// NIST CSF 2.0 — 6 Fonksiyon
// Her fonksiyon: id, slug, numara, başlık (TR/EN), özet, ev metaforu, kategoriler, senaryo bağlantısı

const FUNCTIONS = [
  {
    id: "GV",
    number: "01",
    slug: "govern",
    titleTR: "Yönet",
    titleEN: "Govern",
    oneLiner: "Kim karar verir, neye göre, hangi sorumlulukla?",
    summary:
      "Siber güvenliğin bir IT meselesi değil, bir yönetim meselesi olduğunu söyleyen fonksiyon. CSF 2.0 ile çerçevenin merkezine eklendi: stratejiyi, rolleri, politikayı ve risk iştahını burada tanımlarsın.",
    metaphor: {
      title: "Ev yönetimi",
      body:
        "Evin kurallarını kim koyar? Anahtarlar kimde olacak, alarm şirketiyle sözleşmeyi kim imzalar, sigorta poliçesini kim yeniler? 'Yönet', evin müdürünün masasıdır. Hiçbir kapı kilidi, evde kimin sözünün geçtiği belli değilse işe yaramaz.",
    },
    categories: [
      { code: "GV.OC", name: "Organizational Context", tr: "Kurumsal bağlam — neyi, kim için, hangi yasal zeminde koruyoruz?" },
      { code: "GV.RM", name: "Risk Management Strategy", tr: "Risk yönetimi stratejisi — ne kadar riske 'evet' diyoruz?" },
      { code: "GV.RR", name: "Roles, Responsibilities & Authorities", tr: "Roller ve yetkiler — kim neyi onaylar, kim sorumludur?" },
      { code: "GV.PO", name: "Policy", tr: "Politika — yazılı kurallar, herkesin uyacağı standart." },
      { code: "GV.OV", name: "Oversight", tr: "Gözetim — yönetim kurulu programı düzenli olarak inceler." },
      { code: "GV.SC", name: "Cybersecurity Supply Chain Risk Management", tr: "Tedarik zinciri riski — tedarikçilerin de güvenli olması." },
    ],
    realWorldQ: "Bir CFO, fidye yazılım için 'ne kadar para ödemeye yetkiliyim?' diye sormalı mı? Cevabı önceden vermek 'Govern'in işidir.",
  },
  {
    id: "ID",
    number: "02",
    slug: "identify",
    titleTR: "Tanımla",
    titleEN: "Identify",
    oneLiner: "Neyi koruyoruz? Nereye saklıyoruz? Neyi kaybedersek batarız?",
    summary:
      "Önce envanter. Hangi cihazlar, hangi yazılımlar, hangi veriler, hangi insanlar? Hangileri kritik? Hangi tehditler bizi vurabilir? Görmediğin şeyi koruyamazsın.",
    metaphor: {
      title: "Evin envanteri",
      body:
        "Evde ne var? Kasada ne duruyor, hangi tablo gerçekten değerli, hangi pencere sokağa bakıyor? 'Tanımla', sigorta eksperinin evi gezip her odayı not alması gibidir. Kıymetlileri bilmeden hangi kapıya alarm takacağına karar veremezsin.",
    },
    categories: [
      { code: "ID.AM", name: "Asset Management", tr: "Varlık yönetimi — donanım, yazılım, veri, servis envanteri." },
      { code: "ID.RA", name: "Risk Assessment", tr: "Risk değerlendirme — tehditler, zaafiyetler, etkiler." },
      { code: "ID.IM", name: "Improvement", tr: "İyileştirme — geçmiş olaylardan ders çıkarmak." },
    ],
    realWorldQ: "Şirketinde kaç tane sunucu var? 'Yaklaşık 80' cevabı bir 'Identify' eksikliğidir. Tam sayı bilmek lazım.",
  },
  {
    id: "PR",
    number: "03",
    slug: "protect",
    titleTR: "Koru",
    titleEN: "Protect",
    oneLiner: "Kötü şeyin başına gelmesini zorlaştır.",
    summary:
      "Erişim kontrolü, şifreleme, eğitim, yedekleme, yama yönetimi — kötü adamı içeri sokmamak ve girse bile zarar veremesin diye katmanlı savunma kurmak.",
    metaphor: {
      title: "Kapı, kilit, kasa, alarm",
      body:
        "Çelik kapı, anahtarlık (kimin hangi odaya girebileceği), camlara demir parmaklık, değerlileri kasada tutmak, çocuklara 'kapıyı yabancıya açma' demek. 'Koru', evin fiziksel ve sosyal güvenlik tedbirlerinin tamamı.",
    },
    categories: [
      { code: "PR.AA", name: "Identity Management, Authentication & Access Control", tr: "Kimlik yönetimi, çok faktörlü kimlik doğrulama, en az ayrıcalık prensibi." },
      { code: "PR.AT", name: "Awareness & Training", tr: "Farkındalık ve eğitim — phishing testleri, kullanıcı eğitimi." },
      { code: "PR.DS", name: "Data Security", tr: "Veri güvenliği — şifreleme (at-rest, in-transit), DLP." },
      { code: "PR.PS", name: "Platform Security", tr: "Platform güvenliği — yamalar, sıkılaştırma, secure config." },
      { code: "PR.IR", name: "Technology Infrastructure Resilience", tr: "Altyapı dayanıklılığı — yedekleme, ağ segmentasyonu." },
    ],
    realWorldQ: "Tüm çalışanlar e-postalarına MFA ile mi giriyor? Hayır'sa, 'Protect' eksik.",
  },
  {
    id: "DE",
    number: "04",
    slug: "detect",
    titleTR: "Tespit Et",
    titleEN: "Detect",
    oneLiner: "Bir şey ters gittiğinde, fark et.",
    summary:
      "Önlem her zaman yeterli değildir. Loglar, SIEM, EDR, anomali tespiti — saldırgan içeri girdiğinde alarmın çalması için. Saldırıların ortalama tespit süresi hâlâ aylarla ölçülüyor.",
    metaphor: {
      title: "Hareket sensörleri & kameralar",
      body:
        "Hırsız kapıyı kırdığında alarmın çalması, kamera kaydının başlaması, telefonuna bildirim gelmesi. 'Tespit', evdeki gözler ve kulaklardır. Olmazsa hırsız üç hafta evde yaşar, sen tatilden döndüğünde fark edersin.",
    },
    categories: [
      { code: "DE.CM", name: "Continuous Monitoring", tr: "Sürekli izleme — ağ trafiği, kullanıcı davranışı, sistem logları." },
      { code: "DE.AE", name: "Adverse Event Analysis", tr: "Olumsuz olay analizi — anomaliyi gerçek tehditten ayırmak." },
    ],
    realWorldQ: "Geçen hafta bir admin hesabı saat 03:00'te yurtdışından oturum açtıysa biri uyarı aldı mı? Almadıysa, 'Detect' uyuyor.",
  },
  {
    id: "RS",
    number: "05",
    slug: "respond",
    titleTR: "Müdahale Et",
    titleEN: "Respond",
    oneLiner: "Olay olduğunda paniğe değil, plana göre hareket et.",
    summary:
      "Olay müdahale planı, iletişim, kanıt toplama, hasarı sınırlama. Saldırı sırasında 'şimdi ne yapacağız?' diye düşünmek için çok geç — plan önceden hazır olmalı.",
    metaphor: {
      title: "Hırsız içerideyken",
      body:
        "Alarm çaldı: 110'u kim arar, çocukları nereden çıkarırız, hangi odanın kapısını kapatırız? 'Müdahale', evdeki herkesin önceden tatbikat yaptığı acil durum planıdır. İlk on dakikada doğru şey yapmak, hasarın yarısını önler.",
    },
    categories: [
      { code: "RS.MA", name: "Incident Management", tr: "Olay yönetimi — sınıflandırma, eskalasyon, koordinasyon." },
      { code: "RS.AN", name: "Incident Analysis", tr: "Olay analizi — ne oldu, nasıl oldu, kapsamı ne?" },
      { code: "RS.CO", name: "Incident Response Reporting & Communication", tr: "Raporlama ve iletişim — yetkililere, müşterilere, basına." },
      { code: "RS.MI", name: "Incident Mitigation", tr: "Hafifletme — saldırıyı durdurmak, yayılmayı engellemek." },
    ],
    realWorldQ: "Pazar sabahı 06:00'da fidye yazılımı patladı. İlk aranacak üç kişinin numarası kimde? Cevap 'bilmiyorum'sa, 'Respond' yazılı değil.",
  },
  {
    id: "RC",
    number: "06",
    slug: "recover",
    titleTR: "Toparlan",
    titleEN: "Recover",
    oneLiner: "Hasardan sonra ayağa kalk, eskisinden daha güçlü ol.",
    summary:
      "Yedeklerden geri dönme, sistemleri normale alma, paydaşlarla iletişim, olaydan ders çıkarma. Çoğu şirketin asıl battığı yer iş kesintisinin uzun sürmesi.",
    metaphor: {
      title: "Hırsız gittikten sonra",
      body:
        "Kırılan camı taktırmak, sigortayla konuşmak, çocuğun yaşadığı travmayı konuşmak, bu sefer alarm sistemini güçlendirmek. 'Toparlan', evi yeniden yaşanabilir hale getirmek ve bir daha aynı şeyin olmaması için ders çıkarmak.",
    },
    categories: [
      { code: "RC.RP", name: "Incident Recovery Plan Execution", tr: "Kurtarma planının yürütülmesi — yedekten geri dönme, sistem onarımı." },
      { code: "RC.CO", name: "Incident Recovery Communication", tr: "Kurtarma iletişimi — çalışanlara, müşterilere durumu bildirmek." },
    ],
    realWorldQ: "Yedeklerinden son ne zaman gerçekten geri dönüş testi yaptın? 'Hiç' cevabı, 'Recover'ın kâğıt üstünde olduğunu söyler.",
  },
];

window.NIST_FUNCTIONS = FUNCTIONS;
