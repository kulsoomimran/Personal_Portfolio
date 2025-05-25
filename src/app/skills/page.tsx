"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiStreamlit,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <SiPython className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-pink-500" /> },
  ];

  return (
    <div className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
      <div className="container mx-auto text-center max-w-6xl">
        {/* Heading stays same */}
        <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] mb-16">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              aria-label={skill.name}
              title={skill.name}
              className="group flex flex-col items-center justify-center space-y-5 p-8 bg-gray-900 bg-opacity-70 rounded-xl border border-gray-700 shadow-lg
                         transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {/* Skill Icon */}
              <div
                data-aos="fade-up-left"
                data-aos-delay={index * 100}
                data-aos-duration="2000"
                className="text-7xl group-hover:animate-bounce transition-transform duration-300"
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-xl font-semibold text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
