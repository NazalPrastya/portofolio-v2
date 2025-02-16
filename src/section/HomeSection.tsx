import Image from "next/image";

export default function HomeSection() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center ">
      <div className="relative  p-6 rounded-full">
        <Image
          src="/piscok.jpg"
          alt="logo"
          width={200}
          height={200}
          className="rounded-full shadow-[0_0_0_8px] shadow-white"
        />
        <span></span>
      </div>
      <h1 className="text-4xl font-bold">Nazal Gusti Prastya</h1>
    </main>
  );
}
