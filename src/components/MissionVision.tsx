import { BookOpen, Users, Target, Building, Car, Trees, Map, DollarSign, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MulticolorSVG from "./MulticlorSVG";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Mission Section */}
          <div className="space-y-16">
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">Reimagining Equity—One Museum at a Time</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Can a museum change a community? We believe it can. We're creating extraordinary 
                learning experiences that stimulate creativity and critical thinking while addressing 
                the educational equity gap in Chicago's South Suburban region.
              </p>
            </div>

            <div className="bg-red-50 p-8 lg:p-12 rounded-lg border-l-4 border-red-500">
              <div className="text-center space-y-4">
                <blockquote className="text-2xl font-medium text-red-700 italic">
                  "Where Inequity Ends and Imagination Begins"
                </blockquote>
                <p className="text-lg text-muted-foreground">
                  South Suburban families deserve more. Let's give it to them.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <MulticolorSVG 
                    src="/icons/books.svg"
                    alt="Educational Justice"
                    fallbackIcon="fi fi-rr-graduation-cap"
                    size="xl"
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-foreground">Educational Justice</h3>
                  <p className="text-muted-foreground">
                    This is more than a museum—it's a movement for equity. Every child deserves 
                    a place to wonder, regardless of zip code.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <MulticolorSVG 
                    src="/icons/group.svg"
                    alt="Community Transformation"
                    fallbackIcon="fi fi-rr-users"
                    size="xl"
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-foreground">Community Transformation</h3>
                  <p className="text-muted-foreground">
                    A safe space where children learn, grow—and belong. Building bridges 
                    across communities while celebrating our diversity.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <MulticolorSVG 
                    src="/icons/hammer.svg"
                    alt="Legacy Building"
                    fallbackIcon="fi fi-rr-hammer"
                    size="xl"
                    className="mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-foreground">Legacy Building</h3>
                  <p className="text-muted-foreground">
                    Your support helps lay the first brick in a legacy of learning. 
                    Real change starts with bold belief and strategic investment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Equity & Accessibility Focus */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 lg:p-12 rounded-2xl">
              <div className="text-center space-y-6 mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">Help Us Build a Place Where Every Child Can Dream</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Let's create a future where play is a right, not a privilege. Every aspect of the museum 
                  is designed with accessibility and affordability at its core.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <MulticolorSVG 
                      src="/icons/financial.svg"
                      alt="Equitable Access"
                      fallbackIcon="fi fi-rr-dollar"
                      size="sm"
                    />
                  </div>
                  <h5 className="font-semibold text-foreground">Equitable Access</h5>
                  <p className="text-sm text-muted-foreground">Sliding scale pricing ensures wonder is accessible to all families</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <MulticolorSVG 
                      src="/icons/accessibility.svg"
                      alt="Universal Design"
                      fallbackIcon="fi fi-rr-wheelchair"
                      size="sm"
                    />
                  </div>
                  <h5 className="font-semibold text-foreground">Universal Design</h5>
                  <p className="text-sm text-muted-foreground">Fully accessible exhibits honoring every child's right to explore</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <MulticolorSVG 
                      src="/icons/school-bus.svg"
                      alt="School Partnerships"
                      fallbackIcon="fi fi-rr-school-bus"
                      size="sm"
                    />
                  </div>
                  <h5 className="font-semibold text-foreground">School Partnerships</h5>
                  <p className="text-sm text-muted-foreground">Free field trips ensuring every classroom can experience wonder</p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <MulticolorSVG 
                      src="/icons/heart-community.svg"
                      alt="Community Programs"
                      fallbackIcon="fi fi-rr-heart"
                      size="sm"
                    />
                  </div>
                  <h5 className="font-semibold text-foreground">Community Programs</h5>
                  <p className="text-sm text-muted-foreground">Free programming rooted in hope, powered by community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Transforming Vacant Land into a Legacy of Learning</h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Turning 4 acres of vacant land into a hub of joy and justice—a symbol of what's 
                possible when communities invest in their children's futures.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <MulticolorSVG 
                    src="/icons/museum-main.svg"
                    alt="Museum Building"
                    fallbackIcon="fi fi-rr-museum"
                    size="xl"
                    className="mx-auto"
                  />
                  <h4 className="text-2xl font-bold text-foreground">50,000 sq ft</h4>
                  <h5 className="text-xl font-semibold text-primary">Museum Building</h5>
                  <p className="text-muted-foreground">
                    Interactive exhibits spanning arts, sciences, and humanities. 
                    Designed for accessibility and inclusive learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <Car className="w-16 h-16 text-primary mx-auto" />
                  <h4 className="text-2xl font-bold text-foreground">1 Acre</h4>
                  <h5 className="text-xl font-semibold text-primary">Parking Area</h5>
                  <p className="text-muted-foreground">
                    Ample, accessible parking ensuring easy visits for families 
                    throughout the region.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-8 text-center space-y-4">
                  <MulticolorSVG 
                    src="/icons/animals.svg"
                    alt="Nature Campus"
                    fallbackIcon="fi fi-rr-trees"
                    size="xl"
                    className="mx-auto"
                  />
                  <h4 className="text-2xl font-bold text-foreground">2 Acres</h4>
                  <h5 className="text-xl font-semibold text-primary">Outdoor Campus</h5>
                  <p className="text-muted-foreground">
                    Nature-based learning environments and outdoor classrooms 
                    connecting children with nature.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 lg:p-12 rounded-lg shadow-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Map className="w-8 h-8 text-primary" />
                    <h4 className="text-2xl font-bold text-primary">Strategic Location</h4>
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
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Map className="w-16 h-16 text-primary mx-auto" />
                      <div className="space-y-2">
                        <h5 className="text-lg font-semibold text-primary">Site Development Plan</h5>
                        <p className="text-sm text-muted-foreground px-4">
                          Detailed architectural plans and site layout coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 