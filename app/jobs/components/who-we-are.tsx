import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="mt-10 mb-20 w-full  ">
      <MaxWidthWrapper>
        <div className="bg-[#EBF8FF] py-10 px-10 w-full rounded-md flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-3xl font-semibold">Who we are</h3>

            <p className="">
              At Gusto HSE Professionals, we go beyond recruitment—we are a
              strategic powerhouse for training and deploying high-calibre HSE
              professionals capable of transforming safety culture on Day One.
            </p>
          </div>

          <div className="flex">
            <Button
              asChild
              size={"lg"}
              className=" mt-2 text-white !rounded bg-[#05418f] hover:bg-[#04306e]"
            >
              <Link href="/contact-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhoWeAre;
