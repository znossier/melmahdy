"use client";

import Image from "next/image";
import { getLogoPath, getLogoStyle } from "@/lib/utils/logo";

interface LogoProps {
  logoName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12 sm:w-14 sm:h-14",
  lg: "w-16 h-16 sm:w-20 sm:h-20",
};

export default function Logo({ logoName, size = "md", className = "" }: LogoProps) {
  const logoPath = getLogoPath(logoName);
  const style = getLogoStyle(logoName);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent && !parent.querySelector(".fallback-content")) {
      if (typeof document === 'undefined') return;
      const fallback = document.createElement("div");
      fallback.className = "fallback-content absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 font-bold text-xs rounded-full";
      if (style.icon) {
        fallback.innerHTML = `<div class="flex flex-col items-center"><span class="text-sm">${style.icon}</span><span class="text-[10px]">${style.content}</span></div>`;
      } else {
        fallback.innerHTML = `<span class="text-xs">${style.content}</span>`;
      }
      parent.appendChild(fallback);
    }
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center relative overflow-hidden bg-white border-2 border-gray-200 flex-shrink-0 ${className}`}>
      <Image
        src={logoPath}
        alt={logoName}
        width={48}
        height={48}
        className="w-full h-full object-cover rounded-full"
        onError={handleImageError}
      />
    </div>
  );
}
