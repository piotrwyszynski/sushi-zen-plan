
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export const Cart = () => {
  const { items: cartItems, updateQuantity, removeItem } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  console.log("Cart: Obecne produkty w koszyku:", cartItems);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "sushi10") {
      setIsPromoApplied(true);
    }
  };

  const removePromoCode = () => {
    setIsPromoApplied(false);
    setPromoCode("");
  };

  const handleQuantityDecrease = (id: string, currentQuantity: number) => {
    console.log("Zmniejszanie ilości dla produktu:", id, "obecna ilość:", currentQuantity);
    updateQuantity(id, currentQuantity - 1);
  };

  const handleQuantityIncrease = (id: string, currentQuantity: number) => {
    console.log("Zwiększanie ilości dla produktu:", id, "obecna ilość:", currentQuantity);
    updateQuantity(id, currentQuantity + 1);
  };

  const handleRemoveItem = (id: string) => {
    console.log("Usuwanie produktu z koszyka:", id);
    removeItem(id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const delivery = subtotal > 200 ? 0 : 39.99;
  const total = subtotal - discount + tax + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Twój Koszyk Jest Pusty</h1>
            <p className="text-muted-foreground">
              Wygląda na to, że nie dodałeś jeszcze żadnego sushi do koszyka.
            </p>
          </div>
          <Button className="hero-gradient hover:shadow-glow-primary" asChild>
            <Link to="/categories">
              Przeglądaj Nasze Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        <div className="space-y-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Koszyk Zakupów</h1>
          <p className="text-muted-foreground">
            Sprawdź swoje zamówienie i przejdź do kasy, gdy będziesz gotowy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-32 h-32 flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {item.customizations && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {item.customizations.map((custom, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {custom}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium text-foreground w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityIncrease(item.id, item.quantity)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-foreground">
                            {(item.price * item.quantity).toFixed(2)} zł
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Kod Promocyjny</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Wprowadź kod promocyjny"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                  />
                  <Button 
                    variant="outline" 
                    onClick={applyPromoCode}
                    disabled={isPromoApplied || !promoCode}
                  >
                    Zastosuj
                  </Button>
                </div>
                {isPromoApplied && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-500 text-white">Zastosowano</Badge>
                      <span className="text-sm text-green-600">SUSHI10 - 10% zniżki</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removePromoCode}
                      className="text-destructive hover:text-destructive"
                    >
                      Usuń kod
                    </Button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  Spróbuj kodu "SUSHI10" na 10% zniżki na zamówienie
                </p>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Podsumowanie Zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Suma częściowa</span>
                    <span className="text-foreground">{subtotal.toFixed(2)} zł</span>
                  </div>
                  
                  {isPromoApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Zniżka (10%)</span>
                      <span className="text-green-600">-{discount.toFixed(2)} zł</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Podatek</span>
                    <span className="text-foreground">{tax.toFixed(2)} zł</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dostawa</span>
                    <span className="text-foreground">
                      {delivery === 0 ? "GRATIS" : `${delivery.toFixed(2)} zł`}
                    </span>
                  </div>
                  
                  {delivery === 0 && (
                     <p className="text-xs text-green-600">
                       Darmowa dostawa przy zamówieniach powyżej 200 zł!
                     </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Razem</span>
                  <span className="text-foreground">{total.toFixed(2)} zł</span>
                </div>

                <Button className="w-full hero-gradient hover:shadow-glow-primary" asChild>
                  <Link to="/checkout">
                    Przejdź do Kasy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/categories">
                    Kontynuuj Zakupy
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Informacje o Dostawie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Szacowana dostawa:</span>
                    <span className="text-foreground">25-35 minut</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Obszar dostawy:</span>
                    <span className="text-foreground">W promieniu 15 km</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Wszystkie sushi są przygotowywane na świeżo na zamówienie i starannie pakowane, aby zachować jakość podczas dostawy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
