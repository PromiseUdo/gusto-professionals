"use client";

import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const RecruitmentCta = () => {
  const router = useRouter();
  const learnMoreUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScZbeb5WaywS27oMHj6n6vLBBUapSitZup1vUocw3M4kuD24g/viewform?usp=header";
  return (
    <div className="w-full bg-gray-50 relative py-12">
      <MaxWidthWrapper className="w-full px-4 sm:px-16">
        <div className="p-6 sm:p-12 border-[1.5px] rounded border-gray-400 w-full h-auto bg-[#f0f5ff]">
          <div className="w-full items-center  grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0">
            {/* Left Column (Text Content) */}
            <div className="flex flex-col justify-start order-1 sm:order-1 py-6 sm:py-0">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Gusto Recruitment
              </h2>
              <p className="text-sm mt-2">
                We hire global talents for organizations
              </p>

              {/* Image for Mobile */}
              <div className="sm:hidden relative h-64 mt-4">
                <Image
                  src={"/training.jpg"}
                  alt="Recruitment illustration"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                  priority
                  quality={85}
                />
              </div>

              <ul className="mt-6 space-y-2.5">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  <span>
                    Connecting top-tier management professionals worldwide
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  <span>
                    Expert safety and risk specialists for all industries
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  <span>Machine technology experts driving innovation</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#05418f] hover:bg-[#04306e] text-white rounded transition-colors"
                >
                  <a
                    href={learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
                <Button
                  onClick={() => router.push("/contact-us")}
                  className=" bg-transparent border border-[#04306e] text-[#1e1e1e] rounded hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right Column (Image) - Hidden on Mobile */}
            <div className="hidden sm:block relative h-96 order-2 sm:order-2">
              <Image
                src={"/training.jpg"}
                alt="Recruitment illustration"
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
                priority
                quality={85}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default RecruitmentCta;
