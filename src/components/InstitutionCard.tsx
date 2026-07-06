import { CategoryBadge } from "@/components/CategoryBadge";
import { TrustBadge } from "@/components/TrustBadge";
import { getDirectionsUrl } from "@/lib/maps";
import type { Institution } from "@/types/institution";

type InstitutionCardProps = {
  institution: Institution;
  distance?: number;
  onShow: (institution: Institution) => void;
};

export function InstitutionCard({ institution, distance, onShow }: InstitutionCardProps) {
  const isSample = institution.confidence === "sample";
  return (
    <article className="institution-card">
      <div className="card-topline"><CategoryBadge category={institution.category} /><TrustBadge confidence={institution.confidence} /></div>
      <h3>{institution.name}</h3>
      <p className="location-line">{institution.city} / {institution.district}{distance != null && <span> · {distance.toFixed(1)} km</span>}</p>
      <p className="address">{institution.address}</p>
      <dl className="institution-meta">
        <div><dt>Nöbet</dt><dd>{institution.dutyDate ?? "Resmi kaynaktan doğrulayın"}</dd></div>
        <div><dt>Güncelleme</dt><dd>{new Date(institution.lastUpdated).toLocaleDateString("tr-TR")}</dd></div>
      </dl>
      {institution.phone && <p className="phone-line">{isSample ? "Demo telefon: " : "Telefon: "}<strong>{institution.phone}</strong></p>}
      <div className="card-actions primary-actions">
        <button type="button" onClick={() => onShow(institution)} aria-label={`${institution.name} kurumunu haritada göster`}>Haritada göster</button>
        <a href={getDirectionsUrl(institution)} target="_blank" rel="noreferrer" aria-label={`${institution.name} için yol tarifi al`}>Yol tarifi</a>
        {institution.phone && !isSample ? <a className="call-action" href={`tel:${institution.phone.replace(/\s/g, "")}`}>Ara</a> : <span className="disabled-action" title="Demo telefonlar aranamaz">Ara</span>}
      </div>
      {institution.sourceUrl ? <a className="source-action" href={institution.sourceUrl} target="_blank" rel="noreferrer">Resmi kaynaktan doğrula <span aria-hidden="true">↗</span></a> : <span className="source-action disabled">Kaynak bekleniyor</span>}
    </article>
  );
}
