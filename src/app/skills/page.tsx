"use client";
import React from "react";
import {
  FaJsSquare,
  FaAngular,
  FaReact,
  FaNode,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiStreamlit,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiKubernetes,
  SiFastapi,
} from "react-icons/si";

const Skills = () => {
  const coreSkills = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Streamlit", icon: <SiStreamlit /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  const secondarySkills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "APIs", icon: <FaDatabase /> },
    { name: "Sanity CMS", icon: <FaDatabase /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
  ];

  return (
    <div id="skills" className="bg-portfolioBg min-h-screen text-portfolioBody py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title - Slide Left reveal */}
        <div className="text-left mb-16" data-aos="fade-left" data-aos-duration="800">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-portfolioHeading mb-3">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-portfolioMuted/30 rounded-full"></div>
        </div>

        {/* Tiered Layout Box */}
        <div className="space-y-12">
          {/* Tier 1: Core Languages & Frameworks (Larger tag size) */}
          <div 
            className="bg-portfolioCard border border-portfolioMuted/15 rounded-2xl p-8 md:p-10 shadow-sm hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="text-lg font-bold text-portfolioHeading uppercase tracking-widest mb-6 border-b border-portfolioMuted/10 pb-3">
              Languages & Frameworks
            </h3>
            
            <div className="flex flex-wrap gap-3.5">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-portfolioBg border border-portfolioMuted/15 rounded-xl text-portfolioBody hover:text-portfolioHeading hover:border-portfolioMuted/45 hover:bg-portfolioCard transition-all duration-300 hover:scale-[1.03] group cursor-default"
                >
                  <div className="text-2xl text-portfolioMuted group-hover:text-portfolioHeading transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Databases & Tools (Smaller secondary tag size) */}
          <div 
            className="bg-portfolioCard border border-portfolioMuted/15 rounded-2xl p-8 md:p-10 shadow-sm hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            <h3 className="text-lg font-bold text-portfolioHeading uppercase tracking-widest mb-6 border-b border-portfolioMuted/10 pb-3">
              Databases & Tools
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {secondarySkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-4 py-2 bg-portfolioBg border border-portfolioMuted/10 rounded-lg text-portfolioMuted hover:text-portfolioHeading hover:border-portfolioMuted/30 hover:bg-portfolioCard transition-all duration-300 group cursor-default"
                >
                  <div className="text-lg text-portfolioMuted group-hover:text-portfolioHeading transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
