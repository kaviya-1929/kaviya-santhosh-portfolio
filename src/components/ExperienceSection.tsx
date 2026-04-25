import { motion } from "framer-motion";

interface Role {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const roles: Role[] = [
  {
    title: "Software Development Engineer – II",
    company: "Kapture CX",
    period: "Oct 2025 — Present",
    description:
      "Designing and scaling microservices for a high-traffic enterprise CX platform serving real-time interactions. Lead integrations across Meta WhatsApp Business APIs, telephony, and email within the CRM, plus chatbot-driven automation that removes manual work. Own end-to-end resolution of P0/P1 production incidents — root cause, fix, and recovery with minimal downtime.",
    tech: ["Java", "Spring Boot", "Microservices", "REST", "WhatsApp API", "Telephony", "CRM"],
  },
  {
    title: "Software Development Engineer",
    company: "Kapture CX",
    period: "Jul 2024 — Sep 2025",
    description:
      "Built core backend modules as microservices using Java, Hibernate, and J2EE. Refactored legacy APIs to cut response times and reduce technical debt, and streamlined customer interaction workflows across messaging and support channels through CRM integrations. Improved code quality through structured unit testing and consistent peer reviews.",
    tech: ["Java", "Hibernate", "J2EE", "REST APIs", "MySQL", "Unit Testing"],
  },
  {
    title: "Software Development Engineer Trainee",
    company: "Kapture CX",
    period: "Jul 2023 — Jul 2024",
    description:
      "Developed Spring Boot services powering customer experience workflows in production. Stabilized REST APIs to lift uptime and partnered with frontend teams using ReactJS to ship smoother end-to-end functionality.",
    tech: ["Java", "Spring Boot", "REST APIs", "ReactJS", "Debugging"],
  },
  {
    title: "IoT Intern",
    company: "Sai Incubation Center",
    period: "Dec 2022",
    description:
      "Engineered automation and monitoring solutions on embedded systems. Designed sensor data pipelines that powered real-time dashboards for system performance.",
    tech: ["IoT", "Embedded Systems", "Data Pipelines"],
  },
  {
    title: "Internship — Starter Manufacturing",
    company: "Sanjith Controls",
    period: "Internship",
    description:
      "Hands-on exposure to manufacturing processes and industrial workflows, building a practical understanding of real-world production systems.",
    tech: ["Manufacturing", "Industrial Workflows"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <motion.div {...fadeUp} className="mb-16 max-w-2xl">
          <div className="eyebrow mb-4">Experience</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] gradient-text">
            Where I've{" "}
            <span className="font-serif-display italic accent-text font-normal">shipped.</span>
          </h2>
        </motion.div>

        <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
          {roles.map((role, i) => (
            <motion.article
              key={`${role.company}-${role.title}`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: Math.min(i * 0.06, 0.3) }}
              className="group bg-card hover:bg-surface transition-colors p-6 sm:p-8 grid lg:grid-cols-12 gap-4 lg:gap-8"
            >
              {/* Period */}
              <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start gap-3 lg:gap-1">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {role.period}
                </div>
                <div className="text-xs font-mono text-primary/80 lg:mt-1">{role.company}</div>
              </div>

              {/* Body */}
              <div className="lg:col-span-9">
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:accent-text transition-all">
                  {role.title}
                </h3>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
