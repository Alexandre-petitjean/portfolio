"use client";

import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ProjectFilters,
  ProjectCategory,
  ProjectStatus,
} from "@/app/types/project";

interface ProjectFilterProps {
  filters: ProjectFilters;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (
    key: keyof ProjectFilters,
    value: string | boolean | undefined,
  ) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
  availableTechnologies: string[];
}

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "desktop", label: "Desktop" },
  { value: "api", label: "API" },
  { value: "library", label: "Librairie" },
];

const statuses: { value: ProjectStatus; label: string }[] = [
  { value: "completed", label: "Terminé" },
  { value: "in_progress", label: "En cours" },
  { value: "concept", label: "Concept" },
];

export default function ProjectFilter({
  filters,
  searchTerm,
  onSearchChange,
  onFilterChange,
  onClearFilters,
  activeFiltersCount,
  availableTechnologies,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Rechercher un projet..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {/* Categories */}
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={
              filters.category === category.value ? "default" : "outline"
            }
            size="sm"
            onClick={() =>
              onFilterChange(
                "category",
                filters.category === category.value
                  ? undefined
                  : category.value,
              )
            }
            className="h-8"
          >
            {category.label}
          </Button>
        ))}

        {/* Separator */}
        <div className="w-px h-8 bg-border" />

        {/* Status */}
        {statuses.map((status) => (
          <Button
            key={status.value}
            variant={filters.status === status.value ? "default" : "outline"}
            size="sm"
            onClick={() =>
              onFilterChange(
                "status",
                filters.status === status.value ? undefined : status.value,
              )
            }
            className="h-8"
          >
            {status.label}
          </Button>
        ))}

        {/* Featured */}
        <Button
          variant={filters.featured ? "default" : "outline"}
          size="sm"
          onClick={() =>
            onFilterChange("featured", filters.featured ? undefined : true)
          }
          className="h-8"
        >
          ⭐ Mis en avant
        </Button>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Technologies</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {availableTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={filters.technology === tech ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() =>
                onFilterChange(
                  "technology",
                  filters.technology === tech ? undefined : tech,
                )
              }
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Effacer les filtres ({activeFiltersCount})
        </Button>
      )}
    </div>
  );
}
