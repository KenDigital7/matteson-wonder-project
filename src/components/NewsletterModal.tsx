import { useState } from "react";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about our progress and opportunities to get involved.",
    });
    setEmail("");
    setName("");
    setIsOpen(false);
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
            />
            <Input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 h-12"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe to Updates
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="px-4"
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