import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-mono gradient-text">&lt;/&gt;</span>
            <span>
              Built with{" "}
              <Heart className="inline w-3.5 h-3.5 text-[hsl(330_80%_60%)] fill-[hsl(330_80%_60%)]" />{" "}
              by <span className="gradient-text font-medium">Kaviya Santhosh</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;