import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { majorCities } from "@/data/officialSources";
import { slugifyTurkish } from "@/data/cities";
import { absoluteSiteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Nöbetçi Kurum Rehberi | Eczane, Noter ve Acil Servis Bilgileri",
  "Türkiye’de nöbetçi eczane, noter ve acil servis bilgilerine hızlıca ulaşın. Şehrinizi seçin, resmî kaynaklardan güncel bilgileri doğrulayın.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Resmî kaynaklara hızlı yönlendirme</span>
          <h1>Türkiye’de Nöbetçi Kurumları Kolayca Bul</h1>
          <p>Nöbetçi eczane, noter ve acil servis bilgileri için resmî kaynaklara hızlıca ulaşın.</p>
          <label className="search-box hero-search">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Şehir veya kurum türü ara</span>
            <input type="search" placeholder="Şehir veya kurum türü ara" />
          </label>
        </div>
      </section>
      <div className="container">
        <section className="quick-cards" aria-label="Ana rehberler">
          <article className="quick-card"><h2>Nöbetçi Eczane</h2><p>Şehrinizdeki nöbetçi eczane bilgisini resmî kaynaklardan doğrulamak için rehber sayfalarını kullanın.</p><a href="/nobetci-eczane">Ara</a></article>
          <article className="quick-card"><h2>Nöbetçi Noter</h2><p>Nöbetçi noter bilgisini Türkiye Noterler Birliği üzerinden kontrol edin.</p><a href="/nobetci-noter">Resmî kaynağa git</a></article>
          <article className="quick-card"><h2>Acil Servis</h2><p>Acil durumda 112’yi arayın. Hastane ve acil servis bilgileri için doğrulama rehberini inceleyin.</p><a href="/acil-servis">Rehberi aç</a></article>
        </section>
        <div className="global-warning">Bu platform bilgilendirme amaçlıdır. Nöbet bilgileri değişebilir. Sağlık, noterlik veya acil işlemler öncesinde resmi kaynaklardan doğrulama yapınız.</div>
        <section className="content-section" aria-labelledby="major-city-title">
          <div className="section-heading">
            <span className="eyebrow">Şehre göre eczane rehberi</span>
            <h2 id="major-city-title">Büyükşehirlerde Nöbetçi Eczane Rehberi</h2>
          </div>
          <div className="city-chip-grid">
            {majorCities.map((city) => <a key={city} href={`/${slugifyTurkish(city)}/nobetci-eczane`}>{city}</a>)}
          </div>
        </section>
        <HowItWorks />
        <TrustSection />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Nobetci.org", url: absoluteSiteUrl, description: "Türkiye nöbetçi kurum haritası", potentialAction: { "@type": "SearchAction", target: `${absoluteSiteUrl}/harita?q={search_term_string}`, "query-input": "required name=search_term_string" } }).replace(/</g, "\\u003c") }} />
    </>
  );
}
