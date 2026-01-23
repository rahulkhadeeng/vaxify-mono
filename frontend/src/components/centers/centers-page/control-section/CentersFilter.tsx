import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

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
  return (
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
  );
}
