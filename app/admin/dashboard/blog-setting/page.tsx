"use client";

import { useEffect, useState } from "react";

export default function BlogSetting() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const save = async () => {
    await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Blog updated successfully!");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Settings</h1>

      <input
        className="border p-2 w-full mb-4"
        value={data.smallTitle}
        onChange={(e) => setData({ ...data, smallTitle: e.target.value })}
        placeholder="Small Title"
      />

      <input
        className="border p-2 w-full mb-4"
        value={data.mainTitle}
        onChange={(e) => setData({ ...data, mainTitle: e.target.value })}
        placeholder="Main Title"
      />

      <textarea
        className="border p-2 w-full mb-6"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        placeholder="Description"
      />

      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>

      {data.items.map((item: any, i: number) => (
        <div key={item.id} className="border p-4 rounded mb-4">
          <input
            className="border p-2 w-full mb-2"
            value={item.title}
            onChange={(e) => {
              item.title = e.target.value;
              setData({ ...data });
            }}
            placeholder="Post Title"
          />

          <input
            className="border p-2 w-full mb-2"
            value={item.short}
            onChange={(e) => {
              item.short = e.target.value;
              setData({ ...data });
            }}
            placeholder="Short Description"
          />

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
            value={item.slug}
            onChange={(e) => {
              item.slug = e.target.value;
              setData({ ...data });
            }}
            placeholder="Slug"
          />
        </div>
      ))}

      <button
        onClick={save}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Save All Changes
      </button>
    </div>
  );
}
