import React from "react";
import img3 from "/public/assets/img3.png";
import img4 from "/public/assets/img4.png";
import Image from "next/image";

function Grow() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
        <div className="mt-10 rounded-full w-12 h-12 bg-themeGreen flex items-center justify-center text-black font-bold text-xl  mx-auto">
          3
        </div>
        <h2 className="mt-10 text-center text-5xl lg:text-7xl font-bold  leading-12 text-themeGreen tracking-wider">
          Expand your Potential
        </h2>
        <p className="mx-auto max-w-2xl mt-6 text-lg leading-6 text-textGray text-center">
          Indias finest companies trust LevelUp to hire, Crack the test, get
          hired!
        </p>
      </div>
      <div>
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img3}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-28 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-2xl mb-4 font-medium text-themeGreen">
              Take LevelUp Test
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              Explore career opportunity and take the test at your convenience
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-8 py-5 md:flex-row items-center flex-col-reverse">
          <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-2xl mb-4 font-medium text-themeGreen">
              Get Hired by top employeers
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              Indias finest companies trust LevelUp to hire, Crack the test, get
              hired!
            </p>
          </div>
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={img4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grow;
