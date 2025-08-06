import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import nigiriImage from "@/assets/nigiri-set.jpg";
import makiImage from "@/assets/maki-collection.jpg";
import heroImage from "@/assets/hero-sushi.jpg";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  customizations?: string[];
}

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Nigiri Set",
      description: "A carefully curated selection of our finest nigiri",
      price: 24.99,
      image: nigiriImage,
      quantity: 2,
    },
    {
      id: "2",
      name: "Signature Maki Collection",
      description: "An assortment of our most popular maki rolls",
      price: 32.99,
      image: makiImage,
      quantity: 1,
      customizations: ["Extra wasabi", "No pickled ginger"],
    },
    {
      id: "3",
      name: "Chef's Special Platter",
      description: "Our master chef's daily selection",
      price: 45.99,
      image: heroImage,
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "sushi10") {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const delivery = subtotal > 50 ? 0 : 3.99;
  const total = subtotal - discount + tax + delivery;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Your Cart is Empty</h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any sushi to your cart yet.
            </p>
          </div>
          <Button className="hero-gradient hover:shadow-glow-primary" asChild>
            <Link to="/categories">
              Browse Our Menu <ArrowRight className="ml-2 h-4 w-4" />
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground">
            Review your order and proceed to checkout when ready.
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
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
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
                <CardTitle className="text-lg">Promo Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                  />
                  <Button 
                    variant="outline" 
                    onClick={applyPromoCode}
                    disabled={isPromoApplied || !promoCode}
                  >
                    Apply
                  </Button>
                </div>
                {isPromoApplied && (
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500 text-white">Applied</Badge>
                    <span className="text-sm text-green-600">SUSHI10 - 10% off</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  Try code "SUSHI10" for 10% off your order
                </p>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {isPromoApplied && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Discount (10%)</span>
                      <span className="text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-foreground">
                      {delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {delivery === 0 && (
                    <p className="text-xs text-green-600">
                      Free delivery on orders over $50!
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${total.toFixed(2)}</span>
                </div>

                <Button className="w-full hero-gradient hover:shadow-glow-primary">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/categories">
                    Continue Shopping
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated delivery:</span>
                    <span className="text-foreground">25-35 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery area:</span>
                    <span className="text-foreground">Within 10 miles</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  All sushi is prepared fresh to order and carefully packaged to maintain quality during delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};