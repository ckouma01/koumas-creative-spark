import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Protoporia UNIC",
    role: "Φοιτητική Παράταξη",
    content: "Η ιστοσελίδα που μας δημιούργησαν ταιριάζει απόλυτα στις ανάγκες μας ως φοιτητική παράταξη. Πλέον μπορούμε να ενημερώνουμε τους συμφοιτητές μας άμεσα, να διαχειριζόμαστε τις εγγραφές μελών online και να επικοινωνούμε αποτελεσματικά. Εξαιρετική δουλειά!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Vasilevousa",
    role: "Καλλιτέχνης Ψηφιδωτών",
    content: "Ως καλλιτέχνης ψηφιδωτών χρειαζόμουν μια ιστοσελίδα που θα αναδεικνύει την τέχνη μου με τον καλύτερο τρόπο. Το αποτέλεσμα ξεπέρασε κάθε προσδοκία! Η γκαλερί είναι υπέροχη και οι επισκέπτες μένουν εντυπωσιασμένοι. Ευχαριστώ πολύ!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Pet Love Studio",
    role: "Pet Grooming & Pet Shop",
    content: "Η καλύτερη επένδυση για το pet shop μας! Πλέον οι πελάτες μας μπορούν να κλείνουν ραντεβού grooming online εύκολα, να βλέπουν τα προϊόντα μας και να ενημερώνονται για τις υπηρεσίες μας. Το site είναι όμορφο και πολύ λειτουργικό. Άψογη συνεργασία!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="glow-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped shine online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 glass hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
