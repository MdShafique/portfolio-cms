"use client";

import { useEffect, useState } from "react";

export default function PortfolioSetting() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const save = async () => {
    await fetch("/api/portfolio", {
      method: "POST",
      body: JSON.stringify(data),
    });
    alert("Portfolio Updated!");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Portfolio Settings</h1>

      <label>Small Title</label>
      <input
        className="border p-2 w-full mb-4"
        value={data.smallTitle}
        onChange={(e) => setData({ ...data, smallTitle: e.target.value })}
      />

      <label>Main Title</label>
      <input
        className="border p-2 w-full mb-4"
        value={data.mainTitle}
        onChange={(e) => setData({ ...data, mainTitle: e.target.value })}
      />

      <label>Description</label>
      <textarea
        className="border p-2 w-full mb-4"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <h2 className="text-xl font-bold mt-6">Categories</h2>
      {data.categories.map((cat: string, i: number) => (
        <input
          key={i}
          className="border p-2 w-full mb-2"
          value={cat}
          onChange={(e) => {
            data.categories[i] = e.target.value;
            setData({ ...data });
          }}
        />
      ))}

      <h2 className="text-xl font-bold mt-6">Portfolio Items</h2>
      {data.items.map((item: any, i: number) => (
        <div key={item.id} className="border p-4 rounded mb-4">
          <input
            className="border p-2 w-full mb-2"
            value={item.image}
            onChange={(e) => {
              item.image = e.target.value;
              setData({ ...data });
            }}
            placeholder="Image URL"
          />

          <input
            className="border p-2 w-full"
            value={item.category}
            onChange={(e) => {
              item.category = e.target.value;
              setData({ ...data });
            }}
            placeholder="Category"
          />
        </div>
      ))}

      <button
        onClick={save}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
