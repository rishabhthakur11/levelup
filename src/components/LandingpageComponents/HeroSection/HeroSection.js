"use client";

import Image from "next/image";
import heroImage from "/public/assets/hero-image1.png";

export default function HeroSection() {
  return (
    <>
      <div className="z-10">
        <div className="relative isolate px-6  lg:px-8 z-10">
          <div className="mx-auto max-w-2xl pt-20 lg:pt-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative bg-btnOrange/70 rounded-full px-8 py-1 text-lg text-black">
                Get Your Dream Job With LevelUp.
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-bold  text-black">
                Change the world with{" "}
                <span className="text-btnOrange">Level</span>Up
              </h1>
              <p className="mt-6 text-lg leading-8 text-textGray">
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
        </div>
        <Image
          src={heroImage}
          width={100}
          height={100}
          layout="responsive"
          alt="heroImage"
          className="lg:absolute bottom-0 z-0"
        />
      </div>
    </>
  );
}
