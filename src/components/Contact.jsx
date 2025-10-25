import { useCallback } from 'react';

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    alert('Thanks for reaching out! Your message has been recorded locally. Update the form action or mailto in code to wire this to your inbox.');
  }, []);

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/15 via-indigo-600/10 to-transparent p-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Let’s connect</h2>
        <p className="mt-3 text-white/80 max-w-2xl">
          Have a role or project in mind? Send a quick message and I’ll get back to you.
        </p>
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" name="name" placeholder="Your name" required />
          <input className="w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" type="email" name="email" placeholder="Your email" required />
          <textarea className="md:col-span-2 w-full rounded-md bg-black/30 border border-white/10 px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-indigo-500" name="message" placeholder="Tell me about your needs" required />
          <button className="md:col-span-2 px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold hover:opacity-95 transition-opacity" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
