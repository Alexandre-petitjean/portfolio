"use client";

import { useIntl } from "react-intl";
// import { Sparkles } from "lucide-react"; // Commenté car non utilisé pour le moment
import SkillColumn from "@/app/components/skills/SkillColumn";
import { SKILL_CATEGORIES } from "@/app/constants/skillsData";

export default function TechStack() {
  const intl = useIntl();

  const skillCategories = Object.values(SKILL_CATEGORIES);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-primary-50/90 dark:from-slate-900/90 dark:via-gray-800/60 dark:to-primary-900/90" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 dark:opacity-10" />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20">
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {intl.formatMessage({ id: "skills.badge" })}
            </span>
          </div>

          <h1
            id="skills-header"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            {intl.formatMessage({ id: "skills.title" })}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent">
              {intl.formatMessage({ id: "skills.description" })}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {intl.formatMessage({ id: "skills.subtitle" })}
          </p>
        </header>

        {/* Skills Grid */}
        <div
          role="region"
          aria-labelledby="skills-header"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <SkillColumn
                key={category.id}
                title={intl.formatMessage({ id: category.titleKey })}
                icon={<IconComponent className="w-6 h-6" />}
                accentColors={category.accentColors}
                skills={category.skills}
                aria-label={`${intl.formatMessage({ id: category.titleKey })} skills section`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
