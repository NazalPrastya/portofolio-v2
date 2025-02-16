"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiMui,
  SiLeaflet,
  SiCodeigniter,
} from "react-icons/si";
import GitHubContributions from "@/components/Github/GithubContribution";
import { BiLogoPostgresql } from "react-icons/bi";
import { TiChartBar } from "react-icons/ti";

const skills = [
  {
    name: "NextJS",
    color: "bg-black text-white",
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
  },
  {
    name: "ReactJS",
    color: "bg-blue-500 text-white",
    icon: <SiReact />,
    link: "https://reactjs.org/",
  },
  {
    name: "Laravel",
    color: "bg-red-500 text-white",
    icon: <SiLaravel />,
    link: "https://laravel.com/",
  },
  {
    name: "CodeIgniter",
    color: "bg-orange-600 text-white",
    icon: <SiCodeigniter />,
    link: "https://codeigniter.com/",
  },
  {
    name: "TailwindCSS",
    color: "bg-cyan-500 text-white",
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    color: "bg-blue-700 text-white",
    icon: <SiMui />,
    link: "https://mui.com/",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-400 text-black",
    icon: <SiJavascript />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    color: "bg-blue-600 text-white",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "PHP",
    color: "bg-purple-500 text-white",
    icon: <SiPhp />,
    link: "https://www.php.net/",
  },
  {
    name: "MySQL",
    color: "bg-orange-500 text-white",
    icon: <SiMysql />,
    link: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    color: "bg-[#336791] text-white",
    icon: <BiLogoPostgresql />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Leaflet",
    color: "bg-lime-500 text-white",
    icon: <SiLeaflet />,
    link: "https://leafletjs.com/",
  },
  {
    name: "ApexChart",
    color: "bg-blue-500 text-white",
    icon: <TiChartBar />,
    link: "https://apexcharts.com/",
  },
];
const experiences = [
  {
    company: "PT ABC",
    duration: "Jan 2020 - Des 2022",
    period: "3 Tahun",
    role: "Frontend Developer",
  },
  {
    company: "PT XYZ",
    duration: "Mei 2018 - Des 2019",
    period: "1 Tahun 8 Bulan",
    role: "Backend Developer",
  },
  {
    company: "PT LMN",
    duration: "Agu 2015 - Apr 2018",
    period: "2 Tahun 8 Bulan",
    role: "UI/UX Designer",
  },
];

export default function AboutSection() {
  return (
    <section id="#about" className="container">
      <h2 className="text-5xl font-bold ">About Me</h2>
      <p className="text-3xl font-thin">A little bit about me</p>

      <p className="text-justify text-base md:text-lg mt-3">
        Halo! Saya Nazal Gusti Prastya, seorang pelajar sekaligus Web Developer
        yang bersemangat dalam teknologi. Saat ini, saya fokus pada pengembangan
        website dengan beberapa teknologi terkini yaitu Laravel, ReactJS, dan
        NextJS. Jika Anda tertarik untuk bekerja sama atau sekadar berdiskusi,
        jangan ragu untuk menghubungi saya!
      </p>

      <h2 className="text-3xl font-bold mt-10">Experience</h2>
      <p className="text-xl font-thin">Beberapa pengalaman saya</p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 w-full md:w-1/3 bg-white rounded-2xl shadow-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold">{exp.company}</h3>
            <p className="text-gray-600 mt-2">Sebagai: {exp.role}</p>
            <p className="text-gray-500">
              {exp.duration} ({exp.period})
            </p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10">Skills</h2>
      <p className="text-xl font-thin">My Coding Skills</p>
      <div className="overflow-hidden pb-4 relative w-full mt-3">
        <motion.div
          className="flex space-x-4 w-max"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Link
              href={skill.link}
              target="_blank"
              key={index}
              className={`flex-shrink-0 flex items-center gap-2 ${skill.color} rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer`}
            >
              <span className="text-2xl">{skill.icon}</span>
              <p className="text-lg font-semibold">{skill.name}</p>
              <ArrowRight className="mt-1" />
            </Link>
          ))}
        </motion.div>
      </div>
      <hr className="border-monochrome2 border-dashed mt-2" />

      <div className="flex flex-col md:flex-row justify-end mt-5 gap-x-3">
        <div className="w-full md:w-[25%] flex justify-center items-center">
          <iframe
            src="https://open.spotify.com/embed/track/1wo3UYTeizJHkwYIuLuBPF?utm_source=generator&theme=0"
            width="100%"
            height="240"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-[73%]">
          <GitHubContributions username="NazalPrastya" />
        </div>
      </div>
    </section>
  );
}
