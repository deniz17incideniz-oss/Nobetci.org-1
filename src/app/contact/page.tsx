import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("İletişim", "Nobetci.org için öneri, hata bildirimi ve veri güncelleme taleplerinizi iletin.", "/contact");

const reports = ["Yanlış adres bildir", "Eksik kurum bildir", "Güncel olmayan nöbet bilgisi bildir"];

export default function ContactPage() {
  return <article className="container content-page"><span className="eyebrow">Bize ulaşın</span><h1>İletişim</h1><p className="lead">Nobetci.org hakkında öneri, hata bildirimi veya veri güncelleme talepleriniz için bizimle iletişime geçebilirsiniz.</p><section><h2>E-posta</h2><p><a className="contact-email" href="mailto:iletisim@nobetci.org">iletisim@nobetci.org</a></p><p className="placeholder-note">Bu adres MVP aşamasında iletişim placeholder’ıdır; production öncesinde çalışan posta kutusuna bağlanmalıdır.</p></section><section><h2>Hata bildirimi</h2><div className="report-links">{reports.map((report) => <a key={report} href={`mailto:iletisim@nobetci.org?subject=${encodeURIComponent(report)}`}>{report}<span aria-hidden="true">→</span></a>)}</div></section><section className="warning-box"><h2>Önemli</h2><p>Bu iletişim adresi acil yardım hattı değildir. Acil durumlarda 112 Acil Çağrı Merkezi’ni arayın. Nöbet ve adres bilgilerini ilgili resmi kaynaktan doğrulayın.</p></section></article>;
}
