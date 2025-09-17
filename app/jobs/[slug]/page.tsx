import React from "react";
import JobContent from "./components/job-content";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { createClient } from "contentful";
import Banner from "./components/banner";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

interface IParams {
  slug?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const { items } = await client.getEntries({
    content_type: "jobs",
    "fields.slug": params.slug,
  });

  return (
    <div className="border border-b border-gray-300 flex flex-col items-center w-full bg-white">
      {/* Banner */}
      <Banner />

      <MaxWidthWrapper>
        <JobContent
          items={items}
          title={String(items[0]?.fields?.title || "")}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
