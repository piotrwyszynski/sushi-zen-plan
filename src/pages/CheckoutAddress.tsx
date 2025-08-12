import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCart } from "@/context/CartContext";

const AddressSchema = z.object({
  fullName: z.string().min(3, "Wpisz imię i nazwisko"),
  phone: z.string().min(7, "Wpisz numer telefonu"),
  email: z.string().email("Niepoprawny email"),
  street: z.string().min(2, "Ulica jest wymagana"),
  building: z.string().min(1, "Nr budynku"),
  apartment: z.string().optional(),
  city: z.string().min(2, "Miasto jest wymagane"),
  postalCode: z.string().min(4, "Kod pocztowy"),
  notes: z.string().optional(),
  deliveryMethod: z.enum(["delivery", "pickup"]),
});

export const CheckoutAddress = () => {
  const navigate = useNavigate();
  const { address, setAddress } = useCart();

  useEffect(() => {
    document.title = "Adres dostawy – Sushi Strefa";
  }, []);

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: address ?? {
      fullName: "",
      phone: "",
      email: "",
      street: "",
      building: "",
      apartment: "",
      city: "",
      postalCode: "",
      notes: "",
      deliveryMethod: "delivery",
    },
  });

  const onSubmit = (values: z.infer<typeof AddressSchema>) => {
    setAddress(values as any);
    navigate("/checkout/payment");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Adres zamawiającego</h1>
          <p className="text-muted-foreground mt-2">Podaj dane dostawy lub odbioru osobistego.</p>
        </header>

        <main>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Dane adresowe</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField name="fullName" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Imię i nazwisko</FormLabel>
                      <FormControl>
                        <Input placeholder="Jan Kowalski" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="123 456 789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="email" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jan@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="street" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Ulica</FormLabel>
                      <FormControl>
                        <Input placeholder="ul. Kwiatowa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="building" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nr budynku</FormLabel>
                      <FormControl>
                        <Input placeholder="12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="apartment" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nr lokalu (opcjonalnie)</FormLabel>
                      <FormControl>
                        <Input placeholder="5A" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="city" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Miasto</FormLabel>
                      <FormControl>
                        <Input placeholder="Warszawa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="postalCode" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kod pocztowy</FormLabel>
                      <FormControl>
                        <Input placeholder="00-001" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="deliveryMethod" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Sposób dostawy</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="delivery" id="delivery" />
                            <label htmlFor="delivery" className="text-sm">Dostawa</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pickup" id="pickup" />
                            <label htmlFor="pickup" className="text-sm">Odbiór osobisty</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField name="notes" control={form.control} render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Uwagi do zamówienia (opcjonalnie)</FormLabel>
                      <FormControl>
                        <Input placeholder="Instrukcje dla dostawcy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="md:col-span-2 flex gap-3">
                    <Button variant="outline" asChild>
                      <Link to="/cart">Powrót do koszyka</Link>
                    </Button>
                    <Button type="submit" className="hero-gradient hover:shadow-glow-primary">Przejdź do płatności</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CheckoutAddress;
