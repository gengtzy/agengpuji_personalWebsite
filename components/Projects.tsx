"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
// Import data dari file terpisah
import { allProjects } from "@/data/projects";

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
