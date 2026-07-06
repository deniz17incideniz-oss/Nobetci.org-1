import type { Institution } from "@/types/institution";

export async function fetchMunicipalServices(): Promise<Institution[]> {
  // Belediyelerin açık veri portalları şehir bazında ayrı alt adaptörlerle eklenebilir.
  return [];
}

