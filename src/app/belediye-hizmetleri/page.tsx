import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Belediye ve Arıza Hatları", "Su, elektrik, doğalgaz ve zabıta hizmetleri için şehrinizin resmî kurumlarını kontrol edin.", "/belediye-hizmetleri");
export default function MunicipalPage() { return <DirectoryPage kind="municipal" institutions={getInstitutions()} />; }
