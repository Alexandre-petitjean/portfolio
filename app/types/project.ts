export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "tool" | "mobile";
  color?: string;
}

export interface ProjectLink {
  demo?: string;
  github?: string;
  case_study?: string;
}

export interface ProjectImage {
  thumbnail: string;
  gallery?: string[];
  alt: string;
}

export interface ProjectMetadata {
  created_at: Date;
  updated_at: Date;
  views?: number;
}

export type ProjectStatus = "completed" | "in_progress" | "concept";
export type ProjectCategory = "web" | "mobile" | "desktop" | "api" | "library";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  links: ProjectLink;
  images: ProjectImage;
  status: ProjectStatus;
  featured: boolean;
  category: ProjectCategory;
  metadata: ProjectMetadata;
}

export interface ProjectFilters {
  category?: ProjectCategory;
  technology?: string;
  status?: ProjectStatus;
  featured?: boolean;
}
