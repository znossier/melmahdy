import Sidebar from "@/components/navigation/Sidebar";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";
import Recognition from "@/components/sections/Recognition";
import BackToTop from "@/components/navigation/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Left Sidebar - Fixed on desktop */}
      <Sidebar />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Right Content Column - Properly spaced for fixed sidebar */}
      <div className="md:ml-96 lg:ml-[28rem]">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-6 sm:py-8 md:py-12 lg:py-16">
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />
          
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

