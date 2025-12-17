import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
}

export default function SectionHeader({ icon: Icon, label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon className="w-4 h-4 text-gray-500" />
      <h2 className="text-sm sm:text-base uppercase tracking-wider text-gray-500 font-semibold">
        {label}
      </h2>
    </div>
  );
}
