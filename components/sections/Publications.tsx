"use client";

import { publications } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, ExternalLink, Calendar, Building2, MapPin, Users } from "lucide-react";
import { spacing, colors, borderRadius, typography, components } from "@/lib/constants/design";

// Helper function to get accent color based on year
const getYearColor = (year: string) => {
  const yearNum = parseInt(year);
  if (yearNum >= 2024) return colors.year["2024+"];
  if (yearNum >= 2022) return colors.year["2022-2023"];
  if (yearNum >= 2020) return colors.year["2020-2021"];
  return colors.year.default;
};

export default function Publications() {
  return (
    <section id="publications" className={`${spacing.section.marginBottom} ${spacing.section.scrollMargin}`} aria-label="Publications">
      <AnimatedSection>
        <SectionHeader icon={BookOpen} label="Publications" />
      </AnimatedSection>
      <div className={spacing.card.gap}>
        {publications.map((pub, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            {pub.link && pub.link !== "#" ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block ${colors.background.gradient} border-l-4 ${pub.year ? getYearColor(pub.year) : colors.accent.blue.border} border ${colors.border.default} ${borderRadius.card} ${spacing.card.paddingLarge} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${components.card.interactive} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                aria-label={`View publication: ${pub.title}`}
              >
                {/* Year Badge */}
                {pub.year && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {pub.year}
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4 pr-20">
                  <div className="p-2.5 bg-blue-50 rounded-lg flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 break-words leading-tight text-gray-900 group-hover:text-gray-800 transition-colors">
                      {pub.title}
                    </h3>
                    
                    {/* Authors */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700 break-words">
                          <span className="font-medium text-gray-900">Authors:</span>{" "}
                          {pub.authors.split(/(El Mahdy, M\. E\.)/gi).map((part, i) => {
                            if (part.match(/El Mahdy, M\. E\./gi)) {
                              return (
                                <span key={i} className="font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                                  {part}
                                </span>
                              );
                            }
                            return part;
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {/* Metadata Grid */}
                    <div className="space-y-2.5 mb-4">
                      {pub.venue && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm sm:text-base text-gray-700 break-words">
                            <span className="font-medium text-gray-900">Venue:</span> {pub.venue}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-start gap-2 flex-wrap">
                        <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-medium text-gray-900">Publisher:</span> {pub.publisher}
                          {pub.pages && <span className="text-gray-600"> • {pub.pages}</span>}
                        </p>
                      </div>
                    </div>
                    
                    {/* Link Button */}
                    <div className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 group-hover:underline transition-colors">
                      View Publication
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div className={`relative ${colors.background.gradient} border-l-4 ${pub.year ? getYearColor(pub.year) : colors.accent.blue.border} border ${colors.border.default} ${borderRadius.card} ${spacing.card.paddingLarge} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                {/* Year Badge */}
                {pub.year && (
                  <div className={`absolute top-4 right-4 px-3 py-1 ${colors.accent.blue.bgHover} ${colors.accent.blue.textDark} rounded-full ${typography.body.tiny} ${typography.weight.semibold} flex items-center gap-1.5`}>
                    <Calendar className="w-3 h-3" />
                    {pub.year}
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4 pr-20">
                  <div className={`p-2.5 ${colors.accent.blue.bg} ${borderRadius.button} flex-shrink-0 group-hover:bg-blue-100 transition-colors`}>
                    <BookOpen className={`w-5 h-5 ${colors.accent.blue.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`${typography.heading.h3} ${typography.weight.semibold} mb-4 break-words leading-tight ${colors.text.primary} group-hover:text-gray-800 transition-colors`}>
                      {pub.title}
                    </h3>
                    
                    {/* Authors */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700 break-words">
                          <span className="font-medium text-gray-900">Authors:</span>{" "}
                          {pub.authors.split(/(El Mahdy, M\. E\.)/gi).map((part, i) => {
                            if (part.match(/El Mahdy, M\. E\./gi)) {
                              return (
                                <span key={i} className="font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                                  {part}
                                </span>
                              );
                            }
                            return part;
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {/* Metadata Grid */}
                    <div className="space-y-2.5 mb-4">
                      {pub.venue && (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm sm:text-base text-gray-700 break-words">
                            <span className="font-medium text-gray-900">Venue:</span> {pub.venue}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-start gap-2 flex-wrap">
                        <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-medium text-gray-900">Publisher:</span> {pub.publisher}
                          {pub.pages && <span className="text-gray-600"> • {pub.pages}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

