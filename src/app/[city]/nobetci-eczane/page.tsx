import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return [...new Set(getInstitutions().filter((item) => item.category === "pharmacy").map((item) => item.city))].map((city) => ({ city: slugifyTurkish(city) })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) return {}; return createMetadata(`${found.name} Nöbetçi Eczane Haritası | En Yakın Eczaneler`, `${found.name} nöbetçi eczane haritası ile ilçenizdeki eczaneleri kolayca bulun. Adres, telefon, yol tarifi ve güncelleme bilgilerini kontrol edin.`, `/${city}/nobetci-eczane`); }
export default async function CityPharmacyPage({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) notFound(); return <DirectoryPage kind="pharmacy" city={found.name} institutions={getInstitutions()} />; }
