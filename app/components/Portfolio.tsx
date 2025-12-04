export default function Portfolio() {
  const images = [
    "/portfolio.png",
    "/portfolio.png",
    "/portfolio.png",
    "/portfolio.png",
    "/portfolio.png",
    "/portfolio.png",
  ];

  return (
    <section id="portfolio" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">My Amazing Work</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-lg shadow hover:scale-[1.02] transition"
          />
        ))}
      </div>
    </section>
  );
}
