import { motion } from "framer-motion";

const groups = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Hibernate", "J2EE", "REST APIs", "Microservices"],
  },
  {
    label: "Databases",
    items: ["MySQL", "SQL"],
  },
  {
    label: "Frontend",
    items: ["ReactJS", "HTML", "CSS"],
  },
  {
    label: "Practices",
    items: ["Performance Optimization", "Production Debugging", "Unit Testing", "Code Review"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-4">Toolkit</div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] gradient-text">
                Stack I{" "}
                <span className="font-serif-display italic accent-text font-normal">trust.</span>
              </h2>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
                Tools and practices I reach for daily to ship reliable backend systems.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-8">
            {groups.map((g, i) => (
              <motion.div
                key={g.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: Math.min(i * 0.08, 0.3) }}
                className="grid sm:grid-cols-12 gap-4 pb-8 border-b border-border last:border-0"
              >
                <div className="sm:col-span-3 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1">
                  {g.label}
                </div>
                <div className="sm:col-span-9 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
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

export default SkillsSection;
