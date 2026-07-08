import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Noter Rehberi | Resmî Kaynaktan Noter Bul", "Nöbetçi noter bilgilerine Türkiye Noterler Birliği resmî sorgu ekranı üzerinden ulaşın. İşlem yapmadan önce güncel bilgileri doğrulayın.", "/nobetci-noter");
export default function NotaryPage() { return <DirectoryPage kind="notary" institutions={getInstitutions()} />; }
