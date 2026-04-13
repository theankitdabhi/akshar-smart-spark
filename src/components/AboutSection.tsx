import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="border-l-4 border-primary pl-6">
          <p className="section-label">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Akshar Enterprise
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in Vadodara, Gujarat, Akshar Enterprise has been a trusted name in smart technology solutions for over 15 years. We deliver integrated I.T., Security, Automation, Communication and Audio/Video systems for homes, offices, and commercial establishments across India.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our mission is to simplify technology for our clients — providing end-to-end design, installation, and after-sales support so you can focus on what matters most. From structured cabling to intelligent lighting, we bring every element together seamlessly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With 500+ satisfied clients, partnerships with leading global brands, and a dedicated service team, Akshar Enterprise is your one-stop partner for smart, reliable, and future-ready technology solutions.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={aboutImg}
            alt="Smart technology infrastructure"
            className="w-full h-80 md:h-96 object-cover"
            loading="lazy"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
