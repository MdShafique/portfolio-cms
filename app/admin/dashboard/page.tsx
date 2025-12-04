"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("pcms_admin");
    if (!raw) {
      router.replace("/admin");
      return;
    }
    setUser(JSON.parse(raw));
  }, []);

  if (!user) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome, {user.id}</h2>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white rounded shadow">Posts: 10</div>
        <div className="p-4 bg-white rounded shadow">Users: 5</div>
        <div className="p-4 bg-white rounded shadow">Comments: 22</div>
      </div>
    </div>
  );
}
