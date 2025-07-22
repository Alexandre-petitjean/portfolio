import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Filter,
  Search,
  X,
  CheckCircle,
  Clock,
  Lightbulb,
  Pause,
  Archive,
} from "lucide-react";
import {
  ProjectStatus,
  ProjectCategory,
  PROJECT_STATUS_LABELS,
  PROJECT_CATEGORY_LABELS,
} from "@/app/types/project";
import { Variants, motion } from "framer-motion";

const filterVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

const statusIcons = {
  completed: CheckCircle,
  in_progress: Clock,
  concept: Lightbulb,
  paused: Pause,
  archived: Archive,
} as const;

type Props = {
  statusFilter: ProjectStatus | "all";
  setStatusFilter: (s: ProjectStatus | "all") => void;
  statusCounts: Record<ProjectStatus | "all", number>;
  categoryFilter: ProjectCategory | "all";
  setCategoryFilter: (c: ProjectCategory | "all") => void;
  categoryCounts: Record<ProjectCategory | "all", number>;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  selectedTech: string;
  setSelectedTech: (t: string) => void;
  availableTechnologies: string[];
  activeFiltersCount: number;
  handleClearFilters: () => void;
};

const ProjectFilters: FC<Props> = ({
  statusFilter,
  setStatusFilter,
  statusCounts,
  categoryFilter,
  setCategoryFilter,
  categoryCounts,
  searchTerm,
  setSearchTerm,
  selectedTech,
  setSelectedTech,
  availableTechnologies,
  activeFiltersCount,
  handleClearFilters,
}) => (
  <div className="mb-12 space-y-6">
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
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant={statusFilter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => setStatusFilter("all")}
        className="px-4"
      >
        Tous ({statusCounts.all})
      </Button>
      {(["completed", "in_progress", "concept", "paused", "archived"] as const)
        .filter((status) => statusCounts[status] > 0)
        .map((status) => {
          const Icon = statusIcons[status];
          return (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(status)}
              className="px-4"
            >
              <Icon className="w-4 h-4 mr-2" />
              {PROJECT_STATUS_LABELS[status]} ({statusCounts[status]})
            </Button>
          );
        })}
    </div>
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
            variant={categoryFilter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setCategoryFilter(category)}
            className="px-4"
          >
            {PROJECT_CATEGORY_LABELS[category]} ({categoryCounts[category]})
          </Button>
        ))}
    </div>
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
    {activeFiltersCount > 0 && (
      <motion.div
        variants={filterVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 justify-center"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filtres actifs:</span>
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
);

export default ProjectFilters;
