import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* for router */}
      <Outlet />
    </div>
  );
}

export default App;
