import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import chefImage from "@/assets/chef-preparing.jpg";
import nigiriImage from "@/assets/nigiri-set.jpg";
import makiImage from "@/assets/maki-collection.jpg";
import heroImage from "@/assets/hero-sushi.jpg";

export const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Sztuka Nigiri: Opanowanie Idealnej Równowagi",
      excerpt: "Odkryj wielowiekowe techniki stojące za tworzeniem idealnego nigiri, od przygotowania ryżu po wybór ryby.",
      image: nigiriImage,
      category: "Techniki",
      readTime: "5 min czytania",
      publishDate: "15 marca 2024",
      featured: true,
    },
    {
      id: "2",
      title: "Zrównoważone Pozyskiwanie: Nasze Zobowiązanie wobec Zdrowia Oceanów",
      excerpt: "Dowiedz się o naszych partnerstwach ze zrównoważonymi łowiskami i jak pomagamy chronić ekosystemy morskie.",
      image: heroImage,
      category: "Zrównoważoność",
      readTime: "7 min czytania",
      publishDate: "10 marca 2024",
    },
    {
      id: "3",
      title: "Historia Sushi: Od Jedzenia Ulicznego do Wykwintnej Kuchni",
      excerpt: "Poznaj fascynującą ewolucję sushi od skromnych początków w okresie Edo w Japonii do dzisiejszej sztuki kulinarnej.",
      image: chefImage,
      category: "Historia",
      readTime: "8 min czytania",
      publishDate: "5 marca 2024",
    },
    {
      id: "4",
      title: "Przewodnik po Parowaniu z Sake: Wzbogacenie Doświadczenia Sushi",
      excerpt: "Opanuj sztukę parowania różnych rodzajów sake z różnorodnymi sushi, aby podnieść swoje doznania kulinarne.",
      image: makiImage,
      category: "Parowanie",
      readTime: "6 min czytania",
      publishDate: "28 lutego 2024",
    },
    {
      id: "5",
      title: "Kulisy: Dzień w Naszej Kuchni",
      excerpt: "Uzyskaj ekskluzywny wgląd w nasz codzienny proces przygotowywania i poznaj oddany zespół stojący za każdym idealnym kawałkiem.",
      image: chefImage,
      category: "Kulisy",
      readTime: "4 min czytania",
      publishDate: "20 lutego 2024",
    },
  ];

  const categories = ["Wszystkie", "Techniki", "Historia", "Zrównoważoność", "Parowanie", "Kulisy"];

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Historie i Wglądy w Sushi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zanurz się głęboko w świat sushi z profesjonalnymi wskazówkami, historiami i kulinarną mądrością od naszych mistrzów kuchni.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Wszystkie" ? "default" : "outline"}
              size="sm"
              className={category === "Wszystkie" ? "hero-gradient" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <Card className="mb-16 overflow-hidden border-border bg-card hover:shadow-glow-primary transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Polecane
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{blogPosts[0].publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="hero-gradient hover:shadow-glow-primary w-fit" asChild>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Czytaj Pełny Artykuł <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-border bg-card hover:shadow-glow-primary transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span>{post.publishDate}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Czytaj Więcej <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-16 hero-gradient">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Bądź na Bieżąco z Wglądami w Sushi
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Zapisz się do naszego newslettera, aby otrzymywać najnowsze artykuły, przepisy i kulinarne wskazówki od naszych mistrzów kuchni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Wprowadź swój email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Zapisz się
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};