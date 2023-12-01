import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { courseId } = params;
    const newValue = await req.json();

    const course = await db.course.update({
      where: { id: courseId, userId },
      data: {
        ...newValue,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURCES_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
