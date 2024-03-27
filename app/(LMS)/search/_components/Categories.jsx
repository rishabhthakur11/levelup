"use client";

import {
  FcEnteringHeavenAlive,
  FcLock,
  FcAddDatabase,
  FcLink,
  FcAutomatic,
  FcCommandLine,
  FcIphone,
  FcMultipleDevices,
  FcDribbble,
  FcSerialTasks,
} from "react-icons/fc";

import { IoGameController } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CategoryItem } from "./CategoryItem";
import { SiSpeedtest } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const iconMap = {
  "Blockchain and Cryptocurrency": FcLink,
  "Cloud Computing": FcEnteringHeavenAlive,
  Cybersecurity: FcLock,
  "Database Management": FcAddDatabase,
  DevOps: FcAutomatic,
  "Embedded Systems": FcCommandLine,
  "Game Development": IoGameController,
  "Machine Learning and AI": GiArtificialIntelligence,
  "Mobile App Development": FcIphone,
  "Software Engineering Practices": FcMultipleDevices,
  "Software Testing": SiSpeedtest,
  "UI/UX Design": FcDribbble,
  "Version Control": FcSerialTasks,
  "Programming Languages": FaJava,
  "Web Development": FaHtml5,
};
export const Categories = ({ items }) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
