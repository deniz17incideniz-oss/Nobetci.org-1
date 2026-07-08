import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("İletişim", "Nobetci.org için öneri, hata bildirimi ve veri güncelleme taleplerinizi iletin.", "/contact");

const reports = [
  { label: "Yanlış adres bildir", subject: "Yanlış adres bildirimi", body: "Kurum adı:\nİl / ilçe:\nDoğru adres veya açıklama:\nKaynak bağlantısı:" },
  { label: "Eksik kurum bildir", subject: "Eksik kurum bildirimi", body: "Kurum adı:\nKurum türü:\nİl / ilçe:\nAdres:\nResmî kaynak bağlantısı:" },
  { label: "Güncel olmayan nöbet bilgisi bildir", subject: "Güncel olmayan nöbet bilgisi", body: "Kurum adı:\nİl / ilçe:\nHatalı bilgi:\nGüncel bilgi ve resmî kaynak:" },
] as const;

function mailto(subject: string, body: string) {
  return `mailto:iletisim@nobetci.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPage() {
  return (
    <article className="container content-page">
      <span className="eyebrow">Bize ulaşın</span>
      <h1>İletişim</h1>
      <p className="lead">Hata bildirimi, kaynak önerisi veya yanlış bilgi bildirimi için bize yazabilirsiniz.</p>
      <section><h2>E-posta</h2><p><a className="contact-email" href="mailto:iletisim@nobetci.org">iletisim@nobetci.org</a></p></section>
      <section><h2>Hızlı bildirim</h2><div className="report-links">{reports.map((report) => <a key={report.label} href={mailto(report.subject, report.body)}>{report.label}<span aria-hidden="true">→</span></a>)}</div></section>
      <section className="warning-box"><h2>Önemli</h2><p>Bu iletişim adresi acil yardım hattı değildir. Acil durumlarda 112 Acil Çağrı Merkezi’ni arayın. Nöbet ve adres bilgilerini ilgili resmî kaynaktan doğrulayın.</p></section>
    </article>
  );
}
