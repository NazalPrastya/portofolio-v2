import HomeSection from "@/section/HomeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1efee] relative">
      <div className="noise absolute inset-0 opacity-50"></div>
      <HomeSection />
    </div>
  );
}
