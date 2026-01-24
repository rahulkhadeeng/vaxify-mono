import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal, XIcon } from "lucide-react";

type Props = {
  vaccines: string[];
  selectedVaccines: string[];
  onChange: (vaccines: string[]) => void;
};

export default function CentersFilter({
  vaccines,
  selectedVaccines,
  onChange,
}: Props) {
  const removeVaccine = (vaccine: string) => {
    onChange(selectedVaccines.filter((v) => v !== vaccine));
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* filter dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Vaccines
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-48">
          {vaccines.map((vaccine) => (
            <DropdownMenuCheckboxItem
              key={vaccine}
              checked={selectedVaccines.includes(vaccine)}
              onCheckedChange={(checked) => {
                onChange(
                  checked
                    ? [...selectedVaccines, vaccine]
                    : selectedVaccines.filter((v) => v !== vaccine),
                );
              }}
            >
              {vaccine}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* display applied filters as a badge */}
      {selectedVaccines.map((vaccine) => (
        <Badge
          key={vaccine}
          variant="outline"
          className="flex items-center gap-1"
        >
          {vaccine}
          <button
            onClick={() => removeVaccine(vaccine)}
            className="ml-1 rounded-sm hover:text-foreground"
            aria-label={`Remove ${vaccine} filter`}
          >
            <XIcon className="h-4 w-4 hover:text-red-500 cursor-pointer transition-all mb-1" />
          </button>
        </Badge>
      ))}
    </div>
  );
}
