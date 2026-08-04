"use client";
import React from "react";
import { Code2, Sparkles, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-4 h-4 text-portfolioHeading" />,
      text: "Frontend Developer specializing in Next.js",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-portfolioHeading" />,
      text: "Exploring Generative AI and Cloud Engineering",
    },
    {
      icon: <Cloud className="w-4 h-4 text-portfolioHeading" />,
      text: "Building modern web and Python applications",
    }
  ];

  return (
    <div id="about" className="relative bg-portfolioBg text-portfolioBody py-24 px-6 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title - Left Aligned */}
        <div className="text-left mb-12" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-portfolioHeading mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-portfolioMuted/30 rounded-full"></div>
        </div>

        {/* Layout Container */}
        <div 
          className="bg-portfolioCard border border-portfolioMuted/15 rounded-2xl p-8 md:p-12 shadow-sm hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1.5 transition-all duration-500"
          data-aos="zoom-in-up" 
          data-aos-duration="1000"
        >
          {/* Bold Intro Statement at the Top with Clean Solid Underline */}
          <h3 className="text-2xl sm:text-3xl font-bold text-portfolioHeading leading-snug mb-8 max-w-4xl">
            I am a <span className="text-portfolioHeading border-b-2 border-portfolioAccent pb-0.5">Software Engineering student</span> at the University of Karachi (UBIT&apos;29), specializing in front-end architecture, modern web apps, and AI integrations.
          </h3>

          {/* Sub Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed text-portfolioBody mb-8">
            <p>
              I design and deploy responsive, high-performance applications like <span className="text-portfolioHeading font-semibold">Attendify</span> (a workforce management SaaS) and full-stack systems using <span className="text-portfolioHeading font-semibold">Next.js</span>, <span className="text-portfolioHeading font-semibold">TypeScript</span>, and <span className="text-portfolioHeading font-semibold">FastAPI</span>.
            </p>
            <p>
              Beyond web development, I engineer secure data encryption utilities and vector-database-powered <span className="text-portfolioHeading font-semibold">RAG chatbots</span>, converting complex software concepts into fully deployed products.
            </p>
          </div>

          {/* Highlights as 3 Equal-Width Grid Pills BELOW Paragraphs */}
          <div className="pt-8 border-t border-portfolioMuted/15">
            <p className="text-xs font-bold text-portfolioMuted uppercase tracking-widest mb-4">Core Focus Areas</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 px-4 py-3 bg-portfolioBg border border-portfolioMuted/15 rounded-xl text-portfolioHeading text-sm font-medium hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1 transition-all duration-300 justify-start"
                >
                  <div className="p-1 bg-portfolioCard rounded-full flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <span className="leading-tight">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
