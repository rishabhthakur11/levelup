import Image from "next/image";
import React from "react";
import img1 from "/public/assets/img1.png";
import img2 from "/public/assets/img2.png";

function Learn() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          EXPLORE THE LEVELUP WAY
        </h2>
        <div className="mt-10 rounded-full w-12 h-12 bg-btnOrange flex items-center justify-center text-black font-bold text-xl  mx-auto">
          1
        </div>
        <h2 className="mt-10 text-center text-6xl lg:text-7xl font-bold  leading-8 text-btnOrange tracking-wider">
          Instantly and Interactively
        </h2>
        <p className="mx-auto max-w-2xl mt-6 text-lg leading-6 text-textGray text-center">
          Learn from carefully curated learning path with up-to-date interactive
          courses, and receive 24x7 assistance as you develop your skills
        </p>
      </div>
      <div>
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-28 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-2xl mb-4 font-medium text-btnOrange">
              Hands-on practice
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              At levelUp, you get to learn by doing, Escape tutorials hell by
              solving real-world challenges in our interactive labs, all within
              your browser.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-28 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-2xl mb-4 font-medium text-btnOrange">
              Customised Roadmaps
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              At levelUp, you get a customised roadmap, providing outlined
              step-by-step preparations for their aspiring career field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
