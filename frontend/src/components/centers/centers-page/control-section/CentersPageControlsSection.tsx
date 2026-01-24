import CentersSearch from "./CentersSearch";
import CentersFilter from "./CentersFilter";
import CentersSort, { type SortOption } from "./CentersSort";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  vaccines: string[];
  selectedVaccines: string[];
  onVaccinesChange: (vaccines: string[]) => void;

  sort: SortOption;
  onSortChange: (value: SortOption) => void;
};

export default function CentersPageControlsSection({
  search,
  onSearchChange,
  vaccines,
  selectedVaccines,
  onVaccinesChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <section className="container mx-auto py-6">
      <div className="flex flex-wrap items-center gap-4">
        <CentersSearch value={search} onChange={onSearchChange} />

        <CentersFilter
          vaccines={vaccines}
          selectedVaccines={selectedVaccines}
          onChange={onVaccinesChange}
        />

        <CentersSort value={sort} onChange={onSortChange} />
      </div>
    </section>
  );
}
