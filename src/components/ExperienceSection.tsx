import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  color: string;
  dotColor: string;
  roles: {
    title: string;
    period: string;
    bullets: string[];
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
        period: "Oct 2025 – Dec 2025",
        bullets: [
          "Designed and developed scalable Java Spring Boot microservices for enterprise CX platform",
          "Improved system performance and reliability across high-traffic endpoints",
          "Resolved high-priority production issues with minimal downtime",
        ],
      },
      {
        title: "Software Development Engineer",
        period: "Jul 2024 – Sep 2025",
        bullets: [
          "Built microservices using Java, Hibernate, and J2EE for core product features",
          "Refactored legacy APIs improving response times and code maintainability",
          "Added comprehensive unit testing and participated in Agile sprints and code reviews",
        ],
      },
      {
        title: "Software Development Engineer Trainee",
        period: "Jul 2023 – Jul 2024",
        bullets: [
          "Developed Spring Boot backend services for customer experience workflows",
          "Debugged REST APIs and supported production system stability",
          "Collaborated with cross-functional teams to ship product features on time",
        ],
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
        bullets: [
          "Built IoT automation and monitoring solutions using embedded systems",
          "Designed sensor data pipelines for real-time monitoring dashboards",
        ],
      },
    ],
  },
  {
    company: "Sanjith Controls",
    color: "text-[hsl(330_80%_60%)]",
    dotColor: "bg-[hsl(330_80%_60%/0.3)] border-[hsl(330_80%_60%)]",
    roles: [
      {
        title: "Internship in Starter Manufacturing",
        period: "Internship",
        bullets: [
          "Completed a starter manufacturing internship, gaining hands-on experience in production processes and industry practices",
        ],
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

                      <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h4 className="font-semibold text-foreground">
                            {role.title}
                          </h4>
                          <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                            <Calendar size={12} />
                            {role.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {role.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className={`mt-1.5 text-xs ${exp.color}`}>▹</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
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