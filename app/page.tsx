import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Recognition from "@/components/Recognition";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Left Sidebar - Fixed on desktop */}
      <Sidebar />
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Right Content Column - Properly spaced for fixed sidebar */}
      <div className="md:ml-96 lg:ml-[28rem]">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-6 sm:py-8 md:py-12 lg:py-16">
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <div className="mb-12 md:mb-16 lg:mb-20 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200/60 shadow-lg">
          <Skills />
          </div>
          
          {/* Tech Stack Section */}
          <TechStack />
          
          {/* Professional Experience */}
          <Experience />
          <Education />
          
          {/* Publications */}
          <Publications />
          
          {/* Recognition */}
          <Recognition />
        </div>
      </div>
    </main>
  );
}

