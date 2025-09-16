import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Services", href: "#services" },
    { name: "Get Quote", href: "#quote" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = navItems.map(item => document.getElementById(item.href.substring(1))).filter(Boolean);
    sections.forEach(section => section && observer.observe(section));

    return () => {
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#quote") {
      // Check if we're on the quote section, if not scroll to it
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If quote section doesn't exist, show dialog
        setShowQuoteDialog(true);
      }
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">JS Caterings</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-200 font-medium ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowQuoteDialog(true)}
            >
              <Phone className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setShowQuoteDialog(true)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <QuoteDialog 
        open={showQuoteDialog} 
        onOpenChange={setShowQuoteDialog} 
      />
    </nav>
  );
}