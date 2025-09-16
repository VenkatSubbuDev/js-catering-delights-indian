import { useState } from "react";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";

export function Footer() {
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);

  const scrollToSection = (href: string) => {
    if (href === "#quote") {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setShowQuoteDialog(true);
      }
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">JS Caterings</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Bringing authentic Indian flavors to your special occasions. 
              Experience the richness of Indian culture through our exceptional cuisine.
            </p>
            <div className="flex items-center text-background/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-deep-red" />
              <span>for food lovers</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("#home")} className="text-background/80 hover:text-background transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection("#about")} className="text-background/80 hover:text-background transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("#menu")} className="text-background/80 hover:text-background transition-colors">Our Menu</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="text-background/80 hover:text-background transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection("#quote")} className="text-background/80 hover:text-background transition-colors">Get Quote</button></li>
              <li><button onClick={() => scrollToSection("#contact")} className="text-background/80 hover:text-background transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-saffron" />
                <a href="tel:9347670599" className="text-background/80 hover:text-background transition-colors">93476 70599</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-saffron" />
                <span className="text-background/80">jscatering.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-saffron" />
                <span className="text-background/80">Nandyal, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 JS Caterings. All rights reserved. | Authentic Indian Cuisine for Every Occasion
          </p>
        </div>
      </div>
      
      <QuoteDialog 
        open={showQuoteDialog} 
        onOpenChange={setShowQuoteDialog} 
      />
    </footer>
  );
}