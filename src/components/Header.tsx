
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/d28b307a-f288-4126-ba69-3c9b25921437.png" 
              alt="Matteson Children's Museum Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">Matteson Children's Museum</h1>
              <p className="text-sm text-muted-foreground">Invest in Wonder</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => scrollToSection('mission')} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-foreground hover:text-primary transition-colors font-medium">
              Vision
            </button>
            <button onClick={() => scrollToSection('timeline')} className="text-foreground hover:text-primary transition-colors font-medium">
              Timeline
            </button>
            <button onClick={() => scrollToSection('leadership')} className="text-foreground hover:text-primary transition-colors font-medium">
              Leadership
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="text-foreground hover:text-primary transition-colors font-medium">
              Support Us
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('get-involved')} 
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2"
            >
              Donate Now
            </Button>
            
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('mission')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Vision
              </button>
              <button onClick={() => scrollToSection('timeline')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Timeline
              </button>
              <button onClick={() => scrollToSection('leadership')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Leadership
              </button>
              <button onClick={() => scrollToSection('get-involved')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Support Us
              </button>
              <Button onClick={() => scrollToSection('get-involved')} className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
