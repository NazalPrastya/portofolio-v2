"use client";
import GitHubContributions from "@/components/Github/GithubContribution";

import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

const experiences = [
  {
    company: "3rd place in Data Science Online LKS in West Java - May 2023",
    duration: "May 2023",
    period: " ",
    role: "Data Scince",
  },
  {
    company:
      "Internship at PT Cipta Muda Solusi x KemenkopUKM as Web Developer - Aug 2023 - Jan 2024",
    duration: "Aug 2023 - Jan 2024",
    period: "5 month",
    role: "Web Developer",
  },
  {
    company:
      "Fulltime job in government agency as Programmer Jan 2024 - Mar 2025",
    duration: "Jan 2024 - Mar 2025",
    period: "1 year 3 month",
    role: "Programmer",
  },
];

export default function AboutSection() {
  return (
    <section id="#about" className="container">
      <h2 className="text-5xl font-bold ">About Me</h2>
      <p className="text-3xl font-thin">A little bit about me</p>

      <p className="text-justify text-base md:text-lg mt-3">
        Hello my name is Nazal Gusti Prastya i live in bogor, indonesia and am
        currently 18 years old who is an information systems student as well as
        a web developer. i am not only a coder but i am also a creative thinker,
        problem solver and self learner who is passionate about exploring the
        world of technology. currently i am focusing on website development
        using laravel, reactjs and next js. i am always open to opportunities
        and collaboration, if you are interested in me to work together or
        discuss please do not hesitate to contact me!.
      </p>

      <h2 className="text-3xl font-bold mt-10">Experience</h2>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {experiences.map((exp, index) => (
          <SpotlightCard
            className="w-full md:w-1/2 lg:w-1/3"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
            key={index + 1}
          >
            <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
            <p className="text-gray-600 mt-2">As: {exp.role}</p>
            <p className="text-gray-500">
              {exp.duration} {"( " + exp.period + ")"}
            </p>
          </SpotlightCard>
        ))}
      </div>

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
