// Ana React uygulaması — NIST CSF anlatım sayfası
const { useState, useEffect, useRef, useMemo } = React;

const FUNCTIONS = window.NIST_FUNCTIONS;
const SCENARIO = window.NIST_SCENARIO;

// === Tema seçenekleri (Tweaks ile değişebilir) ===
const THEMES = {
  paper: {
    name: "Kâğıt",
    bg: "#f4efe6",
    bgAlt: "#ebe4d6",
    ink: "#1a1612",
    inkSoft: "#5b5147",
    rule: "#d8cfbe",
    accent: "#b8410c",
    accentSoft: "#e8d5c4"
  },
  ink: {
    name: "Mürekkep",
    bg: "#13151a",
    bgAlt: "#1c1f26",
    ink: "#f0ece4",
    inkSoft: "#9a958a",
    rule: "#2b2f38",
    accent: "#e89866",
    accentSoft: "#3a2a20"
  },
  vault: {
    name: "Kasa",
    bg: "#eef0ed",
    bgAlt: "#e1e5dd",
    ink: "#0f1814",
    inkSoft: "#4a564f",
    rule: "#c4ccc2",
    accent: "#0f5132",
    accentSoft: "#cfe0d3"
  }
};

const FONT_PAIRS = {
  editorial: { name: "Editorial", display: '"Fraunces", Georgia, serif', body: '"Inter", system-ui, sans-serif' },
  modern: { name: "Modern", display: '"Instrument Serif", Georgia, serif', body: '"Inter", system-ui, sans-serif' },
  technical: { name: "Teknik", display: '"JetBrains Mono", monospace', body: '"Inter", system-ui, sans-serif' }
};

// === Tema renklerini CSS değişkenlerine yaz ===
function applyTheme(theme, fonts) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([k, v]) => {
    if (k === "name") return;
    root.style.setProperty(`--${k}`, v);
  });
  root.style.setProperty("--font-display", fonts.display);
  root.style.setProperty("--font-body", fonts.body);
}

// === Ev metaforu yan kutusu ===
function MetaphorBox({ metaphor, compact }) {
  return (
    <aside className={`metaphor ${compact ? "metaphor--compact" : ""}`} style={{ backgroundColor: "rgb(235, 228, 214)" }}>
      <div className="metaphor__label">
        <span className="metaphor__icon">⌂</span>
        <span>EV METAFORU · house metaphor</span>
      </div>
      <div className="metaphor__title">{metaphor.title}</div>
      <p className="metaphor__body">{metaphor.body}</p>
    </aside>);

}

// === Hero / Açılış ===
function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero__eyebrow">
  Bir başlangıç rehberi &nbsp;·&nbsp; Hazırlayan:{" "}
  
    <a href="https://www.linkedin.com/in/omertayfundeveceker/"
    target="_blank"
    rel="noopener noreferrer"
    style={{display:"inline-flex", alignItems:"center", gap:"4px", color:"inherit", textDecoration:"none"}}
  >
      Ömer Tayfun DEVEÇEKER
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    
  </a>
</div>
      <h1 className="hero__title">
        NIST Siber Güvenlik
        <br />
        Çerçevesi'ni
        <br />
        <em>en baştan</em> anlamak
      </h1>
      <p className="hero__lede">
        Bu sayfa <strong>NIST Cybersecurity Framework 2.0</strong>'ı, yan yana <strong>NIST 800-53</strong> ve <strong>NIST 800-171</strong>'in nasıl konumlandığını,
        bir <em>ev güvenliği</em> metaforu üzerinden anlatır. Hiç IT geçmişin olmasa bile sonuna kadar takip edebilmen için yazıldı.
      </p>
      <div className="hero__meta" style={{ opacity: "0" }}>
        <span>
</span>
        <span className="dot">
</span>
        <span>
</span>
        <span className="dot">
</span>
        <span>6 fonksiyon · 1 senaryo · 3 doküman</span>
      </div>
      <button
        type="button"
        className="hero__scroll"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        ↓ aşağı kaydır
      </button>
    </section>);}
