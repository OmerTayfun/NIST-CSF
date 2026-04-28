// Gerçek dünya senaryosu — KOBİ bir muhasebe firmasında ransomware
// Her adım hangi NIST fonksiyonuna düştüğünü gösterir.

const SCENARIO = {
  title: "Bir Pazartesi sabahı",
  subtitle: "30 kişilik bir muhasebe firmasında fidye yazılım saldırısı",
  intro:
    "Aşağıdaki anlatı kurgudur ama her adım gerçek olaylardan damıtılmıştır. Yan tarafta her hareketin hangi NIST fonksiyonuna düştüğünü göreceksin — framework böyle 'çalışır'.",
  steps: [
    {
      time: "Cuma — 17:42",
      function: "GV",
      title: "Politika hazırdı (ya da değildi)",
      body:
        "Firma sahibi geçen yıl bir politika imzaladı: 'Tüm çalışanlar şüpheli e-postaları IT'ye iletecek.' Ama kim 'IT'? Tek kişilik bir dış destek. Yetki ve eskalasyon yazılı değil.",
    },
    {
      time: "Cumartesi — 09:15",
      function: "ID",
      title: "Bilinmeyen bir varlık",
      body:
        "Stajyerin kullandığı eski bir laptop var. Envanterde değil, MDM'e kayıtlı değil, son işletim sistemi yaması altı ay önce. Kimse onu 'kritik varlık' saymıyor — ama içinde firmanın e-postasına erişim var.",
    },
    {
      time: "Pazar — 14:08",
      function: "PR",
      title: "Phishing açılır",
      body:
        "Stajyer 'fatura.pdf.exe' uzantılı bir eki açar. MFA olsaydı, kimlik bilgileri çalınsa bile saldırgan giriş yapamazdı. Yoktu. Saldırgan tek faktörlü bir parolayla içeri girer.",
    },
    {
      time: "Pazar — 14:11–22:30",
      function: "DE",
      title: "Sessiz yayılma",
      body:
        "Saldırgan 8 saat boyunca ağ içinde dolaşır, paylaşılan dosyaları haritalar, yedek sunucusunun yerini bulur. SIEM yok, EDR yok. Kimse fark etmez. Tatildeki herkesin telefonu sessizdir.",
    },
    {
      time: "Pazartesi — 06:02",
      function: "DE",
      title: "Şifreleme başlar",
      body:
        "Saldırgan tüm dosyaları şifreler ve yedekleri siler. İlk fark eden, 07:30'da gelip e-postasını açamayan asistan olur. Saldırı çoktan bitmiştir.",
    },
    {
      time: "Pazartesi — 07:45",
      function: "RS",
      title: "Panik mi, plan mı?",
      body:
        "Firma sahibi telefon eder: önce dış destek IT'ye, sonra avukatına, sonra müşterilere mi söylesin diye düşünür. Yazılı bir olay müdahale planı yok. Herkes farklı şey yapar — birisi WhatsApp grubuna ekran görüntüsü gönderir, kanıtlar kirlenir.",
    },
    {
      time: "Pazartesi — 11:00",
      function: "RS",
      title: "İletişim kazası",
      body:
        "Bir çalışan paniğe kapılıp Twitter'da 'firmamız hacklendi' diye yazar. Müşteriler aramaya başlar. Önceden hazırlanmış bir kriz iletişim metni yoktur.",
    },
    {
      time: "Salı — Cuma",
      function: "RC",
      title: "Yedeklerin testi yapılmamıştı",
      body:
        "Yedekler vardı ama hiç geri dönüş testi yapılmamıştı. Yedeklerin yarısı bozuk çıkar. Bulut yedekten dönüş 4 gün sürer. Operasyon bu süre boyunca durur.",
    },
    {
      time: "İki hafta sonra",
      function: "GV",
      title: "Ders çıkarmak",
      body:
        "Firma yönetim kurulu (sahip + iki ortak) toplanır. Bütçe çıkarılır: MFA + EDR + yedek testi + olay müdahale planı + yıllık tatbikat. Bu sefer politika değil, taahhüt yazılır. 'Govern' geri başa döner — döngü budur.",
    },
  ],
};

window.NIST_SCENARIO = SCENARIO;
