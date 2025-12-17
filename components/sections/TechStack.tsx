"use client";

import Image from "next/image";
import { Layers } from "lucide-react";

import { techStack } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TechStack() {

  const getTechLogo = (logoName: string, techName: string) => {
    // Map logo names to their actual file names and extensions
    const logoMap: { [key: string]: { file: string; ext: string } } = {
      h2o: { file: "h2o", ext: "png" },
      powerbi: { file: "powerbi", ext: "png" },
      hadoop: { file: "hadoop", ext: "png" },
      spark: { file: "spark", ext: "png" },
      "google-analytics": { file: "google-analytics", ext: "png" },
      informatica: { file: "informatica", ext: "png" },
      vscode: { file: "vs-code", ext: "png" },
      git: { file: "git", ext: "png" },
      jupyter: { file: "jupyter", ext: "png" },
      "google-colab": { file: "google-colab", ext: "png" },
    };

    const logoInfo = logoMap[logoName.toLowerCase()] || { file: logoName.toLowerCase(), ext: "png" };
    const logoPath = `/tech-stack/${logoInfo.file}.${logoInfo.ext}`;

    const logos: { [key: string]: { text: string; color: string; size: string } } = {
      h2o: { text: "H2O.ai", color: "text-black", size: "text-xs" },
      keras: { text: "K", color: "text-white", size: "text-lg" },
      cpp: { text: "C++", color: "text-white", size: "text-sm" },
      python: { text: "Py", color: "text-white", size: "text-sm" },
      tensorflow: { text: "TF", color: "text-white", size: "text-sm" },
      powerbi: { text: "PBI", color: "text-black", size: "text-xs" },
      hadoop: { text: "H", color: "text-black", size: "text-lg" },
      spark: { text: "S", color: "text-white", size: "text-lg" },
      sql: { text: "SQL", color: "text-white", size: "text-xs" },
      "scikit-learn": { text: "sk", color: "text-white", size: "text-xs" },
      "google-analytics": { text: "GA", color: "text-white", size: "text-sm" },
      informatica: { text: "Inf", color: "text-white", size: "text-sm" },
      vscode: { text: "VS", color: "text-white", size: "text-sm" },
      git: { text: "Git", color: "text-white", size: "text-xs" },
      jupyter: { text: "J", color: "text-white", size: "text-lg" },
      "google-colab": { text: "Colab", color: "text-white", size: "text-xs" },
    };

    const logo = logos[logoName.toLowerCase()] || {
      text: "?",
      color: "text-white",
      size: "text-sm",
    };

    return (
      <div className="relative">
        <div
          className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg sm:rounded-xl flex items-center justify-center bg-white border border-gray-200 shadow-sm relative overflow-hidden flex-shrink-0"
        >
          <Image
            src={logoPath}
            alt={techName}
            width={64}
            height={64}
            className="w-full h-full object-contain p-1.5 sm:p-2"
            onError={(e) => {
              // Fallback to text if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const fallback = document.createElement('div');
                fallback.className = `fallback-text absolute inset-0 flex items-center justify-center bg-gray-200 ${logo.color} font-bold ${logo.size}`;
                fallback.textContent = logo.text;
                parent.appendChild(fallback);
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="tech-stack" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Tech Stack">
      <AnimatedSection>
        <SectionHeader icon={Layers} label="Tech Stack" />
      </AnimatedSection>
      <div className="overflow-hidden relative">
        {/* Enhanced gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-gray-50 via-gray-50/70 via-gray-50/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-gray-50 via-gray-50/70 via-gray-50/30 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container with hover slow-down */}
        <div className="flex animate-scroll hover:animate-scroll-slow transition-all duration-300">
          {/* First set of items */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4">
            {techStack.map((tech, index) => (
              <div key={`first-${index}`} className="flex flex-col items-center flex-shrink-0">
                {getTechLogo(tech.logo, tech.name)}
                <span className="mt-1.5 sm:mt-2 text-xs text-gray-600 font-medium text-center leading-tight whitespace-nowrap max-w-[80px] sm:max-w-none truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4">
            {techStack.map((tech, index) => (
              <div key={`second-${index}`} className="flex flex-col items-center flex-shrink-0">
                {getTechLogo(tech.logo, tech.name)}
                <span className="mt-1.5 sm:mt-2 text-xs text-gray-600 font-medium text-center leading-tight whitespace-nowrap max-w-[80px] sm:max-w-none truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