// === Bölüm 1: NIST Nedir ===
function WhatIsNist() {
  return (
    <section className="section" data-screen-label="Nedir">
      <div className="section__num">§ 01</div>
      <h2 className="section__title">Önce: NIST nedir, framework nedir?</h2>
      <div className="grid-2">
        <div className="prose">
          <p>
            <strong>NIST</strong> (National Institute of Standards and Technology) — Amerika'nın standartlar enstitüsü.
            Termometrenin nasıl kalibre edileceğinden yapay zekânın nasıl test edileceğine kadar her şeye standart yazar.
            Siber güvenlik alanında da rehber dokümanlar yayınlar.
          </p>
          <p>
            <strong>Framework</strong> (çerçeve) ne demek? Bir kitap kuralı değil, <em>bir düşünme şekli</em>.
            "Siber güvenlik şu adımlardan oluşur, sen bu adımların altını kendi şirketine göre doldur" der.
            Bir matematik formülü değil, bir <em>kontrol listesi mimarisidir</em>.
          </p>
          <p className="callout" style={{ backgroundColor: "rgb(235, 228, 214)" }}>
            <span>⌂</span>
            <span>
              Düşün ki bir mimar evini çizmeden önce 'her evde mutfak, banyo, yatak odası, çıkış kapısı olur' der.
              Senin evinde her biri farklı şekilde olabilir — ama bu bölümlerden biri eksikse ev <em>ev</em> değildir.
              NIST bunun siber güvenlik versiyonudur.
            </span>
          </p>
        </div>
        <div className="docs">
          <div className="docs__title">Üç doküman, üç farklı iş</div>
          <DocCard
            tag="CSF 2.0"
            title="Cybersecurity Framework 2.0"
            year="2024"
            role="Pusula"
            desc="6 fonksiyon. 'Ne yapmalısın'ın yüksek seviyeli haritası. Yöneticilerin de okuyabileceği dilde."
            primary />
          
          <DocCard
            tag="800-53"
            title="Security & Privacy Controls"
            year="Rev. 5"
            role="Detaylı katalog"
            desc="CSF'in 'ne yapmalı'sını 'nasıl yapmalı'ya çeviren katalog. 1000 kontrol, 20 aile. Teknik ekipler için asıl kaynak."
          
          <DocCard
            tag="800-171"
            title="Protecting CUI"
            year="Rev. 3"
            role="Tedarikçi standardı"
            desc="Devlet binasına iş yapan müteahhidin uyması gereken güvenlik kuralları. 800-53'ün savunma sektörüne özel, sadeleştirilmiş versiyonu. 110 kontrol, somut gereksinimler." />
          
        </div>
      </div>
    </section>);

}

function DocCard({ tag, title, year, role, desc, primary }) {
  return (
    <div className={`doccard ${primary ? "doccard--primary" : ""}`}>
      <div className="doccard__head">
        <span className="doccard__tag">{tag}</span>
        <span className="doccard__year">{year}</span>
      </div>
      <div className="doccard__role">{role}</div>
      <div className="doccard__title">{title}</div>
      <p className="doccard__desc">{desc}</p>
    </div>);

}

// === Bölüm 2: 6 Fonksiyon Genel Bakış ===
function FunctionsOverview({ active, onSelect }) {
  return (
    <section className="section" data-screen-label="Altı Fonksiyon">
      <div className="section__num">§ 02</div>
      <h2 className="section__title">
        Çerçevenin kalbi: <em>altı fonksiyon</em>
      </h2>
      <p className="section__lede">
        CSF 2.0 her şeyi <strong>altı fonksiyon</strong>a indirger. Bu altı kelime, siber güvenliğin tamamını anlatır.
        Bir karta tıkla — alt kategorileri, ev metaforunu ve bir gerçek dünya sorusunu gör.
      </p>

      <div className="hex-row">
        {FUNCTIONS.map((f, i) =>
        <FunctionCard key={f.id} fn={f} index={i} active={active === f.id} onSelect={() => onSelect(f.id)} />
        )}
      </div>

      <div className="cycle-note">
        <div className="cycle-note__line" />
        <p>
          Bu altı fonksiyon doğrusal değil, <em>döngüseldir</em>. <strong>Yönet</strong> hepsinin merkezindedir;
          diğerleri sürekli birbirini besler. Bir saldırıdan sonra <strong>Toparlan</strong>, tekrar <strong>Yönet</strong>'e
          ders olarak döner.
        </p>
      </div>
    </section>);

}

