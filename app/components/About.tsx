import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
      
      <div>
        <h2 className="text-3xl font-bold mb-4">MD. SHAFIKUL ISLAM</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a professional web developer with experience in React, Next.js,
          Tailwind, Node.js, and more. I love creating modern & beautiful
          websites.
        </p>

        <ul className="mt-6 space-y-2 text-gray-700">
          <li>✔ Frontend Developer</li>
          <li>✔ UI/UX Enthusiast</li>
          <li>✔ Problem Solver</li>
          <li>✔ Creative Thinker</li>
        </ul>

        <button className="mt-6 px-6 py-2 bg-black text-white rounded-md">
          Contact Me
        </button>
      </div>

      <div className="flex justify-center">
        <Image
          src="/portfolio.png"
          width={400}
          height={400}
          className="rounded-lg shadow-xl"
          alt="about"
        />
      </div>

    </section>
  );
}
