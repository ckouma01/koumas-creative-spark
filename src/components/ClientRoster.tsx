import { Award } from "lucide-react";
import protoporiaUnicLogo from "@/assets/protoporia-unic-logo.png";
import pantelisMiamiliotis from "@/assets/pantelis-miamiliotis.png";
import petLoveStudioLogo from "@/assets/pet-love-studio-logo.png";

const clients = [
  {
    name: "Protoporia UNIC",
    logo: protoporiaUnicLogo,
    instagram: "https://www.instagram.com/protoporiaunic/",
  },
  {
    name: "Pantelis Miamiliotis",
    logo: pantelisMiamiliotis,
    instagram: "https://www.instagram.com/pantelis.19/",
  },
  {
    name: "Pet Love Studio",
    logo: petLoveStudioLogo,
    instagram: "https://www.instagram.com/pet_love_studio/",
  },
];

export const ClientRoster = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold fade-in">
              Our Roster
            </h2>
            <Award className="w-10 h-10 text-primary" />
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
                <a 
                  href={client.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-32 h-32 mx-auto transition-transform hover:scale-110"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </a>
                <p className="font-semibold">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