function FunctionCard({ fn, index, active, onSelect }) {
  return (
    <button className={`fcard ${active ? "fcard--active" : ""}`} onClick={onSelect} aria-label={fn.titleTR}>
      <div className="fcard__num">{fn.number}</div>
      <div className="fcard__id">{fn.id}</div>
      <div className="fcard__title-tr">{fn.titleTR}</div>
      <div className="fcard__title-en">{fn.titleEN}</div>
      <div className="fcard__one">{fn.oneLiner}</div>
      <div className="fcard__cta">
        <span>{active ? "açıldı" : "tıkla"}</span>
        <span className="fcard__arrow">{active ? "−" : "+"}</span>
      </div>
    </button>);

}

// === Aktif fonksiyonun detayı ===
function FunctionDetail({ fn, scrollRef }) {
  if (!fn) return null;
  return (
    <div className="fdetail" key={fn.id} ref={scrollRef}>
      <div className="fdetail__head">
        <div className="fdetail__num">{fn.number} · {fn.id}</div>
        <h3 className="fdetail__title">
          {fn.titleTR} <span className="fdetail__en">/ {fn.titleEN}</span>
        </h3>
        <p className="fdetail__one">{fn.oneLiner}</p>
      </div>

      <div className="fdetail__grid">
        <div className="fdetail__main">
          <p className="fdetail__summary">{fn.summary}</p>

          <div className="fdetail__cats">
            <div className="fdetail__cats-title">Alt kategoriler · subcategories</div>
            {fn.categories.map((c) =>
            <div key={c.code} className="catrow">
                <div className="catrow__code">{c.code}</div>
                <div className="catrow__body">
                  <div className="catrow__name">{c.name}</div>
                  <div className="catrow__tr">{c.tr}</div>
                </div>
              </div>
            )}
          </div>

          <div className="fdetail__rwq" style={{ backgroundColor: "rgb(235, 228, 214)" }}>
            <div className="fdetail__rwq-label">Kendine sor</div>
            <p>{fn.realWorldQ}</p>
          </div>
        </div>

        <MetaphorBox metaphor={fn.metaphor} />
      </div>
    </div>);

}

