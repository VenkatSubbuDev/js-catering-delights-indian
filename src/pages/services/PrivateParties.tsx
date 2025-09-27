import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Gift, ChefHat, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PrivateParties = () => {
  const occasions = [
    {
      icon: Gift,
      title: "Birthday Celebrations",
      description: "Make birthdays memorable with customized menus and special touches for all ages."
    },
    {
      icon: Heart,
      title: "Anniversary Dinners",
      description: "Romantic and intimate dining experiences to celebrate your special milestones."
    },
    {
      icon: Home,
      title: "Family Gatherings",
      description: "Warm, home-style cooking that brings families together for precious moments."
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Perfect catering solutions for housewarming parties, reunions, and social gatherings."
    }
  ];

  const features = [
    {
      title: "Customized Menus",
      description: "Personalized menu planning based on your preferences, dietary restrictions, and guest count",
      icon: "🍽️"
    },
    {
      title: "Home-Style Cooking",
      description: "Authentic, fresh-made dishes that feel like they're prepared in your own kitchen",
      icon: "🏠"
    },
    {
      title: "Flexible Portions",
      description: "Scalable serving sizes from intimate dinners for 2 to large family gatherings",
      icon: "⚖️"
    },
    {
      title: "Personal Chef Service",
      description: "Optional on-site cooking and personal chef services for the ultimate experience",
      icon: "👨‍🍳"
    }
  ];

  const packages = [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Private Party Catering
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Intimate dining experiences for birthdays, anniversaries, and family celebrations with the warmth of home-style cooking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#quote">Plan Your Party</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/#contact">Discuss Ideas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether it's an intimate dinner or a lively family gathering, we create memorable dining experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <occasion.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {occasion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring the comfort and love of home cooking to your special celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <ChefHat className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Personal Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              "Every private party is unique, just like the people celebrating. We take time to understand your vision, 
              preferences, and the story behind your celebration to create a truly personalized experience."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Flexible Timing</h4>
                <p className="text-sm text-muted-foreground">We work around your schedule</p>
              </div>
              <div>
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Made with Love</h4>
                <p className="text-sm text-muted-foreground">Every dish crafted with care</p>
              </div>
              <div>
                <Home className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Home Comfort</h4>
                <p className="text-sm text-muted-foreground">Bringing warmth to your celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateParties;