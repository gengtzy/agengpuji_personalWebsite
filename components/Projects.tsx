"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

type Tech = {
  name: string;
  icon: string;
};

const allProjects = [
  {
    id: 1,
    title: "Omahku – Mobile App Design",
    category: "ui",
    image: "/images/dsg1.png",
    description:
      "User Interface design for a smart home automation app, focusing on intuitive control of IoT devices and user-friendly navigation.",
    link: "https://www.behance.net/gallery/233377223/Omahku-Mobile-App-Design",
    // Tidak ada 'visit' link untuk UI design (biasanya hanya Behance)
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 2,
    title: "Belinasgor. - Mobile App Design",
    category: "ui",
    image: "/images/dsg4.png",
    description:
      "Mobile application design for a food delivery service, featuring an appetizing layout and seamless ordering flow for customers.",
    link: "https://www.behance.net/gallery/234709959/Belinasgor-Mobile-App-Design",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 12,
    title: "Personal Portfolio - Web App Design",
    category: "ui",
    image: "/images/dsg5.png",
    description:
      "High-fidelity web design concept for a personal portfolio, emphasizing aesthetic appeal, layout balance, and modern visual trends.",
    link: "https://www.behance.net/gallery/233496589/Personal-Portfolio-Website-Design",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 10,
    title: "Relasibaik.",
    category: "web",
    image: "/images/code7.png",
    description:
      "Web-based expert system utilizing Rule-Based Reasoning method to analyze family dynamics and screen the quality of relationships between parents and relatives.",
    link: "https://github.com/gengtzy",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Laravel", icon: "/images/laravel.svg" },
      { name: "Livewire", icon: "/images/livewire.svg" },
      { name: "Vite", icon: "/images/vitejs.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 11,
    title: "Admin Panel - Relasibaik.",
    category: "web",
    image: "/images/code8.png",
    description:
      "Comprehensive administrative dashboard for the Relasibaik platform, featuring real-time data visualization, user management (CRUD), and detailed reporting systems.",
    link: "https://github.com/gengtzy",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Laravel", icon: "/images/laravel.svg" },
      { name: "Livewire", icon: "/images/livewire.svg" },
      { name: "Vite", icon: "/images/vitejs.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "web",
    image: "/images/code1.png",
    description:
      "Minimalist personal portfolio website designed with a clean, white-themed interface to showcase projects and skills with optimal readability.",
    link: "https://github.com/gengtzy/gengtzy.github.io",
    visit: "https://gengtzy.github.io/",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
    ] as Tech[],
  },
  {
    id: 9,
    title: "Personal Portfolio New",
    category: "web",
    image: "/images/code6.png",
    description:
      "Modernized interactive portfolio featuring dynamic animations, vibrant color schemes, and engaging iconography to highlight professional achievements.",
    link: "https://github.com/gengtzy/agengpuji_personalWebsite.git",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Next.js", icon: "/images/nextjs2.svg" },
      { name: "React.js", icon: "/images/react2.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Typescript", icon: "/images/typescript.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
    ] as Tech[],
  },
  {
    id: 4,
    title: "Cafe Love Jamu Profile",
    category: "web",
    image: "/images/code2.png",
    description:
      "Dynamic profile website for a cafe enabling seamless menu exploration and direct ordering capabilities via WhatsApp integration.",
    link: "https://github.com/gengtzy/websiteCafeJamu",
    techStack: [
      { name: "Laravel", icon: "/images/laravel.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 13,
    title: "Admin Panel - Cafe Love Jamu",
    category: "web",
    image: "/images/code9.png",
    description:
      "Backend management system for the cafe website, facilitating menu updates, content control, and dashboard monitoring.",
    link: "https://github.com/gengtzy/websiteCafeJamu",
    techStack: [
      { name: "Laravel", icon: "/images/laravel.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 5,
    title: "SI Desa Sidokerto",
    category: "web",
    image: "/images/code3.png",
    description:
      "Community information portal designed for Sidokerto Village, featuring the latest news updates, village profiles, and public information access.",
    link: "https://github.com/gengtzy/websiteDesaSidokerto",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "PHP", icon: "/images/php.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 14,
    title: "Admin Panel - SI Desa Sidokerto",
    category: "web",
    image: "/images/code10.png",
    description:
      "Content Management System (CMS) for the village portal, allowing administrators to easily publish news, manage profiles, and update public data.",
    link: "https://github.com/gengtzy/websiteDesaSidokerto",
    // visit: "https://desa-sidokerto.id", // Contoh
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "PHP", icon: "/images/php.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 6,
    title: "MySPP",
    category: "web",
    image: "/images/code4.png",
    description:
      "Tuition payment management system for SD Hangtuah Candi, streamlining financial records, transaction tracking, and administrative reporting.",
    link: "https://github.com/gengtzy/desktopAplikasiPembayaranSPP",
    techStack: [
      { name: "Java", icon: "/images/java.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 7,
    title: "Sosial Media - Flyer Design",
    category: "ui",
    image: "/images/dsg3.png",
    description:
      "Collection of creative digital flyers and posters designed for social media marketing and event promotion.",
    link: "https://www.behance.net/gallery/237491625/Social-Media-Post",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 16,
    title: "MovieKu",
    category: "web",
    image: "/images/code12.png",
    description:
      "Global movie search platform powered by the OMDb API, featuring a minimalist user interface for effortless film discovery and detailed information retrieval.",
    visit: "https://simple-movie-search.vercel.app/",
    link: "https://github.com/gengtzy/Simple-Movie-Search",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "JQuery", icon: "/images/jquery.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "OMDb API", icon: "/images/api.svg" },
    ] as Tech[],
  },
  {
    id: 8,
    title: "Company Cafe Profile",
    category: "web",
    image: "/images/code5.png",
    description:
      "Static landing page designed to present detailed company information, ambiance, and brand identity for a local cafe.",
    link: "https://github.com/gengtzy/cafewebsite.git",
    visit: "https://lovejamucafewebsite.github.io/",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
    ] as Tech[],
  },
  {
    id: 15,
    title: "SI SD Gimatama",
    category: "web",
    image: "/images/code11.png",
    description:
      "Comprehensive school information system for SD Gimatama built on WordPress, serving as a digital hub for academic news, profiles, and institutional updates.",
    link: "https://github.com/gengtzy",
    visit: "https://sdgimatama.wordpress.com/",
    techStack: [{ name: "Wordpress", icon: "/images/wordpress.svg" }] as Tech[],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ui" | "web">(
    "all",
  );

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="project" className="py-24 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#05e448]/10 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#05e448]/10 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            My <span className="text-[#05e448]">project</span>
          </h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#05e448] border-[#05e448] text-black font-bold shadow-[0_0_15px_#05e448]"
                  : "bg-transparent border-white/20 text-gray-400 hover:border-[#05e448] hover:text-[#05e448]"
              }`}
            >
              All Projects
            </button>

            <button
              onClick={() => setActiveCategory("ui")}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === "ui"
                  ? "bg-[#05e448] border-[#05e448] text-black font-bold shadow-[0_0_15px_#05e448]"
                  : "bg-transparent border-white/20 text-gray-400 hover:border-[#05e448] hover:text-[#05e448]"
              }`}
            >
              UI/Poster design
            </button>

            <button
              onClick={() => setActiveCategory("web")}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === "web"
                  ? "bg-[#05e448] border-[#05e448] text-black font-bold shadow-[0_0_15px_#05e448]"
                  : "bg-transparent border-white/20 text-gray-400 hover:border-[#05e448] hover:text-[#05e448]"
              }`}
            >
              Website App
            </button>
          </div>
        </motion.div>

        <motion.div
          layout
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#05e448]/50 hover:shadow-[0_10px_30px_rgba(5,228,72,0.1)]">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[#02050A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px] gap-4">
                      {project.category === "ui" ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="relative w-12 h-12 border border-[#05e448] rounded-full flex items-center justify-center hover:bg-[#05e448]/20 hover:scale-110 transition-all duration-300"
                        >
                          <div className="relative w-5 h-5">
                            <Image
                              src="/images/behance.svg"
                              alt="Behance"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </Link>
                      ) : (
                        <>
                          <Link
                            href={project.link}
                            target="_blank"
                            className="relative w-12 h-12 border border-[#05e448] rounded-full flex items-center justify-center hover:bg-[#05e448]/20 hover:scale-110 transition-all duration-300"
                            title="View Code"
                          >
                            <div className="relative w-5 h-5">
                              <Image
                                src="/images/github2.svg"
                                alt="GitHub"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </Link>

                          {project.visit && (
                            <Link
                              href={project.visit}
                              target="_blank"
                              className="relative w-12 h-12 border border-[#05e448] rounded-full flex items-center justify-center hover:bg-[#05e448]/20 hover:scale-110 transition-all duration-300"
                              title="Visit Website"
                            >
                              <div className="relative w-5 h-5">
                                <Image
                                  src="/images/visit.svg"
                                  alt="Visit"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </Link>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 relative z-10 bg-[#0a0a0a] flex flex-col h-[calc(100%-16rem)] justify-items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#05e448] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-md text-gray-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex align-top flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-1 border border-[#05e448] rounded-full text-[#05e448] text-xs font-medium hover:bg-[#05e448]/10 transition-colors cursor-default"
                        >
                          <div className="relative w-3 h-3">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={
              activeCategory === "ui"
                ? "https://www.behance.net/agengppangest"
                : "https://github.com/gengtzy?tab=repositories"
            }
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 border border-[#05e448] text-[#05e448] rounded-full hover:bg-[#05e448] hover:text-black transition-all duration-300 group"
          >
            View more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
