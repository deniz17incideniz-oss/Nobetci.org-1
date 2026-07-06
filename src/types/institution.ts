export type InstitutionCategory =
  | "pharmacy"
  | "notary"
  | "hospital"
  | "municipal"
  | "emergency";

export type Institution = {
  id: string;
  name: string;
  category: InstitutionCategory;
  city: string;
  district: string;
  address: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  dutyDate?: string;
  sourceName?: string;
  sourceUrl?: string;
  lastUpdated: string;
};

