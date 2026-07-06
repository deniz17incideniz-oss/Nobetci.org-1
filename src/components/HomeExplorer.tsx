"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Filters } from "@/components/Filters";
import { InstitutionCard } from "@/components/InstitutionCard";
import { SearchBar } from "@/components/SearchBar";
import type { Institution, InstitutionCategory } from "@/types/institution";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => <div className="map-loading">Harita yükleniyor…</div>,
});

export function HomeExplorer({ institutions }: { institutions: Institution[] }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<InstitutionCategory[]>([]);
  const [focused, setFocused] = useState<Institution | null>(null);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [locationMessage, setLocationMessage] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("tr-TR");
    return institutions.filter((institution) => {
      const categoryMatch = categories.length === 0 || categories.includes(institution.category);
      const text = `${institution.name} ${institution.city} ${institution.district} ${institution.address}`.toLocaleLowerCase("tr-TR");
      return categoryMatch && (!normalized || text.includes(normalized));
    });
  }, [categories, institutions, query]);

  function locateUser() {
    if (!navigator.geolocation) {
      setLocationMessage("Tarayıcınız konum özelliğini desteklemiyor.");
      return;
    }
    setLocationMessage("Konum alınıyor…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserPosition([coords.latitude, coords.longitude]);
        setFocused(null);
        setLocationMessage("Konumunuz haritada gösterildi.");
      },
      () => setLocationMessage("Konum izni verilmedi veya konum alınamadı."),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  return (
    <section id="harita" className="explorer" aria-label="Nöbetçi kurum haritası">
      <div className="search-panel">
        <SearchBar value={query} onChange={setQuery} />
        <button className="location-button" type="button" onClick={locateUser}>Konumumu göster</button>
      </div>
      {locationMessage && <p className="location-message" role="status">{locationMessage}</p>}
      <Filters selected={categories} onChange={setCategories} />
      <div className="sample-notice">
        MVP görünümündeki bazı kayıtlar örnek veridir. Gitmeden önce kurumun resmi kaynağından doğrulayın.
      </div>
      <div className="explorer-grid">
        <div className="map-shell">
          <MapView institutions={filtered} focused={focused} userPosition={userPosition} />
        </div>
        <aside className="results-panel" aria-label="Kurum sonuçları">
          <div className="results-heading">
            <h2>Kurumlar</h2>
            <span>{filtered.length} sonuç</span>
          </div>
          <div className="results-list">
            {filtered.length > 0 ? (
              filtered.map((institution) => (
                <InstitutionCard key={institution.id} institution={institution} onShow={setFocused} />
              ))
            ) : (
              <div className="empty-state">
                <strong>Sonuç bulunamadı</strong>
                <p>Arama metnini veya kurum türü filtrelerini değiştirin.</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
