import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import TitleForm from "./_components/TitleForm";
import DescriptionForm from "./_components/DescriptionForm";
import { ImageForm } from "./_components/ImageForm";

async function courseIdPage({ params }) {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  try {
    const course = await db.course.findUnique({
      where: { id: params.courseId },
    });

    const requiredField = [
      course.title,
      course.description,
      course.price,
      course.imageUrl,
      course.categoryId,
    ];

    const totalFields = requiredField.length;
    const completedFields = requiredField.filter(Boolean).length;
    const completionText = `${completedFields} of ${totalFields} fields completed`;

    return (
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course Setup</h1>
            <span className="text-sm text-slate-700">{completionText}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageForm initialData={course} courseId={course.id} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    redirect("/teacher/courses");
  }
}

export default courseIdPage;
