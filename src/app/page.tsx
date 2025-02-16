import AboutSection from "./Section/AboutSection";
import HomeSection from "./Section/HomeSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        <HomeSection />
      </div>
      <div className="py-24">
        <AboutSection />
      </div>
    </>
  );
}
