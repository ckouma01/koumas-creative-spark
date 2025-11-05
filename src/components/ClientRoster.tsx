import { Shirt } from "lucide-react";

const clients = [
  {
    name: "Protoporia UNIC",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
  },
  {
    name: "Vasilevousa",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
  },
  {
    name: "Pet Love Studio",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&q=80",
  },
];

export const ClientRoster = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shirt className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold fade-in">
              Our Roster
            </h2>
            <Shirt className="w-10 h-10 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground fade-in">
            We sincerely thank our amazing clients for trusting us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover-lift fade-in flex items-center justify-center"
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
