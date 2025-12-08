"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [nav, setNav] = useState<any>(null);

  useEffect(() => {
    fetch("/api/navbar")
      .then((res) => res.json())
      .then((data) => setNav(data));
  }, []);

  if (!nav) return null;

  return (
    <nav className="w-full py-4 shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        <h1 className="text-xl font-bold">{nav.logoText}</h1>

        <ul className="hidden md:flex gap-6">
          {nav.menu.map((item: any) => (
            <li key={item.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <p>{nav.callText}: <strong>{nav.phone}</strong></p>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded dark:border-gray-300"
          >
            {theme === "dark" ? "🌙 Dark" : "☀ Light"}
          </button>
        </div>

      </div>
    </nav>
  );
}
