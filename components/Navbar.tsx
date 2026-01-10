"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset sedikit biar akurat

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80, // 
        behavior: "smooth",
      });
      setIsOpen(false); // 
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 backdrop-blur-md transition-all duration-300">
      <Container className="flex justify-between items-center">
        

        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10 md:w-12 md:h-12 cursor-pointer transition">
             <Image 
               src="/images/PersonalLogo.svg" 
               alt="Logo" 
               fill 
               className="object-contain"
             />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`relative transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#05e448]" 
                  : "text-gray-400 hover:text-[#05e448]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-300 hover:text-[#05e448] transition p-2 z-50"
        >
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#02050A] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#05e448]"
                      : "text-gray-400 hover:text-[#05e448]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
