import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";
import JobCard from "./job-card";

const JobsList = ({
  jobs,
  emptyTitle,
  emptyDescription,
}: {
  jobs: any;
  emptyTitle: string;
  emptyDescription: string;
}) => {
  return (
    <div className="mt-20 mb-10">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col gap-y-4">
          {jobs.map((job: any, idx: number) => (
            <JobCard key={idx} job={job} index={idx} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JobsList;
