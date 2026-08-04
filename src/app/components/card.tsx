"use client";
import React from "react";
import { Github, Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProjectLogo from "./ProjectLogo";

export interface ProjectLink {
  label: string;
  repoLink?: string;
  deploymentLink?: string;
}

export interface ProjectCardProps {
  slug: string;
  title?: string;
  description?: string;
  repoLink?: string;
  command?: string;
  deploymentLink?: string;
  imageSrc?: string;
  logoSrc?: string;
  techStack?: string[];
  colorTheme?: "indigo" | "purple";
  size?: "large" | "medium" | "standard" | "small";
  additionalLinks?: ProjectLink[];
  badgeText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title = "",
  description = "",
  repoLink = "",
  deploymentLink = "",
  imageSrc = "",
  logoSrc = "",
  techStack = [],
  size = "standard",
  additionalLinks = [],
  badgeText = "",
}) => {
  const router = useRouter();
  const isLarge = size === "large";
  const isMedium = size === "medium";
  const isSmall = size === "small";

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent routing twice if the user clicks the explicit "View Details" Link or Repository link
    if ((e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) {
      return;
    }
    router.push(`/projects/${slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative bg-portfolioCard rounded-2xl border border-portfolioMuted/20 overflow-hidden hover:border-portfolioAccent/50 hover:shadow-[0_0_15px_rgba(255,92,77,0.15)] hover:-translate-y-1.5 transition-all duration-500 h-full w-full flex flex-col shadow-sm cursor-pointer ${
        isLarge ? "lg:flex-row" : ""
      }`}
    >
      {/* Cover Image Section */}
      {!isSmall && imageSrc && (
        <div className={`relative overflow-hidden z-10 ${
          isLarge
            ? "w-full lg:w-[50%] h-64 sm:h-80 lg:h-auto min-h-[320px] flex-shrink-0"
            : isMedium
              ? "w-full h-56 sm:h-64 flex-shrink-0"
              : "w-full h-48 flex-shrink-0"
        }`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes={isLarge ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
            priority={isLarge}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolioBg via-transparent to-transparent opacity-70"></div>
          {badgeText && (
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-portfolioMuted/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-portfolioHeading tracking-wide uppercase">
              {badgeText}
            </div>
          )}
        </div>
      )}

      {/* Terminal Icon for Small Cards (CLI tools) */}
      {isSmall && (
        <div className="p-6 pb-2 flex items-center gap-3">
          <div className="p-2 bg-portfolioBg border border-portfolioMuted/20 rounded-lg">
            <Terminal className="w-5 h-5 text-portfolioHeading" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-portfolioMuted">CLI Terminal Tool</span>
        </div>
      )}

      {/* Content Section */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Header Row: Logo/Monogram + Title */}
          <div className="flex items-start gap-4 mb-4">
            <ProjectLogo
              src={logoSrc}
              title={title}
              className="w-12 h-12 rounded-xl text-xs flex-shrink-0"
              sizes="48px"
            />
            <div>
              <h3 className={`font-bold text-portfolioHeading transition-colors duration-300 group-hover:text-portfolioAccent ${
                isLarge ? "text-2xl sm:text-3xl" : isMedium ? "text-xl sm:text-2xl" : "text-xl"
              }`}>
                {title}
              </h3>
            </div>
          </div>

          <p className={`text-portfolioBody leading-relaxed mb-5 ${
            isLarge ? "text-base" : "text-sm"
          }`}>
            {description}
          </p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-portfolioBg border border-portfolioMuted/20 text-portfolioBody transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links Footer */}
        {additionalLinks && additionalLinks.length > 0 ? (
          <div className="mt-auto pt-5 border-t border-portfolioMuted/20 w-full">
            <p className="text-xs font-bold text-portfolioMuted uppercase tracking-widest mb-3">
              Included Utilities & Links:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {additionalLinks.map((link, idx) => (
                <div key={idx} className="flex flex-col p-3 bg-portfolioBg rounded-xl border border-portfolioMuted/20 hover:border-portfolioAccent/40 hover:bg-[#232730] transition-all duration-300">
                  <span className="text-xs font-bold text-portfolioHeading mb-2 truncate" title={link.label}>
                    {link.label}
                  </span>
                  <div className="flex gap-2">
                    {link.repoLink && (
                      <a
                        href={link.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-portfolioMuted hover:text-portfolioAccent flex items-center gap-1 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {link.repoLink && link.deploymentLink && <span className="text-portfolioMuted/30 text-xs">|</span>}
                    {link.deploymentLink && (
                      <a
                        href={link.deploymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-portfolioMuted hover:text-portfolioAccent flex items-center gap-1 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        Details
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 mt-auto pt-5 border-t border-portfolioMuted/20">
            {repoLink && repoLink.trim() !== "" && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-portfolioBody border border-portfolioMuted/20 bg-portfolioBg/40 px-4 py-2.5 rounded-xl transition-all duration-300 hover:text-portfolioAccent hover:border-portfolioAccent hover:bg-portfolioBg hover:scale-[1.02]"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}
            {/* View Details Redirect button */}
            <Link
              href={`/projects/${slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-portfolioBody border border-portfolioMuted/20 bg-portfolioBg/40 px-4 py-2.5 rounded-xl transition-all duration-300 hover:text-portfolioAccent hover:border-portfolioAccent hover:bg-portfolioBg hover:scale-[1.02]"
            >
              <ArrowRight className="w-4 h-4" />
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
