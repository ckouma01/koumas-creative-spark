import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center animated-bg relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight fade-in">
            Let's get your business{" "}
            <span className="gradient-text">shining bright</span>{" "}
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
      </div>
    </section>
  );
};
