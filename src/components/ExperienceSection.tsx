import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Role {
  year: string;
  period: string;
  title: string;
  company: string;
  context: string;
  highlights: { label: string; value: string }[];
  outcome: string;
  tech: string[];
}

const roles: Role[] = [
  {
    year: "2025",
    period: "Oct 2025 — Present",
    title: "Software Development Engineer · II",
    company: "Kapture CX",
    context:
      "Designing and scaling microservices for a high-traffic enterprise CX platform serving real-time customer interactions across enterprise tenants.",
    highlights: [
      { label: "Owned", value: "P0 / P1 incident response" },
      { label: "Shipped", value: "WhatsApp · Telephony · Email" },
      { label: "Stack", value: "Java · Spring Boot · MS" },
    ],
    outcome:
      "Led integrations across Meta WhatsApp Business APIs, telephony, and email within the CRM, plus chatbot-driven automation that removes manual ops. Drove root-cause to recovery on production incidents with minimal downtime.",
    tech: ["Java", "Spring Boot", "Microservices", "REST", "WhatsApp API", "Telephony", "CRM"],
  },
  {
    year: "2024",
    period: "Jul 2024 — Sep 2025",
    title: "Software Development Engineer",
    company: "Kapture CX",
    context:
      "Built core backend modules powering customer support and messaging workflows for enterprise CRM customers.",
    highlights: [
      { label: "Refactored", value: "Legacy APIs → faster responses" },
      { label: "Improved", value: "Code quality via reviews + tests" },
      { label: "Stack", value: "Java · Hibernate · J2EE · MySQL" },
    ],
    outcome:
      "Cut response times and reduced technical debt across critical paths. Streamlined customer interaction workflows across messaging and support channels through CRM integrations.",
    tech: ["Java", "Hibernate", "J2EE", "REST APIs", "MySQL", "Unit Testing"],
  },
  {
    year: "2023",
    period: "Jul 2023 — Jul 2024",
    title: "Software Development Engineer · Trainee",
    company: "Kapture CX",
    context:
      "Joined the CX platform team and ramped into shipping production code on Spring Boot services.",
    highlights: [
      { label: "Stabilized", value: "REST APIs in production" },
      { label: "Partnered", value: "Frontend (ReactJS) handoffs" },
      { label: "Stack", value: "Java · Spring Boot · ReactJS" },
    ],
    outcome:
      "Lifted uptime on customer-facing endpoints and shipped smoother end-to-end functionality with the frontend team.",
    tech: ["Java", "Spring Boot", "REST APIs", "ReactJS", "Debugging"],
  },
  {
    year: "2022",
    period: "Dec 2022",
    title: "IoT Intern",
    company: "Sai Incubation Center",
    context:
      "Short-form internship building automation and monitoring solutions on embedded hardware.",
    highlights: [
      { label: "Built", value: "Sensor data pipelines" },
      { label: "Powered", value: "Real-time dashboards" },
      { label: "Stack", value: "IoT · Embedded · Pipelines" },
    ],
    outcome:
      "Designed pipelines that fed live system performance data to monitoring dashboards for tracking and analysis.",
    tech: ["IoT", "Embedded Systems", "Data Pipelines"],
  },
  {
    year: "—",
    period: "Internship",
    title: "Starter Manufacturing Intern",
    company: "Sanjith Controls",
    context:
      "Hands-on exposure to manufacturing processes and industrial workflows.",
    highlights: [
      { label: "Learned", value: "Production systems" },
      { label: "Observed", value: "Operational efficiency" },
      { label: "Domain", value: "Industrial workflows" },
    ],
    outcome:
      "Built a practical understanding of how real-world production lines operate end to end.",
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
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">Experience · Case studies</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] gradient-text leading-[1.05]">
              A timeline of what I've{" "}
              <span className="font-serif-display italic accent-text font-normal">
                actually shipped.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:ml-auto">
              Each role below reads as a small case study — context, what moved,
              and the outcome that stuck in production.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rail (desktop) */}
          <div
            className="hidden lg:block absolute left-[6.5rem] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, hsl(var(--border)) 8%, hsl(var(--border)) 92%, transparent)",
            }}
            aria-hidden
          />

          <ol className="space-y-10 lg:space-y-14">
            {roles.map((role, i) => {
              const flip = i % 2 === 1; // alternate layout
              return (
                <motion.li
                  key={`${role.company}-${role.title}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: Math.min(i * 0.06, 0.25) }}
                  className="relative grid lg:grid-cols-[6rem_1.25rem_1fr] gap-6 lg:gap-8 items-start"
                >
                  {/* Year rail */}
                  <div className="lg:sticky lg:top-28 self-start">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {role.year}
                    </div>
                    <div className="mt-1 text-[11px] font-mono text-muted-foreground/70">
                      {role.period}
                    </div>
                  </div>

                  {/* Node */}
                  <div className="hidden lg:flex justify-center pt-2">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_0_5px_hsl(var(--border))]" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/40 animate-ping" />
                    </div>
                  </div>

                  {/* Case-study card */}
                  <article
                    className={`surface-card lift-on-hover p-6 sm:p-8 lg:p-9 ${
                      flip ? "lg:ml-8" : "lg:mr-8"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary/80">
                        {role.company}
                      </div>
                      <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                        Case study
                        <ArrowUpRight size={12} />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-[1.6rem] font-semibold tracking-[-0.02em] text-foreground leading-tight">
                      {role.title}
                    </h3>

                    <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                      {role.context}
                    </p>

                    {/* Highlights — compact metric grid */}
                    <div className="mt-6 grid sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
                      {role.highlights.map((h) => (
                        <div key={h.label} className="bg-card p-4">
                          <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                            {h.label}
                          </div>
                          <div className="text-sm font-medium text-foreground leading-snug">
                            {h.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outcome callout */}
                    <div className="mt-6 pl-4 border-l-2 border-primary/40">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-primary/80 mb-1.5">
                        Outcome
                      </div>
                      <p className="text-[14.5px] text-foreground/90 leading-relaxed">
                        {role.outcome}
                      </p>
                    </div>

                    {/* Tech chips */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
