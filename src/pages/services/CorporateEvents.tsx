import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Coffee, Presentation, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateEvents = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Business Lunch Packages",
      description: "Professional lunch solutions for business meetings and corporate discussions."
    },
    {
      icon: Presentation,
      title: "Conference Catering",
      description: "Comprehensive catering services for conferences, seminars, and corporate events."
    },
    {
      icon: Coffee,
      title: "Office Party Menus",
      description: "Customized menus for office celebrations, team building events, and corporate parties."
    },
    {
      icon: Users,
      title: "Professional Presentation",
      description: "Elegant presentation and service that maintains your corporate image and professionalism."
    }
  ];

  const services = [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Corporate Event Catering
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Professional catering solutions for business meetings, conferences, and corporate gatherings that enhance your professional image.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#quote">Request Corporate Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/#contact">Discuss Requirements</Link>
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
              Corporate Catering Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the importance of maintaining professionalism while providing delicious, fresh food for your corporate events.
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

      {/* Corporate Benefits Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Corporate Catering Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional catering that enhances your business image and ensures successful corporate events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Professional Image
                </h3>
                <p className="text-muted-foreground">
                  Enhance your corporate reputation with high-quality food presentation and service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Time Efficient
                </h3>
                <p className="text-muted-foreground">
                  Save valuable time with our complete catering solutions and professional setup.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Team Satisfaction
                </h3>
                <p className="text-muted-foreground">
                  Keep your team energized and satisfied with delicious, fresh meal options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose JS Catering for Corporate Events?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Punctual Service
              </h3>
              <p className="text-muted-foreground">
                We understand business timelines and always deliver on time, every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Presentation className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Professional Setup
              </h3>
              <p className="text-muted-foreground">
                Clean, professional presentation that enhances your corporate image.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Business Focused
              </h3>
              <p className="text-muted-foreground">
                Customized solutions that understand and support your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateEvents;