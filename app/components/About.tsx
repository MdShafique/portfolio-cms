"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);

  if (!about) return null;

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-indigo-600 font-semibold">{about.title}</p>

          <h1 className="text-5xl font-black mt-2">{about.name}</h1>

          <h2 className="text-xl font-medium mt-3">{about.subtitle}</h2>

          <p className="mt-6 text-gray-700">{about.paragraph1}</p>
          <p className="mt-4 text-gray-700">{about.paragraph2}</p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mt-8">
            {about.features.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-2 font-medium">
                <CheckCircle className="text-indigo-600" size={20} />
                {f}
              </div>
            ))}
          </div>

          BUTTONS
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow">
              {about.button1}
            </button>

            <a
              href={about.cvLink}
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg"
            >
              {about.button2}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center">
          {/* <div className="absolute -top-6 right-10 w-16 h-16 bg-indigo-600 rounded-lg"></div> */}

          <Image
            src={about.image}
            alt="About Photo"
            width={400}
            height={500}
            className="rounded-2xl shadow-xl relative z-10"
          />

          {/* <div className="absolute bottom-6 left-10 w-16 h-16 bg-indigo-600 rounded-lg"></div> */}
        </div>

      </div>
    </section>
  );
}
