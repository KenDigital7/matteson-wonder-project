import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionCarousel from "@/components/VisionCarousel";
import ProjectStatus from "@/components/ProjectStatus";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Smooth wave transition - elegant and flowing */}
      <SectionDivider 
        type="wave-smooth" 
        height="100px" 
        color="#FF6B35"
      />
      
      <About />
      
      {/* Transition wave from orange to white */}
      <SectionDivider 
        type="wave-transition" 
        height="90px" 
        fromColor="#FF6B35"
        toColor="#FFFFFF"
        flip={true}
      />
      
      <VisionCarousel />
      
      {/* Organic wave transition - natural and flowing */}
      <SectionDivider 
        type="wave-organic" 
        height="80px"
        color="#9333EA"
      />
      
      <ProjectStatus />
      
      {/* Puzzle pieces transition - pieces coming together */}
      <SectionDivider 
        type="puzzle" 
        height="100px" 
        color="#9333EA"
      />
      
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
