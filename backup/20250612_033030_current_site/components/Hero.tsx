import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonationModal from "./DonationModal";

const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="relative">
          <img 
            src="/lovable-uploads/b02b0fb5-6312-4f1c-a29b-fe952aeadd31.png" 
            alt="Matteson Children's Museum Concept Rendering" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Matteson Children's Museum
              </h1>
            </div>
          </div>
          
          {/* Opening Banner */}
          <div className="absolute top-8 right-8 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
            Opening 2028!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
