"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

const allProjects = [
  {
    id: 1,
    title: "Omahku – Mobile app design",
    category: "ui",
    image: "/images/dsg1.png",
    description: "A simple and secure smart home mobile app for families",
    link: "https://www.behance.net/gallery/233377223/Omahku-Mobile-App-Design",
  },
  {
    id: 2,
    title: "Belinasgor. - Mobile App Design",
    category: "ui",
    image: "/images/dsg4.png",
    description: "A sleek and intuitive interface for seamless food ordering.",
    link: "https://www.behance.net/gallery/234709959/Belinasgor-Mobile-App-Design",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "web",
    image: "/images/code1.png",
    description: "Modern portfolio built with Bootstrap",
    link: "https://github.com/gengtzy/gengtzy.github.io",
  },
  {
    id: 4,
    title: "Cafe Love Jamu Profile Website",
    category: "web",
    image: "/images/code2.png",
    description: "Attractive landing page to improve store branding",
    link: "https://github.com/gengtzy/websiteCafeJamu",
  },
  {
    id: 5,
    title: "Berita Desa Sidokerto Website",
    category: "web",
    image: "/images/code3.png",
    description: "A digital window to transparent Sidokerto",
    link: "https://github.com/gengtzy/websiteDesaSidokerto",
  },
  {
    id: 6,
    title: "Pembayaran SPP Desktop",
    category: "web",
    image: "/images/code4.png",
    description: "Simplify tuition management with a seamless interface",
    link: "https://github.com/gengtzy/desktopAplikasiPembayaranSPP",
  },
  {
    id: 6,
    title: "Sosial Media - Flyer Design",
    category: "ui",
    image: "/images/dsg3.png",
    description:
      "Captivating visuals designed to convert. We blend bold aesthetics with clear messaging to make your brand stand out in every feed",
    link: "https://www.behance.net/gallery/237491625/Social-Media-Post",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"ui" | "web">("ui");

  const filteredProjects = allProjects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="project" className="py-24 relative">
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

          <div className="flex justify-center gap-4">
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
                <Link
                  href={project.link}
                  target="_blank"
                  className="group block h-full"
                >
                  <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#05e448]/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(5,228,72,0.1)]">
                    <div className="relative w-full h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>

                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#05e448] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
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
