import { memo } from "react";
import SkillItem from "./SkillItem";

interface SkillColumnProps {
  title: string;
  icon: React.ReactNode;
  accent: string;
  skills: { name: string; level: "expert" | "advanced" | "intermediate" }[];
}

const SkillColumn = memo(function SkillColumn({
  title,
  icon,
  accent,
  skills,
}: SkillColumnProps) {
  const sortedSkills = skills.sort((a, b) => {
    const levels = ["expert", "advanced", "intermediate", "notion"];
    return levels.indexOf(a.level) - levels.indexOf(b.level);
  });

  return (
    <div className="relative">
      <div
        className={`absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b ${accent.replace("bg-gradient-to-br", "from")} to-transparent`}
      ></div>
      <div className="relative flex gap-6 mb-12">
        <div
          className={`flex-shrink-0 w-16 h-16 rounded-2xl ${accent} flex items-center justify-center shadow-lg`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h3>
          <div className="space-y-4">
            {sortedSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SkillColumn;
