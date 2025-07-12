import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Authentic Flavors",
      description: "Traditional recipes passed down through generations, using authentic spices and cooking methods."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Fresh ingredients sourced daily and prepared by experienced chefs with attention to detail."
    },
    {
      icon: Users,
      title: "All Occasions",
      description: "From intimate gatherings to grand celebrations, we cater to events of all sizes."
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Reliable and punctual service ensuring your event runs smoothly and on schedule."
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About JS Caterings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rooted in Indian culture and tradition, JS Caterings brings you an exquisite culinary journey 
            that celebrates the diverse flavors of India. Our passion for authentic cuisine and commitment 
            to excellence makes every event memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}