const guides = [
  ["Nöbetçi eczane nasıl bulunur?", "Şehrinizi seçin, resmî kaynak bağlantısını açın ve gitmeden önce adres/telefon bilgisini kontrol edin."],
  ["Nöbetçi noter ne zaman kontrol edilir?", "Hafta sonu noter işlemlerinden önce Türkiye Noterler Birliği duyurularını kontrol edin."],
  ["Acil durumda ne yapılmalı?", "Hayati risk veya acil yardım ihtiyacında doğrudan 112 Acil Çağrı Merkezi’ni arayın."],
] as const;

export function PopularGuides() {
  return (
    <section className="content-section" aria-labelledby="popular-guides-title">
      <div className="section-heading">
        <span className="eyebrow">Kısa rehberler</span>
        <h2 id="popular-guides-title">Sık kullanılan bilgiler</h2>
      </div>
      <div className="guide-card-grid">
        {guides.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>
  );
}
