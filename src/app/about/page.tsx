"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/Profile.png";

const About = () => {
  return (
    <div className="relative bg-black text-[#E5E5E5] py-24 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Image */}
        <div className="w-full flex justify-center lg:justify-start lg:w-[450px]">
          <div
            className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-[6px] border-[#00FFFF] shadow-[0_0_35px_#00ffff99] hover:scale-105 transition-transform duration-500 ease-in-out"
            data-aos="zoom-out-right"
          >
            <Image
              src={aboutImage}
              alt="About Me"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Text */}
        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
            About Me
          </h2>
          <p className="text-[#CCCCCC] text-lg leading-relaxed">
            I&apos;m a dedicated <span className="text-[#00FFFF] font-semibold">Full Stack Web Developer</span> with hands-on experience in building modern, responsive, and scalable applications using <span className="text-[#FF00FF] font-semibold">Next.js</span>, <span className="text-[#FF00FF] font-semibold">TypeScript</span>, and <span className="text-[#FF00FF] font-semibold">Tailwind CSS</span>. My portfolio includes dynamic frontend interfaces, CLI tools, and real-world projects integrating backend functionality and APIs.
          </p>
          <p className="text-[#CCCCCC] text-lg leading-relaxed">
            I&apos;m also passionate about <span className="text-[#FFFF00] font-semibold">Artificial Intelligence</span> and <span className="text-[#FFFF00] font-semibold">Cloud Computing</span>. Currently, I’m exploring GenAI engineering, data encryption, and inventory management solutions, blending creativity with advanced technologies to deliver smart, future-focused solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
