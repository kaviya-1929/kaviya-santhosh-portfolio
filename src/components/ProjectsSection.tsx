import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  n: string;
  title: string;
  role?: string;
  description: string;
  tech: string[];
  href: string | null;
  accent: string; // gradient classes
};

const projects: Project[] = [
  {
    n: "01",
    title: "KapRewardsSystem",
    role: "Java Developer",
    description:
      "Developed backend REST APIs using Java and Spring Boot for an employee rewards and recognition platform. Implemented business logic to calculate and assign reward points based on completed support tickets. Built CRUD APIs for reward management, employee rewards, and reward history, and integrated backend services with the React.js frontend for seamless data exchange. Performed API testing using Postman, added input validation and exception handling, and collaborated with cross-functional teams in an Agile environment through code reviews, bug fixing, and production support.",
    tech: ["Java", "Spring Boot", "REST APIs", "React.js", "MySQL", "Git"],
    href: null,
    accent: "from-fuchsia-500 via-pink-500 to-orange-400",
  },
  {
    n: "02",
    title: "College Stack App",
    description:
      "Built a web application using a stack-based workflow to handle structured data operations efficiently and improve user interaction.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "#",
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
  },
  {
    n: "03",
    title: "Buck-Boost Converter",
    description:
      "Designed and implemented a buck-boost converter circuit for efficient voltage regulation in electronic devices.",
    tech: ["Circuit Design", "Power Electronics"],
    href: null,
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    n: "04",
    title: "Home Automation",
    description:
      "Developed a voice-controlled IoT system enabling real-time device control through speech recognition and automation logic.",
    tech: ["IoT", "Voice Recognition", "Automation"],
    href: null,
    accent: "from-amber-400 via-orange-500 to-rose-500",
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
          {projects.map((p, i) => {
            const big = i < 2;
            return (
              <motion.a
                key={p.title}
                href={p.href ?? undefined}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: Math.min(i * 0.08, 0.3) }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98, rotate: -0.4 }}
                className={`group relative surface-card overflow-hidden p-7 sm:p-8 flex flex-col transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)] ${
                  big ? "md:col-span-2 md:flex-row md:items-stretch md:gap-10" : ""
                }`}
              >
                {/* Gradient accent bar */}
                <span
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${p.accent} opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                {/* Glow blob on hover */}
                <span
                  className={`pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
                />

                <div
                  className={`relative flex items-start justify-between gap-4 mb-6 ${
                    big ? "md:mb-0 md:flex-col md:items-start md:w-40 md:shrink-0" : ""
                  }`}
                >
                  <span
                    className={`text-xs font-mono tracking-widest bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}
                  >
                    {p.n}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:scale-90 transition-all"
                  />
                </div>

                <div className="relative flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:accent-text transition-all">
                    {p.title}
                  </h3>
                  {p.role && (
                    <div className="mt-1.5 flex items-center gap-2">
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.accent}`}
                      />
                      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {p.role}
                      </span>
                    </div>
                  )}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="chip transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground hover:border-primary/50 active:scale-95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
