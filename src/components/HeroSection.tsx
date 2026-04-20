import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Wifi,
  Shield,
  Lightbulb,
  Phone,
  Music,
  Flame,
  Video,
} from "lucide-react";

const solutions = [
  {
    id: "it",
    Icon: Wifi,
    label: "I.T. Solutions",
    sub: "Networks · Wi-Fi · Servers",
    desc: "Seamless connectivity infrastructure for homes & enterprises.",
    accent: "Connected.",
  },
  {
    id: "security",
    Icon: Shield,
    label: "Security",
    sub: "CCTV · Access · Alarms",
    desc: "Always-on protection for what matters most to you.",
    accent: "Protected.",
  },
  {
    id: "automation",
    Icon: Lightbulb,
    label: "Automation",
    sub: "Lighting · Climate · Scenes",
    desc: "One tap. Every device. Effortless smart living.",
    accent: "Automated.",
  },
  {
    id: "comms",
    Icon: Phone,
    label: "Communication",
    sub: "PBX · IP Phones · Intercom",
    desc: "Crystal-clear voice across your entire workplace.",
    accent: "Connected.",
  },
  {
    id: "av",
    Icon: Video,
    label: "Audio / Video",
    sub: "Home Theater · Projection",
    desc: "Cinematic experiences engineered for every room.",
    accent: "Immersive.",
  },
  {
    id: "fire",
    Icon: Flame,
    label: "Fire & Safety",
    sub: "Detection · Alerts · PA",
    desc: "Early detection systems that safeguard lives & assets.",
    accent: "Safe.",
  },
  {
    id: "music",
    Icon: Music,
    label: "Music / PA",
    sub: "Multi-room · Background · PA",
    desc: "Sound-designed environments for any space or scale.",
    accent: "Resonant.",
  },
];

const ROTATION_MS = 3500;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % solutions.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = solutions[active];
  const Icon = current.Icon;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-charcoal text-charcoal-foreground pt-24"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 -right-32 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--charcoal-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--charcoal-foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Giant rotating ring decoration (full bleed) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmin] h-[140vmin] opacity-30">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute inset-[8%] rounded-full border border-charcoal-foreground/10 animate-spin-reverse" />
        <div className="absolute inset-[18%] rounded-full border border-primary/10 animate-spin-slow" />
      </div>

      {/* Floating big watermark icon — synced with active service */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <Icon
          key={`watermark-${current.id}`}
          className="w-[60vmin] h-[60vmin] text-primary/[0.06] animate-fade-scale-in"
          strokeWidth={0.6}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center py-12">
        {/* Status badge */}
        <div className="reveal flex items-center gap-3 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <p className="section-label !mb-0">Akshar Enterprise — Vadodara</p>
        </div>

        {/* Headline */}
        <h1 className="display-text text-[12vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[9rem] text-charcoal-foreground reveal reveal-delay-1 max-w-6xl">
          We make spaces{" "}
          <span className="relative inline-block">
            <span
              key={`accent-${current.id}`}
              className="text-primary italic font-light inline-block animate-text-swap"
            >
              {current.accent}
            </span>
            <svg
              aria-hidden="true"
              className="absolute -bottom-1 left-0 w-full h-3"
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
        </h1>

        {/* Prominent CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 reveal reveal-delay-2">
          <Button variant="gold" size="lg" asChild className="group h-14 px-8 text-base">
            <a href="#services">
              Explore Services
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group h-14 px-8 text-base border-charcoal-foreground/30 bg-charcoal-foreground/5 backdrop-blur-sm text-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal"
          >
            <a href="#contact">
              Contact Us
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </a>
          </Button>
        </div>

        {/* Active solution card showcase */}
        <div className="mt-14 grid md:grid-cols-12 gap-8 items-end reveal reveal-delay-3">
          {/* Left: animated description */}
          <div className="md:col-span-6">
            <div
              key={`desc-${current.id}`}
              className="animate-fade-in-up"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="display-text text-2xl text-charcoal-foreground leading-tight">
                    {current.label}
                  </p>
                  <p className="text-charcoal-foreground/50 text-xs uppercase tracking-[0.2em] mt-0.5">
                    {current.sub}
                  </p>
                </div>
              </div>
              <p className="text-charcoal-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Right: vertical service selector */}
          <div
            className="md:col-span-6 md:pl-8 md:border-l border-charcoal-foreground/10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <p className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.3em] mb-4">
              [ Our Solutions · {String(active + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")} ]
            </p>
            <ul className="space-y-1">
              {solutions.map((s, i) => {
                const isActive = i === active;
                const SIcon = s.Icon;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full flex items-center gap-4 py-2.5 group text-left transition-all ${
                        isActive
                          ? "text-charcoal-foreground"
                          : "text-charcoal-foreground/40 hover:text-charcoal-foreground/80"
                      }`}
                    >
                      <span className="font-mono text-[10px] w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <SIcon
                        className={`w-4 h-4 transition-colors ${
                          isActive ? "text-primary" : "text-charcoal-foreground/40 group-hover:text-charcoal-foreground/70"
                        }`}
                      />
                      <span
                        className={`display-text text-xl md:text-2xl flex-1 transition-all ${
                          isActive ? "translate-x-2" : "group-hover:translate-x-1"
                        }`}
                      >
                        {s.label}
                      </span>
                      {/* Progress bar for active */}
                      <span className="hidden sm:block relative w-16 h-px bg-charcoal-foreground/10 overflow-hidden">
                        {isActive && !paused && (
                          <span
                            className="absolute inset-0 bg-primary origin-left animate-progress-bar"
                            style={{ animationDuration: `${ROTATION_MS}ms` }}
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee tagline */}
      <div className="relative z-10 mt-8 border-t border-charcoal-foreground/10 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...solutions, ...solutions, ...solutions].map((s, i) => (
            <span
              key={i}
              className="display-text text-2xl md:text-4xl text-charcoal-foreground/70 mx-8 flex items-center gap-8"
            >
              {s.label}
              <span className="text-primary text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="relative z-10 my-6 mx-auto flex flex-col items-center gap-2 text-charcoal-foreground/50 text-xs uppercase tracking-[0.3em] hover:text-primary transition-colors"
      >
        Scroll
        <ArrowDown className="w-4 h-4 animate-bounce-subtle" />
      </a>
    </section>
  );
};

export default HeroSection;
