import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Food emojis for animation
  const foodItems = ["🍛", "🍜", "🥘", "🍚", "🫓", "🧄", "🌶️", "🥥"];
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
    <section ref={sectionRef} className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Animated Food Items - Left Side */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-8">
          {foodItems.map((food, index) => (
            <div
              key={`left-${index}`}
              className={`text-4xl transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                animation: isVisible ? `float ${3 + (index % 3)}s ease-in-out infinite` : 'none',
                animationDelay: `${index * 0.5}s`
              }}
            >
              {food}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Food Items - Right Side */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-8">
          {foodItems.map((food, index) => (
            <div
              key={`right-${index}`}
              className={`text-4xl transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150 + 100}ms` : '0ms',
                animation: isVisible ? `float ${3 + (index % 3)}s ease-in-out infinite` : 'none',
                animationDelay: `${index * 0.5 + 1}s`
              }}
            >
              {food}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
            <Card 
              key={index} 
              className={`text-center hover:shadow-warm transition-all duration-200 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200 + 400}ms` : '0ms' 
              }}
            >
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