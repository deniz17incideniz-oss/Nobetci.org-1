import { HomeExplorer } from "@/components/HomeExplorer";
import { getInstitutions } from "@/lib/data";

export default function HomePage() {
  const institutions = getInstitutions();

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Türkiye genelinde hızlı arama</span>
          <h1>Türkiye Nöbetçi Kurum Haritası</h1>
          <p>Eczane, noter, acil servis ve diğer nöbetçi kurumları harita üzerinde kolayca bulun.</p>
          <a className="hero-link" href="#harita">Haritayı incele <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <div className="container">
        <HomeExplorer institutions={institutions} />
      </div>
    </>
  );
}

