import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Eczane Sorgula | Resmî Kaynaklar", "Şehrinizi seçin ve güncel nöbetçi eczane listesini resmî kaynaklardan kontrol edin.", "/nobetci-eczane");
export default function PharmacyPage() { return <DirectoryPage kind="pharmacy" institutions={getInstitutions()} />; }
