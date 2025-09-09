import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { HardHat, Fuel, Factory, Leaf, Plane, Anchor } from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "Construction & Infrastructure", icon: HardHat },
    { name: "Oil & Gas / Energy", icon: Fuel },
    { name: "Manufacturing & FMCG", icon: Factory },
    { name: "Utilities & Renewables", icon: Leaf },
    { name: "Aviation & Logistics", icon: Plane },
    { name: "Maritime & Offshore Operations", icon: Anchor },
  ];

  return (
    <div className="relative w-full bg-white text-[#1e1e1e]">
      <MaxWidthWrapper className="pb-10 !md:px-12 md:pb-12 !lg:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-4 ">
          <h2 className="text-xl font-bold text-[#1e1e1e] tracking-tight">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Layout */}
        <div className="flex flex-row items-center overflow-x-auto snap-x scroll-smooth scrollbar-hide">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <React.Fragment key={idx}>
                {/* Industry Node */}
                <div className="flex flex-col items-center text-center px-4 py-4 min-w-[140px] snap-center group">
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#04306e]" />
                  </div>
                  <p className="mt-4 text-[#1e1e1e] text-sm font-medium max-w-[140px]">
                    {industry.name}
                  </p>
                </div>
                {/* Connecting Line (Desktop Only) */}
                {idx < industries.length - 1 && (
                  <div className="hidden md:block h-px w-8 bg-gray-300/50 border-dashed border-t border-gray-300/50" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Industries;
