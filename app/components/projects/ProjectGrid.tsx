"use client";

import { motion, type Variants } from "framer-motion";
import { Project } from "@/app/types/project";
import ProjectCard from "@/app/components/projects/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  variant?: "default" | "featured" | "compact";
  onProjectClickAction: (project: Project) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectGrid({
  projects,
  variant = "default",
  onProjectClickAction,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-2">
          Aucun projet trouvé
        </div>
        <div className="text-sm text-muted-foreground">
          Essayez de modifier vos filtres de recherche
        </div>
      </div>
    );
  }

  const gridClass =
    variant === "compact"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={gridClass}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          variant={variant}
          onClickAction={() => onProjectClickAction(project)}
          index={index}
        />
      ))}
    </motion.div>
  );
}
