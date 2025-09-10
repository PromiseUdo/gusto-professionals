"use client";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import {
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Using react-icons for all
import Link from "next/link";
import { useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Topbar = () => {
  const topbarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={topbarRef}
      className="hidden md:block fixed top-0 left-0 w-full bg-[#24272c] border-b border-gray-200 py-2 z-10 pointer-events-auto"
    >
      <MaxWidthWrapper>
        <div className="flex flex-row items-center justify-between gap-4">
          {/* Flags */}
          <div className="flex items-center gap-3">
            {[
              { src: "/uae.jpg", alt: "UAE Flag" },
              { src: "/britain.jpg", alt: "Britain Flag" },
              { src: "/nigeria.jpg", alt: "Nigeria Flag" },
            ].map((flag, idx) => (
              <div key={idx} className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={flag.src}
                  alt={flag.alt}
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Social Media and Contact */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575926681833&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaFacebookF
                  color="#ffffff"
                  className="hover:text-white/90 h-5 w-5"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/gusto-professional/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaLinkedin
                  color="#ffffff"
                  className="hover:text-white/80 h-5 w-5"
                />
              </a>

              <a
                // href="https://wa.me/+447448504110"
                href="https://wa.me/+971529489070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaWhatsapp
                  color="#ffffff"
                  className="hover:text-white/80 h-5 w-5"
                />
              </a>
              <a
                href="https://x.com/gustohse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaXTwitter
                  color="#ffffff"
                  className="hover:text-white/80 h-5 w-5"
                />
              </a>
              <a
                href="https://www.instagram.com/gustoprofessional"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaInstagram
                  color="#ffffff"
                  className="hover:text-white/80 h-5 w-5"
                />
              </a>

              <a
                href="mailto:info.gustoprofessionals@gmail.com"
                className="text-gray-600 hover:text-[#05418f] transition-colors"
              >
                <FaEnvelope
                  color="#ffffff"
                  className="hover:text-white/80 h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Topbar;
