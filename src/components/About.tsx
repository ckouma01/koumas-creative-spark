import { Code2, Zap, Users, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Koumas Web
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting exceptional digital experiences that help businesses thrive in the modern web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Koumas Web, we believe every business deserves a powerful online presence. 
              We specialize in creating modern, responsive websites that not only look stunning 
              but deliver real results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help businesses shine in the digital world with designs that are clean, mobile-friendly, and unique to their identity. Whether you run a local shop, a creative business, or a service, we can build a website that truly represents you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With KoumasWeb, you don't just get a website — you get a partner in growing your online presence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-lg hover-lift">
              <Code2 className="w-8 h-8 text-primary mb-3 animate-pulse-glow" />
              <h4 className="font-bold text-2xl mb-1">Modern</h4>
              <p className="text-sm text-muted-foreground">Latest technologies</p>
            </div>
            <div className="glass p-6 rounded-lg hover-lift">
              <Zap className="w-8 h-8 text-primary mb-3 animate-pulse-glow" />
              <h4 className="font-bold text-2xl mb-1">Fast</h4>
              <p className="text-sm text-muted-foreground">Optimized performance</p>
            </div>
            <div className="glass p-6 rounded-lg hover-lift">
              <Users className="w-8 h-8 text-primary mb-3 animate-pulse-glow" />
              <h4 className="font-bold text-2xl mb-1">Focused</h4>
              <p className="text-sm text-muted-foreground">User-centered design</p>
            </div>
            <div className="glass p-6 rounded-lg hover-lift">
              <Award className="w-8 h-8 text-primary mb-3 animate-pulse-glow" />
              <h4 className="font-bold text-2xl mb-1">Quality</h4>
              <p className="text-sm text-muted-foreground">Excellence in every detail</p>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-lg animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Custom websites built with modern frameworks and best practices
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Beautiful designs that work perfectly on all devices and screen sizes
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Performance Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Lightning-fast websites optimized for speed and user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
