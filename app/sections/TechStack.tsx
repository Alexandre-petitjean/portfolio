"use client";

import { Server, Cloud, GraduationCap, Sparkles, Wrench } from "lucide-react";
import { useIntl } from "react-intl";
import SkillColumn from "@/app/components/skills/SkillColumn";

export default function TechStack() {
  const intl = useIntl();

  const backendSkills = [
    { name: "Python", level: "expert" as const },
    { name: "JavaScript", level: "advanced" as const },
    { name: "Dart & Flutter", level: "intermediate" as const },
    { name: "SQL/PLSQL", level: "expert" as const },
    { name: "Django", level: "expert" as const },
    { name: "Celery", level: "advanced" as const },
    { name: "RabbitMQ", level: "advanced" as const },
    { name: "React", level: "intermediate" as const },
  ];

  const devopsSkills = [
    { name: "GitLab CI/CD", level: "advanced" as const },
    { name: "Jenkins", level: "advanced" as const },
    { name: "Linux", level: "advanced" as const },
    { name: "Supervision & Monitoring", level: "advanced" as const },
    { name: "Déploiement d'applications", level: "advanced" as const },
    { name: "PostgreSQL/MariaDB", level: "advanced" as const },
  ];

  const methodologySkills = [
    { name: "Agile/Scrum", level: "expert" as const },
    { name: "Clean Code", level: "expert" as const },
    { name: "UML et BPMN", level: "advanced" as const },
  ];

  const toolsSkills = [
    { name: "Git, GitLab", level: "expert" as const },
    { name: "VS Code", level: "advanced" as const },
    { name: "PyCharm", level: "advanced" as const },
    { name: "Jira", level: "advanced" as const },
    { name: "Postman", level: "advanced" as const },
    { name: "Figma", level: "intermediate" as const },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {intl.formatMessage({ id: "skills.badge" })}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            {intl.formatMessage({ id: "skills.title" })}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              {intl.formatMessage({ id: "skills.description" })}
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {intl.formatMessage({ id: "skills.subtitle" })}
          </p>
        </div>

        <div className="max-w-full mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <SkillColumn
              title="Technologies"
              icon={<Server className="w-6 h-6 text-white" />}
              accent="bg-gradient-to-br from-primary-500 to-primary-600"
              skills={backendSkills}
            />
            <SkillColumn
              title="DevOps"
              icon={<Cloud className="w-6 h-6 text-white" />}
              accent="bg-gradient-to-br from-blue-500 to-blue-600"
              skills={devopsSkills}
            />
            <SkillColumn
              title="Méthodologie"
              icon={<GraduationCap className="w-6 h-6 text-white" />}
              accent="bg-gradient-to-br from-purple-500 to-purple-600"
              skills={methodologySkills}
            />
            <SkillColumn
              title="Outils"
              icon={<Wrench className="w-6 h-6 text-white" />}
              accent="bg-gradient-to-br from-green-500 to-green-600"
              skills={toolsSkills}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
