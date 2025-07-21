"use client";

import React, { memo, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "@/app/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured" | "compact";
  onClick?: () => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.2 },
  },
};

const statusColors = {
  completed: "bg-green-500/10 text-green-700 border-green-500/20",
  in_progress: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  concept: "bg-orange-500/10 text-orange-700 border-orange-500/20",
} as const;

const statusLabels = {
  completed: "Terminé",
  in_progress: "En cours",
  concept: "Concept",
} as const;

const ProjectCard = memo(function ProjectCard({
  project,
  variant = "default",
  onClick,
}: ProjectCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick?.();
      }
    },
    [onClick],
  );

  const handleLinkClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <Card
        className={`h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary ${
          isFeatured ? "ring-2 ring-primary/20" : ""
        }`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir les détails du projet ${project.title}`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${isCompact ? "h-32" : "h-48"}`}
        >
          <Image
            src={project.images.thumbnail}
            alt={project.images.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Status Badge */}
          <div className="absolute top-2 left-2">
            <Badge
              variant="secondary"
              className={statusColors[project.status]}
              aria-label={`Statut: ${statusLabels[project.status]}`}
            >
              {statusLabels[project.status]}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="default" aria-label="Projet mis en avant">
                ⭐ Mis en avant
              </Badge>
            </div>
          )}

          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            {project.links.demo && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                onClick={handleLinkClick}
                aria-label={`Voir la démo de ${project.title}`}
              >
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Voir la démo</span>
                </Link>
              </Button>
            )}
            {project.links.github && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                onClick={handleLinkClick}
                aria-label={`Voir le code source de ${project.title}`}
              >
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">Voir le code source</span>
                </Link>
              </Button>
            )}
            <Button
              size="sm"
              variant="secondary"
              aria-label={`Voir plus de détails sur ${project.title}`}
            >
              <Eye className="h-4 w-4" />
              <span className="sr-only">Voir les détails</span>
            </Button>
          </div>
        </div>

        <CardHeader className={isCompact ? "p-4" : ""}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle
                className={`line-clamp-1 ${isCompact ? "text-lg" : "text-xl"}`}
              >
                {project.title}
              </CardTitle>
              <CardDescription
                className={`line-clamp-2 mt-1 ${isCompact ? "text-sm" : ""}`}
              >
                {project.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className={isCompact ? "p-4 pt-0" : "pt-0"}>
          {/* Technologies */}
          <div
            className="flex flex-wrap gap-1 mb-4"
            aria-label="Technologies utilisées"
          >
            {project.technologies.slice(0, isCompact ? 3 : 5).map((tech) => (
              <Badge key={tech.name} variant="outline" className="text-xs">
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > (isCompact ? 3 : 5) && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - (isCompact ? 3 : 5)} autres
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.demo && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1"
                onClick={handleLinkClick}
              >
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Demo
                </Link>
              </Button>
            )}
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1"
                onClick={handleLinkClick}
              >
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Link>
              </Button>
            )}
          </div>

          {/* Metadata */}
          {!isCompact && project.metadata.views && (
            <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
              <span aria-label={`${project.metadata.views} vues`}>
                {project.metadata.views} vues
              </span>
              <span>
                {new Intl.DateTimeFormat("fr-FR", {
                  year: "numeric",
                  month: "short",
                }).format(project.metadata.updated_at)}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default ProjectCard;
