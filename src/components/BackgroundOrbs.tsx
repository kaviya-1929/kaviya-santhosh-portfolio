import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Premium ambient background — soft, slow-moving glowing orbs with subtle parallax.
 * Sits behind all content (z-index: -1 via fixed positioning + pointer-events-none).
 */
const BackgroundOrbs = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Parallax — small, smooth offsets driven by scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Slow drift — gives a quiet "alive" feeling
  const ease = [0.42, 0, 0.58, 1] as [number, number, number, number];
  const driftA = reduce
    ? {}
    : { animate: { x: [0, 30, -10, 0], y: [0, -20, 10, 0] }, transition: { duration: 22, repeat: Infinity, ease } };
  const driftB = reduce
    ? {}
    : { animate: { x: [0, -25, 15, 0], y: [0, 15, -10, 0] }, transition: { duration: 28, repeat: Infinity, ease } };
  const driftC = reduce
    ? {}
    : { animate: { x: [0, 20, -20, 0], y: [0, -15, 5, 0] }, transition: { duration: 32, repeat: Infinity, ease } };

  return (
    <div
      aria-hidden
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
    >
      {/* Top-right indigo halo */}
      <motion.div
        style={{ y: y1 }}
        {...driftA}
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(240_85%_60%/0.18)] blur-[120px]" />
      </motion.div>

      {/* Mid-left violet halo */}
      <motion.div
        style={{ y: y2 }}
        {...driftB}
        className="absolute top-[40%] -left-48 w-[560px] h-[560px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(265_80%_55%/0.14)] blur-[140px]" />
      </motion.div>

      {/* Bottom-right cool blue halo */}
      <motion.div
        style={{ y: y3 }}
        {...driftC}
        className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(220_85%_55%/0.12)] blur-[130px]" />
      </motion.div>

      {/* Small floating color balls */}
      {!reduce && (
        <>
          <div
            className="absolute top-[18%] left-[12%] w-24 h-24 rounded-full blur-2xl opacity-60"
            style={{ background: "hsl(190 90% 60% / 0.35)", animation: "orb-float-a 14s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[55%] left-[70%] w-20 h-20 rounded-full blur-2xl opacity-50"
            style={{ background: "hsl(280 85% 65% / 0.32)", animation: "orb-float-b 18s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[78%] left-[22%] w-28 h-28 rounded-full blur-2xl opacity-50"
            style={{ background: "hsl(330 85% 65% / 0.28)", animation: "orb-float-c 20s ease-in-out infinite" }}
          />
          <div
            className="absolute top-[35%] left-[55%] w-16 h-16 rounded-full blur-2xl opacity-50"
            style={{ background: "hsl(150 80% 60% / 0.30)", animation: "orb-float-a 22s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute top-[8%] left-[75%] w-20 h-20 rounded-full blur-2xl opacity-50"
            style={{ background: "hsl(45 95% 65% / 0.28)", animation: "orb-float-b 16s ease-in-out infinite" }}
          />
        </>
      )}

      {/* Faint grain mask to keep things premium */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-[0.35]" />
    </div>
  );
};

export default BackgroundOrbs;
