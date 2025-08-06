import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sushi.jpg";
import nigiriImage from "@/assets/nigiri-set.jpg";
import makiImage from "@/assets/maki-collection.jpg";
import chefImage from "@/assets/chef-preparing.jpg";

export const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Nigiri Set",
      description: "A carefully curated selection of our finest nigiri featuring salmon, tuna, and shrimp.",
      price: 24.99,
      originalPrice: 29.99,
      image: nigiriImage,
      rating: 4.8,
      isPopular: true,
    },
    {
      id: "2", 
      name: "Signature Maki Collection",
      description: "An assortment of our most popular maki rolls including California, spicy tuna, and salmon avocado.",
      price: 32.99,
      image: makiImage,
      rating: 4.9,
      isNew: true,
    },
    {
      id: "3",
      name: "Chef's Special Platter",
      description: "Our master chef's daily selection of premium sushi and sashimi.",
      price: 45.99,
      image: heroImage,
      rating: 5.0,
      isPopular: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Crafted with
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Passion & Precision
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the art of authentic Japanese sushi, made fresh daily with the finest ingredients by our master chefs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient hover:shadow-glow-primary text-lg px-8 py-6" asChild>
              <Link to="/categories">
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose SushiCraft?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and unforgettable flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We source only the finest, freshest ingredients from trusted suppliers to ensure every bite is perfect.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Made Fresh Daily</h3>
                <p className="text-muted-foreground">
                  Every piece of sushi is crafted fresh to order by our experienced chefs using traditional techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick and careful delivery to preserve freshness and ensure your sushi arrives in perfect condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Selections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and chef-recommended sushi creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/categories">
                View Full Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Culinary Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Master Chef Hiroshi Tanaka, SushiCraft brings authentic Japanese traditions to your table. With over 20 years of experience and training in Tokyo's most prestigious sushi restaurants, we've perfected the art of sushi making.
              </p>
              <p className="text-muted-foreground">
                Every grain of rice is seasoned to perfection, every cut of fish is carefully selected, and every roll is crafted with the precision and respect that this ancient art demands.
              </p>
              <Button className="hero-gradient hover:shadow-glow-primary" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={chefImage}
                alt="Chef preparing sushi"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Experience Authentic Sushi?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SushiCraft for their sushi cravings.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
            <Link to="/categories">
              Start Your Order <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};