import { useState, useMemo } from "react";
import { Project, ProjectFilters } from "@/app/types/project";

export const useProjectFilter = (projects: Project[]) => {
  const [filters, setFilters] = useState<ProjectFilters>({});
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.name.toLowerCase().includes(searchLower),
          );
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && project.category !== filters.category) {
        return false;
      }

      // Technology filter
      if (filters.technology) {
        const hasTechnology = project.technologies.some(
          (tech) =>
            tech.name.toLowerCase() === filters.technology?.toLowerCase(),
        );
        if (!hasTechnology) return false;
      }

      // Status filter
      if (filters.status && project.status !== filters.status) {
        return false;
      }

      // Featured filter
      if (
        filters.featured !== undefined &&
        project.featured !== filters.featured
      ) {
        return false;
      }

      return true;
    });
  }, [projects, filters, searchTerm]);

  const updateFilter = (
    key: keyof ProjectFilters,
    value: string | boolean | undefined,
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({});
    setSearchTerm("");
  };

  const activeFiltersCount =
    Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  return {
    filteredProjects,
    filters,
    searchTerm,
    setSearchTerm,
    updateFilter,
    clearFilters,
    activeFiltersCount,
  };
};
