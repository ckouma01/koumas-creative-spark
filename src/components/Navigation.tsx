import { Instagram, Facebook } from "lucide-react";

export const Navigation = () => {
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
