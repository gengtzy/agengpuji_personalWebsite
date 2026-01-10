"use client";

import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <Container className="flex flex-col items-center justify-center gap-6">
        
        <div className="relative group cursor-pointer w-10 h-10">
           <div className="absolute inset-0 bg-[#05e448]/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <Image 
             src="/images/PersonalLogo.svg" 
             alt="Ageng Logo" 
             fill 
             className="object-contain relative z-10" 
           />
        </div>

        <p className="text-gray-500 text-sm font-light tracking-wide">
          2025 Copyright | agengpuji
        </p>
        
      </Container>
    </footer>
  );
}