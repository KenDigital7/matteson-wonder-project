import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMenuOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={navigateToHome}>
            <div>
              <h1 className="text-xl font-bold text-primary">Matteson Children's Museum</h1>
              <p className="text-sm text-muted-foreground">Invest in Wonder</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('status')} className="text-foreground hover:text-primary transition-colors font-medium">
              Progress
            </button>
            <button onClick={() => navigateToPage('/leadership')} className="text-foreground hover:text-primary transition-colors font-medium">
              Leadership
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <NewsletterModal 
              trigger={
                <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2">
                  <Mail className="mr-2 h-4 w-4" />
              Join Our Community
            </Button>
              }
            />
            
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
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('status')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Progress
              </button>
              <button onClick={() => navigateToPage('/leadership')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Leadership
              </button>
              <NewsletterModal 
                trigger={
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Mail className="mr-2 h-4 w-4" />
                Join Our Community
              </Button>
                }
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
