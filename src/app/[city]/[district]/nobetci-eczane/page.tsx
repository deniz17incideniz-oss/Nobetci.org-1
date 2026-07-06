import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return getInstitutions().filter((item) => item.category === "pharmacy").map((item) => ({ city: slugifyTurkish(item.city), district: slugifyTurkish(item.district) })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string; district: string }> }) { const { city, district } = await params; const found = findCityBySlug(city); const districtName = found?.districts.find((item) => slugifyTurkish(item) === district); if (!found || !districtName) return {}; return createMetadata(`${found.name} ${districtName} Nöbetçi Eczane | Harita ve Yol Tarifi`, `${districtName} nöbetçi eczanelerini adres, telefon, yol tarifi ve kaynak bilgileriyle inceleyin.`, `/${city}/${district}/nobetci-eczane`); }
export default async function DistrictPharmacyPage({ params }: { params: Promise<{ city: string; district: string }> }) { const { city, district } = await params; const found = findCityBySlug(city); const districtName = found?.districts.find((item) => slugifyTurkish(item) === district); if (!found || !districtName) notFound(); return <DirectoryPage kind="pharmacy" city={found.name} district={districtName} institutions={getInstitutions()} />; }
