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
  pharmacy: { category: "pharmacy", slug: "nobetci-eczane", label: "Nöbetçi eczane", heading: "Nöbetçi Eczane Haritası", description: "Bulunduğunuz il ve ilçedeki nöbetçi eczaneleri haritada görün. Adres, telefon, yol tarifi ve kaynak bilgilerini kolayca kontrol edin." },
  notary: { category: "notary", slug: "nobetci-noter", label: "Nöbetçi noter", heading: "Nöbetçi Noter Bul", description: "Nöbetçi noterleri şehir ve ilçeye göre arayın. Adres, çalışma bilgisi, yol tarifi ve resmi kaynak bağlantılarına ulaşın." },
  hospital: { category: "hospital", slug: "acil-servis", label: "Acil servis", heading: "Acil Servis Haritası", description: "Türkiye genelindeki hastane acil servislerini harita üzerinden bulun. Adres, telefon ve yol tarifi bilgileriyle hızlıca ulaşın.", emergency: true },
  municipal: { category: "municipal", slug: "belediye-hizmetleri", label: "Belediye hizmeti", heading: "Nöbetçi Belediye Hizmetleri", description: "Zabıta, su, doğalgaz, elektrik arıza ve veterinerlik destek hizmetlerini şehir ve ilçeye göre bulun." },
  emergency: { category: "emergency", slug: "acil-kurumlar", label: "Acil kurum", heading: "7/24 Acil Kurumlar", description: "Polis, jandarma, itfaiye, AFAD ve 112 gibi acil kurumların açık adres ve iletişim bilgilerini kontrol edin.", emergency: true },
};

export function kindFromSlug(slug: string): DirectoryKind | undefined {
  return (Object.entries(directoryConfig) as Array<[DirectoryKind, (typeof directoryConfig)[DirectoryKind]]>).find(([, config]) => config.slug === slug)?.[0];
}
