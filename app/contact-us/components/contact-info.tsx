"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";

import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full bg-gray-50">
      <MaxWidthWrapper className="py-4 md:py-12">
        <div>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-12">
            <motion.div className="flex items-center gap-4 hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaFacebookF className="h-6 w-6 md:h-10 md:w-10 text-[#05418f] flex-shrink-0" />
              <div>
                {" "}
                <p className="text-sm font-semibold text-[#1e1e1e]">Facebook</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61575926681833&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e1e1e] hover:text-safetyYellow text-sm "
                >
                  Follow us on Facebook
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-4 hover:bg-gray-50 p-4 rounded  transition-all duration-300">
              <FaWhatsapp className="h-6 w-6 md:h-10 md:w-10 text-[#05418f] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/+971529489070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e1e1e] hover:text-safetyYellow text-sm "
                >
                  +971 529 489 070
                </a>
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4 hover:bg-gray-50 p-4 rounded transition-all duration-300">
              <FaEnvelope className="h-6 w-6 md:h-10 md:w-10 text-[#05418f] flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1e1e1e]">Email</p>
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#1e1e1e] hover:text-safetyYellow text-sm "
                >
                  info.gustoprofessionals@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactInfo;
