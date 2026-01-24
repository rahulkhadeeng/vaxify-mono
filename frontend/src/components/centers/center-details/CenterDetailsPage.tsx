import { ArrowLeft } from "lucide-react";
import { mockCenterData, type CenterData } from "./types";

import CenterDetailsHeaderSection from "./CenterDetailsHeaderSection";
import CenterDetailsVaccinesSection from "./CenterDetailsVaccinesSection";
import CenterDetailsInfoSection from "./CenterDetailsInfoSection";
import CenterDetailsOperatingInfoSection from "./CenterDetailsOperatingInfoSection";

const CenterDetailsPage = () => {
  const center: CenterData = mockCenterData;

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* back btn */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-all duration-300" />
            Back to Centers
          </button>
        </div>

        <CenterDetailsHeaderSection center={center} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CenterDetailsVaccinesSection center={center} />
            <CenterDetailsInfoSection center={center} />
          </div>

          <CenterDetailsOperatingInfoSection center={center} />
        </div>
      </div>
    </div>
  );
};

export default CenterDetailsPage;
