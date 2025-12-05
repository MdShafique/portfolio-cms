"use client";

import { useState, useEffect } from "react";

export default function AboutSetting() {
  const [data, setData] = useState<any>(null);
  const [newFeature, setNewFeature] = useState("");

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const saveData = () => {
    fetch("/api/about", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => alert("About Section Updated!"));
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About Section Setting</h2>

      <input
        className="border p-2 w-full"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        value={data.subtitle}
        onChange={(e) => setData({ ...data, subtitle: e.target.value })}
      />

      <textarea
        className="border p-2 w-full"
        rows={3}
        value={data.paragraph1}
        onChange={(e) => setData({ ...data, paragraph1: e.target.value })}
      />

      <textarea
        className="border p-2 w-full"
        rows={3}
        value={data.paragraph2}
        onChange={(e) => setData({ ...data, paragraph2: e.target.value })}
      />

      {/* Features */}
      <h3 className="font-medium">Features List</h3>

      {data.features.map((f: string, i: number) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="border p-2 flex-1"
            value={f}
            onChange={(e) => {
              const arr = [...data.features];
              arr[i] = e.target.value;
              setData({ ...data, features: arr });
            }}
          />
          <button
            onClick={() =>
              setData({
                ...data,
                features: data.features.filter((_: any, idx: number) => idx !== i),
              })
            }
            className="px-3 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}

      {/* Add new feature */}
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1"
          placeholder="Add new feature"
          value={newFeature}
          onChange={(e) => setNewFeature(e.target.value)}
        />
        <button
          onClick={() => {
            setData({ ...data, features: [...data.features, newFeature] });
            setNewFeature("");
          }}
          className="px-4 bg-black text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Image URL */}
      <input
        className="border p-2 w-full"
        value={data.image}
        onChange={(e) => setData({ ...data, image: e.target.value })}
      />

      {/* Buttons */}
      <input
        className="border p-2 w-full"
        value={data.button1}
        onChange={(e) => setData({ ...data, button1: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        value={data.button2}
        onChange={(e) => setData({ ...data, button2: e.target.value })}
      />

      <input
        className="border p-2 w-full"
        value={data.cvLink}
        onChange={(e) => setData({ ...data, cvLink: e.target.value })}
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
