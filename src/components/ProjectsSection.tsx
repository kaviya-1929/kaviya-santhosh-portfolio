import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "College Stack-Based Website",
    description:
      "A web application built using HTML, CSS, and JavaScript with a stack-based workflow system. Focused on efficient data handling and intuitive user interaction patterns.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: null,
    gradient: "from-primary/60 via-[hsl(200_80%_50%/0.4)] to-transparent",
  },
  {
    title: "Buck Booster Converter",
    description:
      "Designed and implemented a buck-boost converter circuit for efficient voltage regulation in electronic devices.",
    tech: ["Circuit Design", "Electronics", "Voltage Regulation"],
    github: null,
    live: null,
    gradient: "from-accent/60 via-[hsl(290_70%_60%/0.4)] to-transparent",
  },
  {
    title: "Home Automation",
    description:
      "Implemented a home automation system using voice recognition technology, enabling users to control various devices and appliances with voice commands.",
    tech: ["IoT", "Voice Recognition", "Automation"],
    github: null,
    live: null,
    gradient: "from-[hsl(330_80%_60%/0.6)] via-[hsl(25_95%_55%/0.4)] to-transparent",
  },
];

const techColors = [
  "bg-primary/15 text-primary border-primary/30",
  "bg-accent/15 text-accent border-accent/30",
  "bg-[hsl(330_80%_60%/0.15)] text-[hsl(330_80%_60%)] border-[hsl(330_80%_60%/0.3)]",
  "bg-[hsl(25_95%_55%/0.15)] text-[hsl(25_95%_55%)] border-[hsl(25_95%_55%/0.3)]",
  "bg-[hsl(210_90%_55%/0.15)] text-[hsl(210_90%_55%)] border-[hsl(210_90%_55%/0.3)]",
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
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="bg-card border-border h-full hover:border-transparent transition-all duration-300 group overflow-hidden rainbow-border card-hover-lift">
                {/* Project header with colorful gradient */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Globe className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
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
                    {project.tech.map((t, ti) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-xs font-mono px-2.5 py-1 rounded border ${techColors[ti % techColors.length]}`}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;