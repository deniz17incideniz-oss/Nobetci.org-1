const steps = [
  ["1", "Şehrini seç", "Büyükşehir rehberlerinden bulunduğun şehri aç."],
  ["2", "Kurum türünü seç", "Eczane, noter veya acil servis rehberine ilerle."],
  ["3", "Resmî kaynaktan doğrula", "Yola çıkmadan önce güncel bilgiyi yetkili kaynaktan kontrol et."],
] as const;

export function HowItWorks() {
  return (
    <section className="content-section how-section" aria-labelledby="how-title">
      <div className="section-heading">
        <span className="eyebrow">Üç kolay adım</span>
        <h2 id="how-title">Nasıl kullanılır?</h2>
      </div>
      <div className="steps-grid">
        {steps.map(([number, title, description]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
        ))}
      </div>
    </section>
  );
}
