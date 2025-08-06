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
      title: "The Art of Nigiri: Mastering the Perfect Balance",
      excerpt: "Discover the centuries-old techniques behind crafting the perfect nigiri, from rice preparation to fish selection.",
      image: nigiriImage,
      category: "Techniques",
      readTime: "5 min read",
      publishDate: "March 15, 2024",
      featured: true,
    },
    {
      id: "2",
      title: "Sustainable Sourcing: Our Commitment to Ocean Health",
      excerpt: "Learn about our partnerships with sustainable fisheries and how we're helping protect marine ecosystems.",
      image: heroImage,
      category: "Sustainability",
      readTime: "7 min read",
      publishDate: "March 10, 2024",
    },
    {
      id: "3",
      title: "The History of Sushi: From Street Food to Fine Dining",
      excerpt: "Explore the fascinating evolution of sushi from humble beginnings in Edo-period Japan to today's culinary art form.",
      image: chefImage,
      category: "History",
      readTime: "8 min read",
      publishDate: "March 5, 2024",
    },
    {
      id: "4",
      title: "Sake Pairing Guide: Enhancing Your Sushi Experience",
      excerpt: "Master the art of pairing different types of sake with various sushi to elevate your dining experience.",
      image: makiImage,
      category: "Pairing",
      readTime: "6 min read",
      publishDate: "February 28, 2024",
    },
    {
      id: "5",
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Get an exclusive look at our daily preparation process and meet the dedicated team behind every perfect piece.",
      image: chefImage,
      category: "Behind the Scenes",
      readTime: "4 min read",
      publishDate: "February 20, 2024",
    },
  ];

  const categories = ["All", "Techniques", "History", "Sustainability", "Pairing", "Behind the Scenes"];

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Sushi Stories & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the world of sushi with expert tips, stories, and culinary wisdom from our master chefs.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "hero-gradient" : ""}
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
                  Featured
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
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
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
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
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
              Stay Updated with Sushi Insights
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles, recipes, and culinary tips from our master chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};