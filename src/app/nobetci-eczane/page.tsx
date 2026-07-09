import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Eczaneler | Şehre Göre Resmî Sorgulama Rehberi", "Türkiye’de nöbetçi eczaneler için şehir seçin, güncel adres ve telefon bilgilerini resmî kaynaklardan kontrol edin.", "/nobetci-eczane");
export default function PharmacyPage() { return <DirectoryPage kind="pharmacy" institutions={getInstitutions()} />; }
