import { useState } from "react";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { sendNewsletterConfirmation } from "@/lib/emailService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NewsletterModalProps {
  trigger?: React.ReactNode;
}

const NewsletterModal = ({ trigger }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ name, email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed!",
            description: "This email is already on our newsletter list.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        // Send newsletter confirmation email
        const emailSent = await sendNewsletterConfirmation({ name, email });
        
        if (emailSent) {
          toast({
            title: "Thank you for subscribing!",
            description: "You'll receive a confirmation email shortly with updates about our progress.",
          });
        } else {
          toast({
            title: "Subscribed successfully!",
            description: "You're now on our newsletter list. Check your email for a confirmation.",
          });
        }
        
        setEmail("");
        setName("");
        setIsOpen(false);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const defaultTrigger = (
    <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600">
      <Mail className="mr-2 h-4 w-4" />
      Stay Updated
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Stay Connected</DialogTitle>
          <DialogDescription className="text-base">
            Get updates on our progress, upcoming events, and new opportunities to get involved in creating the Matteson Children's Museum.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
              disabled={isLoading}
            />
            <Input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 h-12"
              disabled={isLoading}
            >
              <Mail className="mr-2 h-4 w-4" />
              {isLoading ? "Subscribing..." : "Subscribe to Updates"}
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
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal; 