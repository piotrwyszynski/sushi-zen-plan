import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Skontaktuj Się z Nami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Masz pytania dotyczące naszego menu, chcesz złożyć specjalne zamówienie, czy po prostu chcesz przywitać się? Chętnie Cię wysłuchamy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Wyślij nam wiadomość</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      Imię *
                    </label>
                    <Input id="firstName" placeholder="Wprowadź swoje imię" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Nazwisko *
                    </label>
                    <Input id="lastName" placeholder="Wprowadź swoje nazwisko" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Adres Email *
                  </label>
                  <Input id="email" type="email" placeholder="Wprowadź swój email" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Numer Telefonu
                  </label>
                  <Input id="phone" type="tel" placeholder="Wprowadź swój numer telefonu" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Temat *
                  </label>
                  <Input id="subject" placeholder="Czego dotyczy wiadomość?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Wiadomość *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Opowiedz nam więcej o swoim zapytaniu..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full hero-gradient hover:shadow-glow-primary">
                  Wyślij Wiadomość
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Pola wymagane. Odpowiemy na Twoje zapytanie w ciągu 24 godzin.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Informacje Kontaktowe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Adres</p>
                    <p className="text-sm text-muted-foreground">
                      ul. Sushi 123<br />
                      Dzielnica Gastronomiczna, 12-345<br />
                      Warszawa, Polska
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <p className="text-sm text-muted-foreground">
                      +48 123 456 789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      kontakt@sushistrefa.pl
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Godziny Otwarcia</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Poniedziałek - Czwartek: 11:00 - 21:00</p>
                      <p>Piątek - Sobota: 11:00 - 22:00</p>
                      <p>Niedziela: 12:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Śledź Nas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Pozostań z nami w kontakcie w mediach społecznościowych, aby być na bieżąco z najnowszymi aktualizacjami, kulisami i specjalnymi ofertami.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Questions */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Szybkie Pytania?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground text-sm">Catering i Duże Zamówienia</p>
                    <p className="text-xs text-muted-foreground">Zadzwoń do nas co najmniej 24 godziny wcześniej</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Ograniczenia Dietetyczne</p>
                    <p className="text-xs text-muted-foreground">Poinformuj nas o alergiach podczas zamawiania</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Pytania o Dostawę</p>
                    <p className="text-xs text-muted-foreground">Dostępna w promieniu 15 km, opłata 9,99 zł</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-16 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Często Zadawane Pytania</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Jak świeże są Wasze ryby?</h3>
                  <p className="text-sm text-muted-foreground">
                    Otrzymujemy codziennie świeże dostawy ryb od zaufanych dostawców. Wszystkie owoce morza są przygotowywane tego samego dnia, w którym przybywają.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Czy oferujecie opcje wegetariańskie?</h3>
                  <p className="text-sm text-muted-foreground">
                    Tak! Mamy różnorodne wegetariańskie sushi, w tym rolki z ogórkiem, awokado i marynowanymi warzywami.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Czy mogę złożyć zamówienie na odbiór?</h3>
                  <p className="text-sm text-muted-foreground">
                    Oczywiście! Możesz złożyć zamówienie na odbiór online lub dzwoniąc do nas bezpośrednio. Średni czas przygotowania to 15-20 minut.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Czy obsługujecie wydarzenia?</h3>
                  <p className="text-sm text-muted-foreground">
                    Tak, oferujemy usługi cateringowe dla wydarzeń każdej wielkości. Skontaktuj się z nami co najmniej 24 godziny wcześniej, aby omówić Twoje potrzeby.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Jakie metody płatności akceptujecie?</h3>
                  <p className="text-sm text-muted-foreground">
                    Akceptujemy wszystkie główne karty kredytowe, PayPal, Apple Pay i gotówkę dla zamówień na odbiór.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Jak zapewniacie bezpieczeństwo żywności?</h3>
                  <p className="text-sm text-muted-foreground">
                    Nasza kuchnia przestrzega ścisłych wytycznych HACCP, a wszyscy pracownicy są szkoleni w zakresie bezpieczeństwa żywności. Prowadzimy dzienniki temperatur i korzystamy tylko z zatwierdzonych dostawców.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};