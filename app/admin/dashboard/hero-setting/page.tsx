"use client";

import { useEffect, useState } from "react";

export default function HeroSetting() {
  const [hero, setHero] = useState<any>(null);
  const [newSub, setNewSub] = useState("");

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((d) => setHero(d));
  }, []);

  const saveData = () => {
    fetch("/api/hero", {
      method: "POST",
      body: JSON.stringify(hero),
    }).then(() => alert("Hero Section Updated!"));
  };

  if (!hero) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Hero Section Setting</h2>

      {/* Title */}
      <input
        className="border p-2 w-full"
        value={hero.title}
        onChange={(e) => setHero({ ...hero, title: e.target.value })}
      />

      {/* Name */}
      <input
        className="border p-2 w-full"
        value={hero.name}
        onChange={(e) => setHero({ ...hero, name: e.target.value })}
      />

      {/* Subtext List */}
      <h3 className="font-medium">Typing Animation Texts</h3>

      {hero.subTexts.map((item: string, i: number) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="border p-2 flex-1"
            value={item}
            onChange={(e) => {
              const updated = [...hero.subTexts];
              updated[i] = e.target.value;
              setHero({ ...hero, subTexts: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = hero.subTexts.filter((_: any, idx: number) => idx !== i);
              setHero({ ...hero, subTexts: updated });
            }}
            className="px-3 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}

      {/* Add new text */}
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Add new text"
          value={newSub}
          onChange={(e) => setNewSub(e.target.value)}
        />
        <button
          onClick={() => {
            setHero({ ...hero, subTexts: [...hero.subTexts, newSub] });
            setNewSub("");
          }}
          className="px-4 bg-black text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Description */}
      <textarea
        className="border p-2 w-full"
        rows={4}
        value={hero.description}
        onChange={(e) => setHero({ ...hero, description: e.target.value })}
      />

      {/* Background URL */}
      <input
        className="border p-2 w-full"
        value={hero.background}
        onChange={(e) => setHero({ ...hero, background: e.target.value })}
      />

      <button
        onClick={saveData}
        className="px-6 py-3 bg-indigo-600 text-white rounded"
      >
        Save Changes
      </button>

    </div>
  );
}
