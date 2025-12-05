"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [data, setData] = useState<any>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  // Typing Animation
  useEffect(() => {
    if (!data) return;

    const currentText = data.subTexts[textIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setSubText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setDeleting(true);
        }
      } else {
        setSubText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % data.subTexts.length);
        }
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, data]);

  if (!data) return null;

  return (
    <section
      className="w-full h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xl text-indigo-600 font-semibold">{data.title}</p>

        <h1 className="text-6xl font-black leading-tight mt-2">
          {data.name}
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Professional <span className="text-indigo-600">{subText}</span>
          <span className="blinking">|</span>
        </h2>

        <p className="mt-6 text-gray-700 max-w-xl">
          {data.description}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow">
            {data.button1}
          </button>
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md">
            {data.button2}
          </button>
        </div>
      </div>
    </section>
  );
}
