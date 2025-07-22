"use client";

import { useState, useMemo, Suspense, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Eye } from "lucide-react";
import { Project, ProjectStatus, ProjectCategory } from "@/app/types/project";
import { useProjects } from "@/app/hooks/useProjects";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import ProjectGrid from "@/app/components/projects/ProjectGrid";
import ProjectModal from "@/app/components/projects/ProjectModal";
import ProjectFilterLogic from "@/app/components/projects/ProjectFilterLogic";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
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

  const availableTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project: Project) => {
      project.technologies.forEach((tech) => techs.add(tech.name));
    });
    return Array.from(techs).sort();
  }, [projects]);

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

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (statusFilter !== "all") {
      result = result.filter((project) => project.status === statusFilter);
    }

    if (categoryFilter !== "all") {
      result = result.filter((project) => project.category === categoryFilter);
    }

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

    if (selectedTech) {
      result = result.filter((project) =>
        project.technologies.some((tech) => tech.name === selectedTech),
      );
    }

    return result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (
        new Date(b.metadata.updated_at).getTime() -
        new Date(a.metadata.updated_at).getTime()
      );
    });
  }, [projects, statusFilter, categoryFilter, searchTerm, selectedTech]);

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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="mb-12 space-y-6">
            <ProjectFilterLogic
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              statusCounts={statusCounts}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              categoryCounts={categoryCounts}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
              availableTechnologies={availableTechnologies}
              activeFiltersCount={activeFiltersCount}
              onClearFilters={handleClearFilters}
            />
          </div>

          <Suspense fallback={<div>Chargement des projets...</div>}>
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  showAll
                    ? "all"
                    : "paginated" +
                      `${statusFilter}-${categoryFilter}-${searchTerm}-${selectedTech}`
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectGrid
                  projects={displayedProjects}
                  onProjectClickAction={handleProjectClick}
                />
              </motion.div>
            </AnimatePresence>
          </Suspense>

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
