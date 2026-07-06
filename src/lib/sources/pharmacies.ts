import type { Institution } from "@/types/institution";

export async function fetchPharmacies(): Promise<Institution[]> {
  // İl sağlık müdürlükleri ve eczacı odaları farklı formatlar kullanır.
  // Yalnızca açık izin/kullanım koşulu doğrulanmış kaynaklar burada bağlanmalıdır.
  return [];
}

