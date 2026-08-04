"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProjectLogoProps {
  src?: string;
  title: string;
  className?: string;
  sizes?: string;
}

export const getMonogram = (title: string): string => {
  // Remove special characters, split by spaces or dashes
  const cleanTitle = title.replace(/[—\-_]/g, " ").trim();
  const words = cleanTitle.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const ProjectLogo: React.FC<ProjectLogoProps> = ({
  src,
  title,
  className = "w-28 h-18",
  sizes = "112px"
}) => {
  const [hasError, setHasError] = useState(false);

  // If there is no src or it errored out, render a clean fallback monogram
  if (!src || hasError) {
    const monogram = getMonogram(title);
    return (
      <div
        className={`${className} bg-portfolioBg border border-portfolioAccent/30 rounded-lg flex items-center justify-center flex-shrink-0 select-none shadow-inner`}
      >
        <span className="text-portfolioAccent font-extrabold text-sm tracking-wider">
          {monogram}
        </span>
      </div>
    );
  }

  return (
    <div className={`${className} relative rounded-lg overflow-hidden border border-portfolioMuted/20 flex-shrink-0 bg-portfolioBg/30`}>
      <Image
        src={src}
        alt={`${title} logo`}
        fill
        sizes={sizes}
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default ProjectLogo;
