import { Wifi, Shield, Lightbulb, Phone, Flame, Music, Settings } from "lucide-react";

const mainServices = [
  {
    icon: Wifi,
    title: "I.T. Solutions",
    desc: "Wi-Fi, Networking, Server Racks, Computers, Printers & Structured Cabling for seamless connectivity.",
  },
  {
    icon: Shield,
    title: "Security Systems",
    desc: "CCTV, Burglar Alarms, Digital Door Locks, Access Control & Video Door Phones for complete protection.",
  },
  {
    icon: Lightbulb,
    title: "Automation",
    desc: "Lighting Automation, Projectors, Home Theater, Multi-Room Music & Office Automation solutions.",
  },
  {
    icon: Phone,
    title: "Communication",
    desc: "PBX / IP-PBX, Cordless & IP Phones, Time & Attendance systems for modern workplaces.",
  },
];

const extraServices = [
  { icon: Flame, title: "Fire Alarm Systems", desc: "Early detection and alert systems to safeguard your premises." },
  { icon: Music, title: "Music / PA Systems", desc: "Background music and public address solutions for any space." },
  { icon: Settings, title: "Enterprise Integration", desc: "End-to-end service integration for large-scale deployments." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="section-label">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Our Solutions</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {mainServices.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-lg p-6 hover:shadow-lg transition-shadow border border-border"
          >
            <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <div className="w-8 h-0.5 bg-primary mb-3" />
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {extraServices.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-lg p-6 hover:shadow-lg transition-shadow border border-border"
          >
            <s.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-base font-semibold text-foreground mb-1">{s.title}</h3>
            <div className="w-6 h-0.5 bg-primary mb-2" />
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
