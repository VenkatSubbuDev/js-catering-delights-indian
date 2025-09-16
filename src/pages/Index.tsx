import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FoodVarieties } from "@/components/FoodVarieties";
import { Services } from "@/components/Services";
import { GetQuote } from "@/components/GetQuote";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
