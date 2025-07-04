import { Mail, MapPin, ExternalLink } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";
import PartnershipModal from "./PartnershipModal";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {/* Left Column: Logo + Mission */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Matteson Children's Museum</h3>
              <p className="text-sm opacity-80 leading-relaxed mt-2">
                Promoting educational equity through extraordinary learning experiences in south suburban Cook County.
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-green-200">501(c)(3) Nonprofit Organization</p>
              <p className="text-xs opacity-80 mt-1">Your support makes a lasting impact</p>
            </div>
          </div>

          {/* Middle Column: Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>PO Box 1735</p>
                  <p>Matteson, IL 60443</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@mattesoncm.org" className="hover:underline break-all">
                  info@mattesoncm.org
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3 text-sm">
              <Link 
                to="/leadership" 
                className="flex items-center space-x-2 hover:text-yellow-200 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Leadership Team</span>
              </Link>
              <NewsletterModal 
                trigger={
                  <button className="flex items-center space-x-2 hover:text-yellow-200 transition-colors text-left">
                    <ExternalLink className="w-3 h-3" />
                    <span>Newsletter Signup</span>
                  </button>
                }
              />
              <PartnershipModal 
                trigger={
                  <button className="flex items-center space-x-2 hover:text-yellow-200 transition-colors text-left">
                    <ExternalLink className="w-3 h-3" />
                    <span>Partnership Opportunities</span>
                  </button>
                }
              />
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 hover:text-yellow-200 transition-colors text-left"
              >
                <ExternalLink className="w-3 h-3" />
                <span>About the Project</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Matteson Children's Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
