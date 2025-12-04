"use client";

import { useEffect, useState } from "react";

export default function NavbarSetting() {
  const [nav, setNav] = useState({
    logoText: "",
    menu: [],
    callText: "",
    phone: "",
    mode: "light"
  });

  const [newMenuItem, setNewMenuItem] = useState({ label: "", link: "" });

  useEffect(() => {
    fetch("/api/navbar")
      .then(res => res.json())
      .then(data => setNav(data));
  }, []);

  const saveNavbar = async () => {
    await fetch("/api/navbar", {
      method: "POST",
      body: JSON.stringify(nav)
    });
    alert("Navbar Updated!");
  };

  const addMenuItem = () => {
    setNav({
      ...nav,
      menu: [...nav.menu, { id: Date.now(), ...newMenuItem }]
    });
    setNewMenuItem({ label: "", link: "" });
  };

  const deleteMenuItem = (id: number) => {
    setNav({
      ...nav,
      menu: nav.menu.filter((item: any) => item.id !== id)
    });
  };

  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-semibold">Navbar Setting</h2>

      {/* Logo Text */}
      <div>
        <label>Logo Text</label>
        <input
          className="block border p-2 w-full mt-1 rounded"
          value={nav.logoText}
          onChange={(e) => setNav({ ...nav, logoText: e.target.value })}
        />
      </div>

      {/* Menu Items */}
      <div>
        <h3 className="font-medium">Menu Items</h3>

        <div className="space-y-2 mt-3">
          {nav.menu.map((item: any) => (
            <div key={item.id} className="flex gap-2 items-center">
              <input
                className="border p-2 flex-1 rounded"
                value={item.label}
                onChange={(e) =>
                  setNav({
                    ...nav,
                    menu: nav.menu.map((m: any) =>
                      m.id === item.id ? { ...m, label: e.target.value } : m
                    )
                  })
                }
              />
              <input
                className="border p-2 flex-1 rounded"
                value={item.link}
                onChange={(e) =>
                  setNav({
                    ...nav,
                    menu: nav.menu.map((m: any) =>
                      m.id === item.id ? { ...m, link: e.target.value } : m
                    )
                  })
                }
              />
              <button
                className="px-3 py-1 bg-red-600 text-white rounded"
                onClick={() => deleteMenuItem(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Add new Menu */}
        <div className="mt-6 flex gap-2">
          <input
            placeholder="Label"
            className="border p-2 flex-1 rounded"
            value={newMenuItem.label}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, label: e.target.value })
            }
          />
          <input
            placeholder="Link"
            className="border p-2 flex-1 rounded"
            value={newMenuItem.link}
            onChange={(e) =>
              setNewMenuItem({ ...newMenuItem, link: e.target.value })
            }
          />
          <button
            className="px-3 py-2 bg-black text-white rounded"
            onClick={addMenuItem}
          >
            Add
          </button>
        </div>
      </div>

      {/* Call Now */}
      <div>
        <label>Call Text</label>
        <input
          className="block border p-2 w-full mt-1 rounded"
          value={nav.callText}
          onChange={(e) => setNav({ ...nav, callText: e.target.value })}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          className="block border p-2 w-full mt-1 rounded"
          value={nav.phone}
          onChange={(e) => setNav({ ...nav, phone: e.target.value })}
        />
      </div>

      {/* Light / Dark mode */}
      <div>
        <label>Theme Mode</label>
        <select
          className="block border p-2 w-full mt-1 rounded"
          value={nav.mode}
          onChange={(e) => setNav({ ...nav, mode: e.target.value })}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button
        onClick={saveNavbar}
        className="px-6 py-2 bg-black text-white rounded"
      >
        Save Navbar
      </button>

    </div>
  );
}
