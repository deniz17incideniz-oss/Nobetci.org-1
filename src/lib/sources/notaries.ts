import { fetchOfficialJsonSource } from "./shared";
import type { Institution } from "@/types/institution";

/**
 * Türkiye Noterler Birliği veya yetkili resmî kurumun izinli JSON çıktısı
 * kullanılmalıdır. Resmî API/izin yoksa adaptör boş sonuç döndürür; scraping yapmaz.
 */
export async function fetchNotaries(): Promise<Institution[]> {
  return fetchOfficialJsonSource({ adapterName: "notaries", endpointEnv: "NOTARY_SOURCE_URL", sourceName: "Resmî nöbetçi noter kaynağı", category: "notary" });
}
