
import { ArrowRight, Heart, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGetInvolved = () => {
    const element = document.getElementById('get-involved');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Invest in Wonder.
                <span className="block text-green-600">Invest in Equity.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Join Us at the Intersection of Play, Possibility, and Purpose
              </p>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              We're creating an extraordinary 50,000 sq ft children's museum in Matteson, IL, 
              designed to bring educational equity and wonder to south suburban Cook County families. 
              Help us turn this vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToGetInvolved}
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 group"
              >
                Support Our Feasibility Study
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6"
              >
                Learn Our Story
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">Community-Centered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Equity-Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Education-Driven</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/b02b0fb5-6312-4f1c-a29b-fe952aeadd31.png" 
                alt="Matteson Children's Museum Concept Rendering" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Coming 2028!
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">4 Acres</p>
                  <p className="text-sm text-muted-foreground">Former Lincoln Mall Site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
