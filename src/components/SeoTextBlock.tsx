export function SeoTextBlock({ title, children, emergency = false }: { title: string; children: React.ReactNode; emergency?: boolean }) {
  return (
    <section className="seo-text-block">
      <h2>{title}</h2>
      <div>{children}</div>
      <p className="info-warning">Bu platform bilgilendirme amaçlıdır. Nöbet bilgileri değişebilir. İşlem yapmadan önce resmi kaynaklardan doğrulama yapınız.</p>
      {emergency && <p className="emergency-warning">Acil durumlarda doğrudan 112 Acil Çağrı Merkezi’ni arayın.</p>}
    </section>
  );
}
