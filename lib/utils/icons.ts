import { User, Code, Layers, Briefcase, GraduationCap, BookOpen, Award, LucideIcon } from "lucide-react";

// Icon mapping for navigation and sections
const iconMap: { [key: string]: LucideIcon } = {
  User,
  Code,
  Layers,
  Briefcase,
  GraduationCap,
  BookOpen,
  Award,
};

/**
 * Get icon component by name
 * @param iconName - Name of the icon (e.g., "User", "Code")
 * @returns LucideIcon component or User as default
 */
export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || User;
}
