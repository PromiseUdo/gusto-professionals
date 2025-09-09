"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { Search, X, Menu, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { useRouter } from "next/navigation";

const MotionNav = motion.nav;

interface CourseCategory {
  title: string;
  icon: string;
}

interface MenuSection {
  heading: string;
  links: { label: string; href: string }[];
}

const coursesCategory: CourseCategory[] = [
  { title: "Health & Safety", icon: "/safety-helmet.svg" },
  { title: "Project Management", icon: "/manager.svg" },
  { title: "Human Resource", icon: "/human-resources.svg" },
  { title: "Quality Assurance", icon: "/medal.svg" },
  { title: "ISO/Lead Auditor", icon: "/audit.svg" },
  { title: "First Aid Training", icon: "/first-aid-kit.svg" },
  { title: "Lean & Six Sigma", icon: "/signal.svg" },
];

const popularCourses: MenuSection = {
  heading: "Popular Courses",
  links: [
    { label: "PMP (Project Management Professional)", href: "/" },
    { label: "Customer Relationship Management (CRM)", href: "/" },
    { label: "Safety Harness Inspection", href: "/" },
    { label: "Health & Safety Awareness", href: "/" },
    { label: "Communications for Supervisors", href: "/" },
    { label: "Forklift Operator", href: "/" },
    { label: "Crawler Crane", href: "/" },
  ],
};

