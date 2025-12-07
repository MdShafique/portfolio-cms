"use client";
import { useState, useEffect } from "react";

export default function ContactSetting() {
  const [form, setForm] = useState({ email: "", address: "" });

  useEffect(() => {
    fetch("/api/contact")
      .then(res => res.json())
      .then(data => setForm(data));
  }, []);

  const save = async () => {
    await fetch("/api/contact/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Contact Info Updated!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Contact Settings</h1>

      <input
        className="border p-2 w-full mt-4"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="border p-2 w-full mt-4"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button onClick={save} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
        Save
      </button>
    </div>
  );
}
