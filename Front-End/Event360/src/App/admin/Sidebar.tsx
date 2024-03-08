import { useState } from "react";
import LinkTracker from "../../utils/LinkTracker";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <input type="checkbox" id="drawer-toggle" className="sr-only peer" checked={open} />
      <label onClick={() => setOpen(!open)} htmlFor="drawer-toggle" className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-72  ">
        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
      </label>
      <aside className="sticky peer-checked:block hidden peer-checked:translate-x-0 -translate-x-full top-0 left-0 h-screen  border-4 bg-[#F5F5F5] border-indigo-600 transition-all duration-500 transform  peer-checked:">
        <div className="w-72 transition-all duration-500 transform ">
          <div className="px-6 py-4">
            <LinkTracker to="/admin/manage-event-items" className="block">
              Manage Event Items
            </LinkTracker>
            <LinkTracker to="/admin/manage-events" className="block">
              Manage Recent Events
            </LinkTracker>
          </div>
        </div>
      </aside>
    </div>
  );
}
