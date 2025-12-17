"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/data/content";
import { Menu, X } from "lucide-react";
import { getIcon } from "@/lib/utils/icons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy for active section highlighting (only on mobile to avoid conflicts with Sidebar)
  useEffect(() => {
    // Only run scroll spy on mobile devices
    if (typeof window === 'undefined') return;
    if (window.innerWidth >= 768) return; // md breakpoint
    
    let currentActive = "";
    let rafId: number | null = null;
    
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 3;
      let newActiveSection = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= 0) {
            newActiveSection = sections[i].id;
            break;
          }
        }
      }

      if (newActiveSection !== currentActive) {
        currentActive = newActiveSection;
        setActiveSection(newActiveSection);
      }
    };

    const throttledHandleScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const getIconNode = (iconName: string) => {
    const Icon = getIcon(iconName);
    return <Icon className="w-5 h-5" />;
  };

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 md:hidden p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
        aria-label="Open navigation"
      >
        <Menu className="w-5 h-5" />
      </motion.button>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Navigation</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all min-h-[44px] ${
                        activeSection === section.id
                          ? "bg-black text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className={activeSection === section.id ? "text-white" : "text-gray-500"}>
                        {getIconNode(section.icon)}
                      </span>
                      <span className="text-sm font-medium">{section.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