const gustoTrainings: MenuSection = {
  heading: "Gusto Training",
  links: [
    {
      label: "Health & Safety",
      href: `/courses?category=${encodeURIComponent("Health & Safety")}`,
    },
    {
      label: "Project Management",
      href: `/courses?category=${encodeURIComponent("Project Management")}`,
    },
    {
      label: "Human Resource",
      href: `/courses?category=${encodeURIComponent("Human Resource")}`,
    },
    {
      label: "ISO/Lead Auditor",
      href: `/courses?category=${encodeURIComponent("ISO/Lead Auditor")}`,
    },
    {
      label: "Quality Assurance",
      href: `/courses?category=${encodeURIComponent("Quality Assurance")}`,
    },
    {
      label: "First Aid Training",
      href: `/courses?category=${encodeURIComponent("First Aid Training")}`,
    },
    {
      label: "Lean & Six Sigma",
      href: `/courses?category=${encodeURIComponent("Lean & Six Sigma")}`,
    },
  ],
};

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [isLearnOpen, setIsLearnOpen] = useState<boolean>(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [arrowPosition, setArrowPosition] = useState<number>(0);
  const [megaMenuTop, setMegaMenuTop] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const learnButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const TOPBAR_HEIGHT = 40;
  const recruitmentUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScZbeb5WaywS27oMHj6n6vLBBUapSitZup1vUocw3M4kuD24g/viewform?usp=header";
  const iconVariants: Variants = {
    closed: { rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { rotate: 90, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: "none" as const,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const megaMenuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const toggleLearn = () => {
    setIsLearnOpen(!isLearnOpen);
    if (!isLearnOpen) setOpenAccordion(null);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (learnButtonRef.current && isMegaMenuOpen) {
      const rect = learnButtonRef.current.getBoundingClientRect();
      const navRect = navRef.current?.getBoundingClientRect();
      if (navRect) {
        const position = rect.left + rect.width / 2 - navRect.left;
        setArrowPosition(position);
      }
    }
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const footer = document.querySelector("footer");
      if (footer?.contains(event.target as Node)) {
        return;
      }
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !learnButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !navRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updateMegaMenuPosition = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const isTopbarVisible = window.scrollY < TOPBAR_HEIGHT;
        const navbarHeight = navRect.height - 18;
        const topPosition = isTopbarVisible
          ? navbarHeight + TOPBAR_HEIGHT
          : navbarHeight;
        setMegaMenuTop(topPosition);
      }
    };
    let timeout: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateMegaMenuPosition, 50);
    };
    window.addEventListener("scroll", debouncedUpdate);
    updateMegaMenuPosition();
    return () => {
      window.removeEventListener("scroll", debouncedUpdate);
      clearTimeout(timeout);
    };
  }, [isMegaMenuOpen]);

  const handleLearnClick = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <MotionNav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="shadow mt-0 md:mt-[2.5rem] sticky top-0 z-50 w-full bg-white text-[#1e1e1e] py-[0.8rem]"
    >
      <MaxWidthWrapper>
        <div className="w-full flex items-center justify-between">
          {!isSearchOpen ? (
            <>
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    height={40}
                    width={40}
                    className="object-cover object-center transition-transform duration-300 hover:scale-110"
                    loading="eager"
                    alt="website logo"
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="relative" ref={megaMenuRef}>
                  <button
                    ref={learnButtonRef}
                    onClick={handleLearnClick}
                    className="flex items-center gap-1 hover:text-safetyYellow transition-colors duration-200 z-60"
                    style={{ pointerEvents: "auto" }}
                  >
                    Learn
                    <motion.div
                      animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <motion.div
                    variants={megaMenuVariants}
                    initial="closed"
                    animate={isMegaMenuOpen ? "open" : "closed"}
                    className="fixed left-0 mt-6 pt-3 pb-6 border border-gray-300 right-0 bg-white shadow-lg rounded overflow-x-hidden z-30 w-[85%] mega-menu"
                    style={{
                      top: `${megaMenuTop}px`,
                      marginLeft: "auto",
                      marginRight: "auto",
                      transition: "top 0.3 ease",
                    }}
                  >
                    <div
                      className="absolute top-[-10px] border-[10px] border-transparent border-b-white"
                      style={{
                        left: `${arrowPosition}px`,
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                    <div className="max-w-7xl mx-auto grid grid-cols-3 p-8 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-6">
                          Course Categories
                        </h3>
                        <ul className="space-y-3">
                          {coursesCategory.map((category) => (
                            <li
                              key={category.title}
                              className="flex items-center gap-2"
                            >
                              <Image
                                src={category.icon}
                                width={20}
                                height={20}
                                alt={`${category.title} icon`}
                              />
                              <Link
                                href={`/courses?category=${encodeURIComponent(
                                  category.title
                                )}`}
                                className="hover:text-safetyYellow transition-colors duration-200"
                              >
                                {category.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-6">
                          {popularCourses.heading}
                        </h3>
                        <ul className="space-y-3">
                          {popularCourses.links.map((course) => (
                            <li key={course.label}>
                              <Link
                                href={course.href}
                                className="hover:text-safetyYellow transition-colors duration-200"
                              >
                                {course.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-6">
                          {gustoTrainings.heading}
                        </h3>
                        <ul className="space-y-3">
                          {gustoTrainings.links.map((training) => (
                            <li key={training.label}>
                              <Link
                                href={training.href}
                                className="hover:text-safetyYellow transition-colors duration-200"
                              >
                                {training.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <Link
                  href="/courses"
                  className="hover:text-safetyYellow transition-colors duration-200"
                >
                  Courses
                </Link>
                <Link
                  href={`/courses?category=${encodeURIComponent(
                    "Individuals"
                  )}`}
                  className="hover:text-safetyYellow transition-colors duration-200"
                >
                  Individuals
                </Link>
                <Link
                  href="/about-us"
                  className="hover:text-safetyYellow transition-colors duration-200"
                >
                  About
                </Link>
                {/* <Link
                  href="/about-us"
                  className="hover:text-safetyYellow transition-colors duration-200"
                >
                  Recruitment
                </Link> */}
                <a
                  href={recruitmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-safetyYellow transition-colors duration-200"
                >
                  Recruitment
                </a>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
                <Button
                  asChild
                  variant={"outline"}
                  size={"lg"}
                  className="border-2 !rounded hover:text-white border-[#04306e] hover:bg-[#04306e]"
                >
                  <Link href="/blog">Blog</Link>
                </Button>
                <Button
                  asChild
                  size={"lg"}
                  className="text-white !rounded -ml-4 bg-[#05418f] hover:bg-[#04306e]"
                >
                  <Link href="/contact-us">Contact</Link>
                </Button>
              </div>
              <div className="md:hidden flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-[#1e1e1e]"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <motion.div
                    variants={iconVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                  >
                    {isMenuOpen ? (
                      <X className="h-6 w-6 text-[#1e1e1e]" />
                    ) : (
                      <Menu className="h-6 w-6 text-[#1e1e1e]" />
                    )}
                  </motion.div>
                </Button>
              </div>
            </>
          ) : (
            <motion.form
              onSubmit={handleSearchSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex w-full items-center gap-4"
            >
              <Input
                placeholder="Search courses"
                className="flex-1 py-[1.2rem] bg-white text-safetyBlue focus-visible:!ring-[#04306e] rounded focus-visible:!ring-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                variant="ghost"
                className="text-[#1e1e1e] bg-gray-100 hover:text-safetyYellow"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchTerm("");
                }}
                className="text-[#1e1e1e] bg-gray-100 hover:text-safetyYellow"
              >
                <X className="h-5 w-5" />
              </Button>
            </motion.form>
          )}
        </div>
        <motion.div
          ref={mobileMenuRef}
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          className="fixed top-[4rem] left-0 right-0 md:hidden bg-white shadow-lg z-50 overflow-y-auto"
          style={{
            maxHeight: "calc(100vh - 4rem)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            <div className="flex flex-col">
              <button
                onClick={toggleLearn}
                className="flex items-center justify-between w-full py-2 text-left focus:outline-none hover:text-safetyYellow transition-colors duration-200"
                aria-expanded={isLearnOpen}
                aria-controls="learn-content"
              >
                <span className="text-[#1e1e1e] tracking-tight">Learn</span>
                <motion.div
                  animate={{ rotate: isLearnOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
                </motion.div>
              </button>
              <div
                id="learn-content"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isLearnOpen ? "max-h-[1000px] pt-2" : "max-h-0"
                }`}
              >
                <div className="border border-gray-300 rounded-lg p-4 space-y-4">
                  <div className="border-b border-gray-600/30">
                    <button
                      onClick={() => toggleAccordion("courseCategories")}
                      className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                      aria-expanded={openAccordion === "courseCategories"}
                      aria-controls="course-categories-content"
                    >
                      <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
                        Course Categories
                      </span>
                      {openAccordion === "courseCategories" ? (
                        <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
                      )}
                    </button>
                    <div
                      id="course-categories-content"
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === "courseCategories"
                          ? "max-h-96 pb-4"
                          : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-2">
                        {coursesCategory.map((category) => (
                          <li
                            key={category.title}
                            className="flex items-center gap-2"
                          >
                            <Image
                              src={category.icon}
                              width={16}
                              height={16}
                              alt={`${category.title} icon`}
                            />
                            <Link
                              href={`/courses?category=${encodeURIComponent(
                                category.title
                              )}`}
                              className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsLearnOpen(false);
                                setOpenAccordion(null);
                              }}
                            >
                              {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-b border-gray-600/30">
                    <button
                      onClick={() => toggleAccordion("popularCourses")}
                      className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                      aria-expanded={openAccordion === "popularCourses"}
                      aria-controls="popular-courses-content"
                    >
                      <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
                        {popularCourses.heading}
                      </span>
                      {openAccordion === "popularCourses" ? (
                        <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
                      )}
                    </button>
                    <div
                      id="popular-courses-content"
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === "popularCourses"
                          ? "max-h-96 pb-4"
                          : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-2">
                        {popularCourses.links.map((course) => (
                          <li key={course.label}>
                            <Link
                              href={course.href}
                              className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsLearnOpen(false);
                                setOpenAccordion(null);
                              }}
                            >
                              {course.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-b border-gray-600/30 last:border-b-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleAccordion("gustoTrainings");
                      }}
                      className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                      aria-expanded={openAccordion === "gustoTrainings"}
                      aria-controls="gusto-trainings-content"
                    >
                      <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
                        {gustoTrainings.heading}
                      </span>
                      {openAccordion === "gustoTrainings" ? (
                        <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
                      )}
                    </button>
                    <div
                      id="gusto-trainings-content"
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openAccordion === "gustoTrainings"
                          ? "max-h-96 pb-4"
                          : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-2">
                        {gustoTrainings.links.map((training) => (
                          <li key={training.label}>
                            <Link
                              href={training.href}
                              className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsLearnOpen(false);
                                setOpenAccordion(null);
                              }}
                            >
                              {training.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <Link
                href="/courses"
                className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href={`/courses?category=${encodeURIComponent("Individuals")}`}
                className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Individuals
              </Link>
              <Link
                href="/about-us"
                className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href={recruitmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Recruitment
              </a>
              <Button
                asChild
                variant={"outline"}
                size={"lg"}
                className="w-full border-2 !rounded hover:text-white border-[#04306e] hover:bg-[#04306e]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/blog">Blog</Link>
              </Button>
              <Button
                asChild
                size={"lg"}
                className="w-full mt-2 text-white !rounded bg-[#05418f] hover:bg-[#04306e]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/contact-us">Contact</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </MotionNav>
  );
};

export default Navbar;
