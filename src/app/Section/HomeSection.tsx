"use client";
// import Image from "next/image";
import { motion } from "framer-motion";

import GridBackground from "@/components/Background/GridBackground";
import { Square } from "lucide-react";

export default function HomeSection() {
  return (
    <>
      <GridBackground />
      <main className="flex flex-col md:flex-row min-h-screen item-center justify-beetween relative z-10 container">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col  min-h-screen item-center justify-center"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-2 text-left text-monochrome flex items-end gap-x-2"
          >
            Nazal Gusti Prastya
            <Square className="text-yellow-400 bg-yellow-400" size={14} />
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl text-left md:text-5xl font-bold mb-4 text-monochrome2"
          >
            WEB DEVELOPER
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl text-gray-600"
          >
            Based in Bogor, Indonesia
          </motion.p>
        </motion.div>
        {/* <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative p-6 rounded-full mb-8 flex items-center justify-center"
        >
          <Image
            src="/piscok.jpg"
            alt="logo"
            width={200}
            height={200}
            className="rounded-full shadow-[0_0_0_8px] shadow-white transition-transform duration-300 hover:scale-105"
          />
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute top-10 -right-5 bg-white rounded-full px-3 py-1 -rotate-12 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
          >
            Hire Me
          </motion.span>
        </motion.div> */}
      </main>
    </>
  );
}
