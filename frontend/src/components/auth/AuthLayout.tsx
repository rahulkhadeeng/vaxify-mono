import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
