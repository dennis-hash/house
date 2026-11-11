import { HeartHandshake, ShieldCheck, Zap } from "lucide-react";
import { processSteps } from "../data";
import SectionHeading from "./SectionHeading";

const values = [
  { icon: Zap, title: "Built for Africa", text: "Mobile money, USSD and low-bandwidth users are designed in from day one." },
  { icon: ShieldCheck, title: "Secure by default", text: "Role-based access, audit trails and data protection compliance." },
  { icon: HeartHandshake, title: "Long-term partner", text: "We stay on after launch to support, improve and scale your product." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            center={false}
            eyebrow="About InkredTech"
            title="A Kenyan software company building for scale"
            text="InkredTech Ltd is a Kenyan technology company based in Ruiru. We combine strong engineering with local market knowledge to deliver software that works for businesses, institutions and the communities they serve."
          />
          <div className="mt-10 space-y-6">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-600">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{title}</h3>
                  <p className="mt-1 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
          <h3 className="text-xl font-extrabold text-ink-900">How we work</h3>
          <ol className="mt-8 space-y-8">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative flex gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink-900 font-bold text-brand-400">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-ink-900">{s.title}</h4>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
