import { HomeExplorer } from "@/components/HomeExplorer";
import { OfficialSourceBox } from "@/components/OfficialSourceBox";
import { PharmacyOfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { notarySourceUrl } from "@/data/officialSources";
import { directoryConfig, type DirectoryKind } from "@/lib/directory";
import type { Institution } from "@/types/institution";

export function DirectoryPage({ kind, institutions, city, district }: { kind: DirectoryKind; institutions: Institution[]; city?: string; district?: string }) {
  const config = directoryConfig[kind];
  const place = [city, district].filter(Boolean).join(" ");
  const heading = place && kind === "pharmacy" ? `${place} Nöbetçi Eczane Rehberi` : place ? `${place} ${config.heading}` : config.heading;
  const description = place
    ? `${place} ${config.label.toLocaleLowerCase("tr-TR")} bilgilerini resmî kaynaklardan doğrulayın. Bu sayfa bilgilendirme ve yönlendirme amacıyla hazırlanmıştır.`
    : config.description;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    description,
    numberOfItems: institutions.filter((item) => item.category === config.category && (!city || item.city === city) && (!district || item.district === district)).length,
  };
  const hasMatchingData = structuredData.numberOfItems > 0;
  const isPharmacyPage = kind === "pharmacy";
  const isCityPharmacyPage = isPharmacyPage && Boolean(city);
  const isNotaryPage = kind === "notary";
  const isHospitalPage = kind === "hospital";

  return (
    <>
      <section className="directory-hero"><div className="container"><span className="eyebrow">Nobetci.org rehberi</span><h1>{heading}</h1><p>{description}</p></div></section>
      {isCityPharmacyPage && <div className="container directory-notice"><PharmacyOfficialSourceNotice city={city} /></div>}
      {isNotaryPage && <div className="container directory-notice"><OfficialSourceBox message={`${place ? `${place} nöbetçi noter bilgileri` : "Nöbetçi noter bilgileri"} Türkiye Noterler Birliği tarafından duyurulur. İşlem yapmadan önce resmî kaynaktan doğrulama yapmanız önerilir.`} primaryLabel="Nöbetçi Noteri Resmî Kaynaktan Bul" primaryUrl={notarySourceUrl} /></div>}
      {isHospitalPage && <div className="container directory-notice"><OfficialSourceBox title="Acil durumda önce 112" message="Acil durumlarda doğrudan 112 Acil Çağrı Merkezi’ni arayın. Hastane ve acil servis bilgileri değişebilir; gitmeden önce resmî kaynaklardan doğrulama yapın." primaryLabel="112 Acil Bilgisi" primaryUrl="https://www.112.gov.tr/" /></div>}
      <div className="container"><HomeExplorer institutions={institutions} initialCategory={config.category} initialCity={city} initialDistrict={district} showIstanbulPharmacyNotice={!isCityPharmacyPage && isPharmacyPage} /></div>
      <div className="container"><SeoTextBlock title={`${place ? `${place} için ` : ""}${config.label} bilgileri`} emergency={config.emergency}><p>{description}</p>{isPharmacyPage && <div className="guide-stack"><section><h3>{city ?? "Şehrinizde"} nöbetçi eczane nasıl bulunur?</h3><p>{city ? `${city} nöbetçi eczane bilgilerini` : "Nöbetçi eczane bilgilerini"} resmî kaynaklardan kontrol edin. Bu sayfa doğrudan veri çekmez; doğru kaynağa hızlı ulaşmanız için hazırlanmıştır.</p></section><section><h3>Gitmeden önce adres ve telefon neden doğrulanmalı?</h3><p>Eczane nöbetleri, adres bilgileri ve telefon kayıtları gün içinde değişebilir. Yola çıkmadan önce resmî sayfadaki adres ve telefon bilgisini doğrulamak zaman kaybını azaltır.</p></section><section><h3>Haritadan yol tarifi nasıl alınır?</h3><p>Resmî kaynakta doğruladığınız eczane adını ve adresini harita uygulamanızda aratarak en güncel yol tarifi ve ulaşım süresini görebilirsiniz.</p></section><section><h3>Nöbetçi eczane bilgileri neden değişebilir?</h3><p>Nöbet planları acil durumlar, kurum duyuruları, çalışma saati düzenlemeleri veya bölgesel değişiklikler nedeniyle güncellenebilir. Son kontrol her zaman resmî kaynak üzerinden yapılmalıdır.</p></section></div>}{isNotaryPage && <div className="guide-stack"><section><h3>Nöbetçi noter nasıl bulunur?</h3><p>Türkiye Noterler Birliği’nin nöbetçi noter sorgulama sayfasını kullanarak şehir ve tarih bazlı güncel duyuruları kontrol edin.</p></section><section><h3>İşlem yapmadan önce neden doğrulama gerekir?</h3><p>Nöbetçi noter saatleri ve görevli noterler dönemsel olarak değişebilir. Gitmeden önce TNB sayfasındaki güncel bilgiyi doğrulayın.</p></section></div>}{isHospitalPage && <div className="guide-stack"><section><h3>Acil servise ne zaman gidilir?</h3><p>Hayati risk, ciddi yaralanma, göğüs ağrısı, bilinç kaybı, solunum güçlüğü ve benzeri acil durumlarda en yakın acil sağlık hizmetine başvurulmalıdır.</p></section><section><h3>112 ne zaman aranmalı?</h3><p>Hayati tehlike, trafik kazası, yangın, afet, güvenlik riski veya hızlı sağlık müdahalesi gereken durumlarda doğrudan 112 aranmalıdır.</p></section><section><h3>Hastane bilgileri neden doğrulanmalı?</h3><p>Acil servis kabul durumu, adres bilgisi ve hizmet kapsamı değişebilir. Gitmeden önce resmî kaynak veya hastane iletişim kanalları üzerinden kontrol yapın.</p></section><section><h3>Harita ve yol tarifi nasıl kullanılacak?</h3><p>Canlı veri kaynakları izinli şekilde bağlandığında harita ve yol tarifi özellikleri rehber sayfalarla birlikte daha görünür kullanılacaktır.</p></section></div>}{!hasMatchingData && !isPharmacyPage && !isNotaryPage && !isHospitalPage && <><p>{config.label} bilgileri il ve ilçeye göre değişir. Canlı veri kaynağı bağlandığında bu sayfadaki harita ve liste otomatik olarak güncellenecektir.</p><p>Güncel bilgi için ilgili resmî kurumun duyurularını ve yetkili kaynakları kontrol edin.</p></>}</SeoTextBlock></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
