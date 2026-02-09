import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "College Stack-Based Website",
    description:
      "A web application built using HTML, CSS, and JavaScript with a stack-based workflow system. Focused on efficient data handling and intuitive user interaction patterns.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: null,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 grid-bg">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
          <div className="h-1 w-16 bg-primary/50 mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="bg-card border-border h-full hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                {/* Project header with code-style decoration */}
                <div className="h-1.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Globe className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors" />
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-secondary text-primary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Placeholder for future projects */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="bg-card/50 border-dashed border-border h-full flex items-center justify-center min-h-[250px]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <p className="text-muted-foreground text-sm font-mono">
                  More projects coming soon...
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
