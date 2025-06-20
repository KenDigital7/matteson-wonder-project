import { Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NewsletterModal from "./NewsletterModal";
import PartnershipModal from "./PartnershipModal";

const GetInvolved = () => {
  const navigate = useNavigate();

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Be Part of Something Extraordinary
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Help us build the first children's museum in south suburban Cook County. 
              Your support today makes wonder accessible for generations tomorrow.
            </p>
          </div>

          {/* Primary CTA - Newsletter Focus */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Stay Connected to Our Journey</h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Be the first to know about our progress, community events, and opportunities 
              to be part of bringing this vision to life.
            </p>
            <div className="flex justify-center">
              <NewsletterModal 
                trigger={
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Join Our Community
                  </Button>
                }
              />
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
              <div className="flex justify-center mb-6">
                <img src="/images/Icons/Partnership.png?v=2" alt="Partnership Opportunities" className="w-60 h-60 object-contain" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Partnership Opportunities</h3>
                <p className="text-gray-800">
                  Interested in corporate sponsorship or major gift opportunities? 
                  Let's discuss how you can help make this vision a reality.
                </p>
                <PartnershipModal />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
              <div className="flex justify-center mb-6">
                <img src="/images/Icons/Leadership.png?v=2" alt="Meet Our Leadership" className="w-60 h-60 object-contain" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Meet Our Leadership</h3>
                <p className="text-gray-800">
                  Meet the experienced board members leading this vision with expertise in finance, education, and community development.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate('/leadership')}
                >
                  <Users className="mr-2 h-4 w-4" />
                  View Leadership Team
                </Button>
              </div>
            </div>
          </div>

          {/* Simple Contact Info */}
          <div className="text-center bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions or Ideas?</h3>
            <p className="text-gray-800 mb-4">
              We'd love to hear from community members who want to be part of this journey.
            </p>
            <Button 
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-50"
              onClick={() => window.location.href = 'mailto:info@mattesonchildrensmuseum.org'}
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
