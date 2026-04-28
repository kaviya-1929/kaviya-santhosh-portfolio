import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Vibrant ambient background — colorful glowing halos + drifting bubbles.
 * Sits behind all content (pointer-events-none, -z-10).
 */
const BackgroundOrbs = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const ease = [0.42, 0, 0.58, 1] as [number, number, number, number];
  const drift = (dx: number, dy: number, dur: number) =>
    reduce
      ? {}
      : {
          animate: { x: [0, dx, -dx / 2, 0], y: [0, -dy, dy / 2, 0] },
          transition: { duration: dur, repeat: Infinity, ease },
        };

  // Colorful bubbles — vibrant tech palette
  const bubbles = [
    { c: "330 90% 65%", size: 70, top: "12%", left: "8%", dur: 14, dx: 40, dy: 30 },   // pink
    { c: "190 95% 60%", size: 50, top: "22%", left: "82%", dur: 18, dx: -50, dy: 25 }, // cyan
    { c: "265 90% 70%", size: 90, top: "55%", left: "15%", dur: 22, dx: 35, dy: -40 }, // violet
    { c: "150 80% 55%", size: 60, top: "70%", left: "78%", dur: 16, dx: -30, dy: 35 }, // green
    { c: "40 95% 60%",  size: 45, top: "38%", left: "48%", dur: 20, dx: 45, dy: -25 }, // amber
    { c: "210 95% 65%", size: 75, top: "85%", left: "35%", dur: 24, dx: -40, dy: -30 },// blue
    { c: "300 85% 65%", size: 40, top: "8%",  left: "55%", dur: 17, dx: 30, dy: 40 },  // magenta
    { c: "170 85% 55%", size: 55, top: "62%", left: "55%", dur: 19, dx: -35, dy: 30 }, // teal
  ];

  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Big colored halos */}
      <motion.div
        style={{ y: y1 }}
        {...drift(40, 30, 22)}
        className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(280_90%_60%/0.28)] blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        {...drift(-30, 20, 26)}
        className="absolute top-[35%] -left-48 w-[600px] h-[600px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(190_95%_55%/0.22)] blur-[140px]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        {...drift(25, -25, 30)}
        className="absolute bottom-[-12%] right-[-10%] w-[560px] h-[560px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(330_90%_60%/0.22)] blur-[130px]" />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        {...drift(-25, 30, 28)}
        className="absolute top-[60%] left-[40%] w-[420px] h-[420px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(150_85%_55%/0.18)] blur-[120px]" />
      </motion.div>

      {/* Floating colorful bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          {...drift(b.dx, b.dy, b.dur)}
          className="absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 30% 30%, hsl(${b.c} / 0.95), hsl(${b.c} / 0.35) 60%, transparent 75%)`,
            boxShadow: `0 0 40px hsl(${b.c} / 0.55), 0 0 80px hsl(${b.c} / 0.35)`,
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Soft mask for premium feel */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)] opacity-[0.5]" />
    </div>
  );
};

export default BackgroundOrbs;
