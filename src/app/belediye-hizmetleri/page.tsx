import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Nöbetçi Belediye Hizmetleri | Arıza ve Acil Destek", "Zabıta, su, doğalgaz, elektrik arıza ve veterinerlik destek hizmetlerini şehir ve ilçeye göre bulun.", "/belediye-hizmetleri");
export default function MunicipalPage() { return <DirectoryPage kind="municipal" institutions={getInstitutions()} />; }
