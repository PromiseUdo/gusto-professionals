import React from "react";
import Banner from "./components/banner";
import About from "./components/about";
import OurImpact from "./components/our-impact";
import Services from "./components/services";
import WhyGusto from "./components/why-gusto";

const page = () => {
  return (
    <div>
      <div className="border-b border-gray-300 flex flex-col items-center w-full">
        <Banner />
        <About />
        <Services />
        <WhyGusto />
        <OurImpact />
      </div>
    </div>
  );
};

export default page;
