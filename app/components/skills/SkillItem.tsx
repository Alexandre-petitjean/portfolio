import { memo } from "react";
import { useIntl } from "react-intl";
import { Award, Target, Zap } from "lucide-react";

interface SkillItemProps {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}

const SkillItem = memo(function SkillItem({ name, level }: SkillItemProps) {
  const intl = useIntl();

  const levelConfig = {
    expert: {
      icon: <Award className="w-4 h-4" />,
      color: "text-primary-600 dark:text-primary-400",
      bg: "bg-primary-50 dark:bg-primary-900/20",
      border: "border-primary-200 dark:border-primary-700",
      label: intl.formatMessage({ id: "skills.level.expert" }),
    },
    advanced: {
      icon: <Target className="w-4 h-4" />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      label: intl.formatMessage({ id: "skills.level.advanced" }),
    },
    intermediate: {
      icon: <Zap className="w-4 h-4" />,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700",
      label: intl.formatMessage({ id: "skills.level.intermediate" }),
    },
  };

  const config = levelConfig[level];

  return (
    <div className="group relative p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
          {name}
        </h4>
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color} ${config.border} border`}
        >
          {config.icon}
          <span>{config.label}</span>
        </div>
      </div>
    </div>
  );
});

export default SkillItem;
