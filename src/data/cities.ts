export type City = {
  name: string;
  slug: string;
  districts: string[];
};

export function slugifyTurkish(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const cityDistricts: Record<string, string[]> = {
  Adana: ["Seyhan", "Çukurova", "Yüreğir"],
  Ankara: ["Altındağ", "Çankaya", "Keçiören", "Mamak", "Sincan", "Yenimahalle"],
  Antalya: ["Kepez", "Konyaaltı", "Muratpaşa"],
  Bursa: ["Nilüfer", "Osmangazi", "Yıldırım"],
  Diyarbakır: ["Bağlar", "Kayapınar", "Sur", "Yenişehir"],
  Erzurum: ["Aziziye", "Palandöken", "Yakutiye"],
  Gaziantep: ["Şahinbey", "Şehitkamil"],
  İstanbul: ["Ataşehir", "Bakırköy", "Beşiktaş", "Beyoğlu", "Fatih", "Kadıköy", "Kartal", "Maltepe", "Pendik", "Şişli", "Üsküdar"],
  İzmir: ["Bayraklı", "Bornova", "Buca", "Karşıyaka", "Konak"],
  Kayseri: ["Kocasinan", "Melikgazi", "Talas"],
  Kocaeli: ["Gebze", "İzmit"],
  Konya: ["Karatay", "Meram", "Selçuklu"],
  Mersin: ["Akdeniz", "Mezitli", "Toroslar", "Yenişehir"],
  Samsun: ["Atakum", "Canik", "İlkadım"],
  Trabzon: ["Ortahisar"],
};

const cityNames = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
  "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
  "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
  "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul",
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli",
  "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
  "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas",
  "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak",
] as const;

export const cities: City[] = cityNames.map((name) => ({
  name,
  slug: slugifyTurkish(name),
  districts: cityDistricts[name] ?? [],
}));

export function findCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}
