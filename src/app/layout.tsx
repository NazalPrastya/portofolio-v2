"use client";

import type React from "react";

import "./globals.css";

import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { X, AlignRight, Instagram, Linkedin, Github, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UlLinks from "@/components/Nav/ul-links";
import Socials from "@/components/Nav/socials";
import SplashCursor from "@/components/SplashCursor/SplashCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialItems = [
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    Icon: <Instagram />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    Icon: <Linkedin />,
  },
  { name: "GitHub", href: "https://github.com/yourusername", Icon: <Github /> },
  { name: "Email", href: "mailto:your.email@example.com", Icon: <Mail /> },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  };

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-[#f1efee]">
        {/* <SplashCursor /> */}
        <div className="noise w-full h-full  absolute inset-0 opacity-50 top-0 left-0 bottom-0 right-0"></div>
        <nav className="fixed w-full z-50 top-0 py-4">
          <div className="mx-auto px-10 md:px-14 py-2 flex justify-between items-center">
            <Link
              href="/"
              className="font-semibold text-2xl hover:text-gray-700 transition-colors"
            >
              <span className={isOpen ? "hidden md:inline" : ""}>
                NAZAL PRASTYA
              </span>
            </Link>

            <motion.button
              className={`z-50 p-2 rounded-full bg-monochrome text-white transition-colors ${
                isOpen &&
                "shadow-[0_0_0_5px] shadow-monochrome2 hover:shadow-[0_0_0_8px] hover:shadow-monochrome2"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={30} /> : <AlignRight size={30} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 w-full sm:w-80 md:w-96 bg-monochrome text-white z-40 flex flex-col justify-between px-8 py-20"
            >
              {/* Bagian Atas */}
              <motion.div className="mb-5">
                <motion.p className="flex items-center text-xl font-semibold mb-2">
                  Navigation
                </motion.p>
                <hr className="border-gray-300" />
              </motion.div>

              {/* Bagian Tengah (Menu) */}
              <UlLinks
                menuItems={menuItems}
                setIsOpen={setIsOpen}
                itemVariants={itemVariants}
              />

              {/* Bagian Bawah */}
              <Socials socialItems={socialItems} itemVariants={itemVariants} />
            </motion.div>
          )}
        </AnimatePresence>

        {children}
      </body>
    </html>
  );
}
