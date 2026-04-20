import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroShape from "@/assets/hero-shape.jpg";

const taglineWords = [
  "I.T.",
  "Security",
  "Automation",
  "Communication",
  "Audio / Video",
  "Networking",
  "Smart Living",
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-charcoal text-charcoal-foreground pt-24 pb-12"
  >
    {/* Decorative shape */}
    <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-[55%] max-w-[720px] opacity-80 hidden md:block animate-float-slow">
      <img
        src={heroShape}
        alt=""
        aria-hidden="true"
        className="w-full h-auto select-none"
        width={1280}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-charcoal/30 to-charcoal" />
    </div>

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--charcoal-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--charcoal-foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center">
      <p className="section-label reveal">Akshar Enterprise — Vadodara</p>

      <h1 className="display-text text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] text-charcoal-foreground reveal reveal-delay-1">
        Smart
        <br />
        <span className="text-primary italic font-light">Technology</span>
        <br />
        Solutions.
      </h1>

      <p className="mt-8 max-w-xl text-base md:text-lg text-charcoal-foreground/70 leading-relaxed reveal reveal-delay-2">
        We design and integrate I.T., Security, Automation, Communication and
        Audio/Video systems for homes, offices and enterprises across India.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
        <Button variant="gold" size="lg" asChild>
          <a href="#services">Explore Services</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="border-charcoal-foreground/30 bg-transparent text-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal"
        >
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </div>

    {/* Marquee tagline */}
    <div className="relative z-10 mt-16 border-y border-charcoal-foreground/10 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...taglineWords, ...taglineWords, ...taglineWords].map((w, i) => (
          <span
            key={i}
            className="display-text text-3xl md:text-5xl text-charcoal-foreground/80 mx-8 flex items-center gap-8"
          >
            {w}
            <span className="text-primary text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>

    <a
      href="#services"
      className="relative z-10 mt-10 mx-auto flex flex-col items-center gap-2 text-charcoal-foreground/50 text-xs uppercase tracking-[0.3em] hover:text-primary transition-colors"
    >
      Scroll
      <ArrowDown className="w-4 h-4 animate-bounce-subtle" />
    </a>
  </section>
);

export default HeroSection;
