import React from "react";
import { notFound } from "next/navigation";
import { projectsData, getProjectBySlug } from "../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Pre-render static pages only for projects that have details pages configured
export async function generateStaticParams() {
  return projectsData
    .filter((project) => project.hasDetailPage)
    .map((project) => ({
      slug: project.slug,
    }));
}

// Generate dynamic SEO metadata per project
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project || !project.hasDetailPage) {
    return {
      title: "Project Not Found | Kulsoom Imran",
      description: "The requested project detail page could not be found.",
    };
  }
  return {
    title: `${project.title} | Kulsoom Imran`,
    description: project.oneLineSummary,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  // If the project doesn't exist, or hasDetailPage is false, return 404
  if (!project || !project.hasDetailPage) {
    notFound();
  }

  // Delegate dynamic client rendering (modal expanded images, actions) to the client component
  return <ProjectDetailClient project={project} />;
}
