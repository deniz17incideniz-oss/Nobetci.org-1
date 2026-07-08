import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Acil Servis Rehberi | 112 ve Hastane Bilgileri", "Acil durumlarda 112’yi arayın. Hastane ve acil servis bilgilerini doğrulamak için bilgilendirici acil servis rehberi.", "/acil-servis");
export default function HospitalPage() { return <DirectoryPage kind="hospital" institutions={getInstitutions()} />; }
