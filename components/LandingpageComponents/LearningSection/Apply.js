import Image from "next/image";
import React from "react";
import ide from "/public/assets/ide.png";

function Apply() {
  return (
    <div className="mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
      <h2 className="text-center text-lg font-semibold leading-8 text-textGray tracking-wider">
          WORK TO LEVELUP YOUR SKILLS
        </h2>
        <div className="mt-10 rounded-full w-12 h-12 bg-themeBlue flex items-center justify-center text-black font-bold text-xl  mx-auto">
          2
        </div>
        <h2 className="mt-10 text-center text-5xl lg:text-7xl font-bold  leading-12 text-themeBlue tracking-wider">
          Powerful IDE with AI Tooling
        </h2>
        <p className="mx-auto max-w-2xl mt-6 text-lg leading-6 text-textGray text-center">
          Become better programmer by building tons of real-world projects and
          keep improving with detailed feedback on your code - generate by
          state-of art AI.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto flex px-8 pt-24 md:flex-row flex-col items-center  justify-between">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={ide}
            />
          </div>
          <div className=" md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-2xl mb-4 font-semibold text-themeBlue">
              Practice 100+ projects
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              Improve you skills by building. Choose from over 100+ projects to
              practice, build for your resume and showcase to the world.
            </p>
            <h1 className="title-font text-2xl mb-4 font-semibold text-themeBlue">
              Unlimited building and feedback
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              For every great project you build, we help you make it better with
              CodeReport™. Get detailed feedback on your projects.
            </p>
            <h1 className="title-font text-2xl mb-4 font-semibold text-themeBlue">
              Brush away all the bugs
            </h1>
            <p className="mb-8 leading-relaxed text-textGray text-md">
              Use code brushes in playgrounds to fix, debug, refactor or even
              write full code blocks - at a click of a button
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
