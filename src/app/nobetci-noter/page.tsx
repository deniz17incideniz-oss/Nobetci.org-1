import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Noter Sorgula | Resmî Kaynak", "Güncel nöbetçi noter bilgisini Türkiye Noterler Birliği üzerinden kontrol edin.", "/nobetci-noter");
export default function NotaryPage() { return <DirectoryPage kind="notary" institutions={getInstitutions()} />; }
