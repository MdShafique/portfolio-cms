"use client";

import { useEffect, useState } from "react";

export default function ServiceSetting() {
  const [services, setServices] = useState<any>(null);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const save = async () => {
    await fetch("/api/services", {
      method: "POST",
      body: JSON.stringify(services),
    });
    alert("Services updated!");
  };

  if (!services) return <p>Loading…</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Services Settings</h1>

      <input
        className="border p-2 w-full mb-4"
        value={services.smallTitle}
        onChange={(e) => setServices({ ...services, smallTitle: e.target.value })}
        placeholder="Small Title"
      />

      <input
        className="border p-2 w-full mb-4"
        value={services.mainTitle}
        onChange={(e) => setServices({ ...services, mainTitle: e.target.value })}
        placeholder="Main Title"
      />

      <textarea
        className="border p-2 w-full mb-4"
        value={services.description}
        onChange={(e) => setServices({ ...services, description: e.target.value })}
        placeholder="Section description"
      />

      <h2 className="text-xl font-bold mb-3">Service Items</h2>

      {services.items.map((item: any, index: number) => (
        <div key={item.id} className="border p-4 rounded mb-4">
          <input
            className="border p-2 w-full mb-2"
            value={item.title}
            onChange={(e) => {
              services.items[index].title = e.target.value;
              setServices({ ...services });
            }}
            placeholder="Title"
          />

          <input
            className="border p-2 w-full mb-2"
            value={item.text}
            onChange={(e) => {
              services.items[index].text = e.target.value;
              setServices({ ...services });
            }}
            placeholder="Description"
          />

          <input
            className="border p-2 w-full mb-2"
            value={item.icon}
            onChange={(e) => {
              services.items[index].icon = e.target.value;
              setServices({ ...services });
            }}
            placeholder="Emoji Icon"
          />

          <input
            className="border p-2 w-full mb-2"
            value={item.iconBg}
            onChange={(e) => {
              services.items[index].iconBg = e.target.value;
              setServices({ ...services });
            }}
            placeholder="Icon BG Color"
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
