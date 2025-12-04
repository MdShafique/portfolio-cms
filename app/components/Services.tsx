export default function Services() {
  const items = [
    "Web Development",
    "Responsive Design",
    "UI/UX Design",
    "SEO Optimization",
    "E-commerce",
    "Portfolio Websites",
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Can I Do?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-600 mt-2">High quality service.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
