import { Instagram, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold gradient-text">
            KOUMAS WEB
          </a>
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.instagram.com/koumasweb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61580255278305"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        
        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-8">
              <a href="#home" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                Home
              </a>
              <a href="#projects" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                About
              </a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#why-website" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                Why You Need a Website
              </a>
              <a href="#roster" onClick={() => setOpen(false)} className="text-lg hover:text-primary transition-colors">
                Our Roster
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:animate-pulse-glow transition-all text-center"
              >
                Get a Website Now
              </a>
              
              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.instagram.com/koumasweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61580255278305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#testimonials" className="hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#why-website" className="hover:text-primary transition-colors">
            Why You Need a Website
          </a>
          <a href="#roster" className="hover:text-primary transition-colors">
            Our Roster
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:animate-pulse-glow transition-all"
          >
            Get a Website Now
          </a>
        </div>
      </div>
    </nav>
  );
};
