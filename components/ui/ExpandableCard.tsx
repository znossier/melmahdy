"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface ExpandableCardProps {
  logo: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  jobType?: string;
  description?: string;
  bullets?: string[];
  isHighlighted?: boolean;
  children?: React.ReactNode;
}

export default function ExpandableCard({
  logo,
  title,
  subtitle,
  date,
  location,
  jobType,
  description,
  bullets,
  isHighlighted = false,
  children,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExpandableContent = !!(description || bullets || children);

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 transition-all relative ${
        isHighlighted
          ? "border-blue-400 bg-blue-50/50 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      } ${hasExpandableContent ? "cursor-pointer" : ""}`}
      onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
      role={hasExpandableContent ? "button" : undefined}
      aria-expanded={hasExpandableContent ? isExpanded : undefined}
      tabIndex={hasExpandableContent ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasExpandableContent && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <Logo logoName={logo} size="md" className="bg-transparent border-0" />
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-1.5 text-gray-900 break-words">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-2 break-words">{subtitle}</p>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-xs sm:text-sm text-gray-500">{date}</p>
              {location && (
                <span className="text-xs sm:text-sm text-gray-500">•</span>
              )}
              {location && (
                <p className="text-xs sm:text-sm text-gray-500">{location}</p>
              )}
              {jobType && (
                <>
                  <span className="text-xs sm:text-sm text-gray-500">•</span>
                  <p className="text-xs sm:text-sm text-gray-500">{jobType}</p>
                </>
              )}
            </div>
            {hasExpandableContent && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
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
              {description && (
                <p className="text-sm text-gray-700 leading-relaxed mb-2 break-words">{description}</p>
              )}
              {bullets && bullets.length > 0 && (
                <ul className="list-disc list-outside space-y-1.5 text-sm text-gray-700 leading-relaxed pl-5">
                  {bullets.map((bullet, index) => (
                    <li key={index} className="break-words pl-1">{bullet}</li>
                  ))}
                </ul>
              )}
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

