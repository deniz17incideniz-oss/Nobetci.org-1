import { CitySelector } from "@/components/CitySelector";
import { HomeHero } from "@/components/HomeHero";
import { InstitutionTypeSelector } from "@/components/InstitutionTypeSelector";
import { TrustNotice } from "@/components/TrustNotice";
import { emergencySourceUrl, notarySourceUrl, titckPharmacyUrl } from "@/data/officialSources";
import { absoluteSiteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Nöbetçi Eczaneler ve Kurum Rehberi | Resmî Kaynaklara Hızlı Erişim",
  "Nöbetçi eczaneler, nöbetçi noter ve acil servis bilgileri için resmî kaynaklara hızlıca ulaşın. Şehrinizi seçin, güncel bilgileri doğrulayın.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="container">
        <InstitutionTypeSelector />
        <CitySelector />
        <section className="content-section compact-section" aria-labelledby="official-source-title">
          <div className="section-heading">
            <span className="eyebrow">3. Adım</span>
            <h2 id="official-source-title">Resmî Kaynaklar</h2>
          </div>
          <div className="official-button-grid">
            <a className="big-action pharmacy" href={titckPharmacyUrl} target="_blank" rel="noreferrer">e-Devlet Nöbetçi Eczane Sorgula</a>
            <a className="big-action notary" href={notarySourceUrl} target="_blank" rel="noreferrer">Türkiye Noterler Birliği</a>
            <a className="big-action hospital" href={emergencySourceUrl} target="_blank" rel="noreferrer">112 Acil Çağrı Merkezi</a>
          </div>
        </section>
        <TrustNotice />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Nobetci.org", url: absoluteSiteUrl, description: "Türkiye nöbetçi kurum rehberi", potentialAction: { "@type": "SearchAction", target: `${absoluteSiteUrl}/harita?q={search_term_string}`, "query-input": "required name=search_term_string" } }).replace(/</g, "\\u003c") }} />
    </>
  );
}
