import { Server, Cloud, GraduationCap, Wrench } from "lucide-react";
import type { SkillItemData } from "@/app/types/skills";

export const SKILL_CATEGORIES = {
  technologies: {
    id: "technologies",
    titleKey: "skills.backend.title",
    icon: Server,
    accentColors: {
      primary: "from-primary-500",
      secondary: "to-primary-600",
    },
    skills: [
      { name: "Python", level: "expert" as const },
      { name: "JavaScript", level: "advanced" as const },
      { name: "Dart & Flutter", level: "intermediate" as const },
      { name: "SQL/PLSQL", level: "expert" as const },
      { name: "Django", level: "expert" as const },
      { name: "Celery", level: "advanced" as const },
      { name: "RabbitMQ", level: "advanced" as const },
      { name: "React", level: "intermediate" as const },
    ] satisfies SkillItemData[],
  },
  devops: {
    id: "devops",
    titleKey: "skills.devops.title",
    icon: Cloud,
    accentColors: {
      primary: "from-blue-500",
      secondary: "to-blue-600",
    },
    skills: [
      { name: "GitLab CI/CD", level: "advanced" as const },
      { name: "Jenkins", level: "advanced" as const },
      { name: "Linux", level: "advanced" as const },
      { name: "Supervision & Monitoring", level: "advanced" as const },
      { name: "Déploiement d'applications", level: "advanced" as const },
      { name: "PostgreSQL/MariaDB", level: "advanced" as const },
    ] satisfies SkillItemData[],
  },
  methodology: {
    id: "methodology",
    titleKey: "skills.methodology.title",
    icon: GraduationCap,
    accentColors: {
      primary: "from-purple-500",
      secondary: "to-purple-600",
    },
    skills: [
      { name: "Agile/Scrum", level: "expert" as const },
      { name: "Clean Code", level: "expert" as const },
      { name: "UML et BPMN", level: "advanced" as const },
    ] satisfies SkillItemData[],
  },
  tools: {
    id: "tools",
    titleKey: "skills.tools.title",
    icon: Wrench,
    accentColors: {
      primary: "from-green-500",
      secondary: "to-green-600",
    },
    skills: [
      { name: "Git, GitLab", level: "expert" as const },
      { name: "VS Code", level: "advanced" as const },
      { name: "PyCharm", level: "advanced" as const },
      { name: "Jira", level: "advanced" as const },
      { name: "Postman", level: "advanced" as const },
      { name: "Figma", level: "intermediate" as const },
    ] satisfies SkillItemData[],
  },
} as const;
