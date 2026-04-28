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
    { c: "330 90% 65%", size: 26, top: "10%", left: "6%",  dur: 14, dx: 60, dy: 40 },
    { c: "190 95% 60%", size: 18, top: "20%", left: "84%", dur: 18, dx: -70, dy: 35 },
    { c: "265 90% 70%", size: 32, top: "52%", left: "12%", dur: 22, dx: 55, dy: -50 },
    { c: "150 85% 55%", size: 22, top: "72%", left: "80%", dur: 16, dx: -45, dy: 50 },
    { c: "40 95% 60%",  size: 16, top: "38%", left: "46%", dur: 20, dx: 65, dy: -35 },
    { c: "210 95% 65%", size: 28, top: "86%", left: "32%", dur: 24, dx: -55, dy: -40 },
    { c: "300 90% 65%", size: 14, top: "6%",  left: "55%", dur: 17, dx: 45, dy: 55 },
    { c: "170 85% 55%", size: 20, top: "60%", left: "58%", dur: 19, dx: -50, dy: 45 },
    { c: "20 95% 62%",  size: 16, top: "30%", left: "30%", dur: 21, dx: 50, dy: -30 },
    { c: "240 95% 70%", size: 24, top: "78%", left: "55%", dur: 23, dx: -40, dy: 40 },
    { c: "330 90% 65%", size: 12, top: "45%", left: "70%", dur: 15, dx: 35, dy: 25 },
    { c: "190 95% 60%", size: 14, top: "92%", left: "10%", dur: 19, dx: -40, dy: -25 },
  ];

  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Soft colored halos — toned down for readability */}
      <motion.div
        style={{ y: y1 }}
        {...drift(40, 30, 22)}
        className="absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(280_85%_60%/0.12)] blur-[140px]" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        {...drift(-30, 20, 26)}
        className="absolute top-[35%] -left-48 w-[600px] h-[600px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(190_90%_55%/0.10)] blur-[150px]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        {...drift(25, -25, 30)}
        className="absolute bottom-[-12%] right-[-10%] w-[560px] h-[560px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(330_85%_60%/0.10)] blur-[140px]" />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        {...drift(-25, 30, 28)}
        className="absolute top-[60%] left-[40%] w-[420px] h-[420px] rounded-full"
      >
        <div className="w-full h-full rounded-full bg-[hsl(150_80%_55%/0.08)] blur-[130px]" />
      </motion.div>

      {/* Small floating bubbles */}
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
            background: `radial-gradient(circle at 30% 30%, hsl(${b.c} / 0.9), hsl(${b.c} / 0.3) 60%, transparent 75%)`,
            boxShadow: `0 0 14px hsl(${b.c} / 0.5), 0 0 28px hsl(${b.c} / 0.25)`,
          }}
        />
      ))}

      {/* gentle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(230_15%_6%/0.5)_100%)]" />
    </div>
  );
};

export default BackgroundOrbs;
