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
      name: "All Items",
      description: "Browse our complete selection",
      count: 24,
    },
    {
      id: "nigiri",
      name: "Nigiri & Sashimi",
      description: "Hand-pressed rice topped with fresh fish and premium seafood",
      count: 8,
      image: nigiriImage,
    },
    {
      id: "maki",
      name: "Maki Rolls",
      description: "Traditional and signature rolls wrapped in nori seaweed",
      count: 12,
      image: makiImage,
    },
    {
      id: "sets",
      name: "Premium Sets",
      description: "Carefully curated combinations for the perfect sushi experience",
      count: 4,
      image: heroImage,
    },
  ];

  const products = [
    {
      id: "1",
      name: "Salmon Nigiri",
      description: "Fresh Atlantic salmon over seasoned sushi rice",
      price: 3.99,
      image: nigiriImage,
      rating: 4.8,
      category: "nigiri",
    },
    {
      id: "2",
      name: "Tuna Sashimi",
      description: "Premium bluefin tuna, expertly sliced",
      price: 5.99,
      image: nigiriImage,
      rating: 4.9,
      category: "nigiri",
      isPopular: true,
    },
    {
      id: "3",
      name: "California Roll",
      description: "Crab, avocado, and cucumber wrapped in nori",
      price: 8.99,
      image: makiImage,
      rating: 4.7,
      category: "maki",
    },
    {
      id: "4",
      name: "Spicy Tuna Roll",
      description: "Spicy tuna mix with cucumber and tempura flakes",
      price: 9.99,
      image: makiImage,
      rating: 4.8,
      category: "maki",
      isNew: true,
    },
    {
      id: "5",
      name: "Dragon Roll",
      description: "Eel and cucumber topped with avocado and eel sauce",
      price: 14.99,
      image: makiImage,
      rating: 4.9,
      category: "maki",
      isPopular: true,
    },
    {
      id: "6",
      name: "Omakase Set",
      description: "Chef's choice of 12 pieces nigiri and 1 roll",
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
              Our Sushi Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic flavors crafted with precision and passion
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
              Filter
            </Button>
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} items found
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
              No items found in this category.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSelectedCategory("all")}
            >
              View All Items
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};