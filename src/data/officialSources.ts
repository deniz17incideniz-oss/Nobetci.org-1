import { slugifyTurkish } from "@/data/cities";
import type { InstitutionCategory } from "@/types/institution";

export type OfficialSource = {
  city: string;
  citySlug: string;
  category: InstitutionCategory;
  sourceName: string;
  sourceUrl: string;
  secondarySourceName?: string;
  secondarySourceUrl?: string;
  status: "verified" | "needs_review";
};

export const titckPharmacyUrl = "https://www.turkiye.gov.tr/saglik-titck-nobetci-eczane-sorgulama";
export const notarySourceUrl = "https://portal.tnb.org.tr/Sayfalar/NobetciNoterBul.aspx";

export const majorCities = [
  "Adana",
  "Ankara",
  "Antalya",
  "Aydın",
  "Balıkesir",
  "Bursa",
  "Denizli",
  "Diyarbakır",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Hatay",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Kayseri",
  "Kocaeli",
  "Konya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Ordu",
  "Sakarya",
  "Samsun",
  "Şanlıurfa",
  "Tekirdağ",
  "Trabzon",
  "Van",
] as const;

const pharmacyOverrides: Partial<Record<(typeof majorCities)[number], Pick<OfficialSource, "sourceName" | "sourceUrl" | "status">>> = {
  İstanbul: {
    sourceName: "İstanbul Eczacı Odası",
    sourceUrl: "https://www.istanbuleczaciodasi.org.tr/nobetci-eczane/",
    status: "verified",
  },
};

export const pharmacyOfficialSources: OfficialSource[] = majorCities.map((city) => {
  const override = pharmacyOverrides[city];

  return {
    city,
    citySlug: slugifyTurkish(city),
    category: "pharmacy",
    sourceName: override?.sourceName ?? "e-Devlet TİTCK",
    sourceUrl: override?.sourceUrl ?? titckPharmacyUrl,
    secondarySourceName: "e-Devlet TİTCK",
    secondarySourceUrl: titckPharmacyUrl,
    status: override?.status ?? "needs_review",
  };
});

export function getPharmacyOfficialSource(city?: string) {
  if (!city) return undefined;
  return pharmacyOfficialSources.find((source) => source.city === city);
}
