import { DollarSign, Star, Building, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DonationModalProps {
  trigger?: React.ReactNode;
}

const DonationModal = ({ trigger }: DonationModalProps) => {
  const { toast } = useToast();

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

  const handleDonate = (level: string, amount: string) => {
    toast({ 
      title: `${level} Level Selected`, 
      description: `Secure donation processing for ${amount} will be integrated here.` 
    });
  };

  const defaultTrigger = (
    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
      <DollarSign className="mr-2 h-5 w-5" />
      View Donation Levels
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Founding Member Recognition</DialogTitle>
          <DialogDescription className="text-base">
            Early supporters will be recognized as founding members with special benefits and recognition. 
            Your investment helps fund our feasibility study and secure major funding opportunities.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {donationLevels.map((level, index) => (
            <Card key={index} className={`hover-scale border-2 ${level.color} transition-all hover:shadow-lg`}>
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

                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                  onClick={() => handleDonate(level.level, level.amount)}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Choose {level.level}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Support Our Feasibility Study</h3>
            <p className="text-orange-100">
              Your investment is the critical first step toward securing $15-20 million in New Market Tax Credits.
            </p>
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => toast({ title: "Custom Donation", description: "Custom donation processing will be integrated here." })}
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Make Custom Donation
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <p>All donations are tax-deductible. You will receive a receipt for your records.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal; 