import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users, Heart } from "lucide-react";
import chefImage from "@/assets/chef-preparing.jpg";
import heroImage from "@/assets/hero-sushi.jpg";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Doskonałość",
      description: "Nigdy nie idziemy na kompromis w kwestii jakości, pozyskując tylko najlepsze składniki i utrzymując najwyższe standardy."
    },
    {
      icon: Clock,
      title: "Tradycja",
      description: "Szanujemy wielowiekowe japońskie tradycje przygotowywania sushi, jednocześnie przyjmując nowoczesne innowacje kulinarne."
    },
    {
      icon: Users,
      title: "Społeczność",
      description: "Budujemy trwałe relacje z naszymi klientami, dostawcami i lokalną społecznością, której służymy."
    },
    {
      icon: Heart,
      title: "Pasja",
      description: "Każdy kawałek sushi jest przygotowywany z miłością, poświęceniem i prawdziwą pasją do sztuki kulinarnej."
    }
  ];

  const achievements = [
    "20+ Lat Doświadczenia",
    "Ocena 5 Gwiazdek",
    "Kucharze Szkoleni w Tokio",
    "Zrównoważone Pozyskiwanie",
    "Nagradzana Restauracja",
    "Codzienne Świeże Przygotowanie"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground w-fit">Nasza Historia</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Podróż
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                  Kulinarnego Mistrzostwa
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Założona w 2004 roku przez Mistrza Kuchni Hiroshi Tanaka, Sushi Strefa reprezentuje idealne połączenie tradycyjnego japońskiego rzemiosła z nowoczesnymi innowacjami kulinarnymi. Nasza podróż rozpoczęła się od prostej misji: przynieść autentyczne, wysokiej jakości sushi miłośnikom jedzenia, którzy doceniają sztukę wyjątkowej kuchni.
              </p>
              <p className="text-muted-foreground">
                Każdego dnia szanujemy wielowiekowe tradycje przygotowywania sushi, jednocześnie stale przekraczając granice smaku i prezentacji.
              </p>
            </div>
            <div className="relative">
              <img 
                src={chefImage}
                alt="Mistrz kuchni przygotowujący sushi"
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
              Nasze Główne Wartości
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te zasady kierują wszystkim, co robimy, od wyboru składników po obsługę klienta.
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
                alt="Premium selekcja sushi"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <Badge className="bg-accent text-accent-foreground w-fit">Mistrz Kuchni</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Hiroshi Tanaka
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Z ponad dwudziestoletnim doświadczeniem w świecie kulinarnym, Mistrz Kuchni Hiroshi Tanaka szkolił się pod okiem renomowanych mistrzów sushi w prestiżowej dzielnicy Tsukiji w Tokio. Jego oddanie perfekcji i głęboki szacunek dla tradycyjnych technik przyniosły mu uznanie jako jednego z najlepszych szefów kuchni sushi poza Japonią.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Szkolenie i Doświadczenie:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5 lat w programie uczniowskim u Jiro w Tokio</li>
                  <li>• Certyfikat Japan Sushi Academy</li>
                  <li>• Zwycięzca Międzynarodowego Konkursu Sushi 2018</li>
                  <li>• Wyróżniony w Culinary Masters Magazine</li>
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
              Nasze Osiągnięcia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uznanie, które odzwierciedla nasze zaangażowanie w doskonałość i zadowolenie klientów.
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
            Nasza Misja
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            "Tworzyć niezwykłe doświadczenia sushi, które honorują japońskie tradycje, jednocześnie zachwycając nowoczesne podniebienia. Wierzymy, że dobre jedzenie łączy ludzi, a każdy kawałek, który tworzymy, jest mostem między kulturami, pokoleniami i sercami."
          </p>
          <p className="text-lg text-white/80 italic">
            — Mistrz Kuchni Hiroshi Tanaka
          </p>
        </div>
      </section>
    </div>
  );
};