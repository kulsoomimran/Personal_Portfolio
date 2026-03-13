"use client";
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
{
  program: "BS Software Engineering",
  institution: "University of Karachi, Karachi, Pakistan",
  duration: "2026 \u2013 2029"
},
{
  program: "Intermediate \u2013 Pre Engineering (Grade: A)",
  institution: "St. Lawrance\u2019s Govt Girls Degree College, Karachi, Pakistan",
  duration: "2024"
},
{
  program: "Matriculation \u2013 Science (Grade: A+)",
  institution: "Sir Syed Children\u2019s Academy, Karachi, Pakistan",
  duration: "2022"
}
  ];

  return (
    <div id="education" className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF00FF] to-[#FFFF00]">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF00FF] via-[#FFFF00] to-[#00FFFF] mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/10 via-[#FFFF00]/10 to-[#00FFFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 bg-gradient-to-br from-[#FF00FF]/20 to-[#FFFF00]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-[#FF00FF]" />
                </div>

                {/* Program Name */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF00FF] group-hover:to-[#FFFF00] transition-all duration-300">
                  {edu.program}
                </h3>

                {/* Institution */}
                <p className="text-gray-300 text-lg mb-4 font-medium">{edu.institution}</p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <p className="text-sm">{edu.duration}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF00FF] via-[#FFFF00] to-[#00FFFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
