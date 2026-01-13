"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isExit, setIsExit] = useState(false);

  const handleEnter = () => {
    setIsExit(true);
    setTimeout(() => {
      onStart();
    }, 800);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isExit ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#02050A] text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#05e448]/20 rounded-full blur-[120px] opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-sm tracking-[0.2em] uppercase"
        >
          My Personal Website 2026
        </motion.p>

        <motion.button
          onClick={handleEnter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full border border-[#05e448]/50 group-hover:border-[#05e448] transition-colors"></div>

          <div className="absolute inset-0 bg-[#05e448] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          <span className="relative z-10 font-medium text-[#05e448] group-hover:text-white transition-colors duration-300 flex items-center gap-2 cursor-pointer">
            Enter My Personal Website
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
