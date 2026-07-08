import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Gizlilik ve Kullanım Şartları", "Nobetci.org konum kullanımı, çerezler, üçüncü taraf hizmetler ve veri doğrulama koşulları.", "/privacy");

export default function PrivacyPage() {
  return <article className="container content-page legal-page"><span className="eyebrow">Yasal bilgiler</span><h1>Gizlilik ve Kullanım Şartları</h1><p className="lead">Bu sayfa konum, çerez ve resmî kaynak yönlendirmeleri hakkında kısa bilgi verir.</p><section><h2>Konum</h2><p>Konum izni verilirse yalnızca tarayıcıda kullanıcı deneyimi için kullanılır. Sunucuda saklanmaz ve satılmaz.</p></section><section><h2>Çerez ve reklam</h2><p>Zorunlu olmayan takip çerezi kullanılmaz. Analitik veya reklam hizmetleri eklenirse politika güncellenir.</p></section><section><h2>Harici bağlantılar</h2><p>e-Devlet, 112, noter birliği ve benzeri resmî kaynaklara giden bağlantılar üçüncü taraf sayfalardır. Bu sayfaların kendi koşulları geçerlidir.</p></section><section><h2>Sorumluluk</h2><p>Bu site resmî kurum değildir. Bilgileri işlem yapmadan önce resmî kaynaklardan doğrulayın. Acil durumlarda 112’yi arayın.</p></section><p className="updated">Son güncelleme: 8 Temmuz 2026</p></article>;
}
