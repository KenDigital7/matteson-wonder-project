
import { useState } from "react";
import { DollarSign, Mail, Download, Users, Heart, Building, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about our progress and opportunities to get involved.",
    });
    setEmail("");
    setName("");
  };

  const handleContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours to discuss partnership opportunities.",
    });
    setEmail("");
    setName("");
    setMessage("");
  };

  const donationLevels = [
    {
      level: "Champion",
      amount: "$25,000+",
      icon: Star,
      color: "border-yellow-500 bg-yellow-50",
      benefits: ["Recognition as Founding Champion", "Exclusive updates and events", "Personal consultation with leadership", "Naming opportunity consideration"]
    },
    {
      level: "Advocate", 
      amount: "$10,000+",
      icon: Building,
      color: "border-blue-500 bg-blue-50",
      benefits: ["Recognition as Founding Advocate", "Quarterly progress reports", "Private donor events", "Early access to programs"]
    },
    {
      level: "Supporter",
      amount: "$2,500+", 
      icon: Heart,
      color: "border-green-500 bg-green-50",
      benefits: ["Recognition as Founding Supporter", "Semi-annual updates", "Donor appreciation events", "Museum preview access"]
    },
    {
      level: "Friend",
      amount: "$500+",
      icon: Users,
      color: "border-orange-500 bg-orange-50", 
      benefits: ["Recognition as Founding Friend", "Annual updates", "Community events invitation", "Early membership offers"]
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in creating an extraordinary children's museum that will serve as a beacon 
              of educational equity and community pride for generations to come.
            </p>
          </div>

          {/* Primary CTA - Feasibility Study */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Support Our Feasibility Study</h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your investment in our feasibility study is the critical first step toward securing 
              $15-20 million in New Market Tax Credits and making this vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                onClick={() => toast({ title: "Donation Portal", description: "Secure donation processing will be integrated here." })}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>

          {/* Founding Member Levels */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Founding Member Recognition</h3>
              <p className="text-lg text-muted-foreground">
                Early supporters will be recognized as founding members with special benefits and recognition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationLevels.map((level, index) => (
                <Card key={index} className={`hover-scale border-2 ${level.color}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center space-y-3">
                      <level.icon className="w-12 h-12 mx-auto text-foreground" />
                      <h4 className="text-xl font-bold text-foreground">{level.level}</h4>
                      <p className="text-2xl font-bold text-primary">{level.amount}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Newsletter Signup */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Stay Connected</h3>
                <p className="text-muted-foreground">
                  Get updates on our progress, upcoming events, and new opportunities to get involved.
                </p>
              </div>

              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe to Updates
                </Button>
              </form>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Partnership Inquiries</h3>
                <p className="text-muted-foreground">
                  Interested in corporate sponsorship, major gift opportunities, or community partnerships?
                </p>
              </div>

              <form onSubmit={handleContactForm} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name / Organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Tell us about your interest in supporting the Matteson Children's Museum..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32"
                  required
                />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
            <div className="text-center space-y-6 mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">Resources & Information</h3>
              <p className="text-lg text-muted-foreground">
                Download our materials to learn more about the project and share with others.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Button 
                variant="outline" 
                className="h-auto p-6 flex flex-col items-center space-y-3"
                onClick={() => toast({ title: "Download Available", description: "Feasibility study proposal will be available for download." })}
              >
                <Download className="w-8 h-8 text-blue-600" />
                <div className="text-center">
                  <p className="font-semibold">Feasibility Study Proposal</p>
                  <p className="text-sm text-muted-foreground">Detailed project overview</p>
                </div>
              </Button>

              <Button 
                variant="outline"
                className="h-auto p-6 flex flex-col items-center space-y-3"
                onClick={() => toast({ title: "Download Available", description: "Financial projections document will be available for download." })}
              >
                <Download className="w-8 h-8 text-green-600" />
                <div className="text-center">
                  <p className="font-semibold">Financial Projections</p>
                  <p className="text-sm text-muted-foreground">Budget and sustainability plan</p>
                </div>
              </Button>

              <Button 
                variant="outline"
                className="h-auto p-6 flex flex-col items-center space-y-3"
                onClick={() => toast({ title: "Download Available", description: "Presentation deck will be available for download." })}
              >
                <Download className="w-8 h-8 text-orange-600" />
                <div className="text-center">
                  <p className="font-semibold">Presentation Deck</p>
                  <p className="text-sm text-muted-foreground">Share our vision with others</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
