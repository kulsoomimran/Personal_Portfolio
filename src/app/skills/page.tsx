"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
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
import { Code2, Layers, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-[#00FFFF] to-[#0099FF]",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Python", icon: <SiPython className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
      ]
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5" />,
      color: "from-[#FFFF00] to-[#FFD700]",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ]
    },
    {
      category: "Frameworks",
      icon: <Layers className="w-5 h-5" />,
      color: "from-[#FF00FF] to-[#FF0099]",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
        { name: "Angular", icon: <FaAngular className="text-red-600" /> },
        { name: "Node.js", icon: <FaNode className="text-green-500" /> },
        { name: "NestJS", icon: <SiNestjs className="text-rose-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-pink-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      color: "from-[#00FFFF] to-[#FF00FF]",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
        { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
        { name: "APIs", icon: <FaDatabase className="text-purple-400" /> },
        { name: "Sanity CMS", icon: <FaDatabase className="text-red-400" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      ]
    },
  ];

  return (
    <div id="skills" className="bg-black min-h-screen text-white py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {/* First Row: Languages and Databases side by side */}
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.slice(0, 2).map((category, catIndex) => (
              <div
                key={catIndex}
                data-aos="fade-up"
                data-aos-delay={catIndex * 150}
                data-aos-duration="800"
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#FFFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group/skill"
                      >
                        {/* Icon */}
                        <div className="text-4xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        
                        {/* Name */}
                        <p className="text-xs font-semibold text-gray-300 text-center group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Frameworks and Tools (full width each) */}
          {skillCategories.slice(2).map((category, catIndex) => (
            <div
              key={catIndex + 2}
              data-aos="fade-up"
              data-aos-delay={(catIndex + 2) * 150}
              data-aos-duration="800"
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#FFFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group/skill"
                    >
                      {/* Icon */}
                      <div className="text-4xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      
                      {/* Name */}
                      <p className="text-xs font-semibold text-gray-300 text-center group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
