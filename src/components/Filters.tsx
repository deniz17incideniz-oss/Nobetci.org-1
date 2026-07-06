import { categoryLabels } from "@/lib/data";
import type { InstitutionCategory } from "@/types/institution";

type FiltersProps = {
  selected: InstitutionCategory[];
  onChange: (categories: InstitutionCategory[]) => void;
};

export function Filters({ selected, onChange }: FiltersProps) {
  const categories = Object.entries(categoryLabels) as Array<
    [InstitutionCategory, string]
  >;

  function toggle(category: InstitutionCategory) {
    onChange(
      selected.includes(category)
        ? selected.filter((item) => item !== category)
        : [...selected, category],
    );
  }

  return (
    <div className="filter-row" aria-label="Kurum türü filtreleri">
      {categories.map(([category, label]) => (
        <button
          className={selected.includes(category) ? "filter active" : "filter"}
          type="button"
          key={category}
          aria-pressed={selected.includes(category)}
          onClick={() => toggle(category)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

