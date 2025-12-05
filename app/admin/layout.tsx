"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <aside className={`bg-white border-r shadow-sm h-screen sticky top-0 transition-all duration-300 
        ${open ? "w-64" : "w-20"}`}>

        {/* Logo */}
        <div className="p-4 flex items-center gap-3 border-b">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-gray-100"
          >
            ⫶
          </button>
          {open && <h2 className="font-bold text-lg">Admin Panel</h2>}
        </div>

        {/* Sidebar Items */}
        <nav className="p-4 space-y-2">
          {[
            { name: "Dashboard", href: "/admin/dashboard" },
            { name: "Posts", href: "/admin/dashboard/posts" },
            { name: "Users", href: "/admin/dashboard/users" },
            { name: "Media", href: "/admin/dashboard/media" },
            { name: "Settings", href: "/admin/dashboard/settings" },
            { name: "Navbar Setting", href: "/admin/dashboard/navbar-setting" },
            { name: "Hero Setting", href: "/admin/dashboard/hero-setting" },
            { name: "About Setting", href: "/admin/dashboard/about-setting" }



          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium
                ${pathname === item.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-200"}
              `}
            >
              {open ? item.name : item.name[0]}
            </Link>
          ))}
        </nav>
      </aside>

      {/* RIGHT SECTION (Navbar + Content) */}
      <div className="flex-1 flex flex-col">

        {/* TOP NAVBAR */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
          <h1 className="font-semibold text-lg">
            {pathname.replace("/admin/dashboard", "").replace("/", "") || "Dashboard"}
          </h1>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-black">Preview Site</Link>
            <Link href="/admin" className="text-sm text-red-600 hover:text-red-800">
              Logout
            </Link>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

    </div>
  );
}
