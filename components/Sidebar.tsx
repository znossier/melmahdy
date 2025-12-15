"use client";

import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { personalInfo, sections } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink, Menu, X, User, Code, Layers, Briefcase, GraduationCap, BookOpen, Award } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef("");

  // Update header height when open state changes or on mount
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    
    updateHeight();
    // Also update on resize
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isOpen]);

  // Sync ref with state
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Scroll spy for active section highlighting (using Intersection Observer for better performance)
  useEffect(() => {
    // Only run on desktop to avoid conflicts with MobileNav
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    
    let updateTimeout: NodeJS.Timeout | null = null;
    
    const observerOptions = {
      root: null,
      rootMargin: "-33% 0px -33% 0px", // Trigger when section is in upper third of viewport
      threshold: [0, 0.1, 0.5, 1] // Multiple thresholds for better detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio that's intersecting
      let bestEntry: IntersectionObserverEntry | null = null;
      let bestRatio = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
          bestRatio = entry.intersectionRatio;
          bestEntry = entry;
        }
      });

      if (bestEntry) {
        const entry = bestEntry as IntersectionObserverEntry;
        const target = entry.target as HTMLElement;
        const sectionId = target.id;
        
        // Only update if section actually changed
        if (sectionId && sectionId !== activeSectionRef.current) {
          activeSectionRef.current = sectionId;
          
          // Clear any pending update
          if (updateTimeout) {
            clearTimeout(updateTimeout);
          }
          
          // Debounce the state update to prevent rapid re-renders
          updateTimeout = setTimeout(() => {
            setActiveSection(sectionId);
          }, 250); // 250ms debounce to batch rapid changes and prevent sidebar lag
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Initial check
    const checkInitial = () => {
      if (typeof window === 'undefined') return;
      const viewportMiddle = window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= 0) {
            activeSectionRef.current = sections[i].id;
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    
    // Wait for DOM to be ready
    setTimeout(checkInitial, 100);

    return () => {
      observer.disconnect();
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
    };
  }, []); // Empty dependency array - only run once

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scroll-margin-top from CSS if available, otherwise use offset
      const scrollMargin = parseInt(window.getComputedStyle(element).scrollMarginTop) || 100;
      const rect = element.getBoundingClientRect();
      const elementPosition = rect.top + window.pageYOffset;
      const offsetPosition = elementPosition - scrollMargin;

      // Temporarily disable scroll spy to prevent conflicts during smooth scroll
      const scrollToOptions: ScrollToOptions = {
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      };

      window.scrollTo(scrollToOptions);
    }
  };

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      User: <User className="w-4 h-4" />,
      Code: <Code className="w-4 h-4" />,
      Layers: <Layers className="w-4 h-4" />,
      Briefcase: <Briefcase className="w-4 h-4" />,
      GraduationCap: <GraduationCap className="w-4 h-4" />,
      BookOpen: <BookOpen className="w-4 h-4" />,
      Award: <Award className="w-4 h-4" />,
    };
    return icons[iconName] || <User className="w-4 h-4" />;
  };

  // Mobile expandable header - always fixed on mobile
  const MobileHeader = () => {
    return (
      <div 
        ref={headerRef}
        className="md:hidden bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50"
      >
      <motion.div
        className={`bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 rounded-3xl m-3 border border-gray-200/60 shadow-lg overflow-hidden relative ${isOpen ? "p-6" : "p-3"}`}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Menu/Close button - positioned relative to card */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-3 right-3 p-2 hover:bg-white/50 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 z-10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Profile section - horizontal layout: image left, text right */}
        <motion.div
          className="flex items-start flex-row gap-4"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Avatar - grows when expanded, always on left */}
          <motion.div
            className="rounded-full bg-gray-100 flex items-center justify-center shadow-md relative overflow-hidden flex-shrink-0"
            animate={{
              width: isOpen ? 96 : 48,
              height: isOpen ? 96 : 48,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src="/memoji.png"
              alt="Moustafa El Mahdy"
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </motion.div>

          {/* Text section - always on right, with padding to avoid button overlap */}
          <div className={`flex-1 min-w-0 text-left ${isOpen ? "pr-12" : "pr-0"}`}>
            <h1 className={`font-bold leading-tight transition-none break-words ${isOpen ? "text-xl" : "text-sm"}`}>
              Hello, I&apos;m {personalInfo.name}.
            </h1>
            <p className={`font-medium text-gray-800 transition-none ${isOpen ? "text-base mt-1" : "text-sm"}`}>
              {personalInfo.title}
            </p>
            
            {/* Status and location - only visible when expanded */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mt-2 space-y-1"
                >
                   <div className="flex items-center gap-2">
                     <div className="relative flex items-center justify-center w-3 h-3">
                       {/* Single subtle pulsing ring */}
                       <div className="absolute w-2 h-2 border-2 border-green-500 rounded-full animate-pulse-ring"></div>
                       {/* Inner green dot */}
                       <div className="relative w-2 h-2 bg-green-500 rounded-full z-10"></div>
                     </div>
                     <p className="text-sm text-gray-600">{personalInfo.status}</p>
                   </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Expanded content - contact, CV, links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                {/* Contact Information */}
                <div className="space-y-2">
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="group flex items-center gap-3 min-w-0 p-2 -mx-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-200" />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 group-hover:underline truncate min-w-0 transition-all duration-200">
                      {personalInfo.phone}
                    </span>
                  </a>
                  
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="group flex items-center gap-3 min-w-0 p-2 -mx-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-200" />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 group-hover:underline truncate min-w-0 break-all transition-all duration-200">
                      {personalInfo.email}
                    </span>
                  </a>
                </div>

                {/* Download CV Button */}
                <a
                  href={personalInfo.cvGoogleDocId 
                    ? `https://docs.google.com/document/d/${personalInfo.cvGoogleDocId}/export?format=pdf`
                    : "/cv.pdf"}
                  download="CV.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-black text-white rounded-lg font-medium transition-all hover:bg-gray-800 active:scale-95 shadow-sm text-sm min-h-[44px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>

                {/* Links Section */}
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Links</h3>
                  
                  <Link
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm font-medium">GitHub</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </Link>
                  
                  <Link
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    );
  };

  // Full sidebar content
  const SidebarContent = () => (
    <div className="h-full flex flex-col justify-start space-y-3 sm:space-y-4 md:space-y-5 overflow-y-auto px-4 sm:px-6 md:px-8">
        {/* Personal Card with Avatar */}
        <div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-gradient-to-br from-blue-50/40 via-white to-blue-50/20 rounded-3xl p-5 md:p-6 border border-gray-200/60 shadow-lg flex-shrink-0"
          >
          <div className="flex items-start flex-row gap-4">
            {/* Avatar - Memoji on the left */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md relative overflow-hidden flex-shrink-0">
              <Image
                src="/memoji.png"
                alt="Moustafa El Mahdy"
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            
            {/* Text content on the right */}
            <div className="flex-1 min-w-0 text-left">
              <h1 className="text-lg md:text-xl font-bold leading-tight mb-1 break-words">
                Hello, I&apos;m {personalInfo.name}.
              </h1>
              
              <p className="text-sm md:text-base font-medium text-gray-800 mb-2">
                {personalInfo.title}
              </p>
              
              <div className="flex items-center gap-2 mb-1.5">
                <div className="relative flex items-center justify-center w-3 h-3">
                  {/* Single subtle pulsing ring */}
                  <div className="absolute w-2 h-2 border-2 border-green-500 rounded-full animate-pulse-ring"></div>
                  {/* Inner green dot */}
                  <div className="relative w-2 h-2 bg-green-500 rounded-full z-10"></div>
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  {personalInfo.status}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <p className="text-xs md:text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-2 flex-shrink-0"
        >
          <a 
            href={`tel:${personalInfo.phone}`} 
            className="group flex items-center gap-3 min-w-0 p-2 -mx-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-200" />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 group-hover:underline truncate min-w-0 transition-all duration-200">
              {personalInfo.phone}
            </span>
          </a>
          
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="group flex items-center gap-3 min-w-0 p-2 -mx-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 transition-colors duration-200" />
            <span className="text-sm text-gray-700 group-hover:text-blue-600 group-hover:underline truncate min-w-0 break-all transition-all duration-200">
              {personalInfo.email}
            </span>
          </a>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <a
            href={personalInfo.cvGoogleDocId 
              ? `https://docs.google.com/document/d/${personalInfo.cvGoogleDocId}/export?format=pdf`
              : "/cv.pdf"}
            download="CV.pdf"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 sm:py-2.5 bg-black text-white rounded-lg font-medium transition-all hover:bg-gray-800 active:scale-95 shadow-sm text-sm min-h-[44px] sm:min-h-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-2 flex-shrink-0"
        >
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Links</h3>
          
          <Link
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 sm:p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group min-h-[44px] sm:min-h-0"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </Link>
          
          <Link
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 sm:p-2.5 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group min-h-[44px] sm:min-h-0"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </Link>
        </motion.div>
    </div>
  );
  
  return (
    <>
      {/* Mobile expandable header */}
      <MobileHeader />
      
      {/* Spacer for fixed header on mobile - always needed since header is always fixed */}
      <div 
        className="md:hidden"
        style={{ height: `${headerHeight || 90}px` }}
      />

      {/* Desktop sidebar - always visible */}
      <aside className="hidden md:block md:w-96 lg:w-[28rem] md:fixed md:left-0 md:top-0 md:h-screen md:overflow-y-auto md:bg-gray-50/50 py-4 sm:py-6 md:py-8 md:z-10 md:border-r border-gray-200">
        <SidebarContent />
      </aside>
    </>
  );
}

