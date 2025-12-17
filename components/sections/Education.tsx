"use client";

import { education } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ExpandableCard from "@/components/ui/ExpandableCard";
import { GraduationCap } from "lucide-react";
import { spacing } from "@/lib/constants/design";

export default function Education() {
  return (
    <section id="education" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="Education">
      <AnimatedSection>
        <SectionHeader icon={GraduationCap} label="Education" />
      </AnimatedSection>
      <div className={spacing.card.gap}>
        {education.map((edu, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <ExpandableCard
              logo={edu.logo || edu.institution.toLowerCase().replace(/\s+/g, "")}
              title={edu.institution}
              subtitle={edu.degree}
              date={`${edu.startDate} - ${edu.endDate}`}
              bullets={edu.bullets}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
