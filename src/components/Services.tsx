import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Truck, ChefHat } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Calendar,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our comprehensive wedding catering services.",
      features: ["Custom menu planning", "Traditional setup", "Professional service staff", "Decoration coordination"]
    },
    {
      icon: Utensils,
      title: "Corporate Events",
      description: "Professional catering solutions for business meetings, conferences, and corporate gatherings.",
      features: ["Business lunch packages", "Conference catering", "Office party menus", "Professional presentation"]
    },
    {
      icon: ChefHat,
      title: "Private Parties",
      description: "Intimate dining experiences for birthdays, anniversaries, and family celebrations.",
      features: ["Customized menus", "Home-style cooking", "Flexible portions", "Personal chef service"]
    },
    {
      icon: Truck,
      title: "Event Catering",
      description: "Full-service catering for festivals, cultural events, and community gatherings.",
      features: ["Large scale cooking", "Festival menus", "Cultural authenticity", "Event coordination"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we provide comprehensive catering services 
            tailored to your specific needs and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="warm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}