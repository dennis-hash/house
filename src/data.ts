import {
  BrainCircuit,
  Cloud,
  Code2,
  CreditCard,
  Layers,
  MessageSquareText,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "InkredTech",
  legalName: "INKREDTECH LTD",
  phone: "+254 112 727 544",
  phoneHref: "tel:+254112727544",
  email: "info@inkredtech.com",
  location: "Greec Towers, Kamiti Road, Ruiru, Kenya",
  postal: "P.O. Box 1088-00232, Ruiru",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Bespoke Software",
    description:
      "Custom systems built around how your business actually works, from internal tools to full ERPs..",
    points: ["Business process automation", "ERP & back-office systems", "Legacy modernisation"],
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "Multi-tenant platforms with subscriptions, roles and white-labelling, ready to scale across clients.",
    points: ["Multi-tenant architecture", "Billing & subscriptions", "Admin & analytics dashboards"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description:
      "Fast, accessible web apps and Android/iOS apps your customers and staff will enjoy using.",
    points: ["React & React Native", "Progressive web apps", "UI/UX design"],
  },
  {
    icon: CreditCard,
    title: "Payments & Fintech",
    description:
      "M-Pesa, Airtel Money and bank integrations, plus lending, savings and wallet systems.",
    points: ["M-Pesa Daraja & Airtel APIs", "Loan management & scoring", "Reconciliation & settlements"],
  },
  {
    icon: MessageSquareText,
    title: "Bulk SMS & USSD",
    description:
      "Reach customers on any phone with SMS campaigns, OTPs and interactive USSD menus.",
    points: ["Transactional & bulk SMS", "USSD menu development", "Two-way messaging"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Put AI to work with chatbots, document processing and workflows that save hours every week.",
    points: ["AI assistants & chatbots", "Workflow automation", "Data insights & reporting"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable hosting, CI/CD pipelines and monitoring so your systems stay fast and online.",
    points: ["Docker & Kubernetes", "CI/CD pipelines", "Backups & monitoring"],
  },
  {
    icon: Users,
    title: "IT Consultation",
    description:
      "Technical guidance on architecture, digital transformation and choosing the right tools.",
    points: ["Solution architecture", "Technical audits", "Team augmentation"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  tags: string[];
  accent: string;
  features: string[];
};

export const projects: Project[] = [
  {
    name: "ShuleSoft",
    tagline: "School management made simple",
    description:
      "An all-in-one school management system covering admissions, fees, academics and parent communication.",
    url: "https://shulesoft.kassotech.com/",
    tags: ["EdTech", "SaaS"],
    accent: "from-sky-500 to-indigo-600",
    features: ["Student records", "Fee collection", "Exams & report cards", "Parent SMS alerts"],
  },
  {
    name: "ChurchKonnekt",
    tagline: "Church management platform",
    description:
      "Helps churches manage members, giving, groups and events, and keep their congregation connected.",
    url: "https://church-dv.kassotech.com/",
    tags: ["Community", "SaaS"],
    accent: "from-amber-500 to-rose-600",
    features: ["Membership", "Tithes & offerings", "Groups & events", "Bulk messaging"],
  },
  {
    name: "Konnekt",
    tagline: "Microfinance platform",
    description:
      "A multi-tenant lending platform for loan origination, disbursements, repayments and credit scoring.",
    url: "https://konnekt.fanakatech.com",
    tags: ["Fintech", "Lending"],
    accent: "from-emerald-500 to-teal-700",
    features: ["Loan lifecycle", "Mobile money", "Health scoring", "IFRS 9 reporting"],
  },
];

export const processSteps = [
  { title: "Discover", text: "We learn your goals, users and constraints, then agree on scope and success measures." },
  { title: "Design", text: "Wireframes, prototypes and a technical plan you can review before any code is written." },
  { title: "Build", text: "Agile sprints with regular demos, so you see progress and steer as we go." },
  { title: "Launch & Support", text: "Deployment, training and ongoing maintenance to keep things running smoothly." },
];

export const stats = [
  { value: "3+", label: "SaaS products live" },
  { value: "8", label: "Core service areas" },
  { value: "1 day", label: "Response to enquiries" },
  { value: "100%", label: "Kenyan owned" },
];
