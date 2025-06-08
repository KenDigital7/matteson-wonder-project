
import { CheckCircle, Circle, Clock } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "2Q2024",
      title: "Incorporation, IRS TIN",
      status: "completed",
      description: "Officially incorporated as a 501(c)(3) nonprofit organization"
    },
    {
      date: "4Q2024", 
      title: "Obtain Matteson & Cook County Letters of Support",
      status: "completed",
      description: "Secured official community endorsements"
    },
    {
      date: "1Q2025",
      title: "Apply for Pre-Development Grants",
      status: "current",
      description: "Seeking initial funding for feasibility study and planning"
    },
    {
      date: "3Q2025",
      title: "Engage Feasibility Study",
      status: "upcoming",
      description: "Comprehensive analysis of financial viability and sustainability"
    },
    {
      date: "1Q2026",
      title: "Complete Feasibility Study",
      status: "upcoming",
      description: "Final assessment and recommendations for project viability"
    },
    {
      date: "1Q2026",
      title: "Engage Design Team",
      status: "upcoming", 
      description: "Architect, Engineer, Landscape Architect, Exhibit Designer and General Contractor"
    },
    {
      date: "1Q2026",
      title: "Start Fund Raising",
      status: "upcoming",
      description: "Launch capital campaign for construction funding"
    },
    {
      date: "3Q2026",
      title: "Apply for Federal New Market Tax Credits",
      status: "upcoming",
      description: "Pursue federal tax credit financing opportunities"
    },
    {
      date: "1Q2027",
      title: "Apply for Illinois New Market Tax Credits", 
      status: "upcoming",
      description: "State-level tax credit applications"
    },
    {
      date: "4Q2027",
      title: "Start Construction",
      status: "upcoming",
      description: "Ground breaking and construction commencement"
    },
    {
      date: "3Q2028",
      title: "Finish Construction",
      status: "upcoming",
      description: "Complete building and site development"
    },
    {
      date: "4Q2028",
      title: "Grand Opening",
      status: "upcoming",
      description: "Official opening to the public"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <Clock className="w-6 h-6 text-orange-500" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "current":
        return "border-orange-500 bg-orange-50";
      default:
        return "border-muted bg-muted/10";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Project Timeline</h2>
            <p className="text-xl text-muted-foreground">
              From incorporation to grand opening: our roadmap to creating the Matteson Children's Museum
            </p>
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-semibold">We Are Here: Q1 2025</span>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-start space-x-6 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative z-10 flex-shrink-0">
                    {getStatusIcon(event.status)}
                  </div>
                  
                  <div className={`flex-1 p-6 rounded-xl border-2 transition-all hover:shadow-lg ${getStatusColor(event.status)}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                      <span className="text-sm font-medium text-muted-foreground">{event.date}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Current Priority: Feasibility Study Funding</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your support helps us complete the crucial feasibility study that will confirm project viability 
              and unlock major funding opportunities through New Market Tax Credits.
            </p>
            <button 
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Support the Feasibility Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
