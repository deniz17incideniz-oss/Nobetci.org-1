import { categoryLabels } from "@/lib/data";
import type { InstitutionCategory } from "@/types/institution";

export function CategoryBadge({ category }: { category: InstitutionCategory }) {
  return <span className={`category-tag ${category}`}>{categoryLabels[category]}</span>;
}
