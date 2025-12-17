import { LucideIcon } from "lucide-react";
import { colors, typography } from "@/lib/constants/design";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
}

export default function SectionHeader({ icon: Icon, label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon className={`w-4 h-4 ${colors.text.muted}`} />
      <h2 className={`${typography.body.base} uppercase tracking-wider ${colors.text.muted} ${typography.weight.semibold}`}>
        {label}
      </h2>
    </div>
  );
}
