
import { Quote, BookOpen, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Quote Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <Quote className="w-12 h-12 text-blue-500 mx-auto" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground italic leading-relaxed">
              "Illinois ranks among the most inequitable states in the nation for educational opportunity."
            </blockquote>
            <cite className="text-lg text-muted-foreground">
              — 2024 <em>Inequity in Illinois</em> Report
            </cite>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 lg:p-12 rounded-2xl animate-scale-in">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Mission</h2>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
                To improve the lives of children in Matteson and Chicago's South Suburban region by creating 
                extraordinary learning experiences across the arts, sciences, and humanities that stimulate 
                creativity and critical thinking.
              </p>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary">Why This Matters</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale border-l-4 border-l-red-500">
                <CardContent className="p-6 space-y-4">
                  <BookOpen className="w-10 h-10 text-red-500" />
                  <h4 className="text-xl font-semibold text-foreground">Educational Equity</h4>
                  <p className="text-muted-foreground">
                    South suburban Cook County children deserve the same high-quality educational 
                    experiences available in affluent communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale border-l-4 border-l-blue-500">
                <CardContent className="p-6 space-y-4">
                  <Users className="w-10 h-10 text-blue-500" />
                  <h4 className="text-xl font-semibold text-foreground">Community Building</h4>
                  <p className="text-muted-foreground">
                    Creating a destination that brings families together and strengthens our 
                    community bonds while celebrating diversity.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale border-l-4 border-l-green-500">
                <CardContent className="p-6 space-y-4">
                  <Target className="w-10 h-10 text-green-500" />
                  <h4 className="text-xl font-semibold text-foreground">Economic Development</h4>
                  <p className="text-muted-foreground">
                    Transforming underutilized land into a thriving educational hub that attracts 
                    visitors and supports local businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-8">The Challenge We're Addressing</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-orange-600">25 miles</div>
                <p className="text-muted-foreground">Distance to nearest major children's museum</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-red-600">62,900</div>
                <p className="text-muted-foreground">Daily traffic count at our location</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-green-600">50,000+</div>
                <p className="text-muted-foreground">Children in our target region</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">#1</div>
                <p className="text-muted-foreground">Most inequitable state for education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
