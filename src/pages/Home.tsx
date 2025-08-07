import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sushi.jpg";
import nigiriImage from "@/assets/nigiri-set.jpg";
import makiImage from "@/assets/maki-collection.jpg";
import chefImage from "@/assets/chef-preparing.jpg";
import zestawyImage from "@/assets/category-zestawy.jpg";
import zupyImage from "@/assets/category-zupy.jpg";
import hosomakiImage from "@/assets/category-hosomaki.jpg";
import fusionImage from "@/assets/category-fusion.jpg";
import nigiriCategoryImage from "@/assets/category-nigiri.jpg";
import sashimiImage from "@/assets/category-sashimi.jpg";
import uramakiImage from "@/assets/category-uramaki.jpg";
import napojeImage from "@/assets/category-napoje.jpg";

export const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Zestaw Premium Nigiri",
      description: "Starannie dobrana selekcja naszych najlepszych nigiri z łososiem, tuńczykiem i krewetkami.",
      price: 89.99,
      originalPrice: 109.99,
      image: nigiriImage,
      rating: 4.8,
      isPopular: true,
    },
    {
      id: "2", 
      name: "Kolekcja Signature Maki",
      description: "Asortyment naszych najpopularniejszych rolek maki, w tym California, pikantny tuńczyk i łosoś z awokado.",
      price: 119.99,
      image: makiImage,
      rating: 4.9,
      isNew: true,
    },
    {
      id: "3",
      name: "Specjalny Talerz Szefa Kuchni",
      description: "Codziennie zmieniająca się selekcja premium sushi i sashimi od naszego mistrza kuchni.",
      price: 169.99,
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
            Stworzone z
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Pasją i Precyzją
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Doświadcz sztuki autentycznego japońskiego sushi, przygotowywanego codziennie ze świeżych składników przez naszych mistrzów kuchni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient hover:shadow-glow-primary text-lg px-8 py-6" asChild>
              <Link to="/categories">
                Zamów Teraz <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/about">
                Nasza Historia
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
              Dlaczego Sushi Strefa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jesteśmy zobowiązani do dostarczania wyjątkowej jakości i niezapomnianych smaków.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Najwyższa Jakość</h3>
                <p className="text-muted-foreground">
                  Pozyskujemy tylko najlepsze, najświeższe składniki od zaufanych dostawców, aby każdy kęs był idealny.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Codziennie Świeże</h3>
                <p className="text-muted-foreground">
                  Każdy kawałek sushi jest przygotowywany na świeżo na zamówienie przez naszych doświadczonych kucharzy z użyciem tradycyjnych technik.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Szybka Dostawa</h3>
                <p className="text-muted-foreground">
                  Szybka i ostrożna dostawa, aby zachować świeżość i zapewnić, że sushi dotrze w idealnym stanie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Najpopularniejsze Kategorie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odkryj nasze najpopularniejsze kategorie sushi i wybierz swoje ulubione smaki.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${zestawyImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Zestawy</h3>
                  <p className="text-xs text-muted-foreground">Kompletne zestawy sushi</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${zupyImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Zupy</h3>
                  <p className="text-xs text-muted-foreground">Tradycyjne japońskie zupy</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${hosomakiImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Hosomaki</h3>
                  <p className="text-xs text-muted-foreground">Cienkie rolki sushi</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${fusionImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Strefa Fusion</h3>
                  <p className="text-xs text-muted-foreground">Nowoczesne kreacje</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${nigiriCategoryImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Nigiri</h3>
                  <p className="text-xs text-muted-foreground">Klasyczne nigiri</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${sashimiImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Sashimi</h3>
                  <p className="text-xs text-muted-foreground">Świeże filety ryb</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${uramakiImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Uramaki</h3>
                  <p className="text-xs text-muted-foreground">Rolki na odwrót</p>
                </div>
              </div>
            </Link>

            <Link to="/categories" className="group">
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${napojeImage})` }}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Napoje</h3>
                  <p className="text-xs text-muted-foreground">Sake i inne napoje</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Polecane Selekcje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odkryj nasze najpopularniejsze i polecane przez szefa kuchni kreacje sushi.
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
                Zobacz Pełne Menu <ArrowRight className="ml-2 h-5 w-5" />
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
                Nasza Kulinarna Podróż
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Założona przez Mistrza Kuchni Hiroshi Tanaka, Sushi Strefa wnosi autentyczne japońskie tradycje na Twój stół. Z ponad 20-letnim doświadczeniem i szkoleniem w najbardziej prestiżowych restauracjach sushi w Tokio, udoskonaliliśmy sztukę przyrządzania sushi.
              </p>
              <p className="text-muted-foreground">
                Każde ziarnko ryżu jest przyprawione do perfekcji, każdy kawałek ryby jest starannie wybierany, a każda rolka jest wykonywana z precyzją i szacunkiem, jakich wymaga ta starożytna sztuka.
              </p>
              <Button className="hero-gradient hover:shadow-glow-primary" asChild>
                <Link to="/about">
                  Dowiedz Się Więcej O Nas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={chefImage}
                alt="Szef kuchni przygotowujący sushi"
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
            Gotowy na Doświadczenie Autentycznego Sushi?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Dołącz do tysięcy zadowolonych klientów, którzy ufają Sushi Strefa w zaspokajaniu swoich sushi-owych pragnień.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
            <Link to="/categories">
              Rozpocznij Zamówienie <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};