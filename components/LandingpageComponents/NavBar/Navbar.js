"use client";
import React, { useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SideBar } from "./SideBar";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [sideBarIcon, setSideBarIcon] = useState(true);
  const manageSideBar = () => {
    setSideBar(!sideBar);
    setSideBarIcon(!sideBarIcon);
  };
  const { userId } = useAuth();

  return (
    <div className="flex py-10 items-center px-5">
      {/* leftSide */}
      <div className="flex gap-x-24 text-black  items-center grow">
        <Link href="/">
          <p className="text-3xl font-bold curser-pointer">LevelUp</p>
        </Link>
        <div className="flex gap-x-12 text-lg font-normal hidden lg:flex">
          {userId ? (
            <Link href="/dashboard">
              <p className="cursor-pointer">Dashboard</p>
            </Link>
          ) : (
            <Link href="/">
              <p className="cursor-pointer">Learn</p>
            </Link>
          )}

          <Link href="https://tests-levelupp.vercel.app">
            <p className="cursor-pointer">Tests</p>
          </Link>
          <Link href="https://smartresumeanalyzer-aknxmypo7e3m8zthkepgvm.streamlit.app">
            <p className="cursor-pointer">Resume Analysis</p>
          </Link>
          <p>Find Talent</p>
        </div>
      </div>

      <div>
        <div className="hidden lg:flex gap-x-7 text-lg text-black font-normal items-center">
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="hidden lg:flex gap-x-7 text-lg text-black font-normal items-center">
              <p className="hover:font-semibold cursor-pointer duration-400">
                <SignInButton afterSignInUrl="/dashboard">
                  <p>Log In</p>
                </SignInButton>
              </p>
              <SignUpButton afterSignUpUrl="/dashboard">
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
        <div className="lg:hidden text-black relative">
          <div className="z-50">
            {sideBarIcon ? (
              <MenuIcon onClick={manageSideBar} />
            ) : (
              <CloseIcon onClick={manageSideBar} />
            )}
          </div>
          {sideBar ? (
            <div className="bg-white fixed top-0 left-0 w-3/4 md:w-1/2 h-screen  lg:hidden z-50">
              <SideBar />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
