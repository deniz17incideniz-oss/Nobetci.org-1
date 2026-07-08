import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Eczane Rehberi | Şehre Göre Resmî Kaynaklar", "Şehrinizdeki nöbetçi eczane bilgilerini resmî kaynaklardan kontrol edin. Eczane adresi, telefon ve nöbet bilgilerini gitmeden önce doğrulayın.", "/nobetci-eczane");
export default function PharmacyPage() { return <DirectoryPage kind="pharmacy" institutions={getInstitutions()} />; }
