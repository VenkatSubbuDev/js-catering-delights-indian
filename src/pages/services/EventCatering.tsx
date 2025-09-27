import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Globe, Calendar, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";

const EventCatering = () => {
  const eventTypes = [
    {
      icon: Calendar,
      title: "Festivals & Celebrations",
      description: "Traditional and cultural festival catering with authentic regional cuisines."
    },
    {
      icon: Users,
      title: "Community Gatherings",
      description: "Large-scale catering for community events, religious gatherings, and social causes."
    },
    {
      icon: Globe,
      title: "Cultural Events",
      description: "Specialized menus that celebrate diverse cultures and traditions."
    },
    {
      icon: Award,
      title: "Special Occasions",
      description: "Grand celebrations, inaugurations, and milestone events with memorable dining."
    }
  ];

  const capabilities = [
    {
      title: "Large Scale Cooking",
      description: "State-of-the-art kitchen facilities and experienced team to handle events for hundreds or thousands of guests",
      capacity: "Up to 5,000 guests",
      icon: "🍳"
    },
    {
      title: "Festival Menus",
      description: "Authentic festival foods, traditional recipes, and seasonal specialties that honor cultural significance",
      capacity: "200+ traditional dishes",
      icon: "🎉"
    },
    {
      title: "Cultural Authenticity",
      description: "Deep understanding of regional cuisines, traditional cooking methods, and cultural food practices",
      capacity: "15+ regional cuisines",
      icon: "🌍"
    },
    {
      title: "Event Coordination",
      description: "Complete event management including logistics, setup, service, and cleanup coordination",
      capacity: "Full-service management",
      icon: "📋"
    }
  ];

  const eventSizes = [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Catering Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Full-service catering for festivals, cultural events, and community gatherings with authentic cuisine and professional event coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#quote">Get Event Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/#contact">Discuss Your Event</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Events We Cater
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate community gatherings to massive festivals, we bring authentic flavors and professional service to every event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <eventType.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {eventType.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {eventType.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Event Catering Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With years of experience in large-scale event catering, we have the expertise and infrastructure to handle any size event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {capability.description}
                      </p>
                      <div className="bg-primary/10 rounded-lg p-3 inline-block">
                        <span className="text-primary font-semibold">{capability.capacity}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose JS Catering for Your Event?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Logistics Excellence
                </h3>
                <p className="text-muted-foreground">
                  Advanced planning and execution capabilities to handle complex event logistics seamlessly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Cultural Expertise
                </h3>
                <p className="text-muted-foreground">
                  Deep understanding of various cultural food traditions and festival requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Experienced Team
                </h3>
                <p className="text-muted-foreground">
                  Professional staff trained in large-scale event management and crowd service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventCatering;