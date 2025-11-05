import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RecentWork } from "@/components/RecentWork";
import { WhyWebsite } from "@/components/WhyWebsite";
import { About } from "@/components/About";
import { ClientRoster } from "@/components/ClientRoster";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <RecentWork />
      <WhyWebsite />
      <About />
      <ClientRoster />
      <Footer />
    </div>
  );
};

export default Index;
