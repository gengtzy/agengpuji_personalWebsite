"use client";

import { useState } from "react";
import Image from "next/image";
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
        Informatics Engineering student at{" "}
        <span className="text-white font-semibold">
          Jember State Polytechnic
        </span>
        , and an Web Developer specializing in Frontend Engineering. I apply my
        understanding of design principles to bridge the gap between code and
        aesthetics. Currently seeking a role where I can focus on client-side
        development, crafting responsive and visually compelling interfaces with
        a strong emphasis on UI/UX.
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

      <div className="space-y-3 pt-2">
        <h3 className="text-white font-semibold text-lg">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/laravel2.svg"
                alt="Laravel"
                fill
                className="object-contain"
              />
            </div>
            <span>Laravel</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/nodejs.svg"
                alt="Next.js"
                fill
                className="object-contain"
              />
            </div>
            <span>Node.js</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/tailwindcss2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Tailwind</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/bootstrap5.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Bootstrap</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/react2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>React.js</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/html5.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>HTML5</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/css3.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>CSS3</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/sass.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>SASS</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/github2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Github</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/git.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Git</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/mysql.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>MySQL</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/figma2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Figma</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/xd2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>AdobeXD</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/affinity.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Affinity</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 border border-[#05e448] rounded-full text-[#05e448] text-sm font-medium hover:bg-[#05e448]/10 transition-colors cursor-default">
            <div className="relative w-4 h-4">
              <Image
                src="/images/canva2.svg"
                alt="Tailwind"
                fill
                className="object-contain"
              />
            </div>
            <span>Canva</span>
          </div>
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

        <h3 className="text-xl font-bold text-white">SzonaRempah</h3>
        <div className="flex justify-between">
          <span className="text-sm text-[#05e448] font-mono">
            Graphic Designer (Freelance)
          </span>
          <span className="text-sm text-[#05e448] font-mono">
            2022 - Present
          </span>
        </div>
        <ul className="text-gray-400 mt-2 text-sm leading-relaxed list-disc pl-5">
          <li>
            Create engaging visual content for social media platforms
            (Instagram/TikTok) to increase brand awareness and customer
            engagement.
          </li>
          <li>
            Design marketing collateral such as menus, banners, brochures, and
            product catalogs using Canva and Figma.
          </li>
          <li>
            Develop packaging designs and labels for new herbal product lines to
            ensure a professional and attractive product presentation.
          </li>
          <li>
            Collaborate with the business owner to translate marketing concepts
            into consistent visual identities across all media channels.
          </li>
        </ul>
      </div>

      <div className="relative pl-10 pb-2">
        <div className="absolute left-[2px] top-2 w-3 h-3 bg-gray-600 rounded-full border-4 border-[#02050A] z-10"></div>

        <h3 className="text-xl font-bold text-white">
          PT Solusi Identitas Global Net
        </h3>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 font-mono">
            UI/UX Designer (Internship)
          </span>
          <span className="text-sm text-gray-500 font-mono">2025 - 2025</span>
        </div>
        <ul className="text-gray-400 mt-2 text-sm leading-relaxed list-disc pl-5">
          <li>
            Designed and prototyped user-friendly interfaces for web-based
            applications using Figma, ensuring alignment with user needs and
            project requirements.
          </li>
          <li>
            Created wireframes, user flows, and site maps to visualize design
            concepts and streamline complex information structures.
          </li>
          <li>
            Contributed to the development of design systems, including color
            palettes, typography, and iconography, to maintain visual
            consistency across products.
          </li>
          <li>
            Collaborated closely with the development team to ensure accurate
            design implementation and smooth handover process.
          </li>
        </ul>
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -left-[200px] -translate-y-1/2 w-[500px] h-[500px] bg-[#05e448]/10 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            About <span className="text-[#05e448]">me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
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
