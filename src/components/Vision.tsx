
import { Building, Car, Trees, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">The Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than a destination — a symbol of equity and opportunity rising from the 
              footprint of the former Lincoln Mall.
            </p>
          </div>

          {/* Development Breakdown */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-t-4 border-t-blue-500">
              <CardContent className="p-8 text-center space-y-4">
                <Building className="w-16 h-16 text-blue-500 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">50,000 sq ft</h3>
                <h4 className="text-xl font-semibold text-primary">Museum Building</h4>
                <p className="text-muted-foreground">
                  State-of-the-art interactive exhibits spanning arts, sciences, and humanities. 
                  Designed for accessibility and inclusive learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-green-500">
              <CardContent className="p-8 text-center space-y-4">
                <Car className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">1 Acre</h3>
                <h4 className="text-xl font-semibold text-primary">Parking Area</h4>
                <p className="text-muted-foreground">
                  Ample, accessible parking ensuring easy visits for families throughout 
                  the south suburban region.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-orange-500">
              <CardContent className="p-8 text-center space-y-4">
                <Trees className="w-16 h-16 text-orange-500 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">2 Acres</h3>
                <h4 className="text-xl font-semibold text-primary">Outdoor Campus</h4>
                <p className="text-muted-foreground">
                  Nature-based learning environments, outdoor classrooms, and play areas 
                  connecting children with the natural world.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Map className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-primary">Strategic Location</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-foreground">
                      <span className="font-semibold">Prime accessibility:</span> Near the intersection of 
                      Cicero Avenue and Lincoln Highway with 62,900 daily vehicles
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-foreground">
                      <span className="font-semibold">Community integration:</span> Within the planned 
                      Market Square Crossing development
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-foreground">
                      <span className="font-semibold">Future synergies:</span> Complementary youth 
                      athletic fields and recreational facilities nearby
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/lovable-uploads/40777a1a-2e64-49d7-bba5-d08d995054ad.png" 
                  alt="Site Development Plan" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Approved Site: 4 Acres
                </div>
              </div>
            </div>
          </div>

          {/* Community Benefits */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">Community Development Objectives</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Reactivate the former Lincoln Mall site",
                "Provide innovative and accessible public gathering spaces", 
                "Add value to underutilized places",
                "Supplement curriculum at local school districts",
                "Higher visibility for surrounding businesses",
                "Enhance Matteson's public profile and regional competitiveness"
              ].map((objective, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover-scale">
                  <p className="text-foreground font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
