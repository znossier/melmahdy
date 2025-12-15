"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let rafId: number | null = null;
    let lastScrollY = 0;
    
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      // Only update if scroll position changed significantly to avoid unnecessary state updates
      if (Math.abs(scrollY - lastScrollY) < 10) return;
      lastScrollY = scrollY;
      
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const throttledToggle = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener("scroll", throttledToggle, { passive: true });
    toggleVisibility(); // Initial check
    return () => {
      window.removeEventListener("scroll", throttledToggle);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
