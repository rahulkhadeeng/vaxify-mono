import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "name-asc" | "name-desc";

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function CentersSort({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name-asc">Name (A → Z)</SelectItem>
        <SelectItem value="name-desc">Name (Z → A)</SelectItem>
      </SelectContent>
    </Select>
  );
}
