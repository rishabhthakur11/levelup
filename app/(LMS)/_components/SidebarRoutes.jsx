"use client";
import React from "react";
import {
  Award,
  BarChart,
  Brush,
  Compass,
  Layout,
  List,
  Route,
  Users,
  Youtube,
} from "lucide-react";
import Sidebaritem from "./Sidebaritem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    icon: Youtube,
    label: "My Courses",
    href: "/search",
  },
  {
    icon: Award,
    label: "Certificates",
    href: "/certificates",
  },
  {
    icon: Compass,
    label: "Explore",
    href: "/explore",
  },
  {
    icon: Route,
    label: "Learning Paths",
    href: "/roadmaps",
  },
  {
    icon: Brush,
    label: "whiteboard",
    href: "/editor",
  },
  {
    icon: Users,
    label: "Community forum",
    href: "/forum",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

function SidebarRoutes() {
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <Sidebaritem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}

export default SidebarRoutes;
