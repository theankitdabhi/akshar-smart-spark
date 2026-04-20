import { Button } from "@/components/ui/button";
import { ArrowDown, Wifi, Shield, Lightbulb, Phone, Music, Flame, ArrowUpRight } from "lucide-react";
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

const orbitIcons = [
  { Icon: Wifi, label: "I.T." },
  { Icon: Shield, label: "Security" },
  { Icon: Lightbulb, label: "Automation" },
  { Icon: Phone, label: "Comms" },
  { Icon: Music, label: "Audio" },
  { Icon: Flame, label: "Fire" },
];

const stats = [
  { v: "15+", l: "Years" },
  { v: "500+", l: "Clients" },
  { v: "24/7", l: "Support" },
  { v: "100%", l: "Integrated" },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-charcoal text-charcoal-foreground pt-24 pb-12"
  >
    {/* Animated gradient glow */}
    <div className="pointer-events-none absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
    <div className="pointer-events-none absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--charcoal-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--charcoal-foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Right side: orbiting icons + shape */}
    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[720px] hidden lg:block">
      <div className="relative aspect-square">
        {/* Floating shape */}
        <div className="absolute inset-[15%] animate-float-slow">
          <img
            src={heroShape}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain select-none"
            width={1280}
            height={1280}
          />
        </div>

        {/* Orbit rings */}
        <div className="absolute inset-[5%] rounded-full border border-primary/15 animate-spin-slow" />
        <div className="absolute inset-[18%] rounded-full border border-charcoal-foreground/10 animate-spin-reverse" />

        {/* Orbiting icons */}
        <div className="absolute inset-0 animate-spin-slow">
          {orbitIcons.map((o, i) => {
            const angle = (i / orbitIcons.length) * 360;
            return (
              <div
                key={o.label}
                className="absolute top-1/2 left-1/2 w-12 h-12"
                style={{
                  transform: `rotate(${angle}deg) translateY(-46%) translateY(-220px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-charcoal border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10 animate-counter-spin">
                  <o.Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-primary" />
            <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
          </div>
        </div>

        {/* Fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-charcoal/20 to-charcoal" />
      </div>
    </div>

    <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center">
      {/* Status badge */}
      <div className="reveal flex items-center gap-3 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <p className="section-label !mb-0">Akshar Enterprise — Vadodara</p>
      </div>

      <h1 className="display-text text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] text-charcoal-foreground reveal reveal-delay-1">
        Smart
        <br />
        <span className="relative inline-block">
          <span className="text-primary italic font-light">Technology</span>
          <svg
            aria-hidden="true"
            className="absolute -bottom-2 left-0 w-full h-3"
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
          >
            <path
              d="M2,8 Q75,2 150,6 T298,4"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="animate-draw-line"
            />
          </svg>
        </span>
        <br />
        Solutions.
      </h1>

      <p className="mt-8 max-w-xl text-base md:text-lg text-charcoal-foreground/70 leading-relaxed reveal reveal-delay-2">
        We design and integrate I.T., Security, Automation, Communication and
        Audio/Video systems for homes, offices and enterprises across India.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal reveal-delay-3">
        <Button variant="gold" size="lg" asChild className="group">
          <a href="#services">
            Explore Services
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
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

      {/* Stat ribbon */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-foreground/10 border border-charcoal-foreground/10 max-w-2xl reveal reveal-delay-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-charcoal px-5 py-4">
            <p className="display-text text-2xl md:text-3xl text-primary">{s.v}</p>
            <p className="text-charcoal-foreground/50 text-[10px] uppercase tracking-[0.2em] mt-1">{s.l}</p>
          </div>
        ))}
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
