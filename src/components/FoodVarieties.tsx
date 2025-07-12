import { Card, CardContent } from "@/components/ui/card";
import foodVarietiesImage from "@/assets/food-varieties.jpg";
import dessertsImage from "@/assets/desserts.jpg";
import streetFoodImage from "@/assets/street-food.jpg";

export function FoodVarieties() {
  const categories = [
    {
      title: "Traditional Cuisine",
      description: "Authentic curries, biryanis, dal, and fresh naan bread prepared with traditional spices and methods.",
      image: foodVarietiesImage,
      items: ["Chicken Curry", "Mutton Biryani", "Dal Tadka", "Butter Naan", "Paneer Tikka"]
    },
    {
      title: "Desserts & Sweets",
      description: "Traditional Indian sweets and desserts that add sweetness to your celebrations.",
      image: dessertsImage,
      items: ["Gulab Jamun", "Kheer", "Jalebi", "Rasgulla", "Kulfi"]
    },
    {
      title: "Street Food",
      description: "Popular Indian street foods that bring the authentic taste of Indian markets to your event.",
      image: streetFoodImage,
      items: ["Chaat", "Pav Bhaji", "Dosa", "Vada Pav", "Uttapam"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Food Varieties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our extensive range of authentic Indian cuisine, carefully crafted to satisfy 
            every palate and dietary preference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Popular Items:</h4>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}