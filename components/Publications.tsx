"use client";

import { publications } from "@/data/content";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import { BookOpen, ExternalLink, Calendar, Building2, MapPin, Users } from "lucide-react";

// Helper function to get accent color based on year
const getYearColor = (year: string) => {
  const yearNum = parseInt(year);
  if (yearNum >= 2024) return "border-l-blue-500";
  if (yearNum >= 2022) return "border-l-purple-500";
  if (yearNum >= 2020) return "border-l-indigo-500";
  return "border-l-gray-500";
};

export default function Publications() {
  return (
    <section id="publications" className="mb-12 md:mb-16 scroll-mt-24" aria-label="Publications">
      <AnimatedSection>
        <SectionHeader icon={BookOpen} label="Publications" />
      </AnimatedSection>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            {pub.link && pub.link !== "#" ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block bg-gradient-to-br from-white to-gray-50/30 border-l-4 ${pub.year ? getYearColor(pub.year) : "border-l-blue-500"} border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
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
              <div className={`relative bg-gradient-to-br from-white to-gray-50/30 border-l-4 ${pub.year ? getYearColor(pub.year) : "border-l-blue-500"} border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
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

