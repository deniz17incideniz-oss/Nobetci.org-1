import { HomeExplorer } from "@/components/HomeExplorer";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Türkiye Nöbetçi Kurum Haritası", "İl, ilçe ve kurum türü seçerek Türkiye genelindeki nöbetçi kurumları haritada ve listede inceleyin.", "/harita");

export default function MapPage() {
  return <><section className="directory-hero"><div className="container"><span className="eyebrow">Türkiye geneli</span><h1>Nöbetçi Kurum Haritası</h1><p>İl ve ilçenizi seçin; eczane, noter, acil servis, belediye ve acil kurumları tek ekranda karşılaştırın.</p></div></section><div className="container"><HomeExplorer institutions={getInstitutions()} /></div></>;
}
