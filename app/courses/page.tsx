import { Suspense } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  bespokeTrainingProgram,
  certificationForIndividuals,
  isoStandardTrainings,
  managementCourses,
  productivityQualityAssuranceTrainings,
  safetyTrainings,
  coursesCategory,
} from "@/config/data";
import ClientAllCoursesPage from "./components/client-all-courses";
import { notFound } from "next/navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const selectedCategory = searchParams.category
    ? decodeURIComponent(searchParams.category)
    : null;
  const searchTerm = searchParams.search
    ? decodeURIComponent(searchParams.search)
    : null;

  const title = searchTerm
    ? `Search Results for "${searchTerm}" - Training Academy`
    : selectedCategory
      ? `${selectedCategory} Courses - Training Academy`
      : "All Courses - Training Academy";

  const description = searchTerm
    ? `Explore courses matching "${searchTerm}" at our Training Academy.`
    : selectedCategory
      ? `Explore our professional training courses in ${selectedCategory}.`
      : "Explore our wide range of professional training courses in management, safety, ISO standards, and more.";

  return {
    title,
    description,
  };
}

function LoadingSkeleton() {
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="h-96 bg-gray-200 rounded-lg animate-pulse hidden md:block" />
      <div className="md:col-span-3">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-56 h-80 bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function AllCoursesPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const selectedCategory = searchParams.category
    ? decodeURIComponent(searchParams.category)
    : null;
  const searchTerm = searchParams.search
    ? decodeURIComponent(searchParams.search)
    : null;

  // Combine all courses
  const allCourses = [
    ...managementCourses,
    ...isoStandardTrainings,
    ...safetyTrainings,
    ...productivityQualityAssuranceTrainings,
    ...bespokeTrainingProgram,
    ...certificationForIndividuals,
  ];

  // Extract unique categories
  const categories = coursesCategory.map((c) => c.title);

  // Validate the selected category
  if (
    selectedCategory &&
    !categories.includes(selectedCategory) &&
    selectedCategory !== "Individuals"
  ) {
    notFound(); // Invalid category
  }

  // Special case for 'Individuals'
  if (selectedCategory === "Individuals") {
    let filteredCourses = certificationForIndividuals;
    if (searchTerm) {
      filteredCourses = filteredCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return (
      <MaxWidthWrapper className="py-8 bg-gray-50">
        <Suspense fallback={<LoadingSkeleton />}>
          <ClientAllCoursesPage
            initialData={filteredCourses}
            initialCategories={categories}
            initialSelectedCategory={selectedCategory}
            initialSearchTerm={searchTerm}
          />
        </Suspense>
      </MaxWidthWrapper>
    );
  }

  // Filter courses by category and/or search term
  let filteredCourses = allCourses;
  if (selectedCategory) {
    filteredCourses = filteredCourses.filter(
      (course) => course.courseCategory === selectedCategory
    );
  }
  if (searchTerm) {
    filteredCourses = filteredCourses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <MaxWidthWrapper className="py-8 bg-gray-50">
      <Suspense fallback={<LoadingSkeleton />}>
        <ClientAllCoursesPage
          initialData={filteredCourses}
          initialCategories={categories}
          initialSelectedCategory={selectedCategory}
          initialSearchTerm={searchTerm}
        />
      </Suspense>
    </MaxWidthWrapper>
  );
}
