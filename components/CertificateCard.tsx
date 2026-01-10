"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateCardProps {
  title: string;
  publisher: string;
  date: string;
  logoSrc: string;
  certImageSrc: string;
}

export default function CertificateCard({
  title,
  publisher,
  date,
  logoSrc,
  certImageSrc,
}: CertificateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-colors duration-300 group ${
        isExpanded ? "border-[#05e448]/50 bg-white/10" : "hover:border-[#05e448]/50"
      }`}
    >
      <motion.div layout className="flex items-center gap-4">
        <div className="relative w-12 h-12 bg-white/10 rounded-lg p-2 flex-shrink-0">
          <Image
            src={logoSrc}
            alt={publisher}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h4 className="text-white font-bold group-hover:text-[#05e448] transition">
            {title}
          </h4>
          <p className="text-xs text-gray-500">
            {publisher} • {date}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 overflow-hidden"
          >

            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-white/10 bg-black/50">
              <Image
                src={certImageSrc}
                alt={`Certificate for ${title}`}
                fill
                className="object-contain" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}