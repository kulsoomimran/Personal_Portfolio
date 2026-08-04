"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Terminal, Target, Cpu, CheckCircle, X } from "lucide-react";
import { ProjectData } from "../../data/projects";
import ProjectLogo from "../../components/ProjectLogo";

interface ProjectDetailClientProps {
  project: ProjectData;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-portfolioBg min-h-screen text-portfolioBody font-sans py-24 px-6 lg:px-20 selection:bg-portfolioAccent selection:text-portfolioBg">
      <div className="container mx-auto max-w-5xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-portfolioMuted hover:text-portfolioAccent transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* 1. Header Section */}
        <header className="bg-portfolioCard border border-portfolioMuted/15 rounded-3xl p-8 sm:p-10 mb-12 shadow-xl relative overflow-hidden">
          {/* Subtle decoration accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolioAccent/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start sm:items-center gap-5">
              <ProjectLogo
                src={project.logoSrc}
                title={project.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-lg flex-shrink-0"
                sizes="80px"
              />
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-portfolioHeading leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-portfolioAccent/90 font-medium">
                  {project.oneLineSummary}
                </p>
              </div>
            </div>
            
            {/* Top Action Buttons */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-portfolioHeading border border-portfolioMuted/20 bg-portfolioBg/50 hover:bg-portfolioBg hover:border-portfolioAccent/50 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.deploymentLink && project.deploymentLink.trim() !== "" ? (
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-portfolioBg bg-portfolioAccent hover:bg-[#ff7063] px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-portfolioAccent/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="text-xs text-portfolioMuted bg-portfolioBg/50 border border-portfolioMuted/15 px-4 py-3 rounded-xl flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CLI Application Only</span>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 pt-6 border-t border-portfolioMuted/10">
            <h2 className="text-xs font-bold text-portfolioMuted uppercase tracking-wider mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-portfolioBg border border-portfolioMuted/15 text-portfolioHeading shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* 2. The Problem / Goal Section */}
        <section className="bg-portfolioCard border border-portfolioMuted/15 rounded-3xl p-8 sm:p-10 mb-12 shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-portfolioAccent/10 rounded-xl text-portfolioAccent flex-shrink-0 hidden sm:block">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-portfolioHeading mb-3">The Problem & Project Goal</h2>
              <p className="text-base sm:text-lg text-portfolioBody leading-relaxed">
                {project.problemGoal}
              </p>
              <p className="mt-4 text-sm text-portfolioMuted leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Key Features / Screenshots Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-portfolioHeading mb-8 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-portfolioAccent" />
            <span>Interactive Features Walkthrough</span>
          </h2>

          {/* Render grouped sub-projects if they exist */}
          {project.hasScreenshots && project.subProjects && project.subProjects.length > 0 ? (
            <div className="space-y-16">
              {project.subProjects.map((sub, subIdx) => (
                <div key={subIdx} className="space-y-8">
                  {/* Sub-Project Heading */}
                  <div className="border-b border-portfolioMuted/15 pb-3 pt-4">
                    <h3 className="text-2xl font-extrabold text-portfolioHeading flex items-center gap-2">
                      <span className="text-portfolioAccent text-sm font-mono">0{subIdx + 1}.</span>
                      <span>{sub.title}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-portfolioMuted mt-1 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>

                  {/* Sub-Project Features */}
                  <div className="space-y-8">
                    {sub.features.map((feature, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div
                          key={index}
                          className={`flex flex-col lg:flex-row items-stretch gap-8 bg-portfolioCard border border-portfolioMuted/15 rounded-3xl p-6 sm:p-8 hover:border-portfolioMuted/25 transition-all duration-300 shadow-sm ${
                            isEven ? "" : "lg:flex-row-reverse"
                          }`}
                        >
                          {/* Feature Image Wrapper */}
                          <div 
                            onClick={() => setModalImage(feature.imagePath)}
                            className="w-full lg:w-[55%] relative min-h-[220px] sm:min-h-[300px] rounded-2xl overflow-hidden border border-portfolioMuted/20 bg-portfolioBg/30 flex-shrink-0 cursor-zoom-in group/image"
                          >
                            <Image
                              src={feature.imagePath}
                              alt={feature.caption}
                              fill
                              className="object-cover object-top group-hover/image:scale-[1.03] transition-transform duration-500"
                              sizes="(max-width: 1024px) 100vw, 500px"
                            />
                            {/* Zoom Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10 uppercase tracking-wider">
                                Click to Expand
                              </span>
                            </div>
                          </div>
                          
                          {/* Feature Details */}
                          <div className="flex flex-col justify-center flex-1 space-y-4">
                            <div className="space-y-2">
                              <span className="text-xs font-bold text-portfolioAccent tracking-widest uppercase">
                                {sub.title} — Feature {index + 1}
                              </span>
                              <h4 className="text-lg sm:text-xl font-bold text-portfolioHeading">
                                {feature.caption.split(". ")[0]}
                              </h4>
                            </div>
                            <p className="text-sm text-portfolioBody leading-relaxed">
                              {feature.caption}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : project.hasScreenshots && project.features.length > 0 ? (
            /* Fallback to flat list of features */
            <div className="space-y-12">
              {project.features.map((feature, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-stretch gap-8 bg-portfolioCard border border-portfolioMuted/15 rounded-3xl p-6 sm:p-8 hover:border-portfolioMuted/25 transition-all duration-300 shadow-sm ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Feature Image Wrapper */}
                    <div 
                      onClick={() => setModalImage(feature.imagePath)}
                      className="w-full lg:w-[55%] relative min-h-[220px] sm:min-h-[300px] rounded-2xl overflow-hidden border border-portfolioMuted/20 bg-portfolioBg/30 flex-shrink-0 cursor-zoom-in group/image"
                    >
                      <Image
                        src={feature.imagePath}
                        alt={feature.caption}
                        fill
                        className="object-cover object-top group-hover/image:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                      {/* Zoom Hover Overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/10 uppercase tracking-wider">
                          Click to Expand
                        </span>
                      </div>
                    </div>
                    
                    {/* Feature Details */}
                    <div className="flex flex-col justify-center flex-1 space-y-4">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-portfolioAccent tracking-widest uppercase">
                          Feature {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-portfolioHeading">
                          {feature.caption.split(". ")[0]}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-portfolioBody leading-relaxed">
                        {feature.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </section>

        {/* 4. Technical Highlight Section */}
        <section className="bg-portfolioCard border-l-4 border-l-portfolioAccent border-t border-r border-b border-portfolioMuted/15 rounded-2xl p-8 mb-16 shadow-md relative">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-portfolioBg border border-portfolioMuted/20 rounded-xl text-portfolioAccent flex-shrink-0 hidden sm:block">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-portfolioHeading mb-2">Technical Achievement Highlight</h2>
              <p className="text-portfolioBody leading-relaxed">
                {project.technicalHighlight}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Footer CTA Section */}
        <footer className="text-center border-t border-portfolioMuted/10 pt-16 pb-12 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-portfolioHeading">Interested in this project?</h3>
            <p className="text-sm text-portfolioMuted">Explore the repository codebase or run the production build live.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold text-portfolioHeading border border-portfolioMuted/20 bg-portfolioCard hover:bg-[#232730] px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.deploymentLink && project.deploymentLink.trim() !== "" && (
              <a
                href={project.deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-bold text-portfolioBg bg-portfolioAccent hover:bg-[#ff7063] px-7 py-3 rounded-xl transition-all duration-300 shadow-md shadow-portfolioAccent/10"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Demo</span>
              </a>
            )}
          </div>
          
          <div className="pt-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-portfolioAccent hover:underline transition-all"
            >
              <span>Back to Projects Overview</span>
            </Link>
          </div>
        </footer>

      </div>

      {/* Dynamic Image Modal Overlay */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 cursor-zoom-out"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            {/* Modal Image container */}
            <div className="relative border border-portfolioMuted/20 bg-portfolioBg rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={modalImage}
                alt="Expanded screenshot view"
                className="max-h-[80vh] w-auto object-contain"
              />
              
              {/* Cross button at top right corner of the image card */}
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/75 hover:bg-portfolioAccent text-white hover:text-portfolioBg rounded-full transition-all border border-white/10 shadow-lg"
                aria-label="Close image modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
