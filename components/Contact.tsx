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
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href="https://www.behance.net/agengppangest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:scale-110 transition-all duration-300"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-5V6h5v1zm-6 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zM12.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm5.67-1.32c-.11-2.6-3.8-2.68-3.67 1.05h3.67zm-3.79 2.05c.18 2.76 3.84 2.47 3.55.3h1.9c.27 2.9-4.7 4.14-5.45.66-.9-4.22 5.03-5.38 5.6-1.1.04.28.05.56.05.84h-5.65zM7.5 7H2v10h5.5c2.4 0 3.8-1.5 3.8-3.5S9.9 8.6 7.5 7H7.5zm0 2.3c.7 0 1.5.3 1.5 1.5s-.8 1.4-1.5 1.4H4.3V9.3H7.5zm.3 6.4H4.3v-2.7h3.5c.8 0 1.7.4 1.7 1.6s-.9 1.1-1.7 1.1z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/ggngpjip_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:scale-110 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a
            href="https://wa.me/6282244958864"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-[#05e448] hover:text-[#05e448] hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}