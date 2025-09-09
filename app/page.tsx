import CoursesReel from "@/components/courses-reel";
import GetInTouchCTA from "@/components/get-in-touch-cta";
import HomeBanner from "@/components/home-banner";
import ImageModal from "@/components/image-modal";
import Industries from "@/components/industries";
import RecruitmentCta from "@/components/recruitement-cta";
import Testimonial from "@/components/testimonial";
import {
  bespokeTrainingProgram,
  certificationForIndividuals,
  isoStandardTrainings,
  managementCourses,
  productivityQualityAssuranceTrainings,
  safetyTrainings,
} from "@/config/data";

export default function Home() {
  return (
    <div>
      {/* Main Content */}
      <div className=" flex flex-col items-center w-full">
        <HomeBanner />
        <CoursesReel courses={managementCourses} title={"Management Courses"} />
        <CoursesReel
          courses={isoStandardTrainings}
          title="ISO Standard Trainings"
        />
        <CoursesReel courses={safetyTrainings} title="Safety Trainings" />
        <CoursesReel
          courses={productivityQualityAssuranceTrainings}
          title="Productivity & Quality Assurance Trainings"
        />
        <CoursesReel
          courses={bespokeTrainingProgram}
          title="Bespoke Training Programs"
        />
        <CoursesReel
          courses={certificationForIndividuals}
          title="Certification for Individuals"
        />
        <Testimonial />
        <Industries /> {/* Add Industries section */}
        <RecruitmentCta />
        <GetInTouchCTA />
        <ImageModal />
      </div>
    </div>
  );
}
