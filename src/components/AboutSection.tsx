import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const focusAreas = [
  { k: "Backend", v: "Java · Spring Boot · Microservices" },
  { k: "Scale", v: "High-traffic APIs · Performance Optimization" },
  { k: "Integrations", v: "WhatsApp · Call · Email · CRM" },
  { k: "Reliability", v: "Production Systems · Debugging · Incident Resolution" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — sticky label (asymmetric) */}
          <motion.div {...fadeUp} className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-4">About</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] gradient-text">
                Backend engineer focused on{" "}
                <span className="font-serif-display italic accent-text font-normal">
                  building reliable production systems.
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Right — narrative + focus grid */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Backend-focused Software Development Engineer with{" "}
                <span className="text-foreground font-semibold">2+ years</span> of experience
                building and scaling microservices in production for high-traffic enterprise
                CX platforms. I design RESTful APIs, optimize performance, and ensure systems
                remain stable under real-world load.
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                My work includes integrating communication platforms such as Meta WhatsApp
                Business APIs, telephony, email, and CRM workflows, along with building
                chatbot-driven automation to streamline customer interactions. I focus on
                writing clean, maintainable code and owning systems end-to-end — from
                development to resolving critical production issues.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border"
            >
              {focusAreas.map((f) => (
                <div
                  key={f.k}
                  className="bg-card p-5 hover:bg-surface transition-colors"
                >
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    {f.k}
                  </div>
                  <div className="text-sm font-medium text-foreground">{f.v}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="flex items-center gap-4 pt-4 border-t border-border"
            >
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Education
              </div>
              <div className="flex-1 text-sm text-foreground/90">
                B.E. Electrical &amp; Electronics Engineering — KPR Institute of Engineering &amp; Technology
              </div>
              <div className="text-xs font-mono text-muted-foreground hidden sm:block">2020 – 2024</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
