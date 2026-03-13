"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Download, Linkedin, Mail, Github } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div id="home" className="relative bg-black text-[#E5E5E5] min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      <div className="container mx-auto flex flex-col-reverse gap-12 lg:flex-row items-center justify-between relative z-10 max-w-7xl">
        {/* Left Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center lg:text-left flex-1 space-y-6"
        >
          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-gray-400">Hello, I&apos;m</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
                Kulsoom Imran
              </span>
            </h1>

            {/* Typewriter Effect */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Python & AI Developer",
                    "Generative AI Explorer",
                    "Full Stack Web Developer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Crafting elegant, scalable web solutions with modern technologies. 
            Passionate about building intuitive user experiences and exploring the frontiers of AI.
          </p>

          {/* CTA Button and Social Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2"
          >
            {/* Download CV Button */}
            <a
              href="/my resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-lg font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00FFFF]/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </a>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/kulsoom-imran/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-[#00FFFF] hover:border-[#00FFFF] hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/kulsoomimran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-[#FF00FF] hover:border-[#FF00FF] hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:kulsoomimran1901@gmail.com"
                className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-[#FFFF00] hover:border-[#FFFF00] hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex justify-center lg:justify-end flex-shrink-0"
        >
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFFF]/20 to-[#FF00FF]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px] rounded-2xl overflow-hidden border-2 border-gray-700 group-hover:border-gray-600 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              <Image
                src="/Profile.png"
                alt="Kulsoom Imran - Profile Picture"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 w-20 h-20 border-r-2 border-b-2 border-[#00FFFF]/30 rounded-br-2xl"></div>
            <div className="absolute -top-2 -left-2 w-20 h-20 border-l-2 border-t-2 border-[#FF00FF]/30 rounded-tl-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
