"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Shield,
  Users,
  BookOpen,
  CheckCircle,
  HardHat,
} from "lucide-react";

// Animation variants for the container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      title: "Strategic HSE Talent Deployment",
      description:
        "Project-based, contract, or permanent placements to ensure your safety team is ready to deliver from day one.",
      icon: <Users className="h-10 w-10 text-[#04306e]" />,
      borderColor: "#FF6B6B", // Coral Red
    },
    {
      title: "Leadership-Focused HSE Training",
      description:
        "Custom-designed programs aligned to ISO, OSHA, NEBOSH, and regional compliance frameworks to empower safety leaders.",
      icon: <BookOpen className="h-10 w-10 text-[#04306e]" />,
      borderColor: "#4ECDC4", // Turquoise
    },
    {
      title: "Compliance Risk Audits",
      description:
        "Pre-project staffing assessments and policy reviews to mitigate risks and ensure regulatory adherence.",
      icon: <Shield className="h-10 w-10 text-[#04306e]" />,
      borderColor: "#FFD93D", // Golden Yellow
    },
    {
      title: "Mobilisation Readiness Support",
      description:
        "Site-specific HSE induction and manpower matching to streamline project startup and ensure safety compliance.",
      icon: <CheckCircle className="h-10 w-10 text-[#04306e]" />,
      borderColor: "#6B728E", // Slate Blue
    },
    {
      title: "Embedded HSE Solutions",
      description:
        "From one safety officer to full-stack HSE management teams, we provide tailored solutions for your safety needs.",
      icon: <HardHat className="h-10 w-10 text-[#04306e]" />,
      borderColor: "#FF8E3C", // Vivid Orange
    },
  ];

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="font-medium leading-relaxed text-3xl tracking-tight text-[#1e1e1e] mb-4">
            <span className="text-[#04306e]">Our Services</span>
          </h2>
          <p className="text-base text-[#1e1e1e] max-w-2xl mx-auto mb-12">
            Discover how Gusto HSE Professionals can elevate your safety
            operations with tailored, high-impact solutions.
          </p>

          {/* Services Stacked Layout */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 rounded shadow hover:shadow-md transition-shadow duration-300",
                  index % 2 === 0
                    ? "md:flex-row border-l-[5px]"
                    : "md:flex-row-reverse border-r-[5px]"
                )}
                style={{
                  [index % 2 === 0 ? "borderLeftColor" : "borderRightColor"]:
                    service.borderColor,
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-sm">
                  {service.icon}
                </div>
                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-[#04306e] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#1e1e1e]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
