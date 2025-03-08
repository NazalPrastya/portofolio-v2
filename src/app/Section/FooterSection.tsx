"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/NazalPrastya",
      label: "GitHub",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/nazalprastya",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/nazal-gusti-prastya-8a890a249/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:nazalprastya@gmai.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="relative text-white py-8 z-20">
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      ></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex space-x-6 mb-6"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-none" // Add this line
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="hover:text-blue-400 transition-colors duration-300 pointer-events-auto" // Add pointer-events-auto
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nazal Prastya. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
