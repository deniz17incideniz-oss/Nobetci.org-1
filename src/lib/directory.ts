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
  pharmacy: { category: "pharmacy", slug: "nobetci-eczane", label: "Nöbetçi eczane", heading: "Nöbetçi Eczane Rehberi", description: "Şehrinizdeki nöbetçi eczane bilgilerine ulaşmak için resmî kaynaklara yönlendiren sade ve güvenilir nöbetçi eczane rehberi." },
  notary: { category: "notary", slug: "nobetci-noter", label: "Nöbetçi noter", heading: "Nöbetçi Noter Rehberi", description: "Nöbetçi noter bilgilerini Türkiye Noterler Birliği üzerinden doğrulamak için sade yönlendirme rehberi." },
  hospital: { category: "hospital", slug: "acil-servis", label: "Acil servis", heading: "Acil Servis ve 112 Rehberi", description: "Acil durumlarda doğrudan 112 Acil Çağrı Merkezi’ni arayın. Hastane ve acil servis bilgileri değişebileceği için resmî kaynaklardan doğrulama yapmanız önerilir.", emergency: true },
  municipal: { category: "municipal", slug: "belediye-hizmetleri", label: "Belediye hizmeti", heading: "Belediye ve Arıza Hatları Rehberi", description: "Su, elektrik, doğalgaz, zabıta ve belediye hizmetleri için şehirlerin resmî kurumlarına ulaşmadan önce bilgileri doğrulayın." },
  emergency: { category: "emergency", slug: "acil-kurumlar", label: "Acil kurum", heading: "7/24 Acil Kurumlar", description: "Polis, jandarma, itfaiye, AFAD ve 112 gibi acil kurumların açık adres ve iletişim bilgilerini kontrol edin.", emergency: true },
};

export function kindFromSlug(slug: string): DirectoryKind | undefined {
  return (Object.entries(directoryConfig) as Array<[DirectoryKind, (typeof directoryConfig)[DirectoryKind]]>).find(([, config]) => config.slug === slug)?.[0];
}
