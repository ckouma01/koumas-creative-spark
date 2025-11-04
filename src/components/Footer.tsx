import { Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 glass border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">KOUMAS WEB</h3>
            <p className="text-muted-foreground">
              Professional website development services for businesses that want to shine online.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block hover:text-primary transition-colors">
                Home
              </a>
              <a href="#projects" className="block hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="block hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@koumasweb.com"
                className="p-2 glass rounded-lg hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Koumas Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
