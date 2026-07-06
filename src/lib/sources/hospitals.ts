import { fetchOfficialJsonSource } from "./shared";
import type { Institution } from "@/types/institution";

/**
 * Sağlık Bakanlığı veya doğrulanmış açık veri portalının izinli HTTPS JSON
 * uç noktası kullanılmalıdır. Lisans ve kullanım şartı doğrulanmadan veri çekilmez.
 */
export async function fetchHospitals(): Promise<Institution[]> {
  return fetchOfficialJsonSource({ adapterName: "hospitals", endpointEnv: "HOSPITAL_SOURCE_URL", sourceName: "Resmî hastane kaynağı", category: "hospital" });
}
