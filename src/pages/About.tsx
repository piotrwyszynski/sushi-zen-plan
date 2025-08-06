import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, Heart } from "lucide-react";
import chefImage from "@/assets/chef-preparing.jpg";
import heroImage from "@/assets/hero-sushi.jpg";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We never compromise on quality, sourcing only the finest ingredients and maintaining the highest standards."
    },
    {
      icon: Clock,
      title: "Tradition",
      description: "Honoring centuries-old Japanese sushi-making traditions while embracing modern culinary innovations."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our customers, suppliers, and the local community we serve."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every piece of sushi is crafted with love, dedication, and genuine passion for the culinary arts."
    }
  ];

  const achievements = [
    "20+ Years of Experience",
    "5-Star Customer Rating",
    "Tokyo-Trained Chefs",
    "Sustainable Sourcing",
    "Award-Winning Restaurant",
    "Fresh Daily Preparation"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground w-fit">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                A Journey of
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Culinary Mastery
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2004 by Master Chef Hiroshi Tanaka, SushiCraft represents the perfect fusion of traditional Japanese craftsmanship and modern culinary innovation. Our journey began with a simple mission: to bring authentic, high-quality sushi to food lovers who appreciate the art of exceptional cuisine.
              </p>
              <p className="text-muted-foreground">
                Every day, we honor the centuries-old traditions of sushi making while continuously pushing the boundaries of flavor and presentation.
              </p>
            </div>
            <div className="relative">
              <img 
                src={chefImage}
                alt="Master Chef preparing sushi"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from ingredient selection to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 hero-gradient rounded-full mx-auto flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Master Chef Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={heroImage}
                alt="Premium sushi selection"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <Badge className="bg-accent text-accent-foreground w-fit">Master Chef</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Hiroshi Tanaka
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over two decades of experience in the culinary world, Master Chef Hiroshi Tanaka trained under renowned sushi masters in Tokyo's prestigious Tsukiji district. His dedication to perfection and deep respect for traditional techniques have earned him recognition as one of the finest sushi chefs outside of Japan.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Training & Experience:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5 years at Jiro's apprentice program in Tokyo</li>
                  <li>• Certified by Japan Sushi Academy</li>
                  <li>• Winner of International Sushi Competition 2018</li>
                  <li>• Featured in Culinary Masters Magazine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition that reflects our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-border bg-card hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <p className="font-semibold text-foreground text-sm">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 hero-gradient">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            "To create extraordinary sushi experiences that honor Japanese traditions while delighting modern palates. We believe that great food brings people together, and every piece we craft is a bridge between cultures, generations, and hearts."
          </p>
          <p className="text-lg text-white/80 italic">
            — Master Chef Hiroshi Tanaka
          </p>
        </div>
      </section>
    </div>
  );
};