"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold">Contact Us</p>
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-3">
          I’m always excited to connect with new people and ideas. Whether it’s a website 
          project, a marketing campaign, or just a question — feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-10">
        
        {/* LEFT INFO SECTION */}
        <div className="space-y-8">
          <div className="flex gap-4 items-center">
            <div className="p-4 bg-purple-100 rounded-xl">
              <Mail className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">somono65@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="p-4 bg-purple-100 rounded-xl">
              <MapPin className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Chittagong Division, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={7}
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <div className="flex gap-4">
            <button
              onClick={sendMessage}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <button
              onClick={() => setForm({ name: "", email: "", message: "" })}
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
            >
              Reset
            </button>
          </div>

          {success && (
            <p className="text-green-600 font-medium">{success}</p>
          )}
        </div>
      </div>
    </section>
  );
}
