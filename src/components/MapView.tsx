"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { categoryColors, categoryLabels, confidenceLabels } from "@/lib/data";
import { getDirectionsUrl } from "@/lib/maps";
import type { Institution } from "@/types/institution";

type MapViewProps = {
  institutions: Institution[];
  focused: Institution | null;
  userPosition: [number, number] | null;
};

function FocusController({ focused, userPosition }: Pick<MapViewProps, "focused" | "userPosition">) {
  const map = useMap();

  useEffect(() => {
    if (focused?.latitude && focused.longitude) {
      map.flyTo([focused.latitude, focused.longitude], 14, { duration: 0.8 });
    } else if (userPosition) {
      map.flyTo(userPosition, 13, { duration: 0.8 });
    }
  }, [focused, map, userPosition]);

  return null;
}

function markerIcon(institution: Institution) {
  return L.divIcon({
    className: "custom-marker-wrap",
    html: `<span class="custom-marker" style="--marker:${categoryColors[institution.category]}"></span>`,
    iconSize: [28, 36],
    iconAnchor: [14, 34],
    popupAnchor: [0, -32],
  });
}

export default function MapView({ institutions, focused, userPosition }: MapViewProps) {
  return (
    <MapContainer center={[39.0, 35.0]} zoom={6} scrollWheelZoom className="map-canvas">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FocusController focused={focused} userPosition={userPosition} />
      {institutions.map((institution) => {
        if (institution.latitude == null || institution.longitude == null) return null;
        const directionsUrl = getDirectionsUrl(institution);
        return (
          <Marker
            key={institution.id}
            position={[institution.latitude, institution.longitude]}
            icon={markerIcon(institution)}
          >
            <Popup>
              <div className="map-popup">
                <span>{categoryLabels[institution.category]}</span>
                <strong>{institution.name}</strong>
                <small className={`popup-trust ${institution.confidence}`}>{confidenceLabels[institution.confidence]}</small>
                <p>{institution.address}</p>
                <p>{institution.city} / {institution.district}</p>
                {institution.phone && <a href={`tel:${institution.phone.replace(/\s/g, "")}`}>{institution.phone}</a>}
                {institution.dutyDate && <small>{institution.dutyDate}</small>}
                <a className="popup-button" href={directionsUrl} target="_blank" rel="noreferrer">Yol tarifi al</a>
                {institution.sourceUrl && <a href={institution.sourceUrl} target="_blank" rel="noreferrer">Resmi kaynaktan doğrula: {institution.sourceName}</a>}
                <small>Güncelleme: {new Date(institution.lastUpdated).toLocaleDateString("tr-TR")}</small>
              </div>
            </Popup>
          </Marker>
        );
      })}
      {userPosition && (
        <Marker position={userPosition} icon={L.divIcon({ className: "user-marker-wrap", html: '<span class="user-marker"></span>', iconSize: [22, 22], iconAnchor: [11, 11] })}>
          <Popup>Yaklaşık konumunuz</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
