import { cities } from "@/data/cities";
import { categoryLabels } from "@/lib/data";
import type { InstitutionCategory } from "@/types/institution";

export type DutyFilter = "all" | "today" | "tomorrow";

type FiltersProps = {
  selected: InstitutionCategory[];
  city: string;
  district: string;
  duty: DutyFilter;
  officialOnly: boolean;
  phoneOnly: boolean;
  nearbyOnly: boolean;
  onCategoriesChange: (categories: InstitutionCategory[]) => void;
  onCityChange: (city: string) => void;
  onDistrictChange: (district: string) => void;
  onDutyChange: (duty: DutyFilter) => void;
  onOfficialOnlyChange: (value: boolean) => void;
  onPhoneOnlyChange: (value: boolean) => void;
  onNearbyOnlyChange: (value: boolean) => void;
};

export function Filters(props: FiltersProps) {
  const categories = Object.entries(categoryLabels) as Array<[InstitutionCategory, string]>;
  const districts = cities.find((item) => item.name === props.city)?.districts ?? [];

  function toggle(category: InstitutionCategory) {
    props.onCategoriesChange(
      props.selected.includes(category)
        ? props.selected.filter((item) => item !== category)
        : [...props.selected, category],
    );
  }

  return (
    <div className="filters-panel" aria-label="Kurum filtreleri">
      <div className="location-filters">
        <label><span>İl</span><select value={props.city} onChange={(event) => props.onCityChange(event.target.value)}><option value="">Tüm iller</option>{cities.map((city) => <option key={city.slug} value={city.name}>{city.name}</option>)}</select></label>
        <label><span>İlçe</span><select value={props.district} disabled={!props.city || districts.length === 0} onChange={(event) => props.onDistrictChange(event.target.value)}><option value="">Tüm ilçeler</option>{districts.map((district) => <option key={district} value={district}>{district}</option>)}</select></label>
        <label><span>Nöbet zamanı</span><select value={props.duty} onChange={(event) => props.onDutyChange(event.target.value as DutyFilter)}><option value="all">Tümü</option><option value="today">Bugün</option><option value="tomorrow">Yarın</option></select></label>
      </div>
      <div className="filter-row" aria-label="Kurum türü filtreleri">
        <button className={props.selected.length === 0 ? "filter active" : "filter"} type="button" onClick={() => props.onCategoriesChange([])} aria-pressed={props.selected.length === 0}>Tümü</button>
        {categories.map(([category, label]) => <button className={props.selected.includes(category) ? "filter active" : "filter"} type="button" key={category} aria-pressed={props.selected.includes(category)} onClick={() => toggle(category)}>{label}</button>)}
      </div>
      <div className="toggle-row">
        <label><input type="checkbox" checked={props.nearbyOnly} onChange={(event) => props.onNearbyOnlyChange(event.target.checked)} />Yakınımdakiler</label>
        <label><input type="checkbox" checked={props.officialOnly} onChange={(event) => props.onOfficialOnlyChange(event.target.checked)} />Sadece resmî/canlı veri</label>
        <label><input type="checkbox" checked={props.phoneOnly} onChange={(event) => props.onPhoneOnlyChange(event.target.checked)} />Telefonu olanlar</label>
      </div>
    </div>
  );
}
