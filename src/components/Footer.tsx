import { Heart, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
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
              <li><a href="#home" className="text-background/80 hover:text-background transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-background/80 hover:text-background transition-colors">Our Menu</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-saffron" />
                <span className="text-background/80">733 737 5347</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-saffron" />
                <span className="text-background/80">jscatering.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-saffron" />
                <span className="text-background/80">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 JS Caterings. All rights reserved. | Authentic Indian Cuisine for Every Occasion
          </p>
        </div>
      </div>
    </footer>
  );
}