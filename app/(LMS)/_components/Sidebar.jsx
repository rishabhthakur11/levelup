import Link from "next/link";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";

function Sidebar() {
  return (
    <div className="h-full border-r border-divided flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Link href="/dashboard">
          <p className="text-3xl font-bold curser-pointer">LevelUp</p>
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
