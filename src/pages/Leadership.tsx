import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LeadershipPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boardMembers = [
    {
      name: "Michelle Kennedy",
      title: "Founder & Board President",
      position: "Founder + Executive Director + Board President",
      image: "https://kendigital7.github.io/matteson-wonder-project/images/Logo/MCM_Logo.png", // Using museum logo as placeholder
      bio: "Michelle Kennedy is the Founder + Executive Director + Board President of the Matteson Children's Museum (\"MCM\"). Michelle has worked for 25 years in Commercial Real Estate Finance and is currently a Vice president at US Bank. She specializes in providing equity and debt for complex urban projects with various forms of tax credit capital. Michelle has lived in Matteson for 19 years. She is also the Founder + former Producer of the Chicago South Side Film Festival. Michelle plans to enroll in Northwestern University's online Museum Studies Certificate program in the Summer of 2025."
    },
    {
      name: "Cecil Matthews", 
      title: "Director + Treasurer",
      position: "Director + Treasurer",
      image: "https://kendigital7.github.io/matteson-wonder-project/images/Logo/MCM_Logo.png", // Using museum logo as placeholder
      bio: "Cecil Matthews earned Bachelor of Science and a Master of Science degrees in Accounting from the University of Illinois. For the past 15 years, Cecil has resided in the South / Southwest suburbs – most recently in Frankfort, IL. Cecil has a diverse background in accounting, finance, and IT. He currently works as Director of Finance for a large Chicago law firm, and is also a licensed real estate broker and real estate investor."
    },
    {
      name: "Aleatha Muhammad",
      title: "Director + Secretary", 
      position: "Director + Secretary",
      image: "https://kendigital7.github.io/matteson-wonder-project/images/Leadership Headshots/Aleatha.Muhammad.jpg",
      bio: "Aleatha is a Financial Consultant with Cetera Advisor Networks and runs a comprehensive wealth management and insurance practice working primarily with business owners and medical professionals. A former Vice President of Academic Relations and Board Member for the Chicago-West Chapter of the Institute of Internal Auditors, she has also served on several boards, including Garfield Park Community Council, Providence St. Mel Alumni Advisory Board and continues to volunteer with various community endeavors. She lives in Maywood, IL."
    },
    {
      name: "LaTanya Harris",
      title: "Director",
      position: "Director", 
      image: "https://kendigital7.github.io/matteson-wonder-project/images/Leadership Headshots/LaTanya.Harris.jpg", 
      bio: "LaTanya Harris holds a Master's degree in Social Work from Loyola University and a Master of Education degree from Governors State University. With over 20 years of experience in the field of education, she has spent the last 14 years as a high school principal. LaTanya's extensive background in both social work and education provides her with a unique perspective on student development and community engagement. Passionate about empowering students and educators alike, she strives to implement innovative programs that enhance academic achievement and overall well-being. She lives in Matteson, IL."
    },
    {
      name: "Bevon Joseph",
      title: "Director",
      position: "Director",
      image: "https://kendigital7.github.io/matteson-wonder-project/images/Leadership Headshots/Bevon.Joseph.jpg",
      bio: "Bevon Joseph is the founder of the Greenwood Project. Through his combined efforts with the Greenwood Project, his extensive personal engagements—such as speaking at conferences, mentoring students, and collaborating with educational institutions— and his recent work with the New York City Department of Education, Bevon has positively impacted the lives of over 2,000 Black and Latinx students. His initiatives have significantly contributed to a high on-time graduation and full employment rate among college graduates involved in his programs. His academic credentials include a B.A. from DePaul University and participation in the Kellogg School of Management's Executive Education leadership program."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Board of Directors Header with Board President */}
      <section className="py-[25px] relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
        {/* Background image at full opacity */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://kendigital7.github.io/matteson-wonder-project/images/Leadership Headshots/mediaken_silhouettes_of_cog_wheels_with_tiled_pattern_flat_prim_7e66f4d5-f104-4594-b49a-b8601840825e.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        {/* Black overlay with 60% opacity */}
        <div 
          className="absolute inset-0 bg-black"
          style={{
            opacity: 0.6
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Title and Description */}
              <div className="text-white space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold">Board of Directors</h1>
                <p className="text-xl lg:text-2xl opacity-90">
                  Meet the dedicated leaders bringing the Matteson Children's Museum to life through their expertise in finance, education, and community development.
                </p>
              </div>
              
              {/* Right Side - Board President Card */}
              <div className="flex justify-center lg:justify-end">
                <Card className="text-center hover-scale border-0 bg-card max-w-sm w-full">
                  <CardContent className="p-6 space-y-4">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                      {boardMembers[0].image ? (
                        <img 
                          src={boardMembers[0].image} 
                          alt={boardMembers[0].name}
                          className="w-64 h-64 rounded-lg object-cover shadow-lg"
                        />
                      ) : (
                        <div className="w-64 h-64 rounded-lg bg-muted flex items-center justify-center shadow-lg">
                          <User className="w-32 h-32 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{boardMembers[0].name}</h3>
                      <p className="text-primary font-semibold">{boardMembers[0].title}</p>
                    </div>
                    
                    {/* Accordion for Bio */}
                    <div className="pt-2">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-0" className="border-none">
                          <AccordionTrigger className="text-primary hover:text-primary/80 text-sm font-medium py-2 hover:no-underline">
                            Learn More
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground text-left leading-relaxed pt-2">
                            {boardMembers[0].bio}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    {/* Photo Coming Soon Badge */}
                    {!boardMembers[0].image && (
                      <div className="inline-flex items-center space-x-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <User className="w-3 h-3" />
                        <span>Photo coming soon</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Board Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Other Board Members - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.slice(1).map((member, index) => (
                <Card key={index + 1} className="text-center hover-scale border-0 bg-card">
                  <CardContent className="p-6 space-y-4">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-64 h-64 rounded-lg object-cover shadow-lg"
                        />
                      ) : (
                        <div className="w-64 h-64 rounded-lg bg-muted flex items-center justify-center shadow-lg">
                          <User className="w-32 h-32 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.title}</p>
                    </div>
                    
                    {/* Accordion for Bio */}
                    <div className="pt-2">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`item-${index + 1}`} className="border-none">
                          <AccordionTrigger className="text-primary hover:text-primary/80 text-sm font-medium py-2 hover:no-underline">
                            Learn More
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground text-left leading-relaxed pt-2">
                            {member.bio}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    
                    {/* Photo Coming Soon Badge */}
                    {!member.image && (
                      <div className="inline-flex items-center space-x-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <User className="w-3 h-3" />
                        <span>Photo coming soon</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeadershipPage; 