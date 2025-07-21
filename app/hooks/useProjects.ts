import { useState, useEffect } from "react";
import { Project } from "@/app/types/project";

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

// Données mockées pour les projets - MISE À JOUR AVEC NOUVEAUX TYPES
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Personnel",
    slug: "portfolio-personnel",
    description: "Portfolio moderne développé avec Next.js et TypeScript",
    longDescription:
      "Un portfolio responsive et moderne utilisant les dernières technologies web. Intègre des animations fluides, un design adaptatif et une architecture optimisée pour les performances.",
    image: "/projects/placeholder.svg", // Legacy support
    images: {
      thumbnail: "/projects/placeholder.svg",
      alt: "Aperçu du portfolio personnel avec design moderne",
      gallery: ["/projects/placeholder.svg"],
    },
    technologies: [
      { name: "Next.js", category: "framework" },
      { name: "TypeScript", category: "language" },
      { name: "Tailwind CSS", category: "styling" },
      { name: "Framer Motion", category: "animation" },
    ],
    status: "in_progress", // Corrigé selon nouveaux types
    category: "web",
    startDate: "2024-01-15",
    links: {
      github: "https://github.com/example/portfolio",
      demo: "https://portfolio.example.com",
    },
    // Legacy support
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio.example.com",
    teamSize: 1,
    featured: true,
    challenges: [
      "Optimisation des performances avec Next.js",
      "Implémentation d'animations complexes",
      "Design responsive sur tous les appareils",
    ],
    achievements: [
      "Score Lighthouse de 95+",
      "Temps de chargement < 2s",
      "Interface utilisateur intuitive",
    ],
    metadata: {
      views: 1250,
      likes: 45,
      stars: 12,
      created_at: "2024-01-15T00:00:00Z",
      updated_at: "2024-12-15T00:00:00Z",
      featured_until: "2025-01-31T00:00:00Z",
    },
  },
  {
    id: "2",
    title: "API Django E-commerce",
    slug: "api-django-ecommerce",
    description: "API REST complète pour une plateforme e-commerce avec Django",
    longDescription:
      "API robuste développée avec Django REST Framework pour gérer un système e-commerce complet. Inclut la gestion des produits, commandes, paiements et utilisateurs.",
    image: "/projects/placeholder.svg",
    images: {
      thumbnail: "/projects/placeholder.svg",
      alt: "Architecture API Django pour e-commerce",
      gallery: [],
    },
    technologies: [
      { name: "Django", category: "framework" },
      { name: "Django REST Framework", category: "framework" },
      { name: "PostgreSQL", category: "database" },
      { name: "Redis", category: "cache" },
      { name: "Celery", category: "task-queue" },
    ],
    status: "completed",
    category: "api",
    startDate: "2023-06-01",
    endDate: "2023-12-15",
    links: {
      github: "https://github.com/example/ecommerce-api",
      docs: "https://api-docs.example.com",
    },
    githubUrl: "https://github.com/example/ecommerce-api",
    teamSize: 3,
    featured: false,
    challenges: [
      "Gestion des transactions complexes",
      "Optimisation des requêtes SQL",
      "Architecture microservices",
    ],
    achievements: [
      "Support de 10k+ utilisateurs simultanés",
      "API documentée avec Swagger",
      "Couverture de tests à 95%",
    ],
    metadata: {
      views: 850,
      likes: 32,
      stars: 8,
      created_at: "2023-06-01T00:00:00Z",
      updated_at: "2023-12-15T00:00:00Z",
    },
  },
  {
    id: "3",
    title: "Application Mobile React Native",
    slug: "app-mobile-react-native",
    description: "Application mobile cross-platform avec React Native",
    longDescription:
      "Application mobile moderne développée avec React Native pour iOS et Android. Interface utilisateur native et performances optimisées.",
    image: "/projects/placeholder.svg",
    images: {
      thumbnail: "/projects/placeholder.svg",
      alt: "Interface mobile React Native moderne",
      gallery: [],
    },
    technologies: [
      { name: "React Native", category: "framework" },
      { name: "TypeScript", category: "language" },
      { name: "Redux Toolkit", category: "state-management" },
      { name: "Expo", category: "platform" },
    ],
    status: "paused",
    category: "mobile",
    startDate: "2024-03-01",
    links: {
      github: "https://github.com/example/mobile-app",
    },
    teamSize: 2,
    featured: false,
    challenges: [
      "Synchronisation offline/online",
      "Performance sur les anciens appareils",
      "Navigation native complexe",
    ],
    metadata: {
      views: 420,
      likes: 18,
      created_at: "2024-03-01T00:00:00Z",
      updated_at: "2024-06-01T00:00:00Z",
    },
  },
];

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulation d'un appel API
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Simulation de délai d'API
        await new Promise((resolve) => setTimeout(resolve, 800));
        setProjects(mockProjects);
        setError(null);
      } catch (err) {
        setError("Erreur lors du chargement des projets");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}
