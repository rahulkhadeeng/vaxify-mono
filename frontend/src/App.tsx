import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NextTopLoader from "nextjs-toploader";

function App() {
  return (
    <div>
      <NextTopLoader color="#4f46e5" showSpinner={false} />

      <Navbar />

      {/* for router */}
      <Outlet />
    </div>
  );
}

export default App;
