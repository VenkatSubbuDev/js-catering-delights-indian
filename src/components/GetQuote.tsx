import { QuoteForm } from "./QuoteForm";
import { Phone, Mail, Clock, Award } from "lucide-react";

export function GetQuote() {
  const handleFormSubmit = (data: any) => {
    console.log("Quote form submitted:", data);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Planning an event? Let us create a personalized catering package that perfectly fits your needs and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border">
              <QuoteForm onSubmit={handleFormSubmit} />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose JS Caterings?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Authentic Indian Cuisine</h4>
                    <p className="text-muted-foreground">Traditional recipes passed down through generations, prepared with the finest ingredients.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Timely Service</h4>
                    <p className="text-muted-foreground">Professional setup and service that ensures your event runs smoothly from start to finish.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">Our team is available around the clock to answer questions and assist with your event planning.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Custom Packages</h4>
                    <p className="text-muted-foreground">Flexible catering solutions tailored to your specific requirements and dietary preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9347670599" className="text-foreground hover:text-primary transition-colors">
                    93476 70599
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">jscatering.in</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Call us now for immediate assistance or use the form to request a detailed quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}