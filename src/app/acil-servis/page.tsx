import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Acil Servis Haritası | Size En Yakın Hastane Acilleri", "Türkiye genelindeki hastane acil servislerini harita üzerinden bulun. Adres, telefon ve yol tarifi bilgileriyle hızlıca ulaşın.", "/acil-servis");
export default function HospitalPage() { return <DirectoryPage kind="hospital" institutions={getInstitutions()} />; }
