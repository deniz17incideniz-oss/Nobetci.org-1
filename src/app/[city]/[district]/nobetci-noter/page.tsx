import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return getInstitutions().filter((item) => item.category === "notary").map((item) => ({ city: slugifyTurkish(item.city), district: slugifyTurkish(item.district) })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string; district: string }> }) { const { city, district } = await params; const found = findCityBySlug(city); const districtName = found?.districts.find((item) => slugifyTurkish(item) === district); if (!found || !districtName) return {}; return createMetadata(`${found.name} ${districtName} Nöbetçi Noter | Güncel Liste`, `${districtName} nöbetçi noterlerini adres, yol tarifi ve resmi kaynak bilgileriyle inceleyin.`, `/${city}/${district}/nobetci-noter`); }
export default async function DistrictNotaryPage({ params }: { params: Promise<{ city: string; district: string }> }) { const { city, district } = await params; const found = findCityBySlug(city); const districtName = found?.districts.find((item) => slugifyTurkish(item) === district); if (!found || !districtName) notFound(); return <DirectoryPage kind="notary" city={found.name} district={districtName} institutions={getInstitutions()} />; }
