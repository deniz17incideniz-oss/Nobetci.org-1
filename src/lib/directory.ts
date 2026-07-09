import type { InstitutionCategory } from "@/types/institution";

export type DirectoryKind = "pharmacy" | "notary" | "hospital" | "municipal" | "emergency";

export const directoryConfig: Record<DirectoryKind, {
  category: InstitutionCategory;
  slug: string;
  label: string;
  heading: string;
  description: string;
  emergency?: boolean;
}> = {
  pharmacy: { category: "pharmacy", slug: "nobetci-eczane", label: "Nöbetçi eczane", heading: "Nöbetçi Eczaneler", description: "Nöbetçi eczaneler il ve ilçeye göre günlük olarak değişebilir. Bu sayfadan şehir seçerek güncel nöbetçi eczane sorgulama kaynaklarına ulaşabilirsiniz." },
  notary: { category: "notary", slug: "nobetci-noter", label: "Nöbetçi noter", heading: "Nöbetçi Noter Sorgula", description: "Güncel nöbetçi noter bilgisini Türkiye Noterler Birliği üzerinden kontrol edin." },
  hospital: { category: "hospital", slug: "acil-servis", label: "Acil servis", heading: "Acil Servis ve 112", description: "Acil durumda doğrudan 112 Acil Çağrı Merkezi’ni arayın.", emergency: true },
  municipal: { category: "municipal", slug: "belediye-hizmetleri", label: "Belediye hizmeti", heading: "Belediye ve Arıza Hatları", description: "Su, elektrik, doğalgaz ve zabıta hizmetleri için şehrinizin resmî kurumlarını kontrol edin." },
  emergency: { category: "emergency", slug: "acil-kurumlar", label: "Acil kurum", heading: "7/24 Acil Kurumlar", description: "Polis, jandarma, itfaiye, AFAD ve 112 gibi acil kurumların açık adres ve iletişim bilgilerini kontrol edin.", emergency: true },
};

export function kindFromSlug(slug: string): DirectoryKind | undefined {
  return (Object.entries(directoryConfig) as Array<[DirectoryKind, (typeof directoryConfig)[DirectoryKind]]>).find(([, config]) => config.slug === slug)?.[0];
}
