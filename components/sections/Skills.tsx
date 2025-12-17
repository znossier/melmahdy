"use client";

import Image from "next/image";
import { Code } from "lucide-react";

import { skillCategories } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  const categories = Object.entries(skillCategories);
  let globalIndex = 0;

  // Map skill names to logo paths and file extensions
  const getSkillLogo = (skillName: string): { name: string; ext: string } | null => {
    const logoMap: { [key: string]: { name: string; ext: string } } = {
      "Python": { name: "python", ext: "png" },
      "R": { name: "R", ext: "png" },
      "SQL": { name: "sql", ext: "png" },
      "C++": { name: "cpp", ext: "png" },
      "TensorFlow": { name: "tensorflow", ext: "png" },
      "Keras": { name: "keras", ext: "png" },
      "Scikit-Learn": { name: "scikit-learn", ext: "png" },
      "XGBoost": { name: "xgboost", ext: "png" },
      "Hadoop": { name: "hadoop", ext: "png" },
      "PySpark": { name: "spark", ext: "png" },
      "H2O": { name: "h2o", ext: "png" },
      "Hive": { name: "apache-hive", ext: "svg" },
      "Power BI": { name: "powerbi", ext: "png" },
      "PyDash": { name: "pydash", ext: "png" },
      "Tableau": { name: "tableau", ext: "png" },
      "Google Analytics": { name: "google-analytics", ext: "png" },
    };
    return logoMap[skillName] || null;
  };

  return (
    <section id="skills" className="scroll-mt-24" aria-label="Skills">
      <AnimatedSection>
        <SectionHeader icon={Code} label="Skills" />
      </AnimatedSection>
      <div className="space-y-8 md:space-y-10">
        {categories.map(([category, skills], categoryIndex) => (
          <AnimatedSection key={category} delay={categoryIndex * 0.1}>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
                {skills.map((skill) => {
                  const index = globalIndex++;
                  const logoName = getSkillLogo(skill);
                  return (
                    <AnimatedSection key={skill} delay={index * 0.03}>
                      <div className="px-2.5 sm:px-3 py-2.5 sm:py-2.5 bg-white/80 border border-gray-200 rounded-lg flex items-center gap-2 text-xs sm:text-sm font-medium transition-all duration-200 active:border-gray-300 active:shadow-sm active:scale-[0.98] cursor-default group whitespace-nowrap touch-manipulation min-h-[40px] sm:min-h-[44px]">
                        {logoName && (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 relative">
                            <Image
                              src={`/tech-stack/${logoName.name}.${logoName.ext}`}
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
                        <span className="group-active:text-gray-900 transition-colors truncate">{skill}</span>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

