import AboutSection from "./Section/AboutSection";
import HomeSection from "./Section/HomeSection";
import SkillSection from "./Section/SkillSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <HomeSection />
      </div>
      <div className="py-24">
        <AboutSection />
      </div>
      <div className="py-24">
        <SkillSection />
      </div>
    </>
  );
}
