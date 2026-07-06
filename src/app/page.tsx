import { HomeExplorer } from "@/components/HomeExplorer";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularSearches } from "@/components/PopularSearches";
import { TrustSection } from "@/components/TrustSection";
import { getInstitutions } from "@/lib/data";
import { absoluteSiteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Nobetci.org | Türkiye Nöbetçi Eczane, Noter ve Acil Kurum Haritası",
  "Türkiye’deki nöbetçi eczane, noter, acil servis ve diğer nöbetçi kurumları haritada bulun. İl ve ilçe seçin, adres, telefon ve yol tarifi bilgilerine kolayca ulaşın.",
  "/",
);

export default function HomePage() {
  const institutions = getInstitutions();

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Türkiye genelinde hızlı arama</span>
          <h1>Türkiye’nin Nöbetçi Kurum Haritası</h1>
          <p>Eczane, noter, acil servis ve diğer nöbetçi kurumları harita üzerinde kolayca bulun.</p>
          <p className="hero-secondary">İl ve ilçe seçin, size en yakın nöbetçi kurumları görün, yol tarifi alın.</p>
          <a className="hero-link" href="#harita">Haritayı incele <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <div className="container">
        <HomeExplorer institutions={institutions} />
        <div className="global-warning">Bu platform bilgilendirme amaçlıdır. Nöbet bilgileri değişebilir. Sağlık, noterlik veya acil işlemler öncesinde resmi kaynaklardan doğrulama yapınız.</div>
        <PopularSearches />
        <HowItWorks />
        <TrustSection />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Nobetci.org", url: absoluteSiteUrl, description: "Türkiye nöbetçi kurum haritası", potentialAction: { "@type": "SearchAction", target: `${absoluteSiteUrl}/harita?q={search_term_string}`, "query-input": "required name=search_term_string" } }).replace(/</g, "\\u003c") }} />
    </>
  );
}
