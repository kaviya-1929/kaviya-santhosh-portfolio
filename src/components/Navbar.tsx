import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl border border-border shadow-[0_8px_32px_-8px_hsl(230_30%_0%/0.5)]"
            : "bg-background/40 backdrop-blur-md border border-border/50"
        }`}
      >
        <button
          onClick={() => handleClick("#home")}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-secondary/60 transition-colors"
        >
          <span className="status-dot" />
          <span className="text-sm font-semibold tracking-tight">Kaviya</span>
        </button>

        <div className="hidden md:flex items-center">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-3 py-1.5 text-sm transition-colors rounded-full hover:bg-secondary/60 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-secondary/80 border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handleClick("#contact")}
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-1.5 rounded-full btn-accent ml-1"
        >
          Let's talk
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden absolute top-full mt-2 left-4 right-4 surface-card overflow-hidden"
          >
            <ul className="p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleClick("#contact")}
                  className="w-full mt-1 px-4 py-3 text-sm font-medium rounded-lg btn-accent"
                >
                  Let's talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
