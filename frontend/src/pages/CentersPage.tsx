import CenterPageHeader from "@/components/centers/centers-page/CenterPageHeader";
import CentersPageListSection from "@/components/centers/centers-page/CentersPageListSection";
import CentersPageControlsSection from "@/components/centers/centers-page/control-section/CentersPageControlsSection";
import type { SortOption } from "@/components/centers/centers-page/control-section/CentersSort";
import { centersData, type Center } from "@/constants/centers-mock-data";
import { useMemo, useState } from "react";

export default function CentersPage() {
  const [search, setSearch] = useState("");
  const [selectedVaccines, setSelectedVaccines] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("name-asc");

  const allVaccines = useMemo(
    () => Array.from(new Set(centersData.flatMap((c) => c.availableVaccines))),
    [],
  );

  const filteredCenters: Center[] = useMemo(() => {
    let data = [...centersData];

    // search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.address.toLowerCase().includes(q),
      );
    }

    // vaccine filter
    if (selectedVaccines.length > 0) {
      data = data.filter((c) =>
        selectedVaccines.every((v) => c.availableVaccines.includes(v)),
      );
    }

    // sort
    data.sort((a, b) =>
      sort === "name-asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

    return data;
  }, [search, selectedVaccines, sort]);

  return (
    <div className="max-w-7xl mx-auto px-5">
      <CenterPageHeader />

      <CentersPageControlsSection
        search={search}
        onSearchChange={setSearch}
        vaccines={allVaccines}
        selectedVaccines={selectedVaccines}
        onVaccinesChange={setSelectedVaccines}
        sort={sort}
        onSortChange={setSort}
      />

      <CentersPageListSection centers={filteredCenters} />
    </div>
  );
}
