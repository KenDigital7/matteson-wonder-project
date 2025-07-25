import { useState } from "react";
import { MessageSquare, X, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { sendPartnershipInquiry } from "@/lib/emailService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PartnershipModalProps {
  trigger?: React.ReactNode;
}

const PartnershipModal = ({ trigger }: PartnershipModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('partnership_inquiries')
        .insert([{ name, email, message }]);

      if (error) {
        throw error;
      }

      // Send email notifications via Edge Function
      const partnershipData = { name, email, message };
      const emailSent = await sendPartnershipInquiry(partnershipData);

      if (emailSent) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours to discuss partnership opportunities.",
        });
      } else {
        toast({
          title: "Message sent!",
          description: "Your inquiry has been submitted. We'll get back to you within 24 hours.",
        });
      }
      
      setEmail("");
      setName("");
      setMessage("");
      setIsOpen(false);
    } catch (error) {
      console.error('Partnership inquiry error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly at info@mattesoncm.org.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const defaultTrigger = (
    <Button className="bg-green-600 hover:bg-green-700">
      <Building className="mr-2 h-4 w-4" />
      Partnership Inquiries
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Partnership Inquiries</DialogTitle>
          <DialogDescription className="text-base">
            Interested in corporate sponsorship, major gift opportunities, or community partnerships? 
            Let's discuss how you can help make the Matteson Children's Museum a reality.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Name / Organization"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
              disabled={isLoading}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
              disabled={isLoading}
            />
            <Textarea
              placeholder="Tell us about your interest in supporting the Matteson Children's Museum. Include details about potential sponsorship levels, partnership ideas, or specific questions you have about the project."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-32 resize-none"
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-green-600 hover:bg-green-700 h-12"
              disabled={isLoading}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="px-4"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p className="text-sm text-blue-800">
            <strong>Response Time:</strong> We typically respond within 24 hours. 
            For time-sensitive inquiries, please email us directly at info@mattesoncm.org.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartnershipModal; 