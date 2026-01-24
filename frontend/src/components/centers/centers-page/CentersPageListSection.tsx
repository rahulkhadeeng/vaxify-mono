import CenterCard from "@/components/centers/centers-page/CenterCard";
import { type Center } from "@/constants/centers-mock-data";

type Props = {
  centers: Center[];
};

export default function CentersPageListSection({ centers }: Props) {
  return (
    <section className="container mx-auto pb-16">
      <div className="mb-6 space-y-1">
        <h2 className="text-lg font-medium tracking-tight">
          Available Centers
        </h2>
        <p className="text-sm text-muted-foreground">
          {centers.length} centers found
        </p>
      </div>

      {centers.length === 0 ? (
        <div className="py-24 text-center text-sm text-muted-foreground">
          No centers match your filters.
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => (
            <CenterCard key={center.id} center={center} />
          ))}
        </div>
      )}
    </section>
  );
}
