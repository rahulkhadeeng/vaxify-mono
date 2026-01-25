export type Center = {
  id: string;
  name: string;
  address: string;
  availableVaccines: string[];
};

export const centersData: Center[] = [
  {
    id: "1",
    name: "City Health Vaccination Center",
    address: "MG Road, Pune",
    availableVaccines: ["Covishield", "Covaxin"],
  },
  {
    id: "center-2",
    name: "Community Care Hospital",
    address: "Kalyani Nagar, Pune",
    availableVaccines: ["Covaxin"],
  },
  {
    id: "center-3",
    name: "Urban Primary Health Center",
    address: "Whitefield, Pune",
    availableVaccines: ["Covishield"],
  },
  {
    id: "center-4",
    name: "Pune Medical Center",
    address: "Baner, Pune",
    availableVaccines: ["Covishield", "Covaxin", "Sputnik V"],
  },
  {
    id: "center-5",
    name: "Shivaji Nagar Health Hub",
    address: "Shivaji Nagar, Pune",
    availableVaccines: ["Covaxin"],
  },
  {
    id: "center-6",
    name: "Hinjewadi Wellness Center",
    address: "Hinjewadi, Pune",
    availableVaccines: ["Covishield"],
  },
  {
    id: "center-7",
    name: "Kothrud Vaccination Clinic",
    address: "Kothrud, Pune",
    availableVaccines: ["Covishield", "Covaxin"],
  },
  {
    id: "center-8",
    name: "Viman Nagar Medical Center",
    address: "Viman Nagar, Pune",
    availableVaccines: ["Covaxin", "Sputnik V"],
  },
];
