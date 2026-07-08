import { fetchOfficialJsonSource } from "./shared";
import { getPharmacyOfficialSource } from "@/data/officialSources";
import type { Institution } from "@/types/institution";

export const istanbulPharmacySourceConfig = getPharmacyOfficialSource("İstanbul");

/**
 * Yalnızca yeniden kullanıma izin veren resmî eczacı odası/sağlık müdürlüğü
 * JSON API'si bağlanmalıdır. Kullanım şartları ve robots politikası yazılı olarak
 * doğrulanmadan HTML scraping yapılmaz.
 */
export async function fetchIstanbulPharmacies(): Promise<Institution[]> {
  // İstanbul Eczacı Odası’ndan API/veri kullanım izni alınmadan otomatik veri çekilmeyecek. İzinsiz scraping yapılmayacak.
  return [];
}

export async function fetchPharmacies(): Promise<Institution[]> {
  const [officialJsonRecords, istanbulRecords] = await Promise.all([
    fetchOfficialJsonSource({ adapterName: "pharmacies", endpointEnv: "PHARMACY_SOURCE_URL", sourceName: "Resmî nöbetçi eczane kaynağı", category: "pharmacy" }),
    fetchIstanbulPharmacies(),
  ]);

  return [...officialJsonRecords, ...istanbulRecords];
}
