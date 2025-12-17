"use client";

import { personalInfo } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section id="hero" className="mb-12 md:mb-16">
      <AnimatedSection>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hello, I&apos;m {personalInfo.name}.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700">
            {personalInfo.title}
          </p>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute w-2 h-2 border-2 border-green-500/90 rounded-full animate-pulse-ring"></div>
              <div className="relative w-2 h-2 bg-green-500 rounded-full z-10"></div>
            </div>
            <p className="text-base sm:text-lg">{personalInfo.status}</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

