"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-8 mt-8 border-t border-gray-200">
      <AnimatedSection>
        <p className="text-sm text-gray-500">
          © Moustafa El Mahdy {currentYear}
        </p>
      </AnimatedSection>
    </footer>
  );
}

