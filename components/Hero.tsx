"use client";

import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const icons = [
  { id: 1, src: "/images/figma.svg", alt: "Figma", color: "bg-purple-500/10" },
  { id: 2, src: "/images/tailwindcss.svg", alt: "Tailwind", color: "bg-blue-500/10" },
  { id: 3, src: "/images/gitHub.svg", alt: "GitHub", color: "bg-gray-500/10" },
  { id: 4, src: "/images/react.svg", alt: "React", color: "bg-cyan-500/10" },
  { id: 5, src: "/images/xd.svg", alt: "AdobeXD", color: "bg-blue-400/10" },
];

const positions = [
  { className: "-top-4 -right-2 w-24 h-24 z-30", scale: 1.2 },
  { className: "bottom-8 -right-6 w-20 h-20 z-20", scale: 1 },
  { className: "-bottom-2 left-12 w-16 h-16 z-20", scale: 0.9 },
  { className: "bottom-24 -left-10 w-24 h-24 z-30", scale: 1.1 },
  { className: "top-0 left-8 w-14 h-14 z-10", scale: 0.8 },
];

const words = ["UI/UX Designer", "Graphic Designer", "Frontend Developer"];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % positions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // === FUNGSI BARU UNTUK SMOOTH SCROLL ===
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Mencegah loncat instan default HTML
    const target = document.getElementById("contact");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Offset -80px biar gak ketutupan Navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-10 overflow-hidden flex items-center"
    >
      <Container className="flex flex-col-reverse md:flex-row items-center justify-between z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-12 mt-10 md:mt-0"
        >
          
          <div className="relative inline-flex items-center gap-2 px-6 py-2 border border-white/20 text-white tracking-wider bg-white/5 backdrop-blur-sm group">
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#05e448]"></span>
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#05e448]"></span>
            <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#05e448]"></span>

            <motion.span
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.5, cursor: "grab" }}
              whileDrag={{ cursor: "grabbing" }}
              className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#05e448] z-50"
            ></motion.span>

            <div className="absolute -right-18 top-2 md:-top-6 flex flex-col items-start opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] md:text-xs text-gray-400 font-mono -rotate-6 translate-x-4 mb-1">
                pull me!
              </span>
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 -rotate-12">
                <path d="M50 5C35 5 20 15 10 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2"/>
                <path d="M10 25L18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M10 25L16 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <span className="text-sm font-medium">Hi,👋 I'm Ageng</span>
          </div>

          <div className="space-y-3">
            <div className="relative flex items-center">
              <div className="hidden md:block absolute right-full top-1/2 w-screen h-[1px] bg-[#05e448] mr-0"></div>
              <p className="text-slate-100 text-2xl md:text-4xl font-extralight pl-8">
                Junior
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight">
              UI/UX Engineer
            </h1>
            
            <div className="h-8 flex items-center">
               <span className="text-[#05e448] text-xl md:text-2xl font-mono font-medium tracking-wide">
                 {text}
                 <span className="animate-pulse ml-1">|</span>
               </span>
            </div>

          </div>

          <div className="flex gap-5 pt-2">
            <a 
              href="#contact"
              onClick={handleSmoothScroll}
              className="px-8 py-3 bg-[#05e448] text-black font-bold rounded-2xl hover:bg-[#10f053] transition shadow-[0_0_20px_rgba(42,245,152,0.4)] cursor-pointer"
            >
              Get in touch
            </a>

            <a 
              href="/AgengPujiPangestuCV.pdf" 
              download
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-2xl hover:border-[#05e448] hover:text-[#05e448] transition cursor-pointer"
            >
              My Resume
            </a>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="absolute w-[400px] h-[400px] bg-[#05e448]/10 rounded-full blur-[80px] -z-10"></div>

          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 rounded-full border-[2px] border-[#05e448] shadow-[0_0_30px_rgba(42,245,152,0.2)]"></div>

            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative z-10">
              <Image
                src="/images/saya.svg"
                alt="Ageng Profile"
                fill
                className="object-cover"
              />
            </div>

            {icons.map((icon, index) => {
              const positionIndex = (index + activeIndex) % positions.length;
              const currentPos = positions[positionIndex];

              return (
                <motion.div
                  key={icon.id}
                  layout
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 40, damping: 15 }}
                  className={`absolute flex items-center justify-center rounded-2xl border border-white/20 backdrop-blur-md shadow-lg overflow-hidden p-2 ${currentPos.className} ${icon.color}`}
                >
                  <div className="relative w-full h-full flex items-center justify-center rounded-2xl hover:bg-slate-900/50 transition-colors duration-300 cursor-pointer">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}