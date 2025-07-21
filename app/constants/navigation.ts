import { Home, Briefcase, GraduationCap, Code, User, Mail } from "lucide-react";

export const navItems = [
  { href: "#hero", i18nKey: "nav.home", icon: Home },
  { href: "#offers", i18nKey: "nav.services", icon: Briefcase },
  { href: "#skills", i18nKey: "nav.skills", icon: GraduationCap },
  { href: "#projects", i18nKey: "nav.projects", icon: Code },
  { href: "#about", i18nKey: "nav.about", icon: User },
  { href: "#contact", i18nKey: "nav.contact", icon: Mail, isButton: true },
];
