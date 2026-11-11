import { company, navLinks, projects, services } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed">
            Bespoke software, SaaS platforms and fintech integrations built in Kenya for African businesses.
          </p>
        </div>
        <FooterCol title="Company" links={navLinks.map((l) => ({ label: l.label, href: l.href }))} />
        <FooterCol title="Services" links={services.slice(0, 5).map((s) => ({ label: s.title, href: "#services" }))} />
        <div>
          <FooterCol
            title="Products"
            links={projects.map((p) => ({ label: p.name, href: p.url, external: true }))}
          />
          <div className="mt-6 space-y-1 text-sm">
            <a href={company.phoneHref} className="block hover:text-white">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block hover:text-white">
              {company.email}
            </a>
            <p>{company.postal}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-wider text-white uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="transition hover:text-white"
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
