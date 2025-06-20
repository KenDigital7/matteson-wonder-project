import { DollarSign, Download, Calendar, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import NewsletterModal from "./NewsletterModal";
import PartnershipModal from "./PartnershipModal";
import DonationModal from "./DonationModal";

const GetInvolved = () => {
  const { toast } = useToast();

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Join Us at the Intersection of Play, Possibility, and Purpose</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your support helps lay the first brick in a legacy of learning. Together, we can close 
              the gap and create extraordinary opportunities for South Suburban children.
            </p>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-orange-700 italic">
                "Feasibility today. Foundation tomorrow. Futures forever."
              </p>
            </div>
          </div>

          {/* Primary CTA - Feasibility Study */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Invest in Wonder. Invest in the Matteson Children's Museum.</h3>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your investment in our feasibility study is the critical first step toward securing 
              $15-20 million in funding and transforming vacant land into a hub of joy and justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonationModal 
                trigger={
                  <Button 
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    Support the Movement
                  </Button>
                }
              />
              <PartnershipModal 
                trigger={
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Partner With Us
                  </Button>
                }
              />
            </div>
          </div>

          {/* Simplified Action Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Users2 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Join the Movement</h3>
                <p className="text-muted-foreground">
                  Stay connected to this movement for equity. Get updates on our progress and 
                  new opportunities to be part of the transformation.
                </p>
                <NewsletterModal />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  Bold belief requires strategic investment. Explore corporate sponsorship, 
                  major gift opportunities, and transformative community partnerships.
                </p>
                <PartnershipModal />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Founding Legacy</h3>
                <p className="text-muted-foreground">
                  Become a founding member and help us build the first brick in a legacy of learning. 
                  Your name will be part of this historic transformation.
                </p>
                <DonationModal />
              </div>
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
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:bg-blue-50"
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
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:bg-green-50"
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
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:bg-orange-50"
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
