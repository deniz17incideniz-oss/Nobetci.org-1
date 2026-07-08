import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Noter Rehberi | Resmî Kaynaktan Noter Bul", "Nöbetçi noter bilgilerini resmî kaynaktan doğrulamak için sade yönlendirme rehberi. İşlem yapmadan önce güncel noter bilgilerini kontrol edin.", "/nobetci-noter");
export default function NotaryPage() { return <DirectoryPage kind="notary" institutions={getInstitutions()} />; }
