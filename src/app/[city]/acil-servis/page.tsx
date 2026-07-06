import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return [...new Set(getInstitutions().filter((item) => item.category === "hospital").map((item) => item.city))].map((city) => ({ city: slugifyTurkish(city) })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) return {}; return createMetadata(`${found.name} Acil Servis Haritası | En Yakın Hastane Acili`, `${found.name} genelindeki hastane acil servislerini adres, telefon ve yol tarifi bilgileriyle bulun.`, `/${city}/acil-servis`); }
export default async function CityHospitalPage({ params }: { params: Promise<{ city: string }> }) { const { city } = await params; const found = findCityBySlug(city); if (!found) notFound(); return <DirectoryPage kind="hospital" city={found.name} institutions={getInstitutions()} />; }
