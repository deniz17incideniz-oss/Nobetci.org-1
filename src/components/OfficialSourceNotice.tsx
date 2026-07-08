import { getPharmacyOfficialSource, titckPharmacyUrl } from "@/data/officialSources";
import { OfficialSourceBox } from "@/components/OfficialSourceBox";

export function PharmacyOfficialSourceNotice({ city }: { city?: string }) {
  const source = getPharmacyOfficialSource(city);
  const cityLabel = city ? `${city} ` : "";
  const primaryLabel = city ? `${city} Nöbetçi Eczanelerini Gör` : "Nöbetçi Eczanelerini Gör";
  const secondaryLabel = city ? `${city} Eczane Bilgisini e-Devlet’te Kontrol Et` : "Eczane Bilgisini e-Devlet’te Kontrol Et";
  const primaryUrl = source?.sourceUrl ?? titckPharmacyUrl;
  return (
    <OfficialSourceBox
      source={source}
      message={`${cityLabel}güncel nöbetçi eczane listesi resmî kaynakta açılır.`}
      primaryLabel={primaryLabel}
      primaryUrl={primaryUrl}
      secondaryLabel={secondaryLabel}
      secondaryUrl={titckPharmacyUrl}
    />
  );
}

export function IstanbulPharmacyNotice() {
  return <PharmacyOfficialSourceNotice city="İstanbul" />;
}
