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
    `${found.name} Nöbetçi Noter Rehberi | Resmî Kaynaktan Noter Bul`,
    `${found.name} nöbetçi noter bilgilerini Türkiye Noterler Birliği üzerinden doğrulayın. İşlem yapmadan önce güncel noter bilgisini kontrol edin.`,
    `/${city}/nobetci-noter`,
  );
}

export default async function CityNotaryPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const found = findCityBySlug(city);
  if (!found || !majorCities.includes(found.name as (typeof majorCities)[number])) notFound();
  return <DirectoryPage kind="notary" city={found.name} institutions={getInstitutions()} />;
}
