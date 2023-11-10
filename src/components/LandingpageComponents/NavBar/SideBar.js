import Link from "next/link";
import React from "react";

export const SideBar = () => {
  return (
    <div className="text-lg font-normal text-textGray  gap-y-8 flex flex-col mt-10 ml-6 z-[100]">
      <Link className="" href="#">
        Learn
      </Link>
      <Link className="" href="#">
        Tests
      </Link>
      <Link className="" href="#">
        Roadmaps
      </Link>
      <Link className="" href="#">
        Find Talent
      </Link>
      <div className="flex gap-x-7 text-lg text-textGray font-normal items-center">
        <p>Log In</p>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};
