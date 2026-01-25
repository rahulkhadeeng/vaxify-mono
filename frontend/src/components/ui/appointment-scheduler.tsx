import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AvailableDate {
  date: number;
  hasSlots: boolean;
}

export interface AppointmentSchedulerProps {
  userName: string;
  userAvatar?: string;
  meetingTitle: string;
  meetingType: string;
  duration: string;
  timezone: string;
  availableDates?: AvailableDate[];
  timeSlots?: TimeSlot[];
  onDateSelect?: (date: number) => void;
  onTimeSelect?: (time: string) => void;
  onTimezoneChange?: (timezone: string) => void;
}

export function AppointmentScheduler({
  timeSlots = [],
  onDateSelect,
  onTimeSelect,
}: AppointmentSchedulerProps) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");

  useEffect(() => {
    onDateSelect?.(today.getDate());
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentYear, currentMonth, day);
    selected.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) return;

    setSelectedDate(day);
    setSelectedTime(null);
    onDateSelect?.(day);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onTimeSelect?.(time);
  };

  const formatTime = (time: string) => {
    if (timeFormat === "24h") return time;
    const [h, m] = time.split(":");
    const hour = Number(h);
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${m} ${suffix}`;
  };

  const selectedDateLabel = new Date(
    currentYear,
    currentMonth,
    selectedDate,
  ).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-3xl rounded-xl border bg-card overflow-hidden shadow-xl transition-all">
      {/* calendar */}
      <div className="flex-1 p-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">
            {monthNames[currentMonth]}{" "}
            <span className="text-muted-foreground">{currentYear}</span>
          </h3>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevMonth}
              className="cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextMonth}
              className="cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dayNames.map((d) => (
            <div key={d} className="text-center text-xs text-muted-foreground">
              {d}
            </div>
          ))}

          {calendarDays.map((day, idx) => {
            if (!day)
              return (
                <div key={`empty-${currentYear}-${currentMonth}-${idx}`} />
              );

            const isAvailable = (() => {
              const cellDate = new Date(currentYear, currentMonth, day);
              cellDate.setHours(0, 0, 0, 0);

              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const isFutureOrToday = cellDate >= today;
              const isSunday = cellDate.getDay() === 0;

              return isFutureOrToday && !isSunday;
            })();

            return (
              <button
                key={`${currentYear}-${currentMonth}-${day}`}
                disabled={!isAvailable}
                onClick={() => handleDateClick(day)}
                className={cn(
                  "p-2 md:p-4 rounded-lg text-sm font-medium cursor-pointer transition-all",
                  day === selectedDate &&
                    "bg-primary text-primary-foreground shadow",
                  day !== selectedDate &&
                    isAvailable &&
                    "bg-secondary/50 hover:bg-secondary",
                  !isAvailable && "text-muted-foreground/40 cursor-not-allowed",
                )}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* time slots */}
      <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l p-6">
        <div className="flex justify-between mb-4">
          <span className="text-sm font-medium">{selectedDateLabel}</span>

          <div className="flex bg-secondary rounded p-1">
            {(["12h", "24h"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setTimeFormat(f)}
                className={cn(
                  "px-2 py-1 text-xs rounded cursor-pointer transition-all",
                  timeFormat === f && "bg-background",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.time}
              disabled={!slot.available}
              onClick={() => handleTimeClick(slot.time)}
              className={cn(
                "w-full py-2 rounded-lg text-sm transition cursor-pointer",
                selectedTime === slot.time &&
                  "bg-primary text-primary-foreground",
                slot.available &&
                  selectedTime !== slot.time &&
                  "bg-secondary/50 hover:bg-secondary",
                !slot.available &&
                  "text-muted-foreground/40 cursor-not-allowed",
              )}
            >
              {formatTime(slot.time)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
