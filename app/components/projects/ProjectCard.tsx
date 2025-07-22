"use client";

import React, { memo, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Calendar, Eye, Star, Heart } from "lucide-react";
import {
  Project,
  PROJECT_STATUS_COLORS,
  PROJECT_STATUS_LABELS,
  PROJECT_CATEGORY_LABELS,
} from "@/app/types/project";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured" | "compact";
  onClickAction?: () => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  variant = "default",
  onClickAction,
}: ProjectCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured" || project.featured;

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClickAction?.();
      }
    },
    [onClickAction],
  );

  // Support legacy et nouvelle structure d'images
  const imageSrc =
    project.images?.thumbnail ||
    project.image ||
    "/projects/placeholder_web.png";
  const imageAlt = project.images?.alt || `Aperçu du projet ${project.title}`;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className="h-full"
    >
      <Card
        className={`h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl p-0 ${
          isFeatured
            ? "ring-2 ring-primary-400/60 bg-gradient-to-br from-primary-50/80 to-primary-100/60 dark:from-primary-900/30 dark:to-primary-800/20 shadow-lg shadow-primary-500/20"
            : "border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        }`}
        onClick={onClickAction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir les détails du projet ${project.title}`}
      >
        {/* Image Container - directement en haut sans espace */}
        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={200}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              isCompact ? "h-32" : "h-48"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={isFeatured && index < 2}
          />

          {/* Badge "Mis en avant" en haut à droite */}
          {isFeatured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary-500/90 text-white border-primary-400/50 backdrop-blur-sm shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Mis en avant
              </Badge>
            </div>
          )}

          {/* Badges statut et catégorie en bas à droite */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <Badge
              className={`${PROJECT_STATUS_COLORS[project.status]} backdrop-blur-sm border`}
              aria-label={`Statut: ${PROJECT_STATUS_LABELS[project.status]}`}
            >
              {PROJECT_STATUS_LABELS[project.status]}
            </Badge>
            <Badge
              variant="secondary"
              className="backdrop-blur-sm bg-white/10 text-white border-white/20"
            >
              {PROJECT_CATEGORY_LABELS[project.category]}
            </Badge>
          </div>
        </div>

        {/* Content avec padding approprié */}
        <div className="p-6 flex flex-col h-full">
          <div className="pb-3">
            <h3
              className={`line-clamp-1 ${isCompact ? "text-lg" : "text-xl"} font-bold`}
            >
              {project.title}
            </h3>
            <p
              className={`line-clamp-2 text-muted-foreground ${isCompact ? "text-sm" : ""} mt-1.5`}
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div
            className="flex flex-wrap gap-1.5 mb-4"
            aria-label="Technologies utilisées"
          >
            {project.technologies.slice(0, isCompact ? 3 : 4).map((tech) => (
              <Badge
                key={tech.name}
                className="text-xs bg-green-500 text-white hover:bg-green-600"
                title={
                  tech.category ? `${tech.name} (${tech.category})` : tech.name
                }
              >
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > (isCompact ? 3 : 4) && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - (isCompact ? 3 : 4)}
              </Badge>
            )}
          </div>

          {/* Spacer pour pousser le footer en bas */}
          <div className="flex-1"></div>

          {/* Footer avec metadata - toujours en bas */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>
                {new Intl.DateTimeFormat("fr-FR", {
                  year: "numeric",
                  month: "short",
                }).format(new Date(project.metadata.updated_at))}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.metadata.views && (
                <div
                  className="flex items-center gap-1"
                  title={`${project.metadata.views} vues`}
                >
                  <Eye className="w-3 h-3" />
                  <span>{project.metadata.views}</span>
                </div>
              )}
              {project.metadata.likes && (
                <div
                  className="flex items-center gap-1"
                  title={`${project.metadata.likes} likes`}
                >
                  <Heart className="w-3 h-3" />
                  <span>{project.metadata.likes}</span>
                </div>
              )}
              {project.metadata.stars && (
                <div
                  className="flex items-center gap-1"
                  title={`${project.metadata.stars} étoiles`}
                >
                  <Star className="w-3 h-3" />
                  <span>{project.metadata.stars}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

export default ProjectCard;
