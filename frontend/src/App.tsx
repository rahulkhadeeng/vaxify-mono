import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { toast } from "sonner";

function App() {
  return (
    <div>
      <Navbar />

      {/* for router */}
      <Outlet />

      <button onClick={() => toast("Test toast!")}>Toast</button>
    </div>
  );
}

export default App;
