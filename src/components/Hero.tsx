import { ArrowRight, CheckCircle2, Code2, CreditCard, MessageSquareText } from "lucide-react";
import { stats } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 right-0 size-[36rem] rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 -left-40 size-[28rem] rounded-full bg-indigo-600/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-300 uppercase">
            Software · SaaS · Fintech
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Technology that powers <span className="text-brand-400">growing African businesses</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            InkredTech designs and builds bespoke software, SaaS platforms, payment integrations and automation for
            schools, churches, lenders and SMEs, so you can run smarter and serve customers better.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-7 py-3.5 font-semibold text-ink-950 transition hover:bg-brand-300"
            >
              Explore services <ArrowRight className="size-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              See our work
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <dt className="text-sm text-slate-400">{s.label}</dt>
            <dd className="mt-1 text-3xl font-extrabold text-white">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      <div className="rounded-3xl border border-white/10 bg-ink-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-1.5 pb-4">
          <span className="size-3 rounded-full bg-rose-400" />
          <span className="size-3 rounded-full bg-amber-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs text-slate-500">dashboard.inkredtech.com</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            ["Revenue", "KES 2.4M", "+18%"],
            ["Active users", "12,480", "+9%"],
            ["Collections", "96.2%", "+3%"],
          ].map(([k, v, d]) => (
            <div key={k} className="rounded-xl bg-white/5 p-3">
              <p className="text-[11px] text-slate-400">{k}</p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">{v}</p>
              <p className="text-[11px] font-semibold text-brand-400">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-36 items-end gap-2 rounded-xl bg-white/5 p-4">
          {[40, 62, 48, 75, 58, 88, 70, 95, 80, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-white/10 bg-white p-4 text-ink-900 shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
            <CreditCard className="size-5" />
          </span>
          <div>
            <p className="text-xs text-slate-500">M-Pesa payment</p>
            <p className="font-bold">KES 4,500 received</p>
          </div>
          <CheckCircle2 className="size-5 text-emerald-500" />
        </div>
      </div>

      <div className="absolute -top-6 -right-4 hidden flex-col gap-2 sm:flex">
        <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-lg">
          <Code2 className="size-4 text-indigo-600" /> Custom APIs
        </span>
        <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-lg">
          <MessageSquareText className="size-4 text-brand-600" /> SMS & USSD
        </span>
      </div>
    </div>
  );
}
