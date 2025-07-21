import { useState, useEffect, useCallback } from "react";
import { Project } from "@/app/types/project";

// Validation schema pour les projets
const validateProject = (project: unknown): project is Project => {
  if (typeof project !== "object" || project === null) {
    return false;
  }

  const proj = project as Record<string, unknown>;

  return (
    typeof proj.id === "string" &&
    typeof proj.title === "string" &&
    typeof proj.description === "string" &&
    Array.isArray(proj.technologies) &&
    typeof proj.images === "object" &&
    proj.images !== null &&
    typeof (proj.images as Record<string, unknown>).thumbnail === "string" &&
    typeof (proj.images as Record<string, unknown>).alt === "string" &&
    ["completed", "in_progress", "concept"].includes(proj.status as string) &&
    typeof proj.featured === "boolean" &&
    ["web", "mobile", "desktop", "api", "library"].includes(
      proj.category as string,
    )
  );
};

// Mock data - à remplacer par un appel API ou CMS
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Moderne",
    description: "Portfolio responsive avec animations et thème sombre",
    longDescription:
      "Un portfolio moderne développé avec Next.js 14, TypeScript et Tailwind CSS. Intègre des animations Framer Motion et un système de thème adaptatif.",
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Framer Motion", category: "frontend" },
    ],
    links: {
      demo: "https://portfolio.example.com",
      github: "https://github.com/user/portfolio",
    },
    images: {
      thumbnail: "/projects/placeholder.svg",
      gallery: ["/projects/placeholder.svg"],
      alt: "Capture d'écran du portfolio",
    },
    status: "completed",
    featured: true,
    category: "web",
    metadata: {
      created_at: new Date("2024-01-15"),
      updated_at: new Date("2024-06-20"),
      views: 1250,
    },
  },
  {
    id: "2",
    title: "E-commerce App",
    description: "Application e-commerce avec panier et paiement Stripe",
    longDescription:
      "Une application e-commerce complète avec gestion des produits, panier d'achat, et intégration de paiement Stripe sécurisée.",
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "Stripe", category: "tool" },
    ],
    links: {
      demo: "https://shop.example.com",
      github: "https://github.com/user/ecommerce",
    },
    images: {
      thumbnail: "/projects/placeholder.svg",
      alt: "Interface de l'application e-commerce",
    },
    status: "in_progress",
    featured: true,
    category: "web",
    metadata: {
      created_at: new Date("2024-03-10"),
      updated_at: new Date("2024-07-15"),
      views: 890,
    },
  },
  {
    id: "3",
    title: "Mobile Task Manager",
    description: "Application mobile de gestion de tâches avec sync cloud",
    longDescription:
      "Une application mobile de productivité avec synchronisation cloud, notifications push et interface intuitive.",
    technologies: [
      { name: "React Native", category: "mobile" },
      { name: "Firebase", category: "backend" },
      { name: "Redux", category: "frontend" },
    ],
    links: {
      github: "https://github.com/user/task-manager",
    },
    images: {
      thumbnail: "/projects/placeholder.svg",
      alt: "Interface de l'app mobile",
    },
    status: "concept",
    featured: false,
    category: "mobile",
    metadata: {
      created_at: new Date("2024-05-01"),
      updated_at: new Date("2024-05-01"),
      views: 320,
    },
  },
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulation d'un appel API avec gestion d'erreurs
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(resolve, 1000);
        // Simulation d'une erreur aléatoire pour les tests (à supprimer en production)
        if (process.env.NODE_ENV === "development" && Math.random() < 0.01) {
          clearTimeout(timeout);
          reject(new Error("Erreur de simulation pour test"));
        }
      });

      // Validation des données
      const validatedProjects = mockProjects.filter((project) => {
        const isValid = validateProject(project);
        if (!isValid) {
          console.warn("Projet invalide détecté:", project);
        }
        return isValid;
      });

      if (validatedProjects.length === 0) {
        throw new Error("Aucun projet valide trouvé");
      }

      setProjects(validatedProjects);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erreur inconnue lors du chargement des projets";

      setError(errorMessage);
      console.error("Erreur lors du chargement des projets:", error);

      // En cas d'erreur, on peut fournir des données de fallback
      if (process.env.NODE_ENV === "production") {
        setProjects([]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const featuredProjects = projects.filter((project) => project.featured);

  const getProjectsByCategory = useCallback(
    (category: string) =>
      projects.filter((project) => project.category === category),
    [projects],
  );

  const refreshProjects = useCallback(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    featuredProjects,
    loading,
    error,
    getProjectsByCategory,
    refreshProjects,
  };
};
