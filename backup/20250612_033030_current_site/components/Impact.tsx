import { Users, DollarSign, GraduationCap, MapPin, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">You Can Help Us Build a Brighter Future for Southland Kids</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Redefining what's possible for South Suburban families. This museum will serve as a 
              catalyst for educational equity, economic development, and community pride throughout 
              the region—demonstrating that imagination knows no zip code.
            </p>
          </div>

          {/* Vision Quotes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-xl font-medium text-primary italic">
                "Every child deserves a place to wonder."
              </blockquote>
              <p className="text-muted-foreground">
                Our commitment to ensuring wonder and discovery are accessible to every child, 
                regardless of background or circumstance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <blockquote className="text-xl font-medium text-primary italic">
                "Let's create a future where play is a right, not a privilege."
              </blockquote>
              <p className="text-muted-foreground">
                Breaking down barriers and building bridges to ensure equitable access 
                to transformative learning experiences.
              </p>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Rooted in Hope. Powered by Community. Built for Children.</h3>
              <p className="text-lg text-muted-foreground">
                The Matteson Children's Museum will stand as a beacon of hope and opportunity—proof that 
                when communities come together with bold belief and strategic investment, extraordinary 
                transformation happens.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Feasibility Today</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive planning and community engagement
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Foundation Tomorrow</h4>
                  <p className="text-sm text-muted-foreground">
                    Breaking ground on hope and possibility
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Futures Forever</h4>
                  <p className="text-sm text-muted-foreground">
                    Generations of children discovering their potential
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg mt-8">
                <p className="text-primary font-semibold text-lg italic">
                  "Real change starts with bold belief and strategic investment. The journey toward 
                  equity begins with the courage to imagine what's possible."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
