"use client";

import { useEffect, useState } from "react";

export default function MediaPage() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadFiles = async () => {
    const res = await fetch("/api/media/list");
    const data = await res.json();
    setFiles(data);
  };

  const uploadFile = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    await fetch("/api/media/upload", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    loadFiles();
  };

  const deleteFile = async (filename: string) => {
    await fetch("/api/media/delete", {
      method: "POST",
      body: JSON.stringify({ filename }),
    });

    loadFiles();
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Media Manager</h1>

      <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Upload File
        <input type="file" hidden onChange={uploadFile} />
      </label>

      {loading && <p className="mt-2 text-green-600">Uploading...</p>}

      <div className="grid grid-cols-3 gap-6 mt-6">
        {files.map((file: any) => (
          <div key={file.filename} className="border p-3 rounded">
            <img
              src={file.url}
              className="w-full h-40 object-cover rounded"
              alt="media"
            />

            <p className="mt-2 text-sm">{file.filename}</p>

            <button
              onClick={() => deleteFile(file.filename)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
