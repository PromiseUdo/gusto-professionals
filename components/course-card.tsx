"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Clock, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Course = {
  title: string;
  image: string;
  duration: string;
  level: string;
  courseCategory: string;
};

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "w-56 h-80 flex-shrink-0 bg-white  hover:shadow-md transition-shadow duration-300 rounded-md overflow-hidden border border-gray-100",
          className
        )}
      >
        <CardContent className="p-0 flex flex-col h-full">
          {/* Course Image */}
          <div className="relative w-full h-36">
            <Image
              src={course.image}
              alt={`${course.title} thumbnail`}
              fill
              className="object-cover"
              sizes="224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Course Title */}
          <div className="flex-1 px-4 py-1 mt-3">
            <h3 className="text-[#1e1e1e] text-base font-semibold  line-clamp-3">
              {course.title}
            </h3>
          </div>

          {/* Duration and Level Section */}
          <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#04306e]" />
              <p className="text-sm text-gray-700">{course.duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#04306e]" />
              <p className="text-sm text-gray-700">{course.level}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
