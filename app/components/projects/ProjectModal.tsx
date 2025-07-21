"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, Github, Calendar, Eye } from "lucide-react";
import { Project } from "@/app/types/project";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onCloseAction: () => void;
}

const modalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, damping: 25, stiffness: 500 },
  },
  exit: { scale: 0.8, opacity: 0 },
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

export default function ProjectModal({
  project,
  isOpen,
  onCloseAction,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onCloseAction}
        >
          <motion.div
            variants={contentVariants}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <Badge
                  variant="secondary"
                  className={statusColors[project.status]}
                >
                  {statusLabels[project.status]}
                </Badge>
                {project.featured && (
                  <Badge variant="default">⭐ Mis en avant</Badge>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={onCloseAction}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={project.images.thumbnail}
                    alt={project.images.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {project.images.gallery &&
                  project.images.gallery.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.images.gallery.map(
                        (image: string, index: number) => (
                          <div
                            key={index}
                            className="relative h-24 rounded overflow-hidden"
                          >
                            <Image
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="text-sm"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  {/* Actions */}
                  <Card>
                    <CardContent className="p-4 space-y-3">
                      <h4 className="font-semibold">Actions</h4>

                      {project.links.demo && (
                        <Button asChild className="w-full">
                          <Link href={project.links.demo} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Voir la démo
                          </Link>
                        </Button>
                      )}

                      {project.links.github && (
                        <Button variant="outline" asChild className="w-full">
                          <Link href={project.links.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Code source
                          </Link>
                        </Button>
                      )}

                      {project.links.case_study && (
                        <Button variant="outline" asChild className="w-full">
                          <Link href={project.links.case_study} target="_blank">
                            Étude de cas
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  {/* Metadata */}
                  <Card>
                    <CardContent className="p-4 space-y-3">
                      <h4 className="font-semibold">Informations</h4>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Créé:</span>
                          <span>
                            {new Intl.DateTimeFormat("fr-FR", {
                              dateStyle: "medium",
                            }).format(project.metadata.created_at)}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            Modifié:
                          </span>
                          <span>
                            {new Intl.DateTimeFormat("fr-FR", {
                              dateStyle: "medium",
                            }).format(project.metadata.updated_at)}
                          </span>
                        </div>

                        {project.metadata.views && (
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Vues:</span>
                            <span>
                              {project.metadata.views.toLocaleString("fr-FR")}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Category */}
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Catégorie</h4>
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
