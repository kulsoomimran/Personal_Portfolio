"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import profilePic from "../../../public/Profile.png"

import AOS from "aos";
import "aos/dist/aos.css";

import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-black text-[#E5E5E5] min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto flex flex-col-reverse gap-10 lg:flex-row items-center justify-between relative z-10 space-y-12 lg:space-y-0">
        {/* Left Section */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h1
              data-aos="fade-down"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]"
            >
              Hello, <br /> I&apos;m{" "}
              <span className="text-[#E5E5E5]">Kulsoom Imran</span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-xl sm:text-2xl md:text-4xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]"
            >
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Full Stack Web Developer",
                    "AI Enthusiast",
                    "Tech Innovator",
                    "Cloud & GenAI Explorer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 justify-center lg:justify-start"
            >
              <a
                href="../my resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-medium text-black bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-lg shadow-md hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/kulsoom-imran/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-medium border-2 border-[#00FFFF] text-[#00FFFF] rounded-lg hover:bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          data-aos="zoom-in"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 lg:w-[340px] lg:h-[400px] rounded-xl overflow-hidden border-[3px] border-[#333] shadow-xl hover:scale-105 transform transition-transform duration-700">
            <Image
              src={profilePic}
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
