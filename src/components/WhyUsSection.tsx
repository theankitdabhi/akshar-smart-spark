import { Award, Layers, Users, Headphones } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Layers, label: "End-to-End Solutions", value: "100%" },
  { icon: Users, label: "Trusted Clients", value: "500+" },
  { icon: Headphones, label: "After-Sales Support", value: "24/7" },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="section-label">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Built on Trust & Expertise</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
