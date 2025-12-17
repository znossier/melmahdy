"use client";

import { Award, Calendar, Building2 } from "lucide-react";

import { recognition } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Recognition() {
  return (
    <section id="recognition" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Recognition and Awards">
      <AnimatedSection>
        <SectionHeader icon={Award} label="Recognition" />
      </AnimatedSection>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {recognition.map((rec, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                {/* Icon */}
                <div className="p-3 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl flex-shrink-0 group-hover:from-amber-100 group-hover:to-amber-200/50 transition-all duration-300 shadow-sm border border-amber-200/30">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 break-words leading-tight group-hover:text-amber-900 transition-colors">
                        {rec.title}
                      </h3>
                      <div className="flex items-start gap-2.5">
                        <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm sm:text-base text-gray-600 break-words">
                          {rec.organization}
                        </p>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-amber-50 to-amber-100/80 text-amber-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-amber-200/50 flex-shrink-0">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      <span>{rec.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
