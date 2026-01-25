import { AppointmentScheduler } from "@/components/ui/appointment-scheduler";
import { useEffect } from "react";

type Props = {
  selectedDate: string | null;
  selectedSlot: string | null;
  onDateSelect: (date: string) => void;
  onSlotSelect: (slot: string) => void;
  onResetSlot: () => void;
};

export default function BookingDateAndSlotSection({
  onDateSelect,
  onSlotSelect,
  onResetSlot,
}: Props) {
  useEffect(() => {
    const today = new Date();

    onDateSelect(today.toISOString());

    onResetSlot();
  }, []);

  return (
    <div className="w-fit">
      {/* scheduler */}
      <AppointmentScheduler
        userName="Vaxify"
        meetingTitle="Vaccination Appointment"
        meetingType="In-person"
        duration="1 hour"
        timezone="IST"
        availableDates={availableDates}
        timeSlots={timeSlots}
        onDateSelect={(day) => {
          const date = new Date();
          date.setDate(day);
          onDateSelect(date.toISOString());
          onResetSlot();
        }}
        onTimeSelect={onSlotSelect}
      />
    </div>
  );
}

const availableDates = generateAvailableDates();
const timeSlots = generateTimeSlots();

function generateTimeSlots() {
  const slots = [];

  for (let hour = 9; hour < 18; hour++) {
    slots.push({
      time: `${hour.toString().padStart(2, "0")}:00`,
      available: true,
    });
  }

  return slots;
}

function generateAvailableDates() {
  const today = new Date();
  const currentDay = today.getDate();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();

  const dates = [];

  for (let day = currentDay; day <= daysInMonth; day++) {
    dates.push({
      date: day,
      hasSlots: true,
    });
  }

  return dates;
}
