"use client";
import React from "react";
import { Layout, Server, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Layout className="w-4 h-4" />,
      title: "Frontend Architecture",
      text: "Next.js, React, TypeScript, Tailwind CSS",
    },
    {
      icon: <Server className="w-4 h-4" />,
      title: "Backend & APIs",
      text: "FastAPI, Node.js, REST APIs, PostgreSQL",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      title: "AI & Python Tooling",
      text: "RAG Pipelines, Streamlit, Vector DBs",
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
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-portfolioHeading leading-relaxed mb-8 max-w-4xl">
            I am a <span className="text-portfolioHeading border-b-2 border-portfolioAccent pb-0.5">Frontend Developer & Software Engineer</span> specializing in crafting modern, high-performance web applications and intelligent AI integrations.
          </h3>

          {/* Sub Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed text-portfolioBody mb-8">
            <p>
              I design and deploy responsive, user-centric applications like <span className="text-portfolioHeading font-semibold">Attendify</span> (a workforce management SaaS), utilizing modern frontend architectures like <span className="text-portfolioHeading font-semibold">Next.js</span>, <span className="text-portfolioHeading font-semibold">React</span>, and <span className="text-portfolioHeading font-semibold">TypeScript</span>.
            </p>
            <p>
              Beyond building interfaces, I develop robust backend APIs, engineer custom utility tools, and integrate vector-database-driven <span className="text-portfolioHeading font-semibold">RAG chatbots</span>—applying my academic training in Software Engineering at the University of Karachi to deliver practical, production-grade solutions.
            </p>
          </div>

          {/* Highlights as 3 Equal-Width Grid Pills BELOW Paragraphs */}
          <div className="pt-8 border-t border-portfolioMuted/15">
            <p className="text-xs font-bold text-portfolioMuted uppercase tracking-widest mb-6">Technical Focus</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex flex-col gap-2.5 p-5 bg-portfolioBg border border-portfolioMuted/15 rounded-xl text-portfolioHeading hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1 transition-all duration-300 justify-start"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-portfolioCard rounded-lg flex-shrink-0 text-portfolioAccent border border-portfolioMuted/10">
                      {highlight.icon}
                    </div>
                    <span className="font-bold text-sm text-portfolioHeading">{highlight.title}</span>
                  </div>
                  <span className="text-xs text-portfolioBody leading-normal pl-0.5">{highlight.text}</span>
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
