import { useParams } from "react-router-dom";
import BookingHeaderSection from "@/components/appointment/book/BookingHeaderSection";
import CenterNotFound from "@/components/centers/center-details/CenterNotFound";

import { centersData } from "@/constants/centers-mock-data";
import { useState } from "react";
import BookingDateAndSlotSection from "@/components/appointment/book/BookingSlotSection";
import VaccineSelectionSection from "@/components/appointment/book/VaccineSelectionSection";

const AppointmentBookingPage = () => {
  const { centerId } = useParams();

  const [selectedVaccineId, setSelectedVaccineId] = useState<string | null>(
    null,
  );

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const center = centersData.find((c) => c.id === centerId);

  if (!center) {
    return <CenterNotFound />;
  }

  return (
    <div className="py-10 max-w-7xl mx-auto px-10 grid gap-10">
      <BookingHeaderSection center={center} />

      <div className="flex flex-col md:flex-row justify-between gap-10 px-5">
        <VaccineSelectionSection
          vaccines={vaccines}
          selectedVaccineId={selectedVaccineId}
          onSelect={(id) => {
            setSelectedVaccineId(id);
            setSelectedDate(null);
            setSelectedSlot(null);
          }}
        />

        <BookingDateAndSlotSection
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          onDateSelect={(date) => {
            setSelectedDate(date);
            setSelectedSlot(null);
          }}
          onSlotSelect={setSelectedSlot}
          onResetSlot={() => setSelectedSlot(null)}
        />
      </div>
    </div>
  );
};

export default AppointmentBookingPage;

const vaccines = [
  {
    id: "covishield",
    name: "Covishield",
    description: "AstraZeneca-based COVID-19 vaccine",
  },
  {
    id: "covaxin",
    name: "Covaxin",
    description: "Inactivated virus COVID-19 vaccine",
  },
];
