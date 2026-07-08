import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Acil Servis ve 112 | Resmî Bilgilendirme", "Acil durumda doğrudan 112 Acil Çağrı Merkezi’ni arayın.", "/acil-servis");
export default function HospitalPage() { return <DirectoryPage kind="hospital" institutions={getInstitutions()} />; }
