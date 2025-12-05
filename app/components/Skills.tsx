"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Skills() {
  const [skillsData, setSkillsData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkillsData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!skillsData) return null;

  return (
    <section
      className="py-20 text-white"
      style={{ backgroundColor: skillsData.bgColor }}
    >
      <div className="text-center mb-10 px-4">
        <p className="opacity-80">{skillsData.smallTitle}</p>
        <h2 className="text-4xl font-bold mt-2">{skillsData.mainTitle}</h2>
        <p className="max-w-3xl mx-auto mt-4 opacity-90">
          {skillsData.description}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {skillsData.skills.map((skill: string, index: number) => (
          <div key={index} className="flex items-center gap-3 text-lg">
            <span className="bg-white/20 p-2 rounded-full">
              <CheckCircle size={18} />
            </span>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
