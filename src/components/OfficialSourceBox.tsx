import type { OfficialSource } from "@/data/officialSources";

type OfficialSourceBoxProps = {
  title?: string;
  message: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  source?: OfficialSource;
};

export function OfficialSourceBox({ title = "Resmî kaynak kontrolü", message, primaryLabel, primaryUrl, secondaryLabel, secondaryUrl, source }: OfficialSourceBoxProps) {
  return (
    <div className="official-source-notice" role="note">
      <div>
        <strong>{title}</strong>
        <p>{message}</p>
        {source?.status === "needs_review" && <small>Bu şehir için özel kaynak URL’si inceleme bekliyor; güvenli yönlendirme olarak e-Devlet TİTCK kullanılır.</small>}
      </div>
      <div className="official-source-actions">
        <a href={primaryUrl} target="_blank" rel="noreferrer">{primaryLabel}</a>
        {secondaryLabel && secondaryUrl && primaryUrl !== secondaryUrl && <a href={secondaryUrl} target="_blank" rel="noreferrer">{secondaryLabel}</a>}
      </div>
    </div>
  );
}
