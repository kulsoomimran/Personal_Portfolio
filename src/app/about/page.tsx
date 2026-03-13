"use client";
import React from "react";
import { Code2, Sparkles, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      text: "Frontend Developer specializing in Next.js",
      color: "from-[#00FFFF] to-[#0099FF]",
      borderColor: "border-[#00FFFF]"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "Exploring Generative AI and Cloud Engineering",
      color: "from-[#FF00FF] to-[#FF0099]",
      borderColor: "border-[#FF00FF]"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      text: "Building modern web and Python applications",
      color: "from-[#FFFF00] to-[#FFD700]",
      borderColor: "border-[#FFFF00]"
    }
  ];

  return (
    <div id="about" className="relative bg-black text-[#E5E5E5] py-24 px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-4xl lg:text-5xl font-extrabold text-white mb-3"
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
          {/* Highlights Section */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div
              className="space-y-5 h-full flex flex-col justify-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 p-5 border-l-4 ${highlight.borderColor} rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <div className={`p-3 bg-gradient-to-br ${highlight.color} bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className="text-[#E5E5E5] text-base font-medium leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Text Section */}
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
            className="flex-1"
          >
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col justify-center">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 via-[#FF00FF]/5 to-[#FFFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Content */}
              <div className="relative z-10 space-y-5">
                <p className="text-[#CCCCCC] text-lg leading-relaxed">
                  I'm a <span className="text-[#00FFFF] font-semibold">Front-End Developer</span> pursuing a BS in Software Engineering at the <span className="text-[#FF00FF] font-semibold">University of Karachi (UBIT '29)</span>, building a strong foundation in software development, modern web technologies, and systems design.
                </p>
                
                <p className="text-[#CCCCCC] text-lg leading-relaxed">
                  I create clean, responsive, and scalable applications using <span className="text-[#FF00FF] font-semibold">Next.js</span>, <span className="text-[#FF00FF] font-semibold">TypeScript</span>, <span className="text-[#FF00FF] font-semibold">Angular</span>, and <span className="text-[#FF00FF] font-semibold">Tailwind CSS</span>, ranging from dynamic frontend interfaces to CLI tools and full-stack projects integrating APIs and backend functionality.
                </p>
                
                <p className="text-[#CCCCCC] text-lg leading-relaxed">
                  Beyond web development, I have a strong background in <span className="text-[#FFFF00] font-semibold">Python</span> and a growing passion for <span className="text-[#FFFF00] font-semibold">Cloud Computing</span> and <span className="text-[#FFFF00] font-semibold">Generative AI</span>, exploring intelligent systems, data encryption, and inventory management solutions to deliver smart, future-focused applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
