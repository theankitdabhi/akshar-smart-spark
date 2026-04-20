import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const headerRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.open(`mailto:kalpesh@aksharenterprise.co.in?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-charcoal text-charcoal-foreground">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="reveal max-w-4xl mb-20">
          <p className="section-label">[ Get In Touch ]</p>
          <h2 className="display-text text-5xl md:text-7xl lg:text-8xl text-charcoal-foreground mt-4">
            Let's build something <span className="text-primary italic font-light">smart</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div ref={leftRef} className="reveal md:col-span-5 space-y-8">
            <div>
              <p className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.2em] mb-3">Visit</p>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-charcoal-foreground/80">
                  201 Shivang Complex, Urmi Road, beside GAIL, Punit Nagar, Akota, Vadodara, Gujarat 390020
                </p>
              </div>
            </div>

            <div>
              <p className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.2em] mb-3">Email</p>
              <a href="mailto:kalpesh@aksharenterprise.co.in" className="display-text text-xl md:text-2xl text-charcoal-foreground hover:text-primary transition-colors flex items-center gap-2 group break-all">
                kalpesh@aksharenterprise.co.in
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform flex-shrink-0" />
              </a>
            </div>

            <div>
              <p className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.2em] mb-3">Call</p>
              <a href="tel:+919824037776" className="display-text text-2xl md:text-3xl text-charcoal-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <Phone className="w-5 h-5 text-primary" />
                +91 98240 37776
              </a>
            </div>

            <div className="rounded-lg overflow-hidden border border-charcoal-foreground/10 mt-6">
              <iframe
                title="Akshar Enterprise Location"
                src="https://maps.google.com/maps?q=Akshar%20Enterprise%2C%20201%20Shivang%20Complex%2C%20Urmi%20Road%2C%20Society%2C%20beside%20GAIL%2C%20Punit%20Nagar%2C%20Akota%2C%20Vadodara%2C%20Gujarat%20390020&z=14&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form ref={rightRef as React.RefObject<HTMLFormElement>} onSubmit={handleSubmit} className="reveal reveal-delay-2 md:col-span-7 space-y-6">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
            ].map((f) => (
              <div key={f.name} className="border-b border-charcoal-foreground/20 pb-2 focus-within:border-primary transition-colors">
                <label className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.2em] block mb-1">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="w-full bg-transparent text-charcoal-foreground text-lg py-2 focus:outline-none placeholder:text-charcoal-foreground/30"
                />
              </div>
            ))}
            <div className="border-b border-charcoal-foreground/20 pb-2 focus-within:border-primary transition-colors">
              <label className="text-charcoal-foreground/40 text-xs uppercase tracking-[0.2em] block mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent text-charcoal-foreground text-lg py-2 focus:outline-none resize-none placeholder:text-charcoal-foreground/30"
              />
            </div>
            <Button variant="gold" size="lg" type="submit" className="mt-4">
              Send Message
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
