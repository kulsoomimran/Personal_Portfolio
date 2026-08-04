"use client";
import React from "react";
import ProjectCard from "../components/card";
import ProjectLogo from "../components/ProjectLogo";
import { Terminal, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projects";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Projects = () => {
    const router = useRouter();
    
    // Divide projects into featured (large/medium) and secondary (standard/small)
    const featuredProjects = projectsData.filter(
        (project) => project.size === "large" || project.size === "medium"
    );
    const secondaryProjects = projectsData.filter(
        (project) => project.size !== "large" && project.size !== "medium"
    );

    return (
        <div id="projects" className="bg-portfolioBg min-h-screen text-portfolioBody py-20 px-6 lg:px-20">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title - Fade Down Reveal */}
                <div className="text-left mb-16" data-aos="fade-down" data-aos-duration="800">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-portfolioHeading mb-3">
                        My Projects
                    </h2>
                    <div className="w-16 h-1 bg-portfolioMuted/30 rounded-full"></div>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-stretch">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            data-aos-duration="600"
                            className={`h-full flex ${
                                project.size === "large" 
                                    ? "lg:col-span-6 md:col-span-2 col-span-1" 
                                    : "lg:col-span-3 md:col-span-1 col-span-1"
                            }`}
                        >
                            <ProjectCard
                                slug={project.slug}
                                imageSrc={project.imageSrc}
                                logoSrc={project.logoSrc}
                                title={project.title}
                                description={project.description}
                                deploymentLink={project.deploymentLink}
                                techStack={project.techStack}
                                size={project.size}
                                badgeText={project.badgeText}
                                additionalLinks={project.additionalLinks}
                            />
                        </div>
                    ))}
                </div>

                {/* Secondary Projects Row List */}
                <div className="mt-20" data-aos="fade-up" data-aos-duration="800">
                    <h3 className="text-xs font-bold text-portfolioMuted uppercase tracking-widest mb-6 pb-3 border-b border-portfolioMuted/15">
                        Additional Projects
                    </h3>
                    
                    <div className="space-y-4">
                        {secondaryProjects.map((project, index) => (
                            <div 
                                key={index}
                                onClick={(e) => {
                                    if (!project.hasDetailPage) return;
                                    if ((e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) {
                                        return;
                                    }
                                    router.push(`/projects/${project.slug}`);
                                }}
                                className={`group relative bg-portfolioCard border border-portfolioMuted/15 rounded-xl p-5 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm ${
                                    project.hasDetailPage 
                                        ? "hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1 cursor-pointer hover:bg-[#232730]" 
                                        : "hover:border-portfolioMuted/30"
                                }`}
                            >
                                {/* Left: Image + Title/Tags */}
                                <div className="flex items-center gap-5 flex-1 min-w-0">
                                    <ProjectLogo 
                                        src={project.logoSrc} 
                                        title={project.title}
                                        className="w-16 h-16 sm:w-20 sm:h-16 rounded-lg text-xs"
                                        sizes="80px"
                                    />
                                    
                                    <div className="min-w-0 flex-1 space-y-1">
                                        <div className="flex items-center gap-2.5">
                                            <h4 className="text-lg font-bold text-portfolioHeading truncate group-hover:text-portfolioAccent transition-colors duration-300">
                                                {project.title}
                                            </h4>
                                            {!project.hasDetailPage && (
                                                <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-portfolioMuted/20 text-portfolioMuted select-none border border-portfolioMuted/10">
                                                    CLI Only
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-portfolioBody line-clamp-1">
                                            {project.description}
                                        </p>
                                        
                                        {/* Tech Stack tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.techStack.map((tech, idx) => (
                                                <span key={idx} className="text-[10px] font-bold px-2.5 py-0.5 bg-portfolioBg border border-portfolioMuted/15 rounded-md text-portfolioMuted select-none">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: View Details / CLI label */}
                                <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0 self-start lg:self-auto ml-0 sm:ml-0 lg:ml-0">
                                    {project.hasDetailPage ? (
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="flex items-center gap-1.5 text-xs font-semibold text-portfolioMuted hover:text-portfolioAccent border border-portfolioMuted/15 hover:border-portfolioAccent/30 bg-portfolioBg/40 px-3 py-1.5 rounded-lg transition-all duration-300"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5" />
                                            <span>View Details</span>
                                        </Link>
                                    ) : (
                                        <span className="text-xs font-semibold text-portfolioMuted/50 flex items-center gap-1 px-3 py-1.5 select-none">
                                            <Terminal className="w-3.5 h-3.5" />
                                            <span>Terminal Tool</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
