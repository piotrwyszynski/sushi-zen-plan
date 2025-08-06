import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import nigiriImage from "@/assets/nigiri-set.jpg";
import makiImage from "@/assets/maki-collection.jpg";
import heroImage from "@/assets/hero-sushi.jpg";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    {
      id: "all",
      name: "Wszystkie Pozycje",
      description: "Przeglądaj naszą pełną selekcję",
      count: 24,
    },
    {
      id: "nigiri",
      name: "Nigiri i Sashimi",
      description: "Ręcznie formowany ryż z świeżą rybą i premium owocami morza",
      count: 8,
      image: nigiriImage,
    },
    {
      id: "maki",
      name: "Rolki Maki",
      description: "Tradycyjne i firmowe rolki zawinięte w nori",
      count: 12,
      image: makiImage,
    },
    {
      id: "sets",
      name: "Zestawy Premium",
      description: "Starannie dobrane kombinacje dla idealnego doświadczenia sushi",
      count: 4,
      image: heroImage,
    },
  ];

  const products = [
    {
      id: "1",
      name: "Nigiri z Łososiem",
      description: "Świeży atlantycki łosoś na przyprawionym ryżu sushi",
      price: 3.99,
      image: nigiriImage,
      rating: 4.8,
      category: "nigiri",
    },
    {
      id: "2",
      name: "Sashimi z Tuńczyka",
      description: "Premium błękitnopłetwy tuńczyk, ekspercko pokrojony",
      price: 5.99,
      image: nigiriImage,
      rating: 4.9,
      category: "nigiri",
      isPopular: true,
    },
    {
      id: "3",
      name: "Rolka California",
      description: "Krab, awokado i ogórek zawinięte w nori",
      price: 8.99,
      image: makiImage,
      rating: 4.7,
      category: "maki",
    },
    {
      id: "4",
      name: "Pikantna Rolka z Tuńczykiem",
      description: "Pikantna mieszanka tuńczyka z ogórkiem i płatkami tempura",
      price: 9.99,
      image: makiImage,
      rating: 4.8,
      category: "maki",
      isNew: true,
    },
    {
      id: "5",
      name: "Rolka Smoka",
      description: "Węgorz i ogórek przykryte awokado i sosem węgorzowym",
      price: 14.99,
      image: makiImage,
      rating: 4.9,
      category: "maki",
      isPopular: true,
    },
    {
      id: "6",
      name: "Zestaw Omakase",
      description: "Wybór szefa kuchni: 12 kawałków nigiri i 1 rolka",
      price: 45.99,
      originalPrice: 52.99,
      image: heroImage,
      rating: 5.0,
      category: "sets",
      isPopular: true,
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nasze Menu Sushi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odkryj autentyczne smaki stworzone z precyzją i pasją
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-300 border-2 ${
                selectedCategory === category.id 
                  ? 'border-primary shadow-glow-primary' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.image && (
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/60" />
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  {category.name}
                  <Badge variant={selectedCategory === category.id ? "default" : "secondary"}>
                    {category.count}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtruj
            </Button>
            <span className="text-sm text-muted-foreground">
              Znaleziono {filteredProducts.length} pozycji
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nie znaleziono pozycji w tej kategorii.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSelectedCategory("all")}
            >
              Zobacz Wszystkie Pozycje
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};