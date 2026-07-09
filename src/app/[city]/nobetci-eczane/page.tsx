import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findCityBySlug } from "@/data/cities";
import { majorCities, pharmacyOfficialSources } from "@/data/officialSources";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return pharmacyOfficialSources.map((source) => ({ city: source.citySlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const found = findCityBySlug(city);
  if (!found || !majorCities.includes(found.name as (typeof majorCities)[number])) return {};
  return createMetadata(
    `${found.name} Nöbetçi Eczaneler | Güncel Resmî Kaynaklar`,
    `${found.name} nöbetçi eczaneler için güncel resmî kaynaklara hızlıca ulaşın. Eczane adresi, telefon ve nöbet bilgisini gitmeden önce doğrulayın.`,
    `/${city}/nobetci-eczane`,
  );
}

export default async function CityPharmacyPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const found = findCityBySlug(city);
  if (!found || !majorCities.includes(found.name as (typeof majorCities)[number])) notFound();
  return <DirectoryPage kind="pharmacy" city={found.name} institutions={getInstitutions()} />;
}
