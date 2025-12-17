"use client";

import { BookOpen, ExternalLink, Calendar, Building2, MapPin, Users } from "lucide-react";

import { publications } from "@/data/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Publications() {
  return (
    <section id="publications" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Publications">
      <AnimatedSection>
        <SectionHeader icon={BookOpen} label="Publications" />
      </AnimatedSection>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {publications.map((pub, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            {pub.link && pub.link !== "#" ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 active:bg-white active:border-gray-300 active:shadow-lg active:shadow-gray-200/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white touch-manipulation"
                aria-label={`View publication: ${pub.title}`}
              >
                {/* Year Badge - Top Right */}
                {pub.year && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-blue-50 to-blue-100/80 text-blue-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-blue-200/50">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <span>{pub.year}</span>
                  </div>
                )}
                
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 pr-14 sm:pr-16 md:pr-20">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200/50 transition-all duration-300 shadow-sm border border-blue-200/30">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-5 break-words leading-tight text-gray-900 group-hover:text-blue-900 transition-colors pr-2">
                      {pub.title}
                    </h3>
                    
                    {/* Authors */}
                    <div className="mb-4 md:mb-5">
                      <div className="flex items-start gap-2.5">
                        <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-gray-700 break-words leading-relaxed">
                            <span className="font-medium text-gray-900">Authors:</span>{" "}
                            {pub.authors.split(/(El Mahdy, M\. E\.)/gi).map((part, i) => {
                              if (part.match(/El Mahdy, M\. E\./gi)) {
                                return (
                                  <span key={i} className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/50">
                                    {part}
                                  </span>
                                );
                              }
                              return part;
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Metadata */}
                    <div className="space-y-3 mb-5 md:mb-6">
                      {pub.venue && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <p className="text-sm sm:text-base text-gray-700 break-words">
                            <span className="font-medium text-gray-900">Venue:</span>{" "}
                            <span className="text-gray-600">{pub.venue}</span>
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-start gap-2.5 flex-wrap">
                        <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-medium text-gray-900">Publisher:</span>{" "}
                          <span className="text-gray-600">{pub.publisher}</span>
                          {pub.pages && (
                            <span className="text-gray-500"> • {pub.pages}</span>
                          )}
                        </p>
                      </div>
                    </div>
                    
                    {/* Link Button */}
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-active:text-blue-700 transition-all">
                      <span>View Publication</span>
                      <ExternalLink className="w-4 h-4 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300">
                {/* Year Badge */}
                {pub.year && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-blue-50 to-blue-100/80 text-blue-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-blue-200/50">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <span>{pub.year}</span>
                  </div>
                )}
                
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 pr-14 sm:pr-16 md:pr-20">
                  {/* Icon */}
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl flex-shrink-0 shadow-sm border border-blue-200/30">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 md:mb-5 break-words leading-tight text-gray-900 pr-2">
                      {pub.title}
                    </h3>
                    
                    {/* Authors */}
                    <div className="mb-4 md:mb-5">
                      <div className="flex items-start gap-2.5">
                        <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-gray-700 break-words leading-relaxed">
                            <span className="font-medium text-gray-900">Authors:</span>{" "}
                            {pub.authors.split(/(El Mahdy, M\. E\.)/gi).map((part, i) => {
                              if (part.match(/El Mahdy, M\. E\./gi)) {
                                return (
                                  <span key={i} className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/50">
                                    {part}
                                  </span>
                                );
                              }
                              return part;
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Metadata */}
                    <div className="space-y-3 mb-5 md:mb-6">
                      {pub.venue && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <p className="text-sm sm:text-base text-gray-700 break-words">
                            <span className="font-medium text-gray-900">Venue:</span>{" "}
                            <span className="text-gray-600">{pub.venue}</span>
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-start gap-2.5 flex-wrap">
                        <Building2 className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-medium text-gray-900">Publisher:</span>{" "}
                          <span className="text-gray-600">{pub.publisher}</span>
                          {pub.pages && (
                            <span className="text-gray-500"> • {pub.pages}</span>
                          )}
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
