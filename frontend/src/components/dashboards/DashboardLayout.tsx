import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="flex flex-1 flex-col">
          {/* nav */}
          <header className="h-14 border-b px-6 flex items-center justify-between">
            <div className="font-medium flex gap-5 items-center">
              <SidebarTrigger className="cursor-pointer" />

              <span className="mt-0.5">Dashboard</span>
            </div>

            <div className="text-sm">User</div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
