import { slugifyTurkish } from "@/data/cities";
import { majorCities } from "@/data/officialSources";

export function CitySelector({ title = "Şehrinizi Seçin", basePath = "nobetci-eczane" }: { title?: string; basePath?: string }) {
  return (
    <section className="content-section" aria-labelledby="city-selector-title">
      <div className="section-heading">
        <span className="eyebrow">Büyükşehir rehberleri</span>
        <h2 id="city-selector-title">{title}</h2>
      </div>
      <div className="city-chip-grid">
        {majorCities.map((city) => <a key={city} href={`/${slugifyTurkish(city)}/${basePath}`}>{city}</a>)}
      </div>
    </section>
  );
}
