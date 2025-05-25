import React from "react";

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
  const bgColor = colorTheme === "indigo" ? "bg-indigo-100" : "bg-purple-100";
  const borderColor = colorTheme === "indigo" ? "border-indigo-300" : "border-purple-300";
  const titleColor = colorTheme === "indigo" ? "text-indigo-900" : "text-purple-900";
  const repoLinkColor = colorTheme === "indigo" ? "text-indigo-700" : "text-purple-700";
  const deploymentLinkColor = colorTheme === "indigo" ? "text-indigo-600" : "text-purple-600";
  const techBgColor = colorTheme === "indigo" ? "bg-indigo-200" : "bg-purple-200";
  const techTextColor = colorTheme === "indigo" ? "text-indigo-800" : "text-purple-800";

  return (
    <div
      className={`flex flex-col h-full p-5 border ${borderColor} rounded-2xl shadow-lg ${bgColor} hover:shadow-xl transition-all duration-300`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className={`text-xl font-bold mb-2 ${titleColor}`}>{title}</h3>

      <p className="text-gray-700 text-sm flex-1 overflow-hidden line-clamp-3 mb-4">
        {description}
      </p>

      <div className="mt-auto">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block font-semibold ${repoLinkColor} hover:underline`}
          >
            View Repository
          </a>
        )}
        {deploymentLink && (
          <a
            href={deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block mt-1 font-semibold ${deploymentLinkColor} hover:underline`}
          >
            View Live
          </a>
        )}
      </div>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${techBgColor} ${techTextColor}`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
