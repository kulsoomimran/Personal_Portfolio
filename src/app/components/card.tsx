import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  repoLink?: string;
  command?: string;
  deploymentLink?: string;
  imageSrc?: string;
  techStack?: string[];
  colorTheme?: "indigo" | "purple";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "",
  description = "",
  repoLink = "",
  deploymentLink = "",
  imageSrc = "",
  techStack = [],
  colorTheme = "indigo",
}) => {
  const gradientColor = colorTheme === "indigo" 
    ? "from-indigo-500 to-indigo-600" 
    : "from-purple-500 to-purple-600";
  const hoverBorderColor = colorTheme === "indigo" 
    ? "group-hover:border-indigo-500/50" 
    : "group-hover:border-purple-500/50";
  const linkHoverColor = colorTheme === "indigo"
    ? "hover:text-indigo-400"
    : "hover:text-purple-400";

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 overflow-hidden hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

      {/* Image */}
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00FFFF] group-hover:to-[#FF00FF] transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300 group-hover:border-${colorTheme}-500/50 transition-colors duration-300`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-700">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium text-gray-300 ${linkHoverColor} transition-colors duration-300`}
            >
              <Github className="w-4 h-4" />
              Repository
            </a>
          )}
          {deploymentLink && (
            <a
              href={deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium text-gray-300 ${linkHoverColor} transition-colors duration-300`}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
