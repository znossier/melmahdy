"use client";

import { about } from "@/data/content";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mb-12 md:mb-16 scroll-mt-24" aria-label="About">
      <AnimatedSection>
        <SectionHeader icon={User} label="About" />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-sm sm:text-base leading-relaxed sm:leading-relaxed text-gray-700 max-w-3xl break-words">
          {about}
        </p>
      </AnimatedSection>
    </section>
  );
}

