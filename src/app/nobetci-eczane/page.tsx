import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Eczane Haritası | Bugünkü En Yakın Eczaneler", "Bulunduğunuz il ve ilçedeki nöbetçi eczaneleri haritada görün. Adres, telefon, yol tarifi ve kaynak bilgilerini kolayca kontrol edin.", "/nobetci-eczane");
export default function PharmacyPage() { return <DirectoryPage kind="pharmacy" institutions={getInstitutions()} />; }
