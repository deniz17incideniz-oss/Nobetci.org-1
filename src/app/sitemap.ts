import type { MetadataRoute } from "next";
import { slugifyTurkish } from "@/data/cities";
import { majorCities } from "@/data/officialSources";
import { getInstitutions } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobetci-org.vercel.app";
  const staticPaths = ["", "/harita", "/nobetci-eczane", "/nobetci-noter", "/acil-servis", "/belediye-hizmetleri", "/about", "/privacy", "/contact"];
  const institutions = getInstitutions();
  const majorCityPaths = majorCities.flatMap((city) => {
    const slug = slugifyTurkish(city);
    return [`/${slug}/nobetci-eczane`, `/${slug}/nobetci-noter`, `/${slug}/acil-servis`];
  });
  const categoryPaths = [
    ...institutions.filter((item) => item.category === "pharmacy").map((item) => `/${slugifyTurkish(item.city)}/nobetci-eczane`),
    ...institutions.filter((item) => item.category === "notary").map((item) => `/${slugifyTurkish(item.city)}/nobetci-noter`),
    ...institutions.filter((item) => item.category === "hospital").map((item) => `/${slugifyTurkish(item.city)}/acil-servis`),
    ...institutions.filter((item) => item.category === "pharmacy").map((item) => `/${slugifyTurkish(item.city)}/${slugifyTurkish(item.district)}/nobetci-eczane`),
    ...institutions.filter((item) => item.category === "notary").map((item) => `/${slugifyTurkish(item.city)}/${slugifyTurkish(item.district)}/nobetci-noter`),
  ];
  return [...new Set([...staticPaths, ...majorCityPaths, ...categoryPaths])].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path.includes("nobetci") || path.includes("acil") ? "daily" : "monthly",
    priority: path === "" ? 1 : path === "/harita" ? 0.9 : 0.7,
  }));
}
