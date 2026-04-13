const Footer = () => (
  <footer className="bg-charcoal py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-heading font-bold text-xl text-charcoal-foreground">
            Akshar <span className="text-primary">Enterprise</span>
          </span>
          <p className="text-charcoal-foreground/60 text-sm mt-1">Smart Technology Solutions</p>
        </div>

        <nav className="flex gap-6">
          {["Home", "Services", "Why Us", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-charcoal-foreground/70 text-sm hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-charcoal-foreground/10 mt-8 pt-6 text-center">
        <p className="text-charcoal-foreground/50 text-xs">
          © {new Date().getFullYear()} Akshar Enterprise. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
