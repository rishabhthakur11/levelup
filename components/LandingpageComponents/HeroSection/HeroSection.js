"use client";

import Image from "next/image";
import heroImage from "/public/assets/hero-image1.png";

export default function HeroSection() {
  return (
    <>
      <div>
        <div className="isolate px-6 lg:px-8 z-10 max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl pt-20 lg:pt-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="bg-btnOrange/70 rounded-full px-16 py-1 text-lg text-black">
                Get Your Dream Job With LevelUp.
              </div>
            </div>
            <div className="text-center leading-tight">
              <h1 className="text-6xl lg:text-7xl font-black  text-black leading-tight tracking-wider">
                Change the world with{" "}
                <span className="text-btnOrange">Level</span>Up
              </h1>
              <p className="mt-6 text-lg leading-8 text-textGray font-semibold">
                Learn skills using our AI driven Roadmaps, practice problems,
                projects and AI. Become job ready 10x faster
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="bg-black text-white px-8 py-2 rounded-full"
                >
                  Start your journey
                </a>
              </div>
            </div>  
          </div>
          <div className="-z-10">
          <Image
          src={heroImage}
          width={100}
          height={100}
          layout="responsive"
          alt="heroImage"
          className="lg:-m-44 lg:mx-auto"
        />
          </div>  
        </div>  
      </div>
    </>
  );
}
