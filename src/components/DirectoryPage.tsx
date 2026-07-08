import { CitySelector } from "@/components/CitySelector";
import { TrustNotice } from "@/components/TrustNotice";
import { getPharmacyOfficialSource, emergencySourceUrl, notarySourceUrl, titckPharmacyUrl } from "@/data/officialSources";
import { directoryConfig, type DirectoryKind } from "@/lib/directory";
import type { Institution } from "@/types/institution";

const municipalCards = [
  ["💧", "Su Arıza", "Kesinti ve altyapı duyurularını resmî su idaresinden kontrol edin."],
  ["⚡", "Elektrik Arıza", "Bölgenizdeki dağıtım şirketinin resmî arıza kanallarını kullanın."],
  ["🔥", "Doğalgaz Arıza", "Gaz kokusu veya kaçak şüphesinde yetkili acil hattı arayın."],
  ["🏛️", "Zabıta", "Yerel şikâyet ve denetim konularında belediye kanallarını kontrol edin."],
  ["🐾", "Veteriner / Sokak Hayvanları", "Şehrinizin belediye veterinerlik birimine ulaşın."],
] as const;

export function DirectoryPage({ kind, city }: { kind: DirectoryKind; institutions: Institution[]; city?: string; district?: string }) {
  const config = directoryConfig[kind];
  const pharmacySource = kind === "pharmacy" ? getPharmacyOfficialSource(city) : undefined;
  const cityPharmacyButton = city ? `${city} Nöbetçi Eczanelerini Gör` : "Nöbetçi Eczaneleri Gör";
  const cityEdevletButton = city ? `${city} Eczane Bilgisini e-Devlet’te Kontrol Et` : "Eczane Bilgisini e-Devlet’te Kontrol Et";
  const heading = city && kind === "pharmacy" ? `${city} Nöbetçi Eczane` : config.heading;
  const description = city && kind === "pharmacy"
    ? "Güncel nöbetçi eczane listesini resmî kaynaklardan kontrol edin."
    : config.description;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: heading,
    description,
  };

  return (
    <>
      <section className="directory-hero compact-hero">
        <div className="container">
          <span className="eyebrow">Hızlı rehber</span>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </section>

      <div className="container simple-guide">
        {kind === "pharmacy" && (
          <>
            <div className="quick-action-row">
              {pharmacySource?.sourceUrl && pharmacySource.sourceUrl !== titckPharmacyUrl && (
                <a className="big-action pharmacy" href={pharmacySource.sourceUrl} target="_blank" rel="noreferrer">{cityPharmacyButton} <span aria-hidden="true">↗</span></a>
              )}
              <a className="big-action pharmacy secondary-action" href={titckPharmacyUrl} target="_blank" rel="noreferrer">{cityEdevletButton} <span aria-hidden="true">↗</span></a>
            </div>
            <p className="source-note">Güncel liste resmî kaynakta açılır.</p>
            <p className="micro-warning">Nöbetçi eczane bilgileri değişebilir. Gitmeden önce adres ve telefonu doğrulayın.</p>
            <CitySelector title={city ? "Diğer Şehirler" : "Şehir Seç"} />
          </>
        )}

        {kind === "notary" && (
          <>
            <div className="quick-action-row">
              <a className="big-action notary" href={notarySourceUrl} target="_blank" rel="noreferrer">Türkiye Noterler Birliği’nde Sorgula</a>
            </div>
            <p className="micro-warning">İşlem yapmadan önce noter bilgisini resmî kaynaktan doğrulayın.</p>
          </>
        )}

        {kind === "hospital" && (
          <>
            <div className="quick-action-row">
              <a className="big-action hospital" href={emergencySourceUrl} target="_blank" rel="noreferrer">112 Resmî Sitesine Git</a>
            </div>
            <p className="micro-warning">Acil durumlarda internetten arama yapmak yerine 112’yi arayın.</p>
          </>
        )}

        {kind === "municipal" && (
          <>
            <div className="municipal-card-grid">
              {municipalCards.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h2>{title}</h2><p>{text}</p></article>)}
            </div>
            <p className="micro-warning">Sahte telefon numarası eklenmez. Güncel iletişim için şehrinizin resmî kurum sayfasını kontrol edin.</p>
          </>
        )}

        <TrustNotice />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
