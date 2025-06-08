
import { Users, DollarSign, GraduationCap, MapPin, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Community Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Matteson Children's Museum will serve as a catalyst for educational equity, 
              economic development, and community pride throughout south suburban Cook County.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale border-t-4 border-t-blue-500">
              <CardContent className="p-8 text-center space-y-4">
                <Users className="w-12 h-12 text-blue-500 mx-auto" />
                <div className="text-3xl font-bold text-blue-600">200,000+</div>
                <h3 className="text-lg font-semibold text-foreground">Annual Visitors Expected</h3>
                <p className="text-muted-foreground">
                  Families from across the south suburban region and beyond
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-green-500">
              <CardContent className="p-8 text-center space-y-4">
                <GraduationCap className="w-12 h-12 text-green-500 mx-auto" />
                <div className="text-3xl font-bold text-green-600">50,000+</div>
                <h3 className="text-lg font-semibold text-foreground">Students Served Annually</h3>
                <p className="text-muted-foreground">
                  School groups and educational programming participants
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-orange-500">
              <CardContent className="p-8 text-center space-y-4">
                <DollarSign className="w-12 h-12 text-orange-500 mx-auto" />
                <div className="text-3xl font-bold text-orange-600">$15M+</div>
                <h3 className="text-lg font-semibold text-foreground">Annual Economic Impact</h3>
                <p className="text-muted-foreground">
                  Direct and indirect economic benefits to the region
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-red-500">
              <CardContent className="p-8 text-center space-y-4">
                <MapPin className="w-12 h-12 text-red-500 mx-auto" />
                <div className="text-3xl font-bold text-red-600">100+</div>
                <h3 className="text-lg font-semibold text-foreground">New Jobs Created</h3>
                <p className="text-muted-foreground">
                  Full-time and part-time employment opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-purple-500">
              <CardContent className="p-8 text-center space-y-4">
                <TrendingUp className="w-12 h-12 text-purple-500 mx-auto" />
                <div className="text-3xl font-bold text-purple-600">25%</div>
                <h3 className="text-lg font-semibold text-foreground">Property Value Increase</h3>
                <p className="text-muted-foreground">
                  Projected boost to surrounding property values
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-t-4 border-t-pink-500">
              <CardContent className="p-8 text-center space-y-4">
                <Heart className="w-12 h-12 text-pink-500 mx-auto" />
                <div className="text-3xl font-bold text-pink-600">24/7</div>
                <h3 className="text-lg font-semibold text-foreground">Community Pride</h3>
                <p className="text-muted-foreground">
                  Round-the-clock symbol of community investment and hope
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Equity Focus */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="text-center space-y-6 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Commitment to Equity & Accessibility</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every aspect of the museum is designed with accessibility and affordability in mind, 
                ensuring that all children can benefit from extraordinary learning experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground">Affordable Admission</h4>
                <p className="text-sm text-muted-foreground">Sliding scale pricing ensures accessibility for all families</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground">Universal Design</h4>
                <p className="text-sm text-muted-foreground">Fully accessible exhibits and facilities for all abilities</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-foreground">School Partnerships</h4>
                <p className="text-sm text-muted-foreground">Free and subsidized field trips for Title I schools</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground">Community Programs</h4>
                <p className="text-sm text-muted-foreground">Free programming for underserved populations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
