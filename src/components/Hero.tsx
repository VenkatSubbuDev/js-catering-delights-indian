import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            JS Caterings
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Authentic Indian Cuisine for Every Occasion
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the rich flavors and cultural heritage of India through our exceptional catering services. 
            From traditional delicacies to modern fusion, we bring authentic taste to your special events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Event
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}