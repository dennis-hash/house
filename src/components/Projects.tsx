import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our work"
          title="Products we've built and run"
          text="Real platforms serving schools, churches and lenders every day."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 transition hover:border-white/25">
      <div className={`relative h-48 bg-gradient-to-br ${p.accent} p-6`}>
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {t}
              </span>
            ))}
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">{p.name}</p>
            <p className="text-sm font-medium text-white/85">{p.tagline}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="leading-relaxed text-slate-300">{p.description}</p>
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {p.features.map((f) => (
            <li key={f} className="rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300">
              {f}
            </li>
          ))}
        </ul>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-brand-400 transition group-hover:text-brand-300"
        >
          Visit {p.name} <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
