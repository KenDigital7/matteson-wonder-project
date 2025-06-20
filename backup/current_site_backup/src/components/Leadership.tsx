import { Card, CardContent } from "@/components/ui/card";
import { Mail, Building, GraduationCap, Users } from "lucide-react";

const Leadership = () => {
  const boardMembers = [
    {
      name: "Michelle Kennedy",
      title: "Board President & Founder",
      background: "25 years in Commercial Real Estate Finance",
      details: [
        "Matteson Resident Since 2006",
        "Ridgeland Manor Homeowner", 
        "Joint Bachelor of Science from University of Wisconsin and University of the West Indies",
        "Master's Degree in City & Regional Planning from Rutgers University",
        "Currently a Director in US Bank's Impact Finance Group",
        "Founder of the Chicago South Side Film Festival"
      ],
      icon: Building
    },
    {
      name: "Cecil Matthews",
      title: "Director & Treasurer",
      background: "Finance and Real Estate Professional",
      details: [
        "Bachelor of Science and Master of Science in Accounting from University of Illinois",
        "15+ years in South/Southwest suburbs",
        "Director of Finance for a large Chicago law firm",
        "Licensed real estate broker and real estate investor"
      ],
      icon: GraduationCap
    },
    {
      name: "Aleatha Muhammad",
      title: "Director & Secretary",
      background: "Financial Consultant and Community Leader",
      details: [
        "Financial Consultant with Cetera Advisor Networks",
        "Comprehensive wealth management and insurance practice",
        "Former Vice President of Academic Relations and Board Member",
        "Chicago West Chapter of Institute of Internal Auditors",
        "Lives in Maywood, IL"
      ],
      icon: Users
    },
    {
      name: "LaTanya Harris",
      title: "Director",
      background: "Education and Community Development",
      details: [
        "Master's degree in Social Work from Loyola University",
        "Master of Education from Governors State University",
        "20+ years in education as high school principal",
        "Passionate about student development and community engagement",
        "Lives in Matteson, IL"
      ],
      icon: GraduationCap
    },
    {
      name: "Bevon Joseph",
      title: "Director",
      background: "Community Development and Education",
      details: [
        "Founder of the Greenwood Project",
        "Positively impacted 2,000+ Black and Latinx students",
        "B.A. from DePaul University",
        "Kellogg School of Management Executive Education program"
      ],
      icon: Users
    }
  ];

  const developmentTeam = [
    {
      role: "Legal Counsel",
      name: "Greg Whitehead of Applegate Thorne-Thomsen",
      description: "30+ years representing commercial, CDFI and governmental lenders in construction and permanent financing"
    },
    {
      role: "New Market Tax Credit Consultant", 
      name: "Gina Nisbeth of 9th & Clinton",
      description: "Expert in designing innovative financial solutions for underserved communities nationwide"
    },
    {
      role: "Architect",
      name: "In Progress",
      description: "Preliminary conversations with Moody Nolan & the Beehyve architectural and engineering design collective"
    },
    {
      role: "Exhibit Designer",
      name: "In Progress", 
      description: "Conversations with Gyroscope Design Studio, specializing in children's museums"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Leadership & Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse, experienced team combines expertise in finance, education, community development, 
              and nonprofit management to bring this vision to life.
            </p>
          </div>

          {/* Board of Directors */}
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary">Board of Directors</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="hover-scale border-l-4 border-l-blue-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <member.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                        <p className="text-lg font-semibold text-blue-600">{member.title}</p>
                        <p className="text-muted-foreground">{member.background}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {member.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Team */}
          <div className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary">Development Team</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {developmentTeam.map((member, index) => (
                <Card key={index} className="hover-scale border-t-4 border-t-green-500">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-green-600">{member.role}</h4>
                      <p className="text-xl font-bold text-foreground">{member.name}</p>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Credibility Statement */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 lg:p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Proven Track Record</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our leadership team has successfully managed over $1 billion in complex urban development 
              projects, including New Market Tax Credit transactions, making us uniquely qualified 
              to bring this ambitious vision to fruition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@mattesonchildrensmuseum.org" 
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Leadership</span>
              </a>
              <button 
                onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
