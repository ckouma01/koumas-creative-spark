import { Eye, Handshake, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: Eye,
    title: "Be Discoverable",
    description: "More and more people search online first. A website makes sure your business is visible 24/7.",
  },
  {
    icon: Handshake,
    title: "Build Trust",
    description: "A professional website builds credibility and shows your customers that you're serious and reliable.",
  },
  {
    icon: TrendingUp,
    title: "Grow Faster",
    description: "Showcase your services, attract new clients, and stay ahead of competitors who don't have an online presence.",
  },
];

export const WhyWebsite = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="why-website" className="py-24 px-4 bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Your Business Needs a Website
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 text-center hover-lift space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
