export type ProjectStatus =
  | "completed"
  | "in_progress"
  | "concept"
  | "paused"
  | "archived";

export interface Technology {
  name: string;
  icon?: string;
  color?: string;
  category?: string;
}

export interface ProjectImages {
  thumbnail: string;
  alt: string;
  gallery?: string[];
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  docs?: string;
  case_study?: string;
}

export interface ProjectMetadata {
  views?: number;
  likes?: number;
  stars?: number;
  updated_at: string;
  created_at: string;
  featured_until?: string;
}

export interface ProjectFilters {
  status?: ProjectStatus;
  category?: ProjectCategory;
  technology?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "web"
  | "mobile"
  | "desktop"
  | "api"
  | "library"
  | "tool";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  slug: string;

  // Images
  image?: string; // Deprecated, use images.thumbnail
  images: ProjectImages;

  // Technical details
  technologies: Technology[];
  status: ProjectStatus;
  category: ProjectCategory;

  // Dates
  startDate: string;
  endDate?: string;

  // Links
  links: ProjectLinks;

  // Legacy support
  liveUrl?: string; // Deprecated, use links.demo
  githubUrl?: string; // Deprecated, use links.github

  // Project details
  challenges?: string[];
  achievements?: string[];
  teamSize?: number;
  featured?: boolean;

  // Metadata
  metadata: ProjectMetadata;
}

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: "Terminé",
  in_progress: "En cours",
  concept: "Concept",
  paused: "En pause",
  archived: "Archivé",
};

export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
  completed:
    "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  in_progress:
    "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  concept:
    "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  paused:
    "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  archived:
    "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
};

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  desktop: "Desktop",
  api: "API",
  library: "Librairie",
  tool: "Outil",
};
