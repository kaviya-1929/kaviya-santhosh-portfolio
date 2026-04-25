import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  color: string;
  dotColor: string;
  roles: {
    title: string;
    period: string;
    description: string;
    skills: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Kapture CX",
    color: "text-primary",
    dotColor: "bg-primary/30 border-primary",
    roles: [
      {
        title: "Software Development Engineer – II",
        period: "Oct 2025 – Jan 2026",
        description:
          "Architected and developed scalable microservices in Java and Spring Boot for a high-traffic enterprise customer experience platform. Drove measurable improvements in latency, throughput, and reliability across critical APIs, ensuring consistent performance under heavy load. Owned the resolution of P0 and P1 production incidents end-to-end — quickly identifying root causes and restoring services with minimal downtime to keep the platform stable for enterprise customers.",
        skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Performance Optimization"],
      },
      {
        title: "Software Development Engineer",
        period: "Jul 2024 – Sep 2025",
        description:
          "Built and shipped core product features as microservices using Java, Hibernate, and J2EE. Led the refactoring of legacy APIs, reducing response times and significantly improving long-term maintainability of the codebase. Strengthened delivery quality through unit testing, thorough code reviews, and active ownership within Agile development cycles.",
        skills: ["Java", "Hibernate", "J2EE", "REST APIs", "Unit Testing"],
      },
      {
        title: "Software Development Engineer Trainee",
        period: "Jul 2023 – Jul 2024",
        description:
          "Developed Spring Boot backend services powering customer experience workflows in production. Debugged and stabilized REST APIs to improve system uptime and reliability. Collaborated closely with frontend teams and gained hands-on experience with ReactJS, integrating backend services into user-facing interfaces to deliver smoother end-to-end functionality.",
        skills: ["Java", "Spring Boot", "REST APIs", "Debugging", "ReactJS"],
      },
    ],
  },
  {
    company: "Sai Incubation Center",
    color: "text-accent",
    dotColor: "bg-accent/30 border-accent",
    roles: [
      {
        title: "IoT Intern",
        period: "Dec 2022",
        description:
          "Engineered automation and monitoring solutions on embedded systems. Designed sensor data pipelines that powered real-time dashboards, enabling efficient tracking and analysis of system performance.",
        skills: ["IoT", "Embedded Systems", "Data Pipelines", "Automation"],
      },
    ],
  },
  {
    company: "Sanjith Controls",
    color: "text-[hsl(330_80%_60%)]",
    dotColor: "bg-[hsl(330_80%_60%/0.3)] border-[hsl(330_80%_60%)]",
    roles: [
      {
        title: "Internship – Starter Manufacturing",
        period: "Internship",
        description:
          "Gained hands-on exposure to manufacturing processes and industrial workflows, building a practical understanding of real-world production systems and operational efficiency.",
        skills: ["Manufacturing Processes", "Industrial Workflows"],
      },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Work History</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-[hsl(330_80%_60%)]" />

          <div className="space-y-12">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.company}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: expIdx * 0.15 }}
              >
                {/* Company name */}
                <div className="flex items-center gap-3 mb-6 pl-10 md:pl-16">
                  <Briefcase className={`w-5 h-5 ${exp.color}`} />
                  <h3 className={`text-xl font-bold ${exp.color}`}>{exp.company}</h3>
                </div>

                {/* Roles */}
                <div className="space-y-6">
                  {exp.roles.map((role, roleIdx) => (
                    <motion.div
                      key={roleIdx}
                      className="relative pl-10 md:pl-16"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full ${exp.dotColor} border-2`} />

                      <div className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h4 className="font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                            <Calendar size={12} />
                            {role.period}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {role.description}
                        </p>

                        <div>
                          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">
                            Skills
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill) => (
                              <motion.span
                                key={skill}
                                whileHover={{ scale: 1.06, y: -1 }}
                                whileTap={{ scale: 0.96 }}
                                className={`text-xs font-mono px-2.5 py-1 rounded-md bg-secondary border border-border ${exp.color} hover:border-primary/40 transition-all duration-200 cursor-default`}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
