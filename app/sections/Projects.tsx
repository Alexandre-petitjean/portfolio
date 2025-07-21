"use client";

import { useState, useMemo, Suspense, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Eye, Search, Filter, X } from "lucide-react";
import {
  Project,
  ProjectStatus,
  ProjectCategory,
  PROJECT_STATUS_LABELS,
  PROJECT_CATEGORY_LABELS,
} from "@/app/types/project";
import { useProjects } from "@/app/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { ProjectCard } from "@/app/components/projects/ProjectCard";
import ProjectModal from "@/app/components/projects/ProjectModal";

// Variants d'animation optimisés
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const filterVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

export default function Projects() {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">(
    "all",
  );
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory | "all">(
    "all",
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("");

  // Technologies disponibles avec optimisation
  const availableTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project: Project) => {
      project.technologies.forEach((tech) => techs.add(tech.name));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Compteurs par statut et catégorie
  const { statusCounts, categoryCounts } = useMemo(() => {
    const statusCounts: Record<ProjectStatus | "all", number> = {
      all: projects.length,
      completed: 0,
      in_progress: 0,
      concept: 0,
      paused: 0,
      archived: 0,
    };

    const categoryCounts: Record<ProjectCategory | "all", number> = {
      all: projects.length,
      web: 0,
      mobile: 0,
      desktop: 0,
      api: 0,
      library: 0,
      tool: 0,
    };

    projects.forEach((project) => {
      statusCounts[project.status]++;
      categoryCounts[project.category]++;
    });

    return { statusCounts, categoryCounts };
  }, [projects]);

  // Filtrage optimisé des projets
  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filtre par statut
    if (statusFilter !== "all") {
      result = result.filter((project) => project.status === statusFilter);
    }

    // Filtre par catégorie
    if (categoryFilter !== "all") {
      result = result.filter((project) => project.category === categoryFilter);
    }

    // Filtre par recherche
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          project.technologies.some((tech) =>
            tech.name.toLowerCase().includes(search),
          ),
      );
    }

    // Filtre par technologie
    if (selectedTech) {
      result = result.filter((project) =>
        project.technologies.some((tech) => tech.name === selectedTech),
      );
    }

    // Trier par featured d'abord, puis par date de mise à jour
    return result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (
        new Date(b.metadata.updated_at).getTime() -
        new Date(a.metadata.updated_at).getTime()
      );
    });
  }, [projects, statusFilter, categoryFilter, searchTerm, selectedTech]);

  // Projets à afficher avec pagination
  const displayedProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 6);
  }, [filteredProjects, showAll]);

  const hasMoreProjects = !showAll && filteredProjects.length > 6;
  const activeFiltersCount = [
    statusFilter !== "all",
    categoryFilter !== "all",
    searchTerm,
    selectedTech,
  ].filter(Boolean).length;

  // Handlers optimisés avec useCallback
  const handleClearFilters = useCallback(() => {
    setStatusFilter("all");
    setCategoryFilter("all");
    setSearchTerm("");
    setSelectedTech("");
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (loading) {
    return (
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-red-600 dark:text-red-400 text-lg mb-4">
              Erreur lors du chargement des projets
            </p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Réessayer
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <motion.section
        id="projects"
        className="relative py-24 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background amélioré */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header optimisé */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Portfolio • {projects.length} projets
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Mes{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
                Projets
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez une sélection de projets qui illustrent mon expertise
              technique et ma passion pour le développement
            </p>
          </header>

          {/* Filtres avancés */}
          <div className="mb-12 space-y-6">
            {/* Barre de recherche principale */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Rechercher un projet, une technologie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 text-base"
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Filtres par statut */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className="px-4"
              >
                Tous ({statusCounts.all})
              </Button>
              {(
                [
                  "completed",
                  "in_progress",
                  "concept",
                  "paused",
                  "archived",
                ] as const
              )
                .filter((status) => statusCounts[status] > 0)
                .map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(status)}
                    className="px-4"
                  >
                    {PROJECT_STATUS_LABELS[status]} ({statusCounts[status]})
                  </Button>
                ))}
            </div>

            {/* Filtres par catégorie */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={categoryFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter("all")}
                className="px-4"
              >
                Toutes catégories
              </Button>
              {(["web", "mobile", "desktop", "api", "library", "tool"] as const)
                .filter((category) => categoryCounts[category] > 0)
                .map((category) => (
                  <Button
                    key={category}
                    variant={
                      categoryFilter === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setCategoryFilter(category)}
                    className="px-4"
                  >
                    {PROJECT_CATEGORY_LABELS[category]} (
                    {categoryCounts[category]})
                  </Button>
                ))}
            </div>

            {/* Filtre par technologie */}
            {availableTechnologies.length > 0 && (
              <div className="max-w-md mx-auto">
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-md text-sm"
                >
                  <option value="">Toutes les technologies</option>
                  {availableTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Filtres actifs */}
            {activeFiltersCount > 0 && (
              <motion.div
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 justify-center"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Filtres actifs:
                  </span>
                </div>
                {statusFilter !== "all" && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => setStatusFilter("all")}
                  >
                    {PROJECT_STATUS_LABELS[statusFilter]} ✕
                  </Badge>
                )}
                {categoryFilter !== "all" && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => setCategoryFilter("all")}
                  >
                    {PROJECT_CATEGORY_LABELS[categoryFilter]} ✕
                  </Badge>
                )}
                {searchTerm && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => setSearchTerm("")}
                  >
                    "{searchTerm}" ✕
                  </Badge>
                )}
                {selectedTech && (
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => setSelectedTech("")}
                  >
                    {selectedTech} ✕
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-xs"
                >
                  Effacer tout
                </Button>
              </motion.div>
            )}
          </div>

          {/* Grille de projets optimisée */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant={project.featured ? "featured" : "default"}
                  onClickAction={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Bouton "Voir plus" */}
          {hasMoreProjects && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                size="lg"
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-primary-500/20 hover:border-primary-500/40 text-primary-700 dark:text-primary-300 hover:bg-primary-500/5"
              >
                <Eye className="w-4 h-4 mr-2" />
                Voir tous les projets ({filteredProjects.length - 6} de plus)
              </Button>
            </div>
          )}

          {/* État vide */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                  Aucun projet trouvé avec ces critères
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  className="text-primary-600 dark:text-primary-400"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Modal de projet */}
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onCloseAction={handleCloseModal}
          />
        </Suspense>
      </motion.section>
    </ErrorBoundary>
  );
}
