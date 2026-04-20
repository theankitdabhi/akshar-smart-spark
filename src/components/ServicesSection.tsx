import { Wifi, Shield, Lightbulb, Phone, Flame, Music, Settings, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Wifi, title: "I.T. Solutions", desc: "Wi-Fi, Networking, Server Racks, Computers, Printers & Structured Cabling for seamless connectivity.", num: "01" },
  { icon: Shield, title: "Security Systems", desc: "CCTV, Burglar Alarms, Digital Door Locks, Access Control & Video Door Phones for complete protection.", num: "02" },
  { icon: Lightbulb, title: "Automation", desc: "Lighting Automation, Projectors, Home Theater, Multi-Room Music & Office Automation solutions.", num: "03" },
  { icon: Phone, title: "Communication", desc: "PBX / IP-PBX, Cordless & IP Phones, Time & Attendance systems for modern workplaces.", num: "04" },
  { icon: Flame, title: "Fire Alarm Systems", desc: "Early detection and alert systems to safeguard your premises and people.", num: "05" },
  { icon: Music, title: "Music / PA Systems", desc: "Background music and public address solutions for any space or scale.", num: "06" },
  { icon: Settings, title: "Enterprise Integration", desc: "End-to-end service integration for large-scale, multi-site deployments.", num: "07" },
];

const ServicesSection = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="reveal max-w-4xl mb-20">
          <p className="section-label">[ What We Do ]</p>
          <h2 className="display-text text-5xl md:text-7xl lg:text-8xl text-foreground mt-4">
            Solutions for the <span className="text-primary italic font-light">modern</span> space.
          </h2>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => {
            const ref = useScrollReveal<HTMLDivElement>();
            return (
              <div
                key={s.title}
                ref={ref}
                className="reveal group border-b border-border py-8 md:py-10 grid grid-cols-12 gap-4 items-center hover:bg-card transition-colors cursor-default"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">{s.num}</span>
                <div className="col-span-10 md:col-span-3 flex items-center gap-4">
                  <s.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="display-text text-2xl md:text-3xl text-foreground">{s.title}</h3>
                </div>
                <p className="col-span-12 md:col-span-7 text-muted-foreground text-base leading-relaxed">
                  {s.desc}
                </p>
                <ArrowUpRight className="hidden md:block col-span-1 w-6 h-6 text-foreground/40 group-hover:text-primary group-hover:rotate-45 transition-all justify-self-end" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
