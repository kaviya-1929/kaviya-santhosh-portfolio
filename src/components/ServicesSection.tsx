import { motion } from "framer-motion";
import { Server, Globe, Code2, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Backend Development",
    description:
      "Building robust, scalable server-side applications using Java, Spring Boot, and Microservices architecture. Focus on clean code, performance, and reliability.",
    icon: Server,
    tech: ["Java", "Spring Boot", "Hibernate", "J2EE"],
  },
  {
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs for seamless integration between services. Expertise in API versioning, documentation, and optimization for high-traffic systems.",
    icon: Globe,
    tech: ["REST APIs", "Microservices", "MySQL", "Performance Tuning"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I Offer
          </h2>
          <div className="h-1 w-16 bg-primary/50 mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="bg-card border-border h-full hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        <Code2 size={10} className="text-primary" />
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
