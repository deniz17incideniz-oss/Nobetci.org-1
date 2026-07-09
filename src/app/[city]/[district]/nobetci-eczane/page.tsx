import { notFound } from "next/navigation";
import { DirectoryPage } from "@/components/DirectoryPage";
import { findSeoDistrict, getSeoDistrictParams } from "@/data/pharmacySeo";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getSeoDistrictParams().map((item) => ({ city: item.citySlug, district: item.districtSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; district: string }> }) {
  const { city, district } = await params;
  const found = findSeoDistrict(city, district);
  if (!found) return {};
  return createMetadata(
    `${found.district} Nöbetçi Eczaneler | ${found.city}`,
    `${found.district} nöbetçi eczaneler için güncel resmî kaynaklara ulaşın. Adres ve telefon bilgisini gitmeden önce doğrulayın.`,
    `/${city}/${district}/nobetci-eczane`,
  );
}

export default async function DistrictPharmacyPage({ params }: { params: Promise<{ city: string; district: string }> }) {
  const { city, district } = await params;
  const found = findSeoDistrict(city, district);
  if (!found) notFound();
  return <DirectoryPage kind="pharmacy" city={found.city} district={found.district} institutions={getInstitutions()} />;
}
