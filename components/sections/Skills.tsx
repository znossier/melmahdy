"use client";

import { skillCategories } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { Code } from "lucide-react";
import Image from "next/image";
import { spacing, colors, borderRadius, typography, components } from "@/lib/constants/design";

export default function Skills() {
  const categories = Object.entries(skillCategories);
  let globalIndex = 0;

  // Map skill names to logo paths
  const getSkillLogo = (skillName: string): string | null => {
    const logoMap: { [key: string]: string } = {
      "Python": "python",
      "SQL": "sql",
      "C++": "cpp",
      "TensorFlow": "tensorflow",
      "Keras": "keras",
      "Scikit-Learn": "scikit-learn",
      "Hadoop": "hadoop",
      "PySpark": "spark",
      "H2O": "h2o",
      "Power BI": "powerbi",
    };
    return logoMap[skillName] || null;
  };

  return (
    <section id="skills" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="Skills">
      <div className={components.section.wrapper}>
        <AnimatedSection>
          <SectionHeader icon={Code} label="Skills" />
        </AnimatedSection>
        <div className="space-y-8 md:space-y-10">
          {categories.map(([category, skills], categoryIndex) => (
            <AnimatedSection key={category} delay={categoryIndex * 0.1}>
              <div>
                <h3 className={`${typography.label.category} mb-4`}>{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  {skills.map((skill) => {
                    const index = globalIndex++;
                    const logoName = getSkillLogo(skill);
                    return (
                      <AnimatedSection key={skill} delay={index * 0.03}>
                        <div className={`px-2.5 sm:px-3 py-2 sm:py-2.5 ${colors.background.cardHover} border ${colors.border.default} ${borderRadius.card} flex items-center gap-2 ${typography.body.small} ${typography.weight.medium} transition-all duration-200 ${components.card.hover} cursor-default group whitespace-nowrap`}>
                          {logoName && (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 relative">
                              <Image
                                src={`/tech-stack/${logoName}.png`}
                                alt={skill}
                                width={20}
                                height={20}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          <span className="group-hover:text-gray-900 transition-colors">{skill}</span>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

