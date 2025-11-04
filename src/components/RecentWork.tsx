import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Protoporia – UNIC",
    description: "Heritage website for Vasilevousa Mosaic Art",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["WordPress", "Custom Design", "Heritage"],
  },
  {
    title: "Vasilevousa",
    description: "E-commerce platform for handmade mosaic art",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    tags: ["E-commerce", "Gallery", "Art"],
  },
  {
    title: "Pet Love Studio",
    description: "Professional pet photography portfolio",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
    tags: ["Portfolio", "Photography", "Booking"],
  },
];

export const RecentWork = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
            Recent Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover-lift fade-in group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
