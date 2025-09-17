"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa"; // Social media icons
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerContent = [
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        // { label: "Services", href: "/" },
        // { label: "Why Gusto?", href: "/" },
        { label: "Recruitment", href: "/" },
        { label: "Contact", href: "/contact-us" },
        { label: "Jobs", href: "/jobs" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Gusto Trainings",
      links: [
        {
          label: "Health & Safety",
          href: `/courses?category=${encodeURIComponent(`Health & Safety`)}`,
        },
        {
          label: "Project Management",
          href: `/courses?category=${encodeURIComponent(`Project Management`)}`,
        },
        {
          label: "Human Resource",
          href: `/courses?category=${encodeURIComponent(`Human Resource`)}`,
        },
        {
          label: "ISO/Lead Auditor",
          href: `/courses?category=${encodeURIComponent(`ISO/Lead Auditor`)}`,
        },
        {
          label: "Quality Assurance",
          href: `/courses?category=${encodeURIComponent(`Quality Assurance`)}`,
        },
        {
          label: "First Aid Training",
          href: `/courses?category=${encodeURIComponent(`First Aid Training`)}`,
        },
        {
          label: "Lean & Six Sigma",
          href: `/courses?category=${encodeURIComponent(`Lean & Six Sigma`)}`,
        },
      ],
    },
    {
      heading: "Featured Programs",
      links: [
        {
          label: "PMP (Project Management Professional)",
          href: "/",
        },
        {
          label: "Customer Relationship Management (CRM)",
          href: "/",
        },
        { label: "Safety Harness Inspection", href: "/" },
        { label: "Health & Safety Awareness", href: "/" },
        { label: "Communications for Supervisors", href: "/" },
        { label: "Forklift Operator", href: "/" },
        { label: "Crawler Crane", href: "/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Use", href: "/legal/terms-of-use" },
      ],
    },
  ];

  return (
    <footer className="relative bg-white text-[#1e1e1e]">
      <MaxWidthWrapper className="py-10 !md:px-12 md:py-12 !lg:px-12 relative z-10">
        {/* Desktop: 4 Columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {footerContent.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1e1e1e] tracking-tight">
                {column.heading}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-[#1e1e1e] hover:text-[#1e1e1e] hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion with Border */}
        <div className="md:hidden space-y-4 border border-gray-300 rounded-lg p-4">
          {footerContent.map((column, idx) => (
            <div
              key={idx}
              className="border-b border-gray-600/30 last:border-b-0"
            >
              <button
                onClick={(e) => {
                  console.log("Footer Gusto Trainings clicked", e.target);

                  e.preventDefault();
                  e.stopPropagation(); // Add this to prevent bubbling to document-level listeners

                  toggleSection(idx);
                }}
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                aria-expanded={openSection === idx}
                aria-controls={`accordion-content-${idx}`}
              >
                <h3 className="text-lg font-semibold text-[#1e1e1e] tracking-tight">
                  {column.heading}
                </h3>
                {openSection === idx ? (
                  <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
                )}
              </button>
              <div
                id={`accordion-content-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === idx ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-[#1e1e1e] hover:underline underline-offset-4 transition-all duration-200 ease-in-out block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright, Cookie Notice, and Social Media */}
        <div className="mt-10 md:mt-12 border-t border-gray-300 pt-6 text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575926681833&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@gustoprofessional"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
            </a>

            <a
              href="https://wa.me/+971529489070"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/gustohse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaXTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/gusto-professional/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/gustoprofessional"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@gustoprofessional"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaTiktok className="h-6 w-6" />
            </a>
            <a
              href="mailto:info.gustoprofessionals@gmail.com"
              className="text-[#1e1e1e] hover:text-[#04306e] transition-colors"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright and Cookie Notice */}
          <div className="space-y-2 text-xs">
            <p>&copy; 2025 Gusto Professionals. All rights reserved.</p>
            <p>
              We use cookies and other technologies to enhance your experience
              on our website.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
