import sampleInstitutions from "@/data/sample-institutions.json";
import liveInstitutions from "@/data/institutions.json";
import type { Institution, InstitutionCategory } from "@/types/institution";

export const categoryLabels: Record<InstitutionCategory, string> = {
  pharmacy: "Eczane",
  notary: "Noter",
  hospital: "Hastane",
  municipal: "Belediye Hizmeti",
  emergency: "Acil Kurum",
};

export const categoryColors: Record<InstitutionCategory, string> = {
  pharmacy: "#16a34a",
  notary: "#2563eb",
  hospital: "#dc2626",
  municipal: "#d97706",
  emergency: "#7c3aed",
};

export function getInstitutions(): Institution[] {
  const live = liveInstitutions as Institution[];
  const showSamples = process.env.NEXT_PUBLIC_SHOW_SAMPLE_DATA !== "false";
  const samples = (sampleInstitutions as Array<Omit<Institution, "confidence"> & { confidence?: Institution["confidence"] }>).map((item) => ({
    ...item,
    confidence: "sample" as const,
    dutyPeriod: item.dutyPeriod ?? (item.category === "hospital" || item.category === "emergency" || item.category === "municipal" ? "always" : "today"),
    isOpenNow: item.isOpenNow ?? (item.category === "hospital" || item.category === "emergency"),
  }));
  return showSamples ? [...live, ...samples] : live;
}

export function getLiveInstitutions(): Institution[] {
  return liveInstitutions as Institution[];
}

export const confidenceLabels: Record<Institution["confidence"], string> = {
  official: "Resmi kaynak",
  verified: "Doğrulanmış",
  sample: "Demo veri",
  unknown: "Kaynak bekleniyor",
};
