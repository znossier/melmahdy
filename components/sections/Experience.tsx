"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Logo from "@/components/ui/Logo";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { spacing, colors, borderRadius, typography, components } from "@/lib/constants/design";

function LogoContainer({ logoName }: { logoName: string }) {
  return (
    <div className={`absolute ${spacing.timeline.logoOffset.mobile} ${spacing.timeline.logoOffset.desktop} top-0 z-10`}>
      <Logo logoName={logoName} size="sm" />
    </div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="Professional Experience">
      <AnimatedSection>
        <SectionHeader icon={Briefcase} label="Experience" />
      </AnimatedSection>
      <div className={`relative ${spacing.timeline.containerPadding}`}>
        {/* Timeline vertical line - centered through logos */}
        {experience.length > 0 && (
          <div className="absolute left-[-5px] md:left-[-13px] top-5 bottom-5 w-0.5 bg-gray-200" aria-hidden="true" />
        )}
        
        <div className={spacing.card.gap}>
          {experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const hasExpandableContent = (exp.bullets && exp.bullets.length > 0);
            const logoName = exp.logo || exp.company.toLowerCase();
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative">
                  {/* Timeline dot with logo */}
                  <LogoContainer logoName={logoName} />
                  
                  {/* Content card */}
                  <div className="ml-6 md:ml-8">
                    <div 
                      className={`${colors.background.card} border ${colors.border.light} ${borderRadius.card} ${spacing.card.padding} transition-all relative ${
                        hasExpandableContent ? `${components.card.interactive} ${components.card.hover}` : ''
                      }`}
                      onClick={() => hasExpandableContent && setExpandedIndex(isExpanded ? null : index)}
                      role={hasExpandableContent ? "button" : undefined}
                      aria-expanded={hasExpandableContent ? isExpanded : undefined}
                      tabIndex={hasExpandableContent ? 0 : undefined}
                      onKeyDown={(e) => {
                        if (hasExpandableContent && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          setExpandedIndex(isExpanded ? null : index);
                        }
                      }}
                    >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className={`${typography.heading.h3} ${typography.weight.semibold} mb-1 sm:mb-1.5 ${colors.text.primary} break-words`}>
                          {exp.company}
                        </h3>
                        <p className={`${typography.body.base} ${colors.text.tertiary} mb-2 break-words`}>
                          {exp.position}
                        </p>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-3 flex-wrap">
                            <p className={`${typography.body.small} ${colors.text.muted}`}>
                              {exp.startDate} - {exp.endDate}
                            </p>
                            {exp.location && (
                              <>
                                <span className={`${typography.body.small} ${colors.text.muted}`}>•</span>
                                <p className={`${typography.body.small} ${colors.text.muted}`}>{exp.location}</p>
                              </>
                            )}
                            {exp.jobType && (
                              <>
                                <span className={`${typography.body.small} ${colors.text.muted}`}>•</span>
                                <p className={`${typography.body.small} ${colors.text.muted}`}>{exp.jobType}</p>
                              </>
                            )}
                          </div>
                          {hasExpandableContent && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedIndex(isExpanded ? null : index);
                              }}
                              className={`flex items-center gap-1.5 ${colors.text.muted} hover:text-gray-700 transition-colors px-2 py-1.5 ${typography.body.tiny} ${typography.weight.medium} flex-shrink-0`}
                              aria-label={isExpanded ? "Collapse details" : "Expand details"}
                            >
                              {isExpanded ? (
                                <>
                                  <span>Less</span>
                                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                                </>
                              ) : (
                                <>
                                  <span>More</span>
                                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && hasExpandableContent && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
                            {exp.bullets && exp.bullets.length > 0 && (
                              <ul className={`list-disc list-outside space-y-1.5 ${typography.body.base} ${colors.text.secondary} leading-relaxed pl-5`}>
                                {exp.bullets.map((bullet, bulletIndex) => (
                                  <li key={bulletIndex} className="break-words pl-1">{bullet}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
        </div>
      </div>
    </section>
  );
}

