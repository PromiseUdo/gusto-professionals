"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for the image and text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="relative w-full h-[16rem] md:h-[20rem] lg:h-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/about-us.jpg" // Replace with your image path
              alt="Professional upskilling for future careers"
              fill
              className="object-cover"
              priority // Load eagerly since this is above the fold
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center space-y-4 lg:pl-8">
            <h2 className="font-medium leading-relaxed text-3xl tracking-tight text-[#1e1e1e]">
              <span className="text-[#04306e]">Empowering Talent</span> for
              Tomorrow's Careers
            </h2>
            <p className="text-base text-[#1e1e1e]">
              At Gusto HSE Professionals, we go beyond recruitment—we are a
              strategic powerhouse for training and deploying high-calibre HSE
              professionals capable of transforming safety culture on Day One.
            </p>

            <p>
              Whether you're building a megastructure, drilling offshore, or
              managing a high-compliance production line, our people are trained
              to think, lead, and deliver. We combine world-class training with
              region-specific legal expertise to provide ready-to-deploy,
              results-driven safety personnel.
            </p>

            <p>
              From the UAE to Nigeria, the UK to the Gulf, Gusto HSE
              Professionals is where safety leadership is forged, not just
              taught.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
