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

  // Colorful bubbles — vibrant tech palette (larger, brighter)
  const bubbles = [
    { c: "330 95% 65%", size: 110, top: "10%", left: "6%",  dur: 14, dx: 60, dy: 40 },  // pink
    { c: "190 95% 60%", size: 90,  top: "20%", left: "84%", dur: 18, dx: -70, dy: 35 }, // cyan
    { c: "265 95% 70%", size: 140, top: "52%", left: "12%", dur: 22, dx: 55, dy: -50 }, // violet
    { c: "150 90% 55%", size: 100, top: "72%", left: "80%", dur: 16, dx: -45, dy: 50 }, // green
    { c: "40 100% 60%", size: 80,  top: "38%", left: "46%", dur: 20, dx: 65, dy: -35 }, // amber
    { c: "210 95% 65%", size: 120, top: "86%", left: "32%", dur: 24, dx: -55, dy: -40 },// blue
    { c: "300 95% 65%", size: 70,  top: "6%",  left: "55%", dur: 17, dx: 45, dy: 55 },  // magenta
    { c: "170 90% 55%", size: 95,  top: "60%", left: "58%", dur: 19, dx: -50, dy: 45 }, // teal
    { c: "20 95% 62%",  size: 75,  top: "30%", left: "30%", dur: 21, dx: 50, dy: -30 }, // orange
    { c: "240 95% 70%", size: 85,  top: "78%", left: "55%", dur: 23, dx: -40, dy: 40 }, // indigo
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

      {/* very faint vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,hsl(230_15%_6%/0.4)_100%)]" />
    </div>
  );
};

export default BackgroundOrbs;
