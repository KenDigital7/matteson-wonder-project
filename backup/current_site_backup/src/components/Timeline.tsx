import { CheckCircle, Circle, Clock, Calendar, Target, Hammer, PartyPopper } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Timeline = () => {
  const phases = [
    {
      id: "foundation",
      title: "Foundation Phase",
      period: "2Q2024 - 1Q2025",
      status: "current",
      icon: Target,
      description: "Establishing organizational structure and securing initial support",
      color: "bg-green-100 border-green-500 text-green-700",
      milestones: [
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
        }
      ]
    },
    {
      id: "planning",
      title: "Planning & Feasibility Phase",
      period: "3Q2025 - 1Q2026",
      status: "upcoming",
      icon: Calendar,
      description: "Comprehensive planning and feasibility assessment",
      color: "bg-blue-100 border-blue-500 text-blue-700",
      milestones: [
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
        }
      ]
    },
    {
      id: "funding",
      title: "Funding & Design Phase",
      period: "1Q2026 - 1Q2027",
      status: "upcoming",
      icon: Target,
      description: "Capital campaign and major funding acquisition",
      color: "bg-orange-100 border-orange-500 text-orange-700",
      milestones: [
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
        }
      ]
    },
    {
      id: "construction",
      title: "Construction Phase",
      period: "4Q2027 - 3Q2028",
      status: "upcoming",
      icon: Hammer,
      description: "Building construction and site development",
      color: "bg-purple-100 border-purple-500 text-purple-700",
      milestones: [
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
        }
      ]
    },
    {
      id: "opening",
      title: "Opening Phase",
      period: "4Q2028",
      status: "upcoming",
      icon: PartyPopper,
      description: "Final preparations and grand opening",
      color: "bg-pink-100 border-pink-500 text-pink-700",
      milestones: [
        {
          date: "4Q2028",
          title: "Grand Opening",
          status: "upcoming",
          description: "Official opening to the public"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "current":
        return <Clock className="w-5 h-5 text-orange-500" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPhaseStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "border-l-4 border-l-orange-500";
      case "completed":
        return "border-l-4 border-l-green-500";
      default:
        return "border-l-4 border-l-gray-300";
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

          <Accordion type="multiple" className="w-full space-y-4">
            {phases.map((phase, index) => (
              <AccordionItem 
                key={phase.id} 
                value={phase.id}
                className={`bg-white rounded-lg border-2 border-gray-200 overflow-hidden ${getPhaseStatusColor(phase.status)}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <div className="flex items-center space-x-4 w-full">
                    <div className={`p-3 rounded-full ${phase.color}`}>
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                          <p className="text-sm text-muted-foreground">{phase.period}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{phase.description}</p>
                          {phase.status === "current" && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              Active Phase
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    {phase.milestones.map((milestone, mIndex) => (
                      <div key={mIndex} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(milestone.status)}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                            <span className="text-sm font-medium text-muted-foreground bg-white px-2 py-1 rounded">
                              {milestone.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 