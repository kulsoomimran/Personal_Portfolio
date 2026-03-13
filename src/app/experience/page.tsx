"use client";
import React from "react";
import { Briefcase, Calendar, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
  role: "Frontend Developer",
  company: "ThreatCure",
  duration: "June 2025 \u2013 December 2025",
  description: [
    "Built and maintained responsive user interfaces using Angular and Tailwind CSS",
    "Collaborated with backend developers to integrate APIs and resolve UI issues",
    "Delivered a complete Attendance Management System with custom UI, backend APIs, and structured database",
    "Wrote clean, maintainable code with a focus on performance and accessibility"
  ],
  techStack: ["Angular", "Tailwind CSS", "APIs", "UI/UX"]
}
  ];

  return (
    <div id="experience" className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-10 hover:border-transparent hover:shadow-2xl hover:shadow-[#00FFFF]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 via-[#FF00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-gradient-to-br from-[#00FFFF]/20 to-[#FF00FF]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-6 h-6 text-[#00FFFF]" />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-gray-300 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-[#00FFFF]/50 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-[#00FFFF]" />
                    <p className="text-gray-300 font-medium">{exp.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-8 ml-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start group/item">
                      <span className="text-[#00FFFF] mr-3 mt-1 text-lg group-hover/item:scale-125 transition-transform duration-200">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Code2 className="w-5 h-5 text-[#FF00FF]" />
                    <span className="font-semibold">Tech Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-gray-800 to-gray-700 border border-[#00FFFF]/30 text-[#00FFFF] rounded-lg hover:border-[#00FFFF] hover:shadow-lg hover:shadow-[#00FFFF]/20 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
