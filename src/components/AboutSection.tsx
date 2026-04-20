import aboutShape from "@/assets/about-shape.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div ref={leftRef} className="reveal md:col-span-7">
            <p className="section-label">[ About Us ]</p>
            <h2 className="display-text text-5xl md:text-7xl lg:text-8xl text-foreground mt-4 mb-10">
              We make tech feel <span className="text-primary italic font-light">simple</span>.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Founded in Vadodara, Gujarat, Akshar Enterprise has been a trusted name in smart technology solutions for over 15 years. We deliver integrated I.T., Security, Automation, Communication and Audio/Video systems for homes, offices, and commercial establishments across India.
              </p>
              <p>
                Our mission is to simplify technology for our clients — providing end-to-end design, installation, and after-sales support so you can focus on what matters most.
              </p>
              <p className="text-foreground font-medium">
                500+ satisfied clients. Partnerships with leading global brands. One reliable partner.
              </p>
            </div>
          </div>

          <div ref={rightRef} className="reveal reveal-delay-2 md:col-span-5 md:sticky md:top-32">
            <div className="relative rounded-lg overflow-hidden bg-charcoal aspect-square">
              <img
                src={aboutShape}
                alt="Akshar Enterprise network of integrated technology systems"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal to-transparent">
                <p className="text-charcoal-foreground/60 text-xs uppercase tracking-[0.2em]">Est.</p>
                <p className="display-text text-5xl text-primary">2009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
