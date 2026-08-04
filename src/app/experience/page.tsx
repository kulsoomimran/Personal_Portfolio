"use client";
import React from "react";
import { Briefcase, Calendar, Check } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ThreatCure",
      duration: "June 2025 \u2013 December 2025",
      description: [
        "Contributed to the development of ShieldOps, an enterprise cybersecurity threat monitoring platform, bybuilding scalable frontend features using Angular, TypeScript, and Tailwind CSS.",
        "Developed interactive cybersecurity dashboards using D3.js, implementing responsive pie charts and bar charts that visualized real-time threat intelligence and security metrics from dynamic API data.",
        "Built the Top Offenses dashboard module by processing and presenting security events based on severity levels, enabling analysts to identify and prioritize high-risk threats efficiently.",
        "Designed and implemented a fully customizable event table supporting dynamic column reordering, resizing, visibility toggling, addition, removal, and replacement, providing users with a personalized data analysis experience.",
        "Integrated RESTful APIs to fetch real-time cybersecurity events, offense summaries, histogram data, and dashboard analytics from backend services.",
        "Processed and transformed API responses into interactive D3.js visualizations, including bar charts, pie charts and severity-based analytics for efficient threat monitoring.",
        "Developed reusable Angular components and shared utilities to improve maintainability, reduce code duplication, and accelerate feature development across the application.",
        "Optimized frontend performance by refactoring components, minimizing unnecessary rendering, and improving responsiveness for data-intensive dashboards.",
        "Implemented an interactive animated particle background using tsParticles, enhancing the platform&apos;s visual appeal while maintaining smooth rendering performance.",
        "Participated in code reviews, debugging, and continuous frontend improvements while adhering to modern Angular best practices, accessibility standards, and responsive design principles."
      ],
      techStack: ["Angular", "Tailwind CSS", "APIs", "UI/UX"]
    }
  ];

  return (
    <div id="experience" className="bg-portfolioBg min-h-screen text-portfolioBody py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        {/* Section Title - Slide Up reveal */}
        <div className="text-left mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-portfolioHeading mb-3">
            Experience
          </h2>
          <div className="w-16 h-1 bg-portfolioMuted/30 rounded-full"></div>
        </div>

        {/* Distinct Feature Block instead of generic card */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative bg-portfolioCard border border-portfolioMuted/15 rounded-2xl p-8 md:p-12 shadow-sm hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-portfolioMuted/10 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-portfolioBg border border-portfolioMuted/15 rounded-xl">
                <Briefcase className="w-6 h-6 text-portfolioHeading" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-portfolioHeading">
                  {experiences[0].role}
                </h3>
                <p className="text-lg text-portfolioBody font-semibold">{experiences[0].company}</p>
              </div>
            </div>

            {/* Duration Tag */}
            <div className="md:ml-auto flex items-center gap-2 px-4 py-2 bg-portfolioBg border border-portfolioMuted/15 rounded-lg text-portfolioMuted text-sm font-semibold w-fit">
              <Calendar className="w-4 h-4" />
              <span>{experiences[0].duration}</span>
            </div>
          </div>

          {/* Achievements as a Checklist */}
          <ul className="space-y-4 mb-10">
            {experiences[0].description.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4 text-portfolioBody text-base leading-relaxed">
                <div className="p-1 bg-portfolioBg border border-portfolioMuted/15 rounded-lg mt-0.5 flex-shrink-0">
                  <Check className="w-4 h-4 text-portfolioHeading" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {TechStackPills(experiences[0].techStack)}
        </div>
      </div>
    </div>
  );
};

function TechStackPills(techStack: string[]) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-portfolioMuted/10">
      <span className="text-xs font-bold text-portfolioMuted uppercase tracking-widest mr-2">Core Tech Stack:</span>
      {techStack.map((tech, idx) => (
        <span
          key={idx}
          className="px-4 py-1.5 text-xs font-bold bg-portfolioBg border border-portfolioMuted/15 text-portfolioBody rounded-lg hover:border-portfolioMuted/30 hover:text-portfolioHeading transition-all duration-300 select-none"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default Experience;
