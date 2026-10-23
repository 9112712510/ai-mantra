"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MoveRight,
  Palette,
  Rocket,
  Send,
  Atom,
  Sparkles,
  X,
  Zap,
  Braces,
  Hexagon,
  GitBranch,
  PenTool,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "High-Converting Websites",
    description: "Get a faster, clearer website that earns trust, ranks better, and turns visits into enquiries.",
    tags: ["Next.js", "SEO", "Responsive"],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Automation for Businesses",
    description: "Reduce repetitive work and respond faster with AI chatbots, integrations, and automations built around your workflow.",
    tags: ["AI Agents", "Automation", "OpenAI"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Custom Business Software",
    description: "Give your team better visibility with dashboards, CRMs, and internal tools that make complex work feel simple.",
    tags: ["Dashboards", "CRM", "APIs"],
  },
  {
    number: "04",
    icon: Palette,
    title: "Conversion-Focused UI/UX",
    description: "Make every interaction easier with clear, thoughtful interfaces that help people trust and choose your business.",
    tags: ["Figma", "Prototypes", "Systems"],
  },
];

type Project = {
  type: string;
  title: string;
  label: string;
  color: string;
  logo?: string;
  link?: string;
};

const projects: Project[] = [
  { type: "Business website", title: "San Labels", label: "Custom labels, decals & identification", color: "from-teal-500 to-cyan-400", logo: "/san-labels-logo.png", link: "https://sanlabels.com" },
];

const process = [
  ["01", "Discovery & Strategy", "Every engagement begins with a focused strategy session. We map your goals, audience, and competitive landscape to define exactly what success looks like."],
  ["02", "Proposal & Scope", "You receive a detailed proposal outlining deliverables, timeline, and investment, so expectations are clear and agreed before any work begins."],
  ["03", "Experience Design", "We translate strategy into thoughtful wireframes and polished visual design, shaping every detail of the experience before development starts."],
  ["04", "Development", "Your website is built with clean, modern, performance-driven engineering — fast, secure, responsive, and ready to scale with your business."],
  ["05", "Quality Assurance", "Every screen is tested across devices and browsers, refined through your feedback, and prepared for a flawless release."],
  ["06", "Launch & Growth", "We manage a smooth, confident launch and remain your long-term digital partner — supporting, refining, and growing with your business."],
];

const tech = [
  [Code2, "Next.js"],
  [Atom, "React"],
  [Braces, "TypeScript"],
  [Palette, "Tailwind CSS"],
  [Hexagon, "Node.js"],
  [Database, "MongoDB"],
  [Bot, "OpenAI"],
  [PenTool, "Figma"],
  [GitBranch, "Git & GitHub"],
  [Zap, "Framer Motion"],
];

