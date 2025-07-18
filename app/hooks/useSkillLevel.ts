import { useMemo } from "react";
import { useIntl } from "react-intl";
import { Award, Target, Zap, BookOpen, LucideIcon } from "lucide-react";
import type { SkillLevel } from "@/app/types/skills";

interface SkillLevelConfig {
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
  labelKey: string;
  priority: number;
}

const SKILL_LEVEL_CONFIGS: Record<SkillLevel, SkillLevelConfig> = {
  expert: {
    icon: Award,
    color: "text-primary-600 dark:text-primary-400",
    bg: "bg-primary-50 dark:bg-primary-900/20",
    border: "border-primary-200 dark:border-primary-700",
    labelKey: "skills.level.expert",
    priority: 0,
  },
  advanced: {
    icon: Target,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-700",
    labelKey: "skills.level.advanced",
    priority: 1,
  },
  intermediate: {
    icon: BookOpen,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-700",
    labelKey: "skills.level.intermediate",
    priority: 2,
  },
  beginner: {
    icon: Zap,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-700",
    labelKey: "skills.level.beginner",
    priority: 3,
  },
} as const;

export function useSkillLevelConfig(level: SkillLevel) {
  const intl = useIntl();

  return useMemo(() => {
    const config = SKILL_LEVEL_CONFIGS[level];
    return {
      ...config,
      label: intl.formatMessage({ id: config.labelKey }),
    };
  }, [level, intl]);
}

export function sortSkillsByLevel<T extends { level: SkillLevel }>(
  skills: T[],
): T[] {
  return [...skills].sort(
    (a, b) =>
      SKILL_LEVEL_CONFIGS[a.level].priority -
      SKILL_LEVEL_CONFIGS[b.level].priority,
  );
}
