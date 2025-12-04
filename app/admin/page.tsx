"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    if (id === "admin" && password === "admin123") {
      localStorage.setItem("pcms_admin", JSON.stringify({ id: "admin" }));
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Try admin / admin123");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow p-8 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>

      <form onSubmit={submit} className="space-y-4">

        <div>
          <label className="block mb-1 text-sm font-medium">User ID</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded mt-4"
        >
          Login
        </button>

      </form>
    </div>
  );
}
