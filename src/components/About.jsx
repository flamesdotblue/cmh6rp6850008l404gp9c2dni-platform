import { Brain, Cpu, Database, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Recent graduate specialized in Machine Learning and AI. I enjoy solving end-to-end problems: from data to deployment. My interests include trustworthy AI, multimodal systems, and optimization for real-time inference.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xl font-semibold">
              YN
            </div>
            <div>
              <h3 className="text-lg font-medium">Your Name</h3>
              <p className="text-sm text-white/70">B.S. in Computer Science — AI/ML Track</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li>• Focus: Representation learning, LLM tooling, and MLOps</li>
            <li>• Coursework: Deep Learning, Probabilistic Models, NLP, Computer Vision</li>
            <li>• Thesis/Capstone: Robustness of Transformer-based models under distribution shift</li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card icon={Brain} title="ML Research" desc="Experimentation, evals, and reproducible training pipelines." />
          <Card icon={Cpu} title="Systems" desc="Optimization, quantization, and on-device inference setups." />
          <Card icon={Database} title="Data" desc="Curation, labeling strategies, and feature stores for scale." />
          <Card icon={Code} title="Product" desc="APIs, demos, and UX to turn models into useful tools." />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600/80">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-base font-medium">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}
