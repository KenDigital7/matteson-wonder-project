import { Mail, Users, Handshake, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";
import PartnershipModal from "./PartnershipModal";

const GetInvolved = () => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <section id="get-involved" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Be Part of Something Extraordinary
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Help us build the first children's museum in south suburban Cook County. 
              Your support today makes wonder accessible for generations tomorrow.
            </p>
          </div>

          {/* Primary CTA - Newsletter Focus */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 sm:p-8 lg:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Stay Connected to Our Journey</h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Be the first to know about our progress, community events, and opportunities 
              to be part of bringing this vision to life.
            </p>
            <div className="flex justify-center">
              <NewsletterModal 
                trigger={
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 min-h-[44px]"
                  >
                    Join Our Community
                  </Button>
                }
              />
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center mb-4 sm:mb-6">
                <img 
                  src="https://kendigital7.github.io/matteson-wonder-project/images/Icons/Partnership.png" 
                  alt="Partnership Opportunities" 
                  className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
                  onError={handleImageError}
                />
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-purple-100 rounded-lg flex items-center justify-center hidden">
                  <Handshake className="w-16 h-16 sm:w-24 sm:h-24 text-purple-500" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Partnership Opportunities</h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  Interested in corporate sponsorship or major gift opportunities? 
                  Let's discuss how you can help make this vision a reality.
                </p>
                <PartnershipModal 
                  trigger={
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-sm sm:text-base min-h-[44px] px-4 py-2"
                    >
                      Partnership Inquiries
                    </Button>
                  }
                />
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center mb-4 sm:mb-6">
                <img 
                  src="https://kendigital7.github.io/matteson-wonder-project/images/Icons/Leadership.png" 
                  alt="Meet Our Leadership" 
                  className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain"
                  onError={handleImageError}
                />
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-indigo-100 rounded-lg flex items-center justify-center hidden">
                  <UserCheck className="w-16 h-16 sm:w-24 sm:h-24 text-indigo-500" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Meet Our Leadership</h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  Meet the experienced board members leading this vision with expertise in finance, education, and community development.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base min-h-[44px] px-4 py-2"
                  onClick={() => navigate('/leadership')}
                >
                  View Leadership Team
                </Button>
              </div>
            </div>
          </div>

          {/* Simple Contact Info */}
          <div className="text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Questions or Ideas?</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
              We'd love to hear from community members who want to be part of this journey.
            </p>
            <Button 
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-50 text-sm sm:text-base min-h-[44px] px-4 py-2"
              onClick={() => window.location.href = 'mailto:info@mattesoncm.org'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
