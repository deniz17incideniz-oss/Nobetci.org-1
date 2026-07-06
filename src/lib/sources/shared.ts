import type { Institution, InstitutionCategory } from "@/types/institution";

type SourceRecord = Partial<Institution> & {
  name?: unknown;
  city?: unknown;
  district?: unknown;
  address?: unknown;
};

type JsonSourceOptions = {
  adapterName: string;
  endpointEnv: string;
  sourceName: string;
  category: InstitutionCategory;
};

function isText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeRecord(record: SourceRecord, options: JsonSourceOptions, endpoint: string, index: number): Institution | null {
  if (!isText(record.name) || !isText(record.city) || !isText(record.district) || !isText(record.address)) return null;
  const identity = `${record.city}-${record.district}-${record.name}-${index}`
    .toLocaleLowerCase("tr-TR")
    .replace(/[^a-z0-9çğıöşü]+/g, "-");
  const dutyPeriod = record.dutyPeriod === "today" || record.dutyPeriod === "tomorrow" || record.dutyPeriod === "always"
    ? record.dutyPeriod
    : undefined;

  return {
    id: isText(record.id) ? record.id : `${options.category}-${identity}`,
    name: record.name.trim(),
    category: options.category,
    city: record.city.trim(),
    district: record.district.trim(),
    address: record.address.trim(),
    phone: isText(record.phone) ? record.phone.trim() : undefined,
    latitude: typeof record.latitude === "number" && Number.isFinite(record.latitude) ? record.latitude : undefined,
    longitude: typeof record.longitude === "number" && Number.isFinite(record.longitude) ? record.longitude : undefined,
    dutyDate: isText(record.dutyDate) ? record.dutyDate : undefined,
    dutyPeriod,
    sourceName: isText(record.sourceName) ? record.sourceName : options.sourceName,
    sourceUrl: isText(record.sourceUrl) ? record.sourceUrl : endpoint,
    lastUpdated: isText(record.lastUpdated) ? record.lastUpdated : new Date().toISOString(),
    confidence: "official",
    isOpenNow: typeof record.isOpenNow === "boolean" ? record.isOpenNow : undefined,
    mapsUrl: isText(record.mapsUrl) ? record.mapsUrl : undefined,
  };
}

export async function fetchOfficialJsonSource(options: JsonSourceOptions): Promise<Institution[]> {
  const endpoint = process.env[options.endpointEnv];
  if (!endpoint) {
    console.info(`[sources:${options.adapterName}] ${options.endpointEnv} tanımlı değil; kaynak atlandı.`);
    return [];
  }

  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:") throw new Error("Kaynak URL HTTPS olmalıdır");
    const response = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "Nobetci.org data adapter/1.0" },
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Kaynak HTTP ${response.status} döndürdü`);
    const payload: unknown = await response.json();
    const records = Array.isArray(payload)
      ? payload
      : typeof payload === "object" && payload !== null && Array.isArray((payload as { data?: unknown }).data)
        ? (payload as { data: unknown[] }).data
        : [];
    return records
      .map((record, index) => normalizeRecord(record as SourceRecord, options, url.toString(), index))
      .filter((record): record is Institution => record !== null);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Bilinmeyen kaynak hatası";
    console.error(`[sources:${options.adapterName}] Veri alınamadı; boş sonuçla devam ediliyor. ${message}`);
    return [];
  }
}
