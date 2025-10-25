import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[560px]" aria-label="Hero">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Spline scene="https://prod.spline.design/9QzN3CTDRDtw5ogp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0b0b12]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center pt-16">
        <p className="text-xs md:text-sm tracking-widest uppercase text-white/70">AI • Machine Learning • Data • Systems</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">Kartik K V</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl">
          Recent graduate specialized in AI/ML, data platforms, and intelligent systems. I design, build, and ship reliable ML features end‑to‑end — from data to deployment.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#skills" className="px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition-colors">Explore Skills</a>
          <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
