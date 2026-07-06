import { HomeExplorer } from "@/components/HomeExplorer";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { directoryConfig, type DirectoryKind } from "@/lib/directory";
import type { Institution } from "@/types/institution";

export function DirectoryPage({ kind, institutions, city, district }: { kind: DirectoryKind; institutions: Institution[]; city?: string; district?: string }) {
  const config = directoryConfig[kind];
  const place = [city, district].filter(Boolean).join(" ");
  const heading = place ? `${place} ${config.heading}` : config.heading;
  const description = place
    ? `${place} ${config.label.toLocaleLowerCase("tr-TR")} haritası ile bölgenizdeki kurumları kolayca bulun. Adres, telefon, yol tarifi, kaynak ve güncelleme bilgilerini kontrol edin.`
    : config.description;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    description,
    numberOfItems: institutions.filter((item) => item.category === config.category && (!city || item.city === city) && (!district || item.district === district)).length,
  };

  return (
    <>
      <section className="directory-hero"><div className="container"><span className="eyebrow">Nobetci.org rehberi</span><h1>{heading}</h1><p>{description}</p></div></section>
      <div className="container"><HomeExplorer institutions={institutions} initialCategory={config.category} initialCity={city} initialDistrict={district} /></div>
      <div className="container"><SeoTextBlock title={`${place ? `${place} için ` : ""}${config.label} bilgileri`} emergency={config.emergency}><p>{description} Demo kayıtlar gerçek nöbet kaydı değildir; “Demo veri” etiketiyle ayrılır. Canlı bilgiler kaynak adaptörleri bağlandıkça otomatik güncellenir.</p></SeoTextBlock></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
