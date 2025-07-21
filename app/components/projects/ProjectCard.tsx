"use client";

import React, { memo, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  GitBranch,
  Calendar,
  Eye,
  Star,
  Heart,
} from "lucide-react";
import {
  Project,
  PROJECT_STATUS_COLORS,
  PROJECT_STATUS_LABELS,
  PROJECT_CATEGORY_LABELS,
} from "@/app/types/project";
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

  const handleLinkClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  // Support legacy et nouvelle structure d'images
  const imageSrc =
    project.images?.thumbnail || project.image || "/projects/placeholder.svg";
  const imageAlt = project.images?.alt || `Aperçu du projet ${project.title}`;

  // Support legacy pour les liens
  const demoUrl = project.links?.demo || project.liveUrl;
  const githubUrl = project.links?.github || project.githubUrl;

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
        className={`h-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
          isFeatured
            ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-primary/10"
            : "border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        }`}
        onClick={onClickAction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Voir les détails du projet ${project.title}`}
      >
        {/* Image Container */}
        <div
          className={`relative overflow-hidden ${isCompact ? "h-32" : "h-48"}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading={isFeatured && index < 2 ? undefined : "lazy"}
            priority={isFeatured && index < 2}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge
              className={`${PROJECT_STATUS_COLORS[project.status]} backdrop-blur-sm border`}
              aria-label={`Statut: ${PROJECT_STATUS_LABELS[project.status]}`}
            >
              {PROJECT_STATUS_LABELS[project.status]}
            </Badge>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className="backdrop-blur-sm bg-white/10 text-white border-white/20"
            >
              {PROJECT_CATEGORY_LABELS[project.category]}
            </Badge>
          </div>

          {/* Featured indicator */}
          {isFeatured && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-yellow-500/90 text-yellow-900 border-yellow-400">
                <Star className="w-3 h-3 mr-1" />
                Mis en avant
              </Badge>
            </div>
          )}

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            {demoUrl && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                onClick={handleLinkClick}
              >
                <Link
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir la démo de ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="sr-only">Voir la démo</span>
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                onClick={handleLinkClick}
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le code source de ${project.title}`}
                >
                  <GitBranch className="w-4 h-4" />
                  <span className="sr-only">Code source</span>
                </Link>
              </Button>
            )}
            <Button
              size="sm"
              variant="secondary"
              aria-label={`Voir plus de détails sur ${project.title}`}
            >
              <Eye className="w-4 h-4" />
              <span className="sr-only">Voir les détails</span>
            </Button>
          </div>
        </div>

        {/* Content */}
        <CardHeader className={isCompact ? "p-4 pb-2" : "pb-3"}>
          <CardTitle
            className={`line-clamp-1 ${isCompact ? "text-lg" : "text-xl"} font-bold`}
          >
            {project.title}
          </CardTitle>
          <CardDescription
            className={`line-clamp-2 text-muted-foreground ${isCompact ? "text-sm" : ""}`}
          >
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className={`pt-0 ${isCompact ? "p-4 pt-0" : ""}`}>
          {/* Technologies */}
          <div
            className="flex flex-wrap gap-1.5 mb-4"
            aria-label="Technologies utilisées"
          >
            {project.technologies.slice(0, isCompact ? 3 : 4).map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="text-xs"
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

          {/* Footer with metadata */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {/* Date */}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>
                {new Intl.DateTimeFormat("fr-FR", {
                  year: "numeric",
                  month: "short",
                }).format(new Date(project.metadata.updated_at))}
              </span>
            </div>

            {/* Stats */}
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
        </CardContent>
      </Card>
    </motion.div>
  );
});

export default ProjectCard;
