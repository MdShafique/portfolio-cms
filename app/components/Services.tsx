"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Services() {
  const [services, setServices] = useState<any>(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  if (!services) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-indigo-600 font-medium">{services.smallTitle}</p>
        <h2 className="text-4xl font-bold mt-2">{services.mainTitle}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          {services.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.items.map((s: any) => (
          <div
            key={s.id}
            className="bg-white px-6 py-10 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer text-center"
          >
            <div
              className="mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: s.iconBg }}
            >
              <span className="text-2xl">{s.icon}</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>

            <p className="text-gray-600 text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
