"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { Project } from "@/app/types/project";
import { useProjects } from "@/app/hooks/useProjects";
import { useProjectFilter } from "@/app/hooks/useProjectFilter";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

// Lazy loading des composants lourds
const ProjectFilter = dynamic(
  () => import("@/app/components/projects/ProjectFilter"),
  {
    loading: () => <div className="h-20 bg-muted/50 animate-pulse rounded" />,
  },
);

const ProjectGrid = dynamic(
  () => import("@/app/components/projects/ProjectGrid"),
  {
    loading: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-80 bg-muted/50 animate-pulse rounded-lg" />
        ))}
      </div>
    ),
  },
);

const ProjectModal = dynamic(
  () => import("@/app/components/projects/ProjectModal"),
  {
    ssr: false,
  },
);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

export default function Projects() {
  const { projects, featuredProjects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const {
    filteredProjects,
    filters,
    searchTerm,
    setSearchTerm,
    updateFilter,
    clearFilters,
    activeFiltersCount,
  } = useProjectFilter(projects);

  // Technologies disponibles pour les filtres
  const availableTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project: Project) => {
      project.technologies.forEach((tech) => techs.add(tech.name));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Projets à afficher selon l'onglet actif
  const displayedProjects = useMemo(() => {
    let projectsToShow =
      activeTab === "featured" ? featuredProjects : filteredProjects;

    // Limiter l'affichage si showAll est false
    if (!showAll && activeTab === "all") {
      projectsToShow = projectsToShow.slice(0, 6);
    }

    return projectsToShow;
  }, [activeTab, filteredProjects, featuredProjects, showAll]);

  const hasMoreProjects =
    activeTab === "all" && !showAll && filteredProjects.length > 6;

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-center py-20"
            role="status"
            aria-live="polite"
          >
            <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
            <span className="ml-2">Chargement des projets...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center py-20" role="alert">
            <div className="text-destructive mb-4">{error}</div>
            <Button onClick={() => window.location.reload()}>Réessayer</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <motion.section
        id="projects"
        className="py-20 bg-muted/50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        role="region"
        aria-labelledby="projects-heading"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Mes Projets
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Découvrez une sélection de mes réalisations, des projets web
              modernes aux applications mobiles innovantes.
            </motion.p>
          </div>

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList
                className="grid w-full max-w-md grid-cols-2"
                role="tablist"
              >
                <TabsTrigger
                  value="all"
                  role="tab"
                  aria-controls="all-projects"
                >
                  Tous les projets ({projects.length})
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  role="tab"
                  aria-controls="featured-projects"
                >
                  Mis en avant ({featuredProjects.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="all"
              className="space-y-8"
              role="tabpanel"
              id="all-projects"
            >
              {/* Filters */}
              <Suspense
                fallback={
                  <div className="h-20 bg-muted/50 animate-pulse rounded" />
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <ProjectFilter
                    filters={filters}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onFilterChange={updateFilter}
                    onClearFilters={clearFilters}
                    activeFiltersCount={activeFiltersCount}
                    availableTechnologies={availableTechnologies}
                  />
                </motion.div>
              </Suspense>

              {/* Results count */}
              <div
                className="text-sm text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {filteredProjects.length} projet
                {filteredProjects.length > 1 ? "s" : ""} trouvé
                {filteredProjects.length > 1 ? "s" : ""}
              </div>

              {/* Projects Grid */}
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-80 bg-muted/50 animate-pulse rounded-lg"
                      />
                    ))}
                  </div>
                }
              >
                <ProjectGrid
                  projects={displayedProjects}
                  onProjectClick={setSelectedProject}
                />
              </Suspense>

              {/* Load More */}
              {hasMoreProjects && (
                <div className="text-center">
                  <Button
                    onClick={() => setShowAll(true)}
                    variant="outline"
                    size="lg"
                  >
                    Voir tous les projets ({filteredProjects.length - 6} de
                    plus)
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent
              value="featured"
              className="space-y-8"
              role="tabpanel"
              id="featured-projects"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center mb-6">
                  <p className="text-muted-foreground">
                    Mes projets les plus représentatifs de mon travail
                  </p>
                </div>
                <Suspense
                  fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-80 bg-muted/50 animate-pulse rounded-lg"
                        />
                      ))}
                    </div>
                  }
                >
                  <ProjectGrid
                    projects={featuredProjects}
                    variant="featured"
                    onProjectClick={setSelectedProject}
                  />
                </Suspense>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>

      {/* Project Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onCloseAction={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </ErrorBoundary>
  );
}
