"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle, Rocket, Scale, Target, Users } from "lucide-react";

// Animation variants for the container and icons
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyGusto = () => {
  const reasons = [
    {
      title: "Regionally<br />Certified",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      bgColor: "#FF6B6B", // Coral Red
    },
    {
      title: "Globally<br />Connected",
      icon: <Globe className="h-8 w-8 text-white" />,
      bgColor: "#4ECDC4", // Turquoise
    },
    {
      title: "Deployment-<br />Ready",
      icon: <Rocket className="h-8 w-8 text-white" />,
      bgColor: "#FFD93D", // Golden Yellow
    },
    {
      title: "Legally<br />Versatile",
      icon: <Scale className="h-8 w-8 text-white" />,
      bgColor: "#6B728E", // Slate Blue
    },
    {
      title: "Results-<br />Driven",
      icon: <Target className="h-8 w-8 text-white" />,
      bgColor: "#FF8E3C", // Vivid Orange
    },
    {
      title: "Trained by<br />Industry Veterans",
      icon: <Users className="h-8 w-8 text-white" />,
      bgColor: "#7B61FF", // Vivid Purple
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="font-medium leading-relaxed text-3xl tracking-tight text-[#1e1e1e] mb-4">
            <span className="text-[#04306e]">Why Choose Gusto?</span>
          </h2>
          <p className="text-base text-[#1e1e1e] max-w-2xl mx-auto mb-12">
            Partner with Gusto HSE Professionals for unparalleled expertise and
            impact in safety leadership.
          </p>

          {/* Hexagon-Inspired Circular Layout */}
          <div className="relative flex flex-col items-center md:block">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 max-w-3xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={iconVariants}
                  className="flex flex-col items-center group"
                  // style={{
                  //   transform:
                  //     index === 0
                  //       ? "translateY(-60px)"
                  //       : index === 1
                  //         ? "translate(-80px, 0px)"
                  //         : index === 2
                  //           ? "translate(80px, 0px)"
                  //           : index === 3
                  //             ? "translate(-80px, 60px)"
                  //             : index === 4
                  //               ? "translate(80px, 60px)"
                  //               : "translateY(120px)",
                  //   ...(window.innerWidth < 768 ? { transform: "none" } : {}),
                  // }}
                >
                  {/* Icon Circle */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow group-hover:shadow-md transition-transform duration-300"
                    style={{ backgroundColor: reason.bgColor }}
                  >
                    {reason.icon}
                  </div>
                  {/* Label */}
                  <span
                    className="mt-3 text-sm font-medium text-[#04306e] text-center max-w-[120px] leading-tight"
                    dangerouslySetInnerHTML={{ __html: reason.title }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyGusto;
