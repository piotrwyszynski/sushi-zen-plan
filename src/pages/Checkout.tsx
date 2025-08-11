import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Checkout = () => {
  useEffect(() => {
    document.title = "Kasa – Sushi Strefa";
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Kasa</h1>
          <p className="text-muted-foreground mt-2">Sfinalizuj swoje zamówienie.</p>
        </header>

        <main>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Kasa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Moduł kasy jest w przygotowaniu. Wróć do koszyka, aby edytować zamówienie.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild>
                  <Link to="/cart">Powrót do koszyka</Link>
                </Button>
                <Button className="hero-gradient hover:shadow-glow-primary" asChild>
                  <Link to="/categories">Kontynuuj zakupy</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
