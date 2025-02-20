"use client";
import GitHubContributions from "@/components/Github/GithubContribution";

import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

const experiences = [
  {
    company:
      "Internship As Web Developer at PT Cipta Muda Solusi X KemenkopUKM",
    duration: "Agt 2023 - Jan 2024",
    period: "5 Month",
    role: "Web Developer",
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
          <SpotlightCard
            className="w-full md:w-1/2 lg:w-1/3"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
            key={index + 1}
          >
            <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
            <p className="text-gray-600 mt-2">Sebagai: {exp.role}</p>
            <p className="text-gray-500">
              {exp.duration} ({exp.period})
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
