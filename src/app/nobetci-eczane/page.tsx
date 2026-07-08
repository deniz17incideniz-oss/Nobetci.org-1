import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Eczane Rehberi | Şehre Göre Resmî Kaynaklar", "Şehrinizdeki nöbetçi eczane bilgilerine ulaşmak için resmî kaynaklara yönlendiren sade ve güvenilir nöbetçi eczane rehberi.", "/nobetci-eczane");
export default function PharmacyPage() { return <DirectoryPage kind="pharmacy" institutions={getInstitutions()} />; }
