import Link from "next/link";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";
import { Cog } from "lucide-react";

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
      <div>
        <p className="flex absolute text-center text-sm text-slate-500 bottom-10 font-[500] pl-6 gap-x-2 cursor-pointer">
          <Cog size={20} className="text-slate-500" />
          Something Borken ?
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
