"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import Logo from "./ui/Logo";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function LogoContainer({ logoName }: { logoName: string }) {
  return (
    <div className="absolute -left-[26px] md:-left-[34px] top-0 z-10">
      <Logo logoName={logoName} size="sm" />
    </div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Professional Experience">
      <AnimatedSection>
        <SectionHeader icon={Briefcase} label="Experience" />
      </AnimatedSection>
      <div className="relative pl-6 md:pl-8">
        {/* Timeline vertical line */}
        {experience.length > 0 && (
          <div className="absolute left-0 top-5 bottom-5 w-0.5 bg-gray-200" aria-hidden="true" />
        )}
        
        <div className="space-y-4">
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
                      className={`bg-white/50 border border-gray-100 rounded-xl p-4 md:p-5 transition-all relative ${
                        hasExpandableContent ? 'cursor-pointer hover:bg-white/80 hover:border-gray-200' : ''
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
                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-1.5 text-gray-900 break-words">
                          {exp.company}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-2 break-words">
                          {exp.position}
                        </p>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="flex items-center gap-3 flex-wrap">
                            <p className="text-xs sm:text-sm text-gray-500">
                              {exp.startDate} - {exp.endDate}
                            </p>
                            {exp.location && (
                              <>
                                <span className="text-xs sm:text-sm text-gray-500">•</span>
                                <p className="text-xs sm:text-sm text-gray-500">{exp.location}</p>
                              </>
                            )}
                            {exp.jobType && (
                              <>
                                <span className="text-xs sm:text-sm text-gray-500">•</span>
                                <p className="text-xs sm:text-sm text-gray-500">{exp.jobType}</p>
                              </>
                            )}
                          </div>
                          {hasExpandableContent && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedIndex(isExpanded ? null : index);
                              }}
                              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors px-2 py-1.5 text-xs font-medium flex-shrink-0"
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
                              <ul className="list-disc list-outside space-y-1.5 text-sm text-gray-700 leading-relaxed pl-5">
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

