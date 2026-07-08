import { getPharmacyOfficialSource, titckPharmacyUrl } from "@/data/officialSources";
import { OfficialSourceBox } from "@/components/OfficialSourceBox";

export function PharmacyOfficialSourceNotice({ city }: { city?: string }) {
  const source = getPharmacyOfficialSource(city);
  const cityLabel = city ? `${city} ` : "";
  const primaryUrl = source?.sourceUrl ?? titckPharmacyUrl;
  return (
    <OfficialSourceBox
      source={source}
      message={`${cityLabel}nöbetçi eczane verisi doğrudan çekilmemektedir. Güncel nöbetçi eczane listesini resmî kaynaklardan doğrulayabilirsiniz.`}
      primaryLabel="Resmî Kaynaktan Doğrula"
      primaryUrl={primaryUrl}
      secondaryLabel="e-Devlet TİTCK’ta Sorgula"
      secondaryUrl={titckPharmacyUrl}
    />
  );
}

export function IstanbulPharmacyNotice() {
  return <PharmacyOfficialSourceNotice city="İstanbul" />;
}
