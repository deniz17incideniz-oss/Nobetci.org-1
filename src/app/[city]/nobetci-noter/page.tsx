import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return [...new Set(getInstitutions().filter((item) => item.category === "notary").map((item) => item.city))].map((city) => ({ city: slugifyTurkish(city) })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) return {}; return createMetadata(`${found.name} Nöbetçi Noter Bul | Güncel Noter Listesi`, `${found.name} nöbetçi noterlerini ilçe, adres, yol tarifi ve resmi kaynak bilgileriyle inceleyin.`, `/${city}/nobetci-noter`); }
export default async function CityNotaryPage({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) notFound(); return <DirectoryPage kind="notary" city={found.name} institutions={getInstitutions()} />; }
