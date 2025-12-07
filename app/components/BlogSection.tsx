"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogSection() {
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  if (!blog) return null;

  return (
    <section className="py-20">
      <div className="text-center mb-10 px-4">
        <p className="text-indigo-600">{blog.smallTitle}</p>
        <h2 className="text-4xl font-bold mt-2">{blog.mainTitle}</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          {blog.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {blog.items.map((post: any) => (
          <div
            key={post.id}
            className="rounded-xl shadow overflow-hidden bg-white"
          >
            <Image
              src={post.image}
              width={600}
              height={400}
              alt={post.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 bg-indigo-600 text-white rounded-b-xl">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm mt-2 opacity-90">{post.short}</p>

              <a
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block font-semibold underline"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
