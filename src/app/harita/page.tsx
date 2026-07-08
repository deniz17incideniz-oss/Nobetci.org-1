import { CitySelector } from "@/components/CitySelector";
import { InstitutionTypeSelector } from "@/components/InstitutionTypeSelector";
import { TrustNotice } from "@/components/TrustNotice";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Kurum Rehberi | Şehir ve Kurum Seçimi", "Şehir ve kurum türü seçerek nöbetçi eczane, noter, acil servis ve belediye hizmetleri için resmî kaynaklara ulaşın.", "/harita");

export default function MapPage() {
  return <><section className="directory-hero"><div className="container"><span className="eyebrow">Türkiye geneli</span><h1>Nöbetçi Kurum Rehberi</h1><p>Harita ve otomatik kurum listesi yerine, güncel bilgileri doğrulayabileceğiniz resmî kaynak rehberlerini kullanabilirsiniz.</p></div></section><div className="container"><InstitutionTypeSelector /><CitySelector /><TrustNotice /></div></>;
}
