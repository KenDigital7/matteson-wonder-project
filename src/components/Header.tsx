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
    <header className="bg-white/95 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group" onClick={navigateToHome}>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                Matteson Children's Museum
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Invest in Wonder</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('about')} 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
            </button>
            <button 
              onClick={() => scrollToSection('status')} 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium relative group"
            >
              Progress
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
            </button>
            <button 
              onClick={() => navigateToPage('/leadership')} 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium relative group"
            >
              Leadership
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></span>
            </button>
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <NewsletterModal 
              trigger={
                <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium">
                  <Mail className="mr-2 h-4 w-4" />
                  Join Our Community
                </Button>
              }
            />
            
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/80 backdrop-blur-sm rounded-b-2xl mx-4 -mb-4 shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('status')} 
                className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-lg"
              >
                Progress
              </button>
              <button 
                onClick={() => navigateToPage('/leadership')} 
                className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium rounded-lg"
              >
                Leadership
              </button>
              <div className="pt-2">
                <NewsletterModal 
                  trigger={
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                      <Mail className="mr-2 h-4 w-4" />
                      Join Our Community
                    </Button>
                  }
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
