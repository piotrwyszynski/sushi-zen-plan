import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  isNew,
  isPopular,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({ id, name, description, price, image }, 1);
    toast({
      title: "Dodano do koszyka",
      description: `${name} został dodany do koszyka.`,
    });
    setTimeout(() => {
      setIsAdding(false);
    }, 400);
  };
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-glow-primary transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {isPopular && (
            <Badge className="bg-primary text-primary-foreground">Popular</Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? 'text-primary' : 'text-muted-foreground'
          } hover:text-primary transition-colors`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-accent text-accent' 
                    : 'text-muted-foreground'
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({rating})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">
              {price.toFixed(2)} zł
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice.toFixed(2)} zł
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full hero-gradient hover:shadow-glow-primary"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isAdding ? 'Dodawanie...' : 'Dodaj do koszyka'}
        </Button>
      </CardFooter>
    </Card>
  );
};