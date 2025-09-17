import React from "react";
import Banner from "./components/banner";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import WhoWeAre from "./components/who-we-are";
import JobsList from "./components/jobs-list";

import { createClient } from "contentful";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";

const JobsRenderer = ({ jobs }: { jobs: any }) => {
  // Filter featured posts (server-side filtering already applied)

  return (
    <>
      <JobsList
        jobs={jobs.items}
        emptyTitle="No Featured Posts Found"
        emptyDescription={
          "It looks like there are no jobs to display right now. Check back later for new opportunities!"
        }
      />
    </>
  );
};

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const query: any = {
    content_type: "jobs",
  };

  const jobs = await client.getEntries(query);

  // Sort all posts by createdAt (newest first)
  jobs.items.sort(
    (a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
  );

  return [jobs];
}

const Page = async () => {
  const [jobs] = await getData();

  return (
    <div className="border border-b border-gray-300 flex flex-col items-center w-full bg-white">
      {/* Banner */}
      <Banner jobsCount={jobs.items.length} />
      {/* <JobsList /> */}

      <Suspense
        fallback={
          <MaxWidthWrapper>
            <div className="py-8 flex flex-col items-center gap-4">
              <LoaderCircle
                className="h-8 w-8 animate-spin text-primary"
                aria-hidden="true"
              />
              <p className="text-lg font-medium text-foreground">
                Loading jobs...
              </p>
              <p className="text-sm text-muted-foreground">
                Please wait while we fetch the latest jobs.
              </p>
            </div>
          </MaxWidthWrapper>
        }
      >
        <JobsRenderer jobs={jobs} />
      </Suspense>

      <WhoWeAre />
    </div>
  );
};

export default Page;
