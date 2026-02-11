import { motion } from "framer-motion";
import {
  Code2, Server, Database, Globe, Layout, FileCode, Cpu,
  Terminal, Zap, Bug, Users, Workflow,
} from "lucide-react";

const primarySkills = [
  { name: "Java", icon: Code2, color: "from-[hsl(25_95%_55%)] to-[hsl(15_90%_50%)]", glow: "hover:shadow-[0_0_25px_hsl(25_95%_55%/0.3)]" },
  { name: "Spring Boot", icon: Server, color: "from-[hsl(150_70%_45%)] to-[hsl(160_60%_40%)]", glow: "hover:shadow-[0_0_25px_hsl(150_70%_45%/0.3)]" },
  { name: "REST APIs", icon: Globe, color: "from-primary to-[hsl(200_80%_50%)]", glow: "hover:shadow-[0_0_25px_hsl(174_72%_50%/0.3)]" },
  { name: "Microservices", icon: Cpu, color: "from-accent to-[hsl(290_70%_60%)]", glow: "hover:shadow-[0_0_25px_hsl(270_70%_60%/0.3)]" },
];

const additionalSkills = [
  { name: "ReactJS", icon: Layout, color: "text-[hsl(210_90%_55%)]" },
  { name: "HTML", icon: FileCode, color: "text-[hsl(25_95%_55%)]" },
  { name: "CSS", icon: FileCode, color: "text-[hsl(210_90%_55%)]" },
  { name: "MySQL", icon: Database, color: "text-[hsl(200_80%_50%)]" },
  { name: "SQL", icon: Database, color: "text-primary" },
  { name: "Python", icon: Terminal, color: "text-[hsl(50_90%_50%)]" },
  { name: "Agile SDLC", icon: Users, color: "text-accent" },
  { name: "Performance Optimization", icon: Zap, color: "text-[hsl(25_95%_55%)]" },
  { name: "Production Debugging", icon: Bug, color: "text-[hsl(330_80%_60%)]" },
  { name: "CI/CD", icon: Workflow, color: "text-[hsl(150_70%_45%)]" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 grid-bg">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        {/* Primary Skills */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {primarySkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative p-5 rounded-xl bg-card border border-border hover:border-transparent transition-all duration-300 text-center cursor-default rainbow-border ${skill.glow}`}
              >
                <div className={`mb-3 flex justify-center`}>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-clip-padding`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <p className="font-medium text-foreground text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 group cursor-default hover:shadow-lg hover:shadow-primary/5"
              >
                <skill.icon className={`w-4 h-4 ${skill.color} transition-all duration-300 group-hover:scale-110`} />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;