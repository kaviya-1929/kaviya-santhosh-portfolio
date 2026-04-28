import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "College Stack App",
    description:
      "Built a web application using a stack-based workflow to handle structured data operations efficiently and improve user interaction.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "#",
  },
  {
    n: "02",
    title: "Buck-Boost Converter",
    description:
      "Designed and implemented a buck-boost converter circuit for efficient voltage regulation in electronic devices.",
    tech: ["Circuit Design", "Power Electronics"],
    href: null,
  },
  {
    n: "03",
    title: "Home Automation",
    description:
      "Developed a voice-controlled IoT system enabling real-time device control through speech recognition and automation logic.",
    tech: ["IoT", "Voice Recognition", "Automation"],
    href: null,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <motion.div {...fadeUp} className="mb-16 flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Selected Projects</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] gradient-text">
              Things I've{" "}
              <span className="font-serif-display italic accent-text font-normal">built.</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            {projects.length.toString().padStart(2, "0")} projects
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href ?? undefined}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: Math.min(i * 0.08, 0.3) }}
              className={`group surface-card lift-on-hover p-7 sm:p-8 flex flex-col ${
                i === 0 ? "md:col-span-2 md:flex-row md:items-center md:gap-10" : ""
              }`}
            >
              <div className={`flex items-start justify-between gap-4 mb-6 ${i === 0 ? "md:mb-0 md:flex-col md:items-start md:w-32" : ""}`}>
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  {p.n}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:accent-text transition-all">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
