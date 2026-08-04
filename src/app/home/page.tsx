"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import {
  Download,
  Linkedin,
  Mail,
  Github,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";

const stats = [
  { label: "Projects Shipped", value: "9+" },
  { label: "Technologies", value: "15+" },
  { label: "Experience", value: "6 mo" },
];

const focusAreas = [
  {
    icon: <Layers className="w-5 h-5" />,
    label: "Frontend Architecture",
    desc: "Next.js · React · TypeScript · Tailwind CSS",
    accent: "from-portfolioAccent/10 to-transparent",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Backend & APIs",
    desc: "FastAPI · Node.js · PostgreSQL · REST",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "AI & Python Tooling",
    desc: "RAG Pipelines · Qdrant · Cohere · Streamlit",
    accent: "from-purple-500/10 to-transparent",
  },
];

const Home = () => {
  return (
    <div
      id="home"
      className="relative bg-portfolioBg text-portfolioBody min-h-screen flex items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1e25_1px,transparent_1px),linear-gradient(to_bottom,#1b1e25_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Radial coral glow — top-left anchor */}
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-portfolioAccent/5 rounded-full blur-[100px] pointer-events-none" />
      {/* Faint glow — bottom-right */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10 max-w-6xl">

        {/* ─── LEFT — Identity & CTA ─── */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="w-full lg:w-[54%] space-y-8"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-portfolioAccent/10 border border-portfolioAccent/25 rounded-full text-xs font-bold text-portfolioAccent uppercase tracking-widest shadow-[0_0_12px_rgba(255,92,77,0.15)]">
            <span className="w-2 h-2 rounded-full bg-portfolioAccent animate-pulse shadow-[0_0_6px_rgba(255,92,77,0.6)]" />
            <span>Open to Opportunities</span>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-portfolioMuted text-lg font-light tracking-wide">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-portfolioHeading leading-[1.05] tracking-tight">
              Kulsoom
              <br />
              <span className="text-portfolioAccent relative inline-block">
                Imran
                {/* Underline decoration */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-portfolioAccent/30 rounded-full" />
              </span>
            </h1>

            {/* Typewriter line */}
            <div className="flex items-center gap-2.5 pt-2 min-h-[32px]">
              <div className="text-lg sm:text-xl font-semibold text-portfolioMuted flex items-center gap-2">
                <span>I build</span>
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Architectures",
                      "Full-Stack Applications",
                      "Python & AI Tooling",
                      "RAG Chatbot Systems",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 55,
                    deleteSpeed: 35,
                    wrapperClassName: "text-portfolioHeading font-bold",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-base sm:text-lg text-portfolioBody leading-relaxed max-w-lg border-l-2 border-portfolioAccent/30 pl-4"
          >
            Software Engineering student specializing in responsive, high-performance
            web apps with{" "}
            <strong className="text-portfolioHeading font-semibold">Next.js</strong>,{" "}
            <strong className="text-portfolioHeading font-semibold">TypeScript</strong>,
            and{" "}
            <strong className="text-portfolioHeading font-semibold">FastAPI</strong>.
            Passionate about AI integrations and clean, purposeful UI/UX.
          </p>

          {/* CTAs row */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="/my resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2.5 px-7 py-3.5 bg-portfolioAccent rounded-xl font-bold text-portfolioBg transition-all duration-300 hover:scale-[1.04] hover:bg-[#ff7063] hover:shadow-xl hover:shadow-portfolioAccent/25 overflow-hidden"
            >
              {/* shine sweep on hover */}
              <span className="absolute inset-0 bg-white/10 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[120%] transition-transform duration-500 ease-out pointer-events-none" />
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:kulsoomimran1901@gmail.com"
              className="group flex items-center gap-2.5 px-6 py-3.5 bg-portfolioCard border border-portfolioMuted/20 hover:border-portfolioAccent/40 hover:bg-[#1f2229] rounded-xl font-semibold text-portfolioHeading transition-all duration-300 hover:scale-[1.04] hover:shadow-md"
            >
              <Mail className="w-4 h-4 text-portfolioMuted group-hover:text-portfolioAccent transition-colors" />
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-portfolioMuted group-hover:text-portfolioAccent group-hover:translate-x-1 transition-all" />
            </a>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-portfolioMuted/20" />

            {/* Social icons */}
            <div className="flex gap-2.5">
              <a
                href="https://www.linkedin.com/in/kulsoom-imran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 bg-portfolioCard border border-portfolioMuted/20 rounded-xl text-portfolioBody hover:text-portfolioAccent hover:border-portfolioAccent/40 hover:bg-[#1f2229] hover:shadow-[0_0_12px_rgba(255,92,77,0.15)] hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/kulsoomimran"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 bg-portfolioCard border border-portfolioMuted/20 rounded-xl text-portfolioBody hover:text-portfolioAccent hover:border-portfolioAccent/40 hover:bg-[#1f2229] hover:shadow-[0_0_12px_rgba(255,92,77,0.15)] hover:scale-110 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── RIGHT — Stats + Focus Panel ─── */}
        <div
          data-aos="fade-left"
          data-aos-duration="900"
          className="w-full lg:w-[46%] flex flex-col gap-4"
        >
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group bg-portfolioCard border border-portfolioMuted/15 rounded-2xl p-5 text-center hover:border-portfolioAccent/40 hover:shadow-[0_0_20px_rgba(255,92,77,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-portfolioAccent group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-[10px] font-bold text-portfolioMuted mt-1.5 uppercase tracking-widest leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Focus area cards */}
          <div className="flex flex-col gap-3 mt-1">
            {focusAreas.map((item, i) => (
              <div
                key={i}
                className={`group relative flex items-center gap-4 bg-portfolioCard border border-portfolioMuted/15 rounded-2xl px-5 py-4 overflow-hidden hover:border-portfolioAccent/40 hover:shadow-[0_0_18px_rgba(255,92,77,0.10)] hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
              >
                {/* Gradient accent wash */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 p-2.5 bg-portfolioBg border border-portfolioMuted/20 rounded-xl text-portfolioMuted group-hover:text-portfolioAccent group-hover:border-portfolioAccent/30 group-hover:shadow-[0_0_10px_rgba(255,92,77,0.15)] transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="relative z-10 min-w-0">
                  <div className="text-sm font-bold text-portfolioHeading group-hover:text-portfolioHeading">
                    {item.label}
                  </div>
                  <div className="text-xs text-portfolioMuted mt-0.5 truncate">{item.desc}</div>
                </div>

                {/* Right arrow indicator */}
                {/* <ArrowRight className="relative z-10 w-3.5 h-3.5 text-portfolioMuted/30 group-hover:text-portfolioAccent/60 ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-all duration-300" /> */}
              </div>
            ))}
          </div>

          {/* Bottom tagline strip */}
          <div className="bg-portfolioCard border border-portfolioMuted/10 rounded-2xl px-5 py-3.5 flex items-center justify-between gap-3 mt-1">
            <span className="text-xs text-portfolioMuted font-medium leading-snug max-w-[200px]">
              Building with precision. Shipping with purpose.
            </span>
            <div className="flex gap-1.5 flex-shrink-0">
              {["Next.js", "FastAPI", "AI"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-2.5 py-1 bg-portfolioBg border border-portfolioMuted/15 rounded-lg text-portfolioMuted tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
