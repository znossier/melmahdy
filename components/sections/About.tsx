"use client";

import { about } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { User } from "lucide-react";
import { spacing, colors, typography } from "@/lib/constants/design";

export default function About() {
  return (
    <section id="about" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="About">
      <AnimatedSection>
        <SectionHeader icon={User} label="About" />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className={`${typography.body.base} leading-relaxed ${colors.text.secondary} max-w-3xl break-words`}>
          {about}
        </p>
      </AnimatedSection>
    </section>
  );
}

