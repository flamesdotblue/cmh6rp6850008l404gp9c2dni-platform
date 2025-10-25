import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white font-[Inter]">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} • Kartik K V • AI/ML & Data Engineer
        </div>
      </footer>
    </div>
  );
}

export default App;
