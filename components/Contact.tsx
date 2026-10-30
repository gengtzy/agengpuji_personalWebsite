"use client";

import Container from "./Container";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#05e448]/5 rounded-full blur-[100px] -z-10"></div>

      <Container className="flex flex-col items-center justify-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-white mb-10"
        >
          Contact <span className="text-[#05e448]">me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3 mb-12"
        >
          <p className="text-[#05e448] text-xl font-medium tracking-wide">
            Let&rsquo;s talk
          </p>
          <p className="text-gray-300 text-xl md:text-2xl font-light">
            ideas, opportunities, and everything in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12"
        >
          <a
            href="https://www.linkedin.com/in/ageng-puji-pangestu-1850a3235/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:bg-[#05e448]/10 hover:shadow-[0_0_20px_rgba(5,228,72,0.3)] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.76.78 1.76 1.75-.79 1.76-1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
          </a>

          <a
            href="https://www.behance.net/agengppangest"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance"
            aria-label="Behance Portfolio"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:bg-[#05e448]/10 hover:shadow-[0_0_20px_rgba(5,228,72,0.3)] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v1.5h7V7zm-1.8 4.7c-.2-.6-.6-1.1-1.1-1.4-.5-.3-1.1-.4-1.8-.4-1.1 0-2 .4-2.7 1.1-.7.7-1.1 1.7-1.1 3 0 1.2.4 2.2 1.1 3 .7.7 1.6 1.1 2.8 1.1 1 0 1.8-.3 2.5-.8.7-.5 1-1.2 1.2-2.1h-2.1c-.1.4-.3.7-.6.9-.3.2-.8.3-1.3.3-.6 0-1-.2-1.4-.5-.4-.3-.6-.8-.7-1.5h5.3c0-.4 0-.8-.2-1.2zm-5.1 1.5c.1-.5.3-.9.6-1.2.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.2h-3.5zM8.3 12.8c.7-.2 1.2-.6 1.6-1.1.4-.5.6-1.1.6-1.8 0-.9-.3-1.6-.9-2.1-.6-.5-1.5-.8-2.6-.8H2v14h5.2c1.2 0 2.2-.3 2.9-.9.7-.6 1-1.5 1-2.5 0-.8-.2-1.5-.7-2.1-.5-.6-1.2-.9-2.1-1zM4.6 9.1h2.2c.5 0 .9.1 1.2.4.3.2.4.6.4 1 0 .4-.1.8-.4 1-.3.2-.7.3-1.2.3H4.6V9.1zm2.4 7.7H4.6v-3.1h2.4c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.1 0 .5-.2.9-.5 1.2-.3.3-.8.4-1.4.4z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/ggngpjip_/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            aria-label="Instagram Profile"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:bg-[#05e448]/10 hover:shadow-[0_0_20px_rgba(5,228,72,0.3)] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://wa.me/6282244958864"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            aria-label="WhatsApp Contact"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:bg-[#05e448]/10 hover:shadow-[0_0_20px_rgba(5,228,72,0.3)] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}