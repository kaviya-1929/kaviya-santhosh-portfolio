const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="status-dot" />
          <span>Crafted by Kaviya Santhosh</span>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
