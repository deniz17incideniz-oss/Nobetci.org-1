import type { Institution } from "@/types/institution";

export function getDirectionsUrl(institution: Institution) {
  if (institution.mapsUrl) return institution.mapsUrl;
  if (institution.latitude != null && institution.longitude != null) {
    return `https://www.google.com/maps/dir/?api=1&destination=${institution.latitude},${institution.longitude}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${institution.name} ${institution.address}`)}`;
}
