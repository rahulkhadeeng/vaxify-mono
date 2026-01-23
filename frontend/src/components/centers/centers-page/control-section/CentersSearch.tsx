import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CentersSearch({ value, onChange }: Props) {
  return (
    <div className="max-w-sm">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search centers or location"
        className="h-10"
      />
    </div>
  );
}
