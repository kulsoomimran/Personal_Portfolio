"use client";
import React from "react";
import { Calendar, GraduationCap } from "lucide-react";

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
    <div id="education" className="bg-portfolioBg min-h-screen text-portfolioBody py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title - Slide Right reveal */}
        <div className="text-left mb-16" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-portfolioHeading mb-3">
            Education
          </h2>
          <div className="w-16 h-1 bg-portfolioMuted/30 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-portfolioMuted/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-2">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="relative group"
            >
              {/* Timeline Node dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2.5 w-5 h-5 rounded-full bg-portfolioBg border-2 border-portfolioMuted/30 group-hover:border-portfolioAccent group-hover:bg-portfolioAccent transition-all duration-300 z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-portfolioBg"></div>
              </div>

              {/* Card Container */}
              <div className="bg-portfolioCard border border-portfolioMuted/15 rounded-xl p-6 hover:border-portfolioMuted/30 hover:bg-[#232730] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-portfolioHeading">
                    <GraduationCap className="w-5 h-5 text-portfolioMuted group-hover:text-portfolioAccent transition-colors duration-300" />
                    <h3 className="text-xl font-bold">{edu.program}</h3>
                  </div>
                  <p className="text-portfolioBody font-medium pl-7">{edu.institution}</p>
                </div>
                
                {/* Duration Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-portfolioBg border border-portfolioMuted/15 rounded-lg text-portfolioMuted text-sm font-semibold h-fit w-fit self-start md:self-auto ml-7 md:ml-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
