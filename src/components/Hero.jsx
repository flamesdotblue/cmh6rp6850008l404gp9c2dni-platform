import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9QzN3CTDRDtw5ogp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

      <div className="relative z-20 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-violet-300" />
          Available for full-time roles & research collaborations
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          AI/ML Engineer passionate about building reliable, human-centered intelligent systems. I craft models, tools, and experiences that turn research into real-world impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-5 py-3 text-sm font-medium text-white/70 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
