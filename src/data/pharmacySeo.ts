import { slugifyTurkish } from "@/data/cities";

export const pharmacySeoDistricts = {
  İstanbul: ["Kadıköy", "Beşiktaş", "Üsküdar", "Fatih", "Bakırköy", "Şişli", "Maltepe", "Pendik", "Kartal", "Esenyurt"],
  Ankara: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut"],
  İzmir: ["Karşıyaka", "Konak", "Bornova", "Buca", "Bayraklı"],
} as const;

export type PharmacySeoCity = keyof typeof pharmacySeoDistricts;

export function getSeoDistricts(city?: string) {
  if (!city || !(city in pharmacySeoDistricts)) return [];
  return pharmacySeoDistricts[city as PharmacySeoCity];
}

export function getSeoDistrictParams() {
  return Object.entries(pharmacySeoDistricts).flatMap(([city, districts]) =>
    districts.map((district) => ({
      city,
      citySlug: slugifyTurkish(city),
      district,
      districtSlug: slugifyTurkish(district),
    })),
  );
}

export function findSeoDistrict(citySlug: string, districtSlug: string) {
  return getSeoDistrictParams().find((item) => item.citySlug === citySlug && item.districtSlug === districtSlug);
}
