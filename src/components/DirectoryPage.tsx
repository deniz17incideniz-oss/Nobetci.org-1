import { HomeExplorer } from "@/components/HomeExplorer";
import { IstanbulPharmacyNotice } from "@/components/OfficialSourceNotice";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { directoryConfig, type DirectoryKind } from "@/lib/directory";
import type { Institution } from "@/types/institution";

export function DirectoryPage({ kind, institutions, city, district }: { kind: DirectoryKind; institutions: Institution[]; city?: string; district?: string }) {
  const config = directoryConfig[kind];
  const place = [city, district].filter(Boolean).join(" ");
  const heading = place ? `${place} ${config.heading}` : config.heading;
  const description = place
    ? `${place} ${config.label.toLocaleLowerCase("tr-TR")} haritası ile bölgenizdeki kurumları kolayca bulun. Adres, telefon, yol tarifi, kaynak ve güncelleme bilgilerini kontrol edin.`
    : config.description;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    description,
    numberOfItems: institutions.filter((item) => item.category === config.category && (!city || item.city === city) && (!district || item.district === district)).length,
  };
  const hasMatchingData = structuredData.numberOfItems > 0;
  const isIstanbulPharmacyPage = kind === "pharmacy" && city === "İstanbul";

  return (
    <>
      <section className="directory-hero"><div className="container"><span className="eyebrow">Nobetci.org rehberi</span><h1>{heading}</h1><p>{description}</p></div></section>
      {isIstanbulPharmacyPage && <div className="container directory-notice"><IstanbulPharmacyNotice /></div>}
      <div className="container"><HomeExplorer institutions={institutions} initialCategory={config.category} initialCity={city} initialDistrict={district} showIstanbulPharmacyNotice={!isIstanbulPharmacyPage} /></div>
      <div className="container"><SeoTextBlock title={`${place ? `${place} için ` : ""}${config.label} bilgileri`} emergency={config.emergency}><p>{description}</p>{isIstanbulPharmacyPage && <div className="guide-stack"><section><h3>İstanbul’da nöbetçi eczane nasıl bulunur?</h3><p>İstanbul’da nöbetçi eczane ararken ilçe bilgisini seçerek aramayı daraltın ve güncel listeyi İstanbul Eczacı Odası veya e-Devlet TİTCK sayfasından kontrol edin.</p></section><section><h3>Gitmeden önce adres ve telefon neden doğrulanmalı?</h3><p>Eczane nöbetleri, adres bilgileri ve telefon kayıtları gün içinde değişebilir. Yola çıkmadan önce resmî sayfadaki adres ve telefon bilgisini doğrulamak zaman kaybını azaltır.</p></section><section><h3>Haritadan yol tarifi nasıl alınır?</h3><p>Resmî kaynakta doğruladığınız eczane adını ve adresini harita uygulamanızda aratarak en güncel yol tarifi ve ulaşım süresini görebilirsiniz.</p></section><section><h3>Nöbetçi eczane bilgileri neden değişebilir?</h3><p>Nöbet planları acil durumlar, kurum duyuruları, çalışma saati düzenlemeleri veya bölgesel değişiklikler nedeniyle güncellenebilir. Bu yüzden son kontrol her zaman resmî kaynak üzerinden yapılmalıdır.</p></section></div>}{!hasMatchingData && !isIstanbulPharmacyPage && <><p>{config.label} bilgileri il ve ilçeye göre değişir. Canlı veri kaynağı bağlandığında bu sayfadaki harita ve liste otomatik olarak güncellenecektir.</p><p>Güncel bilgi için ilgili resmî kurumun duyurularını, il sağlık müdürlüğünü, eczacı odasını veya Türkiye Noterler Birliği gibi yetkili kaynakları kontrol edin.</p></>}</SeoTextBlock></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
