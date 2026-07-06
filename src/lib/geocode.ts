export type GeocodeResult = {
  latitude: number;
  longitude: number;
  displayName: string;
};

/**
 * Nominatim entegrasyonu için hazır geocoding katmanı.
 * Toplu sorgularda kullanım politikasına uyulmalı, en az bir saniye beklenmeli,
 * tanımlayıcı User-Agent gönderilmeli ve sonuçlar kalıcı olarak önbelleğe alınmalıdır.
 */
export async function geocodeAddress(address: string): Promise<GeocodeResult | null> {
  if (!process.env.NOMINATIM_USER_AGENT) return null;

  const endpoint = new URL("https://nominatim.openstreetmap.org/search");
  endpoint.searchParams.set("q", address);
  endpoint.searchParams.set("format", "jsonv2");
  endpoint.searchParams.set("limit", "1");

  const response = await fetch(endpoint, {
    headers: { "User-Agent": process.env.NOMINATIM_USER_AGENT },
  });
  if (!response.ok) return null;

  const [result] = (await response.json()) as Array<{
    lat: string;
    lon: string;
    display_name: string;
  }>;
  if (!result) return null;

  return {
    latitude: Number(result.lat),
    longitude: Number(result.lon),
    displayName: result.display_name,
  };
}
