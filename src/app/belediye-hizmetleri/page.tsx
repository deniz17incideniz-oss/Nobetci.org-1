import { DirectoryPage } from "@/components/DirectoryPage";
import { getInstitutions } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Belediye ve Arıza Hatları Rehberi", "Su, elektrik, doğalgaz, zabıta ve belediye hizmetleri için resmî kaynaklara ulaşmadan önce bilgileri doğrulayın.", "/belediye-hizmetleri");
export default function MunicipalPage() { return <DirectoryPage kind="municipal" institutions={getInstitutions()} />; }
