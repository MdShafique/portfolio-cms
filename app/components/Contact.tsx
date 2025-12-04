export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>

      <form className="max-w-xl mx-auto bg-white shadow p-6 rounded-xl space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" rows={4} className="w-full border p-2 rounded"></textarea>

        <button className="w-full py-2 bg-indigo-600 text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
