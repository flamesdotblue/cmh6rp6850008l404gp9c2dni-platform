import { Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Vision-Language Retrieval',
    desc: 'Cross-encoder with CLIP features and hard-negative mining. Achieved +6.2% Recall@10 on custom dataset.',
    tags: ['PyTorch', 'CLIP', 'Faiss', 'WandB'],
    link: '#',
  },
  {
    title: 'Low-latency LLM Chat',
    desc: 'Quantized 7B model with KV-cache paging and speculative decoding for sub-50ms token latency.',
    tags: ['vLLM', 'TensorRT-LLM', 'GGUF'],
    link: '#',
  },
  {
    title: 'Time-series Anomaly Detection',
    desc: 'Dilated TCN with VAE prior and UMAP for interpretable embeddings and alerts.',
    tags: ['TCN', 'VAE', 'UMAP', 'FastAPI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-white/70">Selected work highlighting practical ML engineering and research rigor.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10"
        >
          <Rocket className="h-4 w-4" />
          Collaborate
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a
      href={link}
      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
    >
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/0 px-2.5 py-1 text-xs text-white/70 group-hover:border-white/20"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
