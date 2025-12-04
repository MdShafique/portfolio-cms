export default function BlogSection() {
  const posts = [
    { id: 1, title: "JavaScript Tips", image: "/portfolio.png" },
    { id: 2, title: "React Best Practices", image: "/portfolio.png" },
    { id: 3, title: "Next.js Guide", image: "/portfolio.png" },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore My Blog</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow p-4">
              <img src={p.image} className="rounded-lg" />
              <h3 className="font-semibold text-lg mt-4">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                A brief introduction of the blog post.
              </p>
              <button className="mt-4 text-indigo-600">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
