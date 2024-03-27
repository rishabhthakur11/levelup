import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";

const getCourses = async ({ userId, title, categoryId }) => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const coursesWithProgress = await Promise.all(
      courses.map(async (course) => {
        try {
          const progressPercentage = await getProgress(userId, course.id);
          return {
            ...course,
            progress: progressPercentage,
          };
        } catch (progressError) {
          console.error(
            `Error fetching progress for course ${course.id}:`,
            progressError
          );
          return {
            ...course,
            progress: null,
          };
        }
      })
    );

    return coursesWithProgress;
  } catch (error) {
    console.error("[GET_COURSES]", error);
    return [];
  }
};

export { getCourses };
