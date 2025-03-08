import AboutSection from "./Section/AboutSection";
import HomeSection from "./Section/HomeSection";
import ProjectSection from "./Section/ProjectSection";
import SkillSection from "./Section/SkillSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <HomeSection />
      </div>
      <div className="py-24">
        <SkillSection />
      </div>
      <div className="py-24 relative z-10">
        <AboutSection />
      </div>
      <div className="py-24 relative z-10">
        <ProjectSection />
      </div>
    </>
  );
}
