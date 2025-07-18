import { Server, Cloud, GraduationCap, Wrench, Monitor } from "lucide-react";
import type { SkillItemData } from "@/app/types/skills";

export const SKILL_CATEGORIES = {
  backend: {
    id: "backend",
    titleKey: "skills.backend.title",
    icon: Server,
    accentColors: {
      primary: "#3b82f6", // blue-500
      secondary: "#2563eb", // blue-600
    },
    skills: [
      { name: "Python & Django", level: "expert" as const },
      { name: "SQL/PLSQL", level: "advanced" as const },
      { name: "Celery", level: "advanced" as const },
      { name: "RabbitMQ", level: "advanced" as const },
      { name: "PostgreSQL & MariaDB", level: "advanced" as const },
    ] satisfies SkillItemData[],
  },
  frontend: {
    id: "frontend",
    titleKey: "skills.frontend.title",
    icon: Monitor,
    accentColors: {
      primary: "#6366f1", // indigo-500
      secondary: "#4f46e5", // indigo-600
    },
    skills: [
      { name: "JavaScript, Jquery", level: "advanced" as const },
      { name: "Bootstrap & Tailwindcss", level: "advanced" as const },
      { name: "React", level: "beginner" as const },
      { name: "Dart & Flutter", level: "intermediate" as const },
    ] satisfies SkillItemData[],
  },
  devops: {
    id: "devops",
    titleKey: "skills.devops.title",
    icon: Cloud,
    accentColors: {
      primary: "#3b82f6", // blue-500
      secondary: "#2563eb", // blue-600
    },
    skills: [
      { name: "GitLab CI/CD", level: "advanced" as const },
      { name: "Jenkins", level: "intermediate" as const },
      { name: "Linux", level: "advanced" as const },
      { name: "Supervision & Monitoring", level: "advanced" as const },
      { name: "Application Deployment", level: "advanced" as const },
    ] satisfies SkillItemData[],
  },
  methodology: {
    id: "methodology",
    titleKey: "skills.methodology.title",
    icon: GraduationCap,
    accentColors: {
      primary: "#8b5cf6", // purple-500
      secondary: "#7c3aed", // purple-600
    },
    skills: [
      { name: "Agile/Scrum", level: "expert" as const },
      { name: "Clean Code", level: "expert" as const },
      { name: "UML & BPMN", level: "advanced" as const },
    ] satisfies SkillItemData[],
  },
  tools: {
    id: "tools",
    titleKey: "skills.tools.title",
    icon: Wrench,
    accentColors: {
      primary: "#10b981", // green-500
      secondary: "#059669", // green-600
    },
    skills: [
      { name: "Git, GitLab", level: "expert" as const },
      { name: "VS Code & Jetbrain IDE", level: "advanced" as const },
      { name: "Jira & Confuence", level: "advanced" as const },
      { name: "Postman", level: "intermediate" as const },
      { name: "Figma", level: "beginner" as const },
    ] satisfies SkillItemData[],
  },
} as const;
