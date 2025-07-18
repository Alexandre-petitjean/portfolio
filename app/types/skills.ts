export type SkillLevel = "expert" | "advanced" | "intermediate" | "beginner";

export interface SkillItemData {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: SkillItemData[];
}
