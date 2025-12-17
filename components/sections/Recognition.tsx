"use client";

import { recognition } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award } from "lucide-react";
import { spacing, colors, typography } from "@/lib/constants/design";

export default function Recognition() {
  return (
    <section id="recognition" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="Recognition and Awards">
      <AnimatedSection>
        <SectionHeader icon={Award} label="Recognition" />
      </AnimatedSection>
      <div className={spacing.section.gap}>
        {recognition.map((rec, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="border-l-rounded">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className={`${typography.heading.h3} ${typography.weight.semibold} ${colors.text.primary} mb-1.5 break-words`}>
                    {rec.title}
                  </h3>
                  <p className={`${typography.body.base} ${colors.text.tertiary} break-words`}>
                    {rec.organization}
                  </p>
                </div>
                <p className={`${typography.body.base} ${colors.text.tertiary} flex-shrink-0`}>
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

