import React from "react";
import { Code2, Server, Gamepad, LayoutGrid, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import turtlePic from './assets/turtlepic.png'
import gatorPic from './assets/GatorGuide.png'
import caudalPic from './assets/caudalblock.png'
import lovePic from './assets/loveatfirstfight.png'
/*
  ----------------------------------------------------------------------------
  Louis Li – Portfolio Website (React + TailwindCSS + Framer-Motion)
  ----------------------------------------------------------------------------
*/

export default function Portfolio() {
  return (
    <main className="font-sans antialiased text-gray-100 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 min-h-screen">
      <SiteHeader />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <SiteFooter />
    </main>
  );
}

/*────────────────────────── HEADER ──────────────────────────*/
function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur bg-white/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-lg font-extrabold tracking-wide">Louis Li</h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {[
            ["Projects", "projects"],
            ["Skills", "skills"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-emerald-300 transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/*────────────────────────── HERO ───────────────────────────*/
function Hero() {
  return (
    <section className="pt-28 pb-32 text-center relative overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[60rem] aspect-square rounded-full bg-indigo-500 opacity-20 blur-[200px]" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        <span className="text-emerald-400">My</span> <span className="text-amber-300">Portfolio</span>
      </motion.h2>
      <p className="mt-6 max-w-2xl mx-auto text-gray-300">
        I’m a junior CS major at the University of Florida with a minor in Digital Arts and Sciences. I hope you enjoy some of the work I've done!
      </p>
      <a
        href="#projects"
        className="mt-10 inline-block px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 transition focus:outline-none focus-visible:ring focus-visible:ring-emerald-400"
      >
        View my work
      </a>
    </section>
  );
}

/*────────────────────────── PROJECTS ───────────────────────*/
/*────────────────────────── PROJECTS ───────────────────────*/
function Projects() {
  const projects = [
    {
      title: "Love at First Fight Game",
      desc: "Bullet-hell where the player writes a love poem to defeat the dragon, made using C# and Unity.",
      icon: <Gamepad className="w-6 h-6" />,
      link: "https://hilbertshotel.itch.io/love-at-first-fight",
      img: lovePic,
      palette: "from-fuchsia-500 to-rose-500",
    },
    {
      title: "3D Surgery Simulator",
      desc: "High-fidelity Unity & C# simulator for venipuncture training with real-time scoring and analytics dashboard.",
      icon: <LayoutGrid className="w-6 h-6" />,
      link: "https://github.com/shreya-shenoy/CaudalBlock",
      img: caudalPic,
      palette: "from-sky-500 to-teal-500",
    },
    {
      title: "GatorGuide Schedule Planner",
      desc: "Full-stack FastAPI + React web app that helps UF students create four-year course plans with built-in search functionality.",
      icon: <Server className="w-6 h-6" />,
      link: "https://github.com/CaseZumbrum/GatorGuide",
      demo: "https://gator-guide.com/#/",
      img: gatorPic,
      palette: "from-lime-500 to-emerald-500",
    },
    {
      title: "Turtle All The Way Up Game",
      desc:
        "A vertical platformer where your deaths spawn platforms for your future turtles to use on their way up!",
      icon: <Gamepad className="w-6 h-6" />,
      demo: "https://septicaled.itch.io/turtle-all-the-way-up",
      img: turtlePic,
      palette: "from-amber-400 to-emerald-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading title="Projects" tagline="Selected Work" />
      {/* 1 col (mobile) → 2 cols (sm/md) → 4 cols (lg+) */}
      <div className="grid mt-14 gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="rounded-2xl overflow-hidden shadow-xl group bg-gray-900/40"
          >
            {/* ── image banner (optional) ── */}
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="h-28 md:h-32 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            )}

            {/* ── gradient border wrapper ── */}
            <div className={`p-[1px] bg-gradient-to-br ${p.palette}`}>
              {/* ── inner card ── */}
              <div className="h-full flex flex-col justify-between rounded-[inherit] bg-gray-950/70 backdrop-blur-md p-5">
                {/* title & icon */}
                <div className="flex items-center gap-3">
                  {p.icon}
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                </div>

                {/* description */}
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-gray-300 flex-1">
                  {p.desc}
                </p>

                {/* CTAs */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-300 text-xs md:text-sm font-medium hover:underline"
                    >
                      View&nbsp;on&nbsp;GitHub <Link2 className="w-4 h-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-300 text-xs md:text-sm font-medium hover:underline"
                    >
                      Visit&nbsp;Site <Link2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/*────────────────────────── SKILLS ────────────────────────*/
function Skills() {
  const skills = [
    { label: "JavaScript", icon: <Code2 /> },
    { label: "React", icon: <LayoutGrid /> },
    { label: "C++", icon: <Code2 /> },
    { label: "C#", icon: <Code2 /> },
    { label: "Python", icon: <Code2 /> },
    { label: "Unreal Engine", icon: <Server /> },
    { label: "Unity", icon: <Server /> },
    { label: "PostgreSQL", icon: <Server /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-gray-900/80 to-gray-800/90 border-y border-white/10">
      <SectionHeading title="Skills" tagline="Tools & Languages" />
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <li key={i} className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 grid place-content-center rounded-2xl bg-gray-700/60">
              {s.icon}
            </div>
            <span className="text-sm font-medium tracking-wide">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/*────────────────────────── EXPERIENCE ───────────────────*/
function Experience() {
  const timeline = [
    {
      year: "Summer 2024",
      role: "Software Engineering Intern – Bloomberg LP",
      desc: "Created website for 100+ managers that allowed for more efficient access to client data. Implemented user authentication and test suite to increase coverage by 60%.",
    },
    {
      year: "Summer 2024",
      role: "Product Manager for Develop For Good",
      desc: "Worked with non-profit Change Arts to make website improvements and improve stakeholder satisfaction by 35%.",
    },
    {
      year: "2023-Present",
      role: "Dream Team Engineering Team Led for Caudal Block Team",
      desc: "Worked with Shands hospital to create a 3-D Surgery Simulator for the Caudal Block Procedure, decreasing live errors by 47%",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading title="Experience" tagline="Where I’ve Been" />
      <div className="relative mt-12 pl-8 border-l border-white/20">
        {timeline.map((item, i) => (
          <div key={i} className="relative mb-14">
            <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-emerald-400" />
            <h4 className="text-lg font-semibold">{item.role}</h4>
            <span className="text-sm text-emerald-300">{item.year}</span>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/*────────────────────────── CONTACT ──────────────────────*/
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-purple-800/50 to-indigo-800/50">
      <SectionHeading title="Get in Touch" tagline="Let’s Build Something" />
      <form
        action="https://formspree.io/f/maypajpq"
        method="POST"
        className="mt-12 max-w-lg mx-auto grid gap-6"
      >
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-xl bg-gray-950/60 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full rounded-xl bg-gray-950/60 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message…"
          className="w-full rounded-xl bg-gray-950/60 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
        />
        <button
          type="submit"
          className="py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

/*────────────────────────── FOOTER ──────────────────────*/
function SiteFooter() {
  return (
    <footer className="py-10 text-center text-xs text-gray-400 bg-gray-950/60 border-t border-white/10">
      © {new Date().getFullYear()} Louis Li — Built with React & Tailwind.
    </footer>
  );
}

/*────────────────────────── UTIL ────────────────────────*/
function SectionHeading({ title, tagline }) {
  return (
    <div className="text-center">
      <span className="text-emerald-400 tracking-widest uppercase text-xs">{tagline}</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}
