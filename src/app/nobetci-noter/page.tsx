import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Noter Bul | Hafta Sonu Açık Noterler", "Nöbetçi noterleri şehir ve ilçeye göre arayın. Adres, çalışma bilgisi, yol tarifi ve resmi kaynak bağlantılarına ulaşın.", "/nobetci-noter");
export default function NotaryPage() { return <DirectoryPage kind="notary" institutions={getInstitutions()} />; }
