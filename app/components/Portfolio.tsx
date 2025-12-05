"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState<any>(null);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  if (!portfolio) return null;

  const filteredItems =
    active === "All"
      ? portfolio.items
      : portfolio.items.filter((p: any) => p.category === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-indigo-600 font-medium">{portfolio.smallTitle}</p>
        <h2 className="text-4xl font-bold mt-2">{portfolio.mainTitle}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          {portfolio.description}
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["All", ...portfolio.categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm border ${
              active === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 px-6 max-w-6xl mx-auto space-y-4">
        {filteredItems.map((item: any) => (
          <div key={item.id} className="break-inside-avoid rounded-xl shadow overflow-hidden">
            <Image
              src={item.image}
              width={600}
              height={400}
              // 
               alt={item.title || "Portfolio Image"}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
