import heroClinic from "@/assets/hero-clinic.jpg";
import drAyesha from "@/assets/dr-ayesha.jpg";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Award, Users, Heart, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroClinic}
          alt="Dermatology Clinic Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/95 via-teal/85 to-teal-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/50 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-rose-gold/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="animate-fade-up font-body text-accent uppercase tracking-[0.3em] text-sm mb-6">
          Expert Dermatology Care
        </p>
        <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 leading-tight">
          Dr. Ayesha Hina
        </h1>
        <p className="animate-fade-up delay-200 font-display text-2xl md:text-3xl text-accent italic mb-4">
          FCPS Dermatology
        </p>
        <p className="animate-fade-up delay-300 font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Consultant Dermatologist at Liaquat National Hospital, providing expert care for all skin conditions with a personalized approach
        </p>
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal opacity-0 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl" />
              <img
                src={drAyesha}
                alt="Dr. Ayesha Hina"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-card p-6 rounded-2xl shadow-card">
              <p className="text-4xl font-display font-semibold text-primary">15+</p>
              <p className="text-sm text-muted-foreground font-body">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="reveal opacity-0 text-accent uppercase tracking-[0.2em] text-sm font-body">About the Doctor</p>
            <h2 className="reveal opacity-0 font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
              Dedicated to Your <span className="text-primary">Skin Health</span>
            </h2>
            <p className="reveal opacity-0 text-muted-foreground text-lg leading-relaxed font-body">
              Dr. Ayesha Hina is a highly skilled Consultant Dermatologist at Liaquat National Hospital's Department of Dermatology. With her FCPS in Dermatology and years of clinical experience, she specializes in diagnosing and treating a wide range of skin conditions.
            </p>
            <p className="reveal opacity-0 text-muted-foreground leading-relaxed font-body">
              Her expertise spans from common dermatological issues to complex skin disorders, always providing compassionate care tailored to each patient's unique needs at the Dermatology and Allergy Clinic.
            </p>
            
            {/* Stats */}
            <div className="reveal opacity-0 grid grid-cols-3 gap-6 pt-6">
              {[
                { icon: Users, label: "Patients", value: "10,000+" },
                { icon: Award, label: "Certifications", value: "FCPS" },
                { icon: Heart, label: "Satisfaction", value: "98%" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Sparkles,
    title: "Medical Dermatology",
    description: "Comprehensive diagnosis and treatment of skin diseases including acne, eczema, psoriasis, and skin infections.",
  },
  {
    icon: Heart,
    title: "Allergy Testing",
    description: "Advanced allergy testing and treatment for skin allergies, contact dermatitis, and hypersensitivity reactions.",
  },
  {
    icon: Award,
    title: "Cosmetic Dermatology",
    description: "Aesthetic treatments including chemical peels, laser therapy, and anti-aging solutions for rejuvenated skin.",
  },
  {
    icon: Users,
    title: "Pediatric Dermatology",
    description: "Specialized skin care for children, addressing conditions like birthmarks, rashes, and childhood eczema.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.service-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-body mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Expert Care for <span className="text-primary">Every Skin Concern</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card opacity-0 glass-card p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const schedule = [
  { day: "Monday", morning: "—", afternoon: "2:00 PM - 4:30 PM" },
  { day: "Tuesday", morning: "9:00 AM - 1:00 PM", afternoon: "2:00 PM - 4:30 PM" },
  { day: "Wednesday", morning: "9:00 AM - 1:00 PM", afternoon: "2:00 PM - 4:30 PM" },
  { day: "Thursday", morning: "9:00 AM - 1:00 PM", afternoon: "2:00 PM - 4:00 PM" },
  { day: "Saturday", morning: "9:00 AM - 1:00 PM", afternoon: "2:00 PM - 4:30 PM" },
];

const Schedule = () => {
  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-body mb-4">Clinic Hours</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            OPD <span className="text-primary">Schedule</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden shadow-elevated">
            <div className="bg-primary p-6">
              <h3 className="font-display text-2xl text-primary-foreground text-center">
                Dermatology & Allergy Clinic
              </h3>
              <p className="text-primary-foreground/80 text-center font-body text-sm mt-1">
                Liaquat National Hospital
              </p>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-body font-medium text-foreground">Day</th>
                    <th className="text-center py-3 font-body font-medium text-foreground">Morning</th>
                    <th className="text-center py-3 font-body font-medium text-foreground">Afternoon</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/50 transition-colors">
                      <td className="py-4 font-body font-medium text-foreground">{row.day}</td>
                      <td className="py-4 text-center font-body text-muted-foreground">{row.morning}</td>
                      <td className="py-4 text-center font-body text-muted-foreground">{row.afternoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-teal-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.2em] text-sm font-body mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-primary-foreground">
            Contact <span className="text-accent">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Phone",
              lines: ["(021) 3441-2692", "(021) 3441-3010", "(021) 3441-3223"],
            },
            {
              icon: MapPin,
              title: "Location",
              lines: ["Liaquat National Hospital", "Karachi, Pakistan"],
            },
            {
              icon: Clock,
              title: "Hours",
              lines: ["Mon-Thu & Sat", "9:00 AM - 4:30 PM"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover-lift"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-primary-foreground mb-3">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-primary-foreground/70 font-body text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="https://api.whatsapp.com/send/?phone=9221111456456" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-2xl text-background mb-2">Dr. Ayesha Hina</p>
        <p className="text-muted font-body text-sm">
          Consultant Dermatologist • FCPS Dermatology
        </p>
        <p className="text-muted/60 font-body text-xs mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
