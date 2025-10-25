import { Brain, BarChart3, Database, Code2, Server, Globe } from 'lucide-react';

const skillGroups = [
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    items: ['Large Language Models', 'Natural Language Processing (NLP)', 'Prompt Engineering'],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    items: ['Power BI', 'Data Analytics'],
  },
  {
    title: 'Business Intelligence',
    icon: Server,
    items: ['MSSQL BI (SSIS, SSAS)'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['Microsoft SQL Server R2', 'MySQL DB'],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'C++', 'Java', 'Jscript'],
  },
  {
    title: 'Web & Tools',
    icon: Globe,
    items: ['IIS', 'Apache Server', 'HTML', 'VB & JS scripting'],
  },
  {
    title: 'Operating Systems',
    icon: Server,
    items: ['Windows', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skills</h2>
        <p className="text-white/70 max-w-xl">A breadth of AI/ML, analytics, and systems skills to build robust, production‑ready solutions.</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600/80">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              {items.map((it) => (
                <li key={it} className="leading-relaxed">• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
