const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
      <nav className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold tracking-tight">
          kartik.ai()
        </a>
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="px-3 py-1.5 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white text-sm font-semibold shadow-[0_0_24px_-6px_rgba(168,85,247,0.6)] hover:shadow-[0_0_36px_-4px_rgba(99,102,241,0.8)] transition-shadow">Let’s talk</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
