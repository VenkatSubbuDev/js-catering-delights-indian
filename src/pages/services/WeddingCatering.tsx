import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Utensils, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const WeddingCatering = () => {
  const features = [
    {
      icon: Utensils,
      title: "Custom Menu Planning",
      description: "Personalized menus featuring traditional Indian cuisine and fusion options tailored to your preferences."
    },
    {
      icon: Users,
      title: "Professional Service Staff",
      description: "Experienced and courteous staff to ensure seamless service throughout your special day."
    },
    {
      icon: Star,
      title: "Traditional Setup",
      description: "Authentic Indian wedding setup with traditional serving styles and presentation."
    },
    {
      icon: Clock,
      title: "Decoration Coordination",
      description: "Beautiful table settings and food presentation that complements your wedding theme."
    }
  ];

  const packages = [
    {
      name: "Essential Wedding Package",
      guests: "50-100 Guests",
      price: "Starting from ₹15,000",
      features: [
        "3-course traditional menu",
        "Basic setup and serving",
        "2 service staff",
        "Standard presentation"
      ]
    },
    {
      name: "Premium Wedding Package",
      guests: "100-300 Guests",
      price: "Starting from ₹35,000",
      features: [
        "5-course elaborate menu",
        "Elegant setup and decoration",
        "4-6 professional staff",
        "Premium presentation",
        "Live cooking stations"
      ]
    },
    {
      name: "Royal Wedding Package",
      guests: "300+ Guests",
      price: "Starting from ₹75,000",
      features: [
        "7-course royal feast",
        "Luxurious setup and decor",
        "8+ expert staff",
        "Grand presentation",
        "Multiple live stations",
        "Dedicated event coordinator"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wedding Catering Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Make your special day unforgettable with our comprehensive wedding catering services featuring authentic Indian cuisine and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#quote">Get Wedding Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Wedding Catering?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that your wedding day is one of the most important days of your life. Our expert team ensures every detail is perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Wedding Catering Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully crafted packages or let us create a custom solution for your special day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{pkg.guests}</p>
                    <div className="text-3xl font-bold text-primary mb-6">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 text-primary mr-3 fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"} asChild>
                      <Link to="/#quote">Choose Package</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingCatering;