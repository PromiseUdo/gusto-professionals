"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const bannerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomeBanner = () => {
  const coursesCategory = [
    { title: "Health & Safety", icon: "/safety-helmet.svg" },
    { title: "Project Management", icon: "/manager.svg" },
    { title: "Human Resource", icon: "/human-resources.svg" },
    { title: "Quality Assurance", icon: "/medal.svg" },
    { title: "ISO/Lead Auditor", icon: "/audit.svg" },
    { title: "First Aid Training", icon: "/first-aid-kit.svg" },
    { title: "Lean & Six Sigma", icon: "/signal.svg" },
  ];

  return (
    <div className="mb-10 relative w-full min-h-[26rem] md:min-h-[29rem] overflow-hidden">
      {/* Background Image with Grayscale */}
      <div className="absolute inset-0">
        <Image
          src="/training.jpg"
          alt="Background image"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#04306e]/80" />

      {/* Content Wrapper */}
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full py-12 flex flex-col items-center min-h-[26rem] md:min-h-[29rem]"
      >
        {/* Centered Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-4 md:mt-12 mb-8 px-4"
        >
          <h1 className="text-[1.75rem] md:text-[3rem] font-bold tracking-tight text-white drop-shadow-lg">
            Develop. Empower. Excel.
          </h1>
          <p className="text-white/80 text-sm md:text-lg mt-2 max-w-2xl mx-auto">
            Unlock your potential with industry-leading courses tailored to your
            career goals.
          </p>
        </motion.div>

        {/* Featured Courses Section */}
        <div className="w-full mt-8 max-w-6xl mx-auto px-4">
          <div className="border-[1.5px] border-white/20 rounded-lg p-6 relative bg-white/5 backdrop-blur-md">
            {/* Title spanning the top border */}
            <div className="absolute -top-3 left-1/2 rounded transform -translate-x-1/2 bg-[#04306e] px-4">
              <span className="text-white whitespace-nowrap font-semibold">
                Browse courses by job function
              </span>
            </div>

            {/* Scrollable Container */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="flex md:grid md:grid-cols-7 gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent pb-2 md:overflow-x-hidden"
            >
              {coursesCategory.map((course, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex-shrink-0 snap-center"
                >
                  <Link
                    href={`/courses?category=${encodeURIComponent(
                      course.title
                    )}`}
                  >
                    <Card className="cursor-pointer w-32 h-32 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 hover:bg-white backdrop-blur-sm !rounded">
                      <CardContent className="p-4 flex flex-col items-center">
                        <Image
                          src={course.icon}
                          alt={`${course.title} icon`}
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <h3 className="text-safetyBlue text-sm font-semibold text-center">
                          {course.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
