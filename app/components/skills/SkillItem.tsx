import { memo } from "react";
import { useIntl } from "react-intl";
import { useSkillLevelConfig } from "@/app/hooks/useSkillLevel";
import type { SkillLevel } from "@/app/types/skills";

interface SkillItemProps {
  name: string;
  level: SkillLevel;
  className?: string;
}

const SkillItem = memo(function SkillItem({
  name,
  level,
  className = "",
}: SkillItemProps) {
  const intl = useIntl();
  const config = useSkillLevelConfig(level);
  const IconComponent = config.icon;

  return (
    <div
      className={`group relative p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md ${className}`}
      role="listitem"
      aria-label={`${name} - ${config.label}`}
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
          {name}
        </h4>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.color} ${config.border}`}
          aria-label={`${intl.formatMessage({ id: "skills.level.label" })}: ${config.label}`}
        >
          <IconComponent className="w-3 h-3" />
          <span className="font-medium">{config.label}</span>
        </div>
      </div>
    </div>
  );
});

export default SkillItem;
