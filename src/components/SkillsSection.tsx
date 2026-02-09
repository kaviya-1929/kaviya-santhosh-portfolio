import { motion } from "framer-motion";
import {
  Code2, Server, Database, Globe, Layout, FileCode, Cpu,
  Terminal, Zap, Bug, Users, Workflow,
} from "lucide-react";

const primarySkills = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "REST APIs", icon: Globe },
  { name: "Microservices", icon: Cpu },
];

const additionalSkills = [
  { name: "ReactJS", icon: Layout },
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: FileCode },
  { name: "MySQL", icon: Database },
  { name: "SQL", icon: Database },
  { name: "Python", icon: Terminal },
  { name: "Agile SDLC", icon: Users },
  { name: "Performance Optimization", icon: Zap },
  { name: "Production Debugging", icon: Bug },
  { name: "CI/CD", icon: Workflow },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tech Stack
          </h2>
          <div className="h-1 w-16 bg-primary/50 mt-4 rounded-full" />
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
                className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center glow-teal hover:glow-teal"
              >
                <div className="mb-3 flex justify-center">
                  <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <skill.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
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
