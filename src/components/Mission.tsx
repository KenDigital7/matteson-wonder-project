
import { BookOpen, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To improve the lives of children in Matteson and Chicago's South Suburban region by creating 
              extraordinary learning experiences across the arts, sciences, and humanities that stimulate 
              creativity and critical thinking.
            </p>
          </div>

          <div className="bg-blue-50 p-8 lg:p-12 rounded-lg">
            <div className="text-center space-y-4">
              <blockquote className="text-2xl font-medium text-primary italic">
                "Illinois ranks among the most inequitable states in the nation for educational opportunity."
              </blockquote>
              <cite className="text-lg text-muted-foreground">
                — 2024 <em>Inequity in Illinois</em> Report
              </cite>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <BookOpen className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Educational Equity</h3>
                <p className="text-muted-foreground">
                  South suburban Cook County children deserve the same high-quality educational 
                  experiences available in affluent communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <Users className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Community Building</h3>
                <p className="text-muted-foreground">
                  Creating a destination that brings families together and strengthens our 
                  community bonds while celebrating diversity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-8 text-center space-y-4">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Economic Development</h3>
                <p className="text-muted-foreground">
                  Transforming underutilized land into a thriving educational hub that attracts 
                  visitors and supports local businesses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">25</div>
              <p className="text-muted-foreground">miles to nearest children's museum</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">62,900</div>
              <p className="text-muted-foreground">daily traffic count</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">50,000+</div>
              <p className="text-muted-foreground">children in target region</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">2028</div>
              <p className="text-muted-foreground">planned opening year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
