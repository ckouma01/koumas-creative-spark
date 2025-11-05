import { ArrowRight, Code, Globe, Monitor, Smartphone, Database, Server, Wifi, Layout, Laptop } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center animated-bg relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight fade-in">
            Let's get your business{" "}
            <span className="glow-text">shining bright</span>{" "}
            in the online world
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground fade-in">
            You are one click away.
          </p>
          
          <div className="fade-in">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:animate-pulse-glow transition-all group"
            >
              Get a Website
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating orbs for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Scattered web-related icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <Code className="absolute top-[15%] left-[10%] w-12 h-12 text-primary animate-float" />
          <Globe className="absolute top-[25%] right-[15%] w-16 h-16 text-accent animate-float" style={{ animationDelay: "1s" }} />
          <Monitor className="absolute top-[60%] left-[8%] w-14 h-14 text-primary animate-float" style={{ animationDelay: "2s" }} />
          <Smartphone className="absolute bottom-[20%] right-[12%] w-10 h-10 text-accent animate-float" style={{ animationDelay: "1.5s" }} />
          <Database className="absolute top-[45%] right-[8%] w-12 h-12 text-primary animate-float" style={{ animationDelay: "0.5s" }} />
          <Server className="absolute top-[70%] left-[20%] w-11 h-11 text-accent animate-float" style={{ animationDelay: "2.5s" }} />
          <Wifi className="absolute top-[35%] left-[25%] w-10 h-10 text-primary animate-float" style={{ animationDelay: "3s" }} />
          <Layout className="absolute bottom-[30%] left-[15%] w-13 h-13 text-accent animate-float" style={{ animationDelay: "1.8s" }} />
          <Laptop className="absolute top-[20%] right-[25%] w-14 h-14 text-primary animate-float" style={{ animationDelay: "0.8s" }} />
        </div>
      </div>
    </section>
  );
};
