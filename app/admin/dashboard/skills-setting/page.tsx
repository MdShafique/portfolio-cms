"use client";

import { useEffect, useState } from "react";

export default function SkillsSetting() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const save = async () => {
    await fetch("/api/skills", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Skills Updated!");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Skills Settings</h1>

      <label className="font-semibold">Small Title</label>
      <input
        className="border p-2 w-full mb-4"
        value={data.smallTitle}
        onChange={(e) => setData({ ...data, smallTitle: e.target.value })}
      />

      <label className="font-semibold">Main Title</label>
      <input
        className="border p-2 w-full mb-4"
        value={data.mainTitle}
        onChange={(e) => setData({ ...data, mainTitle: e.target.value })}
      />

      <label className="font-semibold">Description</label>
      <textarea
        className="border p-2 w-full mb-4"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <label className="font-semibold">Background Color</label>
      <input
        className="border p-2 w-full mb-4"
        value={data.bgColor}
        onChange={(e) => setData({ ...data, bgColor: e.target.value })}
      />

      <h2 className="text-xl font-bold mb-3">Skills List</h2>

      {data.skills.map((skill: string, index: number) => (
        <div key={index} className="flex items-center gap-3 mb-2">
          <input
            className="border p-2 w-full"
            value={skill}
            onChange={(e) => {
              data.skills[index] = e.target.value;
              setData({ ...data });
            }}
          />
        </div>
      ))}

      <button
        onClick={save}
        className="px-4 py-2 bg-indigo-600 text-white rounded mt-4"
      >
        Save All Changes
      </button>
    </div>
  );
}
