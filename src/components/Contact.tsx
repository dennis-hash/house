import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company, services } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  // Static site: opens the visitor's email client with the enquiry pre-filled.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry: ${form.service || "General"} – ${form.name}`;
    const body = `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-400/20";

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-ink-900 lg:grid lg:grid-cols-5">
          <div className="relative p-8 text-white sm:p-12 lg:col-span-2">
            <div className="grid-bg absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <p className="text-sm font-bold tracking-widest text-brand-300 uppercase">Contact us</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Let's build something great together</h2>
              <p className="mt-4 text-slate-300">
                Tell us about your project and we'll get back to you within one business day.
              </p>
              <ul className="mt-10 space-y-6">
                <ContactItem icon={Phone} label="Call us" value={company.phone} href={company.phoneHref} />
                <ContactItem icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
                <ContactItem icon={MapPin} label="Visit" value={company.location} />
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 bg-white p-8 sm:p-12 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink-900">Full name</span>
                <input
                  required
                  className={field}
                  placeholder="Jane Wanjiku"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink-900">Email</span>
                <input
                  required
                  type="email"
                  className={field}
                  placeholder="jane@company.co.ke"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-900">Service of interest</span>
              <select
                className={field}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-900">Project details</span>
              <textarea
                required
                rows={5}
                className={field}
                placeholder="Tell us what you'd like to build…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-white transition hover:bg-ink-700"
            >
              Send message <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-400">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="block font-semibold break-words">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition hover:text-brand-300">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
