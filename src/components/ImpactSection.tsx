import { motion } from "framer-motion";
import { Zap, Activity, ShieldCheck, GitBranch } from "lucide-react";

const metrics = [
  {
    value: "25%",
    label: "Faster APIs",
    sub: "through query & service optimization",
    icon: Zap,
    color: "text-[hsl(25_95%_55%)]",
    ring: "from-[hsl(25_95%_55%/0.25)] to-[hsl(15_90%_50%/0.05)]",
  },
  {
    value: "10K+",
    label: "Events / day",
    sub: "processed across microservices",
    icon: Activity,
    color: "text-primary",
    ring: "from-primary/25 to-[hsl(200_80%_50%/0.05)]",
  },
  {
    value: "20+",
    label: "P0/P1 incidents",
    sub: "diagnosed and resolved in production",
    icon: ShieldCheck,
    color: "text-[hsl(330_80%_60%)]",
    ring: "from-[hsl(330_80%_60%/0.25)] to-[hsl(350_80%_60%/0.05)]",
  },
  {
    value: "5+",
    label: "Integrations shipped",
    sub: "WhatsApp, Call, Email, CRM, Chatbots",
    icon: GitBranch,
    color: "text-accent",
    ring: "from-accent/25 to-[hsl(290_70%_60%/0.05)]",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-24 grid-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-primary font-mono text-sm mb-2">// Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Numbers that matter</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative p-5 sm:p-6 rounded-2xl bg-card border border-border card-hover-lift rainbow-border overflow-hidden"
            >
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${m.ring} blur-2xl pointer-events-none`}
              />
              <div className="relative">
                <m.icon className={`w-5 h-5 ${m.color} mb-3`} />
                <div className={`text-3xl sm:text-4xl font-bold ${m.color} tracking-tight`}>
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">{m.label}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {m.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
