import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "733 737 5347",
      subtitle: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      content: "jscatering.in",
      subtitle: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nandyal, Andhra Pradesh",
      subtitle: "Serving across the region"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "9:00 AM - 9:00 PM",
      subtitle: "Monday to Sunday"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to plan your next event? Contact us today for a personalized quote and 
            let us bring the authentic taste of India to your celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-primary mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Book Your Event?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us make your next celebration unforgettable with our authentic Indian cuisine 
            and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}