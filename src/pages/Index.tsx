import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FoodVarieties } from "@/components/FoodVarieties";
import { Services } from "@/components/Services";
import { GetQuote } from "@/components/GetQuote";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEOHead, defaultStructuredData } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="JS Catering Delights - Best Indian Food Catering Services | Wedding & Event Catering"
        description="Professional Indian food catering services for weddings, corporate events, private parties & festivals. Authentic cuisine, traditional setup, expert service. Book now for unforgettable dining experiences."
        keywords="indian food catering, wedding catering, corporate catering, event catering, private party catering, authentic indian cuisine, traditional food service, catering services near me, indian wedding catering, festival catering"
        canonical="https://js-catering-delights-indian.lovable.app/"
        structuredData={defaultStructuredData}
      />
      <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <FoodVarieties />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="quote">
          <GetQuote />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