// === Bölüm 3: Senaryo ===
function ScenarioSection() {
  const [hover, setHover] = useState(null);

  return (
    <section className="section section--dark" data-screen-label="Senaryo">
      <div className="section__num">§ 03</div>
      <h2 className="section__title">
        {SCENARIO.title}
      </h2>
      <p className="section__lede">
        <strong>{SCENARIO.subtitle}.</strong> {SCENARIO.intro}
      </p>

      <ol className="scenario">
        {SCENARIO.steps.map((step, i) => {
          const fn = FUNCTIONS.find((f) => f.id === step.function);
          return (
            <li
              key={i}
              className={`scen ${hover === i ? "scen--hover" : ""}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}>
              
              <div className="scen__time">{step.time}</div>
              <div className="scen__rule" />
              <div className="scen__body">
                <div className="scen__title">{step.title}</div>
                <p>{step.body}</p>
              </div>
              <div className="scen__fn">
                <div className="scen__fn-tag">{step.function}</div>
                <div className="scen__fn-name">{fn.titleTR}</div>
              </div>
            </li>);

        })}
      </ol>

      <div className="scen-takeaway">
        <div className="scen-takeaway__num">→</div>
        <p>
          Saldırının <em>her</em> adımı, framework'teki bir fonksiyona düşüyor. Çerçeve böyle çalışır:
          her zayıflık bir kategoriye, her kategori bir fonksiyona, her fonksiyon yönetimin bir kararına bağlanır.
        </p>
      </div>
    </section>);

}

// === Bölüm 4: 800-53, 800-171 ilişkisi ===
function DocsRelationship() {
  return (
    <section className="section" data-screen-label="Üç Doküman">
      <div className="section__num">§ 04</div>
      <h2 className="section__title">
        Peki <em>800-53</em> ve <em>800-171</em>?
      </h2>
      <p className="section__lede">
        CSF "ne yapmalı"yı söyler. 800-53 ve 800-171 ise "<em>nasıl</em> yapmalı"yı söyler.
        İlişkiyi bir mimari katmanları gibi düşün.
      </p>

      <div className="layers">
        <div className="layer layer--top">
          <div className="layer__tag">CSF 2.0</div>
          <div className="layer__title">Strateji & yön</div>
          <div className="layer__desc">6 fonksiyon, ~106 kategori. Yönetim seviyesinde okunabilir. "MFA olsun" der, parametrelere girmez.</div>
          <div className="layer__example" style={{ color: "rgb(235, 228, 214)" }}>Örnek: <code style={{ color: "rgb(233, 196, 122)" }}>PR.AA-03</code> — Kimlikler doğrulanır.</div>
        </div>
        <div className="layer__connector">↓ detaya iner</div>
        <div className="layer layer--mid">
          <div className="layer__tag">800-53 Rev. 5</div>
          <div className="layer__title">Tam kontrol kataloğu</div>
          <div className="layer__desc">~1000 spesifik kontrol, 20 aile. Federal kurumlar için referans. Her kontrolün parametreleri var: kaç deneme sonra hesap kilitlensin, parola en az kaç karakter olsun.</div>
          <div className="layer__example">Örnek: <code>IA-2(1)</code> — Ayrıcalıklı hesaplar için MFA zorunlu.</div>
        </div>
        <div className="layer__connector">↓ alt kümesi alınır</div>
        <div className="layer layer--bot">
          <div className="layer__tag">800-171 Rev. 3</div>
          <div className="layer__title">Tedarikçi profili</div>
          <div className="layer__desc">800-53'ün özel bilgileri (Controlled Unclassified Information / CUI) korumayla ilgili 110 kontrolü. ABD Savunma Bakanlığı tedarikçileri için yıllık denetim konusu (CMMC).</div>
          <div className="layer__example">Örnek: <code>3.5.3</code> — Ayrıcalıklı hesaplara MFA uygula.</div>
        </div>
      </div>

      <div className="grid-2 grid-2--tight">
        <div className="callout callout--warm">
          <strong>Kim hangisini okur?</strong>
          <ul>
            <li><strong>CISO / yönetici:</strong> CSF 2.0 — programı buradan tarif eder.</li>
            <li><strong>Güvenlik mimarı:</strong> 800-53 — kontrolleri buradan seçer.</li>
            <li><strong>Savunma tedarikçisi:</strong> 800-171 — uyumdan buradan sorulur.</li>
          </ul>
        </div>
        <div className="callout callout--warm">
          <strong>Birlikte nasıl çalışır?</strong>
          <p>
            CSF'teki her alt kategori, 800-53'teki bir veya birkaç kontrole <em>maplenir</em> (informative reference).
            Yani CSF'i yüksek seviyede uygularken, 800-53'ü kontrol seviyesinde dolduruyorsundur.
          </p>
        </div>
      </div>
    </section>);

}

// === Bölüm 5: Tier ve Profile ===
function TiersAndProfiles() {
  const tiers = [
  { n: 1, name: "Partial", tr: "Kısmi", desc: "Süreçler tutarsız, ad-hoc. Her olay sürpriz." },
  { n: 2, name: "Risk Informed", tr: "Riskten Haberdar", desc: "Yönetim risklerin farkında ama programlanmış değil." },
  { n: 3, name: "Repeatable", tr: "Tekrarlanabilir", desc: "Yazılı politika var, düzenli uygulanıyor." },
  { n: 4, name: "Adaptive", tr: "Uyarlanabilir", desc: "Sürekli iyileşiyor, tehdit istihbaratıyla besleniyor." }];


  return (
    <section className="section" data-screen-label="Tier ve Profile">
      <div className="section__num">§ 05</div>
      <h2 className="section__title">
        İki kavram daha: <em>Tier</em> ve <em>Profile</em>
      </h2>
      <div className="grid-2">
        <div className="prose">
          <h3 className="sub">Tiers — olgunluk seviyeleri</h3>
          <p>
            Programının <em>ne kadar olgun</em> olduğunu söyler. Bir hedef değil, bir <em>termometredir</em>.
            Küçük bir kafe ile bir bankanın aynı tier'da olması beklenmez — ama her ikisi de kendi seviyesini bilmelidir.
          </p>
          <div className="tiers">
            {tiers.map((t) =>
            <div key={t.n} className="tier">
                <div className="tier__n">Tier {t.n}</div>
                <div className="tier__name">
                  {t.tr} <span>/ {t.name}</span>
                </div>
                <p>{t.desc}</p>
              </div>
            )}
          </div>
        </div>
        <div className="prose">
          <h3 className="sub">Profiles — şu an vs. olmak istediğin</h3>
          <p>
            Bir <strong>Current Profile</strong> ("şu an buradayım") ve bir <strong>Target Profile</strong> ("burada olmalıyım") çıkarırsın.
            İkisi arasındaki fark — <em>gap</em> — sana yol haritanı verir.
          </p>
          <div className="gap">
            <div className="gap__col">
              <div className="gap__label">Current</div>
              <div className="gap__bar gap__bar--current"><span style={{ width: "35%" }} /></div>
              <div className="gap__pct">%35</div>
            </div>
            <div className="gap__arrow">→ gap →</div>
            <div className="gap__col">
              <div className="gap__label">Target</div>
              <div className="gap__bar gap__bar--target"><span style={{ width: "85%" }} /></div>
              <div className="gap__pct">%85</div>
            </div>
          </div>
          <p className="muted">
            Profile'lar bütçeyi konuşturur. CFO'ya "neden bu kadar para?" diye sorulduğunda, gap haritası cevaptır.
          </p>
        </div>
      </div>
    </section>);

}

// === Bölüm 6: Sonuç & ev metaforu özeti ===
function Closing() {
  return (
    <section className="section section--closing" data-screen-label="Kapanış" style={{ backgroundColor: "rgb(8, 20, 15)" }}>
      <div className="section__num" style={{ color: "rgb(31, 148, 93)" }}>§ 06</div>
      <h2 className="section__title">
        Özetle: <em style={{ color: "rgb(31, 148, 93)" }}>evini düşün</em>
      </h2>
      <div className="closing-grid">
        <ClosingRow id="GV" tr="Yönet" en="Govern" line="Evin kurallarını sen koyarsın." />
        <ClosingRow id="ID" tr="Tanımla" en="Identify" line="Neyin var, biliyorsun." />
        <ClosingRow id="PR" tr="Koru" en="Protect" line="Kapı kilitli, kasa var." />
        <ClosingRow id="DE" tr="Tespit Et" en="Detect" line="Alarm çalıyor, kamera kayıtta." />
        <ClosingRow id="RS" tr="Müdahale Et" en="Respond" line="Olduğunda ne yapacağını biliyorsun." />
        <ClosingRow id="RC" tr="Toparlan" en="Recover" line="Sonra eskisinden güçlü oluyorsun." />
      </div>
      <p className="closing-final">
        NIST'in tek söylediği bu: bu altı şeyi bir kere yap, sonra <em style={{ color: "rgb(31, 148, 93)" }}>düzenli olarak</em> yapmaya devam et.
        Ne kadar büyük olduğun değil, ne kadar bilinçli olduğun önemli.
      </p>
      <div className="closing-foot">
        <span>Bir başlangıç rehberi</span>
        <span className="dot">•</span>
        <span>NIST CSF 2.0 · 800-53 · 800-171</span>
      </div>
    </section>);

}

function ClosingRow({ id, tr, en, line }) {
  return (
    <div className="crow">
      <div className="crow__id">{id}</div>
      <div className="crow__tr">{tr}</div>
      <div className="crow__en">{en}</div>
      <div className="crow__line" style={{ color: "rgb(31, 148, 93)" }}>{line}</div>
    </div>);

}

// === Ana App ===
function App() {
  const [activeFn, setActiveFn] = useState("GV");
  const detailRef = useRef(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    applyTheme(THEMES.vault, FONT_PAIRS.editorial);
  }, []);

  // Scroll to detail when user clicks a function card
  useEffect(() => {
    if (!userInteractedRef.current) return;
    if (!detailRef.current) return;
    const rect = detailRef.current.getBoundingClientRect();
    const y = rect.top + window.scrollY - 24;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [activeFn]);

  const handleSelect = (id) => {
    userInteractedRef.current = true;
    setActiveFn(id);
  };

  const activeFunction = FUNCTIONS.find((f) => f.id === activeFn);

  return (
    <div className="app">
      <Hero />
      <WhatIsNist />
      <FunctionsOverview active={activeFn} onSelect={handleSelect} />
      <FunctionDetail fn={activeFunction} scrollRef={detailRef} />
      <ScenarioSection />
      <DocsRelationship />
      <TiersAndProfiles />
      <Closing />
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
