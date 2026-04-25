import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Coimbatore, India", color: "text-primary", bg: "from-primary/20 to-[hsl(200_80%_50%/0.1)]" },
  { icon: Mail, label: "Email", value: "kaviyasanthosh0029@gmail.com", href: "mailto:kaviyasanthosh0029@gmail.com", color: "text-accent", bg: "from-accent/20 to-[hsl(290_70%_60%/0.1)]" },
  { icon: Phone, label: "Phone", value: "+91 8870180847", href: "tel:+918870180847", color: "text-[hsl(330_80%_60%)]", bg: "from-[hsl(330_80%_60%/0.2)] to-[hsl(350_80%_60%/0.1)]" },
  { icon: Linkedin, label: "LinkedIn", value: "Kaviya Santhosh", href: "https://www.linkedin.com/in/kaviya-santhosh-8576a8243", color: "text-[hsl(210_90%_55%)]", bg: "from-[hsl(210_90%_55%/0.2)] to-[hsl(220_85%_50%/0.1)]" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_12l0ytn",
        "template_q9i78ei",
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
        },
        "iHeZufHB9KL_KV54v"
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 grid-bg">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">// Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to new opportunities, meaningful collaborations, and
              interesting engineering challenges. Have an idea or just want to connect?
              Drop a message — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group cursor-default card-hover-lift"
                >
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm text-foreground hover:${item.color} transition-colors`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="bg-card border-border rainbow-border">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-surface border-border focus:border-primary focus:shadow-[0_0_12px_hsl(174_72%_50%/0.15)] transition-all duration-300"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-surface border-border focus:border-accent focus:shadow-[0_0_12px_hsl(270_70%_60%/0.15)] transition-all duration-300"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-surface border-border focus:border-[hsl(330_80%_60%)] focus:shadow-[0_0_12px_hsl(330_80%_60%/0.15)] transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-[hsl(200_80%_50%)] hover:from-primary hover:to-[hsl(200_80%_60%)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-teal"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
