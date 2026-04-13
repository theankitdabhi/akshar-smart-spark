import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center"
  >
    <img
      src={heroBg}
      alt="Smart technology server room"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-charcoal/70" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Smart Technology Solutions
      </h1>
      <p className="text-lg md:text-xl text-charcoal-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        I.T. — Security — Automation — Communication
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <Button variant="gold" size="lg" asChild>
          <a href="#services">Explore Services</a>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
