"use client";

import { useState, useEffect } from "react";
import CourseCard from "@/components/course-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import AllCoursesSidebar from "./all-courses-sidebar";
import { useRouter, useSearchParams } from "next/navigation";

type Course = {
  title: string;
  image: string;
  duration: string;
  level: string;
  courseCategory: string;
};

interface ClientAllCoursesPageProps {
  initialData: Course[];
  initialCategories: string[];
  initialSelectedCategory: string | null;
  initialSearchTerm: string | null;
}

export default function ClientAllCoursesPage({
  initialData,
  initialCategories,
  initialSelectedCategory,
  initialSearchTerm,
}: ClientAllCoursesPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(initialData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialSelectedCategory ? [initialSelectedCategory] : []
  );
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string | null>(
    initialSearchTerm
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 9;

  // Detect mobile screen size on client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync filters when initialData, searchParams, or initialSearchTerm change
  useEffect(() => {
    const currentCategory = searchParams.get("category")
      ? decodeURIComponent(searchParams.get("category")!)
      : null;
    const currentSearchTerm = searchParams.get("search")
      ? decodeURIComponent(searchParams.get("search")!)
      : null;

    setSelectedCategories(currentCategory ? [currentCategory] : []);
    setSelectedDurations([]);
    setSelectedLevels([]);
    setSearchTerm(currentSearchTerm);

    if (currentCategory && currentCategory.toLowerCase() !== "individuals") {
      applyFilters(
        currentCategory ? [currentCategory] : [],
        [],
        [],
        currentSearchTerm,
        initialData
      );
    } else {
      applyFilters([], [], [], currentSearchTerm, initialData);
    }
  }, [initialData, searchParams, initialSearchTerm]);

  const applyFilters = (
    categories: string[],
    durations: string[],
    levels: string[],
    search: string | null,
    data: Course[] = initialData
  ) => {
    setSelectedCategories(categories);
    setSelectedDurations(durations);
    setSelectedLevels(levels);
    setSearchTerm(search);

    const filtered = data.filter((course) => {
      const matchesCategory =
        categories.length === 0 || categories.includes(course.courseCategory);
      const matchesDuration =
        durations.length === 0 || durations.includes(course.duration);
      const matchesLevel = levels.length === 0 || levels.includes(course.level);
      const matchesSearch =
        !search || course.title.toLowerCase().includes(search.toLowerCase());
      return (
        matchesCategory && matchesDuration && matchesLevel && matchesSearch
      );
    });

    setFilteredCourses(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSelectedLevels([]);
    setSearchTerm(null);
    router.push("/courses");
  };

  const handleDurationFilterChange = (durations: string[]) => {
    applyFilters(selectedCategories, durations, selectedLevels, searchTerm);
  };

  const handleLevelFilterChange = (levels: string[]) => {
    applyFilters(selectedCategories, selectedDurations, levels, searchTerm);
  };

  // Pagination logic
  const totalFilteredItems = filteredCourses.length;
  const totalPages = Math.ceil(totalFilteredItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Truncated pagination logic
  const getPaginationItems = () => {
    const maxVisiblePages = 5;
    const maxVisiblePagesMobile = 3;
    const maxPages = isMobile ? maxVisiblePagesMobile : maxVisiblePages;

    const items: (number | "ellipsis")[] = [];
    const sidePages = Math.floor((maxPages - 3) / 2);

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
      return items;
    }

    items.push(1);
    let startPage = Math.max(2, currentPage - sidePages);
    let endPage = Math.min(totalPages - 1, currentPage + sidePages);

    if (endPage - startPage < maxPages - 2) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages - 1, startPage + maxPages - 3);
      } else {
        startPage = Math.max(2, endPage - (maxPages - 3));
      }
    }

    if (startPage > 2) {
      items.push("ellipsis");
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    if (endPage < totalPages - 1) {
      items.push("ellipsis");
    }

    if (totalPages > 1) {
      items.push(totalPages);
    }

    return items;
  };

  // Get unique durations and levels for sidebar
  const uniqueDurations = Array.from(
    new Set(initialData.map((course) => course.duration))
  ).sort();
  const uniqueLevels = Array.from(
    new Set(initialData.map((course) => course.level))
  ).sort();

  return (
    <div className="grid grid-cols-1 lgSidebar:grid-cols-4 gap-3 md:gap-6">
      <AllCoursesSidebar
        categories={initialCategories}
        durations={uniqueDurations}
        levels={uniqueLevels}
        courses={initialData}
        onDurationFilterChange={handleDurationFilterChange}
        onLevelFilterChange={handleLevelFilterChange}
        selectedDurations={selectedDurations}
        selectedLevels={selectedLevels}
        resetFilters={resetFilters}
      />
      <div className="lgSidebar:col-span-3">
        <div className="bg-white rounded-lg shadow-sm px-3 py-6 md:p-6">
          <h1 className="text-xl font-medium mb-4">
            {searchTerm
              ? `Search Results for "${searchTerm}"`
              : initialSelectedCategory
                ? `${initialSelectedCategory} Courses`
                : "All Courses"}
          </h1>
          {filteredCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {paginatedCourses.map((course, index) => (
                  <CourseCard key={index} course={course} className="w-full" />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="w-full mt-8 overflow-x-hidden">
                  <Pagination>
                    <PaginationContent className="flex flex-wrap justify-center gap-1 sm:gap-2">
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>

                      {getPaginationItems().map((item, index) =>
                        item === "ellipsis" ? (
                          <PaginationItem key={`ellipsis-${index}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        ) : (
                          <PaginationItem className="cursor-pointer" key={item}>
                            <PaginationLink
                              onClick={() => handlePageChange(item)}
                              isActive={currentPage === item}
                              className="text-sm"
                            >
                              {item}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}

                      <PaginationItem className="cursor-pointer">
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-500">No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
