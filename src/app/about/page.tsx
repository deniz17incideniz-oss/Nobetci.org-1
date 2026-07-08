import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Hakkımızda", "Nobetci.org'un amacı, kapsadığı kurumlar, veri güncelleme yaklaşımı ve doğrulama ilkeleri.", "/about");

export default function AboutPage() {
  return <article className="container content-page"><span className="eyebrow">Hakkımızda</span><h1>Hakkımızda</h1><p className="lead">Nobetci.org, nöbetçi kurum bilgileri için kullanıcıyı resmî kaynaklara yönlendiren bağımsız bir rehberdir.</p><section><h2>Ne yapar?</h2><p>Eczane, noter, acil servis ve belediye hizmetleri için hızlı yönlendirme butonları sunar. Site resmî kurum değildir ve sahte kurum listesi yayınlamaz.</p></section><section><h2>Doğrulama</h2><p>Nöbet bilgileri değişebilir. İşlem yapmadan veya yola çıkmadan önce bilgiyi ilgili resmî kaynaktan kontrol edin.</p></section><section className="warning-box"><h2>Acil durum</h2><p>Hayati risk, yangın, afet veya güvenlik durumunda doğrudan 112 Acil Çağrı Merkezi’ni arayın.</p></section></article>;
}
