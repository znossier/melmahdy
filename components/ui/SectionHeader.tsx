import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
}

export default function SectionHeader({ icon: Icon, label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-5">
      <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
      <h2 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold">
        {label}
      </h2>
    </div>
  );
}
