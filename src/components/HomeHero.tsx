export function HomeHero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <span className="eyebrow">Resmî kaynaklara hızlı yönlendirme</span>
        <h1>Türkiye’de Nöbetçi Kurumları Kolayca Bul</h1>
        <p>Nöbetçi eczane, nöbetçi noter, acil servis ve belediye hizmetleri için resmî kaynaklara hızlıca ulaşın.</p>
        <p className="hero-secondary">Şehrinizi ve kurum türünü seçin, güncel bilgileri resmî kaynaklardan doğrulayın.</p>
        <div className="hero-actions">
          <a href="/nobetci-eczane">Nöbetçi Eczane Ara</a>
          <a href="/nobetci-noter">Nöbetçi Noter Bul</a>
          <a href="/acil-servis">Acil Servis Bilgileri</a>
        </div>
      </div>
    </section>
  );
}
