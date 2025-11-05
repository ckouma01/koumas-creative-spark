import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Protoporia UNIC",
    description: "Modern website for student political movement with news updates and member management",
    url: "https://protoporiaunic.com",
    tags: ["React", "Modern Design", "Student Organization"],
  },
  {
    title: "Vasilevousa",
    description: "Elegant showcase for handmade mosaic art by Pantelis Miamiliotis",
    url: "https://koumasweb.com/vasilevousa-main/",
    tags: ["Gallery", "Art Portfolio", "Heritage"],
  },
  {
    title: "Pet Love Studio",
    description: "Professional pet grooming and shop with online booking system",
    url: "https://petlove-studio.com",
    tags: ["Booking System", "E-commerce", "Pet Services"],
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover-lift fade-in group"
            >
              <div className="relative overflow-hidden h-[500px] bg-secondary">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto transition-all scale-75 origin-top-left"
                  style={{ width: '133.33%', height: '133.33%' }}
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity pointer-events-none" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg group-hover:scale-110 transition-transform pointer-events-none">
                  👆 Try Me!
                </div>
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
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
