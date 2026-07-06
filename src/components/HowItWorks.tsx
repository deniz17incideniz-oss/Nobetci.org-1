const steps = [
  ["1", "İl ve ilçenizi seçin", "81 il arasından bölgenizi belirleyin."],
  ["2", "Kurum türünü belirleyin", "Eczane, noter, hastane veya acil hizmet seçin."],
  ["3", "Yol tarifi alın", "Adresi doğrulayın ve haritadan rotanızı açın."],
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
