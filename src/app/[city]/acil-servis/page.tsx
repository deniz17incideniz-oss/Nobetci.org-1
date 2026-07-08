import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug, slugifyTurkish } from "@/data/cities";
import { majorCities } from "@/data/officialSources";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return majorCities.map((city) => ({ city: slugifyTurkish(city) }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const found = findCityBySlug(city);
  if (!found || !majorCities.includes(found.name as (typeof majorCities)[number])) return {};
  return createMetadata(
    `${found.name} Acil Servis Rehberi | 112 ve Hastane Bilgileri`,
    `${found.name} acil servis bilgilerini doğrulamak için rehber. Acil durumlarda doğrudan 112 Acil Çağrı Merkezi’ni arayın.`,
    `/${city}/acil-servis`,
  );
}

export default async function CityHospitalPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const found = findCityBySlug(city);
  if (!found || !majorCities.includes(found.name as (typeof majorCities)[number])) notFound();
  return <DirectoryPage kind="hospital" city={found.name} institutions={getInstitutions()} />;
}
