// import { format } from "date-fns";
// import Link from "next/link";
// import React from "react";

// const JobCard = ({ job }: { job: any }) => {
//   const slug = job?.fields?.slug || null;
//   const href = slug ? `/jobs/${slug}` : "#"; // Fallback to "#" if no slug

//   return (
//     <div className="flex flex-col gap-y-3">
//       <Link href={href} className="text-2xl font-medium hover:underline">
//         {job?.fields?.title}
//       </Link>
//       <p>{job?.fields?.excerpt}</p>
//       <div className="flex flex-col gap-y-1">
//         <div>
//           <span className="font-medium">Location: </span>{" "}
//           <span>{job?.fields?.location}</span>
//         </div>
//         {/* <div>
//           <span className="font-medium">Posted: </span>{" "}
//           <span>{format(job?.sys?.createdAt, "d MMM yyy")}</span>
//         </div> */}
//         <div>
//           <span className="font-medium">Deadline: </span>{" "}
//           <span>{format(job?.fields?.deadline, "d MMM yyy")}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobCard;

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const JobCard = ({ job, index }: { job: any; index: number }) => {
  const slug = job?.fields?.slug || null;
  const href = slug ? `/jobs/${slug}` : "#"; // Fallback to "#" if no slug

  // Alternate bg: even = white, odd = gray
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-200";

  return (
    <div
      className={`flex flex-col gap-y-3 p-6 border-t borer-b border-t-gray-400 border-b-gray-400 ${bgClass}`}
    >
      <Link href={href} className="text-2xl font-medium hover:underline">
        {job?.fields?.title}
      </Link>
      <p>{job?.fields?.excerpt}</p>
      <div className="flex flex-col gap-y-1 text-sm">
        <div>
          <span className="font-medium">Location: </span>
          <span>{job?.fields?.location}</span>
        </div>
        <div>
          <span className="font-medium">Deadline: </span>
          <span>{format(job?.fields?.deadline, "d MMM yyy")}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
