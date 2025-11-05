import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Form will handle submission to Formspree
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Website Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to elevate your online presence? Send us your details and let's get started.
          </p>
        </div>

        <form
          action="https://formspree.io/f/movnkowy"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 glass p-8 rounded-lg"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Order Request / Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full group relative overflow-hidden"
            size="lg"
          >
            <span>{isSubmitting ? "Sending..." : "Send Request"}</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Button>
        </form>
      </div>
    </section>
  );
};
