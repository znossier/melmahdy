"use client";

import { education } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ExpandableCard from "@/components/ui/ExpandableCard";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Education">
      <AnimatedSection>
        <SectionHeader icon={GraduationCap} label="Education" />
      </AnimatedSection>
      <div className="space-y-4">
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
