import { Phone } from "lucide-react";
import { company } from "../data";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-500 to-brand-400">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-ink-950 sm:text-3xl">Your partner in software & automation</h2>
          <p className="mt-2 text-ink-900/80">Have an idea or a process to digitise? Let's talk.</p>
        </div>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 font-semibold text-white transition hover:bg-ink-800"
        >
          <Phone className="size-4" /> {company.phone}
        </a>
      </div>
    </section>
  );
}
