"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-[999] cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      <div className="relative w-12 h-12 flex items-center justify-center bg-[#02050A]/80 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(5,228,72,0.3)] border border-white/10 group hover:scale-110 transition-transform duration-300">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-gray-700 fill-none"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-[#05e448] fill-none"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ pathLength: scaleX }}
          />
        </svg>

        <div className="text-[#05e448] group-hover:-translate-y-1 transition-transform duration-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
