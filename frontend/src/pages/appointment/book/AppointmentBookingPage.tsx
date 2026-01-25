import { useParams } from "react-router-dom";
import { centersData } from "@/constants/centers-mock-data";
import CenterNotFound from "./sections/CenterNotFound";

const AppointmentBookingPage = () => {
  const { centerId } = useParams();

  const center = centersData.find((c) => c.id === centerId);

  if (!center) {
    return <CenterNotFound />;
  }

  return <div></div>;
};

export default AppointmentBookingPage;
