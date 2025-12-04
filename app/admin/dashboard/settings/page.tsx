"use client";

import { useEffect, useState } from "react";

export default function SiteSettings() {
  const [settings, setSettings] = useState({
    siteTitle: "",
    heroTitle: "",
    heroSubtitle: "",
    favicon: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const updateSettings = async () => {
    await fetch("/api/settings", {
      method: "POST",
      body: JSON.stringify(settings),
    });

    alert("Settings Updated Successfully!");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-semibold mb-4">Site Settings</h2>

      {/* Site Title */}
      <div>
        <label className="block font-medium">Site Title</label>
        <input
          className="border p-2 rounded w-full mt-2"
          value={settings.siteTitle}
          onChange={(e) =>
            setSettings({ ...settings, siteTitle: e.target.value })
          }
        />
      </div>

      {/* Hero Title */}
      <div>
        <label className="block font-medium">Hero Title</label>
        <input
          className="border p-2 rounded w-full mt-2"
          value={settings.heroTitle}
          onChange={(e) =>
            setSettings({ ...settings, heroTitle: e.target.value })
          }
        />
      </div>

      {/* Hero Subtitle */}
      <div>
        <label className="block font-medium">Hero Subtitle</label>
        <input
          className="border p-2 rounded w-full mt-2"
          value={settings.heroSubtitle}
          onChange={(e) =>
            setSettings({ ...settings, heroSubtitle: e.target.value })
          }
        />
      </div>

      {/* Favicon */}
      <div>
        <label className="block font-medium">Favicon URL</label>
        <input
          className="border p-2 rounded w-full mt-2"
          value={settings.favicon}
          onChange={(e) =>
            setSettings({ ...settings, favicon: e.target.value })
          }
        />

        <img
          src={settings.favicon}
          alt="favicon"
          className="w-12 h-12 mt-3 rounded"
        />
      </div>

      <button
        onClick={updateSettings}
        className="px-6 py-2 bg-black text-white rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
