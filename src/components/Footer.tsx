import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/dc9a329e-cc15-42cf-9600-adde96ea9889.png" 
              alt="Sushi Strefa Logo" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tworzymy wyjątkowe doświadczenia sushi z najświeższymi składnikami i tradycyjnymi technikami. Każdy kawałek opowiada historię jakości i pasji.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Szybkie Linki</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Nasze Menu
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                O Nas
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Blog
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Kontakt
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Obsługa Klienta</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Informacje o Dostawie
              </Link>
              <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Zwroty i Refundacje
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Polityka Prywatności
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Warunki Świadczenia Usług
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Pozostań w Kontakcie</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>kontakt@sushistrefa.pl</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>ul. Sushi 123, Warszawa</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <p className="text-xs text-muted-foreground">Otrzymuj aktualizacje o nowych pozycjach menu i specjalnych ofertach.</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Wprowadź swój email" 
                  className="bg-muted border-border text-sm"
                />
                <Button size="sm" className="hero-gradient">
                  Zapisz się
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2024 Sushi Strefa. Wszystkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              Stworzone z ❤️ dla miłośników sushi na całym świecie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};