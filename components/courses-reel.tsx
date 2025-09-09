"use client";
import { motion } from "framer-motion";
import CourseCard from "./course-card";
import { Course } from "@/config/data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CoursesReel = ({
  courses,
  title,
}: {
  courses: Course[];
  title: string;
}) => {
  return (
    <div className="w-full pb-10 max-w-7xl mx-auto px-4">
      <div className=" border-white/20 relative  backdrop-blur-lg ">
        {/* Title spanning the top border */}
        <div className="mb-4 md:mt-5">
          <p className="text-[#1e1e1e] font-semibold text-xl tracking-wide">
            {title}
          </p>
        </div>

        {/* Scrollable Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#04306e] scrollbar-track-gray-100 pb-4"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="snap-center"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesReel;
