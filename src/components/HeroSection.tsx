import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
});

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* subtle dot grid + halo */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content — 7 cols (asymmetric) */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0)} className="eyebrow mb-6">
              <span className="status-dot" />
              <span>Available for backend roles</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.05)}
              className="text-[2.75rem] sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-[-0.03em] mb-6"
            >
              <span className="gradient-text">I build backend</span>
              <br />
              <span className="gradient-text">systems that </span>
              <span className="font-serif-display italic accent-text font-normal">
                scale.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.15)}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              Software Development Engineer with 2+ years building Java &amp; Spring Boot
              microservices for enterprise CX platforms — designing high-throughput APIs,
              owning P0/P1 incidents, and shipping integrations that stay reliable in production.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-accent"
              >
                View Work
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border hover:border-foreground/30 hover:bg-secondary/50 transition-all"
              >
                Contact
                <ArrowUpRight size={15} />
              </button>
            </motion.div>

            <motion.div
              {...fadeUp(0.35)}
              className="mt-12 flex items-center gap-6 text-xs font-mono text-muted-foreground"
            >
              <div>
                <div className="text-foreground text-xl font-semibold tracking-tight">2+</div>
                <div className="mt-0.5">Years shipping</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-foreground text-xl font-semibold tracking-tight">Java</div>
                <div className="mt-0.5">Spring Boot · MS</div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <div className="text-foreground text-xl font-semibold tracking-tight">CX</div>
                <div className="mt-0.5">Enterprise scale</div>
              </div>
            </motion.div>
          </div>

          {/* Right portrait — 5 cols (asymmetric) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative halo">
              {/* outer frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden surface-card p-1.5">
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-surface relative">
                  <img
                    src={profileImg}
                    alt="Kaviya Santhosh"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-mono text-muted-foreground mb-1">Currently</div>
                    <div className="text-sm font-medium text-foreground">
                      SDE-II · Backend
                    </div>
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-6 top-10 hidden sm:flex items-center gap-2 surface-card px-3 py-2"
              >
                <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold">JS</div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground">Located</div>
                  <div className="text-xs font-medium">Coimbatore, IN</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="absolute -right-4 bottom-16 hidden sm:flex items-center gap-2 surface-card px-3 py-2"
              >
                <div className="status-dot" />
                <div className="text-xs font-medium">Open to work</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
