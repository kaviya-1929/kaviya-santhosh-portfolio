import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const traitColors = [
  "from-primary/20 to-[hsl(200_80%_50%/0.2)] text-primary border-primary/30",
  "from-accent/20 to-[hsl(290_70%_60%/0.2)] text-accent border-accent/30",
  "from-[hsl(330_80%_60%/0.2)] to-[hsl(350_80%_60%/0.2)] text-[hsl(330_80%_60%)] border-[hsl(330_80%_60%/0.3)]",
  "from-[hsl(25_95%_55%/0.2)] to-[hsl(40_90%_50%/0.2)] text-[hsl(25_95%_55%)] border-[hsl(25_95%_55%/0.3)]",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Get to know me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Summary */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="bg-card border-border h-full rainbow-border card-hover-lift">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-[hsl(200_80%_50%/0.1)] text-primary">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Software Development Engineer with <span className="text-primary font-medium">2+ years of experience</span> building 
                  scalable backend systems. I specialize in Java, Spring Boot, and Microservices architecture,
                  with a strong focus on writing clean, maintainable code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans high-volume API processing, production debugging, 
                  performance optimization, and Agile development. I thrive in collaborative 
                  environments, working closely with frontend teams to deliver enterprise-grade applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="bg-card border-border h-full rainbow-border card-hover-lift">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-[hsl(290_70%_60%/0.1)] text-accent">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Education
                  </h3>
                </div>
                <div className="border border-border rounded-lg p-5 bg-surface animated-gradient-bg">
                  <h4 className="font-semibold text-foreground mb-1">
                    Bachelor of Engineering
                  </h4>
                  <p className="gradient-text text-sm font-medium mb-2">
                    Electrical & Electronics Engineering
                  </p>
                  <p className="text-muted-foreground text-sm mb-1">
                    KPR Institute of Engineering and Technology
                  </p>
                  <p className="text-muted-foreground text-xs font-mono">
                    2020 – 2024
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Problem Solving", "System Design", "Team Player", "Fast Learner"].map(
                    (trait, i) => (
                      <motion.span
                        key={trait}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r border cursor-default ${traitColors[i]}`}
                      >
                        {trait}
                      </motion.span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;