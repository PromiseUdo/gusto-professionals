"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

type Course = {
  title: string;
  image: string;
  duration: string;
  level: string;
  courseCategory: string;
};

interface AllCoursesSidebarProps {
  categories: string[];
  durations: string[];
  levels: string[];
  courses: Course[];
  onDurationFilterChange: (durations: string[]) => void;
  onLevelFilterChange: (levels: string[]) => void;
  selectedDurations: string[];
  selectedLevels: string[];
  resetFilters: () => void;
}

export default function AllCoursesSidebar({
  categories,
  durations,
  levels,
  courses,
  onDurationFilterChange,
  onLevelFilterChange,
  selectedDurations,
  selectedLevels,
  resetFilters,
}: AllCoursesSidebarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get("category")
    ? decodeURIComponent(searchParams.get("category")!)
    : null;

  const handleDurationChange = (duration: string) => {
    const newSelectedDurations = selectedDurations.includes(duration)
      ? selectedDurations.filter((d) => d !== duration)
      : [...selectedDurations, duration];
    onDurationFilterChange(newSelectedDurations);
  };

  const handleLevelChange = (level: string) => {
    const newSelectedLevels = selectedLevels.includes(level)
      ? selectedLevels.filter((l) => l !== level)
      : [...selectedLevels, level];
    onLevelFilterChange(newSelectedLevels);
  };

  return (
    <aside className="h-[calc(100vh-1rem)] hidden lgSidebar:block bg-white rounded-lg shadow-sm p-4 sticky top-[4.5rem] border border-gray-100">
      <ScrollArea className="h-[calc(100vh-4rem)] pr-4">
        {/* Reset Filters Button */}
        <div className="mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="w-full text-[#04306e] border-[#04306e] hover:bg-[#04306e]/10"
          >
            Reset Filters
          </Button>
        </div>

        {/* Category Filter Section */}
        <section className="space-y-2">
          <div className="mb-3 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#04306e]"></span>
              Categories
            </h3>
          </div>
          <div className="px-3">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category}
                  href={`/courses?category=${encodeURIComponent(category)}${
                    searchParams.get("search")
                      ? `&search=${searchParams.get("search")}`
                      : ""
                  }`}
                  className={`block py-2 text-sm cursor-pointer hover:text-[#04306e] transition-colors ${
                    selectedCategory === category
                      ? "text-[#04306e] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">
                No categories available
              </p>
            )}
          </div>
        </section>

        {/* Duration Filter Section */}
        <section className="mt-6 space-y-2">
          <div className="mb-3 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#04306e]"></span>
              Duration
              {selectedDurations.length > 0
                ? ` (${selectedDurations.length})`
                : ""}
            </h3>
          </div>
          <div className="px-3">
            {durations.length > 0 ? (
              durations.map((duration) => (
                <label
                  key={duration}
                  className="flex items-center py-2 text-sm text-gray-700 cursor-pointer hover:text-[#04306e]"
                >
                  <input
                    type="checkbox"
                    checked={selectedDurations.includes(duration)}
                    onChange={() => handleDurationChange(duration)}
                    className="mr-2 h-4 w-4 text-[#04306e] border-gray-300 rounded focus:ring-[#04306e]"
                  />
                  {duration}
                </label>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">
                No durations available
              </p>
            )}
          </div>
        </section>

        {/* Level Filter Section */}
        <section className="mt-6 space-y-2">
          <div className="mb-3 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#04306e]"></span>
              Level
              {selectedLevels.length > 0 ? ` (${selectedLevels.length})` : ""}
            </h3>
          </div>
          <div className="px-3">
            {levels.length > 0 ? (
              levels.map((level) => (
                <label
                  key={level}
                  className="flex items-center py-2 text-sm text-gray-700 cursor-pointer hover:text-[#04306e]"
                >
                  <input
                    type="checkbox"
                    checked={selectedLevels.includes(level)}
                    onChange={() => handleLevelChange(level)}
                    className="mr-2 h-4 w-4 text-[#04306e] border-gray-300 rounded focus:ring-[#04306e]"
                  />
                  {level}
                </label>
              ))
            ) : (
              <p className="text-gray-500 text-sm italic">
                No levels available
              </p>
            )}
          </div>
        </section>
      </ScrollArea>
    </aside>
  );
}
