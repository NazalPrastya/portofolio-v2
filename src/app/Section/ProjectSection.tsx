"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates creative content based on user prompts.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "OpenAI API", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "A responsive dashboard displaying real-time data analytics with interactive charts and filters.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      description:
        "A social networking platform with real-time messaging, user profiles, and content sharing.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Noise dots animation for the background
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 100; i++) {
      dots.push(
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [
              Math.random() * 0.5 + 0.1,
              Math.random() * 0.5 + 0.1,
              Math.random() * 0.5 + 0.1,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
          }}
        />
      );
    }
    return dots;
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background with noise effect */}
      <div className="absolute inset-0 opacity-30">{generateDots()}</div>

      {/* Background noise texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my skills and
            creativity in web development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="backdrop-blur-sm bg-gray-800/70 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-purple-500/30 border border-gray-700/50"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/80 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-center"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 rounded-lg border border-gray-600 text-gray-300 font-medium text-center hover:bg-gray-700"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>

              {activeProject === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-blue-900/40 pointer-events-none"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg hover:shadow-purple-500/30"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
