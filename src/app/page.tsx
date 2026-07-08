import { CitySelector } from "@/components/CitySelector";
import { HomeHero } from "@/components/HomeHero";
import { HowItWorks } from "@/components/HowItWorks";
import { InstitutionTypeSelector } from "@/components/InstitutionTypeSelector";
import { OfficialSourceCard } from "@/components/OfficialSourceCard";
import { PopularGuides } from "@/components/PopularGuides";
import { TrustNotice } from "@/components/TrustNotice";
import { TrustSection } from "@/components/TrustSection";
import { generalOfficialSources } from "@/data/officialSources";
import { absoluteSiteUrl, createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Nöbetçi Kurum Rehberi | Eczane, Noter ve Acil Servis",
  "Türkiye’de nöbetçi eczane, noter ve acil servis bilgileri için resmî kaynaklara hızlıca ulaşın. Şehrinizi seçin, güncel bilgileri doğrulayın.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="container">
        <InstitutionTypeSelector />
        <CitySelector />
        <section className="content-section" aria-labelledby="official-source-title">
          <div className="section-heading">
            <span className="eyebrow">Güvenli yönlendirme</span>
            <h2 id="official-source-title">Resmî Kaynaklardan Doğrulayın</h2>
          </div>
          <div className="official-source-grid">
            {generalOfficialSources.map((source) => <OfficialSourceCard key={source.id} source={source} />)}
          </div>
        </section>
        <HowItWorks />
        <PopularGuides />
        <TrustNotice />
        <TrustSection />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Nobetci.org", url: absoluteSiteUrl, description: "Türkiye nöbetçi kurum rehberi", potentialAction: { "@type": "SearchAction", target: `${absoluteSiteUrl}/harita?q={search_term_string}`, "query-input": "required name=search_term_string" } }).replace(/</g, "\\u003c") }} />
    </>
  );
}
