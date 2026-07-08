import { slugifyTurkish } from "@/data/cities";

export type OfficialSource = {
  id: string;
  city?: string;
  citySlug?: string;
  category: "pharmacy" | "notary" | "emergency" | "hospital" | "municipal";
  title: string;
  description: string;
  sourceName: string;
  sourceUrl: string;
  secondarySourceName?: string;
  secondarySourceUrl?: string;
  status: "official" | "general_official" | "needs_review";
};

export const titckPharmacyUrl = "https://www.turkiye.gov.tr/saglik-titck-nobetci-eczane-sorgulama";
export const notarySourceUrl = "https://portal.tnb.org.tr/Sayfalar/NobetciNoterBul.aspx";
export const emergencySourceUrl = "https://www.112.gov.tr/";

export const generalOfficialSources: OfficialSource[] = [
  {
    id: "titck-nobetci-eczane",
    category: "pharmacy",
    title: "e-Devlet TİTCK Nöbetçi Eczane Sorgulama",
    description: "Nöbetçi eczane bilgilerini resmî e-Devlet hizmeti üzerinden kontrol edebilirsiniz.",
    sourceName: "e-Devlet TİTCK",
    sourceUrl: titckPharmacyUrl,
    status: "general_official",
  },
  {
    id: "tnb-nobetci-noter",
    category: "notary",
    title: "Türkiye Noterler Birliği Nöbetçi Noter Bul",
    description: "Hafta sonu ve nöbetçi noter duyurularını Türkiye Noterler Birliği kaynağından sorgulayabilirsiniz.",
    sourceName: "Türkiye Noterler Birliği",
    sourceUrl: notarySourceUrl,
    status: "official",
  },
  {
    id: "112-acil-cagri-merkezi",
    category: "emergency",
    title: "112 Acil Çağrı Merkezi Bilgilendirme",
    description: "Acil durumda doğrudan 112 aranmalıdır. Bu bağlantı bilgilendirme amaçlı resmî kaynağa gider.",
    sourceName: "112 Acil Çağrı Merkezi",
    sourceUrl: emergencySourceUrl,
    status: "official",
  },
  {
    id: "yerel-belediye-ariza-hatlari",
    category: "municipal",
    title: "Yerel Belediye ve Arıza Hatları",
    description: "Su, elektrik, doğalgaz, zabıta ve belediye hizmetleri için kendi şehrinizin resmî kurum sayfalarını kontrol edin.",
    sourceName: "Şehir belediyesi ve yetkili kurumlar",
    sourceUrl: "/belediye-hizmetleri",
    status: "general_official",
  },
];

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
    status: "official",
  },
};

export const pharmacyOfficialSources: OfficialSource[] = majorCities.map((city) => {
  const override = pharmacyOverrides[city];
  const citySlug = slugifyTurkish(city);

  return {
    id: `${citySlug}-nobetci-eczane-kaynagi`,
    city,
    citySlug,
    category: "pharmacy",
    title: `${city} Nöbetçi Eczane Resmî Kaynak`,
    description: `${city} nöbetçi eczane bilgilerini gitmeden önce resmî kaynaklardan doğrulayın.`,
    sourceName: override?.sourceName ?? "e-Devlet TİTCK",
    sourceUrl: override?.sourceUrl ?? titckPharmacyUrl,
    secondarySourceName: "e-Devlet TİTCK",
    secondarySourceUrl: titckPharmacyUrl,
    status: override?.status ?? "general_official",
  };
});

export function getPharmacyOfficialSource(city?: string) {
  if (!city) return undefined;
  return pharmacyOfficialSources.find((source) => source.city === city);
}
