import { writeFile } from "node:fs/promises";
import path from "node:path";
import { sourceAdapters } from "../src/lib/sources";
import type { Institution } from "../src/types/institution";

async function updateData() {
  const collected: Institution[] = [];

  for (const adapter of sourceAdapters) {
    try {
      const institutions = await adapter.fetch();
      collected.push(...institutions);
      console.log(`[update-data] ${adapter.name}: ${institutions.length} kayıt`);
    } catch (error) {
      console.error(`[update-data] ${adapter.name} adaptörü başarısız; diğer kaynaklarla devam ediliyor.`, error instanceof Error ? error.message : "Bilinmeyen hata");
    }
  }

  if (collected.length === 0) {
    console.log("[update-data] Gerçek kaynak kaydı yok; mevcut canlı veri dosyası korunuyor.");
    return;
  }

  const destination = path.join(process.cwd(), "src", "data", "institutions.json");
  const unique = new Map<string, Institution>();
  for (const institution of collected) {
    const key = institution.id || `${institution.category}:${institution.city}:${institution.district}:${institution.name}`.toLocaleLowerCase("tr-TR");
    unique.set(key, {
      ...institution,
      confidence: institution.confidence ?? "unknown",
      lastUpdated: institution.lastUpdated || new Date().toISOString(),
    });
  }
  const normalized = [...unique.values()];
  const missingCoordinates = normalized.filter((item) => item.latitude == null || item.longitude == null).length;
  if (missingCoordinates) console.log(`[update-data] ${missingCoordinates} kayıt geocoding bekliyor.`);
  await writeFile(destination, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
  console.log(`[update-data] ${normalized.length} kayıt yazıldı.`);
}

updateData().catch((error) => {
  console.error("[update-data] Güncelleme tamamlanamadı; build etkilenmeyecek.", error instanceof Error ? error.message : "Bilinmeyen hata");
  process.exitCode = 0;
});
