import { CourseCard } from "@/components/courseCard";
import Image from "next/image";
import React from "react";

import explore from "../public/assets/explore.png";

const CoursesList = ({ items }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            chaptersLength={item.chapters.length}
            price={item.price}
            progress={item.progress}
            category={item?.category?.name}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className={`flex flex-col mt-10`}>
          <div className="flex flex-col items-center justify-center bg-white">
            <Image
              src={explore}
              width={350}
              height={350}
              alt="heroImage"
              priority
            />
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down ">
              No Courses found
            </h1>
            <p className="text-lg text-textGray mb-8 animate-fade-in-up">
              Please enrole in a course to see it here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { CoursesList };
