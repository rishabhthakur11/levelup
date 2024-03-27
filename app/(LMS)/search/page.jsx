import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import React from "react";
import { Categories } from "./_components/Categories";
import { SearchInput } from "@/components/SearchInput";
import { CoursesList } from "@/components/coursesList";
import { getCourses } from "@/actions/get-courses";

const SearchPage = async ({ searchParams }) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const catogories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });
  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={catogories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
