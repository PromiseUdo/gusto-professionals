import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { User } from "lucide-react"; // Import user icon

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Gusto’s professionals didn’t just join our team—they transformed our safety culture.",
      author: "Project HSE Lead",
      role: "Energy Sector",
    },
    {
      quote:
        "Training quality unmatched. Deployment time? Fast. Results? Immediate.",
      author: "Construction Director",
      role: "UAE",
    },
  ];

  return (
    <div className="relative w-full bg-white text-[#1e1e1e]">
      <MaxWidthWrapper className=" !md:px-12 py-12 !lg:px-12 relative z-10">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-[#1e1e1e] font-semibold text-xl tracking-wide">
            Voice of the Learner
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-tl-[4rem] rounded-tr-none rounded-bl-none rounded-br-none shadow p-6 "
            >
              <p className="text-[#1e1e1e] text-base mb-4">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#04306e] rounded-full">
                  <User fill="#04306e" className="h-6 w-6 text-[#ffffff] " />
                </div>
                <div>
                  <p className="text-[#1e1e1e] font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonial;
