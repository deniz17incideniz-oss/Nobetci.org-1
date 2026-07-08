const trustItems = [
  ["Resmî kaynak yaklaşımı", "Rehber sayfaları kullanıcıyı e-Devlet, meslek birliği, 112 ve yerel kurumlar gibi yetkili kaynaklara yönlendirir."],
  ["Sahte kurum verisi yok", "API veya izinli veri kaynağı yoksa eczane, noter ya da hastane listesi uydurulmaz."],
  ["Güncellik uyarısı", "Nöbet çizelgeleri değişebileceği için işlem yapmadan önce resmî kaynaktan son kontrol önerilir."],
  ["Resmî doğrulama", "İşlem yapmadan veya yola çıkmadan önce bilginin resmî kaynaktan kontrol edilmesi önerilir."],
] as const;

export function TrustSection() {
  return (
    <section className="content-section trust-section" aria-labelledby="trust-title">
      <div className="section-heading">
        <span className="eyebrow">Şeffaf rehber yaklaşımı</span>
        <h2 id="trust-title">Bilgileri nasıl doğruluyoruz?</h2>
      </div>
      <div className="trust-grid">
        {trustItems.map(([title, description]) => (
          <article key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{description}</p></div></article>
        ))}
      </div>
    </section>
  );
}
