
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d28b307a-f288-4126-ba69-3c9b25921437.png" 
                alt="Matteson Children's Museum Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Matteson Children's Museum</h3>
                <p className="text-sm opacity-90">Invest in Wonder</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Creating extraordinary learning experiences that stimulate creativity and critical thinking 
              while promoting educational equity in south suburban Cook County.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Matteson Children's Museum</p>
                  <p>PO Box 1735</p>
                  <p>Matteson, IL 60443</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@mattesonchildrensmuseum.org" className="hover:underline">
                  info@mattesonchildrensmuseum.org
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Project Timeline</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Incorporated:</span>
                <span className="font-medium">May 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Feasibility Study:</span>
                <span className="font-medium">2025</span>
              </div>
              <div className="flex justify-between">
                <span>Construction:</span>
                <span className="font-medium">2027-2028</span>
              </div>
              <div className="flex justify-between">
                <span>Grand Opening:</span>
                <span className="font-medium">Q4 2028</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Matteson Children's Museum. All rights reserved. | 501(c)(3) Nonprofit Organization</p>
          <p className="mt-2">Transforming the former Lincoln Mall site into a beacon of educational equity and community pride.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
