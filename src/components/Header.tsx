
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d28b307a-f288-4126-ba69-3c9b25921437.png" 
              alt="Matteson Children's Museum Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">Matteson Children's Museum</h1>
              <p className="text-xs text-muted-foreground">Invest in Wonder</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('mission')} className="text-foreground hover:text-primary transition-colors">
              Our Mission
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-foreground hover:text-primary transition-colors">
              The Vision
            </button>
            <button onClick={() => scrollToSection('timeline')} className="text-foreground hover:text-primary transition-colors">
              Timeline
            </button>
            <button onClick={() => scrollToSection('leadership')} className="text-foreground hover:text-primary transition-colors">
              Leadership
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="text-foreground hover:text-primary transition-colors">
              Get Involved
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button onClick={() => scrollToSection('get-involved')} className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white">
              Support Our Mission
            </Button>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('mission')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Our Mission
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                The Vision
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Timeline
              </button>
              <button onClick={() => scrollToSection('leadership')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Leadership
              </button>
              <button onClick={() => scrollToSection('get-involved')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Get Involved
              </button>
              <Button onClick={() => scrollToSection('get-involved')} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                Support Our Mission
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
