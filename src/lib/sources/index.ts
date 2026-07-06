import { fetchEmergencyServices } from "./emergency";
import { fetchHospitals } from "./hospitals";
import { fetchMunicipalServices } from "./municipal";
import { fetchNotaries } from "./notaries";
import { fetchPharmacies } from "./pharmacies";

export const sourceAdapters = [
  { name: "pharmacies", fetch: fetchPharmacies },
  { name: "notaries", fetch: fetchNotaries },
  { name: "hospitals", fetch: fetchHospitals },
  { name: "municipal", fetch: fetchMunicipalServices },
  { name: "emergency", fetch: fetchEmergencyServices },
] as const;
