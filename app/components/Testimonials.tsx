"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [items, setItems] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/testimonials")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (items.length === 0) return null;

  const t = items[index];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold">Testimonials</p>
        <h2 className="text-4xl font-bold">What people says</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-3">
          Client feedback inspires me to keep improving and deliver the best results possible.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto bg-purple-600 text-white p-10 rounded-xl shadow-xl">
        
        {/* User Image */}
        <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white">
          <Image
            src={t.image}
            alt={t.name}
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-center">{t.name}</h3>
        <p className="text-center opacity-90">{t.role}</p>

        <p className="text-center mt-4 italic text-lg">
          "{t.message}"
        </p>

        {/* Rating */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="fill-yellow-400 text-yellow-300" />
          ))}
          {Array.from({ length: 5 - t.rating }).map((_, i) => (
            <Star key={i} className="text-white opacity-50" />
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-purple-600"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-purple-600"
        >
          <ChevronRight />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
