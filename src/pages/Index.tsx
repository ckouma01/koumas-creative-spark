import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { RecentWork } from "@/components/RecentWork";
import { WhyWebsite } from "@/components/WhyWebsite";
import { About } from "@/components/About";
import { ClientRoster } from "@/components/ClientRoster";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Testimonials />
      <RecentWork />
      <WhyWebsite />
      <About />
      <Contact />
      <ClientRoster />
      <Footer />
    </div>
  );
};

export default Index;
