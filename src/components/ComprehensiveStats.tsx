import { 
  Users, 
  DollarSign, 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  Heart,
  Clock,
  Navigation
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ComprehensiveStats = () => {
  const keyStats = [
    {
      number: "20",
      label: "miles to nearest children's museum",
      icon: Navigation,
      color: "border-t-blue-500",
      iconColor: "text-blue-500",
      description: "Addressing a critical gap in educational resources"
    },
    {
      number: "50,000+",
      label: "children in target region",
      icon: Users,
      color: "border-t-green-500", 
      iconColor: "text-green-500",
      description: "Students served annually through programming"
    },
    {
      number: "200,000+",
      label: "annual visitors expected",
      icon: Heart,
      color: "border-t-red-500",
      iconColor: "text-red-500", 
      description: "Families from across the south suburban region"
    },
    {
      number: "$15M+",
      label: "annual economic impact",
      icon: DollarSign,
      color: "border-t-orange-500",
      iconColor: "text-orange-500",
      description: "Direct and indirect economic benefits"
    },
    {
      number: "Local",
      label: "employment opportunities",
      icon: MapPin,
      color: "border-t-purple-500",
      iconColor: "text-purple-500",
      description: "Full-time and part-time jobs for our community"
    },
    {
      number: "2028",
      label: "planned opening year",
      icon: Clock,
      color: "border-t-pink-500",
      iconColor: "text-pink-500",
      description: "Grand opening timeline"
    }
  ];

  const locationStats = [
    {
      number: "62,900",
      label: "daily traffic count",
      description: "High visibility location on Cicero Avenue"
    },
    {
      number: "25%",
      label: "property value increase", 
      description: "Projected boost to surrounding area"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">By the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Matteson Children's Museum will serve as a catalyst for educational equity, 
              economic development, and community pride throughout south suburban Cook County.
            </p>
          </div>

          {/* Key Impact Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyStats.map((stat, index) => (
              <Card key={index} className={`hover-scale border-t-4 ${stat.color} transition-all hover:shadow-lg`}>
                <CardContent className="p-6 text-center space-y-4">
                  <stat.icon className={`w-12 h-12 ${stat.iconColor} mx-auto`} />
                  <div className={`text-3xl font-bold ${stat.iconColor.replace('text-', 'text-')}`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground capitalize">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location & Development Stats */}
          <div className="bg-blue-50 p-8 lg:p-12 rounded-2xl">
            <div className="text-center space-y-6 mb-8">
              <h3 className="text-2xl font-bold text-primary">Strategic Location Benefits</h3>
              <p className="text-lg text-muted-foreground">
                Prime positioning at the intersection of Cicero Avenue and Lincoln Highway
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-center">
              {locationStats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-4xl lg:text-5xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground capitalize">
                    {stat.label}
                  </h4>
                  <p className="text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                These Numbers Tell a Story
              </h3>
              <p className="text-lg text-muted-foreground">
                Of opportunity, equity, and community transformation. Your support helps us turn 
                these projections into reality for the families of south suburban Cook County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveStats; 