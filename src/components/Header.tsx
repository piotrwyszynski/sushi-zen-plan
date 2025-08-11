import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  Facebook,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const { count: cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/dc9a329e-cc15-42cf-9600-adde96ea9889.png" 
            alt="Sushi Strefa Logo" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            O nas
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Kontakt
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Szukaj sushi..." 
              className="pl-10 bg-muted border-border"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-2">
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

          {/* Mobile Search */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">
              <User className="h-4 w-4" />
            </Link>
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="sm" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/categories" className="text-lg font-medium hover:text-primary transition-colors">
                  Menu
                </Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-colors">
                  O nas
                </Link>
                <Link to="/blog" className="text-lg font-medium hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Kontakt
                </Link>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                        <span className="ml-2">Facebook</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="ml-2">Instagram</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-t border-border bg-background p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Szukaj sushi..." 
              className="pl-10 bg-muted border-border"
            />
          </div>
        </div>
      )}
    </header>
  );
};