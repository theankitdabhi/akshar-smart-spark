import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.open(`mailto:kalpesh@aksharenterprise.co.in?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="section-label">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground text-sm">
                Shivang Complex, Shop No. 4, 5, 6, Urmi Rd, Opp Gail Office, Punit Nagar Society, Vadodara, Gujarat 390007
              </p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="mailto:kalpesh@aksharenterprise.co.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                kalpesh@aksharenterprise.co.in
              </a>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+919824037776" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                +91 98240 37776
              </a>
            </div>

            <div className="mt-6 rounded-lg overflow-hidden border border-border">
              <iframe
                title="Akshar Enterprise Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6!2d73.1710!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e7a1b8b0c1%3A0x9f5a3e5b1d6e5c1a!2sShivang%20Complex%2C%20Urmi%20Rd%2C%20Punit%20Nagar%20Society%2C%20Vadodara%2C%20Gujarat%20390007!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-sm font-medium text-foreground mb-1 block">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <Button variant="gold" size="lg" type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
