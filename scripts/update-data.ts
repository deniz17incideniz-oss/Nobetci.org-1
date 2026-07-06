import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fetchEmergencyServices } from "../src/lib/sources/emergency";
import { fetchHospitals } from "../src/lib/sources/hospitals";
import { fetchMunicipalServices } from "../src/lib/sources/municipal";
import { fetchNotaries } from "../src/lib/sources/notaries";
import { fetchPharmacies } from "../src/lib/sources/pharmacies";
import type { Institution } from "../src/types/institution";

const adapters = [
  ["pharmacies", fetchPharmacies],
  ["notaries", fetchNotaries],
  ["hospitals", fetchHospitals],
  ["municipal", fetchMunicipalServices],
  ["emergency", fetchEmergencyServices],
] as const;

async function updateData() {
  const collected: Institution[] = [];

  for (const [name, adapter] of adapters) {
    try {
      const institutions = await adapter();
      collected.push(...institutions);
      console.log(`[update-data] ${name}: ${institutions.length} kayıt`);
    } catch (error) {
      console.error(`[update-data] ${name} adaptörü başarısız; diğer kaynaklarla devam ediliyor.`, error instanceof Error ? error.message : "Bilinmeyen hata");
    }
  }

  if (collected.length === 0) {
    console.log("[update-data] Gerçek kaynak kaydı yok; mevcut örnek veri korunuyor.");
    return;
  }

  const destination = path.join(process.cwd(), "src", "data", "sample-institutions.json");
  const normalized = collected.map((institution) => ({
    ...institution,
    lastUpdated: institution.lastUpdated || new Date().toISOString(),
  }));
  await writeFile(destination, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  console.log(`[update-data] ${normalized.length} kayıt yazıldı.`);
}

updateData().catch((error) => {
  console.error("[update-data] Güncelleme tamamlanamadı; build etkilenmeyecek.", error instanceof Error ? error.message : "Bilinmeyen hata");
  process.exitCode = 0;
});

