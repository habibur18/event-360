import { Outlet } from "react-router-dom";
import Sidebar from "../../App/admin/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-full overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}
