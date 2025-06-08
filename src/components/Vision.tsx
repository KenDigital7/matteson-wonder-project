
import { Building, Car, Trees, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A 4-acre destination rising from the former Lincoln Mall site, designed to serve 
              as a symbol of equity and opportunity for our community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <Building className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">50,000 sq ft</h3>
                <h4 className="text-xl font-semibold text-primary">Museum Building</h4>
                <p className="text-muted-foreground">
                  Interactive exhibits spanning arts, sciences, and humanities. 
                  Designed for accessibility and inclusive learning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <Car className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">1 Acre</h3>
                <h4 className="text-xl font-semibold text-primary">Parking Area</h4>
                <p className="text-muted-foreground">
                  Ample, accessible parking ensuring easy visits for families 
                  throughout the region.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <Trees className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">2 Acres</h3>
                <h4 className="text-xl font-semibold text-primary">Outdoor Campus</h4>
                <p className="text-muted-foreground">
                  Nature-based learning environments and outdoor classrooms 
                  connecting children with nature.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Map className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Strategic Location</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-foreground">
                    <span className="font-semibold">Prime accessibility:</span> Located near the intersection of 
                    Cicero Avenue and Lincoln Highway with 62,900 daily vehicles
                  </p>
                  
                  <p className="text-foreground">
                    <span className="font-semibold">Community integration:</span> Part of the planned 
                    Market Square Crossing development
                  </p>
                  
                  <p className="text-foreground">
                    <span className="font-semibold">Future synergies:</span> Complementary youth 
                    athletic fields and recreational facilities nearby
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/lovable-uploads/40777a1a-2e64-49d7-bba5-d08d995054ad.png" 
                  alt="Site Development Plan" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
