const institutionTypes = [
  ["pharmacy", "💊", "Nöbetçi Eczane", "Şehrinizdeki nöbetçi eczane bilgilerini resmî kaynaklardan kontrol edin.", "Eczane Rehberine Git", "/nobetci-eczane"],
  ["notary", "✒️", "Nöbetçi Noter", "Hafta sonu veya nöbetçi noter bilgilerini resmî kaynaktan doğrulayın.", "Noter Rehberine Git", "/nobetci-noter"],
  ["hospital", "🚑", "Acil Servis", "Acil durumlarda 112’yi arayın; hastane ve acil servis bilgilerini doğrulayın.", "Acil Servis Rehberi", "/acil-servis"],
  ["municipal", "🏛️", "Belediye ve Arıza Hatları", "Su, elektrik, doğalgaz ve belediye hizmetleri için resmî kurumlara ulaşın.", "Belediye Rehberi", "/belediye-hizmetleri"],
] as const;

export function InstitutionTypeSelector() {
  return (
    <section className="content-section" aria-labelledby="institution-type-title">
      <div className="section-heading">
        <span className="eyebrow">Kurum türü seçimi</span>
        <h2 id="institution-type-title">Hangi bilgiye ulaşmak istiyorsunuz?</h2>
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
