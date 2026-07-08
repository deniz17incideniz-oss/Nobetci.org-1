import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Acil Servis ve 112 Rehberi | Resmî Bilgilendirme", "Acil durumlarda 112’yi arayın. Acil servis ve hastane bilgilerini doğrulamak için bilgilendirici rehberi inceleyin.", "/acil-servis");
export default function HospitalPage() { return <DirectoryPage kind="hospital" institutions={getInstitutions()} />; }
