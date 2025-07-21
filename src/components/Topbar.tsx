import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>info@peanechestate.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Facebook className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
          <Twitter className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
          <Instagram className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
          <Linkedin className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;