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

      {/* Faint grain mask to keep things premium */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-[0.35]" />
    </div>
  );
};

export default BackgroundOrbs;
