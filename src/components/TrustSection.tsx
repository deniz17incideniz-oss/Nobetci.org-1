const trustItems = [
  ["Açık kaynak yaklaşımı", "Yalnızca halka açık ve kullanım koşulları incelenmiş kaynaklar kullanılır."],
  ["Kaynak bağlantısı", "Her canlı kurum kaydı, kullanıcıların kontrol edebilmesi için kaynak bağlantısıyla gösterilir."],
  ["Güncellik bilgisi", "Kayıtların son güncellenme tarihi kartlarda ve harita ayrıntılarında açıkça belirtilir."],
  ["Resmî doğrulama", "İşlem yapmadan veya yola çıkmadan önce bilginin resmî kaynaktan kontrol edilmesi önerilir."],
] as const;

export function TrustSection() {
  return (
    <section className="content-section trust-section" aria-labelledby="trust-title">
      <div className="section-heading">
        <span className="eyebrow">Şeffaf veri yaklaşımı</span>
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
