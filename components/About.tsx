"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import CertificateCard from "./CertificateCard";

const TABS = [
  {
    id: "biodata",
    label: "Biodata",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          ry="2"
          className="opacity-0"
        />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <path
          d="M12 17.77L5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
          className="opacity-0"
        />
      </svg>
    ),
  },
  {
    id: "certificate",
    label: "Certificate",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const contentData = [
    <div
      key="biodata"
      className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500"
    >
      <p className="text-gray-400 leading-relaxed text-lg">
        I am a student at{" "}
        <span className="text-white font-semibold">
          Jember State Polytechnic
        </span>
        , majoring in Information Technology with a focus on Informatics
        Engineering. I'm currently pursuing a role as a Junior Frontend
        Engineer. I'm adept at working in a team and have had graphic design
        skills for almost two years. I'm also interested in further enhancing my
        design skills, particularly in UI/UX, in line with my interest in
        frontend development.
      </p>
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="w-28 text-white font-semibold">Age :</span>
          <span className="text-gray-400">21</span>
        </div>
        <div className="flex items-center">
          <span className="w-28 text-white font-semibold">Address :</span>
          <span className="text-gray-400">Trenggalek, East Java</span>
        </div>
        <div className="flex items-center">
          <span className="w-28 text-white font-semibold">Email :</span>
          <span className="text-gray-400">agengpujipangestu3@email.com</span>
        </div>
      </div>
    </div>,

    <div
      key="experience"
      className="relative space-y-0 animate-in fade-in slide-in-from-right-4 duration-500"
    >
      <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-gray-800"></div>

      <div className="relative pl-10 pb-12">
        <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center">
          <div className="absolute w-full h-full bg-[#05e448] rounded-full animate-ping opacity-75"></div>
          <div className="relative w-4 h-4 bg-[#05e448] rounded-full shadow-[0_0_15px_#05e448]"></div>
        </div>

        <h3 className="text-xl font-bold text-white">
          Graphic Designer in SzonaRempah
        </h3>
        <span className="text-sm text-[#05e448] font-mono">2022 - Present</span>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          Creating social media visual content, promotional materials, and
          herbal product packaging designs using Canva and Figma to maximize
          product image and customer interaction.
        </p>
      </div>

      <div className="relative pl-10 pb-2">
        <div className="absolute left-[2px] top-2 w-3 h-3 bg-gray-600 rounded-full border-4 border-[#02050A] z-10"></div>

        <h3 className="text-xl font-bold text-white">UI/UX Designer Intern</h3>
        <span className="text-sm text-gray-500 font-mono">2025 - 2025</span>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          Help develop digital products (ezSign) that are not only visually
          appealing (UI) but also easy to use and provide a pleasant user
          experience (UX).
        </p>
      </div>
    </div>,

    <div
      key="certificate"
      className="flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-500"
    >
      <div className="grid grid-cols-1 gap-4">
        <CertificateCard
          title="AI Productivity and AI API Integration for Developers"
          publisher="Hacktiv8 Indonesia"
          date="2025"
          logoSrc="/images/hacktiv.svg"
          certImageSrc="/images/hacktifCert.jpg"
        />
        <CertificateCard
          title="UIUX Design"
          publisher="dibimbing.id"
          date="2025"
          logoSrc="/images/dibimbing.jpg"
          certImageSrc="/images/dibimbingcert.jpg"
        />
      </div>

      <div className="flex justify-end mt-2">
        <a
          href="https://www.linkedin.com/in/ageng-puji-pangestu-1850a3235/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-400 hover:text-[#05e448] transition-colors duration-300 text-sm font-medium"
        >
          View more on LinkedIn
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>,
  ];

  return (
    <section id="about" className="py-24 relative">
      <Container>
        {/* === ANIMASI JUDUL: FADE UP === */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }} // Animasi cuma sekali biar ga ganggu pas scroll naik turun
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            About <span className="text-[#05e448]">me</span>
          </h2>
        </motion.div>

        {/* === ANIMASI KONTEN UTAMA: FADE UP (DELAYED) === */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delay dikit biar muncul setelah judul
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 md:gap-20 items-start"
        >
          <div className="w-full md:w-1/3 flex flex-col relative">
            <div className="absolute left-[2px] top-4 bottom-4 w-[2px] bg-gray-800/50 rounded-full"></div>
            <div className="flex flex-col gap-8">
              {TABS.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative pl-10 py-2 text-left flex items-center gap-4 text-xl transition-all duration-300 group ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#05e448] rounded-full shadow-[0_0_15px_#05e448]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <div
                    className={`${
                      activeTab === index ? "text-[#05e448] scale-110" : ""
                    } transition-transform duration-300`}
                  >
                    {tab.icon}
                  </div>
                  <span
                    className={
                      activeTab === index ? "font-semibold" : "font-normal"
                    }
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {contentData[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}