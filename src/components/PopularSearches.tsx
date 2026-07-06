import Link from "next/link";

const searches = [
  ["İstanbul nöbetçi eczane", "/istanbul/nobetci-eczane"],
  ["Ankara nöbetçi eczane", "/ankara/nobetci-eczane"],
  ["İzmir nöbetçi eczane", "/izmir/nobetci-eczane"],
  ["Bursa nöbetçi eczane", "/bursa/nobetci-eczane"],
  ["Antalya nöbetçi eczane", "/antalya/nobetci-eczane"],
  ["İstanbul nöbetçi noter", "/istanbul/nobetci-noter"],
  ["Ankara nöbetçi noter", "/ankara/nobetci-noter"],
  ["En yakın acil servis", "/acil-servis"],
  ["Yakınımdaki nöbetçiler", "/harita#harita"],
] as const;

export function PopularSearches() {
  return (
    <section className="content-section" aria-labelledby="popular-title">
      <div className="section-heading">
        <span className="eyebrow">Hızlı bağlantılar</span>
        <h2 id="popular-title">Popüler aramalar</h2>
      </div>
      <div className="popular-links">
        {searches.map(([label, href]) => <Link key={href + label} href={href}>{label}<span aria-hidden="true">→</span></Link>)}
      </div>
    </section>
  );
}