const faqs = [
  ["What kind of projects does AI Mantra take on?", "We work with businesses that need premium websites, AI-powered workflows, custom software, and thoughtful product experiences."],
  ["How long does a typical website take?", "A focused marketing website usually takes 2–5 weeks, depending on the scope, content, and feedback cycle."],
  ["Can you work with an existing brand?", "Yes. We can build from an established identity or help you create a consistent digital design system from the ground up."],
  ["How much does a website cost?", "Every project is scoped around your goals. Starter websites begin from ₹9,999, and we can provide a clear quote after a free consultation."],
  ["How do we get started?", "Book a free consultation. We will learn about your goals, answer your questions, and recommend the clearest next step."],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="site-container flex h-24 items-center justify-between">
          <a href="#top" aria-label="AI Mantra home" className="relative z-10">
            <Image src="/ai-mantra-logo.png" alt="AI Mantra" width={1088} height={820} priority className="h-20 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#process">Process</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>
          <a href="#contact" className="button-primary hidden lg:inline-flex">Book a consultation <ArrowUpRight size={16} /></a>
          <button className="relative z-10 rounded-xl border border-slate-200 p-2.5 text-slate-700 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
            {["services", "work", "process", "faq", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold capitalize text-slate-700 hover:bg-slate-50">{item === "contact" ? "Book a consultation" : item}</a>
            ))}
          </motion.nav>
        )}
      </header>

      <section id="top" className="hero-section relative flex min-h-[760px] items-center pt-28 lg:min-h-[820px]">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-cyan" />
        <div className="site-container relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="max-w-2xl">
            <div className="eyebrow mb-7"><span className="eyebrow-dot" /> Digital partner for ambitious businesses <span className="eyebrow-line" /></div>
            <h1 className="display-heading">Websites that<br /><span className="gradient-text">grow businesses.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">We help businesses get more leads, bookings, and customers through high-converting websites, practical AI solutions, and smarter automation.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button-primary justify-center">Book free consultation <MoveRight size={17} /></a>
              <a href="#work" className="button-secondary justify-center">Explore our work <ArrowUpRight size={17} /></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-slate-500">
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-cyan-500" /> Strategy-first</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-cyan-500" /> Built to scale</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-cyan-500" /> Human support</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.15 } }} className="relative mx-auto w-full max-w-[530px]">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-panel relative mx-auto aspect-square max-w-[460px] rounded-[40px] border border-white/80 p-5 shadow-2xl shadow-blue-200/40 sm:p-7">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[27px] bg-[#0F172A] p-6 text-white sm:p-8">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" /><div className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="relative flex items-center justify-between"><div className="flex items-center gap-2 text-sm text-slate-300"><span className="h-2 w-2 rounded-full bg-cyan-400" /> AI Mantra / studio</div><span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-400">01 — 04</span></div>
                <div className="relative py-10"><p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Conversion-ready experience</p><p className="text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">Attention into<br /><span className="text-blue-400">action.</span></p><div className="mt-8 h-px w-full bg-white/10" /><div className="mt-5 flex items-center justify-between text-xs text-slate-400"><span>Web · Apps · AI · Automation</span><ArrowUpRight size={15} /></div></div>
                <div className="relative grid grid-cols-3 gap-2 text-center text-xs text-slate-400"><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p className="mb-1 text-lg font-semibold text-white">1</p>Live project</div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p className="mb-1 text-lg font-semibold text-white">100%</p>Focus</div><div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><p className="mb-1 text-lg font-semibold text-white">24/7</p>Support</div></div>
              </div>
            </div>
            <div className="float-card absolute -left-2 bottom-8 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70 sm:flex lg:-left-10"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600"><Rocket size={19} /></div><div><p className="text-xs text-slate-500">Your next move</p><p className="text-sm font-semibold text-slate-900">Starts with a conversation</p></div></div>
            <div className="float-card absolute -right-2 top-14 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70 sm:block lg:-right-8"><div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-500"><Sparkles size={14} className="text-blue-600" /> SMARTER SYSTEMS</div><div className="flex gap-1"><span className="h-1.5 w-12 rounded-full bg-blue-600" /><span className="h-1.5 w-7 rounded-full bg-cyan-400" /><span className="h-1.5 w-3 rounded-full bg-slate-200" /></div></div>
          </motion.div>
        </div>
        <a href="#services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 md:flex">Scroll to explore <span className="h-8 w-px bg-slate-300" /></a>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="site-container grid grid-cols-2 gap-8 py-10 sm:grid-cols-4"><Stat value="Free" label="Consultation" /><Stat value="Fast" label="Turnaround" /><Stat value="Mobile" label="First delivery" /><Stat value="Ongoing" label="Support" /></div>
      </section>

      <section id="services" className="section-padding bg-white"><div className="site-container"><SectionIntro kicker="What we do" title={<>Digital systems that move<br /><span className="text-slate-400">your business forward.</span></>} description="We combine strategy, design, and engineering to help your business become easier to discover, trust, and choose." /><div className="mt-16 grid gap-5 md:grid-cols-2">{services.map((service, index) => <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ delay: index * 0.08 }} key={service.title} className="service-card group"><div className="flex items-start justify-between"><div className="service-icon"><service.icon size={21} /></div><span className="text-sm font-semibold text-slate-300">{service.number}</span></div><h3 className="mt-12 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3><p className="mt-3 max-w-md leading-7 text-slate-500">{service.description}</p><div className="mt-7 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><ArrowUpRight className="absolute bottom-8 right-8 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" size={21} /></motion.article>)}</div></div></section>

      <section className="section-padding bg-[#F8FAFC]"><div className="site-container grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]"><SectionIntro kicker="Why AI Mantra" title={<>Everything built around<br /><span className="text-slate-400">your growth.</span></>} description="You do not need more technology for its own sake. You need a digital presence that earns trust, creates action, and keeps working after launch." /><div className="grid gap-3 sm:grid-cols-2">{["More qualified leads", "Higher conversions", "Mobile first", "SEO ready", "Secure by default", "Built to scale"].map((benefit, index) => <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} key={benefit} className="benefit-item"><span className="benefit-check"><Check size={15} strokeWidth={3} /></span>{benefit}</motion.div>)}</div></div></section>

      <section id="work" className="section-padding bg-white"><div className="site-container"><SectionIntro kicker="Selected work" title={<>Built for the next<br /><span className="text-slate-400">big thing.</span></>} description="See how a clear digital experience can make a business easier to discover, trust, and choose. Your project could be next." align="center" /><div className={`mt-16 grid gap-6 ${projects.length === 1 ? "mx-auto max-w-3xl" : "lg:grid-cols-3"}`}>{projects.map((project, index) => <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.1 }} key={project.title} className="group"><div className={`project-visual bg-gradient-to-br ${project.color}`}><div className="project-grid" /><div className="project-window"><div className="flex gap-1.5"><span /><span /><span /></div>{project.logo ? <div className="mt-7 flex items-center rounded-xl bg-white px-5 py-3 shadow-lg shadow-slate-900/20"><Image src={project.logo} alt={`${project.title} logo`} width={64} height={64} className="h-16 w-auto" /></div> : <><div className="mt-7 h-2 w-2/5 rounded-full bg-white/80" /><div className="mt-3 h-2 w-4/5 rounded-full bg-white/25" /></>}<div className="mt-10 grid grid-cols-3 gap-2"><i /><i /><i /></div></div><span className="project-index">0{index + 1}</span></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">{project.type}</p><h3 className="mt-2 text-xl font-semibold text-slate-950">{project.title}</h3><p className="mt-1 text-sm text-slate-500">{project.label}</p></div>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website`} className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"><ArrowUpRight size={17} /></a> : <button aria-label={`View ${project.title}`} className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white"><ArrowUpRight size={17} /></button>}</div></motion.article>)}</div><div className="mt-12 text-center"><a href="#contact" className="button-secondary">Start a project <MoveRight size={17} /></a></div></div></section>

      <section id="process" className="section-padding overflow-hidden bg-[#0F172A] text-white"><div className="site-container"><SectionIntro dark kicker="How we work" title={<>A clear path from<br /><span className="text-slate-500">call to launch.</span></>} description="Our structured process removes uncertainty, respects your time, and keeps your project moving. You will always know exactly what happens next, and what to expect at every stage." /><div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">{process.map(([number, title, description], index) => <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.09 }} key={number} className="process-card"><span className="text-sm font-semibold text-cyan-400">{number}</span><div className="my-12 h-px w-10 bg-blue-500" /><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-[#F8FAFC]"><div className="site-container"><SectionIntro kicker="Technology behind the results" title={<>Built for speed.<br /><span className="text-slate-400">Designed for growth.</span></>} description="The tools matter because of what they give your business: faster pages, stronger foundations, smoother workflows, and room to scale." /><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["Faster loading websites", "Better Google rankings", "Secure architecture", "Scalable systems"].map((benefit) => <div key={benefit} className="benefit-item"><span className="benefit-check"><Check size={15} strokeWidth={3} /></span>{benefit}</div>)}</div><div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{tech.map(([Icon, name]) => <div key={name as string} className="tech-card"><Icon size={21} className="text-blue-600" /><span>{name as string}</span></div>)}</div></div></section>

      <section id="faq" className="section-padding bg-white"><div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]"><SectionIntro kicker="Questions, answered" title={<>Let&apos;s make<br /><span className="text-slate-400">things clear.</span></>} description="Still curious? Send us a message and we&apos;ll be happy to talk through your project." /><div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question, answer]) => <details key={question} className="faq-item group"><summary>{question}<ChevronDown size={19} className="transition-transform group-open:rotate-180" /></summary><p>{answer}</p></details>)}</div></div></section>

      <section id="contact" className="section-padding pt-8"><div className="site-container"><div className="contact-panel relative overflow-hidden rounded-[32px] bg-[#0F172A] px-7 py-14 text-white sm:px-14 lg:px-20 lg:py-20"><div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" /><div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" /><div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]"><div><div className="eyebrow dark-eyebrow mb-7"><span className="eyebrow-dot" /> Let&apos;s build something useful</div><h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Your next big move<br /><span className="text-blue-400">starts here.</span></h2><p className="mt-6 max-w-lg leading-7 text-slate-400">Tell us the result you want to create. We&apos;ll help you find the clearest, smartest way to get there.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a className="button-primary justify-center" href="mailto:prathameshkanse09@gmail.com">Email AI Mantra <Send size={16} /></a><a className="button-dark-outline justify-center" href="https://wa.me/919112712510" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Chat on WhatsApp</a></div></div></div></div></section>

      <footer className="bg-white pb-8 pt-8"><div className="site-container"><div className="grid gap-12 border-t border-slate-200 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><Image src="/ai-mantra-logo.png" alt="AI Mantra" width={1088} height={820} className="h-16 w-auto" /><p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">Websites, AI solutions, and automation that help businesses earn trust and grow.</p></div><div><p className="footer-heading">Services</p><div className="mt-5 grid gap-3 text-sm"><a href="#services" className="footer-link">Business websites</a><a href="#services" className="footer-link">AI automation</a><a href="#services" className="footer-link">Custom software</a><a href="#services" className="footer-link">UI/UX design</a></div></div><div><p className="footer-heading">Company</p><div className="mt-5 grid gap-3 text-sm"><a href="#work" className="footer-link">Our work</a><a href="#process" className="footer-link">What happens next</a><a href="#faq" className="footer-link">FAQ</a><a href="#contact" className="footer-link">Contact us</a></div></div><div><p className="footer-heading">Get in touch</p><div className="mt-5 grid gap-3 text-sm"><a href="mailto:prathameshkanse09@gmail.com" className="footer-link break-all">prathameshkanse09@gmail.com</a><a href="tel:+919112712510" className="footer-link">+91 9112712510</a><a href="https://wa.me/919112712510" target="_blank" rel="noreferrer" className="footer-link">WhatsApp</a><span className="text-slate-400">LinkedIn coming soon</span></div></div></div><div className="flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center"><span>© {new Date().getFullYear()} AI Mantra. All rights reserved.</span><div className="flex gap-5"><a href="/privacy" className="footer-link">Privacy Policy</a><a href="/terms" className="footer-link">Terms</a></div></div></div></footer>
      <a href="https://wa.me/919112712510" target="_blank" rel="noreferrer" aria-label="Chat with AI Mantra on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20 transition-transform hover:scale-105"><MessageCircle size={25} /></a>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="text-center sm:text-left"><p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{value}</p><p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">{label}</p></div>;
}

function SectionIntro({ kicker, title, description, dark = false, align = "left" }: { kicker: string; title: React.ReactNode; description: string; dark?: boolean; align?: "left" | "center" }) {
  return <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}><p className={`mb-5 text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-cyan-400" : "text-blue-600"}`}>{kicker}</p><h2 className={`section-heading ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2><p className={`mt-6 max-w-xl text-base leading-7 ${align === "center" ? "mx-auto" : ""} ${dark ? "text-slate-400" : "text-slate-500"}`}>{description}</p></div>;
}
