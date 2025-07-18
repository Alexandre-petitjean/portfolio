"use client";

import { useIntl } from "react-intl";
import { Sparkles } from "lucide-react";
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <SkillColumn
                key={category.id}
                title={intl.formatMessage({ id: category.titleKey })}
                icon={<IconComponent className="w-6 h-6 text-white" />}
                accentColors={category.accentColors}
                skills={category.skills}
                aria-label={`${intl.formatMessage({ id: category.titleKey })} skills section`}
              />
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary-50/70 to-white/70 dark:from-primary-900/30 dark:to-gray-900/30 backdrop-blur-sm border border-primary-500/30 rounded-3xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-3xl" />

          <div className="relative text-center">
            <div className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400">
              <Sparkles className="w-full h-full" />
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {intl.formatMessage({ id: "skills.experience.title" })}
              <span className="block w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {intl.formatMessage({ id: "skills.experience.description" })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
