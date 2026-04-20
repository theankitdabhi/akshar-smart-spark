import { Award, Layers, Users, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Layers, label: "End-to-End Solutions", value: "100%" },
  { icon: Users, label: "Trusted Clients", value: "500+" },
  { icon: Headphones, label: "After-Sales Support", value: "24/7" },
];

const WhyUsSection = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="why-us" className="py-24 md:py-36 bg-charcoal text-charcoal-foreground relative overflow-hidden">
      {/* Big background word */}
      <div className="absolute -top-10 left-0 right-0 pointer-events-none select-none opacity-[0.04]">
        <p className="display-text text-[20vw] text-charcoal-foreground whitespace-nowrap">TRUST · CRAFT</p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="reveal max-w-4xl mb-20">
          <p className="section-label">[ Why Choose Us ]</p>
          <h2 className="display-text text-5xl md:text-7xl lg:text-8xl text-charcoal-foreground mt-4">
            Built on <span className="text-primary italic font-light">trust</span> & expertise.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-foreground/10 border border-charcoal-foreground/10">
          {stats.map((s, i) => {
            const ref = useScrollReveal<HTMLDivElement>();
            return (
              <div
                key={s.label}
                ref={ref}
                className={`reveal reveal-delay-${i + 1} bg-charcoal p-8 md:p-10 group hover:bg-charcoal/60 transition-colors`}
              >
                <s.icon className="w-7 h-7 text-primary mb-6" />
                <p className="display-text text-5xl md:text-6xl text-charcoal-foreground">{s.value}</p>
                <p className="text-charcoal-foreground/60 text-sm mt-3 uppercase tracking-wider">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
