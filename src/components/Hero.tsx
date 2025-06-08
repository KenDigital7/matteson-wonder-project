
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGetInvolved = () => {
    const element = document.getElementById('get-involved');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Invest in Wonder.
                <span className="block text-accent">Invest in Equity.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join us in creating an extraordinary 50,000 sq ft children's museum in Matteson, IL, 
                designed to bring educational equity and wonder to south suburban Cook County families.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToGetInvolved}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
              >
                Support Our Mission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/b02b0fb5-6312-4f1c-a29b-fe952aeadd31.png" 
                alt="Matteson Children's Museum Concept Rendering" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Opening 2028!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
