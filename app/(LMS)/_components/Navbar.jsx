import React from "react";
import MobileSideBar from "./MobileSideBar";
import NavBarRoutes from "@/components/NavBarRoutes";

function Navbar() {
  return (
    <div className="p-4 border-b border-divided h-full flex items-center bg-white shadow-sm">
      <MobileSideBar />
      <NavBarRoutes />
    </div>
  );
}

export default Navbar;
