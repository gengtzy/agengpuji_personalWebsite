"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showWelcome]);

  return (
    <main className="bg-[#02050A] text-white font-sans relative">
      <AnimatePresence mode="wait">
        {showWelcome && <WelcomeScreen onStart={() => setShowWelcome(false)} />}
      </AnimatePresence>

      <div className="relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollProgress />
      </div>
    </main>
  );
}
