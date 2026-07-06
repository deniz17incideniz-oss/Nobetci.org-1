import { confidenceLabels } from "@/lib/data";
import type { Institution } from "@/types/institution";

export function TrustBadge({ confidence }: { confidence: Institution["confidence"] }) {
  return <span className={`trust-badge ${confidence}`}>{confidenceLabels[confidence]}</span>;
}
