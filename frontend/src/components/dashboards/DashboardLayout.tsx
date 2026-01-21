import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import AppSidebar from "./sidebar/AppSidebar";
import { Separator } from "../ui/separator";
import UserNav from "../navbar/UserNav";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="flex flex-1 flex-col">
          {/* nav */}
          <header className="sticky z-50 top-0 h-14 border-b px-6 flex items-center justify-between bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="font-medium flex gap-5 items-center">
              <SidebarTrigger className="cursor-pointer" />

              <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
              />

              <h1 className="mt-0.5">Dashboard</h1>
            </div>

            <div>
              <UserNav />
            </div>
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
