import type { OfficialSource } from "@/data/officialSources";

const statusLabels: Record<OfficialSource["status"], string> = {
  verified: "Resmî kaynak",
  general_official: "Genel resmî sorgu",
  needs_review: "İnceleme bekliyor",
};

export function OfficialSourceCard({ source }: { source: OfficialSource }) {
  return (
    <article className="official-source-card">
      <span className={`source-status ${source.status}`}>{statusLabels[source.status]}</span>
      <h3>{source.title}</h3>
      <p>{source.description}</p>
      <strong>{source.sourceName}</strong>
      <div className="official-source-card-actions">
        <a href={source.sourceUrl} target="_blank" rel="noreferrer">Resmî Kaynağa Git</a>
        {source.secondarySourceName && source.secondarySourceUrl && source.secondarySourceUrl !== source.sourceUrl && (
          <a href={source.secondarySourceUrl} target="_blank" rel="noreferrer">{source.secondarySourceName}</a>
        )}
      </div>
    </article>
  );
}
