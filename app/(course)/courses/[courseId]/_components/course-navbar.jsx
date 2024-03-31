import { CourseMobileSidebar } from "./course-mobile-sidebar";
import { NavRoute } from "@/components/navbar-routes";
export const CourseNavbar = ({ course, progressCount }) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavRoute />
    </div>
  );
};
