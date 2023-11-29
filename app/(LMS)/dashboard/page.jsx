import { UserButton } from "@clerk/nextjs";
import React from "react";

function dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default dashboard;
