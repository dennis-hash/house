import { Check } from "lucide-react";
import { services } from "../data";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Services that move your business forward"
          text="From idea to launch and beyond, we cover the full lifecycle of your digital products."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, points }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-ink-900 text-brand-400 transition group-hover:bg-brand-400 group-hover:text-ink-950">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
