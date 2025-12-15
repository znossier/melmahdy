"use client";

import { recognition } from "@/data/content";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import { Award } from "lucide-react";

export default function Recognition() {
  return (
    <section id="recognition" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Recognition and Awards">
      <AnimatedSection>
        <SectionHeader icon={Award} label="Recognition" />
      </AnimatedSection>
      <div className="space-y-6">
        {recognition.map((rec, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="border-l-rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1.5 break-words">
                    {rec.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 break-words">
                    {rec.organization}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-600 flex-shrink-0">
                  {rec.year}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

