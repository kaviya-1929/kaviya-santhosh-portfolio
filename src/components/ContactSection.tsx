import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const channels = [
  { icon: Mail, label: "Email", value: "kaviyasanthosh0029@gmail.com", href: "mailto:kaviyasanthosh0029@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8870180847", href: "tel:+918870180847" },
  { icon: Linkedin, label: "LinkedIn", value: "Kaviya Santhosh", href: "https://www.linkedin.com/in/kaviya-santhosh-8576a8243" },
  { icon: MapPin, label: "Location", value: "Coimbatore, India", href: null as string | null },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.errors.forEach((er) => {
        if (er.path[0]) fe[er.path[0] as string] = er.message;
      });
      setErrors(fe);
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_12l0ytn",
        "template_q9i78ei",
        { from_name: result.data.name, from_email: result.data.email, message: result.data.message },
        "iHeZufHB9KL_KV54v"
      );
      toast({ title: "Message sent", description: "Thanks — I'll be in touch soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left — closing line (expanded, no outline) */}
          <motion.div {...fadeUp} className="lg:col-span-7 flex">
            <div className="flex flex-col w-full h-full">
              <div>
                <div className="eyebrow mb-4">Contact</div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] gradient-text leading-[1.05]">
                  Open to backend roles where I can build{" "}
                  <span className="font-serif-display italic accent-text font-normal">
                    scalable systems.
                  </span>
                </h2>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
                  Have a role, a project, or just want to chat about backend systems? I'd love to hear from you.
                </p>
              </div>

              <div className="mt-auto pt-10 space-y-3">
                {channels.map((c) => {
                  const inner = (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary/40 transition-all group">
                      <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                        <c.icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="text-sm text-foreground truncate">{c.value}</div>
                      </div>
                      {c.href && (
                        <ArrowUpRight
                          size={16}
                          className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                        />
                      )}
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — form (~60%) */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="lg:col-span-6 flex"
          >
            <div className="surface-card p-7 sm:p-9 w-full h-full flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-surface border-border h-11 focus:border-primary focus:ring-0 transition-colors"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-surface border-border h-11 focus:border-primary focus:ring-0 transition-colors"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <Label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a bit about what you're working on…"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-surface border-border focus:border-primary focus:ring-0 transition-colors resize-none flex-1 min-h-[160px]"
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">I usually reply within 24h.</p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-accent disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
