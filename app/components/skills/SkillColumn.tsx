import { memo, useMemo } from "react";
import { sortSkillsByLevel } from "@/app/hooks/useSkillLevel";
import SkillItem from "./SkillItem";
import type { SkillItemData } from "@/app/types/skills";

interface SkillColumnProps {
  title: string;
  icon: React.ReactNode;
  accentColors: {
    primary: string;
    secondary: string;
  };
  skills: SkillItemData[];
  "aria-label"?: string;
}

const SkillColumn = memo(function SkillColumn({
  title,
  icon,
  accentColors,
  skills,
  "aria-label": ariaLabel,
}: SkillColumnProps) {
  const sortedSkills = useMemo(() => sortSkillsByLevel(skills), [skills]);

  const gradientLineStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(to bottom, ${accentColors.primary}, transparent)`,
    }),
    [accentColors.primary],
  );

  const iconContainerStyle = useMemo(
    () => ({
      backgroundImage: `linear-gradient(to bottom right, ${accentColors.primary}, ${accentColors.secondary})`,
    }),
    [accentColors.primary, accentColors.secondary],
  );

  return (
    <section className="relative" aria-label={ariaLabel || `${title} skills`}>
      <div
        className="absolute left-8 top-16 bottom-0 w-0.5"
        style={gradientLineStyle}
        aria-hidden="true"
      />

      <div className="relative flex gap-6 mb-12">
        <div
          className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={iconContainerStyle}
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h3>

          <ul className="space-y-4" role="list">
            {sortedSkills.map((skill) => (
              <SkillItem
                key={`${skill.name}-${skill.level}`}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default SkillColumn;
