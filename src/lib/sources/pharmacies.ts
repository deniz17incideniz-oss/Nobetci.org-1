import { fetchOfficialJsonSource } from "./shared";
import type { Institution } from "@/types/institution";

/**
 * Yalnızca yeniden kullanıma izin veren resmî eczacı odası/sağlık müdürlüğü
 * JSON API'si bağlanmalıdır. Kullanım şartları ve robots politikası yazılı olarak
 * doğrulanmadan HTML scraping yapılmaz.
 */
export async function fetchPharmacies(): Promise<Institution[]> {
  return fetchOfficialJsonSource({ adapterName: "pharmacies", endpointEnv: "PHARMACY_SOURCE_URL", sourceName: "Resmî nöbetçi eczane kaynağı", category: "pharmacy" });
}
