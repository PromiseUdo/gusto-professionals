"use client";

import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
      // Focus the first button for accessibility
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[380px] bg-gradient-to-br from-white to-gray-50 text-[#1e1e1e] border border-gray-200 rounded-xl shadow-2xl p-6 z-50 transition-all duration-300 ease-in-out animate-slide-up"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <h3
        id="cookie-banner-title"
        className="text-lg font-semibold text-[#04306e] mb-2"
      >
        We Value Your Privacy
      </h3>
      <p id="cookie-banner-desc" className="text-sm leading-relaxed mb-4">
        We use cookies to enhance your experience on our HSE training platform.
        You can accept all cookies or reject non-essential ones. See our{" "}
        <Link
          href="/legal/privacy-policy"
          className="text-[#04306e] font-medium hover:underline"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/legal/terms-of-use"
          className="text-[#04306e] font-medium hover:underline"
          aria-label="Terms of Use"
        >
          Terms of Use
        </Link>{" "}
        for details.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          ref={firstFocusableRef}
          onClick={handleAccept}
          className="bg-[#04306e] text-white hover:bg-[#032d5a] flex-1 transition-colors duration-200"
        >
          Accept All
        </Button>
        <Button
          onClick={handleReject}
          variant="outline"
          className="border-[#04306e] text-[#04306e] hover:bg-[#04306e] hover:text-white flex-1 transition-colors duration-200"
        >
          Reject Non-Essential
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
