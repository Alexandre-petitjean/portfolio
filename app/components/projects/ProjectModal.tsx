"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ExternalLink,
  GitBranch,
  Calendar,
  Eye,
  Star,
  Heart,
  Users,
  BookOpen,
} from "lucide-react";
import {
  Project,
  PROJECT_STATUS_COLORS,
  PROJECT_STATUS_LABELS,
  PROJECT_CATEGORY_LABELS,
} from "@/app/types/project";
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
    transition: { type: "spring", damping: 25, stiffness: 500 },
  },
  exit: { scale: 0.8, opacity: 0 },
};

export default function ProjectModal({
  project,
  isOpen,
  onCloseAction,
}: ProjectModalProps) {
  if (!project) return null;

  // Support legacy pour les liens
  const demoUrl = project.links?.demo || project.liveUrl;
  const githubUrl = project.links?.github || project.githubUrl;
  const imageSrc =
    project.images?.thumbnail ||
    project.image ||
    "/projects/placeholder_web.png";
  const imageAlt = project.images?.alt || `Aperçu du projet ${project.title}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onCloseAction}
        >
          <motion.div
            variants={contentVariants}
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-xl shadow-2xl border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1152px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <Button
                variant="ghost"
                size="sm"
                onClick={onCloseAction}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
                aria-label="Fermer la modal"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    className={`${PROJECT_STATUS_COLORS[project.status]} backdrop-blur-sm border`}
                  >
                    {PROJECT_STATUS_LABELS[project.status]}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-sm bg-white/10 text-white border-white/20"
                  >
                    {PROJECT_CATEGORY_LABELS[project.category]}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-primary-500/90 text-white border-primary-400/50 backdrop-blur-sm shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Mis en avant
                    </Badge>
                  )}
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-200 text-lg">{project.description}</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-3">
                {demoUrl && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    <Link
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir la démo
                    </Link>
                  </Button>
                )}
                {githubUrl && (
                  <Button variant="outline" asChild size="lg">
                    <Link
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitBranch className="h-4 w-4 mr-2" />
                      Code source
                    </Link>
                  </Button>
                )}
                {project.links?.docs && (
                  <Button variant="outline" asChild size="lg">
                    <Link
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Documentation
                    </Link>
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      À propos du projet
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="text-sm px-3 py-1"
                          title={
                            tech.category
                              ? `${tech.name} - ${tech.category}`
                              : tech.name
                          }
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {(project.challenges?.length ||
                    project.achievements?.length) && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.challenges && project.challenges.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">
                            Défis techniques
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <p className="text-muted-foreground text-sm">
                                  {challenge}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.achievements &&
                        project.achievements.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">
                              Réalisations
                            </h4>
                            <ul className="space-y-2">
                              {project.achievements.map(
                                (achievement, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    <p className="text-muted-foreground text-sm">
                                      {achievement}
                                    </p>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Statistiques</h4>
                      <div className="space-y-3">
                        {project.metadata.views && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Eye className="h-4 w-4" />
                              <span>Vues</span>
                            </div>
                            <span className="font-medium">
                              {project.metadata.views.toLocaleString("fr-FR")}
                            </span>
                          </div>
                        )}
                        {project.metadata.likes && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Heart className="h-4 w-4" />
                              <span>Likes</span>
                            </div>
                            <span className="font-medium">
                              {project.metadata.likes}
                            </span>
                          </div>
                        )}
                        {project.metadata.stars && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Star className="h-4 w-4" />
                              <span>Étoiles</span>
                            </div>
                            <span className="font-medium">
                              {project.metadata.stars}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Informations</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Créé le</p>
                            <p>
                              {new Intl.DateTimeFormat("fr-FR", {
                                dateStyle: "medium",
                              }).format(new Date(project.metadata.created_at))}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">
                              Mis à jour le
                            </p>
                            <p>
                              {new Intl.DateTimeFormat("fr-FR", {
                                dateStyle: "medium",
                              }).format(new Date(project.metadata.updated_at))}
                            </p>
                          </div>
                        </div>

                        {project.teamSize && (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-muted-foreground">Équipe</p>
                              <p>
                                {project.teamSize}{" "}
                                {project.teamSize === 1
                                  ? "personne"
                                  : "personnes"}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-muted-foreground">Période</p>
                            <p>
                              {new Intl.DateTimeFormat("fr-FR", {
                                year: "numeric",
                                month: "long",
                              }).format(new Date(project.startDate))}
                              {project.endDate &&
                                project.status === "completed" && (
                                  <>
                                    {" - "}
                                    {new Intl.DateTimeFormat("fr-FR", {
                                      year: "numeric",
                                      month: "long",
                                    }).format(new Date(project.endDate))}
                                  </>
                                )}
                            </p>
                          </div>
                        </div>
                      </div>
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
