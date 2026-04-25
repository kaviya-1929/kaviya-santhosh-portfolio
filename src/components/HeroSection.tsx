import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Animated colorful background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              background: [
                'hsl(174 72% 50%)',
                'hsl(270 70% 60%)',
                'hsl(330 80% 60%)',
                'hsl(25 95% 55%)',
                'hsl(210 90% 55%)',
                'hsl(150 70% 45%)',
                'hsl(174 72% 50%)',
                'hsl(270 70% 60%)',
              ][i],
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Large blurred glow orbs – multi-color */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[hsl(270_70%_60%/0.06)] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[hsl(174_72%_50%/0.06)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(330_80%_60%/0.03)] rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4 tracking-wider"
            >
              // Hello, I'm
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
              <span className="text-foreground">Kaviya</span>
              <br />
              <span className="gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">Santhosh</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
              <p className="text-lg text-muted-foreground font-medium">
                I build scalable backend systems that handle real-world traffic.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Software Development Engineer with 2+ years building Java and Spring Boot
              microservices for enterprise CX platforms — designing high-throughput APIs,
              owning P0/P1 incidents, and shipping integrations that stay reliable in production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#projects")}
                className="glow-teal font-medium bg-gradient-to-r from-primary to-[hsl(200_80%_50%)] hover:from-primary hover:to-[hsl(200_80%_60%)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Work
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-border hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer gradient glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-[hsl(330_80%_60%/0.15)] animate-pulse-glow" />
              {/* Rainbow border ring */}
              <div className="absolute inset-2 rounded-full" style={{
                background: 'linear-gradient(135deg, hsl(174 72% 50%), hsl(270 70% 60%), hsl(330 80% 60%), hsl(25 95% 55%))',
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                borderRadius: '9999px',
              }} />
              {/* Photo container */}
              <div className="absolute inset-4 rounded-full bg-surface overflow-hidden flex items-center justify-center border border-border">
                <img
                  src={profileImg}
                  alt="Kaviya Santhosh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/60 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-accent/60 rounded-bl-lg" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;