import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

export const CheckoutPayment = () => {
  const navigate = useNavigate();
  const { paymentMethod, setPaymentMethod } = useCart();
  const [method, setMethod] = useState(paymentMethod ?? "cod");

  useEffect(() => {
    document.title = "Płatność – Sushi Strefa";
  }, []);

  const continueHandler = () => {
    setPaymentMethod(method as any);
    navigate("/checkout/summary");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Metoda płatności</h1>
          <p className="text-muted-foreground mt-2">Wybierz preferowaną metodę płatności.</p>
        </header>

        <main>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Opcje płatności</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={method} onValueChange={(v) => setMethod(v as "payu" | "cod")} className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="payu" id="payu" />
                    <label htmlFor="payu" className="text-sm">PayU – płatność online</label>
                  </div>
                  <Badge variant="secondary">Zewnętrzny operator</Badge>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="cod" id="cod" />
                    <label htmlFor="cod" className="text-sm">Płatność gotówką lub kartą przy odbiorze</label>
                  </div>
                  <Badge variant="secondary">Przy odbiorze</Badge>
                </div>
              </RadioGroup>

              {method === "payu" && (
                <p className="text-sm text-muted-foreground">
                  Integracja PayU wymaga kluczy API. Mogę ją dodać po przekazaniu danych do sandbox/produkcji.
                </p>
              )}

              <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <Link to="/checkout/address">Wróć do adresu</Link>
                </Button>
                <Button className="hero-gradient hover:shadow-glow-primary" onClick={continueHandler}>
                  {method === "payu" ? "Kontynuuj (PayU)" : "Przejdź do podsumowania"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CheckoutPayment;
