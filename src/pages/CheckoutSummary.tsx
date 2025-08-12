import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

export const CheckoutSummary = () => {
  const navigate = useNavigate();
  const { items, address, paymentMethod } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Podsumowanie – Sushi Strefa";
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const delivery = subtotal > 200 ? 0 : 39.99;
  const total = subtotal + tax + delivery;

  const placeOrder = () => {
    toast({ title: "Zamówienie", description: "Finalizacja zamówienia w przygotowaniu." });
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Podsumowanie zamówienia</h1>
          <p className="text-muted-foreground mt-2">Sprawdź dane przed złożeniem zamówienia.</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Adres i kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                {address ? (
                  <div>
                    <p><strong>{address.fullName}</strong></p>
                    <p>{address.phone} • {address.email}</p>
                    <p>{address.street} {address.building}{address.apartment ? "/" + address.apartment : ""}</p>
                    <p>{address.postalCode} {address.city}</p>
                    <p>Sposób: {address.deliveryMethod === "delivery" ? "Dostawa" : "Odbiór osobisty"}</p>
                    {address.notes && <p>Uwagi: {address.notes}</p>}
                    <Button variant="outline" size="sm" className="mt-3" asChild>
                      <Link to="/checkout/address">Edytuj adres</Link>
                    </Button>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Brak danych adresowych.</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Metoda płatności</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>
                  {paymentMethod === "payu"
                    ? "PayU – płatność online (wymaga integracji)"
                    : "Gotówka lub karta przy odbiorze"}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/checkout/payment">Zmień metodę</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Podsumowanie płatności</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Suma częściowa</span><span>{subtotal.toFixed(2)} zł</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Podatek</span><span>{tax.toFixed(2)} zł</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Dostawa</span><span>{delivery === 0 ? "GRATIS" : `${delivery.toFixed(2)} zł`}</span></div>
                <Separator />
                <div className="flex justify-between text-lg font-bold"><span>Razem</span><span>{total.toFixed(2)} zł</span></div>
                <Button className="w-full hero-gradient hover:shadow-glow-primary" onClick={placeOrder}>Złóż zamówienie</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/cart">Wróć do koszyka</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default CheckoutSummary;
