import sampleInstitutions from "@/data/sample-institutions.json";
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
  return sampleInstitutions as Institution[];
}

