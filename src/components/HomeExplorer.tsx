"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { EmptyState } from "@/components/EmptyState";
import { Filters, type DutyFilter } from "@/components/Filters";
import { InstitutionCard } from "@/components/InstitutionCard";
import { LoadingState } from "@/components/LoadingState";
import { PharmacyOfficialSourceNotice } from "@/components/OfficialSourceNotice";
import { SearchBar } from "@/components/SearchBar";
import { getPharmacyOfficialSource } from "@/data/officialSources";
import { categoryLabels } from "@/lib/data";
import { distanceInKm } from "@/lib/distance";
import type { Institution, InstitutionCategory } from "@/types/institution";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false, loading: () => <LoadingState /> });

const categoryKeywords: Record<InstitutionCategory, string> = {
  pharmacy: "eczane nöbetçi eczane ilaç",
  notary: "noter nöbetçi noter hukuk",
  hospital: "hastane acil servis sağlık",
  municipal: "belediye zabıta su arıza doğalgaz elektrik veteriner sokak hayvanları",
  emergency: "acil polis jandarma itfaiye afad 112",
};

type HomeExplorerProps = {
  institutions: Institution[];
  initialCategory?: InstitutionCategory;
  initialCity?: string;
  initialDistrict?: string;
  showIstanbulPharmacyNotice?: boolean;
};

export function HomeExplorer({ institutions, initialCategory, initialCity = "", initialDistrict = "", showIstanbulPharmacyNotice = true }: HomeExplorerProps) {
  const hasSampleData = institutions.some((institution) => institution.confidence === "sample");
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<InstitutionCategory[]>(initialCategory ? [initialCategory] : []);
  const [city, setCity] = useState(initialCity);
  const [district, setDistrict] = useState(initialDistrict);
  const [duty, setDuty] = useState<DutyFilter>("all");
  const [officialOnly, setOfficialOnly] = useState(false);
  const [phoneOnly, setPhoneOnly] = useState(false);
  const [nearbyOnly, setNearbyOnly] = useState(false);
  const [focused, setFocused] = useState<Institution | null>(null);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [locationMessage, setLocationMessage] = useState("");

  const results = useMemo(() => {
    const normalized = query
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/\b(nöbetçi|nobetci|yakınımdaki|yakindaki|en yakın|bugünkü)\b/g, "")
      .trim();
    return institutions
      .map((institution) => {
        const distance = userPosition && institution.latitude != null && institution.longitude != null
          ? distanceInKm(userPosition, [institution.latitude, institution.longitude])
          : undefined;
        return { institution, distance };
      })
      .filter(({ institution, distance }) => {
        const text = `${institution.name} ${institution.city} ${institution.district} ${institution.address} ${categoryLabels[institution.category]} ${categoryKeywords[institution.category]}`.toLocaleLowerCase("tr-TR");
        return (
          (categories.length === 0 || categories.includes(institution.category)) &&
          (!city || institution.city === city) &&
          (!district || institution.district === district) &&
          (duty === "all" || institution.dutyPeriod === duty || institution.dutyPeriod === "always") &&
          (!officialOnly || institution.confidence === "official" || institution.confidence === "verified") &&
          (!phoneOnly || Boolean(institution.phone)) &&
          (!nearbyOnly || (distance != null && distance <= 100)) &&
          (!normalized || text.includes(normalized))
        );
      })
      .sort((a, b) => (a.distance ?? Number.MAX_VALUE) - (b.distance ?? Number.MAX_VALUE));
  }, [categories, city, district, duty, institutions, nearbyOnly, officialOnly, phoneOnly, query, userPosition]);

  const filtered = results.map(({ institution }) => institution);
  const pharmacySource = getPharmacyOfficialSource(city);
  const isOfficialPharmacyGuideMode = Boolean(pharmacySource) && (categories.length === 0 || categories.includes("pharmacy"));
  const emptyStateMessage = isOfficialPharmacyGuideMode
    ? `${city} için canlı nöbetçi eczane verisi henüz doğrudan bağlanmadı. Güncel listeyi resmî kaynaklardan kontrol edebilirsiniz.`
    : undefined;

  function locateUser(enableNearby = false) {
    if (!navigator.geolocation) {
      setLocationMessage("Tarayıcınız konum özelliğini desteklemiyor. İl ve ilçe seçerek arama yapabilirsiniz.");
      return;
    }
    setLocationMessage("Konum alınıyor…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserPosition([coords.latitude, coords.longitude]);
        setFocused(null);
        if (enableNearby) setNearbyOnly(true);
        setLocationMessage("Yakın sonuçlar mesafeye göre sıralandı.");
      },
      () => {
        setNearbyOnly(false);
        setLocationMessage("Konum izni verilmedi. İl ve ilçe seçerek arama yapabilirsiniz.");
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }

  function handleCityChange(value: string) {
    setCity(value);
    setDistrict("");
    const firstMatch = institutions.find((institution) => institution.city === value);
    setFocused(firstMatch ?? null);
  }

  function handleNearbyChange(value: boolean) {
    if (value && !userPosition) locateUser(true);
    else setNearbyOnly(value);
  }

  return (
    <section id="harita" className="explorer" aria-label="Nöbetçi kurum haritası">
      <div className="search-panel">
        <SearchBar value={query} onChange={setQuery} />
        <button className="location-button" type="button" onClick={() => locateUser(false)} aria-label="Konumumu haritada göster">Konumumu göster</button>
      </div>
      {locationMessage && <p className="location-message" role="status">{locationMessage}</p>}
      <Filters
        selected={categories} city={city} district={district} duty={duty}
        officialOnly={officialOnly} phoneOnly={phoneOnly} nearbyOnly={nearbyOnly}
        onCategoriesChange={setCategories} onCityChange={handleCityChange} onDistrictChange={setDistrict}
        onDutyChange={setDuty} onOfficialOnlyChange={setOfficialOnly} onPhoneOnlyChange={setPhoneOnly}
        onNearbyOnlyChange={handleNearbyChange}
      />
      {hasSampleData && <div className="sample-notice"><strong>Demo görünümü:</strong> Bu kayıtlar gerçek nöbet bilgisi değildir ve “Demo veri” etiketiyle gösterilir. Gitmeden önce kurumun resmi kaynağından doğrulayın.</div>}
      {showIstanbulPharmacyNotice && isOfficialPharmacyGuideMode && <PharmacyOfficialSourceNotice city={city} />}
      <div className="explorer-grid">
        <div className="map-shell"><MapView institutions={filtered} focused={focused} userPosition={userPosition} /></div>
        <aside className="results-panel" aria-label="Kurum sonuçları">
          <div className="results-heading"><h2>Kurumlar</h2><span>{filtered.length} sonuç</span></div>
          <div className="results-list">
            {results.length > 0 ? results.map(({ institution, distance }) => <InstitutionCard key={institution.id} institution={institution} distance={distance} onShow={setFocused} />) : <EmptyState liveDataUnavailable={institutions.length === 0} message={emptyStateMessage} />}
          </div>
        </aside>
      </div>
    </section>
  );
}
