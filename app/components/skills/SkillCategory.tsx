"use client";

import { LucideIcon } from "lucide-react";
import { useIntl } from "react-intl";
import { memo } from "react";

export type SkillLevel = "expert" | "advanced" | "intermediate";

interface SkillItemProps {
  name: string;
  level: SkillLevel;
  className?: string;
}

interface SkillCategoryProps {
  icon: LucideIcon;
  titleKey: string;
  skills: SkillItemProps[];
  gradient: {
    from: string;
    to: string;
  };
  iconColor: string;
  hoverColor: string;
}

const SkillItem = memo(function SkillItem({ name, level, className = "" }: SkillItemProps) {
  const intl = useIntl();

  const levelConfig = {
    expert: {
      label: intl.formatMessage({ id: "skills.level.expert" }),
      bgColor: "bg-primary-500/20",
      textColor: "text-primary-700 dark:text-primary-300",
      borderColor: "border-primary-400/30"
    },
    advanced: {
      label: intl.formatMessage({ id: "skills.level.advanced" }),
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-700 dark:text-blue-300",
      borderColor: "border-blue-400/30"
    },
    intermediate: {
      label: intl.formatMessage({ id: "skills.level.intermediate" }),
      bgColor: "bg-gray-500/20",
      textColor: "text-gray-600 dark:text-gray-400",
      borderColor: "border-gray-400/30"
    }
  };

  const config = levelConfig[level];

  return (
    <div className={`flex items-center justify-between p-3 rounded-xl bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:shadow-sm ${className}`}>
      <span className="text-gray-700 dark:text-gray-300 font-medium">
        {name}
      </span>
      <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${config.bgColor} ${config.textColor} ${config.borderColor}`}>
        {config.label}
      </span>
    </div>
  );
});

export const SkillCategory = memo(function SkillCategory({
  icon: Icon,
  titleKey,
  skills,
  gradient,
  iconColor,
  hoverColor
}: SkillCategoryProps) {
  const intl = useIntl();

  return (
    <div className="group relative p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-xl hover:border-primary-500/40 dark:hover:border-primary-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative">
        <div className="flex items-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${gradient.from} ${gradient.to} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          <h3 className={`ml-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:${hoverColor} transition-colors duration-300`}>
            {intl.formatMessage({ id: titleKey })}
          </h3>
        </div>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <SkillItem
              key={`${skill.name}-${index}`}
              name={skill.name}
              level={skill.level}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

SkillItem.displayName = "SkillItem";
SkillCategory.displayName = "SkillCategory";
