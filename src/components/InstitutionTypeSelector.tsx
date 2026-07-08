const institutionTypes = [
  ["pharmacy", "💊", "Nöbetçi Eczane", "Şehrinizdeki nöbetçi eczane sorgusuna ulaşın.", "Eczane Ara", "/nobetci-eczane"],
  ["notary", "✒️", "Nöbetçi Noter", "Nöbetçi noter bilgisini resmî kaynaktan kontrol edin.", "Noter Bul", "/nobetci-noter"],
  ["hospital", "🚑", "Acil Servis", "Acil durumda 112 bilgilerine hızlıca ulaşın.", "112 Bilgileri", "/acil-servis"],
  ["municipal", "🏛️", "Belediye / Arıza Hatları", "Su, elektrik, doğalgaz ve zabıta yönlendirmeleri.", "Belediye Rehberi", "/belediye-hizmetleri"],
] as const;

export function InstitutionTypeSelector() {
  return (
    <section className="content-section" aria-labelledby="institution-type-title">
      <div className="section-heading">
        <span className="eyebrow">1. Adım</span>
        <h2 id="institution-type-title">Kurum Türünü Seç</h2>
      </div>
      <div className="institution-type-grid">
        {institutionTypes.map(([kind, icon, title, description, action, href]) => (
          <article className={`institution-type-card ${kind}`} key={kind}>
            <span aria-hidden="true">{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={href}>{action}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
