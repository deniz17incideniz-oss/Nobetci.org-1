const istanbulPharmacySources = [
  {
    label: "İstanbul Eczacı Odası’nda Doğrula",
    href: "https://www.istanbuleczaciodasi.org.tr/nobetci-eczane/",
  },
  {
    label: "e-Devlet TİTCK’ta Sorgula",
    href: "https://www.turkiye.gov.tr/saglik-titck-nobetci-eczane-sorgulama",
  },
];

export function IstanbulPharmacyNotice() {
  return (
    <div className="official-source-notice" role="note">
      <div>
        <strong>Resmî kaynak kontrolü</strong>
        <p>
          İstanbul nöbetçi eczane bilgileri için resmî kaynak entegrasyonu hazırlanıyor. Güncel nöbetçi eczane
          listesini İstanbul Eczacı Odası üzerinden doğrulayabilirsiniz.
        </p>
      </div>
      <div className="official-source-actions">
        {istanbulPharmacySources.map((source) => (
          <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
            {source.label}
          </a>
        ))}
      </div>
    </div>
  );
}
