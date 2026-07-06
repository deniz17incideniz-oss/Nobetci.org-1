import { categoryLabels } from "@/lib/data";
import type { Institution } from "@/types/institution";

type InstitutionCardProps = {
  institution: Institution;
  onShow: (institution: Institution) => void;
};

export function InstitutionCard({ institution, onShow }: InstitutionCardProps) {
  const directionsUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=;${institution.latitude},${institution.longitude}`;

  return (
    <article className="institution-card">
      <div className="card-topline">
        <span className={`category-tag ${institution.category}`}>
          {categoryLabels[institution.category]}
        </span>
        <span>{institution.city} / {institution.district}</span>
      </div>
      <h3>{institution.name}</h3>
      <p className="address">{institution.address}</p>
      {institution.phone && <a className="phone" href={`tel:${institution.phone.replace(/\s/g, "")}`}>{institution.phone}</a>}
      <div className="card-actions">
        <button type="button" onClick={() => onShow(institution)}>Haritada göster</button>
        <a href={directionsUrl} target="_blank" rel="noreferrer">Yol tarifi al</a>
      </div>
    </article>
  );
}

