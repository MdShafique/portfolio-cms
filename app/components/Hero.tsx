import { getSettings } from "@/lib/db";
import Image from "next/image";

export default function Hero() {
  const settings = getSettings();  // ← load settings.json

  return (
    <section className="relative w-full bg-gray-200">
      <Image
        src="/portfolio.png"
        width={1500}
        height={600}
        alt="hero"
        className="w-full h-[450px] object-cover opacity-80"
      />

      <div className="absolute top-0 left-0 w-full h-full flex items-center px-10">
        <div>
          <h1 className="text-5xl font-black">{settings.heroTitle}</h1>

          <p className="text-xl mt-4 font-medium">
            {settings.heroSubtitle}
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-5 py-2 bg-black text-white rounded-md">
              Hire Me
            </button>
            <button className="px-5 py-2 border rounded-md">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
