export interface Vaccine {
  name: string;
  available: boolean;
  price: string;
}

export interface CenterData {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: {
    weekdays: string;
    weekends: string;
  };
  vaccines: Vaccine[];
  description: string;
  features: string[];
  availableSlots: number;
}

export const mockCenterData: CenterData = {
  id: "1",
  name: "Apollo Health Center",
  address: "123 Medical Plaza, Downtown, Mumbai 400001",
  phone: "+91 22 1234 5678",
  email: "contact@apollohealth.com",
  operatingHours: {
    weekdays: "9:00 AM - 6:00 PM",
    weekends: "9:00 AM - 2:00 PM",
  },
  vaccines: [
    { name: "Covishield", available: true, price: "₹780" },
    { name: "Covaxin", available: true, price: "₹1410" },
    { name: "Sputnik V", available: false, price: "₹1145" },
    { name: "Moderna", available: true, price: "₹1500" },
  ],
  description:
    "Apollo Health Center is a premier vaccination facility offering WHO-approved vaccines with experienced medical professionals.",
  features: [
    "Walk-in appointments available",
    "Digital vaccination certificates",
    "Experienced medical staff",
    "Air-conditioned waiting area",
    "Wheelchair accessible",
  ],
  availableSlots: 24,
};
